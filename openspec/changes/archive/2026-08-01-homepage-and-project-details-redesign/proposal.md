## Why

当前个人主页更像"信息展示页",缺乏清晰的定位和研究故事线。首页简介技术术语密度高但没有重点,访客第一眼无法理解"你是谁、做什么的"。项目页面只有卡片列表,点击直接跳转GitHub,无法展示项目的技术深度、实验数据和工程价值。这两个问题直接影响页面作为Research Portfolio的效果。

## What Changes

- **首页重新定位**: 用一句话清晰定位研究方向,重构简介文案,减少术语堆砌,增加"研究故事线"
- **创建项目详情页**: 为3个核心项目(MPC温控、AI Agent切片、高温设备)各创建独立详情页,展示技术架构、实验数据、实物照片
- **优化导航逻辑**: 项目卡片从"跳转GitHub"改为"查看详情",详情页内提供GitHub链接

## Capabilities

### New Capabilities
- `project-detail-pages`: 项目详情页面系统,支持为每个研究项目创建独立的详情页,展示技术架构图、实验结果、设备照片和代码仓库链接
- `homepage-hero-redesign`: 首页英雄区重新设计,包含清晰的研究定位、研究兴趣列表和优化后的统计数据展示

### Modified Capabilities
<!-- 无现有capability需要修改,这是新站点的首次重大改造 -->

## Impact

**受影响文件**:
- `src/pages/index.astro` - 首页文案和结构重构
- `src/pages/projects.astro` - 项目列表页的链接逻辑调整
- `src/components/HorizontalCard.astro` - 可能需要支持内部链接模式
- 新增: `src/pages/projects/mpc-thermal-control.astro`
- 新增: `src/pages/projects/ai-agent-slicer.astro`
- 新增: `src/pages/projects/fdm-hardware.astro`

**依赖资源**:
- 已有图片资源: `public/fig-*.{jpg,png}` (5张)
- 需要补充: 可能需要更多设备实物照片或架构图

**用户影响**:
- 首页访客能更快理解研究方向
- 项目详情页提供更深入的技术展示,增强工程能力展示
- 导航路径变化: 项目卡片 → 详情页 → GitHub(可选)
