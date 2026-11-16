# AGENT BRIEF: Build the "Northwind Summit Launch Kit" for the Hyper Elements Template Challenge

> **To the agent (Antigravity):** This document is your complete specification. Read it fully before writing any code. Follow the phases in order. Do not skip the verification steps. When something here conflicts with the official library docs, **the official docs win**. Note the difference in `NOTES.md` and continue.

---

## 0. Mission

Build a **public, polished, runnable GitHub project** that wins a template competition judged on visual quality, usefulness, code quality and how well it shows off the library.

- **Competition:** Hyper Elements Template Challenge by Unlayer ($100 × 5 winners, featured in the official template gallery). Open to any template type; all entries compete together; judged by Unlayer's core team.
- **Official judging criteria (from the challenge FAQ), optimize for these five equally:**
  1. **Originality:** creative, original concept
  2. **Design quality:** visually polished, well-structured, thoughtfully designed
  3. **Practical value:** useful, realistically reusable by other developers
  4. **Use of Hyper Elements:** how effectively the library is integrated (must be *meaningful*, not just installed)
  5. **Overall execution:** functional, well-presented, documented, easy to reproduce
- **Important FAQ facts:** you do NOT have to support all four output formats; complexity alone does not win ("a simple, well-designed template with a strong concept, practical value and thoughtful use of Hyper Elements can be just as competitive"); AI coding tools and agents are explicitly allowed; the library ships resources for AI agents (a **Hyper Elements skill** and docs). Use them.
- **Library:** Hyper Elements is branded from Unlayer's open-source React library, published as **`@unlayer/react-elements`** ("Unlayer Elements"). One React component tree renders to **email**, **web**, and **PDF/document** outputs. The challenge also mentions image output.
- **Deadline:** November 29, 2026, 23:59 UTC. Target completion at least 2 days before.
- **Winning strategy:** quality over quantity. Show the library's strength (one shared component system, several outputs) **but only ship outputs that are genuinely polished**. A flawless 3-output kit beats a flawed 4-output kit. Re-theming from a single tokens file is the signature feature.

### The product we are building

A **Launch Kit** for a fictional conference called **Northwind Summit 2027**:

| # | Deliverable | Root component | Output file |
|---|---|---|---|
| 1 | Landing page | `<Page>` | `dist/index.html` |
| 2 | Registration confirmation email | `<Email>` | `dist/confirmation.html` + `dist/confirmation.txt` |
| 3 | Event ticket (PDF) | `<Document>` | `dist/ticket.html` + `dist/ticket.pdf` |
| 4 | Social / OG share card | `<Page>` or `<Document>` sized 1200×630 | `dist/social-card.html` + `dist/social-card.png` |

All outputs must use **the same design tokens and the same shared components** (brand header, footer, buttons, info blocks).

### Scope tiers (the FAQ does not require all four outputs)
- **Tier 1 (must ship, flawless):** Landing page, Confirmation email, Ticket PDF.
- **Tier 2 (ship only if Tier 1 passes full QA):** Social card PNG, daylight theme, `renderToJson` export demo.
- If time or quality is at risk, cut Tier 2. Never trade Tier 1 polish for Tier 2 breadth.

### Originality check (do this in Phase 1)
Originality is the first judging criterion. Browse the **official template gallery** (linked from the Hyper Elements website/docs) and the **Challenge Submissions** category in GitHub Discussions. If an existing template is near-identical to a conference kit, keep the structure of this spec but change the concept to something fresher using the same section/asset structure, and record the decision in `NOTES.md`. Keep the *shared-components-across-outputs* architecture regardless of concept. Ensure at least one memorable original touch (distinct visual identity, clever layout, or an unusual but practical use case), not a generic corporate look.

---

## 1. Rules and constraints

1. **Verify before you write.** Before using any component or prop, check the real API in the installed package's TypeScript types and the docs. Do **not** guess prop names.
   - Docs: `https://docs.unlayer.com/elements` (overview, React Quickstart, Quick Reference)
   - Repo: `https://github.com/unlayer/elements`
