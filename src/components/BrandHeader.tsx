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
  const logoSrc = currentTheme.name === "daylight" ? "assets/logo-daylight.svg" : "assets/logo.svg";

  return (
    <Row
      stackOnMobile={false}
      style={{
        alignItems: "center",
        justifyContent: "space-between",
        padding: variant === "print" ? [0, 0, 16, 0] : [20, 0],
        width: "100%",
        gap: 16,
      }}
    >
      <Column style={{ width: 220 }}>
        <Image
          src={{ src: logoSrc, width: 280, height: 48 }}
          alt="Northwind Summit 2027"
          style={{ width: 200, height: 34 }}
        />
      </Column>

      {(rightText || (ctaHref && ctaText)) && (
        <Column style={{ alignItems: "end", gap: 6 }}>
          {rightText && (
            <Text
              style={{
                fontSize: currentTheme.type.small,
                color: currentTheme.colors.textMuted,
                fontWeight: 600,
                letterSpacing: 1,
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
                fontWeight: 700,
                color: currentTheme.colors.accent,
                textDecoration: "none",
                hover: {
                  color: currentTheme.colors.primary,
                  textDecoration: "underline",
                },
              }}
            >
              {ctaText} →
            </Link>
          )}
        </Column>
      )}
    </Row>
  );
}
