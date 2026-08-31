---
name: DTPR - Recipe B (Maker)
description: A digital-only, developer-facing technical implementation of the DTPR standard.
colors:
  primary: "#1B2B80"           # Navy — primary structure, navy CTAs
  secondary: "#2563D0"         # Medium Blue — secondary accent (hovers, link hovers, mid-level tags)
  tertiary: "#9ACD00"          # Chartreuse — RESERVED accent (primary CTA + live-data only)
  tertiary-hover: "#B5DB1A"    # Chartreuse hover
  tertiary-active: "#84B400"   # Chartreuse active
  neutral-bg: "#F8F8F2"        # Blueprint Paper
  neutral-bg-warm: "#F4F2EC"   # Warm Paper
  neutral-bg-cool: "#E8EAF5"   # Cool Paper (paper-family neutral)
  neutral-border: "#E2E0D8"    # Border Grey
  neutral-text: "#0F172A"      # Deep Slate (ink)
  neutral-text-muted: "#475569" # Muted Slate
  neutral-text-inverse: "#F8F8F2"
  field-dark: "#0A0E1A"        # Terminal Dark
  field-dark-text: "#F8F8F2"
  field-dark-muted: "#94A3B8"
typography:
  display:
    fontFamily: "Source Serif 4, Source Serif Pro, Georgia, serif"
    fontSize: "48px"
    fontStyle: "italic"
    lineHeight: 1.15
  headline:
    fontFamily: "Public Sans, system-ui, sans-serif"
    fontWeight: "700"
    fontSizes:
      h1: "33px"
      h2: "27px"
      h3: "22px"
    lineHeight: 1.30
  body:
    fontFamily: "Public Sans, system-ui, sans-serif"
    fontSize: "17px"
    lineHeight: 1.64
  label:
    fontFamily: "Public Sans, system-ui, sans-serif"
    fontSize: "14px"
    lineHeight: 1.30
  caption:
    fontFamily: "Public Sans, system-ui, sans-serif"
    fontSize: "12px"
    lineHeight: 1.40
  code:
    fontFamily: "Source Code Pro, monospace"
    fontSize: "14px"
    lineHeight: 1.55
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  max: "12px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  2xl: "32px"
  3xl: "48px"
motion:
  duration-fast: "120ms"
  duration-base: "200ms"
  easing: "ease-out"
  hover-lift: "translateY(-1px)"
  tap-scale: "0.98"
  live-data-pulse-cycle: "1600ms"
  respect-reduced-motion: true
graph-paper:
  enabled: true
  grid-spacing: "24px"
  line-weight: "1px"
  color: "{colors.neutral-border}"
  opacity: "0.6"
---

# Design System: DTPR - Recipe B (Maker)

## 1. Overview

**North Star: "Precise and structural, with one editorial moment in the hero."**

Recipe B (Maker) is now the canonical visual system for dtpr.io itself (see Recipe Boundaries below), not a developer-only surface. It serves three routed audiences from one homepage — Deployer, Developer, Advocate — with the Developer path handing off to the separate developer.dtpr.io project rather than replicating its content here. The Technical Evaluator's sensibility (specific, concrete, builder-centric) still shapes the register throughout. It rejects the corporate friendliness of generic SaaS platforms and Corporate Memphis illustration in favor of a precise, structural environment.

The page is modeled after a technical schematic or interactive IDE. It uses a graph-paper background grid, a Source family type lockup (Sans 3 + Serif 4 + Code Pro), and a restrained color palette that routes emphasis through a single chartreuse action color.

The Source Serif 4 Italic hero headline is the one place Recipe B is not quiet. It's the editorial connection to the parent DTPR brand and stays as a deliberate exception, not the dominant register.

### Key Characteristics

- **Graph-Paper Grid:** Layout components sit on a clean 24px background grid representing structure and draft work.
- **Terminal Aesthetics:** Clean developer-friendly dark code surfaces and monospace elements that mimic modern developer tooling.
- **The Chartreuse Reservation:** Complete restriction of the primary brand color to active status and primary actions. Noise-free legibility.

