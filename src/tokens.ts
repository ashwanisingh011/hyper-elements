import { AppTheme, daylightTheme, midnightTheme } from "./themes.js";

const selectedThemeName = process.env.THEME === "daylight" ? "daylight" : "midnight";
export const currentTheme: AppTheme = selectedThemeName === "daylight" ? daylightTheme : midnightTheme;

export function getTheme(themeName?: string): AppTheme {
  if (themeName === "daylight") return daylightTheme;
  return midnightTheme;
}
