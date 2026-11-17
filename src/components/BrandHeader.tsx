import { Column, Image, Link, Row, Text } from "@hyper-elements/react";
import { currentTheme } from "../tokens.js";

interface BrandHeaderProps {
  rightText?: string;
  ctaHref?: string;
  ctaText?: string;
  variant?: "web" | "email" | "print";
}

export function BrandHeader({
  rightText,
  ctaHref,
  ctaText,
  variant = "web",
}: BrandHeaderProps) {
  const logoSrc = currentTheme.name === "ink" ? "assets/logo.svg" : "assets/logo-daylight.svg";

  return (
    <Row
      stackOnMobile={false}
      style={{
        alignItems: "center",
        justifyContent: "space-between",
        padding: variant === "print" ? [0, 0, 16, 0] : [24, 0],
        width: "100%",
        gap: 16,
        border: { bottom: `1px solid ${currentTheme.colors.border}` },
      }}
    >
      <Column style={{ width: 260 }}>
        <Image
          src={{ src: logoSrc, width: 320, height: 44 }}
          alt="Northwind Summit 2027"
          style={{ width: 200, height: 28 }}
        />
      </Column>

      {(rightText || (ctaHref && ctaText)) && (
        <Column style={{ alignItems: "end", gap: 6 }}>
          {rightText && (
            <Text
              style={{
                fontFamily: currentTheme.fonts.mono,
                fontSize: currentTheme.type.kicker,
                fontWeight: 500,
                color: currentTheme.colors.textMuted,
                letterSpacing: 1.5,
                textTransform: "uppercase",
              }}
            >
              {rightText}
            </Text>
          )}
          {ctaHref && ctaText && (
            <Link
              href={ctaHref}
              style={{
                fontSize: currentTheme.type.small,
                fontWeight: 600,
                color: currentTheme.colors.accent,
                textDecoration: "none",
                hover: {
                  textDecoration: "underline",
                },
              }}
            >
              {ctaText}
            </Link>
          )}
        </Column>
      )}
    </Row>
  );
}
