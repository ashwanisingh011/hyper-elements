import { Button } from "@hyper-elements/react";
import { currentTheme } from "../tokens.js";

interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent";
  ariaLabel?: string;
  fullWidth?: boolean;
}

export function CtaButton({
  href,
  children,
  variant = "primary",
  ariaLabel,
  fullWidth = false,
}: CtaButtonProps) {
  const isAccent = variant === "accent";
  const isPrimary = variant === "primary";

  let bg = currentTheme.colors.primary;
  let textColor = currentTheme.colors.primaryText;
  let border: string | undefined = undefined;
  let hoverBg = currentTheme.colors.accent;
  let hoverColor = currentTheme.colors.accentText;

  if (isAccent) {
    bg = currentTheme.colors.accent;
    textColor = currentTheme.colors.accentText;
    hoverBg = currentTheme.colors.text;
    hoverColor = currentTheme.colors.bg;
  } else if (!isPrimary) {
    bg = "transparent";
    textColor = currentTheme.colors.text;
    border = `1px solid ${currentTheme.colors.border}`;
    hoverBg = currentTheme.colors.surfaceAlt;
    hoverColor = currentTheme.colors.text;
  }

  return (
    <Button
      href={href}
      aria-label={ariaLabel || (typeof children === "string" ? children : undefined)}
      style={{
        backgroundColor: bg,
        color: textColor,
        border,
        borderRadius: currentTheme.radius,
        padding: "14px 28px",
        fontFamily: currentTheme.fonts.body,
        fontSize: 14,
        fontWeight: 600,
        letterSpacing: 0.3,
        textDecoration: "none",
        width: fullWidth ? "100%" : undefined,
        hover: {
          backgroundColor: hoverBg,
          color: hoverColor,
        },
      }}
    >
      {children}
    </Button>
  );
}
