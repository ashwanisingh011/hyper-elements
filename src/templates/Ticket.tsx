import { Column, Document, Heading, Image, Row, Text } from "@hyper-elements/react";
import { eventData, sampleAttendee } from "../data.js";
import { currentTheme } from "../tokens.js";

export function Ticket() {
  const isMidnight = currentTheme.name === "midnight";
  const bg = isMidnight ? "#080B11" : "#FFFFFF";
  const surface = isMidnight ? "#0F1422" : "#F7F5F0";
  const text = isMidnight ? "#F0F4FC" : "#111318";
  const muted = isMidnight ? "#8391A8" : "#6B675E";
  const border = isMidnight ? "#1E2740" : "#D8D2C5";
  const accent = currentTheme.colors.accent;

  return (
    <Document
      size="A5"
      orientation="landscape"
      margin={{ top: 12, right: 12, bottom: 12, left: 12 }}
      title={`Ticket: ${sampleAttendee.name} — ${eventData.name}`}
      style={{
        backgroundColor: bg,
        color: text,
        fontFamily: currentTheme.fonts.body,
      }}
    >
      <Document.Page
        style={{
          backgroundColor: bg,
        }}
      >
        {/* Ticket Outer Container: 210mm x 99mm DL proportion */}
        <Row
          stackOnMobile={false}
          style={{
            border: `1.5px solid ${border}`,
            borderRadius: 8,
            backgroundColor: surface,
            overflow: "hidden",
            width: "100%",
            height: 340,
          }}
        >
          {/* 1. Left Color Accent Spine / Lanyard Binding */}
          <Column
            style={{
              width: 14,
              backgroundColor: accent,
            }}
          />

          {/* 2. Main Ticket Body */}
          <Column
            style={{
              flex: 1,
              padding: [20, 24],
              gap: 14,
              justifyContent: "space-between",
            }}
          >
            {/* Header / Brand & Coordinate Tag */}
            <Row stackOnMobile={false} style={{ justifyContent: "space-between", alignItems: "center" }}>
              <Column style={{ gap: 2 }}>
                <Row stackOnMobile={false} style={{ gap: 10, alignItems: "center" }}>
                  <Text
                    style={{
                      fontFamily: currentTheme.fonts.heading,
                      fontSize: 22,
                      fontWeight: 700,
                      letterSpacing: 2,
                      color: text,
                    }}
                  >
                    NORTHWIND
                  </Text>
                  <Text
                    style={{
                      fontFamily: currentTheme.fonts.mono,
                      fontSize: 10,
                      fontWeight: 700,
                      color: accent,
                      letterSpacing: 1.5,
                    }}
                  >
                    // 2027
                  </Text>
                </Row>
                <Text
                  style={{
                    fontFamily: currentTheme.fonts.mono,
                    fontSize: 9,
                    color: muted,
                    letterSpacing: 1,
                  }}
                >
                  OFFICIAL ACCESS PASS · 38°42'N 9°08'W
                </Text>
              </Column>

              {/* Status Badge */}
              <Column
                style={{
                  backgroundColor: isMidnight ? "#152011" : "#EAE6DC",
                  border: `1px solid ${accent}`,
                  borderRadius: 4,
                  padding: "4px 12px",
                  alignItems: "end",
                }}
              >
                <Text
                  style={{
                    fontFamily: currentTheme.fonts.mono,
                    fontSize: 11,
                    fontWeight: 800,
                    color: accent,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                  }}
                >
                  {sampleAttendee.tier} Access
                </Text>
                <Text
                  style={{
                    fontFamily: currentTheme.fonts.mono,
                    fontSize: 9,
                    color: muted,
                  }}
                >
                  ORDER #{sampleAttendee.orderNumber}
                </Text>
              </Column>
            </Row>

            {/* Attendee Name & Seat Block */}
            <Row stackOnMobile={false} style={{ justifyContent: "space-between", alignItems: "end" }}>
              <Column style={{ gap: 4 }}>
                <Text
                  style={{
                    fontFamily: currentTheme.fonts.mono,
                    fontSize: 9,
                    fontWeight: 700,
                    color: muted,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                  }}
                >
                  PASS HOLDER // DELEGATE
                </Text>
                <Heading
                  level={1}
                  style={{
                    fontFamily: currentTheme.fonts.heading,
                    fontSize: 30,
                    fontWeight: 700,
                    color: text,
                    lineHeight: 1.1,
                    letterSpacing: -0.5,
                  }}
                >
                  {sampleAttendee.name}
                </Heading>
              </Column>

              <Column style={{ alignItems: "end", gap: 2 }}>
                <Text
                  style={{
                    fontFamily: currentTheme.fonts.mono,
                    fontSize: 9,
                    fontWeight: 700,
                    color: muted,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                  }}
                >
                  ALLOCATED SEATING
                </Text>
                <Text
                  style={{
                    fontFamily: currentTheme.fonts.mono,
                    fontSize: 13,
                    fontWeight: 800,
                    color: accent,
                  }}
                >
                  {sampleAttendee.seat}
                </Text>
              </Column>
            </Row>

            {/* Technical Metadata Matrix */}
            <Row
              stackOnMobile={false}
              style={{
                backgroundColor: isMidnight ? "#080B11" : "#EFECE4",
                border: `1px solid ${border}`,
                borderRadius: 4,
                padding: "8px 14px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Column style={{ gap: 2 }}>
                <Text style={{ fontFamily: currentTheme.fonts.mono, fontSize: 8, fontWeight: 700, color: muted, textTransform: "uppercase" }}>
                  DATES
                </Text>
                <Text style={{ fontSize: 11, fontWeight: 700, color: text }}>
                  {eventData.dates}
                </Text>
              </Column>

              <Column style={{ gap: 2 }}>
                <Text style={{ fontFamily: currentTheme.fonts.mono, fontSize: 8, fontWeight: 700, color: muted, textTransform: "uppercase" }}>
                  DOORS
                </Text>
                <Text style={{ fontSize: 11, fontWeight: 700, color: text }}>
                  08:30 GMT · Start 09:30
                </Text>
              </Column>

              <Column style={{ gap: 2 }}>
                <Text style={{ fontFamily: currentTheme.fonts.mono, fontSize: 8, fontWeight: 700, color: muted, textTransform: "uppercase" }}>
                  VENUE
                </Text>
                <Text style={{ fontSize: 11, fontWeight: 700, color: text }}>
                  The Foundry, Lisbon
                </Text>
              </Column>
            </Row>

            {/* Bottom Barcode Strip & Notice */}
            <Row stackOnMobile={false} style={{ justifyContent: "space-between", alignItems: "center" }}>
              <Text style={{ fontSize: 8.5, color: muted, maxWidth: 360, lineHeight: 1.3 }}>
                Admit one. Grants access to all main-stage keynotes, technical workshops, and catering. Carry photo ID for badge printing.
              </Text>
              <Image
                src={{ src: "assets/barcode.svg", width: 240, height: 60 }}
                alt="Barcode"
                style={{ width: 140, height: 26 }}
              />
            </Row>
          </Column>

          {/* 3. Perforated Security Divider */}
          <Column
            style={{
              width: 1,
              border: { left: `2px dashed ${border}` },
            }}
          />

          {/* 4. Right Security Tear-Off Stub */}
          <Column
            style={{
              width: 155,
              backgroundColor: isMidnight ? "#080B11" : "#EFECE4",
              padding: [16, 14],
              alignItems: "center",
              justifyContent: "space-between",
              textAlign: "center",
            }}
          >
            <Column style={{ gap: 2, alignItems: "center" }}>
              <Text
                style={{
                  fontFamily: currentTheme.fonts.mono,
                  fontSize: 9,
                  fontWeight: 800,
                  color: text,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                }}
              >
                GATE SCAN // 01
              </Text>
              <Text style={{ fontFamily: currentTheme.fonts.mono, fontSize: 8, color: accent }}>
                FAST-TRACK PASS
              </Text>
            </Column>

            <Image
              src={{ src: "assets/qr-placeholder.svg", width: 200, height: 200 }}
              alt="Gate QR"
              style={{ width: 100, height: 100, borderRadius: 4 }}
            />

            <Column style={{ gap: 2, alignItems: "center" }}>
              <Text
                style={{
                  fontFamily: currentTheme.fonts.mono,
                  fontSize: 10,
                  fontWeight: 800,
                  color: text,
                }}
              >
                #004218
              </Text>
              <Text
                style={{
                  fontFamily: currentTheme.fonts.mono,
                  fontSize: 7.5,
                  color: muted,
                  letterSpacing: 0.5,
                  textTransform: "uppercase",
                }}
              >
                NON-TRANSFERABLE
              </Text>
            </Column>
          </Column>
        </Row>
      </Document.Page>
    </Document>
  );
}
