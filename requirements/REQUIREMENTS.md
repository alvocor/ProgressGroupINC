# Progress Group Inc. Website — Requirements Baseline

- **Document ID:** `REQ-PGI-001`
- **Version:** 1.0
- **Status:** Approved with release-validation controls
- **Approved:** 2026-07-19
- **Approval authority:** Project owner through `SRC-PGI-001`
- **Artifact mode:** Compact
- **Source:** `requirements-source/SOURCE-001.md`

## Product Purpose

Create a polished, modern, responsive corporate website that introduces Progress Group Inc., explains its consulting services, provides a credible presentation experience despite limited source material, and makes it easy for prospective clients or partners to contact the company.

## Audiences

- Prospective clients seeking business, management, project, or operational consulting.
- Business partners and professional contacts validating the company and its services.
- The company owner and future maintainers updating public content.

## Functional Requirements

| ID | Requirement | Acceptance Boundary | Source |
|---|---|---|---|
| `FR-PGI-001` | The website must provide a strong home-page introduction, clear positioning, service overview, and contact call to action. | Visitors can understand the company category, offered services, and how to make contact without searching through dense text. | `SRC-PGI-001` |
| `FR-PGI-002` | The website must present business process consulting, management consulting, project consulting, operational improvement, and specialized advisory services. | Each supplied service has a distinct, readable explanation that does not promise unsupported outcomes. | `SRC-PGI-001` |
| `FR-PGI-003` | The website must include an About presentation and may include supplied company facts only after owner verification for public use. | Published facts are traceable to an owner-confirmed content decision; estimates are not presented as verified company statements. | `SRC-PGI-001` |
| `FR-PGI-004` | The website must provide clear contact information and mobile-friendly contact actions. | The approved business name, phone, address, and any later approved email or form are accessible and usable on phone and desktop. | `SRC-PGI-001` |
| `FR-PGI-005` | The website must feel substantial without fabricated proof. | It may use service detail, common business questions, an engagement framework, and visual storytelling; it must not invent clients, testimonials, case studies, certifications, industries served, awards, savings, growth figures, or engagement results. | `SRC-PGI-001` |
| `FR-PGI-006` | The website must use an original visual identity suitable for professional consulting. | The supplied logo system, palette, and imagery are applied consistently and remain legible at responsive sizes. | `SRC-PGI-001` |
| `FR-PGI-007` | The experience must feel dynamic while remaining appropriate for a professional informational site. | Responsive navigation, restrained transitions, meaningful hover/focus states, progressive disclosure, and optional scroll-based motion enhance rather than obstruct content. | `SRC-PGI-001` |
| `FR-PGI-008` | Content must be maintainable without duplicating facts throughout the codebase. | Company details, services, navigation, and other repeated content use a centralized data/content structure appropriate to the selected stack. | Derived maintainability requirement |

## Quality and Release Requirements

| ID | Requirement | Acceptance Boundary |
|---|---|---|
| `QR-PGI-001` | Responsive presentation | Core pages and navigation work at representative phone, tablet, laptop, and wide desktop widths without overflow or inaccessible controls. |
| `QR-PGI-002` | Accessibility | Semantic structure, keyboard operation, visible focus, meaningful alternative text, reduced-motion support, sufficient contrast, labeled controls, and sensible heading order are verified. |
| `QR-PGI-003` | Performance | Images and fonts are optimized, nonessential client-side JavaScript is limited, layout shift is controlled, and a production build is measured before release. |
| `QR-PGI-004` | Search and sharing | Every public page has a descriptive title and summary; canonical/site URLs, robots, sitemap, structured data, and social-preview metadata are configured only after the production domain and facts are approved. |
| `QR-PGI-005` | Security and privacy | No secrets enter the repository. Any later form, analytics, cookies, or external embeds receive an explicit data/privacy decision and appropriate abuse protection before release. |
| `QR-PGI-006` | Browser support | Current mainstream mobile and desktop browsers receive the complete content and core interaction path; decorative enhancements degrade safely. |
| `QR-PGI-007` | Verification | The production build, automated checks, responsive inspection, keyboard path, content/fact review, and link/contact checks pass before release. |

## Approved First-Version Scope

- Home page or a cohesive single-page presentation with navigation to substantial sections.
- About, Services, Approach, and Contact content.
- Original brand mark, horizontal logo, favicon, and abstract brand illustrations.
- Responsive design and restrained interactive motion.
- Centralized editable company/service content.
- Search and social metadata placeholders that do not publish unverified data.

## Deferred or Excluded Until Separately Approved

- Contact form, newsletter, CRM, customer portal, authentication, or stored visitor data.
- Blog, CMS, multilingual content, online scheduling, or live chat.
- Client logos, testimonials, case studies, industries served, certifications, awards, and quantified results.
- Publishing the supplied annual revenue estimate or employee estimate.
- Hosting provider, production domain, analytics provider, and ongoing maintenance process.

## Public-Fact Validation Controls

| ID | Candidate Fact | Current Disposition | Required Authority |
|---|---|---|---|
| `CTRL-PGI-001` | Established/opened in 2011 and incorporated in Pennsylvania | Candidate public fact | Owner confirmation before release |
| `CTRL-PGI-002` | Marat Litvan is President | Candidate public fact | Owner confirmation before release |
| `CTRL-PGI-003` | 2157 Ferncroft Lane, Chester Springs, PA 19425 | Candidate public contact | Owner confirmation before release |
| `CTRL-PGI-004` | (610) 308-4655 | Candidate public contact | Owner confirmation before release |
| `CTRL-PGI-005` | SIC 8748 and NAICS 541618 | Reference/metadata candidate; normally omit from marketing pages | Owner decision if publication is desired |
| `CTRL-PGI-006` | Annual revenue estimate of $120,000 and approximately four employees | Source evidence only; not approved website copy | Explicit owner approval plus current verification |
| `CTRL-PGI-007` | Proposed tagline and detailed narrative in `CONTENT_DRAFT.md` | Proposed marketing copy | Owner approval or revision before release |

## Baseline Transition Check

- Source request is preserved separately and traceable.
- Product purpose, scope, audiences, services, quality boundaries, and release controls are explicit.
- Derived requirements are limited to maintainability, safety, accessibility, performance, and verification needed to implement the authorized outcome responsibly.
- Unsupported proof claims are excluded.
- Technology and hosting remain separately gated.
- Current project state, next actions, and control items agree with this baseline.

**Result:** Passed for planning and technology selection. Public content remains subject to the controls above before release.

## Change History

| Version | Date | Authority | Change |
|---|---|---|---|
| 1.0 | 2026-07-19 | Project owner / `SRC-PGI-001` | Initial corporate website baseline with public-fact validation controls. |
