import { Column, Heading, Row, Text } from "@hyper-elements/react";
import { currentTheme } from "../tokens.js";
import { CtaButton } from "./CtaButton.js";

interface PriceCardProps {
  name: string;
  price: string;
  features: string[];
  badge?: string;
  highlighted?: boolean;
  ctaText?: string;
  ctaHref?: string;
}

export function PriceCard({
  name,
  price,
  features,
  badge,
  highlighted = false,
  ctaText = "Get ticket",
  ctaHref = "https://example.com/tickets",
}: PriceCardProps) {
  return (
    <Column
      style={{
        backgroundColor: highlighted ? currentTheme.colors.surfaceAlt : currentTheme.colors.surface,
        border: highlighted
          ? `1.5px solid ${currentTheme.colors.accent}`
          : `1px solid ${currentTheme.colors.border}`,
        borderRadius: currentTheme.radius,
        padding: 28,
        gap: 22,
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <Column style={{ gap: 14 }}>
        <Row stackOnMobile={false} style={{ justifyContent: "space-between", alignItems: "center" }}>
          <Text
            style={{
              fontFamily: currentTheme.fonts.mono,
              fontSize: 12,
              fontWeight: 700,
              color: currentTheme.colors.textMuted,
              textTransform: "uppercase",
              letterSpacing: 1.5,
            }}
          >
            {name}
          </Text>
          {badge && (
            <Column
              style={{
                backgroundColor: currentTheme.colors.accent,
                borderRadius: 4,
                padding: "3px 10px",
              }}
            >
              <Text
                style={{
                  fontFamily: currentTheme.fonts.mono,
                  fontSize: 10,
                  fontWeight: 800,
                  color: currentTheme.colors.accentText,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                {badge}
              </Text>
            </Column>
          )}
        </Row>

        <Heading
          level={2}
          style={{
            fontFamily: currentTheme.fonts.heading,
            fontSize: 48,
            fontWeight: 700,
            color: currentTheme.colors.text,
            lineHeight: 1,
          }}
        >
          {price}
        </Heading>

        <Column style={{ gap: 10, padding: [10, 0] }}>
          {features.map((feature, idx) => (
            <Row key={idx} stackOnMobile={false} style={{ gap: 10, alignItems: "start" }}>
              <Text
                style={{
                  fontFamily: currentTheme.fonts.mono,
                  color: currentTheme.colors.accent,
                  fontWeight: 700,
                  fontSize: 12,
                  padding: [2, 0, 0, 0],
                }}
              >
                +
              </Text>
              <Text
                style={{
                  fontSize: currentTheme.type.small,
                  color: currentTheme.colors.textMuted,
                  lineHeight: 1.45,
                }}
              >
                {feature}
              </Text>
            </Row>
          ))}
        </Column>
      </Column>

      <CtaButton
        href={ctaHref}
        variant={highlighted ? "accent" : "secondary"}
        fullWidth={true}
      >
        {ctaText}
      </CtaButton>
    </Column>
  );
}
