## Why

个人主页项目卡片和首页项目展示目前全部使用模板默认占位图 `/post_img.webp`，页面缺乏视觉吸引力。项目内容已经有详细的文字描述，但没有对应的实际图片来展示研究成果（设备实物图、控制框架图、仿真结果图等），降低了页面的专业性和可信度。

## What Changes

- 将首页 3 个代表性项目的占位图替换为对应的实际研究图片
- 将项目页 4 个项目的占位图替换为对应的实际研究图片
- 从 MPC 论文目录和会议论文目录中选取合适的图片，复制到 `public/` 目录
- 更新 `src/pages/index.astro` 和 `src/pages/projects.astro` 中的 `img` 引用路径

## Capabilities

### New Capabilities

- `project-images`: 为个人主页的所有项目卡片提供实际研究图片，替换模板默认占位图

### Modified Capabilities

<!-- 无现有 specs 需要修改 -->

## Impact

- 新增若干图片文件到 `public/` 目录
- 修改 `src/pages/index.astro` 中的 `HorizontalCard` 的 `img` 属性
- 修改 `src/pages/projects.astro` 中的 `HorizontalCard` 的 `img` 属性
- 删除不再使用的 `public/post_img.webp` 占位图（可选）