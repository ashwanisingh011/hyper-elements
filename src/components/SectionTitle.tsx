import { Column, Divider, Heading, Row, Text } from "@hyper-elements/react";
import { currentTheme } from "../tokens.js";

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionTitleProps) {
  const isCentered = align === "center";

  return (
    <Column
      style={{
        gap: 12,
        alignItems: isCentered ? "center" : "start",
        textAlign: isCentered ? "center" : "left",
        width: "100%",
        padding: [0, 0, 8, 0],
      }}
    >
      {/* Numbered eyebrow with extending hairline rule */}
      <Row
        stackOnMobile={false}
        style={{
          gap: 16,
          alignItems: "center",
          width: "100%",
        }}
      >
        <Text
          style={{
            fontFamily: currentTheme.fonts.mono,
            fontSize: currentTheme.type.kicker,
            fontWeight: 500,
            color: currentTheme.colors.accent,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            flex: "none",
          }}
        >
          {eyebrow}
        </Text>
        <Column style={{ flex: 1 }}>
          <Divider
            style={{
              borderTop: `1px solid ${currentTheme.colors.border}`,
              width: "100%",
            }}
          />
        </Column>
      </Row>

      <Heading
        level={2}
        style={{
          fontFamily: currentTheme.fonts.display,
          fontSize: currentTheme.type.h2,
          lineHeight: 1.1,
          fontWeight: 500,
          letterSpacing: -0.5,
          color: currentTheme.colors.text,
          mobile: {
            fontSize: currentTheme.type.h2Mobile,
          },
        }}
      >
        {title}
      </Heading>
      {subtitle && (
        <Text
          style={{
            fontFamily: currentTheme.fonts.body,
            fontSize: currentTheme.type.body,
            lineHeight: 1.6,
            color: currentTheme.colors.textMuted,
            maxWidth: 640,
          }}
        >
          {subtitle}
        </Text>
      )}
    </Column>
  );
}
