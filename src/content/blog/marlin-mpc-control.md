---
title: "Marlin 与 3D 打印热端模型预测控制（MPC）实现原理分析"
description: "对比传统 PID 反馈控制，分析基于系统仿真模型的 MPC 模型预测温控方法，解决热端大热惯性与动态扰动补偿问题。"
pubDate: "2026-07-25"
heroImage: "/fig-temp-comparison.png"
badge: "控制算法"
tags: ["MPC", "模型预测控制", "Marlin", "温控"]
---


## 背景

Marlin 等控制系统中的温度通常由 PID 算法控制。PID 算法基于比例 - 积分 - 微分（Proportional-Integral-Derivative）控制项构建反馈回路。其工作原理是，实测温度与目标温度（设定值）的偏差越大，对输出功率的校正幅度就越大。

若能为 PID 提供完美的温度测量数据，在可预测的稳态下，它应能实现理想控制。但温度传感器存在延迟和噪声问题，PID 控制还可能难以应对温度的快速变化，实际应用中会导致温度超调与振荡。

模型预测控制（MPC）采用了不同的思路。它不依据实测温度进行控制，而是维护一个系统仿真模型，通过模拟热端温度来规划最优输出功率。该仿真无噪声、无延迟，可实现近乎完美的控制，还能直接补偿挤出速度和零件冷却带来的影响。

为防止仿真系统状态与实际热端状态偏离，仿真温度会持续向传感器测量值校准。尽管这会给仿真系统引入少量噪声和延迟，但影响远小于 PID 算法。

通过 `M306` 指令进行配置。

## 优势



* 配置简单

* 运行稳定

* 响应迅速

* 控制实际热端温度，而非传感器温度

* 可轻松建模零件冷却风扇和耗材的热损耗，无需启用 `PID_EXTRUSION_SCALING` 和 `PID_FAN_SCALING`

## 配置步骤



1. 在 `Configuration.h` 中禁用 `PIDTEMP` 并启用 `MPCTEMP`

2. 在 `MPC_HEATER_POWER` 中设置加热器功率

3. 确保 `MPC_TUNING_POS` 预留足够空间，避免热端与打印床碰撞。调优时打印机将先归位，再将热端定位至打印床正上方，理想 Z 轴高度接近第一层打印高度

4. 安装固件并运行 `M306 T` 指令，对当前激活的热端进行调优（注意观察喷嘴上的冷却料块，避免与打印床碰撞）

5. 使用 `M500` 指令保存 MPC 常数，或直接在 `Configuration.h` 中设置

6. 设定热端温度进行测试

### `M306 T` 指令输出示例



```
MPC Autotune start for E0

Cooling to ambient

Heating to over 200C

Measuring ambient heat-loss at 209.64

MPC Autotune finished! Put the constants below into Configuration.h

MPC\_BLOCK\_HEAT\_CAPACITY 18.42

MPC\_SENSOR\_RESPONSIVENESS 0.2176

MPC\_AMBIENT\_XFER\_COEFF 0.0664

MPC\_AMBIENT\_XFER\_COEFF\_FAN255 0.0998
```

`M306` 指令也可在运行时修改常数。

## 高级配置



* `MPC_FAN_0_ALL_HOTENDS` 和 `MPC_FAN_0_ACTIVE_HOTEND`：Marlin 默认风扇 N 为热端 N 打印的零件冷却。但部分多热端设备仅配备一个风扇，此时需通过这两个选项指定冷却风扇是同时冷却所有热端，还是仅冷却当前激活的热端

* `FILAMENT_HEAT_CAPACITY_PERMM`：MPC 会建模耗材熔化过程中的热损耗，在此设置耗材的热容量

* `MPC_SMOOTHING_FACTOR`、`MPC_MIN_AMBIENT_CHANGE` 和 `MPC_STEADYSTATE`：可调整这些参数以提升稳定性，详见算法说明

## 耗材热容量

Marlin 需要知道将 1 毫米长的耗材升温 1°C（或 1 开尔文，两者等价）所需的能量（单位：焦耳）。该值可通过材料的比热容和密度计算得出。

以 ABS 材料为例，通过网络搜索可获取以下近似值：



| 特性  | 数值                  |
| --- | ------------------- |
| 比热容 | 2 焦耳 / 克・开尔文（J/g/K） |
| 密度  | 1.07 克 / 毫升（g/ml）   |

