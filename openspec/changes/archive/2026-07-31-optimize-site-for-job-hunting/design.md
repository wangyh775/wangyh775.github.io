## Context

当前站点基于 Astro + Tailwind + DaisyUI，主题 `lofi`，侧边栏导航。首页 Hero 区为纯文字，项目卡片复用 `HorizontalCard` 组件。`HorizontalCard` 已有 `tags` 属性与渲染逻辑，但其 `tag_url` 计算方式（`url.split("/").slice(0, -1).join("/") + "/tag"`）假设 url 为 blog 路径，对项目卡片（url 指向 GitHub）会产生无效链接 `https:/tag`，需改造以支持"纯展示型 tags"。简历源文件位于 `D:\DJTU\jianli\简历-3D打印v0.2.pdf`，需复制到 `public/` 目录。

## Goals / Non-Goals

**Goals:**

- Hero 区在首屏即可建立求职信任（社交身份 + 成就数字 + 简历下载）
- JHTracker 作为招牌开源项目获得独立展示位
- 项目卡片技术栈 tags 可被访客 30 秒内扫描
- 所有外链可点击验证，无扑空链接

**Non-Goals:**

- 不做项目详情页 `/projects/[slug]`（Wave 2 评估）
- 不写博客真文章（用户手动处理）
- 不做论文/专利 DOI 链接化（待 DOI 信息）
- 不做 Person Schema / SEO 结构化数据（Wave 2）
- 不做英文版

## Decisions

### Decision 1: Hero 区布局采用"文字 + 链接行 + 数字卡行"三段式

```
┌─────────────────────────────────────────────┐
│ 王云鹤                                       │
│ 机械工程硕士 · 大连交通大学                   │
│ 研究方向...（保留现有介绍段落）               │
│                                             │
│ [GitHub] [CSDN] [邮箱] [下载简历]  ← 链接行  │
│                                             │
│ ┌────┬────┬──────┬──────┐                   │
│ │ 1  │ 1  │ 500³ │  48  │  ← 数字卡行       │
│ │ EI │专利│ mm   │commit│                   │
│ └────┴────┴──────┴──────┘                   │
└─────────────────────────────────────────────┘
```

**理由**：求职场景下，访客前 5 秒判断去留，社交链接与成就要在首屏可见。现有"联系我/简历"两个按钮升级为四链接行，数字卡作为信任锚点。

**备选方案**：将社交链接放侧边栏 Footer。否决——侧边栏在小屏被抽屉隐藏，首屏不可见。

### Decision 2: 社交链接用内联 SVG 图标 + 文字

GitHub/CSDN/邮箱图标采用内联 SVG（不引入图标库依赖），与现有 Header.astro 的 SVG 风格一致。链接用 DaisyUI `btn btn-ghost btn-sm` 样式，横向排列。

**理由**：避免新增图标库依赖（如 heroicons），保持包体积。CSDN 无官方图标，用通用"博客/文章"图标代替。

### Decision 3: 数字卡片用静态 HTML + DaisyUI `stats`

数字卡片使用 DaisyUI 的 `stats` 组件（已在 Tailwind/DaisyUI 体系中），数据硬编码在 `index.astro` frontmatter。不引入动态数据源。

**理由**：数字变更频率极低（论文/专利/commits 数），硬编码足够。动态拉取 GitHub commits 数需要 API token 与运行时请求，过度工程化。

**备选方案**：构建时通过 GitHub API 拉取 commits 数。否决——增加构建复杂度与 token 管理，且 commits 数会变（48 是写作时快照，可在内容更新时手动同步）。

### Decision 4: HorizontalCard 新增 `tagsAsLinks` prop，默认 `false`

改造 `HorizontalCard.astro`：

- 新增 `tagsAsLinks: boolean = false` prop
- 当 `tagsAsLinks === false` 时，tags 渲染为纯 `<span class="badge badge-outline">`（不可点击）
- 当 `tagsAsLinks === true` 时，保留现有 `<a>` 链接行为（blog 场景使用）
- blog 页面调用 HorizontalCard 时显式传 `tagsAsLinks={true}`（或保持现有调用，因默认值变更需核查 blog 页面）

**理由**：项目技术栈 tags 是展示性标签，不应可点击（点击会跳到无效的 blog tag 路径）。分离"展示型"与"链接型"两种语义。

**备选方案 A**：新建 `TechBadge` 组件。否决——过度拆分，HorizontalCard 已有 tags 渲染框架。
**备选方案 B**：让项目 tags 也链接到 `/blog/tag/<tag>`。否决——语义错误，技术栈名（如"STM32"）不是 blog tag。

### Decision 5: 简历 PDF 重命名为 `resume.pdf` 放入 `public/`

源文件 `简历-3D打印v0.2.pdf` 复制到 `public/resume.pdf`。下载链接为 `/resume.pdf`，用 `<a href="/resume.pdf" download>` 触发下载。

**理由**：中文文件名在 URL 中需 percent-encode，部分浏览器/服务器组合可能产生兼容问题。英文名 `resume.pdf` 通用且语义清晰。版本号不写入文件名（避免每次更新都要改链接）。

### Decision 6: "开源 / 工程实践"区块置于"代表性项目"之上

首页结构调整为：

```
1. Hero 区（社交链接 + 数字卡片）
2. 开源 / 工程实践（新增，JHTracker 为首卡）
3. 代表性项目（现有 3 个科研项目）
4. 最新博客（保持不变）
```

**理由**：JHTracker 展示的全栈 + AI Agent 能力与科研项目（3D打印硬件/控制算法）是两个维度，前置可让大厂/研究院面试官优先看到软件工程能力。科研项目紧随其后，保持 3D 打印主线叙事完整。

### Decision 7: JHTracker 卡片描述聚焦 Agent 工程亮点

JHTracker 卡片 desc 拟定：

> AI 驱动的求职全流程管理工具。Flask + SQLAlchemy + MCP 构建，36 个 MCP 工具覆盖 11 个数据域，实现 Agent-Native 接口、HITL 人机协同决策闭环与 Agent Trace 实时轨迹可视化。OpenSpec 驱动开发，含完整测试与迁移。

tags: `["Flask", "MCP", "AI Agent", "HITL", "SQLite"]`

**理由**：desc 限制在一句话内突出"36 MCP 工具"和"HITL 闭环"这两个面试官最敏感的工程化关键词，避免堆砌功能清单（功能清单在 GitHub README 已有）。

## Risks / Trade-offs

- **[数字卡片数据过时]** commits 数 48 是写作时快照，JHTracker 持续更新后数字会滞后 → 可接受，数字用于建立量级印象而非精确承诺；下次内容更新时手动同步
- **[CSDN 图标非官方]** CSDN 无广泛认可的官方图标 → 用通用"文档/博客"SVG 图标代替，配文字"CSDN"消歧义
- **[HorizontalCard 默认值变更影响 blog]** 将 tags 默认从"链接型"改为"展示型"可能影响 blog 页面 → 实施时需核查 blog 页面所有 HorizontalCard 调用，显式传 `tagsAsLinks={true}` 保持现有行为
- **[简历 PDF 暴露个人信息]** 公开下载的简历含手机号等隐私 → 用户已知晓并主动提供路径，视为已同意公开；如需后续可放脱敏版