1a. **Use the official AI resources first.** The FAQ says Hyper Elements provides a **skill and documentation designed for AI agents**. Find and install/read the Hyper Elements skill (see the repo and docs) before coding, and follow its conventions and common-mistakes list.
2. **The library must be central.** Every output must be produced through `@unlayer/react-elements` render functions (`renderToHtml`, `renderToHtmlParts`, `renderToPlainText`; optionally `renderToJson`). Do not hand-write the final HTML.
3. **No lorem ipsum.** Use the copy and data in Section 4.
4. **No remote/hotlinked images or fonts that can break.** Use locally generated SVG/PNG assets in `/assets`. Email output may reference images by absolute URL placeholders documented in the README, but the repo must render a good-looking result offline.
5. **Licensing:** everything in the repo must be original or permissively licensed. License: MIT. No copyrighted logos, photos or brand names.
6. **One-command experience:** `npm install && npm run build` must work on a clean machine (Node 20+). `npm run preview` serves `/dist`.
7. **No secrets, no API keys, no tracking.**
8. **TypeScript, strict mode.** No `any` unless commented.
9. **Keep dependencies minimal:** `react`, `react-dom`, `@unlayer/react-elements`, `typescript`, `tsx`, `playwright` (for PDF/PNG), `serve` (preview). Nothing else unless justified in `NOTES.md`.
10. Keep a running **`NOTES.md`** listing any API discrepancies, workarounds, and decisions.

---

## 2. Phase plan (execute in order)

### Phase 1: Research (do this first, ~15% of effort)
- [ ] Locate and load the **Hyper Elements skill** for AI agents and read the docs' agent guidance.
- [ ] Review the **template gallery** and **Challenge Submissions**; complete the originality check above.
- [ ] Read the Elements docs: Overview, React Installation, Quickstart, Quick Reference.
- [ ] Read the repo README and look at `packages/demo` for examples of `Email`, `Page`, `Document`.
- [ ] After installing, open the `.d.ts` files of `@unlayer/react-elements` and list the exact exports and props for: `Email`, `Page`, `Document`, `Row`, `Column`, `ColumnLayouts`, `Heading`, `Paragraph`, `Button`, `Image`, `Divider`, plus any others (e.g. `Menu`, `Social`, `Html`, `Table`, `Video`) that exist.
- [ ] Confirm which props exist for: background color, padding, border, border radius, font family, font size, text align, line height, width, container padding, mobile behavior.
- [ ] Confirm how fonts are handled (custom font config via `UnlayerProvider` / config, or inline `fontFamily`).
- [ ] Confirm how to set page size / print settings for `<Document>`.
- [ ] Write a short "API cheat sheet" into `NOTES.md` from what you found. **All later code relies on this, not on assumptions.**

### Phase 2: Scaffold
- [ ] Create the repo structure (Section 3).
- [ ] Install dependencies, set up `tsconfig.json` (`"jsx": "react-jsx"`, `"strict": true`), scripts.
- [ ] Prove the pipeline with a trivial `<Email>` rendered by `build.tsx`. Commit.

### Phase 3: Foundations
- [ ] `src/tokens.ts` (Section 5).
- [ ] `src/data.ts` (Section 4).
- [ ] Generate local assets (Section 6).
- [ ] Shared components (Section 7).

### Phase 4: Templates (in this order: landing page → email → ticket → social card)
- [ ] Each gets built, rendered, opened and visually inspected before moving on (use Playwright screenshots; see Section 10).

### Phase 5: Build pipeline, QA, README, polish
- [ ] `build.tsx` renders everything; `render-assets.ts` makes PDF and PNG.
- [ ] Run the QA checklist (Section 10).
- [ ] Write README (Section 11) with real screenshots taken from the actual output.
- [ ] Final fresh-clone test.

---

## 3. Repository structure

```
northwind-summit-kit/
├── README.md
├── NOTES.md                      # your API notes, decisions, workarounds
├── LICENSE                       # MIT
├── package.json
├── tsconfig.json
├── .gitignore                    # node_modules, but KEEP dist/ and screenshots/ committed
├── assets/
│   ├── logo.svg
│   ├── hero-pattern.svg
│   ├── speaker-1.svg ... speaker-4.svg   # generated illustrated avatars
│   └── qr-placeholder.svg
├── src/
│   ├── tokens.ts                 # single source of truth for theme
│   ├── themes.ts                 # 2 presets: "midnight" (default) and "daylight"
│   ├── data.ts                   # all copy and event data
│   ├── components/
│   │   ├── BrandHeader.tsx
│   │   ├── Footer.tsx
│   │   ├── SectionTitle.tsx
│   │   ├── CtaButton.tsx
│   │   ├── SpeakerCard.tsx
│   │   ├── ScheduleRow.tsx
│   │   ├── PriceCard.tsx
│   │   ├── InfoBlock.tsx         # label + value pair (date, venue, tier)
│   │   └── FaqItem.tsx
│   ├── templates/
│   │   ├── LandingPage.tsx
│   │   ├── ConfirmationEmail.tsx
│   │   ├── Ticket.tsx
│   │   └── SocialCard.tsx
│   ├── build.tsx                 # renders all four to dist/
│   └── render-assets.ts          # Playwright: ticket.pdf + social-card.png + screenshots
├── dist/                         # generated and committed so judges can preview without building
└── screenshots/
    ├── hero.png                  # main README image (composite of the 4 outputs if possible)
    ├── landing.png
    ├── email.png
    ├── ticket.png
    ├── social-card.png
    └── retheme.png               # same page in "daylight" theme
```

