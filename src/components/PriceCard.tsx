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
        backgroundColor: currentTheme.colors.surface,
        border: highlighted
          ? `2px solid ${currentTheme.colors.accent}`
          : `1px solid ${currentTheme.colors.border}`,
        borderRadius: currentTheme.radius,
        padding: 32,
        gap: 24,
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <Column style={{ gap: 16 }}>
        {/* Tier name + badge */}
        <Row stackOnMobile={false} style={{ justifyContent: "space-between", alignItems: "center" }}>
          <Text
            style={{
              fontFamily: currentTheme.fonts.mono,
              fontSize: currentTheme.type.kicker,
              fontWeight: 500,
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
                backgroundColor: currentTheme.colors.accentSoft,
                borderRadius: 6,
                padding: "4px 10px",
              }}
            >
              <Text
                style={{
                  fontFamily: currentTheme.fonts.mono,
                  fontSize: 10,
                  fontWeight: 600,
                  color: currentTheme.colors.accent,
                  letterSpacing: 0.8,
                  textTransform: "uppercase",
                }}
              >
                {badge}
              </Text>
            </Column>
          )}
        </Row>

        {/* Big serif price numeral */}
        <Heading
          level={2}
          style={{
            fontFamily: currentTheme.fonts.display,
            fontSize: 48,
            fontWeight: 500,
            color: currentTheme.colors.text,
            lineHeight: 1,
            letterSpacing: -1,
          }}
        >
          {price}
        </Heading>

        {/* Feature list */}
        <Column style={{ gap: 10, padding: [8, 0] }}>
          {features.map((feature, idx) => (
            <Row key={idx} stackOnMobile={false} style={{ gap: 10, alignItems: "start" }}>
              <Text
                style={{
                  color: currentTheme.colors.accent,
                  fontWeight: 500,
                  fontSize: 14,
                  padding: [1, 0, 0, 0],
                  flex: "none",
                }}
              >
                —
              </Text>
              <Text
                style={{
                  fontSize: currentTheme.type.small,
                  color: currentTheme.colors.textMuted,
                  lineHeight: 1.5,
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
