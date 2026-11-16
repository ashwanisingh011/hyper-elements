import { Canvas, Column, Heading, Image, Row, Text } from "@hyper-elements/react";
import { eventData } from "../data.js";
import { currentTheme } from "../tokens.js";

export function SocialCard() {
  const isMidnight = currentTheme.name === "midnight";
  const bg = currentTheme.colors.bg;
  const surface = currentTheme.colors.surface;
  const text = currentTheme.colors.text;
  const muted = currentTheme.colors.textMuted;
  const border = currentTheme.colors.border;
  const accent = currentTheme.colors.accent;
  const logoSrc = isMidnight ? "assets/logo.svg" : "assets/logo-daylight.svg";

  return (
    <Canvas
      width={1200}
      height={630}
      title={`${eventData.name} — Official Social Card`}
      style={{
        backgroundColor: bg,
        color: text,
        fontFamily: currentTheme.fonts.body,
        padding: [48, 56],
        justifyContent: "space-between",
      }}
    >
      {/* 1. Header Bar: Logo & Lisbon Coordinates Pill */}
      <Row stackOnMobile={false} style={{ justifyContent: "space-between", alignItems: "center", width: "100%" }}>
        <Image
          src={{ src: logoSrc, width: 320, height: 44 }}
          alt={eventData.name}
          style={{ width: 260, height: 36 }}
        />

        <Column
          style={{
            backgroundColor: surface,
            border: `1px solid ${border}`,
            borderRadius: 4,
            padding: "8px 16px",
          }}
        >
          <Text
            style={{
              fontFamily: currentTheme.fonts.mono,
              fontSize: 12,
              fontWeight: 700,
              color: accent,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            38°42'N 9°08'W · LISBON
          </Text>
        </Column>
      </Row>

      {/* 2. Main Center Poster Composition */}
      <Column style={{ gap: 20, maxWidth: 1040 }}>
        {/* Technical Accent Rule */}
        <Row stackOnMobile={false} style={{ gap: 12, alignItems: "center" }}>
          <Column
            style={{
              width: 36,
              height: 3,
              backgroundColor: accent,
            }}
          />
          <Text
            style={{
              fontFamily: currentTheme.fonts.mono,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 2,
              color: accent,
              textTransform: "uppercase",
            }}
          >
            GLOBAL ENGINEERING SUMMIT // MARCH 18–19, 2027
          </Text>
        </Row>

        <Heading
          level={1}
          style={{
            fontFamily: currentTheme.fonts.heading,
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: -1.5,
            color: text,
          }}
        >
          Building the next decade of software.
        </Heading>

        <Text
          style={{
            fontSize: 22,
            lineHeight: 1.45,
            color: muted,
            maxWidth: 860,
          }}
        >
          Two days on the Lisbon waterfront. Forty architectural breakdowns, two thousand engineers, and one stage at The Foundry.
        </Text>
      </Column>

      {/* 3. Bottom Strip: Speaker Lineup & Monospace Stats */}
      <Column style={{ gap: 14, width: "100%" }}>
        <Row
          stackOnMobile={false}
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            border: { top: `1px solid ${border}` },
            padding: [20, 0, 0, 0],
          }}
        >
          <Row stackOnMobile={false} style={{ gap: 28, alignItems: "center" }}>
            <Text style={{ fontFamily: currentTheme.fonts.mono, fontSize: 13, fontWeight: 700, color: text }}>
              [01] MAYA OKONKWO
            </Text>
            <Text style={{ fontFamily: currentTheme.fonts.mono, fontSize: 13, fontWeight: 700, color: muted }}>
              /
            </Text>
            <Text style={{ fontFamily: currentTheme.fonts.mono, fontSize: 13, fontWeight: 700, color: text }}>
              [02] DANIEL REYES
            </Text>
            <Text style={{ fontFamily: currentTheme.fonts.mono, fontSize: 13, fontWeight: 700, color: muted }}>
              /
            </Text>
            <Text style={{ fontFamily: currentTheme.fonts.mono, fontSize: 13, fontWeight: 700, color: text }}>
              [03] PRIYA NAIR
            </Text>
            <Text style={{ fontFamily: currentTheme.fonts.mono, fontSize: 13, fontWeight: 700, color: muted }}>
              /
            </Text>
            <Text style={{ fontFamily: currentTheme.fonts.mono, fontSize: 13, fontWeight: 700, color: text }}>
              [04] JONAS LINDQVIST
            </Text>
          </Row>

          <Column
            style={{
              backgroundColor: accent,
              borderRadius: 4,
              padding: "6px 14px",
            }}
          >
            <Text
              style={{
                fontFamily: currentTheme.fonts.mono,
                fontSize: 12,
                fontWeight: 800,
                color: currentTheme.colors.accentText,
                letterSpacing: 1,
              }}
            >
              2,000 SEATS // THE FOUNDRY
            </Text>
          </Column>
        </Row>
      </Column>
    </Canvas>
  );
}
