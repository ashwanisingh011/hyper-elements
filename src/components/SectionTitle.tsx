import { Column, Heading, Text } from "@hyper-elements/react";
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
        gap: 8,
        alignItems: isCentered ? "center" : "start",
        textAlign: isCentered ? "center" : "left",
        width: "100%",
        padding: [0, 0, 24, 0],
      }}
    >
      <Text
        style={{
          fontFamily: currentTheme.fonts.mono,
          fontSize: currentTheme.type.kicker,
          fontWeight: 700,
          color: currentTheme.colors.accent,
          letterSpacing: 2,
          textTransform: "uppercase",
        }}
      >
        // {eyebrow}
      </Text>
      <Heading
        level={2}
        style={{
          fontFamily: currentTheme.fonts.heading,
          fontSize: currentTheme.type.h2,
          lineHeight: 1.15,
          fontWeight: 600,
          letterSpacing: -0.5,
          color: currentTheme.colors.text,
          mobile: {
            fontSize: 28,
          },
        }}
      >
        {title}
      </Heading>
      {subtitle && (
        <Text
          style={{
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
