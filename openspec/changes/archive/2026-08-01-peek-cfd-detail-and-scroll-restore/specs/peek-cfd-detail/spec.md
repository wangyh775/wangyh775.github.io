## Purpose

为面向 PEEK 的高温 FDM 挤出头流热耦合仿真项目提供独立的详情展示页面，展示仿真模型图、技术指标与数值计算流程。

## ADDED Requirements

### Requirement: PEEK CFD 仿真项目拥有独立详情页面

系统 SHALL 为 "面向PEEK的高温FDM喷头流热耦合仿真" 项目提供独立详情页面，路径为 `/projects/peek-cfd-simulation`。

#### Scenario: 访问 CFD 仿真详情页
- **WHEN** 用户访问 `/projects/peek-cfd-simulation`
- **THEN** 页面展示该项目的完整技术描述、仿真模型图、CFD 数值计算指标与相关论文链接

### Requirement: 详情页包含结构化内容区块

PEEK CFD 仿真详情页 MUST 包含以下内容区块：
1. **项目概述区**: 项目背景、目标（面向 PEEK 高温挤出的流热耦合仿真）
2. **技术指标区**: 入口温度、压力、喷嘴直径、PEEK 材料物性参数
3. **仿真结果区**: 展示 CFD 仿真结果图（`fig-cfd-simulation.png`）
4. **资源链接区**: 相关论文与 GitHub 代码仓库链接

#### Scenario: 访问仿真结果图片
- **WHEN** 用户查看 PEEK CFD 仿真详情页
- **THEN** 页面展示 `fig-cfd-simulation.png` 仿真结果图及关键仿真参数说明