## Context

- 博客位于 `src/content/blog/`，使用 Astro 4 Content Collections（schema 在 `src/content/config.ts`）
- 现有 `post1.md`、`post2.md`、`post3.md` 是模板示例内容，含 Lorem Ipsum 占位
- 原始图片存放在 Obsidian 笔记库的 `z-附件` 文件夹和 `Pasted image` 嵌入中
- 现有 `PostLayout.astro` 支持 `heroImage`，首页 `index.astro` 使用 `HorizontalCard` 组件展示博客卡片

## Goals / Non-Goals

**Goals:**
- 迁移 8 篇高价值 Obsidian 笔记到博客，覆盖 3D 打印/温控/边缘 LLM/数字孪生等方向
- 删除 Demo 假文章，恢复首页博客区域
- 提取图片到 `public/blog_img/`，并修正文章中的引用

**Non-Goals:**
- 不做文章内容重写/润色（保持 Obsidian 原文质量）
- 不新增博客页面模板/布局（沿用现有 `PostLayout`）
- 不迁移 Obsidian 中非博客内容（如日记、临时草稿）

## Decisions

### 1. 文章选择策略

**决策**: 优先迁移与项目研究方向高度相关的 8 篇文章:

| # | 来源 | 类型 |
|---|---|---|
| 1 | `Klipper PID自动调参详解` | 技术实操 |
| 2 | `Klipper 共振补偿 Input Shaper` | 技术实操 |
| 3 | `Marlin MPC模型预测温度控制` | 技术实操 |
| 4 | `OrcaSlicer 添加自定义打印机与耗材` | 技术实操 |
| 5 | `EdgeShard 边缘LLM推理` | 文献笔记 |
| 6 | `EDGE-LLM 边缘设备高效适配` | 文献笔记 |
| 7 | `PEEK熔丝制备综述` | 文献笔记 |
| 8 | `Sim2Real 文献综述` | 文献综述 |

**理由**: 覆盖技术实操+学术文献两个维度，与个人研究方向(高温FDM、MPC温控、AI+制造)完美契合。

### 2. 文章文件名与日期策略

**决策**: 
- 文件名用英文 kebab-case（兼容 Astro 的路由）
- `pubDate` 基于文章原始发表/创建时间（如 EdgeShard: 2024-05-23）
- 如无明确日期，使用迁移日(2026-08-01)

**备选**:
- 按类型分组（实操类统一 2026-07，文献类保留原始日期）
- 选英文文件名便于 URL 国际化

### 3. 图片处理策略

**决策**:
- 创建 `public/blog_img/` 目录
- 提取 Obsidian 笔记中所有本地引用图片（`![[Pasted image 20241230192732.png]]`、`z-附件/*.svg` 等）
- 复制时重命名为文章 slug 相关名称（如 `edge-shard-diagram.png`），避免乱码文件名
- 修正文章中的图片路径为 `/blog_img/xxx.png`

**图片识别方式**:
- Obsidian 粘贴图片: `![[Pasted image 日期时间.ext]]` → 搜索 `Mybox/Pasted image` 或 `Mybox/附件` 目录
- 附件文件夹引用: `![[z-附件/*.svg]]` 或 `![图片名](z-附件/*.svg)`
- 直接附件引用: `[文件名.ext](z-附件/文件名.ext)`

### 4. 首页恢复策略

**决策**: 
- 在 `index.astro` 中重新添加博客区域代码（与当前隐藏区域结构一致）
- 将统计区下方的博客区域重新启用，展示最新的 3 篇文章

**理由**: 保持与现有设计一致，无需新建组件。

## Risks / Trade-offs

### [Risk] Obsidian Markdown 格式与 Astro 不兼容

**缓解**: 迁移时清理 Obsidian 特有语法（`[[wikilink]]`、Zotero 链接 `zotero://`），转换 Obsidian 表格语法。

### [Risk] 图片文件命名乱码

**缓解**: 图片复制到 `public/blog_img/` 时统一使用英文 slug 命名，避免中文文件名导致 GitHub Pages 404。

### [Risk] 文章过长导致阅读体验差

**缓解**: 保留原文章完整内容，但将特别长的表格/附件列表折叠为"原文见 Obsidian"链接。

### [Risk] Astro 构建时图片未正确嵌入

**缓解**: 使用 Astro 的 `<Image>` 组件或直接在 Markdown 中使用绝对路径 `/blog_img/xxx.png`，GitHub Pages 部署时静态资源路径正确。

## 迁移文章清单（最终）

| 目标文件名 | 源文件 | heroImage |
|---|---|---|
| `klipper-pid-tuning` | `Klipper PID自动调参详解.md` | `/blog_img/klipper-pid.png` |
| `klipper-input-shaper` | `Klipper 共振补偿 Input Shaper.md` | `/blog_img/input-shaper.png` |
| `marlin-mpc-control` | `Marlin MPC模型预测温度控制.md` | `/fig-temp-comparison.png` |
| `orcaslicer-custom-config` | `OrcaSlicer添加自定义打印机与耗材.md` | `/fig-device.jpg` |
| `edgeshard-llm-inference` | `EdgeShard：通过协作边缘计算实现高效的 LLM 推理.md` | `/blog_img/edge-shard.png` |
| `edge-llm-adaptation` | `EDGE-LLM：边缘设备高效适配.md` | `/blog_img/edge-llm.png` |
| `peek-fff-review` | `PEEK熔丝制备综述.md` | `/blog_img/peek-review.png` |
| `sim2real-survey` | `Sim2Real文献综述系列` | `/blog_img/sim2real.png` |
