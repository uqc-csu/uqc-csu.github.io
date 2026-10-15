# UQC Research Group website

This repository contains the static website for [en.uqc-csu.com](https://en.uqc-csu.com/), built with Astro and Tailwind CSS and hosted on GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

The generated static files are written to `dist/`.

## Content maintenance

Demo content is kept in `src/data/site.ts` so that names, publications, news, and contact details can be replaced from one place. The current copy is intentionally marked as placeholder content and does not represent verified group members, publications, or contact information.

The site is prepared for a future bilingual route. Add translated values to the structured data first, then introduce `/zh/` or `/en/` routes when the group approves the information architecture.

## Deployment

`.github/workflows/deploy.yml` runs `npm run build` for pull requests and deploys the `main` branch to GitHub Pages with the repository's short-lived `GITHUB_TOKEN`. No personal deployment token is stored in the repository.

The custom domain is configured in the repository's GitHub Pages settings. Cloudflare DNS has a DNS-only CNAME from `en.uqc-csu.com` to `uqc-csu.github.io`; GitHub Pages manages the HTTPS certificate. With this Actions-based publishing source, a `CNAME` file is not required.

The apex domain `uqc-csu.com` and `www.uqc-csu.com` remain separate Cloudflare-proxied entries that redirect to the group's X-MOL homepage.
