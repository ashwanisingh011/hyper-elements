import { Column, Heading, Text } from "@hyper-elements/react";
import { currentTheme } from "../tokens.js";

interface FaqItemProps {
  question: string;
  answer: string;
  isLast?: boolean;
}

export function FaqItem({ question, answer, isLast = false }: FaqItemProps) {
  return (
    <Column
      style={{
        padding: [20, 24],
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
          fontSize: currentTheme.type.body,
          fontWeight: 700,
          color: currentTheme.colors.text,
          lineHeight: 1.4,
        }}
      >
        {question}
      </Heading>
      <Text
        style={{
          fontSize: currentTheme.type.small,
          color: currentTheme.colors.textMuted,
          lineHeight: 1.5,
        }}
      >
        {answer}
      </Text>
    </Column>
  );
}