`package.json` scripts:

```json
{
  "scripts": {
    "build": "tsx src/build.tsx && tsx src/render-assets.ts",
    "build:html": "tsx src/build.tsx",
    "preview": "serve dist",
    "theme:daylight": "THEME=daylight npm run build",
    "typecheck": "tsc --noEmit"
  }
}
```

Theme selection: `process.env.THEME` ("midnight" default | "daylight"). Changing it must re-theme **all four outputs**.

---

## 4. Content and data (use exactly; do not invent different content)

Put all of this in `src/data.ts`.

**Event**
- Name: `Northwind Summit 2027`
- Tagline: `Two days. One stage. Everything about building the next decade of software.`
- Dates: `March 18–19, 2027`
- Venue: `The Foundry, 42 Harbor Street, Lisbon, Portugal`
- Doors open: `08:30` · Start: `09:30`
- CTA text: `Get your ticket` · CTA URL: `https://example.com/tickets`
- Stats: `2,000 attendees` · `40 speakers` · `3 stages` · `2 days`

**Speakers (4; fictional)**
1. Maya Okonkwo: Principal Engineer, Lumen Labs
2. Daniel Reyes: Head of Design, Parallel
3. Priya Nair: CTO, Kestrel Health
4. Jonas Lindqvist: Founder, Fjord Systems

**Schedule (Day 1, 6 rows)**
| Time | Session | Speaker |
|---|---|---|
| 09:30 | Opening keynote: The Next Decade | Maya Okonkwo |
| 10:45 | Designing for Humans and Agents | Daniel Reyes |
| 12:00 | Lunch and community tables | n/a |
| 13:30 | Scaling Teams Without Scaling Chaos | Priya Nair |
| 15:00 | Shipping Small, Learning Fast | Jonas Lindqvist |
| 16:30 | Closing panel and party | All speakers |

**Pricing (3 cards; middle highlighted "Most popular")**
| Tier | Price | Includes |
|---|---|---|
| Community | €149 | Access to all talks · Lunch · Online recordings |
| Professional | €349 | Everything in Community · Workshops · Speaker dinner · Priority seating |
| Team (5 seats) | €1,299 | Everything in Professional · Team lounge · Dedicated check-in |

**FAQ (5)**
1. Can I get a refund? → Yes, up to 30 days before the event.
2. Is there a student discount? → Yes, 50% off with a valid student ID.
3. Will talks be recorded? → All main-stage talks are recorded and shared within a week.
4. Is the venue accessible? → Fully step-free with accessible restrooms and quiet rooms.
5. Can I transfer my ticket? → Yes, free of charge up to 48 hours before the event.

**Sample attendee (for email and ticket)**
- Name: `Alex Morgan` · Email: `alex@example.com`
- Tier: `Professional` · Order #: `NWS-2027-004218` · Seat: `Block B · Row 7 · Seat 12`
- Paid: `€349.00` · Date of order: `January 12, 2027`

---

## 5. Design system (`tokens.ts` and `themes.ts`)

Two themes sharing the same shape. All values below are **required starting points**. Refine only if contrast fails.

```ts
// themes.ts (shape)
export type Theme = {
  name: string;
  colors: {
    bg: string; surface: string; surfaceAlt: string;
    primary: string; primaryText: string;
    accent: string; accentText: string;
    text: string; textMuted: string; border: string;
  };
  fonts: { heading: string; body: string; mono: string };
  radius: string;
  space: { xs: string; sm: string; md: string; lg: string; xl: string; xxl: string };
  type: { h1: string; h2: string; h3: string; body: string; small: string };
};
```

**Midnight (default)**
- bg `#0B1020` · surface `#141B34` · surfaceAlt `#1B2547`
- primary `#6C5CE7` (text on primary `#FFFFFF`) · accent `#00D1B2` (text on accent `#04221D`)
- text `#F5F7FF` · textMuted `#A9B1CF` · border `#2A3562`

