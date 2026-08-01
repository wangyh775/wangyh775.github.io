## 1. 复制与生成项目图片资源

- [x] 1.1 复制 `architecture-diagram-gemini.jpg` 到 `public/fig-architecture-gemini.jpg`
- [x] 1.2 复制 `fig_hotend_schematic.png` 到 `public/fig-hotend-schematic.png`
- [x] 1.3 复制 `fdm_software_diagram_cn.png` 到 `public/fig-software-diagram.png`
- [x] 1.4 生成专业科技风格的矢量 SVG 封面 `public/fig-project-jhtracker.svg`

## 2. 更新页面中的图片路径引用

- [x] 2.1 更新 `src/pages/index.astro` 4 个项目卡片封面路径
- [x] 2.2 更新 `src/pages/projects.astro` 3 个项目卡片封面路径
- [x] 2.3 更新 `src/pages/projects/mpc-thermal-control.astro` 图片引用路径
- [x] 2.4 更新 `src/pages/projects/fdm-hardware.astro` 图片引用路径
- [x] 2.5 更新 `src/pages/projects/ai-agent-slicer.astro` 图片引用路径

## 3. 验证与构建

- [x] 3.1 运行 `pnpm build` 确认构建通过
- [x] 3.2 检查所有图片链接正确无误