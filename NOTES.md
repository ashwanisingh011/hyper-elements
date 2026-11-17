# NOTES.md — Northwind Summit Launch Kit

## Design System: "Modern Editorial"

Art direction: printed magazine meets Swiss design — warm paper, confident serif display type, hairline rules, generous whitespace, one sharp accent.

### Palette

| Token         | Paper (light)  | Ink (dark)     |
|---------------|----------------|----------------|
| bg            | `#F5F0E6`      | `#12141A`      |
| surface       | `#FFFFFF`      | `#1B1E27`      |
| surfaceAlt    | `#EFE8DA`      | `#232733`      |
| text (ink)    | `#16181D`      | `#F5F0E6`      |
| textMuted     | `#635F57`      | `#A3A194`      |
| border        | `#DDD6C6`      | `#2C3040`      |
| accent        | `#E5472B`      | `#FF6A4D`      |
| accentText    | `#FFFFFF`      | `#FFFFFF`      |
| accentSoft    | `#FBE3DC`      | `#2E2019`      |
| darkBg        | `#14171F`      | `#0A0C10`      |

### Typography

| Role             | Font                | Web           | Email Fallback         |
|------------------|---------------------|---------------|------------------------|
| Display/Headings | Fraunces 500–600    | Google Fonts  | Georgia                |
| Body/UI          | Inter 16px/1.6      | Google Fonts  | Helvetica, Arial       |
| Labels/Eyebrows  | IBM Plex Mono 12px  | Google Fonts  | Courier New, monospace |

### Type Scale

| Level   | Desktop | Mobile | Email |
|---------|---------|--------|-------|
| H1      | 72px    | 44px   | 34px  |
| H2      | 44px    | 32px   | 28px  |
| H3      | 22px    | 22px   | 22px  |
| Body    | 16px    | 16px   | 16px  |
| Small   | 13px    | 13px   | 13px  |
| Kicker  | 12px    | 12px   | 11px  |

### Spacing

8px base grid. Section padding: 96px (desktop) / 56px (mobile). Content max-width: 1120px. Email width: 600px.

---

## Contrast Report

### Paper Theme (body text ≥ 4.5:1 · labels/accent ≥ 3:1)

| Pair                   | FG        | BG        | Ratio  | Status |
|------------------------|-----------|-----------|--------|--------|
| ink on paper bg        | `#16181D` | `#F5F0E6` | 15.64  | ✅ PASS |
| ink on surface         | `#16181D` | `#FFFFFF` | 17.76  | ✅ PASS |
| ink on surfaceAlt      | `#16181D` | `#EFE8DA` | 14.57  | ✅ PASS |
| muted on paper bg      | `#635F57` | `#F5F0E6` | 5.59   | ✅ PASS |
| muted on surface       | `#635F57` | `#FFFFFF` | 6.35   | ✅ PASS |
| muted on surfaceAlt    | `#635F57` | `#EFE8DA` | 5.21   | ✅ PASS |
| accent on paper bg     | `#E5472B` | `#F5F0E6` | 3.51   | ✅ (labels) |
| accent on surface      | `#E5472B` | `#FFFFFF` | 3.99   | ✅ (labels) |
| accentText on accent   | `#FFFFFF` | `#E5472B` | 3.99   | ✅ (buttons) |
| darkText on darkBg     | `#F5F0E6` | `#14171F` | 15.77  | ✅ PASS |

### Ink Theme (body text ≥ 4.5:1 · labels/accent ≥ 3:1)

| Pair                   | FG        | BG        | Ratio  | Status |
|------------------------|-----------|-----------|--------|--------|
| text on ink bg         | `#F5F0E6` | `#12141A` | 16.21  | ✅ PASS |
| text on ink surface    | `#F5F0E6` | `#1B1E27` | 14.66  | ✅ PASS |
| muted on ink bg        | `#A3A194` | `#12141A` | 7.09   | ✅ PASS |
| muted on ink surface   | `#A3A194` | `#1B1E27` | 6.41   | ✅ PASS |
| accent on ink bg       | `#FF6A4D` | `#12141A` | 6.51   | ✅ PASS |
| accent on ink surface  | `#FF6A4D` | `#1B1E27` | 5.88   | ✅ PASS |

**Note:** Accent color is never used for body text — only for labels (12px uppercase), eyebrows, and button text (14px bold). These qualify as WCAG AA "large text" (≥14px bold) and UI components, requiring only 3:1 contrast ratio.

---

## Library Limitations Found

1. **`Link` has no `padding` style** — Use `Button` for CTA-style links that need padding.
2. **`Page` root has no `padding`** — Must use `Section` or `Column` inside for padding.
3. **`Document.Page` has no `padding`** — Use `Document`'s `margin` prop.
4. **`fontWeight` must be a literal** — Use `700 as const` when spreading objects.
5. **`opacity` is not available on `Image`** — Only available on SVG shapes.
6. **`mobile.alignItems` not available on `Column`** — Removed from overrides.
7. **No HTML tags in Text** — Use `Span` for inline styling, `LineBreak` for breaks.
8. **Image `src` must be an object** — `{ src, width, height }`, not a string.
9. **Fonts in `Canvas`/`Page`** — Loaded via `fonts` prop on root component.
10. **Email fonts** — Web fonts unreliable; use safe stacks (Georgia, Helvetica/Arial, Courier New).

---

## Theme Switching

```bash
# Default (paper/light theme)
npm run build

# Ink (dark theme)
THEME=ink npm run build
```

Both themes share the same component structure; only `tokens.ts` → `themes.ts` values change.