注：比热容的单位表示方式多样，但含义通常一致。开尔文（K）与摄氏度（°C）等价，千焦 / 千克（kJ/kg）与焦耳 / 克（J/g）或 1000 焦耳 / 克（1000 J/g）等价。

对于 1.75 毫米直径的耗材，1 毫米长度的体积计算如下：

$0.1\ \text{cm} \times \pi \times (0.175\ \text{cm})^2 / 4 = 0.00241\ \text{ml/mm}$

计算过程：



1. 体积 × 密度 = $0.00241\ \text{ml/mm} \times 1.07\ \text{g/ml} = 0.00257\ \text{g/mm}$

2. 质量 × 比热容 = $0.00257\ \text{g/mm} \times 2\ \text{J/g/K} = 0.00515\ \text{J/K/mm}$

以下是几种常用耗材的近似热容量（每毫米）：



| 材料        | 1.75 毫米耗材数值    | 2.85 毫米耗材数值   |
| --------- | -------------- | ------------- |
| ABS       | 0.00515 J/K/mm | 0.0137 J/K/mm |
| 尼龙（Nylon） | 0.00522 J/K/mm | 0.0138 J/K/mm |
| PETG      | 0.0036 J/K/mm  | 0.0094 J/K/mm |
| PLA       | 0.0056 J/K/mm  | 0.0149 J/K/mm |

## MPC 参数调整

部分用户可通过高级配置选项提升稳定性，但调整 MPC 最常见的原因是设定温度与实际温度存在固定偏差。

MPC 算法会随时间消除该偏差，但当风扇转速等参数变化时，偏差可能重现。这种固定偏差通常由 `MPC_AMBIENT_XFER_COEFF`、`MPC_AMBIENT_XFER_COEFF_FAN255` 和 / 或 `FILAMENT_HEAT_CAPACITY_PERMM` 导致：



* 略微增大这些数值，会提高 MPC 的稳定温度

* 略微减小这些数值，会降低稳定温度

## Marlin 的 MPC 算法

MPC 将热端系统建模为四个热质量体：环境空气、耗材、加热块和传感器。

### 热量传递逻辑



* 加热器功率直接为建模的加热块加热

* 环境空气对加热块进行加热或冷却

* 耗材对加热块进行冷却

* 加热块对传感器进行加热或冷却

### 算法运行流程

MPC 算法每次运行时，会利用以下信息计算仿真热端和传感器的新温度：



1. 热端的上一次功率设置

2. 环境温度的当前最佳估计值

3. 风扇对环境空气热损耗的影响

4. 耗材进给速度对耗材热损耗的影响（假设耗材与环境温度相同）

计算完成后，将仿真传感器温度与实测温度进行对比，并将差值的一部分添加到建模的传感器和加热块温度中，使仿真系统向实际系统靠拢。

由于仅应用差值的一部分，传感器噪声会被削弱并随时间趋于零。仿真传感器与实际传感器的延迟相同（或非常接近），因此对比时延迟的影响会被抵消，仿真热端受传感器噪声和延迟的影响极小 —— 这正是该 MPC 实现的核心优势。

### 关键参数说明



* `MPC_SMOOTHING_FACTOR`：用于调节仿真与实测传感器温度的差值权重。最大值为 1 时，仿真传感器温度会持续与实测温度保持一致；数值越低，MPC 输出功率的稳定性越强，但响应速度会变慢，0.25 左右是较为理想的取值

* `MPC_STEADYSTATE`：用于识别渐近状态。当连续两次算法运行中，仿真热端温度的绝对变化率低于该值时，将启用稳态逻辑。算法运行频率较高（AVR 主板上为每秒 6 次），即使少量噪声也可能导致瞬时温度变化率较高，实际应用中 1°C/s 是较为合适的取值

* `MPC_MIN_AMBIENT_CHANGE`：稳态下，实测与仿真传感器温度的差值会用于调整环境温度估计值。当温度非常接近时，该参数可确保仿真环境温度快速收敛。数值越大，收敛速度越快，但可能导致仿真环境温度在理想值附近不规则波动 —— 这一影响无需担心，因为环境温度的作用较小，即使短期波动 10°C 以上也不会产生明显影响

注：只有当环境传热系数完全准确时，仿真环境温度才能收敛到实际环境温度。实际应用中难以达到这一条件，因此仿真环境温度也会对这些误差进行修正。

