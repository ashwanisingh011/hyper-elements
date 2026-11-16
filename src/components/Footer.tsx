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
        gap: 20,
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
            fontSize: currentTheme.type.small,
            fontWeight: 600,
            color: currentTheme.colors.text,
          }}
        >
          Northwind Summit 2027 · {venueAddress}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: currentTheme.colors.textMuted,
            lineHeight: 1.5,
          }}
        >
          © 2027 Northwind Summit. All rights reserved. Built with{" "}
          <Span
            style={{
              color: currentTheme.colors.accent,
              fontWeight: 700,
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
            You received this email because you registered at northwind.example. Unsubscribe link placeholder.
          </Text>
        )}
      </Column>
    </Column>
  );
}
