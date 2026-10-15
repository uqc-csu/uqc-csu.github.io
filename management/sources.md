# 公开内容来源

核对日期：2026-10-15。

本次由用户授权，从 UQC 的 X-MOL 公开页面选取课题组层面的信息，改写为英文简介。内容仍由 `content/en/` 中的 JSON 文件管理。

| 网站内容 | 管理文件 | 来源与取舍 |
| --- | --- | --- |
| 组名、研究目标、学校与城市 | `content/en/site.json` | [中文首页](https://www.x-mol.com/groups/uqc?lang=zh)、[英文首页](https://www.x-mol.com/groups/uqc?lang=en)。使用英文页的课题组名称，并依据中文页整理研究目标；不转录成员人数、个人简介或合作关系清单。 |
| 三项研究方向 | `content/en/research.json` | [研究方向](https://www.x-mol.com/groups/uqc/research)：超快强场物理、量子控制理论、量子系统辨识。概述为英文，不复制页面图片。 |
| 学校、学院、城市、公开课题组网址 | `content/en/contact.json` | 同上两个首页；学院名称按中文的“中南大学物理学院”译为 School of Physics, Central South University。地址仅到城市，不填写办公室、个人邮箱或电话。 |
| 分子振动与转动量子态控制新闻 | `content/en/news.json` | [X-MOL 原文](https://www.x-mol.com/groups/uqc/news/112721)，原文发布于 2026-03-27。摘要只保留多能级脉冲面积方法、红外与太赫兹脉冲、分子振动与转动控制及期刊名称。对应论文 DOI：10.1103/mnxs-hjjn。 |
| 手性分子控制新闻 | `content/en/news.json` | [X-MOL 原文](https://www.x-mol.com/groups/uqc/news/112727)，原文发布于 2026-03-27。摘要只保留微波相干控制、复合脉冲、脉冲面积误差鲁棒性及期刊名称。对应论文 DOI：10.1002/cphc.202500705。 |

## 内容范围

- 新闻的 `date` 是 X-MOL 新闻发布日期，与期刊论文发表日期分别管理。
- X-MOL 英文首页和中文首页的更新程度不同；三项研究方向采用当前中文研究方向页，英文由本站重新整理。
- 本次不引入成员姓名、履历、头像、私人联系信息、毕业信息或含人物的活动图片。原有论文引用中的作者姓名属于此前已确认的书目内容。
- 未复制 X-MOL 的图片、页面样式、个人简介或论文全文。主页图片仍保留占位版式。
- 本次没有改动论文引用清单；其 Zotero 来源和 Crossref 核对说明见 [README.md](README.md)。
