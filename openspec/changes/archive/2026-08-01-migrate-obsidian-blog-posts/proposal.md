## Why

当前博客区域只有3篇来自模板的 Demo 假文章(Lorem Ipsum)，严重缺乏内容吸引力和学术/工程可信度。用户在本地 Obsidian 库(`C:\Users\29006\OneDrive\Obsidian\Mybox`)中拥有大量高质量的 3D 打印、控制算法、Klipper/OrcaSlicer 二次开发以及边缘 LLM/数字孪生文献笔记。将这些内容完整迁移到个人博客并提取保留图片资源，将极大提升个人主页的专业度。

## What Changes

- **博客文章迁移**: 从本地 Obsidian 库迁移约 8-10 篇高价值技术笔记与文献综述至 `src/content/blog/`
- **替代假文章**: 删除原有的 3 篇 Demo 假文章(`post1.md`, `post2.md`, `post3.md`)
- **图片资源搬运**: 提取 Markdown 中引用的本地图片/附件(如 `z-附件/` 中的图片)，统一复制至 `public/blog_img/` 目录下，并修正 Markdown 中的图片引用路径
- **重新激活首页博客区域**: 在 `src/pages/index.astro` 中重新展示最新的 3 篇真实博客

## Capabilities

### New Capabilities
- `blog-content-migration`: 博客内容迁移与多媒体/图片资源管理，涵盖 Markdown 格式兼容处理、Frontmatter 元数据补充与图片链接重构。

### Modified Capabilities
- `homepage-hero-redesign`: 修改首页规范，恢复首页底部的"最新博客"展示区域。

## Impact

**受影响文件**:
- `src/content/blog/` (移除 `post1.md`, `post2.md`, `post3.md`；新增迁移的真实文章)
- `public/blog_img/` (新增，存放文章引用的本地图片)
- `src/pages/index.astro` (取消对最新博客区域的隐藏)
