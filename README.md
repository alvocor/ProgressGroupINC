# Progress Group Inc. Corporate Website

This repository contains the planning, content, brand system, and verified application foundation for a polished, responsive corporate website for Progress Group Inc., a Chester Springs, Pennsylvania consulting business. The owner selected Profile A: static Astro with TypeScript on Node.js 24.18.0 LTS.

## Start a new Codex session

Open Codex from this directory and use:

> Read `AGENTS.md` and `PROJECT_CONTINUITY.md` completely, inspect Git status, and continue the first unblocked Ready item.

The current item is `PGI-CONTENT-001` in `PROJECT_CONTINUITY.md`. The responsive foundation is working; public facts and proposed marketing copy now need owner dispositions before release.

## Develop locally

Use Node.js 24.18.0 and npm 11.16.0. Then run:

```powershell
npm install
npm run dev
```

Verification and production output:

```powershell
npm run check
npm run build
npm run preview
```

This workspace has an ignored portable Node.js runtime under `.tools/` because no system runtime was available. That local tool is not part of the repository; a fresh checkout must provide the recorded runtime before installing dependencies.

## Deploy to Cloudflare

The repository root is this application directory. If uploading its parent folder instead, set Cloudflare's root directory to `Progress-Group-Inc-app`.

### Cloudflare Pages (current Git integration)

The supplied build log is from Pages. Use these settings:

- Production branch: `master`
- Build command: `npm run build`
- Output directory: `dist`
- Build environment: `NODE_VERSION=24.18.0`, `NPM_VERSION=11.16.0`
- Root directory: blank if GitHub contains the application at its root; `Progress-Group-Inc-app` only if that subdirectory exists in GitHub.

`wrangler.jsonc` configures Pages with `pages_build_output_dir`. The strict npm script policy allows pinned esbuild and explicitly denies `fsevents@2.3.3`, an optional macOS-only dependency whose script is unnecessary for the static build. Keep `strict-allow-scripts=true` and review future install scripts individually.

Commit and push the fixes, then deploy the updated branch. Retrying the original commit uses its old policy.

### Workers static assets (optional alternative)

`wrangler.workers.jsonc` serves the generated `dist/` directory without a server or Astro adapter. In Cloudflare Workers & Pages, import the GitHub repository as a Worker and use:

- Production branch: `master`
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy --config wrangler.workers.jsonc`
- Build environment: `NODE_VERSION=24.18.0`, `NPM_VERSION=11.16.0`

For a manual deployment from an authenticated terminal:

```powershell
npm ci
npm run build
npx wrangler deploy --config wrangler.workers.jsonc
```

The Worker name defaults to `progress-group-inc`; change it in `wrangler.workers.jsonc` if needed. No application secrets, database, or runtime bindings are required. Unknown paths return 404 rather than the home page.

### Pages configuration reference

Select the Astro preset, production branch `master`, build command `npm run build`, and output directory `dist`. Set `NODE_VERSION=24.18.0` and `NPM_VERSION=11.16.0` in the build environment. The existing `.nvmrc` also records the Node version. Pages uses `wrangler.jsonc`; Workers uses the separate configuration selected by the explicit `--config` argument.

The owner reports GitHub is connected to Cloudflare Pages; its first build failed during dependency installation. A successful hosted deployment still needs verification. Public content approval and the production domain remain separate release tasks.

Official references: [Workers static assets](https://developers.cloudflare.com/workers/static-assets/get-started/) and [Astro on Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/).

## Project map

- `AGENTS.md` — mandatory session entry.
- `PROJECT_CONTINUITY.md` — governing protocol 0.41 copy and live project state.
- `PROJECT_OVERVIEW.md` — concise stakeholder-facing project summary.
- `requirements-source/SOURCE-001.md` — preserved source request and company information.
- `requirements/REQUIREMENTS.md` — normalized approved project baseline and release controls.
- `TECHNOLOGY_SELECTION.md` — recorded Profile A decision and supported foundation versions.
- `CONTENT_DRAFT.md` — substantial proposed website copy without invented proof claims.
- `BRAND_GUIDE.md` — visual identity, palette, typography, and asset rules.
- `assets/` — original SVG logo and website illustrations.

## Current boundary

Completed here: protocol setup, requirements normalization, content strategy, brand system, website-ready vector assets, Profile A technology selection, pinned application scaffolding, and a verified responsive Home/About/Services/Approach/Contact foundation.

Cloudflare deployment configuration and setup instructions are present. Not completed here: content approval, the complete release presentation, a hosted deployment, domain configuration, analytics, or public release.

Company facts and contact details supplied in the source must be confirmed by the owner before public release. Annual revenue and employee estimates are retained as source evidence but are not approved website copy.
