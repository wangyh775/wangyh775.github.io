## Context

首页和项目页包含4个项目卡片及3个专属详情页。目前使用占位图，现已确认本地存在对应的论文高质量架构图和热端示意图，并为 JHTracker 专门设计矢量架构图。

## Goals / Non-Goals

**Goals:**
- 复制并命名本地图库资源至 `public/`
- 为 JHTracker 生成高质量矢量 SVG 封面
- 更新 `index.astro`、`projects.astro` 及 3 个项目详情页的图片路径

**Non-Goals:**
- 修改页面结构或文案（已有逻辑保持不变）

## Decisions

### 1. 图片资源命名与位置

**决策**:
- JHTracker: 生成 `public/fig-project-jhtracker.svg`
- AI Agent 切片系统: 复制 `D:\DJTU\Lunwen\dalunwen\Figure\fdm_software_diagram_cn.png` 到 `public/fig-software-diagram.png`
- MPC 温控: 复制 `D:\DJTU\mpc\ioplatextemplate\提交文件\fig_hotend_schematic.png` 到 `public/fig-hotend-schematic.png`
- 高温 FDM 设备: 复制 `D:\DJTU\Lunwen\dalunwen\Figure\architecture-diagram-gemini.jpg` 到 `public/fig-architecture-gemini.jpg`

**理由**:
所有图片命名统一使用 `fig-` 前缀，格式明清晰，保存在 `public/` 根目录下方便直接以 `/fig-xxx` 路径访问。

## Risks / Trade-offs

### [Risk] 图片分辨率过大导致首屏加载缓慢

**缓解**: 图片均在 1MB 以内（最重 813KB），生产构建时 Astro/DaisyUI 能够快速加载与渲染。
