## Why

1. 首页原有的 4 个单薄数字统计框（EI论文1篇/发明专利1项）无法突出作者在“硬件装备研发、控制算法、工业软件与 AI Agent”全栈复合稀缺优势。
2. “开源/工程实践”在首页独立成块破坏了项目的统一视觉，且 JHTracker 卡片直接跳转 GitHub 外链，缺乏深入展示系统架构与设计哲学的独立详情页。
3. `D:\DJTU\HermesWorkspace\career-tracker\README.md` 包含极其丰富的 Agent-Native 架构图、HITL 人机闭环、36 个 MCP 工具与数据流拓扑，非常适合作为 JHTracker 的独立详情页。

## What Changes

- **首页优势面板重构 (方案 A)**: 将原 `stats` 数字面板替换为“三大核心研发能力柱”卡片展示：
  - 🛠️ **工业级装备全栈研发**: 500³mm / 450°C 自研设备、EPLAN 电气/结构设计、RK3588+STM32 分布式系统
  - 📐 **嵌入式控制与数值仿真**: NMPC + EKF 闭环温控算法、控温精度 ±1.0°C、PEEK 流热耦合 CFD 仿真
  - 🤖 **工业软件与 AI Agent**: OrcaSlicer 源码二次开发、LangGraph 切片智能体、36 个 MCP 架构工具
- **代表性项目结构调整**: 将 JHTracker 合并归入“代表性项目”列表中，统一管理；卡片 URL 改为跳转独立详情页 `/projects/jhtracker`
- **新建 JHTracker 详情页**: 创建 `src/pages/projects/jhtracker.astro`，完美呈现 README.md 中的 Agent-Native 架构拓扑、Mermaid 数据流图、HITL 闭环与 MCP 工具链

## Capabilities

### New Capabilities
- `jhtracker-detail-page`: JHTracker (Agent-Native 求职全流程管理工具) 的独立项目详情页面

### Modified Capabilities
- `homepage-hero-redesign`: 修改首页结构，将统计数据方块升级为“三大核心研发能力柱”卡片
- `project-detail-pages`: 将 JHTracker 纳为代表性项目详情页管理

## Impact

**受影响文件**:
- 新增 `src/pages/projects/jhtracker.astro`
- 修改 `src/pages/index.astro`
- 修改 `src/pages/projects.astro`
