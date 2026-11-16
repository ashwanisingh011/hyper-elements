import { Column, Heading, Image, Text } from "@hyper-elements/react";
import { currentTheme } from "../tokens.js";

interface SpeakerCardProps {
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export function SpeakerCard({ name, role, company, avatar }: SpeakerCardProps) {
  return (
    <Column
      style={{
        backgroundColor: currentTheme.colors.surface,
        border: `1px solid ${currentTheme.colors.border}`,
        borderRadius: currentTheme.radius,
        padding: 24,
        gap: 16,
        alignItems: "center",
        textAlign: "center",
        flex: 1,
      }}
    >
      <Image
        src={{ src: avatar, width: 200, height: 200 }}
        alt={name}
        style={{
          width: 96,
          height: 96,
          borderRadius: 48,
          border: `2px solid ${currentTheme.colors.border}`,
        }}
      />
      <Column style={{ gap: 4, alignItems: "center" }}>
        <Heading
          level={3}
          style={{
            fontSize: currentTheme.type.h3,
            fontWeight: 700,
            color: currentTheme.colors.text,
          }}
        >
          {name}
        </Heading>
        <Text
          style={{
            fontSize: currentTheme.type.small,
            fontWeight: 600,
            color: currentTheme.colors.accent,
          }}
        >
          {role}
        </Text>
        <Text
          style={{
            fontSize: currentTheme.type.small,
            color: currentTheme.colors.textMuted,
          }}
        >
          {company}
        </Text>
      </Column>
    </Column>
  );
}
