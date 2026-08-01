## 1. 首页英雄区重构

- [x] 1.1 重构 `src/pages/index.astro`: 用一句话研究定位替换原有长段落简介
- [x] 1.2 在首页添加研究兴趣列表(3条,独立行展示)
- [x] 1.3 优化统计数据条:"开源项目"从"48 commits"改为更有说服力的指标(如"2 个核心仓库")
- [x] 1.4 临时隐藏"最新博客"区域
- [x] 1.5 验证首页文案修改后LSP诊断无错误
- [x] 1.6 验证首页链接映射正确

## 2. 创建项目详情页

- [x] 2.1 创建 `src/pages/projects/mpc-thermal-control.astro`: MPC温控详情页,包含控制框图、实验对比图、论文引用
- [x] 2.2 创建 `src/pages/projects/ai-agent-slicer.astro`: AI Agent切片系统详情页,包含架构图、技术栈
- [x] 2.3 创建 `src/pages/projects/fdm-hardware.astro`: 高温FDM设备详情页,包含设备照片、技术参数、电气系统描述
- [x] 2.4 验证所有详情页LSP诊断无错误

## 3. 调整导航链接

- [x] 3.1 修改 `src/pages/index.astro`: 代表性项目3个卡片的 `url` 从 `"/projects"` 改为对应详情页路径
- [x] 3.2 修改 `src/pages/projects.astro`: 项目列表卡片增加指向详情页的链接
- [x] 3.3 验证导航链接正确跳转(无404)

## 4. 验证与收尾

- [x] 4.1 运行 `npm run build` 确认构建无错误
- [x] 4.2 手动检查所有页面内容完整性和链接正确性