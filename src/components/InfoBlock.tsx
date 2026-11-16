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
    <Column style={{ gap: 3 }}>
      <Text
        style={{
          fontFamily: currentTheme.fonts.mono,
          fontSize: 10,
          fontWeight: 700,
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
          fontWeight: 700,
          fontFamily: valueMono ? currentTheme.fonts.mono : undefined,
          color: accentValue ? currentTheme.colors.accent : currentTheme.colors.text,
          lineHeight: 1.3,
        }}
      >
        {value}
      </Text>
    </Column>
  );
}
