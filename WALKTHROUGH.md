# DTPR Brand Identity & Visual System Prep — Walkthrough

## Purpose

**DTPR** (Digital Trust for Places & Routines) is an open standard for transparent public-interest technology, stewarded by [Helpful Places](https://www.helpfulplaces.com) under CC BY 4.0. This site is a v0.3 working artifact by Superbloom Design (Philliph Drummond, Senior Tech Design Researcher), in two halves:

- **Brand Identity Audit (00–12)** — what the brand actually is across every visible surface, in source code, and print collateral. The inventory.
- **Visual System Prep (13–21)** — Phase 3 sprint prep. Design rules, morphological parameter grids, sprint recipes, hexagon blueprint, application assets, and responsive specs. The system that addresses the audit.

Static HTML, single `styles.css`, no build pipeline. Open from `index.html`.

---

## Part 1 — Brand Identity Audit

### Cover

- **`index.html`** — Audit cover. Scope (visual identity audit, not prescriptive guidelines), sources (5 live sites, Assembly Day deck, Message Map, MakeShift print collateral), steward and author credit.

### Trajectory & Surfaces

- **`01-evolution.html`** — How the visual identity got here. Six years of design work, four major surfaces, two visual systems in tension.
- **`02-dtpr-io.html`** — The public standard site. Nuxt + Tailwind, Red Hat Text, navy + teal. 2,300+ unique visitors/year, but a 35s / 49% scroll-depth bounce.
- **`03-vision.html`** — The 2020 co-design prototype (Sidewalk Labs era). Origin of the hex mark, the data chain, the 147-element taxonomy, the teal identifiability color.
- **`04-makeshift.html`** — The 2026 MakeShift event site. The cleanest, most disciplined surface in the ecosystem — and one of two designated Phase 3 reference points.
- **`05-docs.html`** — The documentation site (Mintlify, light mode by default). Developer audience's entry point.

### Visual System Components

- **`06-marks.html`** — The DTPR mark in all its forms. The canonical hexagon (inner circle + offset square), three SVG variants, three 2020-era proposal seals, the Makeshift layered mark.
- **`07-color.html`** — The DTPR palette, fully catalogued. Navy (brand constant), teal (identifiability signal), lime (2026 accent), cobalt (Assembly Day communication). Notes the unresolved ISO 3864 collision.
- **`08-typography.html`** — Three type systems, four sites, one decision pending. Red Hat Text / JetBrains Mono + Source Sans / system stack / Mintlify default.
- **`09-iconography.html`** — The hex-as-container grammar. The hexagon is the atomic unit; every icon is a populated hexagon; every layout is a tessellation.

### Secondary Systems

- **`10-illustrations.html`** — Two illustration systems in tension: hex-based scenario composition vs. Corporate Memphis cityscape. Names which goes where.
- **`11-voice.html`** — Five voice principles (and what each forbids), five organizational values from the Message Map, the two-track fork (status quo vs. stronger opinion).

### Synthesis

- **`12-findings.html`** — What survived, what's fragile, what the Phase 3 sprint has to address. Ten unresolved open questions.

---

## Part 2 — Visual System Prep (Sprint)

### Cover

- **`sprint-index.html`** — Sprint cover. Scope (system parameters and responsive specs, not final brand guidelines), methods (morphological parameter boxes, coordinate mapping, honeycomb blueprinting, ISO 3864 check), steward and author credit.

### Strategic Framework

- **`13-strategic-postures.html`** — Four Conceptual Postures. Maps the Sprint Morphology columns (Posture A–D) to four stakeholder personas (Pragmatic Deployers, Vigilant Advocates, Impacted Citizens, Technical Evaluators) and four strategic postures (Flat & Minimal, Speculative & Maker, Human & Ecosystem, Regulated & Standard).

### Morphological Boxes (parameter grids)

- **`14-sprint-morphology.html`** — Visual Morphological Box (Form). Fritz Zwicky / Karl Gerstner framework applied to DTPR's visual variables.
- **`15-transformation-morphology.html`** — Transformation & Interaction Box. Rules for how the visual language adapts to screen size, interaction, live data, domain changes.
- **`16-semantic-morphology.html`** — Semantic, Policy & Narrative Box. Rules of meaning, register, and disclosure — positioning across deployment tracks and stakeholder registers.

### Composition

- **`17-sprint-recipes.html`** — Three Sprint Recipes (deployment paths). Form + Process + Semantic options combined into three canonical paths, each tuned to a distinct audience and context.
- **`18-geometric-blueprint.html`** — DTPR Hexagon: Geometric Blueprint. Mathematical constraints for the hexagon unit — signage panels, icon sets, grid structures, digital layouts derived from one atom.

### Application

- **`19-core-caa-assets.html`** — 5 Core Application Assets. The CAA method (Components → Assets → Application) applied: Symbol, Line, Frame, Label, deployed across five highest-impact physical and digital touchpoints.
- **`20-iso-3864-matrix.html`** — ISO 3864 Integration Matrix. Maps DTPR's visual language against ISO safety signage — alignment, separation rules, conflicts to resolve before physical deployment.
- **`21-responsive-specs.html`** — Responsive Application Specs. How the system transforms across the full range — 10-meter outdoor installations to 320px mobile screens accessed via QR scan.

---

## Files

- `index.html`, `sprint-index.html` — covers
- `01-` … `12-` — audit pages
- `13-` … `21-` — sprint pages
- `styles.css` — single shared stylesheet
- `assets/` — screenshots, logos, partner marks, marks, assembly-day
- `LICENSE`, `README.md` — license + repo readme