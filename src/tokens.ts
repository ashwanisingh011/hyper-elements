import { AppTheme, inkTheme, paperTheme } from "./themes.js";

const selectedThemeName = process.env.THEME === "ink" ? "ink" : "paper";
export const currentTheme: AppTheme = selectedThemeName === "ink" ? inkTheme : paperTheme;

export function getTheme(themeName?: string): AppTheme {
  if (themeName === "ink") return inkTheme;
  return paperTheme;
}
