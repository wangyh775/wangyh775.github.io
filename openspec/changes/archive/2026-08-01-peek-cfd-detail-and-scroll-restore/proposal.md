## Why

1. 当前代表性项目“面向PEEK的高温FDM喷头流热耦合仿真”缺乏独立的详情展示页面。
2. 用户在浏览项目详情页或博客文章页面时，缺乏便捷的“返回列表”按钮（仅在底部有链接），且返回项目列表页/博客列表页后无法记住并恢复之前鼠标滚动的垂直位置，影响浏览连贯性与交互体验。

## What Changes

- **新增项目详情页**: 为“面向PEEK的高温FDM喷头流热耦合仿真”创建独立详情页 `/projects/peek-cfd-simulation`，展示仿真模型图(`fig-cfd-simulation.png`)、技术流向与数值计算指标
- **项目详情页顶部返回按钮**: 所有项目详情页左上角新增“← 返回项目列表”固定返回控件
- **博客文章页顶部返回按钮**: 在 `PostLayout.astro` 顶部新增“← 返回博客列表”固定返回控件
- **滚动位置恢复 (Scroll Restoration)**: 在项目列表页 (`/projects`) 和博客列表页 (`/blog`) 实现基于 `sessionStorage` 的滚动位置记录与自动恢复机制

## Capabilities

### New Capabilities
- `peek-cfd-detail`: PEEK 挤出头流热耦合仿真项目的独立详情展示页面
- `scroll-position-preservation`: 项目列表与博客列表页面的滚动位置记忆与恢复，以及详情/文章页面的顶部返回控件

### Modified Capabilities
- 无

## Impact

**受影响文件**:
- 新增 `src/pages/projects/peek-cfd-simulation.astro`
- 修改 `src/pages/projects.astro`
- 修改 `src/pages/projects/mpc-thermal-control.astro`
- 修改 `src/pages/projects/fdm-hardware.astro`
- 修改 `src/pages/projects/ai-agent-slicer.astro`
- 修改 `src/layouts/PostLayout.astro`
- 修改 `src/pages/blog/[...page].astro`
