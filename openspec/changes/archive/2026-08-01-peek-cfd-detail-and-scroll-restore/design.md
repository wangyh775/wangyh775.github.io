## Context

See `proposal.md`. 当前共有 3 个已创建的项目详情页 (`mpc-thermal-control.astro`, `fdm-hardware.astro`, `ai-agent-slicer.astro`) 和 `projects.astro` 项目列表页，以及 `blog/[...page].astro` 博客列表和 `PostLayout.astro` 博客文章布局。

## Goals / Non-Goals

**Goals:**
- 创建第 4 个项目详情页 `src/pages/projects/peek-cfd-simulation.astro`
- 更新 `index.astro` 与 `projects.astro` 中的 PEEK CFD 仿真卡片 URL 为 `/projects/peek-cfd-simulation`
- 在所有项目详情页及 `PostLayout.astro` 顶部添加返回按钮（导航至列表页或回退历史）
- 在 `projects.astro` 与 `blog/[...page].astro` 列表页中实现 `sessionStorage` 垂直滚动位置记录与自动恢复机制

**Non-Goals:**
- 不破坏现有的 DaisyUI 布局结构与主题风格

## Decisions

### 1. 滚动位置恢复 (Scroll Restoration) 技术实现

**决策**: 在 `projects.astro` 和 `blog/[...page].astro` 中添加内联客户端 `<script>`：
- 在用户点击列表项卡片前（或者监听 `window.onbeforeunload` / `scroll` 防抖），记录当前 `window.scrollY` 到 `sessionStorage.setItem('projects_scroll', window.scrollY)`。
- 在列表页 `DOMContentLoaded` 或页面加载完成时，读取 `sessionStorage.getItem('projects_scroll')`，若存在且合法则使用 `window.scrollTo({ top: parseInt(scrollPos), behavior: 'instant' })`（或 `smooth`），随后重置/保留存储。

**理由**: 纯前端静态页面不依赖复杂 SSR，`sessionStorage` 方案最稳定可靠，且符合单页浏览习惯。

### 2. 顶部返回按钮交互策略

**决策**: 
在项目详情页和博客文章页顶部增加带有 SVG 返回箭头的按钮：
```html
<a href="/projects" onclick="if(history.length > 1) { history.back(); return false; }" class="btn btn-ghost btn-sm gap-2 mb-4">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
  返回项目列表
</a>
```
**理由**: 如果用户是从外部直接访问该链接（`history.length <= 1`），后退不可用，则退回到兜底 `href="/projects"`；如果是从列表页点进来的，`history.back()` 会配合 `sessionStorage` 实现完美的滚动位置还原。

## Risks / Trade-offs

### [Risk] 页面图片未加载完成前触发 `window.scrollTo` 导致偏移不够准确
- **Mitigation**: 在图片加载或 `DOMContentLoaded` 后触发滚动，并在 `window.onload` 时再次补算校验。