### Recipe Boundaries

**Recipe B is canonical.** Per `dtpr-brand-identity/guidelines/09-font-protocol.html` (v0.4, "Cross-recipe protocol"), Recipe A (Regulatory) and Recipe C (Commons) are archived — no longer separate, co-equal recipes. Their distinctive content and structural DNA survive only as sparing, B-rendered flavors:

- **A-flavored:** procurement/compliance framing (e.g. the homepage's "Why deploy under DTPR" section) — real A copy and routes, rendered in Recipe B's own rounded/navy/Public-Sans system, never Recipe A's sharp-cornered `#002684`/JetBrains-Mono system.
- **C-flavored:** structural contrast and one anchored graphic (e.g. the homepage's dark/light split panel with a geometric network mark) — Lane 7's bilateral-split DNA, translated into Recipe B's own geometric idiom. Never Recipe C's organic amoeba blobs, hexagon grids, warm cream surfaces, or people-centered illustration.

**If a design call would import Recipe A's or C's own token system wholesale — rather than a sparing, B-rendered flavor serving a specific routed persona — it doesn't belong here.**

---

## 2. Colors

The Recipe B palette is built on high contrast — deep navy for structure, medium blue for secondary action and link affordances, and chartreuse *reserved* as the tertiary accent for the primary CTA and live-data status only.

### Primary
- **Navy** (`#1B2B80`): Primary container borders, navigation headers, structural divides, navy CTAs (the secondary action CTA — see §5.1). 4px outline, 2px offset for focus states.

### Secondary
- **Medium Blue** (`#2563D0`): The secondary accent. Hover states for primary (navy) actions and navy CTAs, text link hovers, mid-level category tags, selected-state underlines on secondary controls, and any non-CTA "secondary" affordance that needs an accent. **Not** a primary CTA color. Use this anywhere you'd reach for an accent and the chartreuse reservation rules it out.

### Tertiary — Reserved Accent
- **Chartreuse** (`#9ACD00`): **Reserved.** Live-data status indicator + primary call-to-action only. Hover: `#B5DB1A` (chartreuse-hover). Active: `#84B400` (chartreuse-active). This is the only role chartreuse plays — see the Chartreuse Reservation Rule below.

### Neutrals
- **Deep Slate** (`#0F172A`): Primary text ink, 16.4:1 against paper surface.
- **Muted Slate** (`#475569`): Auxiliary text, placeholders, descriptions.
- **Blueprint Paper** (`#F8F8F2`): Default page background. Subtle warmth, draft-paper feel.
- **Warm Paper** (`#F4F2EC`): Card and container surfaces — same family as paper, slight lift.
- **Cool Paper** (`#E8EAF5`): Sidebar fills, table headers, desaturated container backgrounds. (A neutral that sits in the paper family — *not* a tertiary accent.)
- **Border Grey** (`#E2E0D8`): All 1px structural borders on paper surfaces. Not for emphasis — for structure.
- **Terminal Dark** (`#0A0E1A`): Dark code surfaces and terminal outputs. Paired with `#F8F8F2` text and `#94A3B8` muted.

### Status (system-wide, identical across all three recipes)
- **Positive** (`#15803D`): Success states, "deployed," "verified."
- **Caution** (`#C2410C`): Warnings, deprecated-but-functional, soft alerts.
- **Error** (`#B91C1C`): Failures, broken states, hard alerts.
- **Info** (`#1E40AF`): Neutral informational badges.

### Named Rules

**The Chartreuse Reservation Rule.** Chartreuse (`#9ACD00`) is strictly reserved for the live-data status indicator and the primary call-to-action (CTA). It must NEVER be used on hero headlines, body text, decorative elements, hover states of non-primary elements, secondary-action affordances (use medium blue for those), or background fills other than the CTA itself. Hover and active states of the chartreuse CTA use chartreuse-hover (`#B5DB1A`) and chartreuse-active (`#84B400`).

**The Medium Blue Accent Rule.** Medium blue (`#2563D0`) is the secondary accent. It carries non-CTA affordances — link hovers, secondary-button hover, mid-level category tags, focus rings on navy buttons, selected-state accents on secondary controls. If a surface needs an accent but is *not* the primary CTA or live-data indicator, medium blue is the answer. If a surface needs an accent and *is* the primary CTA or live-data indicator, chartreuse is the answer — and the chartreuse reservation rule applies.

**The Live-Data Color Rule.** The chartreuse pulse on the live-data indicator is the one place chartreuse appears as a small standalone element (not as a CTA fill). It must be paired with a text label or status icon — never color alone.

---

## 3. Typography

Recipe B uses a three-role type system built from the Source family: clean variable sans for display and body, italic serif for the editorial hero moment, and monospace strictly for code, schema identifiers, and taxonomy codes.

**Display Font (editorial, hero only):** Source Serif 4 (with Georgia, serif fallback)
**Body / UI Font:** Public Sans (with system-ui fallback)
**Code Font:** Source Code Pro (with monospace fallback)

### Hierarchy

- **Display** (Source Serif 4 Italic, 48px, 1.15): Hero headlines only. The one editorial exception.
- **Headline** (Public Sans Bold, 22–33px, 1.30): Section headers. Sans is the dominant heading register, not the editorial serif.
- **Body** (Public Sans Regular, 17px, 1.64): Documentation copy, descriptions. Bound to 65–75ch line length.
- **Label** (Public Sans SemiBold, 14px, 1.30): Navigation links, button text, taxonomy labels, metadata.
- **Caption** (Public Sans Regular, 12px, 1.40): Timestamps, fine print, taxonomic category names.
- **Code** (Source Code Pro Regular, 14px, 1.55): Code blocks, schema identifiers, taxonomy codes — anywhere the technical content is literal code or a literal ID.

### Code (Mono) Usage Scope

Source Code Pro is reserved for code, schema identifiers, and taxonomy codes. Allowed in: code blocks, schema endpoints, taxonomy codes (`AI@2026-05-06-BETA`, `11 DATACHAIN LAYERS`), filename headers, and the copy-button label. Not allowed in: navigation, button text (CTAs are Public Sans SemiBold), section headers, captions, or body prose.

---

## 4. Elevation

Recipe B is flat by default. Depth comes from structural borders, not from soft shadows.

**The Flat-By-Default Rule.** All cards and UI elements are flat at rest. A 1px border (`#E2E0D8`) defines structural boundaries. Depth is introduced only as a response to interactive state.

### Hover State
- `transform: translateY(-1px)` over 120ms ease-out
- Border color shifts from `#E2E0D8` to medium blue (`#2563D0`)
- Optional 1px shadow at the bottom edge only, NOT a soft drop shadow

### Focus State
- 2px outline in chartreuse (`#9ACD00`) with 2px offset
- Sufficient contrast against any surface in the system

### Active State
- `transform: scale(0.98)` over 120ms ease-out
- Background tint shift, never darker than `#E8EAF5`

### Disabled State
- 60% opacity
- Border shifts to `#CBD5E1`
- No hover transform, no focus ring

### Reduced Motion
When `prefers-reduced-motion: reduce`, all transforms and the live-data pulse are removed. Hover state is communicated by border color change alone.

---

## 5. Components

### 5.1 Button

#### Primary CTA
- **Background:** Chartreuse (`#9ACD00`)
- **Text:** Deep slate (`#0F172A`), Public Sans SemiBold, 14px
- **Shape:** Rectangular, 4px radius, 8px vertical / 16px horizontal padding
- **States:**
  - Default: as above
  - Hover: background → `#B5DB1A`, lift 1px
  - Active: background → `#84B400`, scale 0.98
  - Focus: 2px chartreuse outline, 2px offset
  - Disabled: 60% opacity, no hover lift

#### Secondary CTA
- **Background:** Navy (`#1B2B80`)
- **Text:** Inverse (`#F8F8F2`), Public Sans SemiBold, 14px
- **Shape:** Rectangular, 4px radius, 8px vertical / 16px horizontal padding
- **States:** Same as primary but hover shifts to medium blue (`#2563D0`), no chartreuse anywhere

#### Ghost CTA
- **Background:** Transparent
- **Border:** 1px solid `#E2E0D8`
- **Text:** Deep slate (`#0F172A`), Public Sans SemiBold, 14px
- **States:** Hover border → navy, lift 1px

### 5.2 Card

#### Default Card
- **Background:** Warm paper (`#F4F2EC`)
- **Border:** 1px solid `#E2E0D8`
- **Radius:** 8px
- **Padding:** 16px on all sides
- **Inner gap:** 12px between content blocks

#### Terminal-Dark Card (for code examples, live-data contexts)
- **Background:** Terminal dark (`#0A0E1A`)
- **Border:** 1px solid `#2563D0`
- **Text:** Inverse (`#F8F8F2`)
- **Mono elements:** Chartreuse (`#9ACD00`) for taxonomy codes, syntax highlights

#### Live-Data Card (any card displaying real-time API state)
- Default card surface
- Includes the live-data indicator (see §5.5)
- Border may shift to chartreuse when status is "live" — this is the one place chartreuse can appear as a small standalone UI element

#### States (all card variants)
- Default: as above
- Hover: lift 1px, border shifts to medium blue
- Active: scale 0.98, background tints to `#E8EAF5`
- Focus: 2px chartreuse outline (terminal-dark variant uses inverse outline)
- Disabled: 60% opacity, no hover

### 5.3 Code Block

- **Background:** Terminal dark (`#0A0E1A`)
- **Border:** 1px solid `#E2E0D8` (paper) or `#2563D0` (on dark surfaces)
- **Padding:** 16px
- **Font:** Source Code Pro, 14px, 1.55 line height
- **Text color:** Inverse (`#F8F8F2`)
- **Syntax highlight colors:**
  - Keywords: Chartreuse (`#9ACD00`) — the only chartreuse use inside a code block
  - Strings: `#94A3B8`
  - Comments: `#475569`
  - Function names: `#2563D0`
  - Punctuation: `#CBD5E1`
- **Header (optional):** Filename in Source Code Pro 12px muted (`#94A3B8`), right-aligned copy button
- **Copy button:** Ghost CTA variant, 12px text

### 5.4 Navigation Bar

- **Position:** Persistent at top (desktop and mobile)
- **Background:** Paper (`#F8F8F2`)
- **Border-bottom:** 1px solid `#E2E0D8`
- **Height:** 64px desktop, 56px mobile
- **Logo:** the real canonical mark + wordmark lockup (`dtpr-brand-identity/assets/marks/dtpr_logo_horizontal_navy.svg` — hexagon + inner circle + offset square, paired with "DTPR" in Public Sans Bold, navy `#002684` per the brand identity guidelines, not Recipe B's own navy `#1B2B80`). GlobalNav is shared, unstyled chrome across every subdomain — it never recolors to match whichever recipe's page it's on.
- **Nav links:** Public Sans SemiBold 14px, deep slate, 24px horizontal gap
- **Active link:** Navy underline, 2px, no chartreuse
- **Right-side action:** Primary CTA (chartreuse) — "Open Docs" or similar
- **Mobile:** Hamburger expands to full-screen nav with sans links stacked vertically

### 5.5 Live Data Indicator

- **Style:** Terminal-style badge with chartreuse pulsing dot + text label
- **Dot:** 8px circle, chartreuse (`#9ACD00`), pulse animation 1600ms breath-slow-drift
- **Label:** Public Sans SemiBold 12px, deep slate (on paper) or inverse (on dark)
- **States:**
  - Live: dot pulses, label "LIVE" or current status name
  - Connecting: dot static, label "CONNECTING"
  - Stale: dot amber (`#C2410C`), label "STALE — 3m ago"
  - Error: dot red (`#B91C1C`), label "ERROR"
- **Accessibility:** Never color alone. The text label is the primary signal; the pulse is decorative confirmation. Honors `prefers-reduced-motion` (static dot when reduced).

### 5.6 Hero Section

- **Layout:** Single column desktop, single column mobile
- **Headline:** Source Serif 4 Italic 48px (one editorial moment)
- **Subheadline:** Public Sans Regular 19px, muted slate, max 65ch
- **Primary CTA:** Chartreuse button, 16px vertical / 24px horizontal padding (larger than standard buttons)
- **Secondary CTA:** Ghost variant
- **Background:** Paper with graph-paper grid at 24px
- **Padding:** 96px top, 96px bottom desktop; 64px top, 48px bottom mobile
- **No hero image.** Recipe B hero is text and structure only.

### 5.7 Feature Grid

- **Layout:** Bento-grid (5-column) or 2x2 (mobile)
- **Cell background:** Warm paper (`#F4F2EC`)
- **Cell border:** 1px solid `#E2E0D8`
- **Cell radius:** 8px
- **Cell padding:** 24px
- **Cell gap:** 16px
- **Icon:** Hairline outline (`stroke-width: 1px`), 24px, navy
- **Title:** Public Sans Bold 19px, navy
- **Body:** Public Sans Regular 14px, deep slate

### 5.8 Footer

- **Background:** Terminal dark (`#0A0E1A`)
- **Text:** Inverse (`#F8F8F2`) primary, muted (`#94A3B8`) secondary
- **Layout:** 4-column desktop, stacked mobile
- **Column headers:** Public Sans Bold 14px, inverse
- **Links:** Public Sans Regular 14px, inverse, no chartreuse
- **Bottom bar:** CC BY 4.0 attribution, Helpful Places steward credit, GitHub link
- **Padding:** 48px vertical, 32px horizontal

### 5.9 Production Ledger (deployment & recognition proof)

The structural way Recipe B carries real-world deployment and award proof (see PRODUCT.md's Proof Points). Evidence, not applause — a ledger a developer would trust, not a marketing wall.

- **Layout:** Plain list/table, not cards. Single column mobile, two-column table desktop (Deployment · Location). No logos, no photos, no carousel, no badge icons.
- **Row style:** 1px bottom border (`#E2E0D8`), 12px vertical padding. Org/place name in Public Sans Label 14px, deep slate. Location + country in Caption 12px, muted slate.
- **Marker:** Optional 6px square bullet in Positive green (`#15803D`, the existing system-wide status color) — reuses the status system rather than introducing chartreuse or a new color. Never chartreuse; this is not a CTA or live-data element.
- **Recognition sub-block:** Same row style, distinguished only by a Caption-weight label ("Award," "Grant") before the name — no trophy icons, no ribbon graphics.
- **Section framing:** A short Headline-weight label ("In Production" or "Deployed") in Public Sans Bold — no deployment count as a headline number. If a count appears, it's Caption-weight and secondary to the list itself.
- **Placement:** Between the Feature Grid and the Code Example, or in a footer column — never in the hero. The hero stays text-and-grid only per §5.6.
- **States:** Row hover: border shifts to medium blue (`#2563D0`), consistent with the Flat-By-Default hover rule (§4). No lift transform — this is a document, not an interactive card.

### 5.10 Geometric Network Mark (C-flavored split panel)

The structural way Recipe B carries Recipe C's Lane 7 split/contrast DNA (see Recipe Boundaries above) without importing its organic amoeba motif.

- **Layout:** Two-column split (stacks on mobile). One side is a terminal-dark real-data panel (I/O labels + live-data indicator, per §5.5); the other is a light `#F4F2EC` panel holding the network mark alone, centered.
- **Mark construction:** An SVG of connected nodes (filled navy `#1B2B80` circles) and straight edges (navy at 50% opacity, 1.5px stroke) — a small graph, not a literal illustration of anything. No curves, no organic fills, no gradients.
- **Never:** organic blob fills, amoeba-style interlocking shapes, or any Recipe C `C-icon-009`-register asset used directly. The DNA borrowed is compositional (split + one anchored graphic), not material.
- **Accessibility:** `role="img"` with a real `<title>` describing what the network represents (e.g. "connected disclosure categories"), not a decorative empty label.

### 5.11 A-Flavored Section (procurement/compliance moment)

The structural way Recipe B carries Recipe A's real procurement content without switching to Recipe A's own system.

- **Trigger:** Only where it directly serves the Deployer path (see PRODUCT.md Users) — e.g. immediately after a role-routing section, not scattered throughout the page.
- **Content:** Real Recipe A copy and real routes (e.g. `/playbook/deploy`, `/standard/audit-rubric`) — never invented procurement language.
- **Rendering:** Recipe B's own system throughout — Public Sans, 8px rounded corners, navy `#1B2B80`, chartreuse only per the reservation rule. Scope-category icons (e.g. Sensors/Cameras/Connectivity) sit in rounded `var(--ui-radius)` squares, not Recipe A's sharp 0px corners.
- **Frequency:** One such section per page. This is a flavor, not a second recipe — repeating the pattern for every persona would just rebuild Recipe A inside Recipe B.

---

## 6. Do's and Don'ts

### Do

- **Do** reserve chartreuse (`#9ACD00`) strictly for live-data status indicators and primary CTAs. This is the single most important rule.
- **Do** target exactly 360px width for mobile layouts and 1920px width for desktop layouts.
- **Do** use Public Sans for all UI labels, navigation, button text, section headers, and metadata. Public Sans is also body. Source Code Pro is reserved for code, schema identifiers, and taxonomy codes only.
- **Do** ground all visual elements in the Recipe B corpus JSONs at `recipes/b/corpus/` — icons, textures, graphical inspiration, photos.
- **Do** use the graph-paper grid as a visible structural element, not as decoration.
- **Do** keep the live-data indicator paired with text labels for accessibility.
- **Do** apply `transform: translateY(-1px)` for hover lift and `scale(0.98)` for tap feedback per motion tokens.
- **Do** honor `prefers-reduced-motion` — replace transforms and pulse with static equivalents.
- **Do** treat the Source Serif 4 Italic hero as the one editorial moment, not the default heading style.
- **Do** carry real deployment/award proof as a plain structural ledger (§5.9) when the surface earns it — named, factual, no logos or counts-as-headline.

### Don't

- **Don't** use chartreuse on hero headlines, body text, decorative elements, hover states of non-primary elements, or background fills other than the CTA itself.
- **Don't** use Corporate Memphis illustration, cartoon mascots, or generic people imagery. Recipe B illustrations are typographic or geometric only.
- **Don't** combine a 1px border with a soft drop shadow (blur ≥ 16px) on cards or buttons. Recipe B is flat-by-default — depth comes from hover lift only.
- **Don't** use rounded corners larger than 12px on content cards or buttons. Recipe B is structurally sharp, not pillowy.
- **Don't** use gradients, photographic backgrounds, or color washes on hero sections. Hero is text and grid only.
- **Don't** use stock photography of offices, teams, or generic developer stock. Recipe B's photographic register (per photo corpus) is handwritten notes, study notebooks, planning sketches — and these are optional, not required.
- **Don't** import Recipe A's hexagon grid, condensed sans body, or ISO 3864 color constraints. Recipe A's tools solve different problems.
- **Don't** import Recipe C's people-centered illustration, warm cream surfaces, or accessibility-first large body. Recipe C's tools solve different problems.
- **Don't** apply the chartreuse accent anywhere outside the chartreuse reservation rule. When in doubt, it does not belong.
- **Don't** turn deployment/award proof into a logo wall, badge carousel, or headline count. The Production Ledger (§5.9) is a plain list — the moment it needs a "trusted by" hero claim, it's drifted into Recipe A/C tone.