**Daylight**
- bg `#FFFFFF` · surface `#F5F6FB` · surfaceAlt `#ECEEF8`
- primary `#4F3FD0` · accent `#00A88F` (text on accent `#FFFFFF`)
- text `#101323` · textMuted `#5B6280` · border `#DCE0F0`

**Typography**
- Heading font: `Inter` with fallback `Helvetica, Arial, sans-serif`. Body: same family.
- **Email must use only the safe fallback stack** (`Helvetica, Arial, sans-serif`) because many clients ignore web fonts.
- Scale: h1 `56px` (email `32px`), h2 `36px` (email `24px`), h3 `20px`, body `16px`, small `13px`.
- Line height: 140–150% for body, 115% for headings.

**Spacing:** 4/8/16/32/64/96px scale. Section vertical padding on web: 80–96px; email: 32px.

**Hard design rules**
- Max **2 brand colors** (primary + accent) plus neutrals.
- **One primary CTA per section.**
- Text contrast ≥ **4.5:1** (verify programmatically; see Section 10).
- Consistent corner radius (12px) everywhere.
- Alignment: center hero text; left-align everything else.
- Max content width: web 1120px, email 600px.

---

## 6. Assets (generate; do not download)

Create SVGs programmatically or by hand-writing SVG:
- `logo.svg`: simple wordmark "NORTHWIND" with a small compass/arrow glyph, uses `currentColor` where possible. Also export a light and dark variant if needed for the themes.
- `speaker-N.svg`: abstract illustrated avatar (circle, gradient background, simple shoulders/head silhouette), 4 distinct color pairs from the theme.
- `hero-pattern.svg`: subtle grid/dot or gradient mesh for the hero background.
- `qr-placeholder.svg`: a believable QR-style pattern (static, clearly decorative).

For the email, raster images are more reliable than SVG in some clients (Outlook, Gmail). Convert the logo and speaker avatars to **PNG** (via Playwright screenshot or `sharp` if you add it) and use PNG in the email. Document this in `NOTES.md`.

---

## 7. Shared components (`src/components`)

Every component:
- takes data via props, imports tokens from the active theme, and **does not know which output it is in**,
- except where an email-safe variant is genuinely needed (use a small `variant?: "web" | "email" | "print"` prop and note why).

Required components:
1. `BrandHeader`: logo + optional right-aligned link/date.
2. `SectionTitle`: eyebrow label (small, accent color, uppercase) + h2 + optional subtitle.
3. `CtaButton`: wraps the library's `Button`; primary and secondary styles.
4. `SpeakerCard`: avatar `Image`, name `Heading` h3, role `Paragraph`.
5. `ScheduleRow`: time, title, speaker (three-column `Row`).
6. `PriceCard`: tier, price, feature list, CTA; `highlighted` prop.
7. `InfoBlock`: small uppercase label + bold value (used in email, ticket, hero).
8. `FaqItem`: question (bold) + answer.
9. `Footer`: address, small print, "Built with Hyper Elements" note.

Remember: **each `Row` needs the matching number of `Column` children for its `ColumnLayouts` value.** Verify the layout constants from the types.

---

## 8. Template specs

### 8.1 Landing page (`<Page>`, → `dist/index.html`)

Sections in order:
1. **Header bar:** logo left, nav links optional, small "Get tickets" button right.
2. **Hero:** full-width dark/themed block with pattern background, eyebrow (`Lisbon · March 18–19, 2027`), h1 (event name), tagline, primary CTA + secondary ("View schedule"), then the stats row beneath.
3. **Speakers:** SectionTitle + 4 `SpeakerCard`s in a 4-column row (stack on mobile).
4. **Schedule:** SectionTitle + 6 `ScheduleRow`s in a surfaced card with dividers.
5. **Pricing:** SectionTitle + 3 `PriceCard`s; middle one highlighted with accent border and "Most popular" badge.
6. **FAQ:** SectionTitle + 5 `FaqItem`s.
7. **Final CTA band:** headline `Join 2,000 builders in Lisbon.` + CTA.
8. **Footer.**

Acceptance: at 375px, 768px and 1440px widths there is **no horizontal scroll**, no overlapping text, columns stack sensibly, and the hero fits a first-screen thumbnail well (this is what the gallery shows).

### 8.2 Confirmation email (`<Email>`, → `dist/confirmation.html` and `.txt`)

