## Purpose

为 JHTracker (AI 驱动的求职全流程管理工具) 提供独立的项目详情展示页面，展示 Agent-Native 架构、36 个 MCP 工具链、HITL 人机协同闭环与数据库模型设计。

## ADDED Requirements

### Requirement: JHTracker 拥有独立详情页面

系统 SHALL 为 JHTracker 提供独立详情页面，路径为 `/projects/jhtracker`。

#### Scenario: 访问 JHTracker 详情页
- **WHEN** 用户访问 `/projects/jhtracker`
- **THEN** 页面展示 Agent-Native 架构、HITL 决策闭环流程、MCP 工具列表、系统架构拓扑与 GitHub 链接

### Requirement: 详情页顶部包含返回控件

JHTracker 详情页 MUST 在顶部左上角包含"← 返回项目列表"返回控件，支持历史回退或退回 `/projects`。

#### Scenario: 点击顶部返回按钮
- **WHEN** 用户在 `/projects/jhtracker` 顶部点击"← 返回项目列表"
- **THEN** 页面跳转/回退至项目列表页并自动还原滚动位置