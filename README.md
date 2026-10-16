# UQC research group website

An English-only website for the **Ultrafast Quantum Control Group (UQC), School of Physics, Central South University**, at [en.uqc-csu.com](https://en.uqc-csu.com/). It uses Astro, Tailwind CSS, and GitHub Pages. The group overview, three research areas, two research news items, and institutional information are adapted from the public UQC X-MOL pages. Publications are maintained as structured citations, initially imported from the local Zotero collection **UQC (Ultrafast Quantum Control) > Published**, with titles, authors, journals, years, and DOI links. Member profiles, personal contact details, and group images remain unfilled.

## Display and management

| Layer | Location | Responsibility |
| --- | --- | --- |
| Content management | `management/content/en/` | Editable JSON records for public group content |
| Maintenance guide | `management/README.md` | Field descriptions and publishing instructions |
| Source notes | `management/sources.md` | Public sources and the scope of adapted content |
| Display modules | `src/components/modules/` | Reusable presentation components receiving data through props |
| Content adapter | `src/lib/content.ts` | Imports and types for management records |
| Pages | `src/pages/` | Compose the display modules |

Empty records render visual placeholders. Update website content through the management files. Presentation code does not need group-specific copy. Publications are sorted by year, newest first; the homepage shows the two newest entries. The publications page links to `/publications.bib`, generated at build time from the same JSON records for citation import.

## Agent maintenance

Agents should start with [AGENTS.md](AGENTS.md), then read the [content guide](management/README.md) and [source notes](management/sources.md). These documents cover content locations, source verification, personal-information boundaries, validation, publishing authority, and recovery. They do not create scheduled jobs or grant account access.

## Visibility and public content

This repository is **public**, confirmed through the GitHub API on 2026-10-16. Maintenance documents and content JSON are publicly visible in the repository even though they are not served as standalone website pages. Keep internal research material and credentials outside the repository.

The `private: true` flag in `package.json` prevents accidental npm package publication; it does not make the GitHub repository private. Under GitHub Free, [making this repository private unpublishes its Pages site](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility#making-a-repository-private). A different visibility or hosting arrangement requires an explicit user decision.

## Local development

```bash
npm ci
npm run dev
```

```bash
npm run build
npm run preview
```

Static production files are generated in `dist/`, including the public BibTeX citation file. The management guide and JSON files are outside `public/`; they are not published as standalone pages or administration endpoints.

## Publishing

There is no scheduled build. The workflow builds only when website source or content changes in a pull request or a push to `main`, or when explicitly run through Actions > Build and deploy Astro site > Run workflow. Documentation-only changes do not trigger a build.

Pull requests run a build check. Pushes to `main` and manual runs on `main` publish to Pages. Deployment uses the short-lived `GITHUB_TOKEN`; no personal deployment token is configured. Uploaded deployment artifacts are retained for one day.

The custom domain is configured in GitHub Pages settings. Cloudflare has a DNS-only CNAME from `en.uqc-csu.com` to `uqc-csu.github.io`; GitHub Pages manages and enforces HTTPS. This Actions-based site does not require a `CNAME` file.

The apex domain `uqc-csu.com` and `www.uqc-csu.com` continue to redirect to the X-MOL homepage through separate Cloudflare rules.
