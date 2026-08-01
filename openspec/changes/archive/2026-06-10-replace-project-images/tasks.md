## 1. 复制图片文件到 public 目录

- [x] 1.1 复制 `实物图.jpg` 到 `public/fig-device.jpg`
- [x] 1.2 复制 `fdm_advantages.png` 到 `public/fig-fdm-advantages.png`
- [x] 1.3 复制 `fig_control_framework.png` 到 `public/fig-control-framework.png`
- [x] 1.4 复制 `fig_temperature_comparison.png` 到 `public/fig-temp-comparison.png`
- [x] 1.5 复制 CFD 仿真图到 `public/fig-cfd-simulation.png`

## 2. 更新首页 index.astro 图片引用

- [x] 2.1 将"大型高温FDM 3D打印设备研发"的 `img` 改为 `/fig-device.jpg`
- [x] 2.2 将"FDM挤出机热端MPC温控方法"的 `img` 改为 `/fig-control-framework.png`
- [x] 2.3 "基于AI Agent的智能切片系统"保留占位图（待后续补充）

## 3. 更新项目页 projects.astro 图片引用

- [x] 3.1 将"大型高温FDM 3D打印设备研发"的 `img` 改为 `/fig-fdm-advantages.png`
- [x] 3.2 将"FDM挤出机热端MPC温控方法"的 `img` 改为 `/fig-temp-comparison.png`
- [x] 3.3 "基于AI Agent的智能切片系统"保留占位图
- [x] 3.4 将"面向PEEK的高温FDM喷头流热耦合仿真"的 `img` 改为 `/fig-cfd-simulation.png`

## 4. 验证

- [x] 4.1 运行 `pnpm run build` 确认构建成功
- [x] 4.2 确认所有图片文件存在于 `public/` 目录