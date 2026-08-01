## Why

2027 届求职提前批已经开始，个人主页是投递链路中的关键信任建立环节，但当前存在三处致命问题：① 项目卡片 GitHub 链接指向错误账号 `877660224`（应为 `wangyh775`），访客点进去扑空；② 招牌开源项目 JHTracker（48 commits、MCP/Agent 工程、今日仍活跃）完全未上主页，最值钱的能力展示缺失；③ Hero 区缺社交链接、缺成就数字、缺简历下载入口，求职转化漏斗断裂。需在提前批密集投递前完成第一波高 ROI 修正。

## What Changes

- **修正全站 GitHub 链接**：`src/pages/index.astro` 与 `src/pages/projects.astro` 中所有 `https://github.com/877660224` 替换为 `https://github.com/wangyh775`
- **修正 OrcaSlicer 项目措辞**：将"对 OrcaSlicer 进行源码级二次开发"改为"基于 OrcaSlicer 集成 LangGraph 多智能体系统，重构切片工作流"，诚实反映当前 fork 状态（本地开发中、尚未推送），避免面试官点进 GitHub 发现纯 fork 造成诚信扣分
- **kalico 项目卡片链接到真实 fork**：`wangyh775/kalico`（33 commits ahead、有 PR #3），佐证 Klipper 二次开发真实性
- **首页新增"开源 / 工程实践"区块**，置于"代表性项目"之上，首个卡片为 JHTracker，链到 `https://github.com/wangyh775/JHTracker`
- **Hero 区强化**：在名字/头衔下方增加社交链接（GitHub、CSDN、邮箱）与成就数字卡片（1 篇 EI、1 项专利、500³mm 设备、48 commits 开源项目）
- **项目卡片增加技术栈 tags**：`HorizontalCard` 组件支持 `tags` 属性并渲染为 badge，首页与项目页所有卡片标注关键技术栈
- **简历 PDF 下载入口**：将 `D:\DJTU\jianli\简历-3D打印v0.2.pdf` 复制到 `public/` 目录，在 Hero 区与简历页增加下载按钮

## Capabilities

### New Capabilities

- `job-seeking-conversion`: 求职转化入口能力——Hero 区社交链接、成就数字卡片、简历 PDF 下载入口，以及全站外链（GitHub）指向正确账号，构成从"访问→信任→联系/下载简历"的转化漏斗
- `project-showcase`: 项目呈现能力——首页"开源 / 工程实践"独立区块、项目卡片技术栈 tags 标注、项目措辞诚实反映 fork/开发状态，使访客在 30 秒内抓取技术栈关键词并验证项目真实性

### Modified Capabilities

<!-- 现有 project-images capability 的 requirements 不变，本次 change 仅延续使用，不修改其 spec -->

## Impact

- **代码**：`src/pages/index.astro`（Hero 区重构、开源区块、链接修正）、`src/pages/projects.astro`（链接修正、措辞调整、tags）、`src/pages/cv.astro`（简历下载按钮）、`src/components/HorizontalCard.astro`（tags 渲染）
- **资源**：`public/` 新增简历 PDF 文件
- **依赖**：无新增依赖，复用现有 DaisyUI badge 样式与 astro:assets
- **不影响**：博客内容（Wave 2 手动处理）、论文/专利链接化、Person Schema、英文版
