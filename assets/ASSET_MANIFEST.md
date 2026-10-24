# Brand Asset Manifest

All assets listed here were created specifically for this project. They are editable SVG files with no third-party photography, logos, trademarks, or embedded font files.

| Asset | Purpose | Suggested Use | Accessibility |
|---|---|---|---|
| `brand/logo-horizontal.svg` | Full company logo | Desktop navigation, footer, presentations | If the visible company name is not repeated nearby, use alternative text “Progress Group Inc.” |
| `brand/logo-mark.svg` | Compact brand mark | Mobile navigation, social avatar, section accent | Decorative when adjacent to the company name; otherwise label “Progress Group Inc.” |
| `brand/favicon.svg` | Simplified small mark | Browser icon | No page-level alternative text needed |
| `images/hero-advisory.svg` | Abstract consulting hero visual | Hero background or framed visual on dark surface | Decorative; use empty alternative text when it does not convey unique information |
| `images/operations-flow.svg` | Abstract process/operations visual | Services or operational-improvement section | Decorative unless the implementation assigns it a specific explanatory meaning |
| `images/advisory-path.svg` | Abstract staged-progress visual | Approach/process section | Decorative; the adjacent HTML must contain the actual four-step content |

## Editing Rules

- Preserve each `viewBox` so the asset remains responsive.
- Keep meaningful text in HTML, not baked into illustrations.
- The SVGs may be animated with CSS only when the static image remains complete and reduced-motion behavior is provided.
- Re-exported raster copies must be generated from these sources and inventoried; do not replace the SVG sources with lossy output.
- If the owner adopts a different palette or identity, create a versioned replacement and update `BRAND_GUIDE.md` and this manifest together.
