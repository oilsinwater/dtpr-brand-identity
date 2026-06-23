# DTPR Brand Identity — Audit & System Prep

A static, browser-native deck documenting DTPR's visual identity as observed across every live surface, plus the prescriptive system prep that follows it.

**DTPR** (Digital Trust for Places & Routines) is a data-transparency standard for urban sensors, stewarded by [Helpful Places](https://www.helpfulplaces.com) and licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). This repo holds Superbloom Design's v0.3 brand audit and the resulting Visual System Prep.

---

## What's in here

Two related decks, sharing one stylesheet, two covers, and a numbered-chapter convention.

### Part 1 — Brand Identity Audit (open `index.html`)

An observational inventory of the brand as it actually exists in the wild — across every visible surface, in source code, print collateral, and on the page.

| # | Chapter | Scope |
|---|---|---|
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

### Part 2 — Visual System Prep (open `sprint-index.html`)

The prescriptive engine — morphological boxes, recipes, blueprints, ISO matrix, responsive specs.

| # | Chapter | Scope |
|---|---|---|
| 13 | Form Box | Geometry, layout grids, color parameters, border radii |
| 14 | Process Box | Active scaling, line weights, motion, signal scans |
| 15 | Semantic Box | Element relationships, taxonomy hooks |
| 16 | Sprint Recipes | Combined into Regulatory, Maker, Commons contexts |
| 17 | Geometric Blueprint | Honeycomb math, coordinate mapping |
| 18 | Core CAA Assets | Built from the blueprint |
| 19 | ISO 3864 Matrix | Warning-color co-placement rules |
| 20 | Responsive Specs | Physical-to-digital transformation parameters |

---

## Viewing

No build step. Open `index.html` (or `sprint-index.html`) in any browser, or serve the directory:

    python3 -m http.server 8000
    # then http://localhost:8000

All page-to-page links are relative — the whole site can sit on any static host.

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

Source tags mark where evidence was gathered: `vision.dtpr.io` · `dtpr.io` · `makeshift` · `docs.dtpr.io` · `Assembly Day`.

The distinction matters. OBSERVED is reproducible from the source; INFERRED is the auditor's read; PROPOSED has not yet been decided by Helpful Places; MEMO lives in a foundation document, not in any live CSS or HTML. Confusing them is the most common failure mode of brand audits, so the deck keeps them visually separate.

---

## What this is and isn't

**It is.** An inventory of the DTPR visual identity across dtpr.io, vision.dtpr.io, makeshift2026.dtpr.io, docs.dtpr.io, the Assembly Day deck, the Message Map, and MakeShift print collateral — with screenshots, source-code citations, and analysis. Then a structured set of system parameters and recipes for how DTPR assets behave in the field.

**It is not.** A prescriptive brand book. Decisions and color-token lockups in Part 1 are *observed* or *inferred*, never invented. Every open question is named; nothing is silently resolved.

---

## Repository layout

    index.html             Part 1 cover (Brand Identity Audit)
    sprint-index.html      Part 2 cover (Visual System Prep)
    01..12-*.html          Audit chapters (12 pages)
    13..20-*.html          System prep chapters (8 pages)
    styles.css             Shared stylesheet for all 22 pages
    assets/
      marks/               DTPR hexagon, lockup variants, three seals
      logos-partners/      Helpful Places, Superbloom wordmarks
      screenshots/         Live-site and event collateral captures
        dtpr-io-hero/      dtpr.io section-by-section
        vision-hero/       vision.dtpr.io section-by-section
        makeshift-hero/    Makeshift 2026 section-by-section
        docs-dtpr/         docs.dtpr.io captures
        dtpr-io-live/      Full-page deploy captures
        walkthroughs/      Page-by-page screen recordings
      assembly-day/        Assembly Day deck captures

---

## Quantitative scope

| Metric | Value | Note |
|---|---|---|
| Live sites audited | 5 | dtpr.io, vision.dtpr.io, makeshift2026.dtpr.io, docs.dtpr.io, dtpr.guide |
| Pages observed | 76+ | across the four most-active sites, including localized and taxonomy pages |
| Hex colors extracted | 12 | brand primary, secondary, accent, status, neutrals — all from source CSS |
| Taxonomy elements | 147 | 51 device + 23 processing + 73 AI across three taxonomies |
| Stakeholder tiers | 3 | Public Sector · Social Sector · General Public — Assembly Day ecosystem research |
| Organizational values | 5 | Openness · Legibility · Agency · Accountability · Community — Message Map |

---

## Stewardship & license

- **Standard steward:** [Helpful Places](https://www.helpfulplaces.com)
- **License:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — applies to both this audit deck and the DTPR standard assets it documents
- **Audit author:** Superbloom Design · June 2026 — attribution requested on redistribution
- **Status:** v0.3 — audit draft + system prep draft

---

## Version history

- **v0.1** (April 2026) — initial site inventory
- **v0.2** (May 2026) — Assembly Day findings integrated, color tokens locked
- **v0.3** (June 2026) — Voice chapter added, Visual System Prep split out, Message Map two-track fork surfaced

Each page carries a `v0.3 · audit` or `v0.3 · system prep` badge in its header.

---

## Contributing

This is a published audit artifact. Open an issue or PR if you spot an inaccuracy — the OBSERVED/INFERRED/PROPOSED distinction makes it easy to triage: factual corrections land on the OBSERVED claims, and framing questions land on the INFERRED or PROPOSED ones.

Helpful Places owns the standard and the brand direction; Superbloom authored this deck. Reach Helpful Places for any decision about how DTPR should look going forward.
