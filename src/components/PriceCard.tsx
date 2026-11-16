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
          ? `2px solid ${currentTheme.colors.accent}`
          : `1px solid ${currentTheme.colors.border}`,
        borderRadius: currentTheme.radius,
        padding: 32,
        gap: 20,
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <Column style={{ gap: 12 }}>
        <Row stackOnMobile={false} style={{ justifyContent: "space-between", alignItems: "center" }}>
          <Text
            style={{
              fontSize: currentTheme.type.body,
              fontWeight: 700,
              color: currentTheme.colors.text,
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
                borderRadius: 20,
                padding: "4px 12px",
              }}
            >
              <Text
                style={{
                  fontSize: 11,
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
            fontSize: 44,
            fontWeight: 800,
            color: currentTheme.colors.text,
            lineHeight: 1.1,
          }}
        >
          {price}
        </Heading>

        <Column style={{ gap: 10, padding: [12, 0] }}>
          {features.map((feature, idx) => (
            <Row key={idx} stackOnMobile={false} style={{ gap: 10, alignItems: "center" }}>
              <Text style={{ color: currentTheme.colors.accent, fontWeight: 800, fontSize: 14 }}>
                ✓
              </Text>
              <Text
                style={{
                  fontSize: currentTheme.type.small,
                  color: currentTheme.colors.textMuted,
                  lineHeight: 1.4,
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
        variant={highlighted ? "primary" : "secondary"}
        fullWidth={true}
      >
        {ctaText}
      </CtaButton>
    </Column>
  );
}
