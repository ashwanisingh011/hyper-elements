export interface AppTheme {
  name: "midnight" | "daylight";
  colors: {
    bg: string;
    surface: string;
    surfaceAlt: string;
    primary: string;
    primaryText: string;
    accent: string;
    accentText: string;
    text: string;
    textMuted: string;
    border: string;
    glow: string;
  };
  fonts: {
    heading: string;
    body: string;
    email: string;
    mono: string;
  };
  radius: number;
  space: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  type: {
    h1: number;
    h1Email: number;
    h2: number;
    h2Email: number;
    h3: number;
    body: number;
    small: number;
    kicker: number;
  };
}

export const midnightTheme: AppTheme = {
  name: "midnight",
  colors: {
    bg: "#080B11",
    surface: "#0F1422",
    surfaceAlt: "#161D31",
    primary: "#4361EE",
    primaryText: "#FFFFFF",
    accent: "#D4F64E", // Electric Cybernetic Chartreuse / Neon Lime
    accentText: "#080B11",
    text: "#F0F4FC",
    textMuted: "#8391A8",
    border: "#1E2740",
    glow: "rgba(212, 246, 78, 0.12)",
  },
  fonts: {
    heading: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    email: "'Cormorant Garamond', Georgia, 'Times New Roman', serif",
    mono: "'Space Mono', 'SF Mono', Menlo, Monaco, Consolas, monospace",
  },
  radius: 6, // Crisp, architectural 6px corners (not generic bulbous pill cards)
  space: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 32,
    xl: 64,
    xxl: 96,
  },
  type: {
    h1: 64,
    h1Email: 36,
    h2: 40,
    h2Email: 26,
    h3: 22,
    body: 16,
    small: 13,
    kicker: 11,
  },
};

export const daylightTheme: AppTheme = {
  name: "daylight",
  colors: {
    bg: "#FAF8F5", // Architectural Alabaster drafting paper
    surface: "#F2EFE9",
    surfaceAlt: "#E6E2D8",
    primary: "#111318", // Carbon black
    primaryText: "#FAF8F5",
    accent: "#E63917", // International Bauhaus Vermilion / Terracotta
    accentText: "#FFFFFF",
    text: "#111318",
    textMuted: "#6B675E",
    border: "#D8D2C5",
    glow: "rgba(230, 57, 23, 0.10)",
  },
  fonts: {
    heading: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    email: "'Cormorant Garamond', Georgia, 'Times New Roman', serif",
    mono: "'Space Mono', 'SF Mono', Menlo, Monaco, Consolas, monospace",
  },
  radius: 6,
  space: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 32,
    xl: 64,
    xxl: 96,
  },
  type: {
    h1: 64,
    h1Email: 36,
    h2: 40,
    h2Email: 26,
    h3: 22,
    body: 16,
    small: 13,
    kicker: 11,
  },
};
