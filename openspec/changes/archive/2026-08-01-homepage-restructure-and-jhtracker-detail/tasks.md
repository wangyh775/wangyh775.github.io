## 1. 首页优势数据面板重构（方案 A）

- [x] 1.1 重构 `src/pages/index.astro`：用“三大核心研发能力柱”卡片替换原 `stats` 统计面板
- [x] 1.2 调整首页结构：将 JHTracker 从独立“开源/工程实践”区块合并到“代表性项目”区块

## 2. 创建 JHTracker 独立详情页

- [x] 2.1 创建 `src/pages/projects/jhtracker.astro`，展示 Agent-Native 架构、36 个 MCP 工具、HITL 闭环与设计哲学
- [x] 2.2 详情页顶部包含返回控件（← 返回项目列表）

## 3. 更新导航与路由

- [x] 3.1 更新 `src/pages/index.astro` 与 `src/pages/projects.astro` 中 JHTracker 卡片 URL 为 `/projects/jhtracker`

## 4. 验证与构建

- [x] 4.1 运行 `pnpm build` 确保无错误
- [x] 4.2 验证三大能力柱卡片展示、JHTracker 详情页路由与导航正确