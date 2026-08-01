## Context

See `proposal.md`. 当前 `src/pages/projects/fdm-hardware.astro` 页面内容较简略，缺少大论文第二章中的深度技术解构。

## Goals / Non-Goals

**Goals:**
- 将 `src/pages/projects/fdm-hardware.astro` 升级为 5 大区块构成的工程作品集级详情页
- 将大论文中 CoreXY 运动学、水冷热管理、RK3588+STM32 分布式系统、全域传感网络与 Klipper 固件二次开发技术细节充实入页面

**Non-Goals:**
- 不改变现有的全局 CSS 与 BaseLayout 机制

## Decisions

### 1. 页面 5 大区块布局

**决策**:
1. **Header & 顶部返回按钮**: 包含历史回退控件、标题、一句话英文副标题、技术 Badge (CoreXY, RK3588, STM32H7, Klipper, EPLAN)
2. **项目背景与工程需求**: 解读 PEEK/PEI 450°C 高温挤出与大尺寸热场控制痛点
3. **设备实物与硬件拓扑 (双卡片布局)**: 左侧展示 `fig-device.jpg` 实物图，右侧展示 `fig-hardware-topology.gif` 动态拓扑图
4. **4 大核心技术子系统 (网格卡片矩阵)**:
   - 🛠️ 机械与运动学架构（CoreXY 运动学、500³mm 成型空间、高刚性铝型材框架）
   - 🌡️ 热管理与热隔离设计（Phaetus Dragon 水冷热端、双重热屏障、150°C 恒温舱）
   - ⚡ 分布式电气与传感架构（RK3588 上位机 + STM32H7 运动控制、CAN/Modbus 全域传感网络）
   - 💻 固件与系统二次开发（Klipper + Moonraker 架构定制、模块化 CAN 总线通信扩展）
5. **详细技术规格表与相关资源**: 展示包含主控、驱动、传感器、加热系统等详细参数表与 GitHub 仓库链接
