# Progress Group Inc. Corporate Website — Project Overview

- **Audience:** Company owner, future developers, content reviewers, and business stakeholders
- **Current stage:** Website foundation complete — public content validation is next
- **Last updated:** 2026-10-23

## What This Project Is

This project will create a modern public website for Progress Group Inc., a Chester Springs, Pennsylvania consulting company. The site is intended to explain the company clearly, present its consulting services with professional visual depth, and provide a direct contact path on phones and desktop computers.

The current repository contains the approved project baseline, substantial draft copy, an original brand system, and a working static Astro foundation. The responsive home presentation now demonstrates the intended visual system and visitor journey, but it is not deployed and its controlled public facts and marketing copy are not yet approved for release.

## Planned Visitor Experience

| Area | Intended Experience | Current Status |
|---|---|---|
| Introduction | Clear consulting position, concise value statement, and immediate service/contact paths | Responsive foundation implemented; copy awaiting owner validation |
| About | Credible company presentation with only owner-confirmed public facts | Drafted; facts awaiting release confirmation |
| Services | Distinct explanations for business process, management, project, operational improvement, and specialized advisory consulting | Responsive presentation implemented; copy remains draft |
| Approach | A four-stage Understand, Clarify, Align, Advance presentation framed as a flexible engagement model | Responsive presentation implemented; owner validation required |
| Contact | Mobile-friendly call and location details, with no unapproved data collection | Safe placeholder implemented; candidate details remain excluded pending confirmation |
| Visual identity | Original navy, teal, gold, and warm-neutral logo and illustration system | Implemented in the foundation |
| Interaction | Responsive navigation, restrained motion, progressive disclosure, and meaningful states | Responsive navigation, focus, and reduced-motion foundation working; further enhancement planned |

## How the Site Avoids Looking Empty

The content strategy adds depth through useful service explanations, common consulting questions, a clear engagement framework, and original visual storytelling. It intentionally does not invent testimonials, clients, case studies, certifications, industries served, awards, revenue claims, or performance results.

## Brand Direction

The identity represents clear direction, connected work, and practical forward movement. The mark combines a stable frame with a pathway and coordinated checkpoints. Website illustrations use the same language of pathways, operational flow, structured information, and selective focal points.

See `BRAND_GUIDE.md` and `assets/ASSET_MANIFEST.md` for the complete usage boundary.

## Current Decisions and Limits

- The requirements baseline is approved for planning and implementation, with public-fact controls that must close before release.
- The owner selected Profile A: static Astro with TypeScript on a current Node.js LTS runtime.
- The first implementation uses project-local styles and focused browser behavior; React, Tailwind, a broad UI kit, server rendering, and a CMS are not default dependencies.
- GitHub is connected to Cloudflare Pages according to the owner; the initial dependency install failed. Pages configuration and an explicit npm script-policy fix are now present, with a separate optional Workers configuration. A successful hosted deployment, production domain, analytics, CMS, and a contact form remain pending.
- Protocol feedback participation is Enabled. Bundle `PFB-PGI-20260720-001` is Ready locally under ignored `feedback-export/`; delivery is not authorized, and routine offer cadence or triggers still require an owner choice.

## Next Step

The next owner review should approve, revise, reject, or defer the controlled business facts, contact details, proposed tagline, and detailed narrative. Approved dispositions will update the centralized site content; unapproved material will remain excluded from any release.

This overview is derived guidance. `requirements/REQUIREMENTS.md` and `PROJECT_CONTINUITY.md` control if a conflict exists.
