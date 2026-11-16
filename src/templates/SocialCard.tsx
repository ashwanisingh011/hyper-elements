import { Canvas, Column, Heading, Image, Row, Text } from "@hyper-elements/react";
import { eventData } from "../data.js";
import { currentTheme } from "../tokens.js";

export function SocialCard() {
  const logoSrc = currentTheme.name === "daylight" ? "assets/logo-daylight.svg" : "assets/logo.svg";

  return (
    <Canvas
      width={1200}
      height={630}
      title={`${eventData.name} — Social Card`}
      style={{
        backgroundColor: currentTheme.colors.bg,
        color: currentTheme.colors.text,
        fontFamily: currentTheme.fonts.heading,
        padding: 64,
        justifyContent: "space-between",
      }}
    >
      {/* Top Bar: Brand Logo & Dates Pill */}
      <Row stackOnMobile={false} style={{ justifyContent: "space-between", alignItems: "center", width: "100%" }}>
        <Image
          src={{ src: logoSrc, width: 280, height: 48 }}
          alt={eventData.name}
          style={{ width: 240, height: 41 }}
        />

        <Column
          style={{
            backgroundColor: currentTheme.colors.surfaceAlt,
            border: `1px solid ${currentTheme.colors.border}`,
            borderRadius: 24,
            padding: "8px 20px",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: 800,
              color: currentTheme.colors.accent,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            LISBON · MARCH 18–19, 2027
          </Text>
        </Column>
      </Row>

      {/* Center Body: Headline and Tagline */}
      <Column style={{ gap: 24, maxWidth: 1040 }}>
        <Column
          style={{
            width: 80,
            height: 4,
            backgroundColor: currentTheme.colors.accent,
            borderRadius: 2,
          }}
        />

        <Heading
          level={1}
          style={{
            fontSize: 68,
            fontWeight: 900,
            lineHeight: 1.05,
            color: currentTheme.colors.text,
            letterSpacing: -1.5,
          }}
        >
          Building the next decade of software.
        </Heading>

        <Text
          style={{
            fontSize: 24,
            lineHeight: 1.4,
            color: currentTheme.colors.textMuted,
            maxWidth: 820,
          }}
        >
          Two days. One stage. 40 industry-defining keynotes, deep architectural breakdowns, and 2,000 engineers in Lisbon.
        </Text>
      </Column>

      {/* Bottom Bar: Stats Pill & URL */}
      <Row
        stackOnMobile={false}
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          border: { top: `1px solid ${currentTheme.colors.border}` },
          padding: [24, 0, 0, 0],
        }}
      >
        <Row stackOnMobile={false} style={{ gap: 32, alignItems: "center" }}>
          <Text style={{ fontSize: 16, fontWeight: 700, color: currentTheme.colors.accent }}>
            2,000 ATTENDEES
          </Text>
          <Text style={{ fontSize: 16, fontWeight: 700, color: currentTheme.colors.textMuted }}>
            •
          </Text>
          <Text style={{ fontSize: 16, fontWeight: 700, color: currentTheme.colors.accent }}>
            40 SPEAKERS
          </Text>
          <Text style={{ fontSize: 16, fontWeight: 700, color: currentTheme.colors.textMuted }}>
            •
          </Text>
          <Text style={{ fontSize: 16, fontWeight: 700, color: currentTheme.colors.accent }}>
            3 STAGES
          </Text>
        </Row>

        <Text
          style={{
            fontSize: 16,
            fontWeight: 800,
            color: currentTheme.colors.text,
            letterSpacing: 1,
            fontFamily: currentTheme.fonts.mono,
          }}
        >
          northwind.example/2027
        </Text>
      </Row>
    </Canvas>
  );
}
