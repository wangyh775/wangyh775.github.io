## Context

See `proposal.md`. 首页需将 `stats` 面板升级为“三大核心研发能力柱”卡片展示，并将开源项目 JHTracker 统一放入“代表性项目”列表，为其创建独立详情页 `/projects/jhtracker`。

## Goals / Non-Goals

**Goals:**
- 重构 `src/pages/index.astro` 优势数据面板为三大研发能力柱
- 新增 `src/pages/projects/jhtracker.astro` 详情页，基于 `career-tracker/README.md` 内容构建
- 更新 `index.astro` 与 `projects.astro` 中的 JHTracker 卡片 URL 为 `/projects/jhtracker`

**Non-Goals:**
- 不改变现有的全局 CSS 与 BaseLayout 样式机制

## Decisions

### 1. 首页三大核心研发能力柱结构设计

**决策**: 在 `index.astro` 替换原 `stats` 区域为：
- 🛠️ **工业级装备全栈研发**: 500³mm / 450°C 自研设备、EPLAN 电气/结构设计、RK3588+STM32 分布式系统
- 📐 **嵌入式控制与数值仿真**: NMPC + EKF 闭环温控算法、控温精度 ±1.0°C、PEEK 流热耦合 CFD 仿真
- 🤖 **工业软件与 AI Agent**: OrcaSlicer 源码二次开发、LangGraph 切片智能体、36 个 MCP 架构工具

### 2. JHTracker 详情页结构设计

**决策**: 包含以下区块：
- 顶部返回按钮 (`← 返回项目列表`)
- Header: 标题、一句话描述、组件 Badge (Flask, MCP, Agent-Native, HITL, SQLite)
- 项目概述与三大设计哲学 (Agent-First, Human-in-the-Loop, Data Sovereignty)
- 专属 SVG 架构图展示 (`fig-project-jhtracker.svg`)
- 36 个 MCP 工具与 11 个数据域能力清单
- 核心工作流与特性点
- 关联资源 (GitHub 仓库链接)
