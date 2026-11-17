import { Column, Divider, Span, Text } from "@hyper-elements/react";
import { currentTheme } from "../tokens.js";

interface FooterProps {
  venueAddress?: string;
  variant?: "web" | "email" | "print";
}

export function Footer({
  venueAddress = "The Foundry, 42 Harbor Street, Lisbon, Portugal",
  variant = "web",
}: FooterProps) {
  return (
    <Column
      style={{
        width: "100%",
        padding: variant === "email" ? [24, 0] : [48, 0],
        gap: 16,
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Divider
        style={{
          borderTop: `1px solid ${currentTheme.colors.border}`,
          width: "100%",
        }}
      />

      <Column style={{ gap: 8, alignItems: "center" }}>
        <Text
          style={{
            fontFamily: currentTheme.fonts.mono,
            fontSize: 11,
            fontWeight: 500,
            color: currentTheme.colors.textMuted,
            letterSpacing: 1.5,
            textTransform: "uppercase",
          }}
        >
          Northwind Summit 2027
        </Text>

        <Text
          style={{
            fontSize: currentTheme.type.small,
            color: currentTheme.colors.textMuted,
          }}
        >
          {venueAddress}
        </Text>

        <Text
          style={{
            fontSize: 12,
            color: currentTheme.colors.textMuted,
            lineHeight: 1.5,
          }}
        >
          © 2027 Northwind Summit. Built with{" "}
          <Span
            style={{
              color: currentTheme.colors.accent,
              fontWeight: 600,
            }}
          >
            Hyper Elements
          </Span>
          .
        </Text>

        {variant === "email" && (
          <Text
            style={{
              fontSize: 11,
              color: currentTheme.colors.textMuted,
            }}
          >
            Official delegate dispatch for registered participants. To transfer your registration, contact pass@northwind.example.
          </Text>
        )}
      </Column>
    </Column>
  );
}