- `contentWidth="600px"`, outer background = theme `surfaceAlt`/neutral, content card = surface.
- Safe fonts only. Bulletproof `Button`. PNG images with `alt` text.
- Layout, top to bottom:
  1. Logo
  2. h1-sized heading: `You're in, Alex! 🎟️` (Use an emoji only if it renders safely; otherwise drop it.)
  3. One-sentence intro: confirming the Professional ticket
  4. **Order summary card:** `InfoBlock`s for Order #, Tier, Date, Venue, Paid
  5. Primary CTA: `Add to calendar`
  6. Secondary text link: `Download your ticket (PDF)`
  7. A short "What to bring" list (3 bullets): ticket QR code, photo ID, a charger
  8. Footer: address, "You received this because you registered at northwind.example", unsubscribe placeholder
- Generate **plain-text** via `renderToPlainText` and write it to `dist/confirmation.txt`.
- Keep HTML under ~100KB. Report the actual size in `NOTES.md`.

### 8.3 Ticket (`<Document>`, → `dist/ticket.html` and `dist/ticket.pdf`)

- Size: **210mm × 99mm** (DL ticket). Verify the library's document/print options; otherwise enforce size with Playwright's `page.pdf({ width, height })` and CSS `@page`.
- White or very light background (print-friendly); brand color as a left or top band.
- Contents: logo, event name, date/time, venue, attendee name (large), tier, seat, order #, QR placeholder block on the right, thin tear-line divider, small print.
- Must fit on **exactly one page**, with no clipped text. Print backgrounds enabled.

### 8.4 Social card (→ `dist/social-card.html` and `dist/social-card.png`)

- Exactly **1200×630**. Pattern background, logo, event name (huge), date + city, accent underline or badge.
- Headline readable at thumbnail size (≥ 64px).

---

## 9. Build pipeline

`src/build.tsx`:
1. Read `THEME` env var, select theme.
2. Render each template with the library's render functions into `dist/`.
3. Copy `/assets` to `dist/assets` and make sure the HTML references resolve (relative paths) when opened directly or via `serve`.
4. Print a summary table of generated files with sizes.

`src/render-assets.ts` (Playwright, headless Chromium):
1. `dist/ticket.html` → `dist/ticket.pdf` (printBackground true, exact page size).
2. `dist/social-card.html` → `dist/social-card.png` at 1200×630.
3. Screenshots into `/screenshots` of: landing (1440px full-page and 375px), email (600px wide), ticket, social card.
4. Build a second pass with `THEME=daylight` into `dist-daylight/` (do **not** commit this folder) only to capture `screenshots/retheme.png`. Alternatively render both and capture both.

If Playwright browsers can't install in the environment, fall back gracefully: skip PDF/PNG, log a clear message, and document how to run it locally.

---

## 10. QA checklist (must all pass; record results in `NOTES.md`)

**Build**
- [ ] `rm -rf node_modules dist && npm install && npm run build` succeeds with zero errors.
- [ ] `npm run typecheck` passes.
- [ ] `THEME=daylight npm run build` succeeds and visibly changes all four outputs.

**Web**
- [ ] Screenshots at 375 / 768 / 1440px reviewed; no horizontal scroll, no overlap, no clipped text.
- [ ] All headings in logical order (one h1).
- [ ] All images have alt text.
- [ ] Contrast ≥ 4.5:1 for body text on every background (compute with a small script).

**Email**
- [ ] HTML uses table-based layout (confirm in output), 600px wide.
- [ ] No web-only fonts, no CSS features known to fail in Outlook (flex/grid) in the email output.
- [ ] Plain-text version exists and reads sensibly.
- [ ] HTML size reported.

**PDF/Image**
- [ ] `ticket.pdf` is exactly 1 page at the correct size; open and inspect rasterized preview.
- [ ] `social-card.png` is 1200×630.

**Repo**
- [ ] No hardcoded hex colors outside `tokens.ts`/`themes.ts` (grep to verify).
- [ ] No leftover TODOs, debug logs, or unused files.
- [ ] `dist/` and `screenshots/` are committed.
- [ ] Fresh-clone test passes.

---

## 11. README.md (write it like a product page)

**The FAQ makes three README items mandatory. Make them impossible to miss, with these exact headings:**
- `## Preview`: screenshot, GIF or video of the completed template
- `## Hyper Elements Implementation`: explanation of how the library was used (components, render functions, how outputs share components)
- `## Setup Instructions`: clear steps to run or reproduce

