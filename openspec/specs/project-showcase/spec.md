## Purpose

为求职场景优化项目呈现，使访客在 30 秒内抓取技术栈关键词、识别招牌开源项目、并能通过 GitHub 链接验证项目真实性，避免因 fork 状态与措辞不符造成诚信风险。

## ADDED Requirements

### Requirement: 首页设有"开源 / 工程实践"独立区块

首页 SHALL 在"代表性项目"区块之上设有"开源 / 工程实践"独立区块，用于展示与科研项目不同维度的工程实践作品。该区块的首个卡片 SHALL 为 JHTracker 项目，链接到 `https://github.com/wangyh775/JHTracker`。

#### Scenario: 访客在首页看到开源项目区块

- **WHEN** 访客打开首页 `/`
- **THEN** 页面渲染"开源 / 工程实践"区块，且该区块位于"代表性项目"区块之上

#### Scenario: JHTracker 作为招牌项目展示

- **WHEN** 访客浏览"开源 / 工程实践"区块
- **THEN** 首张卡片为 JHTracker，描述涵盖 MCP/Agent/HITL 等技术亮点，点击后在新标签页打开 `https://github.com/wangyh775/JHTracker`

### Requirement: 项目卡片展示技术栈 tags

`HorizontalCard` 组件 SHALL 支持 `tags` 属性，当传入 tags 时 SHALL 在卡片底部以 badge 形式渲染技术栈关键词。首页与项目页的所有项目卡片 SHALL 标注 2-5 个关键技术栈 tags。

#### Scenario: 卡片渲染技术栈标签

- **WHEN** `HorizontalCard` 收到 `tags={["STM32", "Klipper", "Linux"]}`
- **THEN** 卡片底部渲染 3 个 badge，分别显示"STM32"、"Klipper"、"Linux"

#### Scenario: 无 tags 时不渲染标签区

- **WHEN** `HorizontalCard` 未收到 `tags` 属性或 `tags` 为空数组
- **THEN** 卡片不渲染 tags badge 区域

### Requirement: 项目措辞诚实反映 fork 状态

项目卡片描述 SHALL 与该项目的 GitHub 仓库实际状态一致。对于 fork 但尚未推送自有 commit 的项目，措辞 SHALL 聚焦于"集成/基于"而非"源码级二次开发"；对于有自有 commit 的 fork，措辞可保留"二次开发"表述。

#### Scenario: OrcaSlicer 项目措辞调整

- **WHEN** 访客浏览 AI Agent 切片项目卡片
- **THEN** 描述使用"基于 OrcaSlicer 集成 LangGraph 多智能体系统"措辞，不出现"源码级二次开发"表述

#### Scenario: kalico 项目链接到真实 fork

- **WHEN** 访客点击 FDM 设备或 Klipper 相关项目卡片的 GitHub 链接
- **THEN** 链接指向 `https://github.com/wangyh775/kalico`，该 fork 有自有 commit 可供验证
