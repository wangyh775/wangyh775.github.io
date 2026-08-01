## MODIFIED Requirements

### Requirement: 博客区域临时隐藏

在博客内容未填充前,首页 SHOULD 隐藏"最新博客"区域,避免展示Lorem ipsum占位内容。

#### Scenario: 首页展示最新的真实博客内容
- **WHEN** 博客文章迁移完成且包含真实文章
- **THEN** 首页重新恢复显示"最新博客"区域，并展示最新的 3 篇真实博客文章卡片
