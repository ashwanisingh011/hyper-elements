import { Column, Heading, Image, Row, Text } from "@hyper-elements/react";
import { currentTheme } from "../tokens.js";

interface SpeakerCardProps {
  id?: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export function SpeakerCard({ id, name, role, company, avatar }: SpeakerCardProps) {
  const indexStr = id ? `[${id.replace("speaker-", "0")}]` : "";

  return (
    <Column
      style={{
        backgroundColor: currentTheme.colors.surface,
        border: `1px solid ${currentTheme.colors.border}`,
        borderRadius: currentTheme.radius,
        padding: 24,
        gap: 16,
        alignItems: "start",
        flex: 1,
      }}
    >
      <Row stackOnMobile={false} style={{ width: "100%", justifyContent: "space-between", alignItems: "center" }}>
        <Image
          src={{ src: avatar, width: 200, height: 200 }}
          alt={name}
          style={{
            width: 72,
            height: 72,
            borderRadius: 4,
            border: `1px solid ${currentTheme.colors.border}`,
          }}
        />
        {indexStr && (
          <Text
            style={{
              fontFamily: currentTheme.fonts.mono,
              fontSize: 11,
              fontWeight: 700,
              color: currentTheme.colors.accent,
            }}
          >
            {indexStr}
          </Text>
        )}
      </Row>

      <Column style={{ gap: 4, width: "100%" }}>
        <Heading
          level={3}
          style={{
            fontFamily: currentTheme.fonts.heading,
            fontSize: currentTheme.type.h3,
            fontWeight: 600,
            color: currentTheme.colors.text,
            lineHeight: 1.2,
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
