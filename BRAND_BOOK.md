# DTPR Brand Book — Recipe B (Maker), the canonical direction

> **Status:** Active contract. Reconciled 2026-08-05 against `dtpr-brand-identity/guidelines/09-font-protocol.html` (v0.4, "Cross-recipe protocol") and the real production codebase at `/Users/phil/Sites/Superbloom/dtpr-site/`. This is a substantial revision, not a patch: Recipe B is now the canonical direction for dtpr.io (Section 2), Recipe A/C are archived and folded in as sparing flavors (Section 3, Section 8), and Section 6's page anatomy now describes the page that actually ships — hero, I/O + geometric-network split, "Why DTPR exists," "What DTPR is," three-way role routing, an A-flavored procurement section, the Production Ledger, and "Built by" — not the earlier MCP/REST-quickstart developer-portal version this book described until today.
> **Scope:** This book is about **Recipe B**, dtpr.io's one canonical visual system. Section 3 and Section 8 describe how Recipe A and C survive *inside* Recipe B as sparing flavors — they are not separate contracts anymore.
> **Replaces:** The per-recipe handoff file pattern (`implementation_handoff.md` per recipe) has been retired. The brand book is now the contract that travels between agents. Per-recipe engineering details live in `recipes/b/DESIGN.md` and `recipes/b/tokens.css` (vault) and `app/recipes/b.css` (real app); this book narrates those, it does not duplicate them.
> **Source of truth:** For design decisions: this book + `recipes/b/DESIGN.md` + `recipes/b/tokens.css` + the real app's `app/recipes/b.css`. For the real logo: `dtpr-brand-identity/guidelines/02-logo.html` + `assets/marks/`. For visual evidence of the retired multi-recipe exploration: `dtpr.pen` (Pencil frames `CPkP7` desktop, `hcwG9` mobile) — historical, not actively maintained against this revision.

---

## 0. How to read this book

This is not a marketing piece and it is not a press kit. It is the *contract* between the people who design DTPR and the people who build it. Every section answers a question a future agent will ask. Every choice has a stated reason.

Three discipline rules:

1. **Every choice points at a token or a component.** No abstract claims.
2. **The parent brand has three words; Recipe B has one star.** Both get named explicitly. Neither gets re-litigated.
3. **The high-intent test.** If a section cannot justify its existence in 8 seconds, cut it.

---

## 1. The parent brand in one paragraph

DTPR is a nutrition label for technology in public space — an open, queryable communication standard that decodes how and why public technologies collect and use data. The brand is stewarded, not owned. It is read by city managers, by residents who encounter a sensor, by developers who integrate, and by advocates who hold everyone accountable.

**Three personality words:** *plain, accountable, calm.*
**One register descriptor:** *legible.*
**One-line definition (for the homepage and external communications):** *Digital Trust for Places and Routines (DTPR) is a legibility standard that uses a visual framework and common language to decode how and why public technologies use AI and collect and share data. DTPR enables better conversations about digital transparency, legibility, accountability, and trust.* (27 words, 9 seconds to read, three key points.)

**The function of the standard, named precisely:** DTPR is a *translation layer* between the dense technical documents produced by model makers and government agencies (model cards, algorithmic impact assessments, agency disclosures) and the public. It is the linguistic bridge.

The personality is what the brand is. The register is how the brand sounds on a phone in afternoon sun.

Source: the Jackie/Chelsea two-voice synthesis (`visual-identity-stakeholder-jackie-chelsea.md`, Q1 and Q2). The disagreement between the two voices — accountability-as-principle vs. calm-as-register — is the *point*: both are load-bearing and the brand has to hold both at once.

---

## 2. Recipe B in one paragraph — now the canonical direction

**Recipe B is dtpr.io's one visual system, not one of three.** Per `dtpr-brand-identity/guidelines/09-font-protocol.html` (v0.4, "Cross-recipe protocol"), Recipe A (Regulatory) and Recipe C (Commons) are archived — no longer separate, co-equal recipes. Recipe B now serves **all three of dtpr.io's routed audiences** from one homepage: Deployer, Developer, and Advocate (see `content/pages/get-started.md`). The Developer path hands off to the separate developer.dtpr.io project rather than duplicating its content here.

**Recipe B's north star:** *Precise and structural, with one editorial moment in the hero.*

