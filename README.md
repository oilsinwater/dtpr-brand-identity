# DTPR Brand Identity — Audit & Guidelines

A static, browser-native site documenting DTPR's visual identity — from the original brand audit through prescriptive guidelines and interactive web prototypes.

**DTPR** (Digital Trust for Places & Routines) is a data-transparency standard for urban sensors, stewarded by [Helpful Places](https://www.helpfulplaces.com) and licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). This repo holds Superbloom Design's brand audit, prescriptive brand identity guidelines, and two Recipe B web prototypes.

---

## What's in here

Two interconnected sections, sharing one design language.

### Part 1 — Brand Identity Audit (open `index.html`)

An observational inventory of the brand as it actually exists — across every visible surface, in source code, print collateral, and on the page. Closes with Strategic Postures: the four conceptual directions that frame the guidelines.

| # | Chapter | Scope |
|---|---|---|
| 00 | Cover | Scope, sources, steward, author |
| 01 | Evolution | The 2020–2026 arc: vision → dtpr.io → Makeshift → Assembly Day |
| 02 | dtpr.io (current) | Hero, problem/proposal/mission cards, taxonomy page, footer |
| 03 | vision.dtpr.io | The 2020 co-design prototype — origin of the hex mark |
| 04 | Makeshift 2026 | Contemporary visual baseline, explicit color tokens |
| 05 | docs.dtpr.io | Documentation site in light mode |
| 06 | Marks & seals | Canonical hexagon, lockup variants, three seals |
| 07 | Color tokens | Primary, secondary, semantic, status, neutrals |
| 08 | Typography | Three type systems, six specimens |
| 09 | Iconography | Hexagon container, taxonomy icon library |
| 10 | Illustrations | Corporate Memphis cityscapes vs. hex-based scenarios |
| 11 | Voice & tone | Five principles, organizational values, two-track fork |
| 12 | Findings | What survived, what's fragile, next steps |
| 13 | Strategic Postures | Four conceptual brand axes mapped to four stakeholder personas |

### Part 2 — Brand Identity Guidelines (open `guidelines/index.html`)

The prescriptive brand guidelines — use-case rules, logo specifications, color and typography protocols, application examples. Deliverable-grade document.

| # | Chapter | Scope |
|---|---|---|
| 01 | Brand Identity Values | Core values: openness, legibility, agency, accountability, community |
| 02 | Logo | Canonical hexagon mark, horizontal lockup, clear space rules |
| 03 | Logo (Stacked) | Stacked lockup variant and usage |
| 04 | Watermark | Reduced-scale watermark form and background treatments |
| 05 | Icon | Standalone icon usage — minimum sizes and contexts |
| 06 | Dimensions & Clear Space | Dimensional grid, exclusion zones, size thresholds |
| 07 | Color Guide | Primary navy, secondary chartreuse, extended palette, semantic usage |
| 08 | Fonts | Source Serif 4, Public Sans, Source Code Pro — specimens and pairing rules |
| 09 | Font Protocol | Cross-recipe usage rules, hierarchy, responsive type scale |
| 10 | Photography | Editorial photography direction, subject framing, do's and don'ts |
| 11 | Visual Language | Graph-paper grid system, geometric motifs, layout principles |
| 12 | Web Application | Recipe B web component patterns, nav, hero, section anatomy |
| 13 | Misuse & Don'ts | Logo distortions, color violations, typographic misuse, prohibited patterns |
| 14 | Voice & Tone | Five principles, organizational values, register calibration |
| 15 | Co-Branding | Partner mark placement, co-authorship rules, lockup hierarchy |
| 16 | Print Collateral | Report covers, flyers, one-pagers — layout and margins |
| 17 | Stationery | Business cards, letterhead, email signature |
| 18 | Environmental & Signage | Physical sign templates, physical-to-digital QR flows |
| 19 | Merch & Swag | Tote bags, pins, buttons — logo placement and sizing |
| 21 | Email Templates | HTML email templates: announcement, update, invitation |

#### Interactive Prototypes (in `guidelines/`)

Two interactive web prototypes demonstrate Recipe B in motion. Built with Vue 3 + Nuxt, deployed as static HTML.

| Path | Description |
|---|---|
| `guidelines/prototype/` | **V3 — Minimal** — clean Recipe B, real deployment map, active deployments only |
| `guidelines/prototype-v2/` | **V2 — Maximal** — full section treatment, animation-forward, complete A-Day-with-DTPR journey |

---

## Viewing

No build step. Open any entry point in any browser, or serve the directory:

    python3 -m http.server 8000
    # then http://localhost:8000

All page-to-page links are relative — the whole site can sit on any static host.

**Entry points:**
- `index.html` — Brand Identity Audit cover
- `guidelines/index.html` — Brand Identity Guidelines cover

---

## Epistemic tag system

Every claim in the audit is tagged so the deck can be read with calibrated confidence:

| Tag | Meaning |
|---|---|
| **OBSERVED** | Empirically present in source code or visible on a live page |
| **INFERRED** | Derived from how assets are deployed, not from a written rule |
| **PROPOSED** | Recommended direction, not yet decided |
| **MEMO** | Sourced from the brand foundation memo (v2), not a live surface |
| **OPEN** | A decision the brand book has to surface for the team |

Source tags: `vision.dtpr.io` · `dtpr.io` · `makeshift` · `docs.dtpr.io` · `Assembly Day`.

---

## Repository layout

    index.html                Audit cover (Part 1)
    01..13-*.html             Audit chapters (13 pages)
    styles.css                Shared stylesheet for all pages
    assets/
      marks/                  DTPR hexagon, lockup variants, three seals
      logos-partners/         Helpful Places, Superbloom wordmarks
      screenshots/            Live-site and event collateral captures
    guidelines/
      index.html              Guidelines cover (Part 2)
      01..21-*.html           Guidelines chapters (20 pages)
      prototype/              V3 Minimal prototype (Vue 3 + Nuxt, static)
      prototype-v2/           V2 Maximal prototype (Vue 3 + Nuxt, static)
    BRAND_BOOK.md             Recipe B brand contract (canonical design direction)
    DESIGN.md                 Visual design system reference and token definitions
    RATIONALE.md              Why this site is built the way it is
    README.md                 This file

---

## Reference documents

| File | Purpose |
|---|---|
| `BRAND_BOOK.md` | The canonical Recipe B design contract — the agreement between designers and builders. Covers brand personality, token system, component anatomy, voice, and application rules. |
| `DESIGN.md` | Visual design system reference — token definitions, color primitives, type scale, spacing, and grid. |
| `RATIONALE.md` | Deep rationale for the site format and model — why HTML over PDF, why generative over fixed, why this approach. |

---

## Quantitative scope

| Metric | Value | Note |
|---|---|---|
| Live sites audited | 5 | dtpr.io, vision.dtpr.io, makeshift2026.dtpr.io, docs.dtpr.io, dtpr.guide |
| Pages observed | 76+ | across the four most-active sites |
| Hex colors extracted | 12 | brand primary, secondary, accent, status, neutrals — all from source CSS |
| Taxonomy elements | 147 | 51 device + 23 processing + 73 AI across three taxonomies |
| Stakeholder tiers | 3 | Public Sector · Social Sector · General Public |
| Organizational values | 5 | Openness · Legibility · Agency · Accountability · Community |
| Audit pages | 13 | Part 1 Brand Identity Audit (00–13) |
| Guidelines pages | 20 | Part 2 Brand Identity Guidelines |
| Prototypes | 2 | V2 Maximal and V3 Minimal — interactive Recipe B demos |

---

## Stewardship & license

- **Standard steward:** [Helpful Places](https://www.helpfulplaces.com)
- **License:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Audit author:** Superbloom Design · June 2026 — attribution requested on redistribution
- **Status:** v0.4 — brand identity audit + brand identity guidelines + prototypes

---

## Version history

- **v0.1** (April 2026) — initial site inventory
- **v0.2** (May 2026) — Assembly Day findings integrated, color tokens locked
- **v0.3** (June 2026) — Voice chapter added, Visual System Prep split out, Message Map two-track fork surfaced
- **v0.4** (August 2026) — Brand Identity Guidelines added, two Recipe B prototypes deployed, BRAND_BOOK.md added as canonical design contract, Visual System Prep pages retired

---

## Contributing

This is a published audit artifact. Open an issue or PR if you spot an inaccuracy — the OBSERVED/INFERRED/PROPOSED distinction makes it easy to triage.

Helpful Places owns the standard and the brand direction; Superbloom authored this deck.
