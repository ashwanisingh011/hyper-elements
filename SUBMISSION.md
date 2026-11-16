# Hyper Elements Template Challenge — Submission Details

Use the ready-to-paste text below when submitting your entry to the **Hyper Elements GitHub Discussions → Challenge Submissions** category.

---

### Field 1: Challenge
`Hyper Elements Template Challenge`

### Field 2: Project Name
`Northwind Summit Launch Kit`

### Field 3: Project Description
The Northwind Summit Launch Kit is a multi-channel digital publishing kit for a high-profile technology conference. From a single unified React component tree and design token system, it generates a responsive event landing page, an email-safe registration confirmation receipt with plain-text fallback, a print-ready DL admission pass ticket (PDF), and a high-resolution social/OpenGraph share card (1200×630 PNG). Every deliverable supports instant system-wide re-theming between dark ("midnight") and light ("daylight") modes via a single environment variable.

### Field 4: GitHub Repository
*(Paste the URL of your public repository here, e.g., `https://github.com/your-username/northwind-summit-kit`)*

### Field 5: Hyper Elements Implementation
The project leverages `@hyper-elements/react` as its core content and rendering engine:
- **Four Dedicated Roots:** Uses all four core root components (`<Page>`, `<Email>`, `<Document>`, and `<Canvas>`), each targeting distinct output formats from shared React components.
- **Shared Component Architecture:** Components such as `BrandHeader`, `CtaButton`, `SpeakerCard`, `ScheduleRow`, `PriceCard`, `InfoBlock`, and `Footer` are written once and reused across web, email, ticket, and social card outputs.
- **Single-Source Design Tokens:** All colors, typography scales, spacing, and border radii are configured in `themes.ts`, driving both default midnight navy and daylight themes without modifying template markup.
- **Automated Pipeline:** Uses Hyper Elements' `render()` function to compile responsive HTML and plain-text alternatives, coupled with headless Chromium to export print-perfect DL-dimension PDFs (`210mm × 99mm`) and 1200×630 OpenGraph PNG images.

### Field 6: Live Preview (Optional)
*(Optional: If deploying `dist/` to GitHub Pages, Vercel, or Netlify, paste your live URL here)*

---

### Owner Verification Checklist
Before submitting, please ensure you complete these steps in your browser:
- [ ] Star the official Hyper Elements repository: https://github.com/hyper-elements/hyper-elements
- [ ] Push code to a public GitHub repository.
- [ ] Verify that the README contains `## Preview`, `## Hyper Elements Implementation`, and `## Setup Instructions`.
- [ ] Check that `dist/` and `screenshots/` are included in the repository.
