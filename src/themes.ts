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
  };
}

export const midnightTheme: AppTheme = {
  name: "midnight",
  colors: {
    bg: "#0B1020",
    surface: "#141B34",
    surfaceAlt: "#1B2547",
    primary: "#6C5CE7",
    primaryText: "#FFFFFF",
    accent: "#00D1B2",
    accentText: "#04221D",
    text: "#F5F7FF",
    textMuted: "#A9B1CF",
    border: "#2A3562",
  },
  fonts: {
    heading: "Inter, Helvetica, Arial, sans-serif",
    body: "Inter, Helvetica, Arial, sans-serif",
    email: "Helvetica, Arial, sans-serif",
    mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  },
  radius: 12,
  space: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 32,
    xl: 64,
    xxl: 96,
  },
  type: {
    h1: 56,
    h1Email: 32,
    h2: 36,
    h2Email: 24,
    h3: 20,
    body: 16,
    small: 13,
  },
};

export const daylightTheme: AppTheme = {
  name: "daylight",
  colors: {
    bg: "#FFFFFF",
    surface: "#F5F6FB",
    surfaceAlt: "#ECEEF8",
    primary: "#4F3FD0",
    primaryText: "#FFFFFF",
    accent: "#00A88F",
    accentText: "#04221D",
    text: "#101323",
    textMuted: "#5B6280",
    border: "#DCE0F0",
  },
  fonts: {
    heading: "Inter, Helvetica, Arial, sans-serif",
    body: "Inter, Helvetica, Arial, sans-serif",
    email: "Helvetica, Arial, sans-serif",
    mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  },
  radius: 12,
  space: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 32,
    xl: 64,
    xxl: 96,
  },
  type: {
    h1: 56,
    h1Email: 32,
    h2: 36,
    h2Email: 24,
    h3: 20,
    body: 16,
    small: 13,
  },
};
