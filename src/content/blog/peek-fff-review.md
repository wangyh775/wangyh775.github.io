---
title: "【综述阅读】PEEK 聚合物熔丝制备（FFF）：工艺-结构-性能关系详述"
description: "深入分析 PEEK 特种工程塑料在 3D 打印过程中的热结晶动力学、层间粘结强度、孔隙率控制与工艺参数优化策略。"
pubDate: "2020-07-27"
heroImage: "/blog_img/peek-fff-review-img-1.jpg"
badge: "特种材料"
tags: ["PEEK", "FFF", "高温3D打印", "材料性能", "文献综述"]
---


|                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **作者:** Ali Reza Zanjanijam; Ian Major; John G. Lyons; Ugo Lafont; Declan M. Devine;                                                                                                                                                                                                                                                                                                                                                          |
| **期刊: Polymers （发表日期: 2020-07-27）**                                                                                                                                                                                                                                                                                                                                                                                                           |
| **期刊分区:** ㅤㅤ ㅤㅤIF 4.9 ㅤㅤ ㅤㅤ ㅤㅤ ㅤㅤ ㅤㅤ ㅤㅤSCI Q1 ㅤㅤ ㅤㅤ ㅤㅤ ㅤㅤ ㅤㅤ ㅤㅤ中科院 工程技术3区 ㅤㅤ ㅤㅤ                                                                                                                                                                                                                                                                                                                                                               |
| **本地链接:** Zanjanijam 等 - 2020 - Fused Filament Fabrication of PEEK A Review of Process-Structure-Property Relationships.pdf                                                                                                                                                                                                                                                                                   |
| **DOI:** [10.3390/polym12081665](https://doi.org/10.3390/polym12081665)                                                                                                                                                                                                                                                                                                                                                                       |
| **摘要翻译:** _聚醚醚酮 （PEEK） 是一种高性能工程热塑性聚合物，由于其高强度重量比，具有用于各种金属替代应用的潜力。这种特性的组合使其成为用于生产用于地球外制造目的的定制替换零件的理想材料，特别是在国际空间站 （ISS） 上。增材制造 （AM） 可用于生产这些零件，因为它为具有复杂设计考虑的物品提供了新的制造途径。然而，通过熔丝制造（FFF）对PEEK进行增材制造面临重大挑战，主要源于PEEK的半结晶性质及其相关的高熔点。这使得 PEEK 极易受到加工条件变化的影响，从而导致文献中关于 PEEK 最终性能的报道存在很大差异。这限制了 PEEK 的 FFF 打印在质量保证和可重复性至关重要的空间应用中的适用性。近年来，多项研究检查了打印参数对 3D 打印 PEEK 零件性能的影响。本综述的目的是提供有关 PEEK FFF 3D 打印中工艺-结构-性能关系的全面信息，为研究界提供明确的基线，并评估其在太空应用（包括地球外制造）中的潜力。_ |
| **笔记日期:** 2025/9/7 09:29:47                                                                                                                                                                                                                                                                                                                                                                                                                   |
## 摘要 

聚醚醚酮（PEEK）是一种高性能工程热塑性聚合物，因其高比强度而有望用于多种金属替代应用。这种性能组合使其成为生产用于地外制造（特别是国际空间站（ISS））的定制替换部件的理想材料。增材制造（AM）可用于生产这些部件，因为它为具有复杂设计考量的制品开辟了新的制造途径。然而，通过熔融沉积成型（FFF）技术进行PEEK的增材制造面临着重大挑战，这主要源于PEEK的半结晶特性及其相关的高熔融温度。这使得PEEK对加工条件的变化极为敏感，导致文献中关于PEEK最终性能的报道存在很大差异。这限制了PEEK的FFF打印技术在空间应用中的应用，而在空间应用中，质量保证和可重复性至关重要。近年来，多项研究探讨了打印参数对3D打印PEEK部件性能的影响。本综述旨在提供关于PEEK的FFF 3D打印中工艺-结构-性能关系的全面信息，为研究界提供明确的基准，并评估其在空间应用（包括地外制造）中的潜力。

关键词：[聚醚醚酮（PEEK）](https://www.mdpi.com/search?q=PEEK)；[增材制造](https://www.mdpi.com/search?q=additive+manufacturing)；[3D打印](https://www.mdpi.com/search?q=3D+printing)；[熔融沉积成型（FFF）](https://www.mdpi.com/search?q=fused+filament+fabrication+%28FFF%29)；[国际空间站（ISS）](https://www.mdpi.com/search?q=international+space+station+%28ISS%29)

[!z-附件/a00d690047526e50cc0394bf44a96685_MD5.jpg](https://www.mdpi.com/2073-4360/12/8/1665#)

[](https://pub.mdpi-res.com/polymers/polymers-12-01665/article_deploy/html/images/polymers-12-01665-ag.png?1598607071 "<strong>Graphical Abstract</strong>")

图形摘要

## 1. 引言

增材制造（AM）是一种基于逐层制造原理的技术，能够生产复杂的聚合物、金属和陶瓷零件。采用这种革命性方法可以缩短产品开发的周期并降低成本[[1](https://www.mdpi.com/2073-4360/12/8/1665#B1-polymers-12-01665)，[2](https://www.mdpi.com/2073-4360/12/8/1665#B2-polymers-12-01665)]。通过增材制造生产聚合物零件通常采用三种不同工艺中的一种，分别是立体光刻（SLA）[[3](https://www.mdpi.com/2073-4360/12/8/1665#B3-polymers-12-01665)，[4](https://www.mdpi.com/2073-4360/12/8/1665#B4-polymers-12-01665)]、选择性激光烧结（SLS）[[5](https://www.mdpi.com/2073-4360/12/8/1665#B5-polymers-12-01665)，[6](https://www.mdpi.com/2073-4360/12/8/1665#B6-polymers-12-01665)，[7](https://www.mdpi.com/2073-4360/12/8/1665#B7-polymers-12-01665)]和熔融 filament 制造（FFF）[[8](https://www.mdpi.com/2073-4360/12/8/1665#B8-polymers-12-01665)，[9](https://www.mdpi.com/2073-4360/12/8/1665#B9-polymers-12-01665)，[10](https://www.mdpi.com/2073-4360/12/8/1665#B10-polymers-12-01665)]。在立体光刻中，光聚合物树脂通过能源（主要是紫外激光）固化，形成所需物体的单层。立体光刻是最早开发的3D打印设备，通常能提供最佳的分辨率[[2](https://www.mdpi.com/2073-4360/12/8/1665#B2-polymers-12-01665)]。然而，所使用的树脂必须是可紫外固化的，这限制了该技术可使用的材料。选择性激光烧结采用激光烧结聚合物粉末作为原料。它已被用作克服其他方法缺陷的技术[[11](https://www.mdpi.com/2073-4360/12/8/1665#B11-polymers-12-01665)，[12](https://www.mdpi.com/2073-4360/12/8/1665#B12-polymers-12-01665)]。但使用选择性激光烧结需要昂贵的设备，这是生产产品的一大障碍[[13](https://www.mdpi.com/2073-4360/12/8/1665#B13-polymers-12-01665)]。熔融 filament 制造，也称为熔融沉积建模（FDM），是基于计算机辅助设计（CAD）制造热塑性聚合物零件最常用的增材制造技术。在熔融 filament 制造过程中，聚合物 filament 被连续送入液化器，熔化后通过喷嘴挤出，在加热台上构建逐层结构。这种三维（3D）打印技术具有制造成本低、结构设计灵活和无需监督操作等优点[[14](https://www.mdpi.com/2073-4360/12/8/1665#B14-polymers-12-01665)，[15](https://www.mdpi.com/2073-4360/12/8/1665#B15-polymers-12-01665)，[16](https://www.mdpi.com/2073-4360/12/8/1665#B16-polymers-12-01665)，[17](https://www.mdpi.com/2073-4360/12/8/1665#B17-polymers-12-01665)]。通过熔融 filament 制造打印的最常见聚合物是丙烯腈-丁二烯-苯乙烯（ABS）[[18](https://www.mdpi.com/2073-4360/12/8/1665#B18-polymers-12-01665)，[19](https://www.mdpi.com/2073-4360/12/8/1665#B19-polymers-12-01665)，[20](https://www.mdpi.com/2073-4360/12/8/1665#B20-polymers-12-01665)]和聚乳酸（PLA）[[21](https://www.mdpi.com/2073-4360/12/8/1665#B21-polymers-12-01665)，[22](https://www.mdpi.com/2073-4360/12/8/1665#B22-polymers-12-01665)，[23](https://www.mdpi.com/2073-4360/12/8/1665#B23-polymers-12-01665)]。不过，其他聚合物如聚醚酰亚胺（PEI）[[24](https://www.mdpi.com/2073-4360/12/8/1665#B24-polymers-12-01665)，[25](https://www.mdpi.com/2073-4360/12/8/1665#B25-polymers-12-01665)，[26](https://www.mdpi.com/2073-4360/12/8/1665#B26-polymers-12-01665)]、聚碳酸酯（PC）[[27](https://www.mdpi.com/2073-4360/12/8/1665#B27-polymers-12-01665)，[28](https://www.mdpi.com/2073-4360/12/8/1665#B28-polymers-12-01665)，[29](https://www.mdpi.com/2073-4360/12/8/1665#B29-polymers-12-01665)]、聚苯乙烯（PS）[[30](https://www.mdpi.com/2073-4360/12/8/1665#B30-polymers-12-01665)，[31](https://www.mdpi.com/2073-4360/12/8/1665#B31-polymers-12-01665)]、聚酰胺（PA）[[32](https://www.mdpi.com/2073-4360/12/8/1665#B32-polymers-12-01665)，[33](https://www.mdpi.com/2073-4360/12/8/1665#B33-polymers-12-01665)，[34](https://www.mdpi.com/2073-4360/12/8/1665#B34-polymers-12-01665)]、聚丙烯（PP）[[35](https://www.mdpi.com/2073-4360/12/8/1665#B35-polymers-12-01665)，[36](https://www.mdpi.com/2073-4360/12/8/1665#B36-polymers-12-01665)，[37](https://www.mdpi.com/2073-4360/12/8/1665#B37-polymers-12-01665)]、聚乙烯醇（PVA）[[38](https://www.mdpi.com/2073-4360/12/8/1665#B38-polymers-12-01665)，[39](https://www.mdpi.com/2073-4360/12/8/1665#B39-polymers-12-01665)，[40](https://www.mdpi.com/2073-4360/12/8/1665#B40-polymers-12-01665)，[41](https://www.mdpi.com/2073-4360/12/8/1665#B41-polymers-12-01665)]、聚乙烯（PE）[[42](https://www.mdpi.com/2073-4360/12/8/1665#B42-polymers-12-01665)，[43](https://www.mdpi.com/2073-4360/12/8/1665#B43-polymers-12-01665)]、聚己内酯（PCL）[[44](https://www.mdpi.com/2073-4360/12/8/1665#B44-polymers-12-01665)，[45](https://www.mdpi.com/2073-4360/12/8/1665#B45-polymers-12-01665)]、聚苯硫醚（PPS）[[46](https://www.mdpi.com/2073-4360/12/8/1665#B46-polymers-12-01665)]以及聚合物共混物[[47](https://www.mdpi.com/2073-4360/12/8/1665#B47-polymers-12-01665)，[48](https://www.mdpi.com/2073-4360/12/8/1665#B48-polymers-12-01665)，[49](https://www.mdpi.com/2073-4360/12/8/1665#B49-polymers-12-01665)，[50](https://www.mdpi.com/2073-4360/12/8/1665#B50-polymers-12-01665)，[51](https://www.mdpi.com/2073-4360/12/8/1665#B51-polymers-12-01665)]也已被研究。

聚醚醚酮（PEEK）是聚芳醚酮（PAEK）家族的重要成员，具有许多优良特性。PEEK于1978年由帝国化学工业公司首次生产，此后在不同行业引起了广泛关注[[52](https://www.mdpi.com/2073-4360/12/8/1665#B52-polymers-12-01665)]。由于其线性芳香结构（[图1](https://www.mdpi.com/2073-4360/12/8/1665#fig_body_display_polymers-12-01665-f001)），这种高性能热塑性聚合物具有优异的耐热性、机械性能[[53](https://www.mdpi.com/2073-4360/12/8/1665#B53-polymers-12-01665)]、低线膨胀系数和化学稳定性（仅在60°C时可溶于硫酸[[54](https://www.mdpi.com/2073-4360/12/8/1665#B54-polymers-12-01665)，[55](https://www.mdpi.com/2073-4360/12/8/1665#B55-polymers-12-01665)]）。PEEK的物理和机械性能列于[表1](https://www.mdpi.com/2073-4360/12/8/1665#table_body_display_polymers-12-01665-t001)中。其熔融温度（Tm）为343°C，玻璃化转变温度（Tg）为143°C[[56](https://www.mdpi.com/2073-4360/12/8/1665#B56-polymers-12-01665)]，使用温度高达260°C[[57](https://www.mdpi.com/2073-4360/12/8/1665#B57-polymers-12-01665)]。PEEK具有高杨氏模量和拉伸强度，同时比重低，这使其能够在广泛的应用中替代铝或钢，特别是在航空航天和汽车应用中，且在航天工业中使用PEEK的兴趣日益浓厚[[58](https://www.mdpi.com/2073-4360/12/8/1665#B58-polymers-12-01665)，[59](https://www.mdpi.com/2073-4360/12/8/1665#B59-polymers-12-01665)]。此外，由于PEEK具有生物相容性和射线透过性，它是生物医学应用的理想材料，尤其可作为贵金属植入物的合适替代品[[60](https://www.mdpi.com/2073-4360/12/8/1665#B60-polymers-12-01665)，[61](https://www.mdpi.com/2073-4360/12/8/1665#B61-polymers-12-01665)，[62](https://www.mdpi.com/2073-4360/12/8/1665#B62-polymers-12-01665)，[63](https://www.mdpi.com/2073-4360/12/8/1665#B63-polymers-12-01665)，[64](https://www.mdpi.com/2073-4360/12/8/1665#B64-polymers-12-01665)，[65](https://www.mdpi.com/2073-4360/12/8/1665#B65-polymers-12-01665)，[66](https://www.mdpi.com/2073-4360/12/8/1665#B66-polymers-12-01665)，[67](https://www.mdpi.com/2073-4360/12/8/1665#B67-polymers-12-01665)，[68](https://www.mdpi.com/2073-4360/12/8/1665#B68-polymers-12-01665)]。它还可以反复灭菌，非常适合用于手术器械和牙科设备[[64](https://www.mdpi.com/2073-4360/12/8/1665#B64-polymers-12-01665)，[69](https://www.mdpi.com/2073-4360/12/8/1665#B69-polymers-12-01665)]。

!"Polymers 12 01665 g001"[](https://www.mdpi.com/2073-4360/12/8/1665#fig_body_display_polymers-12-01665-f001)

图1.聚醚醚酮（PEEK）的化学结构[[60](https://www.mdpi.com/2073-4360/12/8/1665#B60-polymers-12-01665)]。

表1.聚醚醚酮（PEEK）的物理和机械性能[[77](https://www.mdpi.com/2073-4360/12/8/1665#B77-polymers-12-01665)]。

|Material Properties|Typical Value|
|:-:|:-:|
|Density|1.3 g/cm3|
|Melting temperature|343 °C|
|Glass transition temperature|143 °C|
|Coefficient of thermal expansion|Average below Tg: 55 ppm/k Average above Tg: 140 ppm/k|
|Heat deflection temperature|152 °C|
|Thermal conductivity|0.32 W/ m.k|
|Young’s modulus|4 GPa|
|Tensile strength|100 MPa|
|Elongation at break|45%|
|Flexural modulus|3.9 GPa|
|Flexural strength|162 MPa|
|Compressive modulus|3.2 GPa|
|Compressive strength|125 MPa|
|Shore D hardness|84.5|
|Water absorption|0.45%|
|Flammability|V-0|

聚醚醚酮（PEEK）基产品的加工方法有多种，包括挤出成型、注塑成型、压缩成型、机械加工、粉末喷涂等[[70](https://www.mdpi.com/2073-4360/12/8/1665#B70-polymers-12-01665),[71](https://www.mdpi.com/2073-4360/12/8/1665#B71-polymers-12-01665),[72](https://www.mdpi.com/2073-4360/12/8/1665#B72-polymers-12-01665),[73](https://www.mdpi.com/2073-4360/12/8/1665#B73-polymers-12-01665)]。这些技术的主要缺点是在制造复杂设计的零件时缺乏灵活性。增材制造似乎有潜力以经济高效的方式生产不受几何形状限制的PEEK零件。考虑到PEEK的熔体加工性能，选择性激光烧结（SLS）和熔融沉积成型（FFF）均可用于3D打印零件的生产。SLS是最早用于PEEK制造的增材制造工艺[[11](https://www.mdpi.com/2073-4360/12/8/1665#B11-polymers-12-01665)]。然而，与FFF相比，它更复杂且成本更高[[74](https://www.mdpi.com/2073-4360/12/8/1665#B74-polymers-12-01665),[75](https://www.mdpi.com/2073-4360/12/8/1665#B75-polymers-12-01665)]。其局限性之一在于未熔融的PEEK粉末的回收利用，这会增加加工成本[[76](https://www.mdpi.com/2073-4360/12/8/1665#B76-polymers-12-01665)]。此外，若要将此类工艺应用于地外制造（在轨道或行星上），低重力的影响以及健康和安全方面的因素使得粉末的使用不太合适。在这方面，以 filament 为原料的FFF工艺已在国际空间站的低重力环境中成功应用。因此，近年来人们对通过FFF技术3D打印PEEK以在国际空间站现场生产零件的兴趣日益浓厚。然而，与采用注塑成型等传统加工方法生产的PEEK零件相比，3D打印PEEK的一个重大挑战是其力学性能的各向异性。因此，了解增材制造中不同工艺参数对打印零件最终性能的影响，从而找到最佳的工艺参数水平，是制造出具有理想且可重复性能的PEEK终端零件的关键。本综述旨在探讨相关挑战，并为通过FFF技术3D打印PEEK提供全面且实用的指南。为此，重点将放在主要基于拉伸强度性能的PEEK基打印零件的工艺-结构-性能关系上。

## 2. 聚醚醚酮（PEEK）3D打印的挑战

PEEK是一种很有前景的工程聚合物，适用于许多高性能应用场景。最近，通过3D打印加工PEEK引起了广泛关注。然而，在制造具有理想性能的零件时存在一些障碍和困难。这些障碍既源于熔融沉积成型（FFF）固有的问题，如热梯度，也与PEEK特定的物理性能有关。

在逐层制造过程中，会积累残余应力，从而导致翘曲和层间分层[[78](https://www.mdpi.com/2073-4360/12/8/1665#B78-polymers-12-01665)，[79](https://www.mdpi.com/2073-4360/12/8/1665#B79-polymers-12-01665)]。对于聚醚醚酮（PEEK）等具有高熔融温度的半结晶聚合物的增材制造而言，这些问题更为关键，且会显著影响尺寸精度和力学性能[[80](https://www.mdpi.com/2073-4360/12/8/1665#B80-polymers-12-01665)，[81](https://www.mdpi.com/2073-4360/12/8/1665#B81-polymers-12-01665)，[82](https://www.mdpi.com/2073-4360/12/8/1665#B82-polymers-12-01665)]。实际上，PEEK从熔体结晶过程中的冷却速率和温度梯度，对其结晶完善程度有着极大的影响[[83](https://www.mdpi.com/2073-4360/12/8/1665#B83-polymers-12-01665)]。熔融沉积成型（FFF）工艺在诸多方面与注塑成型不同，因此，打印出的聚合物零件中会形成缺陷，进而导致最终性能下降，这是可以预见的。注塑成型PEEK的扫描电镜显微照片呈现出韧性断裂表面的特征，而3D打印PEEK由于脆性断裂，表面较为光滑。注塑成型会施加外部压力，减少内部缺陷，从而获得更好的韧性。但3D打印并非如此，因此打印样品的性能相对较差[[84](https://www.mdpi.com/2073-4360/12/8/1665#B84-polymers-12-01665)]。

为了使通过FFF技术制造的聚醚醚酮（PEEK）零件达到预期的物理和机械性能，必须考虑聚合物的加工特性。对于前者，需要了解其流变性能、结晶动力学等。同时，还需要了解增材制造工艺，以确保FFF打印机是兼容的高温打印机，并确定最佳的打印参数。为了说明文献中使用非优化条件所报告的差异，[图2](https://www.mdpi.com/2073-4360/12/8/1665#fig_body_display_polymers-12-01665-f002)展示了来自不同来源的3D打印PEEK样品的拉伸性能。报告中可以看到机械性能的数值范围很广。大多数结果与块状材料（通过注塑成型加工）的性能相去甚远。这种机械性能的巨大差异是由于作者选择的不同打印参数造成的，如打印方向、喷嘴温度、环境温度、打印床温度、打印机类型、PEEK类型等。Rinaldi等人[[85](https://www.mdpi.com/2073-4360/12/8/1665#B85-polymers-12-01665)]、Tseng等人[[86](https://www.mdpi.com/2073-4360/12/8/1665#B86-polymers-12-01665)]、Han等人[[87](https://www.mdpi.com/2073-4360/12/8/1665#B87-polymers-12-01665)]和Yang等人[[88](https://www.mdpi.com/2073-4360/12/8/1665#B88-polymers-12-01665)]报告的数值大约等于注塑成型PEEK的数值，在某些情况下，其杨氏模量和拉伸强度的数值甚至更高。通过FFF技术制造的PEEK零件的弯曲和压缩数据也有报告，尽管报告数量少于拉伸性能的报告。[图3](https://www.mdpi.com/2073-4360/12/8/1665#fig_body_display_polymers-12-01665-f003)展示了FFF 3D打印PEEK的弯曲和压缩数据的汇总结果。根据结果，所记录的弯曲模量和弯曲强度数值与注塑成型PEEK的数值不匹配。相比之下，有报告称FFF 3D打印PEEK的压缩强度超过了注塑成型零件的压缩强度。例如，Daurskikh等人[[89](https://www.mdpi.com/2073-4360/12/8/1665#B89-polymers-12-01665)]和Wang等人[[90](https://www.mdpi.com/2073-4360/12/8/1665#B90-polymers-12-01665)]分别获得了126.4 MPa和125 MPa的压缩强度。更有趣的是，Han等人[[87](https://www.mdpi.com/2073-4360/12/8/1665#B87-polymers-12-01665)]和Tseng等人[[86](https://www.mdpi.com/2073-4360/12/8/1665#B86-polymers-12-01665)]的报告中，PEEK样品的压缩强度分别比块状PEEK提高了11%和12%。

![[z-附件/3932bef5469cb5366647cc7a78c5c9d7_MD5.jpg|"Polymers 12 01665 g002a")![Polymers 12 01665 g002b](https://www.mdpi.com/polymers/polymers-12-01665/article_deploy/html/images/polymers-12-01665-g002b-550.jpg "Polymers 12 01665 g002b"]][](https://www.mdpi.com/2073-4360/12/8/1665#fig_body_display_polymers-12-01665-f002)

图2. 文献中报道的3D打印聚醚醚酮（PEEK）的拉伸性能值。

!"Polymers 12 01665 g003"[](https://www.mdpi.com/2073-4360/12/8/1665#fig_body_display_polymers-12-01665-f003)

图3. 文献中报道的3D打印聚醚醚酮（PEEK）的弯曲和压缩性能值。三角形和圆形符号分别代表强度和模量数据。

对文献中增材制造工艺条件的比较表明，通过选择合适的打印参数组合，如较高的打印温度、打印床温度和构建方向，可使熔融沉积成型（FFF）3D打印聚醚醚酮（PEEK）获得最佳的力学性能。文献中报道的通过熔融沉积成型技术3D打印聚醚醚酮的参数列于[表2](https://www.mdpi.com/2073-4360/12/8/1665#table_body_display_polymers-12-01665-t002)中。关于喷嘴和打印床，已有报道的温度范围较广，其温度值分别在340–520°C和100–300°C之间。最常用的喷嘴直径为0.4毫米，不过在某些情况下也会使用直径更大的喷嘴。研究人员还使用了不同的商用以及改装/定制的熔融沉积成型打印机。[表3](https://www.mdpi.com/2073-4360/12/8/1665#table_body_display_polymers-12-01665-t003)汇总了制造商推荐的商用聚醚醚酮长丝的打印条件。这些参数仅适用于一般情况，可能需要根据所使用的熔融沉积成型设备进行调整。实际上，由于打印机类型、零件几何形状和体积等存在较大差异，可能需要根据所采用的长丝与熔融沉积成型打印机的组合来设置不同的参数。因此，本综述旨在全面深入地探讨增材制造聚醚醚酮零件的工艺、结构与性能之间的关系。此外，除了3D打印过程中聚醚醚酮的热稳定性外，还将考虑打印路径参数和工艺条件对聚醚醚酮零件性能的影响。后者在封闭环境中加工时至关重要，如在国际空间站（ISS）中所见，因此还将考虑聚醚醚酮的热稳定性及其在不同条件下的降解情况。

表2.通过熔融沉积成型（FFF）技术进行聚醚醚酮（PEEK）3D打印的参数。

|                                                                                   Study                                                                                   |               PEEK               |                    Printing Machine                    |  Nozzle Temperature (°C)  | Nozzle Diameter (mm) |       Printing Speed (mm/s)       | Bed Temperature (°C) |           Layer Thickness (mm)            | Infill Density (%) |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------: | :----------------------------------------------------: | :-----------------------: | :------------------: | :-------------------------------: | :------------------: | :---------------------------------------: | :----------------: |
|                                            Basgul, 2018 [[91](https://www.mdpi.com/2073-4360/12/8/1665#B91-polymers-12-01665)]                                            |         PEEK OPTIMA™ LT1         |                 Indmatec HPP 155/Gen 2                 |          390–410          |         0.4          |         1000–3000 mm/min          |         100          | 1st layer height: 0.1 Top solid layers: 3 |        100         |
|                                              Wu, 2015 [[92](https://www.mdpi.com/2073-4360/12/8/1665#B92-polymers-12-01665)]                                              |      PEEK Jilin University       |                  custom-build printer                  |             -             |         0.4          |                 -                 |          -           |                  0.2–0.4                  |         -          |
|                                             Yang, 2017 [[88](https://www.mdpi.com/2073-4360/12/8/1665#B88-polymers-12-01665)]                                             |         VictrexPEEK 450G         |                  custom-build printer                  |          360–480          |         0.4          |                40                 |          -           |                    0.2                    |         -          |
|                                             Arif, 2018 [[93](https://www.mdpi.com/2073-4360/12/8/1665#B93-polymers-12-01665)]                                             |        Victrex PEEK 450G         |                    Indmatec HPP 155                    | 410 °C; 1st layer: 390 °C |         0.4          | 800 mm/min; 1st layer: 300 mm/min |         100          |           0.1; 1st layer: 0.18            |        100         |
|                                            Rahman, 2015 [[94](https://www.mdpi.com/2073-4360/12/8/1665#B94-polymers-12-01665)]                                            |            Arevo Labs            |                       Arevo Labs                       |            340            |         1.8          |                50                 |         230          |                   0.25                    |        100         |
|                                           Rinaldi, 2018 [[85](https://www.mdpi.com/2073-4360/12/8/1665#B85-polymers-12-01665)]                                            |       Victrex PEEK 450 PF        |                        Indmatec                        |            400            |         0.4          |                20                 |         100          |                     -                     |       20–100       |
|                                             Geng, 2019 [[95](https://www.mdpi.com/2073-4360/12/8/1665#B95-polymers-12-01665)]                                             |          VICTREX 450 G           |               self-made printing system                |            360            |       0.4–0.6        |  extrusion speed: 0.1–120 mm/min  |         110          |                     -                     |         -          |
|                                             Ding, 2019 [[96](https://www.mdpi.com/2073-4360/12/8/1665#B96-polymers-12-01665)]                                             |       450G, Junhua, China        |                  custom-build printer                  |          360–420          |         0.4          |                20                 |         270          |                    0.2                    |         -          |
|                                             Wang, 2019 [[84](https://www.mdpi.com/2073-4360/12/8/1665#B84-polymers-12-01665)]                                             |                -                 |                  custom-build printer                  |          360–460          |       0.4–0.8        |               17–26               |         280          |                  0.1–0.5                  |         -          |
|                                             Deng, 2018 [[97](https://www.mdpi.com/2073-4360/12/8/1665#B97-polymers-12-01665)]                                             |      PEEK-ZhongshanYousheng      |                  custom-build printer                  |          350–370          |          -           |               20–60               |          -           |                  0.2–0.3                  |       20–60        |
|                                             Zhao, 2018 [[69](https://www.mdpi.com/2073-4360/12/8/1665#B69-polymers-12-01665)]                                             |         Victrex PEEK450G         |                    homemade printer                    |          355–375          |         0.4          |                30                 |       230–270        |                    0.2                    |        100         |
|                                            Tseng, 2018 [[86](https://www.mdpi.com/2073-4360/12/8/1665#B86-polymers-12-01665)]                                             | Victrex (PEEK 90G and PEEK 450G) |     a new screw extrusion-based 3D printing system     |          370–390          |          -           |                 -                 |         280          |                     -                     |         -          |
|                                          Honigmann, 2018 [[98](https://www.mdpi.com/2073-4360/12/8/1665#B98-polymers-12-01665)]                                           |          Apium PEEK 450          |                       Apium P220                       |         Up to 520         |         0.4          |                 -                 |      Up to 160       |                  0.1–0.3                  |         -          |
|                                          Stepashkin, 2018 [[99](https://www.mdpi.com/2073-4360/12/8/1665#B99-polymers-12-01665)]                                          |  CF-composite Victrex 150 CA30   |                  custom-build printer                  |            380            |         0.35         |            100 mm/min             |          95          |                   0.25                    |        100         |
|                                          Berretta, 2017 [[100](https://www.mdpi.com/2073-4360/12/8/1665#B100-polymers-12-01665)]                                          | VICTREX® 450G/Plasticyl PEEK 101 |                     MendleMax v2.0                     |          350–390          |          -           |                30                 |         300          |                     -                     |         -          |
|                                          Xiaoyon, 2017 [[101](https://www.mdpi.com/2073-4360/12/8/1665#B101-polymers-12-01665)]                                           |                -                 |                           -                            |             -             |         0.4          |                20                 |        25–130        |                    0.8                    |        100         |
|                                             Wu, 2014 [[102](https://www.mdpi.com/2073-4360/12/8/1665#B102-polymers-12-01665)]                                             |      PEEK Jilin University       |                  custom-build printer                  |          340–360          |          -           |                 -                 |         150          |                    0.3                    |         -          |
|                                          Daurskikh, 2018 [[89](https://www.mdpi.com/2073-4360/12/8/1665#B89-polymers-12-01665)]                                           |        Victrex PEEK 450G         |                           -                            |             -             |          -           |                 -                 |          -           |                     -                     |        100         |
|                                           Vaezi, 2015 [[103](https://www.mdpi.com/2073-4360/12/8/1665#B103-polymers-12-01665)]                                            |        Victrex PEEK 450G         |                           -                            |          350–450          |          -           |                 -                 |      Up to 130       |                    0.2                    |         -          |
|                                             Wang, 2019 [[90](https://www.mdpi.com/2073-4360/12/8/1665#B90-polymers-12-01665)]                                             |      Apium PEEK 450 Natural      | Hyrel Hydra 16AS, Indmatec HPP 155, Intamsys FUNMAT HT |            400            |         0.4          |                20                 |         100          |                  0.1–0.2                  |        100         |
|                                           Cicala, 2017 [[104](https://www.mdpi.com/2073-4360/12/8/1665#B104-polymers-12-01665)]                                           |             Luvocomm             |                    Roboze one 400+                     |            420            |          -           |                20                 |         110          |                    0.1                    |         75         |
|                                             Han, 2019 [[87](https://www.mdpi.com/2073-4360/12/8/1665#B87-polymers-12-01665)]                                              |        Victrex PEEK 450G         |                  Jugao-AM Tech. Corp                   |            420            |         0.4          |                40                 |          -           |                    0.2                    |         -          |
|                                            Han, 2019 [[105](https://www.mdpi.com/2073-4360/12/8/1665#B105-polymers-12-01665)]                                             |      Evonik VESTAKEEP®i4 G       |                       Apium P220                       |            480            |         0.4          |                 -                 |         130          |                    0.2                    |         -          |
|                                          Gonçalve, 2018 [[106](https://www.mdpi.com/2073-4360/12/8/1665#B106-polymers-12-01665)]                                          |        Victrex PEEK 450G         |                    Indmatec HPP 155                    |            400            |         0.4          |                20                 |         100          |                    0.1                    |        100         |
|                                             Li, 2019 [[107](https://www.mdpi.com/2073-4360/12/8/1665#B107-polymers-12-01665)]                                             |           ZYPEEK 550 G           |                       FUNMAT HT                        |            400            |         0.4          |                15                 |         160          |                    0.1                    |        100         |
|                                             Hu, 2019 [[108](https://www.mdpi.com/2073-4360/12/8/1665#B108-polymers-12-01665)]                                             |        Sting3d Technology        |                 Modified Speedy Maker                  |            385            |         0.4          |                25                 |         135          |                    0.1                    |        100         |
|                                            Wang, 2019 [[109](https://www.mdpi.com/2073-4360/12/8/1665#B109-polymers-12-01665)]                                            |        PEEK 450G, Junhua         |                           -                            |          380–420          |         0.4          |               5–25                |       220–300        |                  0.1–0.3                  |        100         |
|                                          Sviridov, 2019 [[110](https://www.mdpi.com/2073-4360/12/8/1665#B110-polymers-12-01665)]                                          |        Victrex PEEK 381G         |               TotalZAnyForm 950 PRO HOT+               |            450            |         0.7          |                40                 |          -           |                   0.75                    |        100         |
|                                           Basgul, 2019 [[111](https://www.mdpi.com/2073-4360/12/8/1665#B111-polymers-12-01665)]                                           |         PEEK OPTIMA™ LT1         |                 Indmatec HPP 155/Gen 2                 |          390–410          |         0.4          |         1500/2000 mm/min          |         100          |                    0.1                    |        100         |
| Lafont, 2017 [[106](https://www.mdpi.com/2073-4360/12/8/1665#B106-polymers-12-01665)] van Egmond [[112](https://www.mdpi.com/2073-4360/12/8/1665#B112-polymers-12-01665)] |           Victrex 450G           |                    Indmatec HPP 155                    |            390            |         0.4          |                20                 |         100          |                    0.1                    |        100         |

表3. filament制造商推荐的PEEK材料3D打印参数。

| Brand Name | Nozzle Temperature (°C) | Bed Temperature (°C) |   Printing Speed (mm/s)    | Chamber Temperature (°C) | Bed Preparation |
| :--------: | :---------------------: | :------------------: | :------------------------: | :----------------------: | :-------------: |
|  ThermaX™  |         375–410         |       130–145        | 10–50 for 0.2 mm thickness |          70–140          |   Ultem™ Tape   |
| 3D4MAKERS  |         360–400         |         120          |           15–30            |          70–150          |    PEI sheet    |
| Polyfluor  |         335–390         |         120          |             -              |            -             |        -        |
| KetaSpire® |         390–420         |         >200         |             -              |            -             |        -        |
|  LUVOCOM   |         370–420         |         >120         |             -              |            -             |        -        |

## 3. 工艺-结构-性能关系

### 3.1. 打印路径参数

3D打印可以在不同的构建方向和光栅角度下进行。这些打印路径参数会影响PEEK样品的微观结构和最终性能。Arif等人[[93](https://www.mdpi.com/2073-4360/12/8/1665#B93-polymers-12-01665)]研究了打印配置和熔珠取向对通过FFF工艺加工的PEEK力学性能的影响。他们评估了以0°（H-0°）和90°（H-90°、V-90°）光栅角水平和垂直打印的样品的拉伸和弯曲性能，如[图4](https://www.mdpi.com/2073-4360/12/8/1665#fig_body_display_polymers-12-01665-f004)所示。H-0°样品的力学性能最佳，V-90°样品的力学性能最差。其他关注打印路径参数的研究也报道了类似的结果。当采用水平构建方向进行打印时，施加的拉伸力或弯曲力的方向与聚合物丝的取向平行，因此样品会出现韧性断裂。根据列出了文献中报道的PEEK样品力学性能结果的[表4](https://www.mdpi.com/2073-4360/12/8/1665#table_body_display_polymers-12-01665-t004)，通过水平方向打印可以获得接近本体的力学性能。相比之下，在测试过程中，施加在垂直打印样品上的力与层间界面垂直，导致脆性断裂。实际上，熔珠之间的界面结合强度是这些样品的关键因素。另一个有趣的现象是，垂直方向打印的零件的结果标准偏差较大，且报道的值之间存在差异。构建方向在决定PEEK最终性能方面的关键作用也可以通过动态力学分析（DMA）来追踪。[图5](https://www.mdpi.com/2073-4360/12/8/1665#fig_body_display_polymers-12-01665-f005)显示了不同取向打印的样品具有与上述讨论相同的趋势。正如在国际空间站（ISS）中所观察到的，在空间有限的封闭环境中，打印方向和光栅角度变得至关重要，尤其是在打印大型关键零件时。

!"Polymers 12 01665 g004"[](https://www.mdpi.com/2073-4360/12/8/1665#fig_body_display_polymers-12-01665-f004)

图4. 所制备样品的配置（a）水平方向或（b）垂直方向。沉积模式为（c）0°珠取向或（d，e）90°珠取向[[93](https://www.mdpi.com/2073-4360/12/8/1665#B93-polymers-12-01665)]。
!"Polymers 12 01665 g005"[](https://www.mdpi.com/2073-4360/12/8/1665#fig_body_display_polymers-12-01665-f005)

图5.聚醚醚酮（PEEK）长丝和具有-45/+45光栅层取向的3D打印样品的储能模量和损耗模量[[112](https://www.mdpi.com/2073-4360/12/8/1665#B112-polymers-12-01665)]。

表4. 光栅层取向对PEEK力学性能的影响。

|                               Building Orientation/Raster Angle                               | Young’s Modulus (GPa) | Tensile Strength (MPa) | FlexuralStrength (MPa) |
| :-------------------------------------------------------------------------------------------: | :-------------------: | :--------------------: | :--------------------: |
|     Horizontal/0° [[93](https://www.mdpi.com/2073-4360/12/8/1665#B93-polymers-12-01665)]      |         3.80          |         82.58          |         142.0          |
|     Horizontal/90° [[93](https://www.mdpi.com/2073-4360/12/8/1665#B93-polymers-12-01665)]     |         3.54          |         72.88          |         124.3          |
|      Vertical/90° [[93](https://www.mdpi.com/2073-4360/12/8/1665#B93-polymers-12-01665)]      |         3.03          |          9.99          |         16.40          |
|  Horizontal/+45°/−45° [[85](https://www.mdpi.com/2073-4360/12/8/1665#B85-polymers-12-01665)]  |         3.98          |          98.9          |           -            |
|   Vertical/+45°/−45° [[85](https://www.mdpi.com/2073-4360/12/8/1665#B85-polymers-12-01665)]   |          1.6          |          19.6          |           -            |
|     Horizontal/0° [[94](https://www.mdpi.com/2073-4360/12/8/1665#B94-polymers-12-01665)]      |         2.83          |         73.19          |         114.16         |
|     Horizontal/90° [[94](https://www.mdpi.com/2073-4360/12/8/1665#B94-polymers-12-01665)]     |         2.69          |         53.91          |         78.63          |
|   Horizontal/0°/90° [[94](https://www.mdpi.com/2073-4360/12/8/1665#B94-polymers-12-01665)]    |         2.73          |         67.75          |         95.22          |
|    Horizontal/0° [[110](https://www.mdpi.com/2073-4360/12/8/1665#B110-polymers-12-01665)]     |         3.29          |          89.4          |           -            |
| Horizontal/+45°/−45° [[110](https://www.mdpi.com/2073-4360/12/8/1665#B110-polymers-12-01665)] |         3.03          |          81.7          |           -            |
|  Horizontal/0°/90° [[112](https://www.mdpi.com/2073-4360/12/8/1665#B112-polymers-12-01665)]   |         3.38          |          78.1          |           -            |
|                                      Vertical/+45°/−45°                                       |         2.21          |          31.1          |           -            |

测试前对基于PEEK的拉伸试样进行的CT扫描（[图6](https://www.mdpi.com/2073-4360/12/8/1665#fig_body_display_polymers-12-01665-f006)）显示，水平打印和垂直打印样品中的孔隙率几乎相同（分别为6.7%和7.6%）。然而，Z向打印样品中孔隙的尺寸远大于XY向样品。此外，孔隙相对于力方向的取向可能对打印部件的性能产生破坏性影响[[85](https://www.mdpi.com/2073-4360/12/8/1665#B85-polymers-12-01665)]。Lafont等人的另一个例子证实，垂直打印的样品比水平打印的样品表现出更多的孔隙。此外，有趣的是，孔隙率可能因所研究的区域而异（[图7](https://www.mdpi.com/2073-4360/12/8/1665#fig_body_display_polymers-12-01665-f007)）。例如，在ASTM V型试样中，CT扫描结果表明，样品狭窄的中心部分比夹持区域包含更多的孔隙[[106](https://www.mdpi.com/2073-4360/12/8/1665#B106-polymers-12-01665)]。

!"Polymers 12 01665 g006"[](https://www.mdpi.com/2073-4360/12/8/1665#fig_body_display_polymers-12-01665-f006)

图6. 拉伸试验前PEEK-XY-100（左）和PEEK-Z-100（右）样品标距长度的计算机断层扫描图[[85](https://www.mdpi.com/2073-4360/12/8/1665#B85-polymers-12-01665)]。

!"Polymers 12 01665 g007"[](https://www.mdpi.com/2073-4360/12/8/1665#fig_body_display_polymers-12-01665-f007)

图7. 由CT扫描计算的空隙率与打印方向和扫描位置的关系[[110](https://www.mdpi.com/2073-4360/12/8/1665#B110-polymers-12-01665)]。

结果表明，与90°相比，0°的光栅角度（沿拉伸强度方向排列）可带来更优的力学性能（表4）。尽管可以想见，90°的光栅角度具有更短的焊道沉积路径、更好的聚合物扩散效果，从而使焊道之间的界面结合更强，但长丝的强度却比0°时差[93]。有研究表明，采用不同光栅角度制备的试样，其断裂类型完全不同。事实上，以0°光栅角度打印的试样会出现部分断裂，而90°和交替0°/90°的试样则会出现突然的整齐断裂[94]。

打印配置和熔珠取向也可能对打印的聚醚醚酮（PEEK）的表面质量产生显著影响。根据Wang等人的研究[[84](https://www.mdpi.com/2073-4360/12/8/1665#B84-polymers-12-01665)]，在相同的打印条件下，水平方向能提供更好的表面质量。这归因于喷嘴的挤压作用。泊松比可作为比较表面质量的一个标准。结果表明，PEEK在垂直方向打印时，其泊松比更低。由于施加的力垂直于打印层，加载过程中的孔隙数量会增加，因此该参数会下降[[93](https://www.mdpi.com/2073-4360/12/8/1665#B93-polymers-12-01665)]。

光栅角度会改变PEEK样品的粗糙度和颜色。在水平方向以90°光栅角度进行3D打印，所得到的表面比0°时更粗糙且更白。由于沉积路径更短，熔珠之间的热梯度更低，因此扩散更快，这使得以90°光栅角度打印的零件表面光洁度更粗糙[[93](https://www.mdpi.com/2073-4360/12/8/1665#B93-polymers-12-01665)]。

### 3.2. 打印层厚度

Wang等人[[84](https://www.mdpi.com/2073-4360/12/8/1665#B84-polymers-12-01665)]研究了喷嘴直径和打印层厚度对聚醚醚酮（PEEK）物理及力学性能的影响。使用0.4毫米直径喷嘴打印的样品，其PEEK的密度和拉伸强度几乎没有变化。当使用更大直径的喷嘴时，拉伸强度会随着层厚度的增加而下降。作者推测，对于厚度超过0.35毫米的层，层间结合强度会减弱。Wu等人[[92](https://www.mdpi.com/2073-4360/12/8/1665#B92-polymers-12-01665)]报告称，当层厚度为0.3毫米这一最佳值时，PEEK零件可获得最高的拉伸强度、弯曲强度和压缩强度。值得注意的是，他们使用的是一台定制的3D打印机，其喷嘴直径为0.4毫米。

表面粗糙度（Rz）随着层厚的增加而增大（[图8](https://www.mdpi.com/2073-4360/12/8/1665#fig_body_display_polymers-12-01665-f008)），这是由于层间间隙和孔隙扩大所致。如果打印层厚超过喷嘴直径的一半，在垂直方向上会出现质量不佳的情况。此外，使用较厚的层进行打印时，会出现明显的台阶效应[[84](https://www.mdpi.com/2073-4360/12/8/1665#B84-polymers-12-01665)]。Wang等人[[109](https://www.mdpi.com/2073-4360/12/8/1665#B109-polymers-12-01665)]通过建立模型预测了聚醚醚酮（PEEK）的表面粗糙度。他们发现实验得到的表面粗糙度与预测的表面粗糙度具有良好的一致性，并最终建议聚醚醚酮（PEEK）3D打印的层厚为0.15毫米。

!"Polymers 12 01665 g008"[](https://www.mdpi.com/2073-4360/12/8/1665#fig_body_display_polymers-12-01665-f008)

图8. 垂直方向打印的PEEK样品的表面形貌：层厚为（a）0.1 mm和（b）0.25 mm[[84](https://www.mdpi.com/2073-4360/12/8/1665#B84-polymers-12-01665)]。

### 3.3. 加工条件

#### 3.3.1. 环境/打印舱温度

在3D打印中，聚醚醚酮（PEEK）的精度较低，尤其是在拉伸试样的狭窄区域等更复杂的几何区域，原因包括其较高的玻璃化转变温度（Tg）和熔点（Tm）、高粘度、收缩等。打印腔体内的温度可能是生产具有理想精度和性能的零件的决定性因素。Yang等人[[88](https://www.mdpi.com/2073-4360/12/8/1665#B88-polymers-12-01665)]使用温控3D打印系统研究了熔融沉积成型（FFF）中的环境/打印腔体温度与PEEK性能之间的关系。他们发现，环境温度的控制对打印的PEEK的力学性能起着至关重要的作用。如[图9](https://www.mdpi.com/2073-4360/12/8/1665#fig_body_display_polymers-12-01665-f009)所示，结晶相的百分比随着环境温度的升高而增加，这进而显著提高了杨氏模量和拉伸强度。在200°C的温度下，他们获得的杨氏模量甚至高于注塑成型的PEEK。

!"Polymers 12 01665 g009"[](https://www.mdpi.com/2073-4360/12/8/1665#fig_body_display_polymers-12-01665-f009)

图9.环境温度对PEEK样品（a）结晶度和（b）力学性能的影响[[88](https://www.mdpi.com/2073-4360/12/8/1665#B88-polymers-12-01665)]。

当环境温度较低时，喷嘴与打印腔室之间存在较大温差。这会使聚醚醚酮（PEEK）分子链快速冷却（结晶不完善），并导致显著的翘曲变形。在增材制造中，环境温度与翘曲变形之间存在反向关系。较高的温度有助于减缓结晶现象并减少内应力[[102](https://www.mdpi.com/2073-4360/12/8/1665#B102-polymers-12-01665)]。实际上，在较高的环境温度下，聚合物链有足够的时间和能量进行结晶，因此PEEK可以经历更完善的结晶过程，从而获得更高的结晶度。这些发现表明，人们可以通过选择最佳的环境温度来调节PEEK的结晶度以及刚度/韧性。

在Wang等人的一项研究中[[90](https://www.mdpi.com/2073-4360/12/8/1665#B90-polymers-12-01665)]，通过使用三种不同的打印机（即Hyrel Hydra 16AS（美国诺克罗斯的Hyrel 3D有限公司）、Indmatec HPP 155（德国卡尔斯鲁厄的Apium Additive Technologies GmbH）和Intamsys FUNMAT HT（中国上海的Intamsys Technology Ltd.））进行打印，研究了环境温度对PEEK的物理和机械性能的影响。如[图10](https://www.mdpi.com/2073-4360/12/8/1665#fig_body_display_polymers-12-01665-f010)所示，打印样品之间的差异从其颜色上可明显看出。此外，X射线衍射（XRD）图谱显示，使用Hyrel打印机打印的样品具有完全不同的微观结构。由于该打印机的环境温度为23°C，其结晶度最低。相比之下，Intamsys打印机145°C的环境温度使PEEK链能够完成结晶过程。尽管Indmatec打印机的环境温度为23°C，但自适应加热系统的存在使其实现了正常的结晶。这些结晶度的变化影响了PEEK的机械性能和动态力学性能。此外，玻璃化转变温度（Tg）约10°C的变化表明，PEEK的非结晶区域也会受到环境温度等工艺条件的影响。

!"Polymers 12 01665 g010"[](https://www.mdpi.com/2073-4360/12/8/1665#fig_body_display_polymers-12-01665-f010)

图10.聚醚醚酮（PEEK）样品的颜色差异（从上到下或从左到右分别为Hyrel、Intamsys和Indmatec）[[90](https://www.mdpi.com/2073-4360/12/8/1665#B90-polymers-12-01665)]。

为了改善打印条件，Hu等人[[108](https://www.mdpi.com/2073-4360/12/8/1665#B108-polymers-12-01665)]最近开发了一种改进型FFF打印机，适用于PEEK的增材制造。该打印机在喷嘴模块中增加了一个集热器（HC）和一个大功率加热器，并设计了一个近乎全封闭的腔室。他们发现，添加这个集热器后，喷嘴周围的整体温度有所升高。对喷嘴周围温度分布的比较显示，在喷嘴50毫米范围内，改进型喷嘴与传统喷嘴之间存在较大温差（约50°C）。这有利于PEEK的3D打印，因为它提供了更均匀的温度分布。作者表示，使用传统喷嘴打印的样品出现了严重的翘曲（20.4%）。提高环境温度可以显著解决这一问题，将翘曲率降至6.1%，但仍存在严重的分层现象。通过使用集热器，制备的PEEK样品翘曲率为5%，结晶度更高，且无分层现象，从而提高了拉伸性能和弯曲性能。

#### 3.3.2. 喷嘴温度

喷嘴温度对打印聚醚醚酮（PEEK）特性的影响较为复杂，因为它会直接或间接地影响结晶区域的熔融、结晶过程以及打印珠之间的界面强度。此外，喷嘴温度决定了PEEK打印过程的性能。如果打印温度不够高，可能会出现喷嘴堵塞和沉积层分层的情况。另一方面，高温可能导致PEEK热降解。由于粘度的显著变化，还会产生尺寸不精确的问题[[103](https://www.mdpi.com/2073-4360/12/8/1665#B103-polymers-12-01665)]，而粘度变化可能是由喷嘴温度波动引起的。

一些研究的结果[[84](https://www.mdpi.com/2073-4360/12/8/1665#B84-polymers-12-01665)、[88](https://www.mdpi.com/2073-4360/12/8/1665#B88-polymers-12-01665)、[113](https://www.mdpi.com/2073-4360/12/8/1665#B113-polymers-12-01665)、[114](https://www.mdpi.com/2073-4360/12/8/1665#B114-polymers-12-01665)]表明，当PEEK在较高的喷嘴温度下进行打印时，其结晶度和拉伸性能更高。[表5](https://www.mdpi.com/2073-4360/12/8/1665#table_body_display_polymers-12-01665-t005)总结了不同喷嘴温度下PEEK的拉伸强度。较高的喷嘴温度为分子链结晶提供了适宜的条件。由于半结晶聚合物的力学性能主要由结晶相决定，因此这有助于提高PEEK的弹性模量和拉伸强度。对断裂表面的分析可以提供更多关于打印温度对PEEK拉伸行为影响的信息。在低温下打印的PEEK部件会出现剥落现象（[图11](https://www.mdpi.com/2073-4360/12/8/1665#fig_body_display_polymers-12-01665-f011)）。如扫描电镜显微照片所示（[图11](https://www.mdpi.com/2073-4360/12/8/1665#fig_body_display_polymers-12-01665-f011)），层间间隙的存在可能是这些样品在拉伸测试中表现较差的主要原因。对于在420°C下加工的样品，其断裂表面没有分层现象，层间结合力达到最大值[[96](https://www.mdpi.com/2073-4360/12/8/1665#B96-polymers-12-01665)]。在该温度下，熔融的长丝可能会导致前一层部分熔化，从而增强层间的附着力。

!"Polymers 12 01665 g011"[](https://www.mdpi.com/2073-4360/12/8/1665#fig_body_display_polymers-12-01665-f011)

图11. 不同喷嘴温度下打印的PEEK拉伸样品的形貌（左），以及不同打印温度下打印的PEEK拉伸断裂表面的SEM显微照片：（a）370°C，（b）380°C，（c）390°C和（d）420°C[[96](https://www.mdpi.com/2073-4360/12/8/1665#B96-polymers-12-01665)]。

表5.不同喷嘴温度下聚醚醚酮（PEEK）的拉伸强度。

|                               Tensile Strength (MPa)                               |        |        |        |        |        |        |        |
| :--------------------------------------------------------------------------------: | :----: | :----: | :----: | :----: | :----: | :----: | ------ |
|                                       Study                                        | 360 °C | 380 °C | 400 °C | 420 °C | 440 °C | 460 °C | 480 °C |
| Yang et al. [[88](https://www.mdpi.com/2073-4360/12/8/1665#B88-polymers-12-01665)] |  48.5  |  49.5  |   54   |   59   |   55   |   57   | 55     |
| Wang et al. [[84](https://www.mdpi.com/2073-4360/12/8/1665#B84-polymers-12-01665)] |   -    |   59   |  67.5  |   70   |  72.5  |   -    | -      |
| Ding et al. [[96](https://www.mdpi.com/2073-4360/12/8/1665#B96-polymers-12-01665)] |   82   |   79   |   83   |   84   |   -    |   -    | -      |

Ding等人[[96](https://www.mdpi.com/2073-4360/12/8/1665#B96-polymers-12-01665)]报告了PEEK力学性能的不同趋势，如[表5](https://www.mdpi.com/2073-4360/12/8/1665#table_body_display_polymers-12-01665-t005)所示，其中提到在360–380°C的温度范围内，拉伸强度有所下降。此外，Ding等人[[96](https://www.mdpi.com/2073-4360/12/8/1665#B96-polymers-12-01665)]报告的拉伸强度值高于其他作者[[84](https://www.mdpi.com/2073-4360/12/8/1665#B84-polymers-12-01665)，[88](https://www.mdpi.com/2073-4360/12/8/1665#B88-polymers-12-01665)]报告的值。这些差异似乎源于打印参数的不同。将Ding等人[[96](https://www.mdpi.com/2073-4360/12/8/1665#B96-polymers-12-01665)]与Yang等人[[88](https://www.mdpi.com/2073-4360/12/8/1665#B88-polymers-12-01665)]进行的研究对比后发现，喷嘴直径和层厚相同，但打印速度和填充方向不同。由此可以得出结论，较低的打印速度（20 mm/s相较于40 mm/s）会带来更高的密度和拉伸强度。

提高喷嘴温度也会增加聚醚醚酮（PEEK）的密度。这可以归因于PEEK更好的流动性，这有助于填充空隙和孔洞[[84](https://www.mdpi.com/2073-4360/12/8/1665#B84-polymers-12-01665)]。在380°C和440°C下打印的PEEK样品的扫描电子显微镜（SEM）显微照片（[图12](https://www.mdpi.com/2073-4360/12/8/1665#fig_body_display_polymers-12-01665-f012)）清楚地显示了加工温度对孔洞和内部缺陷形成的影响。可以看出，较高的喷嘴温度会减少空隙的数量和尺寸。

!"Polymers 12 01665 g012"[](https://www.mdpi.com/2073-4360/12/8/1665#fig_body_display_polymers-12-01665-f012)

图12.在不同打印温度下打印的PEEK零件断裂表面的典型SEM显微照片（a）380°C（b）440°C。A和B分别表示层间空隙和填充丝之间的空隙[[84](https://www.mdpi.com/2073-4360/12/8/1665#B84-polymers-12-01665)]。

需要注意的是，由于PEEK可能发生热降解，提高加工温度存在局限性。因此，对于PEEK的FFF 3D打印，建议喷嘴温度在420–440°C范围内。另一方面，聚合物在流道中的流动性和熔融行为会受到打印头温度的影响。因此，在理想的PEEK 3D打印过程中，选择合适的喷嘴温度至关重要。[图13](https://www.mdpi.com/2073-4360/12/8/1665#fig_body_display_polymers-12-01665-f013)展示了PEEK在不同温度和 filament 进料速度下的粘度。较低的喷嘴温度（360°C）无法提供足够的热量使流道内的PEEK熔融，因此观察到固-液（S-F）区长度超过20毫米。采用较高温度（>360°C）会缩短该区域的长度，使其达到约10毫米。此外，应优化PEEK filament 的进料速度，以防止聚合物在流道的冷却区软化。基于这些实验，作者[[84](https://www.mdpi.com/2073-4360/12/8/1665#B84-polymers-12-01665)]提出，380–440°C的打印温度和4毫米/秒的进料速度是PEEK的FFF 3D打印的最佳参数。

!"Polymers 12 01665 g013"[](https://www.mdpi.com/2073-4360/12/8/1665#fig_body_display_polymers-12-01665-f013)

图13.不同加热温度和送丝速度（2、4和6 mm/s）下PEEK的黏度（a）320°C（b）380°C（c）400°C（d）420°C（e）440°C和（f）460°C[[84](https://www.mdpi.com/2073-4360/12/8/1665#B84-polymers-12-01665)]。

为了解决PEEK等高粘度聚合物的3D打印问题，以达到接近本体的力学性能，文献[[86](https://www.mdpi.com/2073-4360/12/8/1665#B86-polymers-12-01665)]中开发并报道了一种基于螺杆挤出的增材制造系统。作者在390°C下打印的PEEK，其杨氏模量和拉伸强度分别达到3.93 GPa和94 MPa。这些数值与本体PEEK相应数值的比值分别为98%和96%。此外，该PEEK样品的孔隙率为2.6%，远低于其他研究中报道的值[[103](https://www.mdpi.com/2073-4360/12/8/1665#B103-polymers-12-01665)]。这些结果可归因于这种新型打印机的挤出过程所起的作用，该过程能对PEEK链施加剪切应变，从而实现高结晶度。本研究中PEEK样品的结晶度（39–40%）几乎是注塑成型PEEK（21%）的两倍。

聚醚醚酮（PEEK）在390°C的最佳温度下表现出最高的冲击强度[[96](https://www.mdpi.com/2073-4360/12/8/1665#B96-polymers-12-01665)]。尽管在较高温度下层间结合更强，但在390°C打印PEEK时形成的特定层状结构似乎能更有效地释放冲击能量。此外，在较高的打印温度下形成更完善的结晶相对PEEK的韧性有不利影响。

对于在水平和垂直方向打印的聚醚醚酮（PEEK）零件，较高的喷嘴温度会降低其表面粗糙度[[84](https://www.mdpi.com/2073-4360/12/8/1665#B84-polymers-12-01665)]。这可能是因为在较高温度下，PEEK大分子的扩散效果更好，且表面浸润性更佳。

#### 3.3.3. 床温

控制3D打印零件质量的打印参数之一是打印平台或基底温度。遗憾的是，文献中尚无通过各种物理机械测试来研究该参数对聚醚醚酮（PEEK）零件性能影响的报道。不过，为了确定每种聚合物在熔融沉积成型（FFF）工艺中合适的打印平台温度，Tseng等人[[86](https://www.mdpi.com/2073-4360/12/8/1665#B86-polymers-12-01665)]测量了粘着摩擦系数（μs）。聚醚醚酮存在一个最佳打印平台温度，此时粘着摩擦系数（μs）达到最高值。温度过高会因聚合物层凝固不完全而削弱粘着过程。基于这些标准，Tseng等人[[86](https://www.mdpi.com/2073-4360/12/8/1665#B86-polymers-12-01665)]在聚醚醚酮样品的打印中选择280°C作为打印平台温度。

在表面质量方面，Wang等人[[109](https://www.mdpi.com/2073-4360/12/8/1665#B109-polymers-12-01665)]开发了一个模型，用于预测通过FFF-3D打印制备的PEEK零件的表面粗糙度。他们假设分子扩散、横截面形状和热传递之间的关系构成一个闭环。起初，分子扩散和颈部生长速度较快，但当温度下降时，这一过程会减慢，并且对于PEEK而言，在230°C时达到最大值。他们还研究了一些打印参数对通过激光扫描显微镜测量的PEEK表面粗糙度的影响。实验结果与模型的预测吻合良好。[图14](https://www.mdpi.com/2073-4360/12/8/1665#fig_body_display_polymers-12-01665-f014)展示了床温对PEEK零件表面形貌的影响。在较高温度下打印的样品表现出更光滑的形态，且相邻丝材之间的界面结合更好。这是因为在较高的床温下，分子扩散持续时间更长，导致空隙的数量和体积减少[[109](https://www.mdpi.com/2073-4360/12/8/1665#B109-polymers-12-01665)]。然而，对床温和喷嘴温度进行比较后发现，前者对表面粗糙度的影响较小。

!"Polymers 12 01665 g014"[](https://www.mdpi.com/2073-4360/12/8/1665#fig_body_display_polymers-12-01665-f014)

图14. 打印的聚醚醚酮（PEEK）零件在不同床温下的表面形貌：（A）220°C、（B）240°C、（C）260°C、（D）280°C、（E）300°C，以及（F）不同平台温度下表面粗糙度的实验结果和模型结果[[109](https://www.mdpi.com/2073-4360/12/8/1665#B109-polymers-12-01665)]。

#### 3.3.4. 打印速度

一般来说，打印速度与打印件的力学性能之间存在反向关系。在Wang等人的一项研究[[84](https://www.mdpi.com/2073-4360/12/8/1665#B84-polymers-12-01665)]中，20毫米/秒的打印速度能使聚醚醚酮（PEEK）达到最佳的拉伸强度，而提高这一参数会导致其力学性能下降。这是因为较高的速度无法为各层和填充丝的扩散及结晶提供足够的时间。打印速度对PEEK样品断裂表面的影响可参见[图15](https://www.mdpi.com/2073-4360/12/8/1665#fig_body_display_polymers-12-01665-f015)。大量大尺寸孔洞的形成以及较弱的结合力是高速打印样品的特征。

!"Polymers 12 01665 g015"[](https://www.mdpi.com/2073-4360/12/8/1665#fig_body_display_polymers-12-01665-f015)

图15. 不同速度下打印的PEEK样品拉伸断裂表面的SEM显微照片（a）17毫米/秒，（b）26毫米/秒[[84](https://www.mdpi.com/2073-4360/12/8/1665#B84-polymers-12-01665)]。

巴斯古尔及其同事[[91](https://www.mdpi.com/2073-4360/12/8/1665#B91-polymers-12-01665)]打印了一个标准化的聚醚醚酮（PEEK）腰椎融合器，发现应采用低于25毫米/秒的打印速度。在PEEK的3D打印中，选择较低速度时可获得最高的压缩性能。打印件中的孔隙是由空隙扩张和长丝中气泡滞留造成的[[103](https://www.mdpi.com/2073-4360/12/8/1665#B103-polymers-12-01665)]。作者认为，打印速度对零件的孔隙率有负面影响。提高打印速度并未观察到结晶度的变化。因此，他们得出结论，高速下形成的不完善的长丝间结合是导致PEEK力学性能下降的主要原因。

在表面质量方面，聚醚醚酮（PEEK）的3D打印应采用最佳速度。Wang等人[[109](https://www.mdpi.com/2073-4360/12/8/1665#B109-polymers-12-01665)]报告称，15毫米/秒的打印速度适合PEEK。不同速度下打印的样品，其表面形貌存在显著差异（[图16](https://www.mdpi.com/2073-4360/12/8/1665#fig_body_display_polymers-12-01665-f016)）。在较低的打印速度下，可以观察到表面有堆积迹象。在较高速度下，喷嘴与熔融细丝之间会产生相互作用（喷嘴挤压），这对表面质量有不利影响。在另一项研究[[84](https://www.mdpi.com/2073-4360/12/8/1665#B84-polymers-12-01665)]中，同一批作者发现，喷嘴直径会影响打印速度对PEEK打印质量的作用。当使用0.4毫米直径的喷嘴时，存在一个最佳速度可使粗糙度达到最小值；而对于直径较大的喷嘴，表面粗糙度会随打印速度的提高而略有增加。对于直径较小的喷嘴，所使用的打印层更薄，因此对喷嘴速度的变化更为敏感。

!"Polymers 12 01665 g016"[](https://www.mdpi.com/2073-4360/12/8/1665#fig_body_display_polymers-12-01665-f016)

图16.不同打印速度下打印的PEEK零件的表面形貌（a）17毫米/秒（b）20毫米/秒（c）26毫米/秒[[84](https://www.mdpi.com/2073-4360/12/8/1665#B84-polymers-12-01665)]。

耿等人[[95](https://www.mdpi.com/2073-4360/12/8/1665#B95-polymers-12-01665)]研究了挤出速度和打印速度对3D打印中聚醚醚酮（PEEK）挤出丝尺寸的影响。结果表明，高挤出速度会导致挤出丝直径出现剧烈波动。这表明该因素在控制尺寸精度和表面形态方面起着关键作用。赵等人[[69](https://www.mdpi.com/2073-4360/12/8/1665#B69-polymers-12-01665)]的研究中也有类似发现。他们设计了正交实验来优化医疗应用中PEEK的机械强度。实验证实，PEEK丝的直径偏差在3D打印中起着重要作用。

#### 3.3.5. 热处理方法

不同的热处理方法会对熔融沉积成型（FFF）打印的聚醚醚酮（PEEK）零件的结晶产生显著差异。Yang等人[[88](https://www.mdpi.com/2073-4360/12/8/1665#B88-polymers-12-01665)]的一项研究比较了炉冷、退火、空冷、淬火和回火方法的作用，结果表明前两种方法能实现更完善的结晶过程。相反，空冷和淬火无法为正常结晶提供适宜条件，因此导致结晶度最低。力学测试结果显示，退火和回火是最有效的后处理技术。看来，热处理方法不仅能控制PEEK的结晶，还能决定打印件中的残余应力水平。Basgul等人[[111](https://www.mdpi.com/2073-4360/12/8/1665#B111-polymers-12-01665)]通过FFF技术以不同速度（1500和2000毫米/分钟）打印腰椎融合器，然后在200°C或300°C下进行退火处理。他们观察到，以较慢速度打印的样品其抗压强度提高了14%。此外，研究发现，尽管退火会改变孔隙结构，但并没有降低打印过程中形成的孔隙率。

最近，3D打印机制造商尝试寻找定制结晶度的新解决方案。3DGence采用了一种新方法（快速冷却/退火）来控制聚醚醚酮（PEEK）的结晶度。第一步是3D打印出非晶态PEEK部件，这种部件收缩较小且应力分布更均匀。然后对其进行退火处理，以获得半结晶态的最终部件[[115](https://www.mdpi.com/2073-4360/12/8/1665#B115-polymers-12-01665)]。Stratasys公司获得了一项美国专利[[116](https://www.mdpi.com/2073-4360/12/8/1665#B116-polymers-12-01665)]，该专利涉及一种抑制PEEK结晶的3D打印方法。在该专利公开内容中，3D打印部件材料包含一种或多种半结晶聚合物与一种或多种次要材料的可混溶共混物。聚醚酰亚胺（PEI）/半结晶PEEK（60-80重量%）以及非晶态聚芳醚酮（50-70%）/半结晶聚芳醚酮共混物均在要求保护的配方之列。人们认为，混溶性可使非晶相阻碍半结晶聚合物形成结晶区域。增材制造之后会进行一道后处理工序，包括在部件材料的玻璃化转变温度与冷结晶温度之间的某一温度下进行退火。与3D打印过程中逐层结晶（会导致翘曲效应）不同，打印后的结晶会产生类似于注塑成型工艺的均匀收缩。此外，退火处理为3D打印部件提供了进一步结晶的机会，且不受不可收缩的构建平台的限制。

## 4. 热降解与辐照降解

聚醚醚酮（PEEK）的平均峰值热释放速率（PHRR）为303 W·g⁻¹，是聚乙烯（PE）的八分之一。此外，聚醚醚酮的起始热释放速率温度（闪点）、峰值热释放速率和极限氧指数（LOI）分别为601℃、619℃和37.3%[[117](https://www.mdpi.com/2073-4360/12/8/1665#B117-polymers-12-01665)]。如此优异的热稳定性使聚醚醚酮能够应用于特定领域，并在国际空间站（ISS）上替代金属部件方面具有巨大潜力。

在惰性环境中，PEEK呈现出两步失重（[图17](https://www.mdpi.com/2073-4360/12/8/1665#fig_body_display_polymers-12-01665-f017)）。第一阶段发生在500–600°C的温度范围内，这归因于聚合物链的溶血断裂，会生成苯酚、一氧化碳和二氧化碳。若生成苯酚，可能会导致化学灼伤，这在太空飞行应用中是一个需要关注的问题。在第二阶段（600°C以上），聚合物残留物会发生裂解和脱氢反应。[图18](https://www.mdpi.com/2073-4360/12/8/1665#fig_body_display_polymers-12-01665-f018)展示了PEEK在降解开始前以及失重速率最大时的傅里叶变换红外光谱。在氮气环境中，PEEK热降解第一阶段和第二阶段的质量损失以及1000°C时的残炭率分别约为40–45%、10%和45–50%。在氧化气氛中，PEEK的热分解包括两个快速连续的阶段。醚键和酮键的断裂在低于500°C的温度下开始。醚键在较低温度下发生降解，而羰基键的分解主要发生在较高温度下。下一步会发生含碳物质的热氧化，在650–700°C时不会留下残炭[[118](https://www.mdpi.com/2073-4360/12/8/1665#B118-polymers-12-01665)，[119](https://www.mdpi.com/2073-4360/12/8/1665#B119-polymers-12-01665)，[120](https://www.mdpi.com/2073-4360/12/8/1665#B120-polymers-12-01665)]。

!"Polymers 12 01665 g017"[](https://www.mdpi.com/2073-4360/12/8/1665#fig_body_display_polymers-12-01665-f017)

图17. 聚醚醚酮（PEEK）及其玻璃纤维（GL30）和碳纤维（CA30）复合材料在氮气（上）和空气（下）中的热分解[[119](https://www.mdpi.com/2073-4360/12/8/1665#B119-polymers-12-01665)]。

!"Polymers 12 01665 g018"[](https://www.mdpi.com/2073-4360/12/8/1665#fig_body_display_polymers-12-01665-f018)

图18.聚醚醚酮的傅里叶变换红外光谱：（a）降解开始前，（b）失重速率最大时。

PEEK的热降解参数摘要（通过热重分析测试获得）如表6所示。Tonset为起始降解温度。T10%和Tmax分别是对应10%失重和最大降解速率时的温度。数据显示，氧化降解始于460–480°C，这比惰性气氛中的降解温度低40–50°C。此外，Tsai等人[121]使用闪速热解气相色谱/质谱法（pyGC/MS）研究了PEEK的热分解，发现1,4-二苯氧基苯和4-苯氧基苯酚是450°C时的分解产物。这表明在太空环境中进行PEEK的3D打印时，温度应低于此值。基于这些发现，将最高温度设定为440°C是合理的，这样不仅能实现高效的打印过程，还能避免任何可能的热降解。

表6.聚醚醚酮（PEEK）的热降解参数摘要（通过热重分析测试获得）。

|                                  Study                                   |        Tonset (°C)        |                                  T10% (°C)                                  |                   TMax (°C)                    | Heating Rate (°C/min) |
| :----------------------------------------------------------------------: | :-----------------------: | :-------------------------------------------------------------------------: | :--------------------------------------------: | :-------------------: |
| [[122](https://www.mdpi.com/2073-4360/12/8/1665#B122-polymers-12-01665)] | inert: 514 oxidative: 466 |                          inert: 541 oxidative: 512                          | inert: 554 oxidative: Tmax-I: 517 Tmax-II: 575 |          10           |
| [[118](https://www.mdpi.com/2073-4360/12/8/1665#B118-polymers-12-01665)] |        inert: 521         |                                 inert: 544                                  |                   inert: 558                   |          10           |
| [[123](https://www.mdpi.com/2073-4360/12/8/1665#B123-polymers-12-01665)] | inert: 520 oxidative: 478 |                          inert: 544 oxidative: 520                          | inert: 558 oxidative: Tmax-I: 530 Tmax-II: 584 |          10           |
| [[124](https://www.mdpi.com/2073-4360/12/8/1665#B124-polymers-12-01665)] |             -             | inert: 588 (MFI: 15 g/10 min) 592 (MFI: 27 g/10 min) 599 (MFI: 85 g/10 min) |                 inert: 590–600                 |          10           |

Vaezi等人[[103](https://www.mdpi.com/2073-4360/12/8/1665#B103-polymers-12-01665)]测试了不同的挤出温度（350–450°C），观察到PEEK样品内部出现颜色变化或截留空隙。根据结果，作者建议将400–430°C的温度范围用于PEEK的增材制造。为了解决PEEK在熔融沉积成型（FFF）3D打印过程中可能发生降解的问题，Ding等人[[96](https://www.mdpi.com/2073-4360/12/8/1665#B96-polymers-12-01665)]在420°C下打印PEEK，然后比较了PEEK线材和最终零件的傅里叶变换红外（FT-IR）光谱。打印样品显示出PEEK的特征吸收峰（1651 cm⁻¹处的C=O、1186 cm⁻¹处的-O-以及1224 cm⁻¹处的C-O），且强度相同，因此他们得出结论：在此温度下打印PEEK不会发生热分解。Zhao[[69](https://www.mdpi.com/2073-4360/12/8/1665#B69-polymers-12-01665)]也报告了相同的结果，作者比较了用于医疗应用的PEEK颗粒、线材以及在375°C下打印的样品的FT-IR光谱。

为了在地球外环境和国际空间站（ISS）中使用聚醚醚酮（PEEK），必须考虑这种高性能聚合物的辐照效应。Mylläri等人[[125](https://www.mdpi.com/2073-4360/12/8/1665#B125-polymers-12-01665)]的研究表明，经过1056小时的紫外线辐照后，PEEK纤维的强度和弹性模量几乎未受影响，但由于分子链的无规断裂，其断裂伸长率显著下降。还有其他研究[[126](https://www.mdpi.com/2073-4360/12/8/1665#B126-polymers-12-01665)，[127](https://www.mdpi.com/2073-4360/12/8/1665#B127-polymers-12-01665)]报道，交联作用甚至会导致PEEK片材的屈服强度提高。尽管随着辐照时间的增加，PEEK的玻璃化转变温度（Tg）和零剪切粘度会有所上升，但结晶度和熔融温度不受该参数的影响[[125](https://www.mdpi.com/2073-4360/12/8/1665#B125-polymers-12-01665)]。

Nakamura等人[[128](https://www.mdpi.com/2073-4360/12/8/1665#B128-polymers-12-01665)]研究了近地轨道（LEO）环境对聚醚醚酮（PEEK）薄膜的影响，得出结论：近地轨道中的紫外线成分是导致表面褐变和交联现象的主要原因。他们还观察到，国际空间站（ISS）轨道中的原子氧（AO）可能会造成表面侵蚀和厚度减少。一个有趣的发现是，降解程度远小于预测值。作者将其归因于飞行过程中国际空间站的姿态变化以及样品表面形成的氧化硅（SiOx）层。该层的透光率低，能够阻止原子氧的有害影响。

这些结果表明，稳定性是基于PEEK的设备开发的关键部分。通过这种方式，在PEEK本体中加入适当的抗老化添加剂似乎是最佳解决方案之一。

## 5. 结论

本综述研究了聚醚醚酮（PEEK）的熔融沉积成型（FFF）3D打印技术，旨在为国际空间站中3D打印PEEK部件的开发奠定基础。在此，重点在于理解这种高性能塑料打印过程中的工艺-结构-性能关系。阐明了多种打印参数（包括构建方向、喷嘴温度、环境温度、打印床温度、层厚、打印速度和热处理）对物理/机械性能及打印质量的影响。基于已发表研究的结果，[表7](https://www.mdpi.com/2073-4360/12/8/1665#table_body_display_polymers-12-01665-t007)列出了为接近传统模塑样品性能而推荐的参数水平。但需要注意的是，这些参数主要基于拉伸力学性能确定。

表7. 聚醚醚酮（PEEK）熔融沉积成型（FFF）3D打印的参数推荐值。

|Parameter|Value/Type|
|:-:|:-:|
|Raster angle|0° [[93](https://www.mdpi.com/2073-4360/12/8/1665#B93-polymers-12-01665)]|
|Layer thickness|0.1–0.3 mm [[92](https://www.mdpi.com/2073-4360/12/8/1665#B92-polymers-12-01665)]|
|Ambient temperature|150–200 °C [[88](https://www.mdpi.com/2073-4360/12/8/1665#B88-polymers-12-01665)]|
|Nozzle temperature|420–440 °C [[84](https://www.mdpi.com/2073-4360/12/8/1665#B84-polymers-12-01665)]|
|Print speed|20 mm/s [[91](https://www.mdpi.com/2073-4360/12/8/1665#B91-polymers-12-01665)]|
|Infill|100%|
|Heat treatment method|Annealing [[88](https://www.mdpi.com/2073-4360/12/8/1665#B88-polymers-12-01665)]|
对已有文献的综述显示，通过熔融沉积成型（FFF）工艺打印的聚醚醚酮（PEEK）样品在力学性能方面取得了一些可喜的成果。然而，PEEK的3D打印仍面临诸多挑战，需要加以考虑。从技术角度来看，优化3D打印机中喷嘴与打印床/腔室之间的温差是最为关键的方面。事实上，为了制造出具有理想力学性能和尺寸稳定性的零件，必须尽量减小熔珠间的温度梯度。因此，针对这一点研发定制化打印机对于PEEK的3D打印而言是十分必要的。另一方面，显然还迫切需要对PEEK的微观结构、断裂现象、流变行为和结晶过程开展更多的实验与建模研究。此外，更广泛的研究群体还应探究打印参数之间的交互影响。


