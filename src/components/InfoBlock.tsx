import { Column, Text } from "@hyper-elements/react";
import { currentTheme } from "../tokens.js";

interface InfoBlockProps {
  label: string;
  value: string;
  accentValue?: boolean;
  valueMono?: boolean;
}

export function InfoBlock({
  label,
  value,
  accentValue = false,
  valueMono = false,
}: InfoBlockProps) {
  return (
    <Column style={{ gap: 4 }}>
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
        {label}
      </Text>
      <Text
        style={{
          fontSize: currentTheme.type.body,
          fontWeight: 600,
          fontFamily: valueMono ? currentTheme.fonts.mono : currentTheme.fonts.body,
          color: accentValue ? currentTheme.colors.accent : currentTheme.colors.text,
          lineHeight: 1.3,
        }}
      >
        {value}
      </Text>
    </Column>
  );
}