The page is modeled after a technical schematic: graph-paper background, a single chartreuse action color, and a Source Serif 4 Italic hero headline as the editorial exception that connects Recipe B back to the parent brand. Where Recipe A's or C's real content earns a place (procurement framing for the Deployer, structural contrast borrowed from Recipe C's Lane 7), it renders as a sparing, B-rendered flavor — never by switching to A's or C's own token system.

Source: `recipes/b/PRODUCT.md` — the Recipe Scope and Users sections. The line "precise and structural with one editorial moment in the hero" remains the closest the workspace has to a single sentence resolving the tension between the "blueprint terminal" probes and the "quiet confidence" register. Use it.

---

## 3. What Recipe B is not

**The full six (parent brand):**

1. **Not a product.** No pricing, no "Get a demo," no marketing prose. The brand is a standard you adopt, not a tool you buy.
2. **Not a government agency.** No seal-and-eagle. No "Pursuant to Section…." The standard is for public use, not for governing.
3. **Not an AI vendor.** DTPR for AI uses the same visual system and taxonomy discipline as the physical-sensor track. Different surface, same brand.
4. **Not the legacy Corporate Memphis aesthetic.** Geometric blob people, lavender gradients, "playful" geometry — deprecated by Phase 2 consensus.
5. **Not a privacy policy.** Long body copy in 9pt serif, footer-of-100-links, "this policy was last updated…". The privacy policy lives at `dtpr.io/privacy`; the rest of the surface is *not* the privacy policy.
6. **Not a vendor lock-in.** The CC BY 4.0 story has to be visible in the visual register. A graph-paper field reads as *specification*, which reads as *open*.

**What changed 2026-08-05 — Recipe A and C are archived, not banned:**

7. **Not a wholesale switch to Recipe A's or C's own token system.** Their real content survives as sparing, B-rendered flavors — see Section 8 "may import." What's actually prohibited is importing their *tools*: Recipe A's sharp-cornered `#002684`/JetBrains-Mono system, its hexagon grid, its "Report a discrepancy" CTAs, its procurement-agency register applied wholesale; Recipe C's organic blob shapes, warm cream surfaces, "How do you feel about this?" emoji feedback, salmon/coral accents, people-centered illustration.
8. **Not a generic developer hub.** No abstract Corporate Memphis illustration, no cartoon mascots, no decorative gradients on code blocks. Recipe B illustrations are typographic or geometric only — including the flavor moments (see Section 5.10 network mark in `DESIGN.md`).

If a design call resembles any of these, it does not belong in Recipe B. Stop and pick a different surface.

---

## 4. The parent brand ↔ Recipe B relationship

### 4a. What Recipe B inherits from the parent

- **The three personality words** (plain, accountable, calm). The Source Serif 4 Italic hero headline is the parent's voice carried into Recipe B; it is the *one* place Recipe B is not calm.
- **The openness signal.** The graph-paper field reads as *specification*. The CC BY 4.0 footer reads as *stewardship*.
- **The accountability-as-action principle.** The live-data indicator's chartreuse pulse is accountability made visible — verified real 2026-08-05: the homepage's I/O panel fetches `api.dtpr.io/api/v2/schemas` live in the browser, not a simulated state.

### 4b. What Recipe B adapts

- **Type system.** Public Sans is the single shared sans family across the whole DTPR site (locked per Phil's 2026-08-03 decision, reaffirmed 2026-08-05 as the settled cross-recipe answer — this book previously flagged Source Sans 3 vs. Public Sans as unresolved; it is resolved: Public Sans). Recipe B adds a mono role (Source Code Pro) reserved strictly for code, schema identifiers, and taxonomy codes, and one editorial italic exception (Source Serif 4, hero only, exactly once per page). Public Sans was designed by USDS for the 17+ languages DTPR serves across its deployment footprint and is engineered for low-vision readability.
- **Color role.** Chartreuse is reserved for one job per surface: the live-data status indicator and the primary CTA. The network mark and Production Ledger markers use navy and status-green instead — never chartreuse outside its reservation.
- **Tone of voice.** Plain and accountable, but more terse and code-adjacent where technical content appears — and, in the A-flavored section, briefly RFP-grade for the Deployer audience specifically.

### 4c. What Recipe B does *not* inherit

- **The home page's coral accent and Barlow Condensed display**, if that separate exploration still exists — Recipe B's hero is Source Serif 4 Italic on paper, its accent is chartreuse, not coral.
- **Recipe A's compliance language, unflavored.** Recipe B does not write "Pursuant to" or "Mandatory disclosure" as its default voice — it writes "API endpoint" and "schema version," reaching for RFP-grade language only in the one A-flavored section serving the Deployer path.
- **Recipe C's community-poster language.** Recipe B does not write "The community holds the standard." It writes "CC BY 4.0 — pull requests welcome."

The rule: **Recipe B borrows the parent's discipline, and now Recipe A/C's real content where it serves a routed persona — never their sentences or their token systems wholesale.**

### 4d. The upstream/downstream relationship (DTPR vs. Helpful Places / Clarable)

DTPR is **upstream — top-of-funnel, free, open, awareness-building.** Organizations encounter DTPR, try it, and as they scale their adoption they mature into the downstream tier. The downstream tier is two products, both stewarded by Helpful Places:

- **Helpful Places** — the firm. Private-sector consulting and implementation services for cities, community organizations, and developers who need bespoke handholding to deploy DTPR internally and with community.
- **Clarable** — the platform. A software product that turns scattered spreadsheets and PDF reports into a single source of truth for organizations that need to inventory, assess, and disclose the digital systems they deploy.

**The funnel, named:** *DTPR (free, open standard)* → *awareness and engagement* → *Clarable (paid platform for organizations)* and *Helpful Places (paid services for organizations)*. The standard is the lead; the company is the close.

**The brand-guidelines rule:** DTPR's own surfaces (the homepage, the brand book, the standard documentation, the icon guide) speak only to DTPR. They do not advertise Helpful Places or Clarable. HP and Clarable appear in the steward credit and the footer of every page — full stop. The case-study rule echoes this: **DTPR case studies are generalized findings across deployments that speak to societal and democratic value. HP/Clarable case studies are client-specific and speak to buyer value.** The two kinds do not mix.

**The DTPR-for-AI tier.** DTPR for AI is **not** a downstream product. It is an evolution of the same standard applied to AI systems, aimed at a different document genre (model cards, algorithmic impact assessments, agency disclosures). It does not require Helpful Places or Clarable to use. Its deep technical surface (MCP/REST/UI quickstarts, live taxonomy) lives at developer.dtpr.io — a separate project this homepage routes to, not one it duplicates.

---

## 5. The shared chrome (present on every dtpr.io page)

These elements are real, built, and confirmed running in `/Users/phil/Sites/Superbloom/dtpr-site/`. They are not per-recipe anymore, since there's one recipe — but they remain visually unstyled by Recipe B's tokens on purpose, so the same components render identically on developer.dtpr.io and docs.dtpr.io.

### 5.1 GlobalNav — logo + two-link bar + locale switcher

- **Logo:** the real canonical mark + horizontal wordmark lockup (`dtpr-brand-identity/assets/marks/dtpr_logo_horizontal_navy.svg`) — hexagon + white inner circle + offset square, paired with "DTPR" in Public Sans Bold, navy `#002684` (the brand identity guidelines' canonical navy, distinct from Recipe B's own `#1B2B80`). Confirmed wired into `components/GlobalNav.vue` 2026-08-05, replacing a plain-text wordmark.
- **Two-link bar:** **Developer ↗** and **Helpful Places ↗**, top-right. Vanilla Nuxt UI styling — GlobalNav applies no recipe tokens, by design, so it renders identically across subdomains.
- **Locale switcher:** six pills (EN active), immediately under the logo row.

**Correction from the previous revision of this book:** Section 5.1 previously described a literal cartographic "global map" (navy landmass outlines, chartreuse pins) as shared chrome. That was never built. What exists instead is Recipe-B-specific: a geometric node-and-edge network mark (`DESIGN.md` Section 5.10), part of the homepage's split panel, not shared chrome present on every subdomain. If a literal deployment map is wanted later, it does not exist yet — don't assume it does.

### 5.2 LocalNav — dtpr.io-only sub-nav

Four-card row, confirmed live in `components/LocalNav.vue`: **Who we are** (mandate, stewardship, Helpful Places) · **Get started** (role-routed entry points) · **Get involved** (GitHub, Slack, newsletter, feedback) · **DTPR in the world** (deployment count — currently "17 cities and 5 countries" per the component's own copy, though `content/pages/dtpr-in-the-world.md` says "17 projects across 5 countries"; minor wording drift between the component and its content source, not resolved here). Overflow-scrolls on mobile; wraps to a row on wider viewports. dtpr.io only — not present on developer.dtpr.io or docs.dtpr.io.

### 5.3 The steward credit and footer

"CC BY 4.0 · Steward: Helpful Places" in the shared footer bottom bar, alongside real cross-domain links: Developer Portal, Documentation, Showcase, Helpful Places.

---

## 6. The page anatomy (Recipe B, as actually shipped)

Canonical order on the real homepage, confirmed running at both `/` and `/recipes/b` in `/Users/phil/Sites/Superbloom/dtpr-site/` (component: `app/components/recipes/RecipeBSpecSheet.vue`). This replaces every earlier version of Section 6 in this book — the MCP/REST-quickstart-flavored version this book described until earlier the same day never shipped to the real app.

1. **GlobalNav + LocalNav** (Section 5) — shared chrome, not owned by this component.

2. **Hero — Graph-paper field with editorial headline**
   - Headline: Source Serif 4 Italic, `clamp(32px, 5vw, 48px)`. **Locked copy:** *DTPR is a nutrition label for technology in public space.*
   - Subhead: Public Sans Regular, 19px, max 65ch. *An open-source communication standard for transparency, legibility, and accountability in technology — describing how public technologies collect and use data, in plain language.*
   - A `dl` status line: Status: Open standard · License: CC BY 4.0 · Steward: Helpful Places.
   - CTAs: Primary (chartreuse) **Get Started**, Secondary (ghost) **Who We Are**.
   - No hero image. Hero is text and grid only.

3. **I/O + geometric-network split panel** (C-flavored, per `DESIGN.md` Section 5.10)
   - Left (dark terminal panel): the live-data indicator (chartreuse pulse + **LIVE — schema API** label, or CONNECTING/STALE/ERROR states), then an `Input` / `Output` / `Reference` `dl` — real content, not code. This is where the accountability-as-action principle lives now, not a code preview.
   - Right (light panel): the geometric network mark alone, centered — connected navy nodes and edges, no organic shapes.

4. **"Why DTPR exists"** — plain-language explanation + Get Started / Explore the Standard CTAs.

5. **"What DTPR is"** — three plain-language statements (not cards; generous whitespace does the separating), condensed from `content/pages/home.md`.

6. **"Choose the path that fits your role"** — three-way role routing (Deployer / Developer / Advocate), each a card linking to its `/start-here/*` route. A genuine 3-way parallel choice, so cards are the right affordance here.

7. **"Why deploy under DTPR"** (A-flavored, per `DESIGN.md` Section 5.11) — real Recipe A copy and routes (`/playbook/deploy`, `/standard/audit-rubric`), scope-category icons (Sensors/Cameras/Connectivity) in Recipe B's own rounded system. Elaborates the Deployer path specifically. One such section per page.

8. **Production Ledger** — real proof, per `DESIGN.md` Section 5.9. **Canonical figures (corrected 2026-08-05): 17 projects across 5 countries** (`content/pages/dtpr-in-the-world.md`), linking to `showcase.dtpr.io` rather than naming specific cities. Seven named awards from `content/pages/homepage-proof-awards.md` — NSF POSE Phase I Award, PICCASO Awards Canada, Knight Foundation Community DTPR Program, World Smart City Innovation Award, Sydney Olympic Park DTPR pilot, Town of Innisfil, UN-Habitat Smart Cities playbook. This supersedes an earlier same-day version of this section that used a 14-deployment/6-country count independently scraped from `dtpr.guide/landing` — the content file is canonical per Phil's direction; the scrape is not, and the two disagree (also on the NSF award's year: 2023 in the content file vs. 2025 on the scraped site — unresolved upstream, not adjudicated here).

9. **"Built by"** — condensed stewardship copy from `content/pages/who-we-are.md`, naming the Community of Practice Council. The shared footer (Section 5.3) already carries the CC BY 4.0/steward line; this section adds what the footer doesn't cover.

10. **Shared footer** (Section 5.3).

**No partner-logo strip, no separate code-preview panel with syntax-highlighted API output.** Both existed in earlier same-day exploration and did not make it into the real build — see Section 7 for why the live-data proof moved into the split panel instead.

---

## 7. The visual system (Recipe B's tokens, applied)

The full token spec lives in `recipes/b/DESIGN.md` and `recipes/b/tokens.css` (vault) and `app/recipes/b.css` (real app, source of truth for what actually renders). If a token value changes, update the vault copy first, then the real app.

### 7.1 Color roles

| Role | Token | Value | Where it appears |
|---|---|---|---|
| Structure (primary) | `--ui-color-primary` | `#1B2B80` | Navigation active states, primary container borders, navy CTAs |
| Accent (secondary) | `--ui-color-secondary` | `#2563D0` | Hover states for primary (navy) actions, navy CTA hover, link hovers, mid-level category tags, focus rings on navy buttons, selected-state accents on secondary controls. **Not** a CTA fill. |
| Accent (tertiary, reserved) | `--ui-color-tertiary` | `#9ACD00` | **Reserved exclusively** for the live-data indicator + primary CTA. Hover: `#B5DB1A`; Active: `#84B400`. |
| Surface | `--ui-bg` | `#F8F8F2` | Default page background (Blueprint Paper) |
| Surface (lifted) | `--ui-bg-muted` / `--ui-bg-elevated` | `#F4F2EC` | Card and container surfaces (Warm Paper) |
| Surface (cool) | `--ui-bg-cool` | `#E8EAF5` | Sidebar fills, table headers (Cool Paper — a neutral, not a tertiary) |
| Ink | `--ui-text` / `--ui-text-highlighted` | `#0F172A` | Body text and headings on paper (16.4:1) |
| Muted | `--ui-text-muted` | `#475569` | Auxiliary text, metadata |
| Border | `--ui-border` | `#E2E0D8` | All 1px structural borders on paper surfaces |
| Field dark | `--recipe-b-terminal` | `#0A0E1A` | I/O panel, code surfaces |

**A real bug, fixed 2026-08-05, worth remembering:** `--ui-text-highlighted` was missing entirely from `app/recipes/b.css` (Recipe A's `a.css` had it; Recipe B's never did). Every `text-highlighted` heading rendered pure white on the paper background until caught in a verification screenshot. When adding new token roles to a recipe's CSS, check the full set Nuxt UI actually consumes, not just the ones an existing section happens to use.

**The chartreuse reservation rule.** Chartreuse (`#9ACD00`, the tertiary role above) is strictly reserved for the live-data status indicator and the primary CTA. Never on hero headlines, body text, decorative elements, hover states of non-primary elements, secondary-action affordances (use medium blue for those), or background fills other than the CTA itself. Hover and active states use chartreuse-hover `#B5DB1A` and chartreuse-active `#84B400`.

**The medium blue accent rule.** Medium blue (`#2563D0`, the secondary role) carries non-CTA affordances: link hovers, secondary-button hover, mid-level category tags, focus rings on navy buttons, selected-state accents on secondary controls. If a surface needs an accent but is *not* the primary CTA or live-data indicator, medium blue is the answer. If a surface needs an accent and *is* the primary CTA or live-data indicator, chartreuse is the answer — and the chartreuse reservation rule applies.

**The chartreuse CTA text color rule.** The primary CTA fill is chartreuse (`#9ACD00`). The text on that fill must be **Deep Slate (`#0F172A`)** or **Terminal Dark (`#0A0E1A`)** — not Navy (`#1B2B80`). The contrast ratios:

- Terminal Dark `#0A0E1A` on Chartreuse `#9ACD00` = **10.18:1** (AAA at all sizes)
- Deep Slate `#0F172A` on Chartreuse `#9ACD00` = **9.44:1** (AAA at all sizes)
- Navy `#1B2B80` on Chartreuse `#9ACD00` = **6.52:1** (AA only, **fails AAA**)

Navy on chartreuse is the trap: it looks "right" because both are deep brand colors, and it passes AA so it doesn't fail a basic accessibility check. It fails AAA — and chartreuse is the CTA accent, where the highest possible legibility matters. Always use deep slate or terminal dark for chartreuse-button text.

### 7.2 Type roles

| Role | Font | Where it appears |
|---|---|---|
| Display | Public Sans (400–800) | Headlines, section headers. The working voice, site-wide. |
| Editorial italic | Source Serif 4 Italic | Hero headline only. **One per page.** The parent-brand bridge. |
| Body | Public Sans Regular (17px, 1.64) | Documentation copy, descriptions. Capped at 65–75ch. |
| Label | Public Sans SemiBold (14px) | Nav links, button text, metadata. |
| Code / taxonomy IDs | Source Code Pro (14px) | Code blocks, schema identifiers — literal code or a literal ID only. |

**Public Sans is the single shared family — resolved, not open.** This book previously flagged Source Sans 3 (from an earlier stakeholder-conflict-resolution doc) vs. Public Sans as an open question for any future cross-recipe synthesis. It's resolved: Public Sans, confirmed 2026-08-05, matching what's already locked in `recipes/b/DESIGN.md` and now the real app's `nuxt.config.ts` font links.

**The italic cadence rule.** Source Serif 4 Italic appears *exactly once per page*, in the hero headline. Not in the subhead, section headers, CTAs, or cards.

### 7.3 Shape, motion, accessibility

- **Shape.** Card radius `--ui-radius` 8px (Recipe B's own; the A-flavored scope-category icons use this too, not Recipe A's sharp 0px). No organic blobs. No decorative gradients. No hexagons.
- **Motion.** Hover lift 1px, 120ms ease-out. Live-data pulse 1600ms. All removed under `prefers-reduced-motion: reduce`.
- **Accessibility.** WCAG AA minimum, AAA where achievable. The live-data indicator never relies on color alone. Code blocks are screen-reader navigable.

### 7.4 Mark vs. logo lockup rule

The **mark** is the hex-with-inner-circle-and-square graphic. The **logo lockup** is the mark paired with the "DTPR" wordmark. These are two distinct assets. **Never bake the wordmark into the mark itself.** A "DTPR_Logo_Blue.svg" or "DTPR_Logo_Black.svg" file that contains the hex mark with `<text>DTPR</text>` baked inside the hexagon is wrong — the wordmark inside the mark is not the logo, it is a corruption of both.

The correct files in `assets/marks/`:

| File | Contents | When to use |
|---|---|---|
| `dtpr_mark_navy.svg` | Hex mark, navy `#002684` solid | Default mark on light surfaces |
| `dtpr_mark_black.svg` | Hex mark, black `#000000` solid | Mark on light surfaces when navy is unavailable |
| `dtpr_logo_outline.svg` | Hex mark, 1.5px stroke only | Inverse contexts, large print, accessibility variants |
| `dtpr_logo_horizontal_navy.svg` / `_black.svg` / `_white_on_navy.svg` / `_white_on_black.svg` | Hex mark + "DTPR" wordmark, side-by-side | Site header, document headers, letterhead, email signatures |
| `dtpr_logo_stacked_navy.svg` / `_black.svg` / `_white_on_navy.svg` / `_white_on_black.svg` | Hex mark + "DTPR" wordmark, stacked | Business card back, signage, social avatars, dense contexts |

**Anti-pattern:** an SVG file called "DTPR_Logo_Blue" or "DTPR_Logo_Black" that puts the letters "DTPR" inside the hex circle. If you find one in the codebase, delete it and use the correct asset. The mark alone — solid color, no text — is the only thing the `dtpr_mark_*` files contain. The wordmark belongs in the lockup files only, never inside the mark.

---

## 8. What Recipe B may and may not import (post-archival)

**Recipe B must not import wholesale:**

- Recipe A's own token system: hexagon grids, sharp 0px corners, `#002684` as the operative navy, JetBrains Mono as a UI font, "Report a discrepancy" CTAs, the caution/certified language register applied by default.
- Recipe C's own token system: organic blob shapes, warm cream surfaces, hand-drawn figures, salmon/coral accents, people-centered illustration, emoji feedback.
- Chartreuse `#9ACD00` anywhere except the live-data indicator and the primary CTA.
- The Source Serif 4 Italic display anywhere except the hero headline.
- Corporate Memphis illustration, cartoon mascots, generic people imagery.
- Stock photography of offices or generic developer stock.
- Rounded corners larger than 12px, or a soft drop shadow (blur ≥16px) paired with a 1px border.
- Gradients, photographic backgrounds, or color washes on the hero.

**Recipe B may import, sparingly, rendered in its own system:**

- Recipe A's real procurement/compliance copy and routes, as one A-flavored section serving the Deployer path (`DESIGN.md` Section 5.11) — never as the page's default register, never more than once per page.
- Recipe C's Lane 7 structural DNA (bilateral split + one anchored graphic), rendered as the geometric network mark (`DESIGN.md` Section 5.10) — never the organic amoeba motif itself.
- The parent's three personality words, the shared chrome (Section 5), and the accountability-as-action principle.

The test for any borrowed element: is it *this recipe's own render* of a real fact or a real structural idea from an archived recipe — or is it that recipe's actual tool, imported wholesale? The first is in scope. The second is not.

---

## 9. Component & Layout Pattern Catalog (Pattern Library)

This section serves as the definitive pattern catalog for DTPR web implementations across both Maximalist (exploratory) and Minimalist (production-ready) expressions. Each component pattern details its core intent, typographic hierarchy, best practices (*How to use*), and strict anti-patterns (*How NOT to use*).

### 9.1 Editorial Hero & Split I/O Pattern

- **Purpose & Role:** Establish institutional authority and immediate legibility for first-time visitors, bridging civic stewardship with technical rigor.
- **Maximal Expression:** 2-column layout with ambient domain-warped WebGL brand aura shader behind the headline; right column features interactive 3D City Layers.
- **Minimal Expression:** Clean editorial column with static 4-layer city diagram PNG; single warm static SVG gradient blob behind the card.
- **Tokens & Hierarchy:**
  - Headline: `Source Serif 4 Italic` (Maximal) or `Public Sans Bold` (Minimal) clamped at 48px–56px (`font-normal` or `font-bold`), `#0F172A` on warm paper or `#FFFFFF` on dark field.
  - Lede: `Public Sans` 18px–20px (`font-medium` / `font-semibold`), line-height 1.5, max measure 65–75ch.
  - Primary CTA: Chartreuse `#9ACD00` fill with `#0F172A` bold text (strictly reserved).
  - Secondary CTA: Medium blue `#2563D0` or outlined navy `#1B2B80`.
- **How to Use (Best Practices):**
  - Always lead with the core mission: *"Making the invisible visible."*
  - Pair the primary standard exploration CTA directly with a link to the *Implementation Guide*.
  - Keep the graph-paper grid (`24px` grid at `#E2E0D8`) continuous beneath the section.
- **How NOT to Use (Anti-Patterns):**
  - **Do NOT** use small, whispery, low-contrast 10px–12px fonts for hero ledes or subtitles (avoid the AI-design tell).
  - **Do NOT** place chartreuse on non-primary buttons, decorative borders, or body text.
  - **Do NOT** use floating, ungrounded particle effects or stock photography.

---

### 9.2 City Blueprint & Exploded Layers Pattern

- **Purpose & Role:** Deconstruct complex urban technology into four tangible, human-scale layers: *Public Realm*, *Transportation*, *Buildings*, and *Digital Layer*.
- **Maximal Expression:** Interactive 3D WebGL scene (`CityLayersScene.vue`) allowing camera rotation, layer elevation toggles, and direct sensor inspection.
- **Minimal Expression:** High-contrast 2D architectural section diagram (`layer-image.png`) with clean monospace captions.
- **Tokens & Hierarchy:**
  - Layer Tags: `Source Code Pro` 11px–12px `font-bold` uppercase `#64748B`.
  - Border: 1px `#CBD5E1` container border with 6px border-radius.
- **How to Use:**
  - Clearly label all four layers in vertical stacking order from street grade to digital cloud.
  - Anchor the diagram with real physical contexts (e.g. lamp posts, transit hubs, building facades).
- **How NOT to Use:**
  - **Do NOT** render futuristic cyberpunk holograms or abstract polygon art disconnected from physical signage.
  - **Do NOT** obscure technical layer distinctions with heavy drop shadows.

---

### 9.3 DTPR Civic Notice (Nutrition Label) Pattern

- **Purpose & Role:** Provide a standardized, scannable placard summarizing the physical deployment, accountable steward, sensing hardware, and data retention rules of an urban sensor.
- **Tokens & Hierarchy:**
  - Card Ground: Pure White `#FFFFFF` with 2px Navy `#1B2B80` or `#CBD5E1` border, 6px radius.
  - Header Plaque: DTPR Sensor Mark + Title in `Public Sans Bold` 20px–24px.
  - Metadata Rows: 2-column key-value pairs separated by 1px rules (`#E2E8F0`), with red/green status badges for critical privacy constraints (e.g. `NONE (PROHIBITED)`, `0s (VOLATILE RAM)`).
- **How to Use:**
  - Emphasize accountable steward contact info, explicit sensing hardware specs, and retention limits.
  - Include direct link to civic open data portal or full data chain attestation.
- **How NOT to Use:**
  - **Do NOT** use small unreadable 9px text or low-contrast gray-on-gray for key constraints.
  - **Do NOT** use ambiguous terms like "Standard Data Collection"; always specify the exact hardware and retention period.

---

### 9.4 Taxonomy Explorer with Localized i18n Pattern

- **Purpose & Role:** Interactive digital specification card exploring the 5 canonical DTPR taxonomy categories: `SENSING`, `PURPOSE`, `PROCESSING`, `STORAGE`, and `ACCOUNTABILITY`.
- **Localization:** Includes a localized segmented language switcher (`EN`, `ES`, `FR`, `KM`) embedded directly in the component header.
- **Tokens & Hierarchy:**
  - Header: Monospace 12px–13px `font-bold` with active category pill filter.
  - Category Badge: `#1B2B80` navy badge with white monospace bold text.
  - Schema Key: `Source Code Pro` 12px–13px bold `#2563D0`.
  - Verification Tag: `#059669` green bold tag (`VERIFIED ✓`).
- **How to Use:**
  - Provide live translation switching for taxonomy names, summaries, implementation notes, and governance policies.
  - Support both single-card focused inspection (with previous/next controls) and category filtering.
- **How NOT to Use:**
  - **Do NOT** add global language pickers to the site-wide navbar when general marketing copy is not yet translated. Keep i18n scoped strictly to the Taxonomy Explorer.
  - **Do NOT** introduce non-standard taxonomy categories outside the canonical 5 DTPR standard domains.

---

### 9.5 Node Data Chain & Attestation Explorer Pattern

- **Purpose & Role:** Illustrate the step-by-step lifecycle of sensor data from capture to public publication, demonstrating cryptographic and privacy guarantees.
- **Stages:**
  1. `STAGE 01 (SENSING)`: Hardware Ingress & Fixed FOV capture.
  2. `STAGE 02 (EDGE AI)`: Local neural vector extraction with 100% ephemeral raw pixel dropping.
  3. `STAGE 03 (INGRESS)`: Signed cryptographic transmission over TLS 1.3 + Ed25519.
  4. `STAGE 04 (PUBLIC)`: Open data portal publication under CC0 at scheduled cadences.
- **Tokens & Hierarchy:**
  - Stage Pills: 11px monospace bold with active navy background.
  - Node Metric: Outlined blue pill badge displaying exact operational performance (e.g. `0.00ms latency`, `100% ephemeral`).
- **How to Use:**
  - Highlight cryptographic and privacy-preserving mechanisms at every node.
  - Include accessible step-by-step navigation controls with keyboard focus support.
- **How NOT to Use:**
  - **Do NOT** treat the data pipeline as an opaque cloud icon; always expose edge processing vs persistent storage.

---

### 9.6 Geographic Deployments Map (Flat 2D vs. 3D Layers)

- **Purpose & Role:** Provide proof of real-world civic adoption by mapping verified deployments across global municipalities.
- **Minimal / Standard Pattern:** High-contrast 2D equirectangular projection (`FlatWorldMap.vue`) rendered via clean SVG continental mesh, 5° graticule lines, and hop lines connecting verified deployments.
- **Maximal Pattern:** Interactive 3D orbital globe / layered map with WebGL shaders.
- **Filter Rule:** Strictly restricted to **Active Verified Deployments** (e.g. New York City, London, Angers, Boston, Sydney, Long Beach).
- **How to Use:**
  - Clicking any map pin or hop line immediately updates the adjacent metadata card with steward information, deployment year, and live signage counts.
  - Provide clear CTA to view full municipal deployment profiles at `/dtpr-in-the-world`.
- **How NOT to Use:**
  - **Do NOT** include hypothetical, proposed, or planned deployments that dilute the credibility of the standard.
  - **Do NOT** make pin targets smaller than 24px clickable touch zones.

---

### 9.7 Role Routing & Implementation Playbooks Pattern

- **Purpose & Role:** Triage diverse audiences into concrete implementation pathways:
  - *Deployer (Cities & Vendors):* Procurement guides, signage templates, vendor compliance checklists.
  - *Developer (Engineers & Data Stewards):* JSON-LD schemas, API specifications, open taxonomy repos.
  - *Advocate / Resident:* Civic trust frameworks, signage recognition, transparency rights.
- **How to Use:**
  - Feature clear, bold navigation cards linking directly to the GitBook Implementation Guide (`https://helpful-places.gitbook.io/a-guide-to-dtpr`) and DTPR Design Guide PDF.
- **How NOT to Use:**
  - **Do NOT** isolate users in circular links; always provide direct external or repository deep-links.

---

### 9.8 Production Ledger & Stewardship Footer Pattern

- **Purpose & Role:** Provide authoritative institutional disclosure, co-stewardship attribution (Helpful Places & Superbloom Design), and open-source licensing (CC BY 4.0).
- **Tokens & Hierarchy:**
  - Surface: Deep Navy `#070D24` with 2px `#1B2B80` top border.
  - Text: High-contrast `#94A3B8` muted text and `#FFFFFF` headings.
  - Links: Medium blue `#2563D0` active accents.
- **How to Use:**
  - Include three structured columns: *Navigation*, *Implementation Specs*, and *Stewards*.
  - Link directly to the GitBook Guide, Design Guide PDF, and GitHub repository.
- **How NOT to Use:**
  - **Do NOT** omit the CC BY 4.0 license badge or version indicator (Open Standard v2.1).

---

## 10. Source of truth and where things actually live

The design system now has real, confirmed locations, replacing the earlier `dtpr.pen → DESIGN.md → tokens.css → Nuxt build` chain (which described an intended pipeline before the real app was found):

- **Vault (this repo):** `recipes/b/PRODUCT.md`, `recipes/b/DESIGN.md`, `recipes/b/tokens.css`, this book. Planning and design-system documentation.
- **Real production app:** `/Users/phil/Sites/Superbloom/dtpr-site/` — Nuxt 4 + Nuxt UI v4 + `@nuxt/content`. `app/components/recipes/RecipeBSpecSheet.vue` is the built homepage. `app/recipes/b.css` is the real token binding. `content/pages/*.md` is the canonical content source.
- **Brand identity guidelines:** `dtpr-brand-identity` (symlinked into this vault at `brand-identity/dtpr-brand-identity`) — the real logo assets, the settled Public Sans decision, and the v0.4 "Cross-recipe protocol" that made Recipe B canonical.
- **Superseded, historical only:** `brand-identity/dptr-site-v2/` (a static HTML/CSS/JS exploration built the same day, before the real app was found — real and working, but not the production path). `dtpr.pen` Pencil frames (`CPkP7`, `hcwG9`) — not actively maintained against this revision.

**Rule:** if the vault's docs and the real app disagree, treat it as drift to reconcile, not as a hierarchy to defer to blindly — check which one is actually current before trusting either.

---

## 11. Open judgment calls

1. **The Bold Primary Trio for a *different* exploration (`recipes/_home/superbloom-identity-three-options.md`).** That document's navy `#0F2A4A` / amber `#E58A2E` / off-white `#F4EFE6` trio was a *separate* stakeholder-conflict resolution, distinct from Recipe B's own navy `#1B2B80` / chartreuse `#9ACD00`. Recipe B's tokens are what actually shipped; that trio was never adopted. If it resurfaces, treat it as a different, unresolved proposal — not as Recipe B's palette.
2. **LocalNav's deployment-count wording** ("17 cities and 5 countries" in the component vs. "17 projects across 5 countries" in its content source) — minor, unresolved, not user-facing enough to have blocked shipping.
3. **The NSF POSE Phase I Award's year** (2023 in `content/pages/homepage-proof-awards.md`, 2025 on the live `dtpr.guide/landing` site) — genuinely conflicting sources, unresolved upstream.

---

## 12. The page that ships

1. *What is this?* — A nutrition label for technology in public space. The hero says so.
2. *Is it real?* — Yes. The graph-paper field says so. The live-data indicator — genuinely fetching `api.dtpr.io/api/v2/schemas` — says so. The Production Ledger's named deployments and awards say so.
3. *Who is this for?* — Everyone, routed: Deployer, Developer, Advocate. The "Choose the path" section says so.
4. *Who stewards it?* — Helpful Places, under CC BY 4.0. The footer and the "Built by" section say so.

If a section cannot survive these four questions, it does not belong.

---

## 13. Verification — what "done" looks like

- **Direction:** Precise and structural, with one editorial moment in the hero. Recipe B is canonical, not one of three.
- **Audience:** Deployer, Developer, Advocate — role-routed from one homepage, not walled into separate recipes.
- **Primary action:** Get Started (chartreuse CTA), routing to role-based entry points.
- **Visual grammar:** Graph-paper field, Public Sans throughout with a single Source Serif 4 Italic exception, chartreuse reservation, navy + warm paper + terminal-dark, real logo (not styled text).
- **Signature behavior:** A genuinely live API fetch (not simulated) in the I/O panel; a geometric network mark, not literal cartography; an A-flavored procurement section for the Deployer path; a Production Ledger sourced from `content/pages/*.md`, not a scrape.
- **Source of truth:** This book, `recipes/b/PRODUCT.md`, `recipes/b/DESIGN.md`, and the real app at `/Users/phil/Sites/Superbloom/dtpr-site/`.

The brand book passes the high-intent test when every section above justifies its existence against Section 6's structure and Section 8's import rules.

---

## 14. Strategic Postures — how each recipe was arrived at, and why Recipe B became canonical

This section documents the *path* to Recipe B, not just the destination. It is the through-line that connects the strategic-posture work (what each recipe was *for*) to Section 15's "Going Forward" (what now happens to the recipes we set aside, and how their postural DNA survives inside the canonical expression). It is written so a future agent can defend a recipe decision against the work that produced it, without having to re-run that work.

### 14.1 The process, in plain terms

For each recipe, the brand-development workflow produced four artifacts, in this order:

1. **A Design Brief** (text). Names the audience, the features, the primary user actions, and the constraints — what's *for*. The brief fixes the *posture* before any pixel is drawn.
2. **A corpus of mood-board images**, organized into four buckets: graphic inspiration (composition and grid references), photo inspiration (register and voice references), textures (surface references), and icons and motifs (shape vocabulary). The mood boards were assembled for review and feedback in the [DTPR Visual Identity Miro board](https://miro.com/app/board/uXjVHCm5C0Y=/) — one concept mood board per recipe. From there, for each image, a vision-LLM extraction pass produced a structured JSON capturing line quality, shape language, dominant palette register, motion, and a `recipe_fit_score` (1–5). **Color and type are not extracted from images** — they are specified as design tokens separately. The corpus tells us *what kind of visual register the recipe can pull from*.
3. **A field of Lanes** — 8–12 visual probe directions, each rendered as a static screenshot of the homepage at that direction, with a caption naming its background, accent, signature pattern, and reference inspiration. The Lanes are not endless — they are a *deliberate sampling* of the design space the brief's posture opens up. They are the probes you saw in the design brief and on the concept mood boards.
4. **A selection.** One Lane is locked. The other Lanes stay in the document as "exploratory directions retained for history." The selected Lane becomes the visual system; the rejected Lanes explain *why* the selected Lane won.

The concept mood boards — one per recipe, organized in the DTPR Visual Identity Miro board — are the artifacts of steps 2–4 for each recipe. Step 1 (the Design Brief) lives in `recipes/<letter>/design_brief.md`. The corpus JSONs live in `recipes/<letter>/corpus/{inspiration-graphical,inspiration-photo,texture,icon-motif}/*.json`. The selected Lane's probe screenshot, cropped from the PDF render of the mood board, lives in `brand-identity/probes-from-pdfs/`.

### 14.2 What each recipe was *for* — the strategic postures

Each recipe began with a posture — a named audience and a named mode of address. The posture was set by the parent brand and the stakeholder synthesis (`visual-identity-stakeholder-jackie-chelsea.md`), and refined per recipe:

| Recipe | Audience it served | Posture (mode of address) | Vocabulary register |
|---|---|---|---|
| **A — Regulatory** | Deployers, public-sector procurement, compliance officers | *Standards-compliance artifact.* The page reads as a spec sheet, not as marketing. Authority comes from the visual language of engineering documentation. | Sharp corners, `#002684` navy, JetBrains Mono for keys and identifiers, condensed sans for headings, hexagonal signage motifs, ISO-3864-style caution bands. |
| **B — Maker** | Developers, integrators, OSS contributors (later expanded to all three audiences, see Section 2) | *Precise and structural with one editorial moment.* The page reads as a technical schematic or interactive IDE — a place where you would build something. The hero is the one place the voice is not quiet. | Graph-paper field, `#1B2B80` navy, Public Sans for UI, Source Code Pro for code and schema IDs, Source Serif 4 Italic for the hero headline exactly once, chartreuse reserved for live-data and primary CTA. |
| **C — Commons** | Residents, advocates, community members, accountability holders | *Structured but human.* The page reads as a civic notice — a public document for the public. Authority comes from being legible to a person walking past a sensor. | Bilateral split (dark | cream), `#2A4B8C` civic blue, salmon accent on key accountability words, organic mycelial motif as connector, M3 Material layout density. |

These three postures were not arbitrary. They map directly to the three audiences the parent brand promised to serve: the people who *deploy* DTPR (A), the people who *build with* DTPR (B), and the people who *hold DTPR accountable* (C). The three-recipe structure was an honest attempt to give each audience its own visual register.

### 14.3 The exploration fields — what each recipe's Lanes looked like

Each recipe ran the workflow above and arrived at a field of probes. The probe images on each recipe's concept mood board are the actual exploration; below is a summary of what each field contained.

**Recipe A — Regulatory** ([concept mood board](https://miro.com/app/board/uXjVHCm5C0Y=/?moveToWidget=3458764677110774968&cot=14)) (12 Lanes explored, 1 locked). The field sampled the regulatory-document register: navy-dominant status-quo layouts (Lane 1), an early MakeShift candidate with chartreuse accents (Lane 2), a Government Data Portal register (Lane 3), a printed policy document (Lane 4), a split-panel physical↔digital register (Lane 5), Fluent sidebar systems in dark (Lane 6), light (Lane 7), and mobile (Lane 8), an **Industrial Spec Sheet** register (Lane 9, *selected*), a Library Catalog Card register (Lane 10), a Business Letterhead register (Lane 11), and a Fluent + corpus hybrid with 3D wireframe and glossy hex tessellation (Lane 12).

![Recipe A — exploration field, four early Lanes](brand-identity/probes-from-pdfs/A-lane-field.jpg)

**Recipe B — Maker** ([concept mood board](https://miro.com/app/board/uXjVHCm5C0Y=/?moveToWidget=3458764677607468882&cot=14)) (8 Lanes explored, 1 locked). The field sampled the technical-schematic register: lighter graph paper with gradient blobs (Lane 1), an exploded axonometric blueprint (Lane 2), Moire grids and Platonic 3D solids (Lane 3), a cyberpunk HUD terminal (Lane 4), a **light-paper with navy primary buttons** register (Lane 5, *selected*), dark navy and chartreuse Tailwind probes (Lane 6), light-paper Tailwind probes with chartreuse CTAs (Lane 7), and the original pre-Tailwind direction probes (Lane 8).

![Recipe B — exploration field, four early Lanes](brand-identity/probes-from-pdfs/B-lane-field.jpg)

**Recipe C — Commons** ([concept mood board](https://miro.com/app/board/uXjVHCm5C0Y=/?moveToWidget=3458764677487270499&cot=14)) (11 Lanes explored, 1 locked). The field sampled the civic-notice register: dark civic bold (Lane 1), cream notice board (Lane 2), a **bilateral split ground** (Lane 3, *selected*), M3 dark civic (Lane 4), M3 cream civic (Lane 5), M3 people-community with people-centered illustration (Lane 6), M3 amoeba + wayfinding (Lane 7), M3 lava-lamp blob signage (Lane 8), M3 walking-figure + CAD title block (Lane 9), M3 organic wash + modular icon system (Lane 10), and M3 utility infrastructure (Lane 11).

![Recipe C — exploration field, two early Lanes](brand-identity/probes-from-pdfs/C-lane-field.jpg)

The point of showing all three fields is to make the *shape of the design space* legible. Each field is internally consistent — the Lanes inside it are variations on the same posture — but the fields *across* recipes are categorically different. You can read a Lane at random and tell which recipe it belongs to.

### 14.4 The selected Lane, per recipe — and what each was arguing for

The locked Lane crystallizes the recipe's posture. Each captured the brief's intent more completely than its siblings, even though the Lanes within a field all belonged to the same posture.

**Recipe A — Lane 9: Industrial Spec Sheet (selected).** Caption from the design brief: *"Based on inspo-graphic/008.png (Blissful Studio 3.0). Background: Light gray (`#F0F2F5`) with no gradients or decorative texture. Structure: Sharp rectangular bordered zones and panels; the page reads as a standards/compliance artifact rather than a generic marketing landing page. Hero information architecture: Input / Output / ID panel; standard-scope zone; deployment evidence strip; prominent caution/action band. Semantic motif: Hexagon markers and warning symbols are used as signage and safety cues, not as ornamental decoration. Typography: Condensed sans-serif for headings and labels; JetBrains Mono for metadata, identifiers, and technical keys; Source Sans Variable for readable body copy. Primary action: `Access Deployment Playbook`. Secondary actions: `Explore Standard`, `Access Compliance & Signage Specs`, and `Report a Discrepancy`. Signature copy: `DEPLOYERS MUST DISCLOSE HOW TECHNOLOGY IS USED IN PUBLIC SPACE`."*

![Recipe A — Lane 9: Industrial Spec Sheet (selected)](brand-identity/probes-from-pdfs/A-lane-9-selected-industrial-spec-sheet.jpg)

What this Lane was arguing for: *a page that a procurement officer could put on a printed RFP and a deployer could hold up next to a vendor pitch without embarrassment.* The vibe description on the concept mood board — *"Extreme information-design precision. Reads as a standards compliance spec sheet. Radically distinctive from any other web aesthetic — signals authority through the visual language of engineering documentation"* — names the claim precisely.

**Recipe B — Lane 5: Light-Paper with Navy Primary Buttons (Group 5 — Swiss & Notebook) (selected).** Caption from the design brief: *"Background: Light warm off-white graph paper background (`#F8F8F2`). Accent: Navy blue (`#1B2B80`) is the primary button and typography color, with no bright accents. Variations & Probes: A. Swiss Style Technical Layout (Probe H), B. Bento Grid Primitive Layout (Probe I), C. Meticulous Technical Notebook Catalog (Probe J)."*

![Recipe B — Lane 5: Light-Paper with Navy Primary Buttons (selected)](brand-identity/probes-from-pdfs/B-lane-5-selected-light-paper-navy-buttons.jpg)

What this Lane was arguing for: *a page that a developer would trust on first read, because it looks like the place where the standard is specified — not pitched.* The chartreuse CTAs that distinguish Lane 7 are absent here; the navy button on the warm-paper field is the quiet register. The concept mood board describes the layout inspiration as *"the Tailwind CSS homepage (large hero, side-by-side code editor + visual preview panel, trust logo grid, and 3-column features), using the Recipe B (Maker) 'The Blueprint Terminal' tokens"* — naming the structural genealogy.

**Recipe C — Lane 3: The Split Ground (selected).** Caption from the design brief: *"Background: Bilateral split — left half dark ground (`#0F1414`), right half corpus cream (`#F0E7D6`). Hero: Single large headline spanning both grounds. Dark half: cream type. Cream half: dark type. The split is the message. Belief ladder: Four alternating columns below — dark | cream | dark | cream. Each column contains a bold label and 2–3 sentences. Organic motif: C-icon-010 (mycelial network, SVG stroke only, ~15% opacity) positioned at the dark/cream boundary as a connector element. CTA: Civic blue (`#2A4B8C`), full-width, white text, at the bottom of the section. Vibe: Structured, bilaterally tensioned, principled. Closest references: Dark Matter Labs, Deem Journal, Bill Rankin's Radical Cartography."*

![Recipe C — Lane 3: The Split Ground (selected)](brand-identity/probes-from-pdfs/C-lane-3-selected-split-ground.jpg)

What this Lane was arguing for: *a page that holds the tension between the technical system and the public it serves — neither side wins, the split is the message.* The vibe description — *"Structured, bilaterally tensioned, principled"* — names the claim. The mycelial connector motif at the boundary is the design's quiet concession that the two sides are not separate.

### 14.5 The through-line — why Recipe B became canonical

By the end of the brand identity sprint, three things had become true at once:

1. **The Developer audience turned out to be a separate product.** The deep technical content (MCP server quickstarts, REST API references, UI embed examples, Claude-plugin authoring) was always going to live at `developer.dtpr.io`, not on the dtpr.io homepage. The "Technical Evaluator" persona that Lane 5 of Recipe B was optimized for turned out to have a real home elsewhere. Recipe B's homepage role shrank to *routing* developers onward, not serving them with depth.

2. **The Deployer and Advocate audiences turned out to need the same page.** The Deployer (procurement, compliance, RFPs) needed plan/scope/pilot/monitor framing and RFP-grade language — exactly what Recipe A's Industrial Spec Sheet gave. The Advocate (community accountability, feedback pathways, participation) needed trust signals and open channels — closer to Recipe C's tone. But the two audiences *don't need separate visual systems*; they need a single page that holds both, with role-routing that takes each where they actually need to go. The role-routing pattern (`content/pages/get-started.md` → `start-here-{deployer,developer,advocate}.md`) is what made a single homepage viable.

3. **Recipe B's posture was the most compressible.** Recipe A's posture (regulatory / procurement) was already surviving in real Recipe A content (`/playbook/deploy`, `/standard/audit-rubric`) — its real contribution was the *procurement-grade copy and routes*, not its visual tokens. Recipe C's posture (commons / civic tension) had a genuine contribution in the bilateral-split *compositional idea* (one anchored graphic against one field) and in the human-warmth flavor. Recipe B's posture (precise and structural with one editorial moment) had the broadest reach — it could hold a procurement section *and* a split-panel moment *and* a live-data indicator without breaking character.

The decision in `dtpr-brand-identity/guidelines/09-font-protocol.html` (v0.4, "Cross-recipe protocol," August 2026) was the formal lock-in: **Recipe A and Recipe C are archived.** Their distinct content and structural DNA are folded into Recipe B as sparing, B-rendered flavors. Recipe B is now the canonical visual system for dtpr.io.

This is not a rejection of Recipes A or C — it is the recognition that the work each Lane was doing has a different answer now. Recipe A's procurement work is now Section 7 of `DESIGN.md` (Section 5.11, "A-Flavored Section") and Section 6.7 of this book ("Why deploy under DTPR"). Recipe C's split-panel work is now Section 5.10 of `DESIGN.md` ("Geometric Network Mark") and Section 6.3 of this book (the I/O + geometric-network split panel). The flavor is real; the alternate recipe is not.

### 14.6 Reconciliation — what to say about Recipes A and C now

The going-forward tension is honest: the "Going Forward" section cannot pretend Recipes A and C never existed, but it also cannot reintroduce them. The resolution this book now adopts, made explicit here so a future agent does not have to re-litigate it:

- **Recipe A is not banned; its tool system is.** A procurement section rendered in Recipe B's own system (Public Sans, `#1B2B80` navy, chartreuse reservation, rounded corners) is in scope. The same section rendered in Recipe A's tool system (sharp 0px corners, `#002684` as the operative navy, JetBrains Mono as a UI font, hexagon grid) is not. The Procurement flavor survives; the Procurement recipe does not.
- **Recipe C is not banned; its organic motif is.** A bilateral-split layout holding one anchored geometric mark is in scope. The same layout using amoeba blobs, organic fills, hand-drawn figures, or warm cream surfaces is not. The Structural Contrast flavor survives; the Commons recipe does not.
- **Neither posture was wrong; both were incomplete.** Recipe A answered the Deployer's question correctly but only the Deployer's. Recipe C answered the Advocate's question correctly but only the Advocate's. Recipe B's posture — precise and structural with one editorial moment — is what survives the *compression* of three audiences into one page.

If a design call imports Recipe A's compliance language wholesale or Recipe C's people-centered illustration wholesale, it is wrong. If a design call uses the *real Recipe A procurement copy* in a Recipe B section, or borrows *the compositional idea of a bilateral split* for the homepage's dark/light panel, it is right. The test is in Section 8: is this *this recipe's own render* of a real fact or a real structural idea from an archived recipe — or is it that recipe's actual tool, imported wholesale?

---

## 15. Going Forward

This section addresses the questions Section 14 leaves open: what happens to the archived recipes' content over time, what the open judgment calls are now that the dust has settled, and what "going forward" actually means for a brand book that is an active contract.

### 15.1 Where the archived recipes' content lives now

- **Recipe A's procurement copy and routes** — `/playbook/deploy`, `/standard/audit-rubric` — are canonical content in the real Nuxt app's `content/pages/`. They are referenced and elaborated inside Recipe B at Section 6.7 of this book (the A-flavored section in the page anatomy). Going forward, any new procurement-grade content should be added to `content/pages/playbook/deploy.md` and linked from the A-flavored section, never duplicated into the homepage.
- **Recipe C's bilateral-split compositional idea** — present as the I/O + geometric-network split panel (Section 6.3) and as the Geometric Network Mark component (`DESIGN.md` Section 5.10). Going forward, the geometric-network-mark pattern is the *only* structural DNA the homepage inherits from Recipe C. New "human-warmth" or community-flavor work belongs in dedicated community surfaces (newsletter, community-of-practice page), not in the homepage.
- **The corpus JSONs** at `recipes/{a,b,c}/corpus/*.json` remain useful as evidence that the mood-board analysis was done and that the Lanes were sampled deliberately. They are not the source of truth for any visual call. If a future visual call seems to contradict the corpus, the corpus wins as evidence that the exploration happened — the source of truth for *what ships* is `recipes/b/DESIGN.md` + `app/recipes/b.css`.

### 15.2 What "canonical" requires going forward

"Recipe B is canonical" is a structural commitment, not a stylistic one. It means:

- **New pages added to dtpr.io inherit the Recipe B tokens by default** (`app/recipes/b.css`, loaded via `nuxt.config.ts`). Adding a new page in a non-Recipe-B style requires an explicit decision in this book or `recipes/b/DESIGN.md` and a named exception. Default to B; opt out by writing down why.
- **New flavors are added sparingly and only with a routed-persona trigger.** The A-flavored and C-flavored sections earn their place because they serve the Deployer path and the visual system respectively. A third flavor (e.g., an "Advocate-flavored" tone) does not exist yet and should not be introduced without a routed-persona trigger that justifies it.
- **Cross-domain surfaces (developer.dtpr.io, docs.dtpr.io, showcase.dtpr.io) keep their shared chrome** but do not adopt Recipe B's interior visual system unless their own brand book says they do. Shared chrome (Section 5) is unstyled by recipe; the rest is per-surface.

### 15.3 Open judgment calls going forward

These are the live questions this book has not yet resolved:

1. **The NSF POSE Phase I Award's year** (2023 in `content/pages/homepage-proof-awards.md`, 2025 on the live `dtpr.guide/landing` site) — genuinely conflicting sources, unresolved upstream. The Production Ledger defers to the content file until this is reconciled.
2. **The LocalNav deployment-count wording** ("17 cities and 5 countries" in the component vs. "17 projects across 5 countries" in `content/pages/dtpr-in-the-world.md`) — minor, unresolved, not user-facing enough to have blocked shipping.
3. **The Bold Primary Trio for a separate exploration** (`recipes/_home/superbloom-identity-three-options.md`) — that document's navy `#0F2A4A` / amber `#E58A2E` / off-white `#F4EFE6` was a separate stakeholder-conflict resolution, distinct from Recipe B's actual palette. If it resurfaces, treat it as a different, unresolved proposal — not as Recipe B's palette.
4. **The literal deployment map** — what Section 5.1 of this book used to describe as shared chrome was never built. The geometric node-and-edge network mark is what exists. If a literal deployment map is wanted (real-world adoption proof on a map surface), it does not exist yet — design it as a Section 5.10-extension or as a new component in `DESIGN.md`, not by reviving the old description.
5. **The chartreuse reservation's edges.** Hover and active states of the chartreuse CTA use chartreuse-hover `#B5DB1A` and chartreuse-active `#84B400`. The "STALE" state of the live-data indicator uses caution amber `#C2410C`, not chartreuse. If a future section wants to mark something as a "secondary CTA in the live-data register" (e.g., a chartreuse-tinted view-filter), it needs its own entry in Section 7.1 and its own import-rule check in Section 8 — not a quiet extension of the chartreuse reservation.

### 15.4 What "done" looks like for Section 14 and Section 15

Section 14 is "done" when a future agent who has never seen the concept mood boards can read this section and defend any Recipe B design call against a question of the form *"but didn't Recipe A also do X?"* Section 15 is "done" when the open judgment calls in Section 15.3 are either resolved (delete the bullet) or explicitly accepted as load-bearing (rewrite the bullet to say *why* it stays open and what would change if it closed).

If a future agent is reading Section 14 or Section 15 and feels they have to re-explain what each recipe's posture *was* to defend a current call, this book has drifted. Stop, fix Section 14, then answer.

---

**End of brand book. Active contract as of 2026-08-27.**
