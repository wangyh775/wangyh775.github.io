---
title: "Klipper PID 自动调参原理与代码实现详解"
description: "详细介绍 Klipper 中基于继电反馈法（Relay Feedback）的 PID 参数自动整定算法机制，以及代码分析与配置使用指南。"
pubDate: "2026-07-15"
heroImage: "/fig-klipper-pid.svg"
badge: "3D打印控制"
tags: ["Klipper", "PID", "温控", "嵌入式"]
---


## 概述

PID（比例-积分-微分）控制是3D打印机温度控制系统中广泛使用的一种控制算法。Klipper提供了自动PID调参功能，可以自动确定加热器的最佳PID参数，确保温度控制的稳定性和响应速度。本文档详细介绍了Klipper中PID自动调参的实现原理、配置方法和使用指南。

## PID控制原理

PID控制器通过以下三个部分来调节系统输出：

1. **比例项 (P)**：基于当前误差的大小进行调节
2. **积分项 (I)**：基于误差累积进行调节，消除稳态误差
3. **微分项 (D)**：基于误差变化率进行调节，预测系统行为

在Klipper中，PID参数表示为：
- `Kp`：比例增益
- `Ki`：积分增益
- `Kd`：微分增益

## 自动调参实现机制

### 继电反馈法（Relay Feedback Method）

Klipper使用继电反馈法进行PID参数自动整定，该方法通过以下步骤实现：

1. **强制振荡**：通过控制加热器在全功率和零功率之间切换，使系统温度在目标值附近产生持续振荡
2. **数据采集**：记录温度振荡过程中的峰值和周期
3. **参数计算**：使用Ziegler-Nichols方法从采集的数据中计算PID参数

### 控制算法实现

