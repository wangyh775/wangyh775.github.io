## Purpose

为求职场景提供从"访问主页→建立信任→发起联系/下载简历"的完整转化漏斗，确保访客在第一屏即可获取社交身份背书、关键成就数据与简历下载入口，且全站外链指向真实可访问的账号。

## ADDED Requirements

### Requirement: Hero 区展示社交链接

首页 Hero 区 SHALL 在姓名/头衔下方展示 GitHub、CSDN、邮箱三个社交链接，每个链接 SHALL 指向对应平台的真实账号页面，并以图标+文字形式呈现。

#### Scenario: 访客点击 GitHub 社交链接

- **WHEN** 访客在首页 Hero 区点击 GitHub 社交链接
- **THEN** 浏览器在新标签页打开 `https://github.com/wangyh775`

#### Scenario: 访客点击 CSDN 社交链接

- **WHEN** 访客在首页 Hero 区点击 CSDN 社交链接
- **THEN** 浏览器在新标签页打开 `https://blog.csdn.net/m0_58988991`

#### Scenario: 访客点击邮箱社交链接

- **WHEN** 访客在首页 Hero 区点击邮箱社交链接
- **THEN** 系统唤起邮件客户端并填充收件人地址为 `877660224@qq.com`

### Requirement: Hero 区展示成就数字卡片

首页 Hero 区 SHALL 展示一组成就数字卡片，至少包含以下四项：EI 论文 1 篇、发明专利 1 项、自研设备 500×500×500mm、开源项目 48 commits。每张卡片 SHALL 以"数字 + 标签"形式呈现。

#### Scenario: 访客在首屏看到成就数字

- **WHEN** 访客打开首页 `/`
- **THEN** Hero 区渲染至少 4 张数字卡片，分别显示论文数、专利数、设备尺寸、开源 commits 数

### Requirement: 简历 PDF 可下载

站点 SHALL 提供简历 PDF 下载入口，该入口 SHALL 同时出现在首页 Hero 区与简历页 `/cv`。点击下载入口 SHALL 触发 PDF 文件下载，文件来源于 `public/` 目录下的简历文件。

#### Scenario: 访客在首页下载简历

- **WHEN** 访客在首页 Hero 区点击"下载简历"按钮
- **THEN** 浏览器下载 `public/` 目录下的简历 PDF 文件

#### Scenario: 访客在简历页下载简历

- **WHEN** 访客在 `/cv` 页面点击"下载简历"按钮
- **THEN** 浏览器下载同一份简历 PDF 文件

### Requirement: 全站 GitHub 链接指向正确账号

站点内所有指向 GitHub 的外链 SHALL 指向 `https://github.com/wangyh775`，不得出现错误的账号 ID（如 `877660224`）。

#### Scenario: 项目卡片 GitHub 链接正确

- **WHEN** 访客在首页或项目页点击任意项目卡片的 GitHub 链接
- **THEN** 链接指向 `https://github.com/wangyh775` 或其子路径（如 `wangyh775/kalico`、`wangyh775/JHTracker`）

#### Scenario: 无残留错误账号链接

- **WHEN** 对 `src/pages/` 下所有文件进行文本搜索
- **THEN** 不存在 `github.com/877660224` 字符串
