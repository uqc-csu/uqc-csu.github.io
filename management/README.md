# 内容维护

英文站的展示模块和内容管理文件分开存放。已补充课题组简介、三项研究方向、两条科研新闻和学校信息，并保留真实论文引用。成员资料、个人联系方式和课题组图片暂留空。此目录不会作为网站管理后台发布。

Agent 接手前先读仓库根目录的 [AGENTS.md](../AGENTS.md)。本仓库当前公开，管理文档和 JSON 虽不作为独立网站页面发布，仍能在 GitHub 上被查看；不要在这里存放内部材料或私人资料。

## 修改位置

以下路径均相对此目录。

| 内容 | 文件 | 字段 |
| --- | --- | --- |
| 全站与首页 | `content/en/site.json` | `name`、`tagline`、`description`、`introduction`、`image`、`imageAlt`、`copyright` |
| 栏目页标题与说明 | `content/en/pages.json` | `research`、`publications`、`news`、`people`、`contact` 各包含 `title`、`description` |
| 研究方向 | `content/en/research.json` | 数组；每条包含 `title`、`summary`，可选 `tags` |
| 成员 | `content/en/people.json` | 数组；每条包含 `name`、`role`、`bio`，可选 `image`、`homepage` |
| 论文 | `content/en/publications.json` | 数组；每条包含 `title`、`authors`、`journal`、`year`，可选 `doi` |
| 新闻 | `content/en/news.json` | 数组；每条包含 `title`、`date`、`summary`，可选 `category`、`url` |
| 联系信息 | `content/en/contact.json` | `institution`、`department`、`address`、`email`、`website` |

`tags` 和 `authors` 是字符串数组；`year` 是数字；`date` 使用 `YYYY-MM-DD`；`doi` 填写 DOI 标识符。图片放入项目的 `public/images/`，内容文件使用 `/images/文件名`，同时填写图片说明。

没有内容时保留空字符串或空数组：首页隐藏没有条目的栏目，独立栏目页显示简洁的空状态；未填写的图片和联系字段不显示。不要用虚构的姓名、论文、日期或联系方式填充模板，公开内容使用英文。

## 公开介绍来源

2026-10-15 根据 UQC 的 X-MOL 公开页面，将课题组层面的介绍和研究方向整理成英文。具体来源、页面日期和取舍范围记录在 [sources.md](sources.md)。英文内容只需修改对应 JSON 文件，展示组件不保存这些介绍文字。

目前成员资料与个人邮箱保持空白；新闻只概述科研内容，不补充个人简介、姓名、照片或个人联系方式。论文引用中的原有作者信息继续作为书目字段保留。

## 论文来源与引用下载

2026-10-15 从本机 Zotero 的 **UQC (Ultrafast Quantum Control) > Published** 分类导入 31 篇期刊论文，并逐一用 [Crossref DOI 元数据](https://www.crossref.org/documentation/retrieve-metadata/rest-api)核对题目、作者顺序、DOI 和年份。同分类中的 1 条预印本未归入已发表期刊论文。

论文只需维护 `content/en/publications.json`。完整列表在 `/publications/` 按年份分组，并提供年份索引；同年条目沿用 JSON 中的顺序。本次同年条目已按 Zotero 中的发表日期倒序排列。首页显示前三篇。新闻按 `date` 倒序排列。

每篇论文提供 **DOI**、**BibTeX** 下载和 **Cite** 展开按钮。单篇文件 `/citations/<id>.bib` 与合集 `/publications.bib` 都通过 `src/lib/bibliography.ts` 从同一份数据在构建时生成，可导入 Zotero 等文献管理软件；修改 JSON 即会同步更新所有引用入口，不手工维护第二份引用清单。`<id>` 由 DOI 生成，无 DOI 时使用年份和题目；不要复用他人的 DOI。引用展开使用浏览器原生控件，不需要 JavaScript。当前只发布书目信息和 DOI 链接，不提供论文全文。

## 展示模块

布局与样式位于项目的 `src/components/modules/` 和 `src/styles/global.css`。内容通过 `src/lib/content.ts` 读取，页面在 `src/pages/` 中组合各模块。主页采用简介分栏、段落目录和学术列表布局；不要在组件中新增课题组事实性介绍。公共页面没有编辑按钮、登录功能或管理入口。

内容更新通常只需要修改 `management/content/en/`；改变布局时再修改展示模块。新增语言时使用独立内容目录和页面路由，不在英文内容字段中混入中文。

## 更新与发布

1. 修改对应 JSON 内容文件，保持合法的 JSON 格式。
2. 本地运行 `npm run build`，必要时使用 `npm run preview` 查看页面。
3. 通过 PR 审阅后合并到 `main`，或按已授权的维护流程直接提交到 `main`。
4. 与网站有关的改动会构建并部署一次，没有改动就不会运行。

没有每日、每周或每月定时构建。只修改说明文档不会自动构建。需要重新发布当前版本时，使用 GitHub Actions 的 **Run workflow** 手动入口，选择 `main`。

主域名和 `www` 的 X-MOL 跳转由 Cloudflare 单独管理，不属于此目录的内容维护范围。
