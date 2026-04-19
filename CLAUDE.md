# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Serving Locally

No build step — open any HTML file directly in a browser, or serve with:

```bash
python3 -m http.server 8080
# or
npx serve .
```

## Architecture

Pure static site. No framework, no bundler, no dependencies.

```
index.html      # Home
about.html      # About / team
services.html   # Services detail
contact.html    # Contact
styles.css      # All styles — single shared file
main.js         # All JS — single shared file
```

**styles.css** is organized into clearly labelled sections: shared tokens/components first (NAV, BUTTONS, TYPOGRAPHY, FOOTER), then per-page sections (HOME PAGE, ABOUT PAGE, SERVICES PAGE, CONTACT PAGE). Edit within the relevant section.

**main.js** has three behaviours: mobile hamburger nav toggle, scroll-based nav opacity tint, and scroll-reveal via `IntersectionObserver`. The reveal targets are listed in `revealSelectors` — add new card class names there if new animated elements are introduced.

## Design System

All colours, spacing, and sizing are CSS custom properties on `:root` in `styles.css`:

| Token | Value | Use |
|---|---|---|
| `--bg-primary` | `#080D1A` | Page background |
| `--bg-secondary` | `#0D1525` | Alternate section background |
| `--bg-card` | `#101828` | Card backgrounds |
| `--accent` | `#00E5C3` | Teal — primary interactive colour |
| `--text-primary` | `#EFF3FF` | Headings, body |
| `--text-secondary` | `#7A8FAD` | Muted text |
| `--border` | `#1A2640` | Subtle borders |
| `--nav-height` | `72px` | Used in `calc()` throughout for offset positioning |

Font: **Inter** via Google Fonts (weights 300–900).

## Key Patterns

**Active nav link** — each page sets `class="active"` on its own `<a>` in both the desktop `.nav-links` and `.mobile-nav`. Update both when adding pages.

**Services grid centering (home)** — the 5-card grid uses `grid-template-columns: repeat(6, 1fr)` with `span 2` per card, and explicit `grid-column` overrides on `:nth-child(4)` and `:nth-child(5)` to produce a centred 3+2 layout. Override the `@media (max-width: 700px)` block too if cards are added or removed.

**Inline SVGs for icons** — no icon library. All icons are hand-written `<svg>` elements with `stroke="currentColor"` so they inherit colour from their container.

**Responsive breakpoints** — `900px` (tablet, collapses multi-col grids), `700px` (services grid only), `640px` (mobile, hides desktop nav, shows hamburger).
