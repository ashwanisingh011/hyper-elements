export interface AppTheme {
  name: "paper" | "ink";
  colors: {
    bg: string;
    surface: string;
    surfaceAlt: string;
    primary: string;
    primaryText: string;
    accent: string;
    accentText: string;
    accentSoft: string;
    text: string;
    textMuted: string;
    border: string;
    darkBg: string;
    darkText: string;
  };
  fonts: {
    display: string;
    body: string;
    mono: string;
    emailDisplay: string;
    emailBody: string;
  };
  radius: number;
  space: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
    section: number;
    sectionMobile: number;
  };
  type: {
    h1: number;
    h1Mobile: number;
    h1Email: number;
    h2: number;
    h2Mobile: number;
    h2Email: number;
    h3: number;
    body: number;
    small: number;
    kicker: number;
  };
  maxWidth: number;
  emailWidth: number;
}

/** "Paper" — warm editorial light theme (default) */
export const paperTheme: AppTheme = {
  name: "paper",
  colors: {
    bg: "#F5F0E6",
    surface: "#FFFFFF",
    surfaceAlt: "#EFE8DA",
    primary: "#16181D",
    primaryText: "#FFFFFF",
    accent: "#E5472B",
    accentText: "#FFFFFF",
    accentSoft: "#FBE3DC",
    text: "#16181D",
    textMuted: "#635F57",
    border: "#DDD6C6",
    darkBg: "#14171F",
    darkText: "#F5F0E6",
  },
  fonts: {
    display: "'Fraunces', Georgia, 'Times New Roman', serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    mono: "'IBM Plex Mono', 'JetBrains Mono', 'SF Mono', Menlo, monospace",
    emailDisplay: "Georgia, 'Times New Roman', serif",
    emailBody: "Helvetica, Arial, sans-serif",
  },
  radius: 12,
  space: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 32,
    xl: 64,
    xxl: 96,
    section: 96,
    sectionMobile: 56,
  },
  type: {
    h1: 72,
    h1Mobile: 44,
    h1Email: 34,
    h2: 44,
    h2Mobile: 32,
    h2Email: 28,
    h3: 22,
    body: 16,
    small: 13,
    kicker: 12,
  },
  maxWidth: 1120,
  emailWidth: 600,
};

/** "Ink" — editorial dark theme */
export const inkTheme: AppTheme = {
  name: "ink",
  colors: {
    bg: "#12141A",
    surface: "#1B1E27",
    surfaceAlt: "#232733",
    primary: "#F5F0E6",
    primaryText: "#12141A",
    accent: "#FF6A4D",
    accentText: "#FFFFFF",
    accentSoft: "#2E2019",
    text: "#F5F0E6",
    textMuted: "#A3A194",
    border: "#2C3040",
    darkBg: "#0A0C10",
    darkText: "#F5F0E6",
  },
  fonts: {
    display: "'Fraunces', Georgia, 'Times New Roman', serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    mono: "'IBM Plex Mono', 'JetBrains Mono', 'SF Mono', Menlo, monospace",
    emailDisplay: "Georgia, 'Times New Roman', serif",
    emailBody: "Helvetica, Arial, sans-serif",
  },
  radius: 12,
  space: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 32,
    xl: 64,
    xxl: 96,
    section: 96,
    sectionMobile: 56,
  },
  type: {
    h1: 72,
    h1Mobile: 44,
    h1Email: 34,
    h2: 44,
    h2Mobile: 32,
    h2Email: 28,
    h3: 22,
    body: 16,
    small: 13,
    kicker: 12,
  },
  maxWidth: 1120,
  emailWidth: 600,
};
