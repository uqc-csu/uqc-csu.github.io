# Research group website template

An English-only, unfilled presentation template at [en.uqc-csu.com](https://en.uqc-csu.com/). It uses Astro, Tailwind CSS, and GitHub Pages. The public site contains structural labels and static visual placeholders. No group information, sample people, publications, news, or contact details are populated.

## Display and management

| Layer | Location | Responsibility |
| --- | --- | --- |
| Content management | `management/content/en/` | Editable JSON records, currently empty |
| Maintenance guide | `management/README.md` | Field descriptions and publishing instructions |
| Display modules | `src/components/modules/` | Reusable presentation components receiving data through props |
| Content adapter | `src/lib/content.ts` | Imports and types for management records |
| Pages | `src/pages/` | Compose the display modules |

Empty records render visual placeholders. To populate the website later, edit the management files. Presentation code does not need group-specific copy.

## Local development

```bash
npm ci
npm run dev
```

```bash
npm run build
npm run preview
```

Static production files are generated in `dist/`. The management guide and JSON files are outside `public/`; they are not published as standalone pages or administration endpoints.

## Publishing

There is no scheduled build. The workflow builds only when website source or content changes in a pull request or a push to `main`, or when explicitly run through Actions > Build and deploy Astro site > Run workflow. Documentation-only changes do not trigger a build.

Pull requests run a build check. Pushes to `main` and manual runs on `main` publish to Pages. Deployment uses the short-lived `GITHUB_TOKEN`; no personal deployment token is configured. Uploaded deployment artifacts are retained for one day.

The custom domain is configured in GitHub Pages settings. Cloudflare has a DNS-only CNAME from `en.uqc-csu.com` to `uqc-csu.github.io`; GitHub Pages manages and enforces HTTPS. This Actions-based site does not require a `CNAME` file.

The apex domain `uqc-csu.com` and `www.uqc-csu.com` continue to redirect to the X-MOL homepage through separate Cloudflare rules.
