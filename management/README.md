# 内容维护

英文站的展示模块和内容管理文件分开存放。论文栏目已填入真实文献，其余栏目保留英文占位版式。此目录不会作为网站管理后台发布。

## 修改位置

以下路径均相对此目录。

| 内容 | 文件 | 字段 |
| --- | --- | --- |
| 全站与首页 | `content/en/site.json` | `name`、`tagline`、`description`、`introduction`、`image`、`imageAlt`、`copyright` |
| 研究方向 | `content/en/research.json` | 数组；每条包含 `title`、`summary`，可选 `tags` |
| 成员 | `content/en/people.json` | 数组；每条包含 `name`、`role`、`bio`，可选 `image`、`homepage` |
| 论文 | `content/en/publications.json` | 数组；每条包含 `title`、`authors`、`journal`、`year`，可选 `doi` |
| 新闻 | `content/en/news.json` | 数组；每条包含 `title`、`date`、`summary`，可选 `category`、`url` |
| 联系信息 | `content/en/contact.json` | `institution`、`department`、`address`、`email`、`website` |

`tags` 和 `authors` 是字符串数组；`year` 是数字；`date` 使用 `YYYY-MM-DD`；`doi` 填写 DOI 标识符。图片放入项目的 `public/images/`，内容文件使用 `/images/文件名`，同时填写图片说明。

保留空字符串或空数组即可继续显示占位版式。不要用虚构的姓名、论文、日期或联系方式填充模板，后续公开内容使用英文。

## 论文来源与引用下载

2026-10-15 从本机 Zotero 的 **UQC (Ultrafast Quantum Control) > Published** 分类导入 31 篇期刊论文，并逐一用 [Crossref DOI 元数据](https://www.crossref.org/documentation/retrieve-metadata/rest-api)核对题目、作者顺序、DOI 和年份。同分类中的 1 条预印本未归入已发表期刊论文。

论文只需维护 `content/en/publications.json`。条目按年份倒序显示，同年条目沿用 JSON 中的顺序；本次同年条目已按 Zotero 中的发表日期倒序排列。首页显示前两篇，完整列表位于 `/publications/`。

`src/pages/publications.bib.ts` 在构建时从同一份数据生成公开的 `/publications.bib`，页面提供 **Download BibTeX** 链接，可导入 Zotero 等文献管理软件。无需单独维护第二份引用文件，也不依赖访问者连接 Zotero 或 Crossref。当前只发布书目信息和 DOI 链接。

## 展示模块

布局与样式位于项目的 `src/components/modules/` 和 `src/styles/global.css`。内容通过 `src/lib/content.ts` 读取，页面在 `src/pages/` 中组合各模块。公共页面没有编辑按钮、登录功能或管理入口。

内容更新通常只需要修改 `management/content/en/`；改变布局时再修改展示模块。新增语言时使用独立内容目录和页面路由，不在英文内容字段中混入中文。

## 更新与发布

1. 修改对应 JSON 内容文件，保持合法的 JSON 格式。
2. 本地运行 `npm run build`，必要时使用 `npm run preview` 查看页面。
3. 通过 PR 审阅后合并到 `main`，或按已授权的维护流程直接提交到 `main`。
4. 与网站有关的改动会构建并部署一次，没有改动就不会运行。

没有每日、每周或每月定时构建。只修改说明文档不会自动构建。需要重新发布当前版本时，使用 GitHub Actions 的 **Run workflow** 手动入口，选择 `main`。

主域名和 `www` 的 X-MOL 跳转由 Cloudflare 单独管理，不属于此目录的内容维护范围。
