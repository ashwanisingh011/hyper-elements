import { Canvas, Column, Heading, Row, Text } from "@hyper-elements/react";
import { eventData } from "../data.js";
import { currentTheme } from "../tokens.js";

export function SocialCard() {
  const t = currentTheme;
  const c = t.colors;

  return (
    <Canvas
      width={1200}
      height={630}
      title={`${eventData.name} — March 2027, Lisbon`}
      style={{
        backgroundColor: c.bg,
        color: c.text,
        fontFamily: t.fonts.body,
        padding: [56, 64],
        justifyContent: "space-between",
      }}
    >
      {/* 1. Top: mono date line */}
      <Row stackOnMobile={false} style={{ justifyContent: "space-between", alignItems: "center", width: "100%" }}>
        <Text
          style={{
            fontFamily: t.fonts.mono,
            fontSize: 13,
            fontWeight: 500,
            color: c.textMuted,
            letterSpacing: 1.5,
            textTransform: "uppercase",
          }}
        >
          Lisbon / March 18–19, 2027
        </Text>

        <Text
          style={{
            fontFamily: t.fonts.mono,
            fontSize: 13,
            fontWeight: 500,
            color: c.textMuted,
            letterSpacing: 1.5,
            textTransform: "uppercase",
          }}
        >
          The Foundry
        </Text>
      </Row>

      {/* 2. Huge serif title with accent underline */}
      <Column style={{ gap: 20, maxWidth: 1000 }}>
        <Heading
          level={1}
          style={{
            fontFamily: t.fonts.display,
            fontSize: 80,
            fontWeight: 500,
            lineHeight: 1.02,
            letterSpacing: -2,
            color: c.text,
          }}
        >
          Building the next decade of software.
        </Heading>

        {/* Accent underline bar */}
        <Column
          style={{
            width: 64,
            height: 4,
            backgroundColor: c.accent,
            borderRadius: 2,
          }}
        />

        <Text
          style={{
            fontSize: 20,
            lineHeight: 1.5,
            color: c.textMuted,
            maxWidth: 760,
          }}
        >
          {eventData.tagline}
        </Text>
      </Column>

      {/* 3. Bottom strip: stats + accent pill */}
      <Row
        stackOnMobile={false}
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          border: { top: `1px solid ${c.border}` },
          padding: [20, 0, 0, 0],
        }}
      >
        <Row stackOnMobile={false} style={{ gap: 32, alignItems: "center" }}>
          {eventData.stats.map((stat, i) => (
            <Row key={i} stackOnMobile={false} style={{ gap: 8, alignItems: "center" }}>
              <Text
                style={{
                  fontFamily: t.fonts.display,
                  fontSize: 24,
                  fontWeight: 500,
                  color: c.text,
                  letterSpacing: -0.5,
                }}
              >
                {stat.value}
              </Text>
              <Text
                style={{
                  fontFamily: t.fonts.mono,
                  fontSize: 11,
                  fontWeight: 500,
                  color: c.textMuted,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </Text>
            </Row>
          ))}
        </Row>

        <Column
          style={{
            backgroundColor: c.accent,
            borderRadius: 6,
            padding: "8px 16px",
          }}
        >
          <Text
            style={{
              fontFamily: t.fonts.mono,
              fontSize: 12,
              fontWeight: 600,
              color: c.accentText,
              letterSpacing: 0.8,
              textTransform: "uppercase",
            }}
          >
            Northwind Summit
          </Text>
        </Column>
      </Row>
    </Canvas>
  );
}
