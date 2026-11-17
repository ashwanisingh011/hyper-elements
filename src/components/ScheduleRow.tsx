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
        padding: [20, 24],
        alignItems: "center",
        justifyContent: "space-between",
        border: isLast ? undefined : { bottom: `1px solid ${currentTheme.colors.border}` },
        gap: 16,
        width: "100%",
      }}
    >
      {/* Time in mono */}
      <Column style={{ width: 80, flex: "none" }}>
        <Text
          style={{
            fontFamily: currentTheme.fonts.mono,
            fontSize: 14,
            fontWeight: 500,
            color: currentTheme.colors.textMuted,
            letterSpacing: 0.5,
          }}
        >
          {time}
        </Text>
      </Column>

      {/* Title in serif 20px */}
      <Column style={{ flex: 1, gap: 2 }}>
        <Text
          style={{
            fontFamily: currentTheme.fonts.display,
            fontSize: 20,
            fontWeight: 500,
            color: currentTheme.colors.text,
            lineHeight: 1.3,
          }}
        >
          {title}
        </Text>
      </Column>

      {/* Speaker in muted Inter */}
      <Column style={{ width: 180, alignItems: "end", flex: "none" }}>
        <Text
          style={{
            fontFamily: currentTheme.fonts.body,
            fontSize: currentTheme.type.small,
            fontWeight: 400,
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