最终，MPC 算法会根据新的温度数据，计算未来两秒内将加热块加热至目标温度所需的功率（已考虑环境空气和耗材加热的预期热损耗），并将该功率值转换为 PWM 输出。

## 模型理论与调优算法

仿真热端模型并非热端的物理精确表示，但足以满足使用需求。实际差异包括：



* 真实加热元件是独立的热质量体，与加热块之间存在一定的热绝缘

* 真实加热块由散热器冷却，散热器会缓慢升温至渐近温度

* 真实温度传感器会对加热块产生微小的加热或冷却作用

这些影响均不足以影响 MPC 的正常工作，因此为简化计算并提升性能，算法中未考虑这些因素。

### 核心微分方程

模型由以下简单微分方程控制：

$\frac{dT_b}{dt} = \frac{P + h_a \cdot (T_a - T_b)}{C_b} \tag{1}$

$\frac{dT_s}{dt} = \frac{h_s \cdot (T_b - T_s)}{C_s} \tag{2}$

#### 变量说明



* $T_b$：加热块温度

* $T_s$：传感器温度

* $T_a$：环境温度

* $t$：时间

* $P$：加热器功率

* $h_a$：加热块到环境的传热系数（整合了风扇转速和耗材进给速度的影响，通过 `MPC_AMBIENT_XFER_COEFF`、`MPC_AMBIENT_XFER_COEFF_FAN255` 和 `FILAMENT_HEAT_CAPACITY_PERMM` 计算得出；假设室内空气和未熔化耗材处于相同环境温度）

* $h_s$：加热块到传感器的传热系数

* $C_b$：加热块的热容量（即 `MPC_BLOCK_HEAT_CAPACITY`）

* $C_s$：传感器的热容量

由于$h_s$和$C_s$从不单独出现，它们被合并为一个常数 `MPC_SENSOR_RESPONSIVENESS`，其值为 $\frac{h_s}{C_s}$。

MPC 通过数值解法持续求解这些微分方程，以计算实现特定加热块温度所需的加热器功率。确定上述变量的方法有两种：



1. 确定给定功率下的渐近温度（渐近法）

2. 测量给定功率下的温度变化率（微分法）

### 自动渐近调优

`M306 T` 指令默认使用以下方程的解析解：

$T_b = T_{\text{asymp}} + (T_a - T_{\text{asymp}}) \cdot e^{-\alpha_b \cdot t} \tag{3}$

$T_s = T_{\text{asymp}} + (T_a - T_{\text{asymp}}) \cdot \frac{\alpha_s \cdot e^{-\alpha_b \cdot t} - \alpha_b \cdot e^{-\alpha_s \cdot t}}{\alpha_s - \alpha_b} \tag{4}$

#### 变量说明



* $T_{\text{asymp}} = T_a + \frac{P}{h_a}$：热端的渐近温度

* $\alpha_b = \frac{h_a}{C_b}$：加热块对环境温度的 “响应性”

* $\alpha_s = \frac{h_s}{C_s}$：传感器对加热块温度的 “响应性”（即 `MPC_SENSOR_RESPONSIVENESS`）

* 假设初始条件 $T_s(0) = T_b(0) = T_a$

在实际系统中，$\alpha_s \gg \alpha_b$。因此，在初始延迟效应过后（通常当 $T_s > 100^\circ\text{C}$ 时），第二个方程可近似为：

$T_s \approx T_{\text{asymp}} + (T_a - T_{\text{asymp}}) \cdot \frac{\alpha_s \cdot e^{-\alpha_b \cdot t}}{\alpha_s - \alpha_b} \tag{5}$

这使得测量 $T_{\text{asymp}}$ 变得简单，进而可计算出 $\alpha_b$（最终得到 $h_a$ 和 $C_b$）以及 $\alpha_s$。

通过上述方程可推导得出：

$\frac{T_s(t+\Delta t) - T_{\text{asymp}}}{T_s(t) - T_{\text{asymp}}} = e^{-\alpha_b \cdot \Delta t} \tag{6}$

$\frac{T_s(t+2\Delta t) - T_{\text{asymp}}}{T_s(t+\Delta t) - T_{\text{asymp}}} = e^{-\alpha_b \cdot \Delta t} \tag{7}$

联立可得：