Required sections, in order (the three mandatory ones are included):
1. Title + one-line pitch: *One design system. A landing page, an email, a PDF ticket and a social card, all from the same React components.*
2. **Hero image** (`screenshots/hero.png`): composite of all four outputs.
3. Badges: MIT, Node 20+, built with `@unlayer/react-elements`.
4. **What's inside:** table of the 4 outputs with thumbnails and links to files in `dist/`.
5. **Quick start:** 3 commands (`npm install`, `npm run build`, `npm run preview`).
6. **How it works:** a short diagram (ASCII or Mermaid): `tokens + data → shared components → 4 templates → HTML / TXT / PDF / PNG`.
7. **Re-theme in one line:** show `THEME=daylight npm run build` with before/after screenshots.
8. **Customize:** where to change colors, copy, speakers, pricing.
9. **Which Hyper Elements features are used:** list of components and render functions actually used, with one sentence each.
10. **Project structure** (tree).
11. **Notes on email compatibility** (fonts, images, size).
12. **License** (MIT) + "Built for the Hyper Elements Template Challenge."

Use only screenshots generated from the real build. Never mock them.

---

## 12. Definition of Done

All of the following are true:
1. Four outputs generated from shared components via `@unlayer/react-elements`.
2. Re-theming works across all outputs with one variable.
3. QA checklist fully green, results recorded.
4. README complete with real screenshots.
5. A fresh clone builds with one command.
6. Repo is clean, MIT licensed, no external assets with unclear licenses.
7. `NOTES.md` documents every API discrepancy and workaround.
8. `SUBMISSION.md` exists with ready-to-paste text for each official form field (Section 14).
9. README contains the three mandatory headings (Preview, Hyper Elements Implementation, Setup Instructions).

---

## 13. Things the agent must NOT do

- Do not invent component props. Check the types.
- Do not hand-write final HTML; the library renders it.
- Do not use stock photos, remote images, or copyrighted brand assets.
- Do not leave placeholder text ("Lorem ipsum", "TODO", "Your text here").
- Do not claim a check passed without actually running it.
- Do not push to GitHub, post in Discussions, or star repositories. These are handled by the human (Section 14).

---

## 14. Submission (official process from the challenge FAQ)

### Agent: create `SUBMISSION.md` containing draft text for each form field
- **Project name**
- **Project description:** brief explanation of what was built (2-4 sentences)
- **Hyper Elements implementation:** brief explanation of how the library is used (components, render functions, shared components across outputs, theme tokens)
- **Live preview (optional):** leave a placeholder; only fill in if the owner deploys `dist/` (e.g. GitHub Pages)

### Human (project owner) steps, not for the agent
1. Review screenshots and click through every output yourself.
2. **Star** the Hyper Elements GitHub repository (required to qualify; you'll confirm this on the form).
3. Create a **public** GitHub repository, push, and confirm the README has Preview, Hyper Elements Implementation and Setup Instructions.
4. (Optional) Deploy `dist/` to GitHub Pages for a live preview link.
5. Go to Hyper Elements **GitHub Discussions → Challenge Submissions → New discussion** and complete the form: Challenge (select Hyper Elements Template Challenge), Project name, Project description, GitHub repository, Hyper Elements implementation, Live preview (optional). Tick the confirmations (starred repo, public repo with source and README, meets requirements).
6. You may **edit the submission any time before Nov 29, 2026, 23:59 UTC**, and you may submit multiple templates (each as its own discussion).
7. Optional: share with **#HyperElementsTemplate**.
8. Deadline in India time: **05:29 IST on Nov 30**. Target submitting by Nov 27.
9. Questions: Q&A category of Hyper Elements GitHub Discussions.
10. Winners: announced on Unlayer's social channels and the Announcements category in Discussions.

AI tools are explicitly allowed by the FAQ, so no special disclosure is required. Mentioning the use of AI assistance in the README is optional.

---

## 15. Paste-ready kickoff prompt for the agent

> You are building a competition entry. Read `antigravity-build-guide.md` in full. Start with Phase 1 (load the official Hyper Elements AI skill, review the template gallery for originality, then research the real `@unlayer/react-elements` API from the docs at https://docs.unlayer.com/elements and the installed package types), record findings in `NOTES.md`, then proceed through Phases 2–5 exactly as specified. After each phase, summarize what you did and show evidence (build output, screenshots). Do not guess APIs, do not skip QA, and stop and ask if any requirement is impossible with the library as documented.
