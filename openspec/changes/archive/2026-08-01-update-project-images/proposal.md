## Why

当前首页和项目列表页的4个项目卡片中有3个使用默认占位图(`/post_img.webp`)，缺乏与项目主题匹配的视觉展示。两张项目图片需要替换为论文中的高质量技术示意图。需要为JHTracker和AI Agent切片系统添加合适的封面图。

## What Changes

- **JHTracker**: 使用AI生成的SVG架构图替换默认`/post_img.webp`占位图
- **AI Agent切片系统**: 替换为大论文中的软件架构图(`fdm_software_diagram_cn.png`)
- **MPC温控**: 替换为本地论文中的热端结构示意图(`fig_hotend_schematic.png`)
- **大型高温FDM设备**: 替换为大论文中的系统架构图(`architecture-diagram-gemini.jpg`)

## Capabilities

### New Capabilities
- `project-images`: 项目图片管理与替换，涵盖图片资源从本地论文目录到public/的搬运、SVG生成、以及页面引用路径更新

### Modified Capabilities
- 无（仅图片资源替换，行为不变）

## Impact

**受影响文件**:
- `public/fig-project-jhtracker.svg` (新增)
- `public/fig-project-ai-agent-slicer.png` (新增，从论文目录复制)
- `public/fig-hotend-schematic.png` (新增，从论文目录复制)
- `public/fig-architecture-gemini.jpg` (新增，从论文目录复制)
- `src/pages/index.astro` (更新4个HorizontalCard的img引用)
- `src/pages/projects.astro` (更新项目列表页图片引用)
- `src/pages/projects/mpc-thermal-control.astro` (更新详情页图片)
- `src/pages/projects/fdm-hardware.astro` (更新详情页图片)
- `src/pages/projects/ai-agent-slicer.astro` (更新详情页图片)