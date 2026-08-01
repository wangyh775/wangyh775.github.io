## Purpose

提供从本地 Obsidian 笔记库迁移高质量技术文章至个人博客的能力，自动识别、提取和修正文章中引用的本地多媒体资源，确保所有图片在迁移后仍可正确显示。

## ADDED Requirements

### Requirement: 真实博客文章替换假文章

系统 SHALL 将 Obsidian 中筛选出的高价值技术笔记转换为符合 Astro 博客格式的文章文件，并替换原有的 `post1.md`、`post2.md`、`post3.md` Demo 文章。

#### Scenario: 删除原有的 Demo 假文章
- **WHEN** 迁移任务执行完成
- **THEN** `src/content/blog/` 中不再存在 `post1.md`、`post2.md`、`post3.md`

#### Scenario: 迁移后的文章符合 Astro Content Collection 格式
- **WHEN** 用户访问任意一篇迁移后的博客文章
- **THEN** 页面可正常渲染，包含正确的 Frontmatter 元数据（`title`、`description`、`pubDate`、`tags`）

### Requirement: 保留并修正本地图片引用

系统 SHALL 将 Markdown 笔记中引用的所有本地图片资源（如 Obsidian 附件文件夹中的图片）统一复制至站点公共目录（`public/blog_img/`），并自动修正文章中的引用路径。

#### Scenario: 文章引用的本地图片可访问
- **WHEN** 用户访问包含图片的博客文章
- **THEN** 所有文章中引用的图片均可通过 HTTP 正确加载，无 404

#### Scenario: 多篇文章共享同一图片文件
- **WHEN** 多篇文章引用同一张本地图片
- **THEN** 图片仅复制一次到 `public/blog_img/` 目录，避免重复

### Requirement: 保持文章内容与结构完整性

系统 SHALL 在迁移过程中保持 Obsidian 笔记的原始内容结构，包括标题层级、代码块、引用块、表格和列表格式。

#### Scenario: 迁移的文章包含完整的原始内容
- **WHEN** 用户对比 Obsidian 原文件与迁移后的博客文章
- **THEN** 文章的正文内容、标题层级和段落结构保持一致

#### Scenario: Markdown 链接转换
- **WHEN** 原文中包含 Obsidian 内部链接（`[[wikilink]]`）或 Zotero 链接
- **THEN** 无法解析的内部链接被清理，外部链接保持不变
