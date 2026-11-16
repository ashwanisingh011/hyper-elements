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
        padding: [22, 24],
        backgroundColor: currentTheme.colors.surface,
        border: `1px solid ${currentTheme.colors.border}`,
        borderRadius: currentTheme.radius,
        gap: 8,
        width: "100%",
      }}
    >
      <Heading
        level={4}
        style={{
          fontFamily: currentTheme.fonts.heading,
          fontSize: 20,
          fontWeight: 600,
          color: currentTheme.colors.text,
          lineHeight: 1.3,
        }}
      >
        {question}
      </Heading>
      <Text
        style={{
          fontSize: currentTheme.type.small,
          color: currentTheme.colors.textMuted,
          lineHeight: 1.6,
        }}
      >
        {answer}
      </Text>
    </Column>
  );
}
