## 1. 新增 PEEK CFD 仿真项目详情页

- [x] 1.1 创建 `src/pages/projects/peek-cfd-simulation.astro` 页面，展示仿真模型图与计算指标
- [x] 1.2 更新 `src/pages/index.astro` 与 `src/pages/projects.astro` 中的该项目卡片 URL 为 `/projects/peek-cfd-simulation`

## 2. 详情页与博客页顶部返回控件

- [x] 2.1 为 4 个项目详情页 (`mpc-thermal-control.astro`, `fdm-hardware.astro`, `ai-agent-slicer.astro`, `peek-cfd-simulation.astro`) 顶部添加“← 返回项目列表”固定控件
- [x] 2.2 为博客文章布局 (`src/layouts/PostLayout.astro`) 顶部添加“← 返回博客列表”固定控件

## 3. 列表页滚动位置记忆与自动恢复

- [x] 3.1 在 `src/pages/projects.astro` 添加 sessionStorage 滚动位置记录与自动恢复脚本
- [x] 3.2 在 `src/pages/blog/[...page].astro` 添加 sessionStorage 滚动位置记录与自动恢复脚本

## 4. 验证与构建

- [x] 4.1 运行 `pnpm build` 确保没有构建错误与 404
- [x] 4.2 验证滚动恢复逻辑与返回控件跳转正常
