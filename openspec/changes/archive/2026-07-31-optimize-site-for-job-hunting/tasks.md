## 1. 硬伤修复（链接与措辞）

- [x] 1.1 在 `src/pages/index.astro` 中将所有 `https://github.com/877660224` 替换为 `https://github.com/wangyh775`
- [x] 1.2 在 `src/pages/projects.astro` 中将所有 `https://github.com/877660224` 替换为 `https://github.com/wangyh775`
- [x] 1.3 将 `projects.astro` 中 FDM 设备项目卡片的 `url` 改为 `https://github.com/wangyh775/kalico`（佐证 Klipper 二次开发）
- [x] 1.4 将 `projects.astro` 与 `index.astro` 中 AI Agent 切片项目的 desc 从"对 OrcaSlicer 进行源码级二次开发"改为"基于 OrcaSlicer 集成 LangGraph 多智能体系统，重构切片工作流"
- [x] 1.5 对 `src/pages/` 全目录执行文本搜索，确认不存在 `github.com/877660224` 残留

## 2. 资源准备

- [x] 2.1 将 `D:\DJTU\jianli\简历-3D打印v0.2.pdf` 复制到 `public/resume.pdf`
- [x] 2.2 确认 `http://localhost:4322/resume.pdf` 可访问（dev 服务器浏览器 PDF 查看器加载成功）

## 3. HorizontalCard 组件改造（支持展示型 tags）

- [x] 3.1 在 `src/components/HorizontalCard.astro` 的 props 解构中新增 `tagsAsLinks: boolean = false`
- [x] 3.2 改造 tags 渲染逻辑：`tagsAsLinks === false` 时渲染为 `<span class="badge badge-outline">`（不可点击）；`tagsAsLinks === true` 时保留现有 `<a>` 链接行为
- [x] 3.3 核查 `src/pages/blog/` 下所有调用 HorizontalCard 的页面，对需要保留链接行为的调用显式传入 `tagsAsLinks={true}`
- [x] 3.4 核查 `src/pages/index.astro` 中博客卡片调用是否受默认值变更影响并修正

## 4. Hero 区重构（社交链接 + 数字卡片 + 简历下载）

- [x] 4.1 在 `src/pages/index.astro` Hero 区"联系我/简历"按钮行，改造为四链接行：GitHub、CSDN、邮箱、下载简历
- [x] 4.2 为 GitHub/CSDN/邮箱/下载简历 各制作内联 SVG 图标（GitHub 用官方 logo，CSDN 用通用文档图标，邮箱用信封图标，下载用向下箭头图标）
- [x] 4.3 在链接行下方新增数字卡片行，使用 DaisyUI `stats` 组件，渲染 4 张卡片：1 EI、1 专利、500³mm、48 commits
- [x] 4.4 "下载简历"链接指向 `/resume.pdf` 并加 `download` 属性
- [x] 4.5 验证 Hero 区在移动端（375×812 视口）与桌面端布局正常（stats-vertical 自动堆叠，无溢出）

## 5. 首页新增"开源 / 工程实践"区块

- [x] 5.1 在 `src/pages/index.astro` 中，于 Hero 区与"代表性项目"区块之间，新增"开源 / 工程实践"区块标题
- [x] 5.2 为 JHTracker 创建 HorizontalCard，`url="https://github.com/wangyh775/JHTracker"`，desc 聚焦"36 个 MCP 工具 / HITL 闭环 / Agent Trace"，`badge="开源"`，`tags=["Flask","MCP","AI Agent","HITL","SQLite"]`
- [x] 5.3 确认该区块位于"代表性项目"区块之上

## 6. 项目卡片添加技术栈 tags

- [x] 6.1 为 `index.astro` 中 3 个代表性项目卡片添加 `tags` 属性（FDM 设备：STM32/Klipper/Linux/RK3588；MPC：MPC/EKF/嵌入式；AI切片：LangGraph/OrcaSlicer/Python）
- [x] 6.2 为 `projects.astro` 中 4 个项目卡片添加 `tags` 属性（同上 + CFD：COMSOL/CFD/响应面法）
- [x] 6.3 为 `index.astro` 中 JHTracker 卡片添加 `tags` 属性（见 5.2）
- [x] 6.4 确认所有项目卡片调用 HorizontalCard 时不传 `tagsAsLinks`（使用默认 `false`，渲染为纯展示 badge）

## 7. 简历页下载按钮

- [x] 7.1 在 `src/pages/cv.astro` "关于我"段落下方或页面顶部新增"下载简历"按钮，指向 `/resume.pdf` 并加 `download` 属性
- [x] 7.2 按钮样式与 Hero 区下载按钮保持一致

## 8. 验证

- [x] 8.1 启动开发服务器，访问首页确认：Hero 社交链接、数字卡片、下载按钮、开源区块、JHTracker 卡片、项目 tags 均正常渲染
- [x] 8.2 访问 `/projects` 确认：链接已修正、措辞已调整、tags 已渲染
- [x] 8.3 访问 `/cv` 确认：下载按钮可用
- [x] 8.4 点击所有社交链接与项目卡片链接，确认跳转目标正确
- [x] 8.5 点击"下载简历"按钮（首页 + 简历页），确认 PDF 下载成功（/resume.pdf 可访问，下载按钮 href + download 属性就绪）
- [x] 8.6 访问 `/blog` 确认：blog 卡片 tags 链接行为未受 HorizontalCard 改造影响
- [x] 8.7 移动端视图检查：Hero 区、数字卡片、开源区块在窄屏下不溢出（375×812 视口验证 statsOverflow=false、heroOverflow=false）
