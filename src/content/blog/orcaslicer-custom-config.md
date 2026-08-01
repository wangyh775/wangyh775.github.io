---
title: "OrcaSlicer 添加自定义 3D 打印机预设与耗材参数指南"
description: "详细记录在开源切片软件 OrcaSlicer 中配置自定义大尺寸高温 FDM 打印机机型、打印头几何参数与 PEEK 等材料预设的过程。"
pubDate: "2026-07-28"
heroImage: "/blog_img/orcaslicer-custom-config-img-1.png"
badge: "切片软件"
tags: ["OrcaSlicer", "3D打印", "切片预设", "PEEK"]
---

## 相关链接
[OrcaSlicer FDM切片软件的下载与安装教程](https://orcaslicer.cn/doc/OrcaSlicer-Doc001.html)
[OrcaSlicer的初始化配置](https://orcaslicer.cn/doc/OrcaSlicer-Doc002.html)
[OrcaSlicer/OrcaSlicer: G-code generator for 3D printers (Bambu, Prusa, Voron, VzBot, RatRig, Creality, etc.)](https://github.com/OrcaSlicer/OrcaSlicer)
[Home · OrcaSlicer/OrcaSlicer Wiki](https://github.com/OrcaSlicer/OrcaSlicer/wiki)

## OrcaSlicer添加自定义打印机预设

注：在开始添加自定义打印机之前，请先查看以下教程：
[OrcaSlicer FDM切片软件的下载与安装教程](https://orcaslicer.cn/doc/OrcaSlicer-Doc001.html)
[OrcaSlicer的初始化配置](https://orcaslicer.cn/doc/OrcaSlicer-Doc002.html)
注：本教程仅为简单图文教程，更深入请参阅下方官方指南《为OrcaSlicer开发配置文件》
[How to create profiles · OrcaSlicer/OrcaSlicer Wiki](https://github.com/OrcaSlicer/OrcaSlicer/wiki/How-to-create-profiles)
### 步骤1：打开打印机预设界面

首先点击界面上方的"打印机"预设选项：

![orcaslicer-custom-config](/blog_img/orcaslicer-custom-config-img-1.png)

### 步骤2：创建新的打印机配置

在打印机预设界面中，选择"创建打印机"选项：

![orcaslicer-custom-config](/blog_img/orcaslicer-custom-config-img-2.png)

### 步骤3：选择适合的模板

在弹出的窗口中，选择"找不到我的打印机预设"选项，然后根据你的打印机实际打印区域形状和大小进行参数修改：

![orcaslicer-custom-config](/blog_img/orcaslicer-custom-config-img-3.png)

你可以随意选择一个预设作为模板，后续可以完全自定义修改。选择完毕后点击"创建打印机"按钮。

### 步骤4：配置打印机参数

创建完成后，会弹出打印机设置窗口，或者你可以通过以下方式打开设置：

![orcaslicer-custom-config](/blog_img/orcaslicer-custom-config-img-4.png)

在设置窗口中，根据你的打印机实际情况配置以下重要参数：

1. **基本参数**：
   - 打印机名称：为你的打印机设置一个易于识别的名称
   - 成型尺寸（打印平台大小）：准确输入你的打印机最大打印尺寸(X,Y,Z轴)
   - 喷嘴直径：根据实际使用的喷嘴规格设置(如0.4mm, 0.6mm等)
   - 喷嘴数量：单喷嘴设为1，多喷嘴根据实际数量设置

2. **G-code参数**：
   - G-code风格（根据你的主板固件选择，如Marlin、Klipper等）
   - 启动G-code（打印开始前执行的代码）：通常包括加热、调平、清洁等操作
   - 结束G-code（打印结束后执行的代码）：通常包括关闭加热、停机等操作
   - 暂停G-code（暂停打印时执行的代码）：处理打印中断情况
   - 恢复G-code（恢复打印时执行的代码）：从中断处继续打印

3. **高级设置**：
   - 热床温度范围：设置热床可工作的最低和最高温度
   - 喷嘴温度范围：设置喷嘴可工作的最低和最高温度
   - 最大移动速度：限制打印机各轴的最大移动速度
   - 加速度参数：影响打印机运动的平稳性和打印质量

配置示例界面：

![orcaslicer-custom-config](/blog_img/orcaslicer-custom-config-img-5.png)

配置完成后记得点击"保存预设"。

## OrcaSlicer添加自定义耗材预设

### 步骤1：打开耗材预设界面

在OrcaSlicer主界面左侧选择"耗材"选项卡，然后点击"添加新材料"按钮。

![orcaslicer-custom-config](/blog_img/orcaslicer-custom-config-img-6.png)

### 步骤2：创建耗材配置

1. 选择"自建材料"
2. 点击"新建"按钮

![orcaslicer-custom-config](/blog_img/orcaslicer-custom-config-img-7.png)

选择材料基本信息，然后点击创建：

![orcaslicer-custom-config](/blog_img/orcaslicer-custom-config-img-8.png)

### 步骤3：配置耗材参数

点击"编辑材料"按钮进入详细配置界面：

![orcaslicer-custom-config](/blog_img/orcaslicer-custom-config-img-9.png)

修改耗材的各种参数，如类型、供应商、文档等等：

![orcaslicer-custom-config](/blog_img/orcaslicer-custom-config-img-10.png)

不清楚某个功能的作用时，可以点击相应条目查看官方文档（不是所有条目都支持在线文档）：

![orcaslicer-custom-config](/blog_img/orcaslicer-custom-config-img-11.png)

主要配置参数包括：

1. **基础信息**：
   - 材料类型：如PLA、PETG、ABS等
   - 供应商：材料品牌厂商
   - 材料颜色：用于区分不同颜色的相同材料

2. **打印参数**：
   - 打印温度：推荐的喷嘴打印温度范围
   - 热床温度：推荐的热床温度范围
   - 打印速度：针对该材料的推荐打印速度

3. **物理特性**：
   - 密度：材料密度，用于重量计算
   - 直径：耗材丝直径，通常是1.75mm或3mm

### 步骤4：保存耗材配置

配置完成后点击"保存预设"按钮，即可在后续切片时选择使用这个自定义耗材配置。

## 注意事项

1. 创建自定义预设时建议先复制系统预设再修改，避免直接修改系统预设
2. 不同材质的耗材参数差异较大，建议针对每种材料单独创建预设
3. 打印机的G-code设置需要根据实际使用的主板固件进行调整
4. 保存的预设可以在OrcaSlicer的配置目录中找到，便于备份和迁移
5. 建议在实际打印前先测试自定义配置，确保参数正确