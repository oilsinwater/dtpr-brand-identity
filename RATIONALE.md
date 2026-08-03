# DTPR Brand Book — Rationale

The deck is a static website documenting a flexible visual grammar in service of an open standard. The choice of medium (website) and the choice of model (dynamic, not fixed) are not aesthetic preferences — they follow from what DTPR is. Below is the layered why, from the deepest reason outward.

---

## Why a visual system at all

This is the load-bearing question. Everything else stacks on top of it.

- **The audit surfaces real problems.** 12-findings lists ten unresolved open questions. Without a system, those get answered ad-hoc by each deployment, and the brand drifts by accumulation rather than by decision.
- **Decisions compound.** Every visual choice not made today is a choice a future designer will make under less context — usually faster, usually without the brief. A visual system is how you make the decision once and let it propagate.
- **Coherence at scale, not control.** 17+ cities already deploy DTPR. Designing a single face for each would be impossible. The system encodes what must stay consistent (the constraints) so what varies (the instantiation) can be free.
- **It's part of the standard.** DTPR is CC BY 4.0. The visual system is part of the standard's public documentation — without it, you have a license to copy but no way to do it consistently.
- **It enables contribution.** A clear system means new contributors (designers in deploying cities, community contributors) can make compliant additions without consulting Helpful Places or Superbloom each time.

---

## Why generative / dynamic / flexible

A flexible visual system is one step further than a parameter grid; a generative identity is one step further than that. Each step is justified by what DTPR has to do.

- **The deployment range forces flexibility.** 21-responsive-specs names it: 10-meter outdoor installations and 320px mobile screens accessed via QR scan seconds after encountering a physical sign. A static logo-and-color-guide cannot serve both.
- **Many deployers, many stakeholders, many registers.** The deck maps four personas (Pragmatic Deployers, Vigilant Advocates, Impacted Citizens, Technical Evaluators) to four strategic postures. One fixed expression serves none of them well.
- **DTPR is a standard, not a brand.** Helpful Places stewards a standard that cities implement. Each deployment has its own visual context — city identity, locale, audience, regulatory environment. The visual system is a grammar cities instantiate, not a face cities adopt.
- **Two systems already coexist in tension.** Per the audit (02-dtpr-io, 10-illustrations), the current state is already de-facto flexible: the 2020 hex-based scenario system from Sidewalk Labs coexists with the Corporate Memphis system refined for the Assembly Day deck. Formalizing the flexibility into a parameter grid acknowledges what's true and makes it legible.
- **Generative identity lets the system respond.** A flexible system with discrete options (the Sprint Recipes) is hand-selected. A generative identity selects options algorithmically from context (deployer type, locale, audience, live data). For a standard that could one day feed live civic data through its signs, this is the natural endpoint.
- **Consistency without uniformity.** Generative identity is the formalization of "constrained creativity" — the morphological box already implies this. Making it explicit removes the temptation to read flexibility as license.

---

## Why this is a website (not a PDF, not a Figma, not a printed guide)

The medium makes an argument. Choosing HTML, single CSS, no build pipeline, and git is part of the message.

- **A URL is the canonical address.** The brand book is shareable as a single link to Helpful Places partners, city deployers, designers in any of the 17+ cities, and community contributors. No file management overhead, no version confusion.
- **Hyperlinks model the actual relationships.** The deck cross-references heavily — sprint-index references the audit, the morphology boxes reference postures, recipes reference morphology, responsive specs reference process box rules. In HTML these are native; in PDF they're page jumps; in Figma they're annotations. The medium is doing work the content can't do alone.
- **Single CSS, no build pipeline — matches the philosophy.** 04-makeshift names Makeshift 2026 as "Single CSS file, no framework, no build pipeline. The reference for what DTPR could look like if we built it from scratch today." The brand book uses the same discipline. Form follows principle.
- **Versioning via git, with a public remote.** The repo is on GitHub under CC BY 4.0 with a real commit history. PDFs are immutable; Figma files are opaque to non-designers; HTML in git is inspectable by anyone with the link. For an open standard, inspectability is part of the deal.
- **CC BY 4.0 only works if the format is open.** A PDF of the brand book is technically shareable but locks content into a binary blob. HTML keeps the source accessible. The license file itself is plain text — the same logic.
- **The website is the brand.** A visual system built around hexagons and adaptive layouts should be documented in its own grammar. If you can't make the brand book in your own system, the system has bigger problems. Showing, not telling.

---

## The unifying principle

DTPR is a standard for transparent public-interest technology deployed across many contexts by many actors. A static brand book would be a contradiction in terms — the standard *is* the framework for instantiation, not a single instantiation. The visual system is the part of the standard that says "here is how to do it consistently." Putting it on the web, in this format, in this discipline, is the natural extension of that principle.

The web isn't the decoration. The web is the argument.