$\frac{T_s(t+2\Delta t) - T_{\text{asymp}}}{T_s(t+\Delta t) - T_{\text{asymp}}} = \frac{T_s(t+\Delta t) - T_{\text{asymp}}}{T_s(t) - T_{\text{asymp}}} \tag{8}$

整理后：

$T_{\text{asymp}} = \frac{T_s(t+\Delta t)^2 - T_s(t+2\Delta t) \cdot T_s(t)}{2 \cdot T_s(t+\Delta t) - T_s(t+2\Delta t) - T_s(t)} \tag{11}$

利用 $T_{\text{asymp}} = T_a + \frac{P}{h_a}$，可得出：

$h_a = \frac{P}{T_{\text{asymp}} - T_a} \tag{12}$

通过方程 (6) 可得：

$\alpha_b = -\frac{\ln\left( \frac{T_s(t+\Delta t) - T_{\text{asymp}}}{T_s(t) - T_{\text{asymp}}} \right)}{\Delta t} \tag{13}$

利用 $\alpha_b = \frac{h_a}{C_b}$，可得出：

$C_b = \frac{h_a}{\alpha_b} \tag{14}$

通过方程 (5) 可求解 $\alpha_s$：

$\alpha_s = \alpha_b \cdot \frac{T_s(t) - T_{\text{asymp}}}{T_s(t) - T_{\text{asymp}} - (T_a - T_{\text{asymp}}) \cdot e^{-\alpha_b \cdot t}} \tag{15}$

`M306 T` 指令会找到满足条件的 $t$ 和 $\Delta t$，获取 $T_s(t)$、$T_s(t+\Delta t)$ 和 $T_s(t+2\Delta t)$ 的传感器测量值，代入上述方程计算 $h_a$（即 `MPC_AMBIENT_XFER_COEFF`）、$C_b$（即 `MPC_BLOCK_HEAT_CAPACITY`）和 $\alpha_s$（即 `MPC_SENSOR_RESPONSIVENESS`）。

### 自动微分调优

若渐近调优失败，或通过 `M306 T S1` 指令强制启用微分调优，自动调优将采用以下算法：

当加热块从环境温度开始升温时，测得的最大升温速率 $R_f$ 可近似为环境热损耗产生显著影响前的加热块升温速率。利用 $R_f$ 可计算 `MPC_BLOCK_HEAT_CAPACITY`（单位：J/K）：

$C_b = \frac{P}{R_f} \tag{16}$

此外，最大升温速率对应的传感器温度 $T_f$ 和时间 $t_f$ 可用于计算 `MPC_SENSOR_RESPONSIVENESS`（单位：K/s/K）。$t_f$ 时刻加热块的温度约为 $R_f \cdot t_f + T_{s0}$，因此：

$\alpha_s = \frac{R_f}{R_f \cdot t_f + T_{s0} - T_f} \tag{17}$

其中 $T_{s0} = T_a = 初始环境温度$。

### 传热系数

通过渐近调优或微分调优确定 $h_a$、$C_b$ 和 $\alpha_s$ 后，MPC 会将这些值用于目标温度控制，同时测量热损耗，以获取 `MPC_AMBIENT_XFER_COEFF_FAN255` 并优化 `MPC_AMBIENT_XFER_COEFF` 的估计值。

## `M306 T` 指令详细说明

调优算法对目标热端执行以下操作：



1. 移动至打印床中心附近：打印过程中热端靠近打印床或打印模型，因此调优也在靠近表面的位置进行，以最佳模拟打印环境

2. 冷却至环境温度：调优算法需要知道近似环境温度，会开启零件冷却风扇并等待温度停止下降

3. 加热至 200°C 以上：测量温度上升最快的点及其对应的时间和温度，同时在初始延迟效应过后获取三组温度测量数据

4. 恒温并测量环境热损耗：此时 MPC 算法已具备足够参数，调优算法会预估 200°C 以上的超调温度，将热端维持在该温度约一分钟，期间测量无风扇（可选有风扇）状态下的环境热损耗

5. 配置 MPC 并输出常数：将测量得到的常数应用于 MPC，并输出供 `Configuration.h` 使用的参数

注：若算法失败或被 `M108` 指令中断，部分或全部 MPC 常数可能已被修改，其数值可能不可靠。



***

要不要我帮你整理一份**MPC 配置快速参考手册**，包含核心参数、调优步骤和常见问题排查？

> （注：文档部分内容可能由 AI 生成）