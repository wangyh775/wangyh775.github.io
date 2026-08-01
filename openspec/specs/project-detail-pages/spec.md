## Purpose

为研究项目提供独立的详情展示页面,包含技术架构图、实验数据、设备照片和代码仓库链接,增强Research Portfolio的深度展示能力。

## ADDED Requirements

### Requirement: 核心项目拥有独立详情页面

系统 SHALL 为以下3个核心项目提供独立详情页面:
- MPC温控系统 (`/projects/mpc-thermal-control`)
- AI Agent智能切片系统 (`/projects/ai-agent-slicer`)
- 高温FDM设备 (`/projects/fdm-hardware`)

#### Scenario: 访问MPC温控详情页
- **WHEN** 用户访问 `/projects/mpc-thermal-control`
- **THEN** 页面展示该项目的完整技术描述、控制框图、实验结果数据和GitHub链接

#### Scenario: 访问AI切片系统详情页
- **WHEN** 用户访问 `/projects/ai-agent-slicer`
- **THEN** 页面展示AI Agent架构、与OrcaSlicer集成方式和技术栈

### Requirement: 项目详情页包含结构化内容区块

每个项目详情页面 MUST 包含以下结构化的内容区块:

1. **项目概述区**: 项目背景、目标和技术关键词
2. **技术架构区**: 系统架构图或流程图,说明技术路径
3. **成果展示区**: 实验数据、实物照片、仿真结果等可视化内容
4. **代码资源区**: GitHub仓库链接和相关资源

#### Scenario: MPC温控页包含实验数据
- **WHEN** 用户查看MPC温控详情页
- **THEN** 页面展示温控实验数据图(`fig-temp-comparison.png`)和控制架构图(`fig-control-framework.png`)

#### Scenario: 高温设备页展示实物照片
- **WHEN** 用户查看高温设备详情页
- **THEN** 页面展示设备实物照片(`fig-device.jpg`)和技术参数

### Requirement: 项目详情页保持全局视觉一致性

所有项目详情页面 MUST 使用相同的BaseLayout,保持一致的:
- 侧边栏导航(标记当前在Projects下)
- 头部和尾部样式
- 字体、配色和间距规范

#### Scenario: 在详情页中导航到首页
- **WHEN** 用户点击侧边栏的"首页"链接
- **THEN** 页面跳转到 `/`,保持相同的侧边栏样式

### Requirement: 项目列表页卡片提供"查看详情"入口

项目列表页 (`/projects`) 的每个卡片 SHALL 提供跳转至对应详情页面的链接。

#### Scenario: 从项目列表进入MPC温控详情页
- **WHEN** 用户在项目列表页点击"MPC温控"相关卡片
- **THEN** 页面跳转到 `/projects/mpc-thermal-control`

#### Scenario: 从首页进入项目详情页
- **WHEN** 用户在首页点击"代表性项目"区域的任意项目卡片
- **THEN** 页面跳转到对应的详情页(非GitHub仓库)