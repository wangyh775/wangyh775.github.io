## 1. 准备图片资源目录

- [x] 1.1 创建 `public/blog_img/` 目录
- [x] 1.2 复制 Obsidian 中引用的图片资源到 `public/blog_img/`（使用英文命名）

## 2. 迁移技术实操类博客（3D打印方向）

- [x] 2.1 迁移并重写 `Klipper PID自动调参详解` → `src/content/blog/klipper-pid-tuning.md`
- [x] 2.2 迁移并重写 `Klipper 共振补偿 Input Shaper` → `src/content/blog/klipper-input-shaper.md`
- [x] 2.3 迁移并重写 `Marlin MPC模型预测温度控制` → `src/content/blog/marlin-mpc-control.md`
- [x] 2.4 迁移并重写 `OrcaSlicer添加自定义打印机与耗材` → `src/content/blog/orcaslicer-custom-config.md`

## 3. 迁移文献笔记类博客（AI+边缘方向）

- [x] 3.1 迁移并重写 `EdgeShard 边缘LLM推理` → `src/content/blog/edgeshard-llm-inference.md`
- [x] 3.2 迁移并重写 `EDGE-LLM 边缘设备高效适配` → `src/content/blog/edge-llm-adaptation.md`
- [x] 3.3 迁移并重写 `PEEK熔丝制备综述` → `src/content/blog/peek-fff-review.md`
- [x] 3.4 迁移并重写 `Sim2Real 文献综述系列` → `src/content/blog/sim2real-survey.md`

## 4. 删除假文章 & 恢复首页博客区域

- [x] 4.1 删除 `src/content/blog/` 中的 `post1.md`、`post2.md`、`post3.md`
- [x] 4.2 修改 `src/pages/index.astro`：恢复"最新博客"区域，展示最新 3 篇真实文章
- [x] 4.3 修改 `src/pages/blog/[...page].astro`：确保博客列表页正确显示所有文章

## 5. 验证与构建

- [x] 5.1 运行 `pnpm build` 确认构建无错误
- [x] 5.2 检查所有博客文章图片可正常加载
- [x] 5.3 检查首页博客区域展示正确