## Context

当前项目页和首页的项目卡片全部使用 `/post_img.webp` 作为占位图。现有两个图片资源目录可用：

- `D:\DJTU\mpc\ioplatextemplate\提交文件\` — MPC 温控论文相关图片（控制框架、温度对比、误差对比、PWM对比、性能指标、热端结构图、系统辨识结果）
- `D:\DJTU\Lunwen\2026 International Conference on High-end Equipment and Intelligent Manufacturing\fig\` — 大尺寸FDM设备会议论文相关图片（FDM优势图、控制回路图、稳定性对比、重量曲线、预热对比、设备实物图、PEEK FFF工艺图、CFD仿真图等）

## Goals / Non-Goals

**Goals:**
- 为首页 3 个项目替换为对应的实际研究图片
- 为项目页 4 个项目替换为对应的实际研究图片
- 图片文件统一命名并放入 `public/` 目录

**Non-Goals:**
- 不修改项目卡片布局或样式
- 不涉及项目内容文字修改
- 不涉及博客文章图片替换

## Decisions

### 图片文件命名规范

采用 `fig-` 前缀 + 英文描述 + 序号的方式命名，确保可读性和唯一性。

| 新文件名 | 来源 | 对应项目 |
|---------|------|---------|
| `fig-device.jpg` | 会议论文目录 `实物图.jpg` | 大型高温FDM设备 |
| `fig-fdm-advantages.png` | 会议论文目录 `fdm_advantages.png` | 大型高温FDM设备 |
| `fig-control-framework.png` | MPC论文目录 `fig_control_framework.png` | MPC温控项目 |
| `fig-temp-comparison.png` | MPC论文目录 `fig_temperature_comparison.png` | MPC温控项目 |
| `fig-ai-agent.png` | 暂缺（AI Agent切片系统暂无论文图） | AI Agent切片系统 |
| `fig-cfd-simulation.png` | 会议论文目录 CFD仿真图 | 喷头流热耦合仿真 |

### 图片分配方案

```
┌─────────────────────────────────────────────────────────────────────┐
│  首页 3 个代表性项目                                                  │
├─────────────────────────────────────────────────────────────────────┤
│  大型高温FDM 3D打印设备研发  →  fig-device.jpg (设备实物图)           │
│  FDM挤出机热端MPC温控方法   →  fig-control-framework.png (控制框架图) │
│  基于AI Agent的智能切片系统  →  fig-ai-agent.png (系统架构图，暂缺)    │
├─────────────────────────────────────────────────────────────────────┤
│  项目页 4 个项目                                                     │
├─────────────────────────────────────────────────────────────────────┤
│  大型高温FDM 3D打印设备研发  →  fig-fdm-advantages.png (FDM优势图)    │
│  FDM挤出机热端MPC温控方法   →  fig-temp-comparison.png (温度对比图)   │
│  基于AI Agent的智能切片系统  →  fig-ai-agent.png (系统架构图，暂缺)    │
│  喷头流热耦合仿真           →  fig-cfd-simulation.png (CFD仿真图)    │
└─────────────────────────────────────────────────────────────────────┘
```

### 关于 AI Agent 切片系统图片

该项目的论文图暂缺，处理方式：
- 使用 `post_img.webp` 占位图暂时保留
- 后续有实际图片后再替换

## Risks / Trade-offs

- [图片格式] 原图格式为 jpg/png，直接复制到 `public/` 目录即可，无需转换
- [图片大小] 部分图片较大（如 `fig_identification.png` 约 2.9MB），建议后续优化压缩
- [AI Agent 图片] 暂无合适的实际图片，保留占位图等待后续补充