在[pid_calibrate.py](file:///d:/a_project/h_tem3dprinter/klipper/klippy/extras/pid_calibrate.py)文件中，`ControlAutoTune`类实现了自动调参的核心逻辑：

```python
class ControlAutoTune:
    def __init__(self, heater, target):
        self.heater = heater
        self.heater_max_power = heater.get_max_power()
        self.calibrate_temp = target
        # 加热控制
        self.heating = False
        self.peak = 0.
        self.peak_time = 0.
        # 峰值记录
        self.peaks = []
        # 采样记录
        self.last_pwm = 0.
        self.pwm_samples = []
        self.temp_samples = []
```

### 温度更新和峰值检测

```python
def temperature_update(self, read_time, temp, target_temp):
    self.temp_samples.append((read_time, temp))
    # 检查温度是否超过目标温度，控制加热器开关
    if self.heating and temp >= target_temp:
        self.heating = False
        self.check_peaks()
        self.heater.alter_target(self.calibrate_temp - TUNE_PID_DELTA)
    elif not self.heating and temp <= target_temp:
        self.heating = True
        self.check_peaks()
        self.heater.alter_target(self.calibrate_temp)
    # 记录温度峰值
    if self.heating:
        self.set_pwm(read_time, self.heater_max_power)
        if temp < self.peak:
            self.peak = temp
            self.peak_time = read_time
    else:
        self.set_pwm(read_time, 0.)
        if temp > self.peak:
            self.peak = temp
            self.peak_time = read_time
```

### PID参数计算

```python
def calc_pid(self, pos):
    temp_diff = self.peaks[pos][0] - self.peaks[pos-1][0]
    time_diff = self.peaks[pos][1] - self.peaks[pos-2][1]
    # 使用Astrom-Hagglund方法估算Ku和Tu
    amplitude = .5 * abs(temp_diff)
    Ku = 4. * self.heater_max_power / (math.pi * amplitude)
    Tu = time_diff
    # 使用Ziegler-Nichols方法生成PID参数
    Ti = 0.5 * Tu
    Td = 0.125 * Tu
    Kp = 0.6 * Ku * heaters.PID_PARAM_BASE
    Ki = Kp / Ti
    Kd = Kp * Td
    logging.info("Autotune: raw=%f/%f Ku=%f Tu=%f  Kp=%f Ki=%f Kd=%f",
                 temp_diff, self.heater_max_power, Ku, Tu, Kp, Ki, Kd)
    return Kp, Ki, Kd
```

## 参数估算方法详解

### Astrom-Hagglund方法估算Ku和Tu

Astrom-Hagglund方法是一种用于估算系统临界增益(Ku)和临界周期(Tu)的技术。在继电反馈测试中：

1. **临界增益 Ku 的估算**：
   $$K_u = \frac{4 \cdot d}{\pi \cdot a}$$
   
   其中：
   - $d$ 是加热器的输出功率（在Klipper中为 heater_max_power）
   - $a$ 是温度振荡的幅度（即峰值温度差的一半）

2. **临界周期 Tu 的估算**：
   $$T_u = T_{cycle}$$
   
   其中 $T_{cycle}$ 是温度振荡的周期，通过测量连续峰值之间的时间差获得。

### Ziegler-Nichols方法生成PID参数

Ziegler-Nichols方法基于获得的临界增益(Ku)和临界周期(Tu)计算PID控制器参数：

1. **比例项系数**：
   $$K_p = 0.6 \cdot K_u$$

2. **积分时间常数**：
   $$T_i = 0.5 \cdot T_u$$
   
   积分项系数：
   $$K_i = \frac{K_p}{T_i}$$

3. **微分时间常数**：
   $$T_d = 0.125 \cdot T_u$$
   
   微分项系数：
   $$K_d = K_p \cdot T_d$$

在Klipper中，这些参数会进一步调整以适应其内部表示：
- 最终的Kp值会乘以PID_PARAM_BASE（通常为255）
- Ki和Kd值保持为系数形式

## 正常运行时的PID控制

在正常运行时，加热器使用[ControlPID](file:///d:/a_project/h_tem3dprinter/klipper/klippy/extras/heaters.py#L190-L239)类进行温度控制：

```python
class ControlPID:
    def __init__(self, heater, config):
        self.heater = heater
        self.heater_max_power = heater.get_max_power()
        self.Kp = config.getfloat('pid_Kp') / PID_PARAM_BASE
        self.Ki = config.getfloat('pid_Ki') / PID_PARAM_BASE
        self.Kd = config.getfloat('pid_Kd') / PID_PARAM_BASE
        # ... 其他初始化代码

    def temperature_update(self, read_time, temp, target_temp):
        time_diff = read_time - self.prev_temp_time
        # 计算温度变化
        temp_diff = temp - self.prev_temp
        if time_diff >= self.min_deriv_time:
            temp_deriv = temp_diff / time_diff
        else:
            temp_deriv = (self.prev_temp_deriv * (self.min_deriv_time-time_diff)
                          + temp_diff) / self.min_deriv_time
        # 计算累积温度"误差"
        temp_err = target_temp - temp
        temp_integ = self.prev_temp_integ + temp_err * time_diff
        temp_integ = max(0., min(self.temp_integ_max, temp_integ))
        # 计算输出
        co = self.Kp*temp_err + self.Ki*temp_integ - self.Kd*temp_deriv
        bounded_co = max(0., min(self.heater_max_power, co))
        self.heater.set_pwm(read_time, bounded_co)
        # 保存状态供下次测量使用
        self.prev_temp = temp
        self.prev_temp_time = read_time
        self.prev_temp_deriv = temp_deriv
        if co == bounded_co:
            self.prev_temp_integ = temp_integ
```

## 配置要求

要使用PID自动调参，加热器需要配置为PID控制模式：

```ini
[extruder]
sensor_type: EPCOS 100K B57560G104F
sensor_pin: PA0
control: pid
# 以下PID参数将通过自动调参获得
# pid_Kp: 22.2
# pid_Ki: 1.08
# pid_Kd: 114
min_temp: 0
max_temp: 250

[heater_bed]
sensor_type: EPCOS 100K B57560G104F
sensor_pin: PA1
control: pid
# 以下PID参数将通过自动调参获得
# pid_Kp: 45.0
# pid_Ki: 0.9
# pid_Kd: 560.0
min_temp: 0
max_temp: 130
```

## 使用方法

### 运行PID校准命令

使用`PID_CALIBRATE`命令进行PID自动调参：

```gcode
PID_CALIBRATE HEATER=extruder TARGET=200
PID_CALIBRATE HEATER=heater_bed TARGET=60
```

### 完整调参流程

1. **运行PID校准命令**：
   ```gcode
   PID_CALIBRATE HEATER=extruder TARGET=200
   ```

2. **等待校准完成**：系统会让加热器在全功率和零功率之间切换，直到温度稳定振荡

3. **查看结果**：校准完成后会显示类似以下的信息：
   ```
   PID parameters: pid_Kp=25.184 pid_Ki=1.144 pid_Kd=138.707
   The SAVE_CONFIG command will update the printer config file
   with these parameters and restart the printer.
   ```

4. **保存配置**：
   ```gcode
   SAVE_CONFIG
   ```

## 参数说明

- `HEATER`：指定要校准的加热器，通常是`extruder`或`heater_bed`
- `TARGET`：指定校准的目标温度
- `WRITE_FILE`（可选）：如果设置为1，会将校准数据写入文件供离线分析

## 注意事项

1. **安全考虑**：PID校准过程中温度会有较大波动，请确保打印区域没有易燃物品
2. **环境因素**：校准时应确保打印机处于正常工作环境，避免气流等外部因素干扰
3. **多次校准**：如果第一次校准结果不理想，可以重复进行校准以获得更精确的参数
4. **不同温度**：在不同温度下可能需要不同的PID参数，建议在常用温度点进行校准

## 故障排除

如果PID校准失败或结果不理想，可能的原因包括：

1. **温度传感器问题**：检查传感器连接和配置是否正确
2. **加热器功率不足**：检查加热器是否能正常工作并达到目标温度
3. **环境干扰**：确保校准过程中没有强气流或温度波动
4. **硬件问题**：检查加热器、传感器和相关电路是否正常

通过理解Klipper的PID自动调参机制，您可以更好地配置和优化3D打印机的温度控制系统，从而获得更稳定的打印质量和更快的温度响应速度。