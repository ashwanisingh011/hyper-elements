import { Column, Row, Text } from "@hyper-elements/react";
import { currentTheme } from "../tokens.js";

interface ScheduleRowProps {
  time: string;
  title: string;
  speaker: string;
  isLast?: boolean;
}

export function ScheduleRow({ time, title, speaker, isLast = false }: ScheduleRowProps) {
  return (
    <Row
      stackOnMobile={true}
      style={{
        padding: [18, 20],
        alignItems: "center",
        justifyContent: "space-between",
        border: isLast ? undefined : { bottom: `1px solid ${currentTheme.colors.border}` },
        gap: 16,
        width: "100%",
      }}
    >
      <Column style={{ width: 100, flex: "none" }}>
        <Text
          style={{
            fontFamily: currentTheme.fonts.mono,
            fontSize: currentTheme.type.body,
            fontWeight: 700,
            color: currentTheme.colors.accent,
          }}
        >
          {time}
        </Text>
      </Column>

      <Column style={{ flex: 1, gap: 4 }}>
        <Text
          style={{
            fontSize: currentTheme.type.body,
            fontWeight: 700,
            color: currentTheme.colors.text,
          }}
        >
          {title}
        </Text>
      </Column>

      <Column style={{ width: 180, alignItems: "end", flex: "none" }}>
        <Text
          style={{
            fontSize: currentTheme.type.small,
            fontWeight: 500,
            color: currentTheme.colors.textMuted,
            fontStyle: speaker === "n/a" ? "italic" : "normal",
          }}
        >
          {speaker}
        </Text>
      </Column>
    </Row>
  );
}
