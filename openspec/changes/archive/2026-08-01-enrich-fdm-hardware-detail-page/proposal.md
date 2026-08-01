## Why

当前"大型高温FDM 3D打印设备研发"详情页 (`/projects/fdm-hardware`) 仅包含基础参数表格和简要文字描述，未能充分展示该设备从机械设计、电气系统到固件二次开发的完整工程深度。基于大论文第二章《高温FFF打印机控制系统总体设计》的丰富内容（机械系统设计、电气系统架构、传感网络、Klipper固件二次开发等），可以大幅提升详情页的专业展示深度与说服力。

## What Changes

- **重构项目详情页**: 完全重写 `src/pages/projects/fdm-hardware.astro`，将其从简单的参数表格页面升级为包含 5 大技术板块的工程作品集级详情页
- **新增内容板块**: 增加"项目背景与工程需求"、"4 大核心技术子系统"、设计挑战与解决方案等深度内容
- **保留动态 GIF 拓扑图**: 保留并放大展示新替换的硬件系统拓扑图 (`fig-hardware-topology.gif`)
- **更新相关资源区域**: 补充 GitHub 仓库链接 (`kalico` 固件仓库)

## Capabilities

### New Capabilities
- `fdm-hardware-detail`: 大型高温FDM 3D打印设备详情页，展示包含机械系统设计、电气系统架构、传感网络与固件二次开发的完整技术细节

### Modified Capabilities
- `project-detail-pages`: 更新"代表性项目"详情页的内容深度，为其他项目详情页提供展示标准

## Impact

**受影响文件**:
- 重写 `src/pages/projects/fdm-hardware.astro`
- 引用 `fig-hardware-topology.gif`、`fig-device.jpg` 图片资源