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
        gap: 10,
        alignItems: isCentered ? "center" : "start",
        textAlign: isCentered ? "center" : "left",
        width: "100%",
        padding: [0, 0, 24, 0],
      }}
    >
      <Text
        style={{
          fontSize: currentTheme.type.small,
          fontWeight: 700,
          color: currentTheme.colors.accent,
          letterSpacing: 2,
          textTransform: "uppercase",
        }}
      >
        {eyebrow}
      </Text>
      <Heading
        level={2}
        style={{
          fontSize: currentTheme.type.h2,
          lineHeight: 1.2,
          fontWeight: 800,
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
            lineHeight: 1.5,
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
