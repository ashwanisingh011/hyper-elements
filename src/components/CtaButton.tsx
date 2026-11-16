import { Button } from "@hyper-elements/react";
import { currentTheme } from "../tokens.js";

interface CtaButtonProps {
  href: string;
  children: string;
  variant?: "primary" | "secondary";
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
  const isPrimary = variant === "primary";
  const bg = isPrimary ? currentTheme.colors.primary : "transparent";
  const textColor = isPrimary ? currentTheme.colors.primaryText : currentTheme.colors.text;
  const border = isPrimary ? undefined : `1px solid ${currentTheme.colors.border}`;
  const hoverBg = isPrimary ? currentTheme.colors.accent : currentTheme.colors.surfaceAlt;
  const hoverColor = isPrimary ? currentTheme.colors.accentText : currentTheme.colors.text;

  return (
    <Button
      href={href}
      aria-label={ariaLabel || children}
      style={{
        backgroundColor: bg,
        color: textColor,
        border,
        borderRadius: currentTheme.radius,
        padding: "14px 28px",
        fontSize: currentTheme.type.body,
        fontWeight: 600,
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
