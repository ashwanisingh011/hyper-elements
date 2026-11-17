import { Column, Heading, Image, Text } from "@hyper-elements/react";
import { currentTheme } from "../tokens.js";

interface SpeakerCardProps {
  id?: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export function SpeakerCard({ id, name, role, company, avatar }: SpeakerCardProps) {
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
      {/* Circle avatar with 1px ink ring */}
      <Column
        style={{
          width: 80,
          height: 80,
          borderRadius: 40,
          border: `1px solid ${currentTheme.colors.text}`,
          overflow: "hidden",
          alignItems: "center",
        }}
      >
        <Image
          src={{ src: avatar, width: 200, height: 200 }}
          alt={name}
          style={{
            width: 78,
            height: 78,
            borderRadius: 39,
          }}
        />
      </Column>

      <Column style={{ gap: 4, width: "100%", alignItems: "center" }}>
        <Heading
          level={3}
          style={{
            fontFamily: currentTheme.fonts.display,
            fontSize: 20,
            fontWeight: 500,
            color: currentTheme.colors.text,
            lineHeight: 1.2,
          }}
        >
          {name}
        </Heading>
        <Text
          style={{
            fontFamily: currentTheme.fonts.mono,
            fontSize: 11,
            fontWeight: 500,
            color: currentTheme.colors.textMuted,
            letterSpacing: 1,
            textTransform: "uppercase",
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
