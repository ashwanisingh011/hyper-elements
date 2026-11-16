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
      <Column style={{ width: 250 }}>
        <Image
          src={{ src: logoSrc, width: 320, height: 44 }}
          alt="Northwind Summit 2027"
          style={{ width: 220, height: 30 }}
        />
      </Column>

      {(rightText || (ctaHref && ctaText)) && (
        <Column style={{ alignItems: "end", gap: 4 }}>
          {rightText && (
            <Text
              style={{
                fontFamily: currentTheme.fonts.mono,
                fontSize: 11,
                color: currentTheme.colors.accent,
                fontWeight: 700,
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
                fontSize: 12,
                fontWeight: 700,
                color: currentTheme.colors.text,
                textDecoration: "underline",
                hover: {
                  color: currentTheme.colors.accent,
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
