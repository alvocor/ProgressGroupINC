# Technology Selection Brief — `PGI-TECH-001`

- **Status:** Selected — Profile A authorized by the project owner on 2026-07-20
- **Prepared:** 2026-07-19
- **Decision owner:** Project owner
- **Governing requirements:** `REQ-PGI-001` 1.0

## Decision

Choose the first-version web stack. All three profiles can produce the approved responsive corporate presentation; they differ primarily in complexity, rendering model, and future application headroom.

| Profile | Stack Shape | Best Fit | Tradeoffs |
|---|---|---|---|
| **A — Content-first islands (Recommended)** | Astro, TypeScript, component-scoped styling or Tailwind after explicit confirmation, lightweight interactive islands | Fast informational/marketing site with rich design and selective motion, minimal client JavaScript, straightforward content maintenance | Less appropriate if the site quickly becomes a deeply interactive authenticated application |
| **B — Full React framework** | Next.js, TypeScript, component styling, server/static rendering | Strong choice if near-term plans include forms with server actions, CMS previews, personalization, or application features | More framework surface and operational complexity than the current public-site scope requires |
| **C — Client application** | Vite, React, TypeScript, client-side routing where needed | Familiar React development and highly interactive presentation | Requires extra care for static search metadata and usually ships more client JavaScript than this content-first site needs |

## Recommendation

Choose **Profile A**. The website is primarily content and presentation, while “dynamic” means refined interaction rather than account-based application behavior. A content-first rendering model keeps pages fast and accessible while allowing animated navigation, service exploration, reveal effects, and other focused interactive components.

Use project-local design tokens and the supplied SVG assets. Select additional dependencies only when a concrete component needs them; do not install a broad UI kit by default.

## Recorded Selection

- **Selected profile:** A — Content-first islands
- **Authority:** Project owner response, 2026-07-20: “lets go with Profile A”
- **Rationale:** The owner accepted the recommended content-first rendering model for the approved corporate presentation.
- **Alternatives not selected for version one:** Profile B adds server/application surface not required by the baseline; Profile C would ship a client-application model and add search-metadata and JavaScript costs without a current need. These profiles are not prohibited if later approved scope changes justify reconsideration.
- **Consequences:** Use static Astro output, TypeScript, project-local CSS/design tokens, and framework-free browser scripting or Astro islands only where a concrete interaction needs them. Do not add React, Tailwind, a UI kit, a CMS, server rendering, or a hosting adapter by default.

## Supported Foundation Versions

Version evidence was checked against current official project and package sources on 2026-07-20.

| Component | Selected Version | Basis |
|---|---|---|
| Node.js | 24.18.0 LTS | Current Node.js LTS; Astro supports even-numbered Node.js releases at or above 22.12.0. |
| npm | 11.16.0 | Bundled by the selected Node.js 24.18.0 release. |
| Astro | 7.1.1 | Current Astro package release in the selected 7.1 line. |
| `@astrojs/check` | 0.9.9 | Current Astro diagnostics package; compatible with TypeScript 5 or 6. |
| TypeScript | 6.0.3 | Compatible 6.x version used with the current Astro toolchain; TypeScript 7 is intentionally not selected for this initial check configuration. |

Sources: [Astro installation prerequisites](https://docs.astro.build/en/install-and-setup/), [Astro 7.1 release](https://astro.build/blog/astro-710/), [Astro 7.1.1 package metadata](https://registry.npmjs.org/astro/latest), [Node.js 24.18.0 LTS](https://nodejs.org/en/blog/release/v24.18.0), and [`@astrojs/check` 0.9.9 metadata](https://unpkg.com/@astrojs/check@0.9.9/package.json).

The Windows environment initially had no `node` or `npm` executable. `OpenJS.NodeJS.LTS` 24.18.0 is available from the Windows package catalog and requires installation before project dependencies and build verification can run.

## Decisions Preserved for Later

- Cloudflare selected by the owner on 2026-10-23. The owner reports GitHub is connected to Pages. `wrangler.jsonc` configures Pages; optional Workers static assets use `wrangler.workers.jsonc` explicitly. The strict npm policy denies optional macOS-only `fsevents@2.3.3` scripts while retaining pinned esbuild approval. Production domain and successful hosted deployment remain pending.
- Whether a contact form is added after its data/privacy and abuse-protection decision.
- Whether content is file-based, MDX, or connected to a CMS after the initial site proves a CMS is necessary.
- Whether analytics is useful enough to justify its privacy and operational cost.

## Owner Response Examples

- `Choose Profile A.`
- `Choose Profile B because [reason].`
- `Delegate the stack choice within the approved requirements; use the recommended profile unless inspection finds a material conflict.`

## Acceptance

Selection acceptance was satisfied on 2026-07-20: the owner selected Profile A, the decision and consequences were reconciled with live project state, and supported foundation versions were identified from current sources. `PGI-BUILD-001` is the separate bounded foundation work item. Future major-version changes require a fresh compatibility review rather than silently following `latest`.
