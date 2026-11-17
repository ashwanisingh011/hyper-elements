import { Column, Heading, Text } from "@hyper-elements/react";
import { currentTheme } from "../tokens.js";

interface FaqItemProps {
  question: string;
  answer: string;
  isLast?: boolean;
}

export function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <Column
      style={{
        padding: [24, 0],
        border: { bottom: `1px solid ${currentTheme.colors.border}` },
        gap: 8,
        width: "100%",
      }}
    >
      <Heading
        level={4}
        style={{
          fontFamily: currentTheme.fonts.display,
          fontSize: 20,
          fontWeight: 500,
          color: currentTheme.colors.text,
          lineHeight: 1.3,
        }}
      >
        {question}
      </Heading>
      <Text
        style={{
          fontSize: currentTheme.type.body,
          color: currentTheme.colors.textMuted,
          lineHeight: 1.6,
        }}
      >
        {answer}
      </Text>
    </Column>
  );
}
