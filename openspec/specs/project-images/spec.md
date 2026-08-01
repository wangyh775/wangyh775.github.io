## Purpose

为个人主页的所有项目卡片提供实际的研究图片资源，替换模板默认占位图，增强页面视觉表现力和专业性。

## ADDED Requirements

### Requirement: 首页项目卡片必须使用实际研究图片

首页的 3 个代表性项目（大型高温FDM设备、MPC温控、AI Agent切片）SHALL 使用与项目内容对应的实际研究图片，不得继续使用模板占位图。

#### Scenario: 首页显示实际项目图片
- **WHEN** 用户访问首页 `/`
- **THEN** 3 个代表性项目卡片显示对应的实际研究图片（设备实物图、控制框架图、系统架构图等）

### Requirement: 项目页卡片必须使用实际研究图片

项目页的 4 个项目（大型高温FDM设备、MPC温控、AI Agent切片、喷头流热耦合仿真）SHALL 使用与项目内容对应的实际研究图片。

#### Scenario: 项目页显示实际项目图片
- **WHEN** 用户访问项目页 `/projects`
- **THEN** 所有 4 个项目卡片显示对应的实际研究图片

### Requirement: 图片文件必须存放在 public 目录

所有项目图片文件 SHALL 存放在 `public/` 目录下，确保 Astro 构建时可以正确引用。

#### Scenario: 图片文件可通过 URL 访问
- **WHEN** 图片存放在 `public/project-image.png`
- **THEN** 图片可通过 `/project-image.png` URL 路径访问

### Requirement: 图片路径必须在页面代码中正确引用

`src/pages/index.astro` 和 `src/pages/projects.astro` 中的 `HorizontalCard` 组件的 `img` 属性 SHALL 指向实际的图片文件路径。

#### Scenario: 页面代码引用正确的图片路径
- **WHEN** 页面代码中 `img="/fig-device.jpg"`
- **THEN** 对应的图片文件存在于 `public/fig-device.jpg`