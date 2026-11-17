import { Column, Document, Heading, Image, Row, Text } from "@hyper-elements/react";
import { eventData, sampleAttendee } from "../data.js";
import { currentTheme } from "../tokens.js";

export function Ticket() {
  const t = currentTheme;
  const isPaper = t.name === "paper";

  // Ticket always uses paper-like colors for print
  const bg = isPaper ? "#FFFFFF" : "#1B1E27";
  const paperBg = isPaper ? "#F5F0E6" : "#12141A";
  const text = isPaper ? "#16181D" : "#F5F0E6";
  const muted = isPaper ? "#6B6A63" : "#A3A194";
  const border = isPaper ? "#DDD6C6" : "#2C3040";
  const accent = t.colors.accent;

  return (
    <Document
      size="A5"
      orientation="landscape"
      margin={{ top: 12, right: 12, bottom: 12, left: 12 }}
      title={`Ticket: ${sampleAttendee.name} — ${eventData.name}`}
      style={{
        backgroundColor: paperBg,
        color: text,
        fontFamily: t.fonts.body,
      }}
    >
      <Document.Page
        style={{
          backgroundColor: paperBg,
        }}
      >
        {/* Ticket outer container */}
        <Row
          stackOnMobile={false}
          style={{
            border: `1px solid ${border}`,
            borderRadius: t.radius,
            backgroundColor: bg,
            overflow: "hidden",
            width: "100%",
            height: 340,
          }}
        >
          {/* 1. Vermilion left accent band */}
          <Column
            style={{
              width: 10,
              backgroundColor: accent,
            }}
          />

          {/* 2. Main ticket body */}
          <Column
            style={{
              flex: 1,
              padding: [24, 28],
              gap: 16,
              justifyContent: "space-between",
            }}
          >
            {/* Header row */}
            <Row stackOnMobile={false} style={{ justifyContent: "space-between", alignItems: "center" }}>
              <Column style={{ gap: 2 }}>
                <Text
                  style={{
                    fontFamily: t.fonts.display,
                    fontSize: 20,
                    fontWeight: 500,
                    letterSpacing: -0.3,
                    color: text,
                  }}
                >
                  Northwind Summit
                </Text>
                <Text
                  style={{
                    fontFamily: t.fonts.mono,
                    fontSize: 10,
                    fontWeight: 500,
                    color: muted,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                  }}
                >
                  Lisbon / March 18–19, 2027
                </Text>
              </Column>

              {/* Status pill */}
              <Column
                style={{
                  backgroundColor: isPaper ? "#FBE3DC" : "#2E2019",
                  borderRadius: 6,
                  padding: "4px 12px",
                }}
              >
                <Text
                  style={{
                    fontFamily: t.fonts.mono,
                    fontSize: 10,
                    fontWeight: 600,
                    color: accent,
                    textTransform: "uppercase",
                    letterSpacing: 0.8,
                  }}
                >
                  {sampleAttendee.tier} Access
                </Text>
              </Column>
            </Row>

            {/* Attendee name — big serif */}
            <Column style={{ gap: 4 }}>
              <Text
                style={{
                  fontFamily: t.fonts.mono,
                  fontSize: 10,
                  fontWeight: 500,
                  color: muted,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                }}
              >
                Pass holder
              </Text>
              <Heading
                level={1}
                style={{
                  fontFamily: t.fonts.display,
                  fontSize: 32,
                  fontWeight: 500,
                  color: text,
                  lineHeight: 1.1,
                  letterSpacing: -0.5,
                }}
              >
                {sampleAttendee.name}
              </Heading>
            </Column>

            {/* Metadata row */}
            <Row
              stackOnMobile={false}
              style={{
                backgroundColor: isPaper ? "#F5F0E6" : "#12141A",
                border: `1px solid ${border}`,
                borderRadius: 8,
                padding: "10px 16px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Column style={{ gap: 2 }}>
                <Text style={{ fontFamily: t.fonts.mono, fontSize: 9, fontWeight: 500, color: muted, textTransform: "uppercase", letterSpacing: 1 }}>
                  Seat
                </Text>
                <Text style={{ fontFamily: t.fonts.mono, fontSize: 12, fontWeight: 600, color: text }}>
                  {sampleAttendee.seat}
                </Text>
              </Column>

              <Column style={{ gap: 2 }}>
                <Text style={{ fontFamily: t.fonts.mono, fontSize: 9, fontWeight: 500, color: muted, textTransform: "uppercase", letterSpacing: 1 }}>
                  Order
                </Text>
                <Text style={{ fontFamily: t.fonts.mono, fontSize: 12, fontWeight: 600, color: text }}>
                  {sampleAttendee.orderNumber}
                </Text>
              </Column>

              <Column style={{ gap: 2 }}>
                <Text style={{ fontFamily: t.fonts.mono, fontSize: 9, fontWeight: 500, color: muted, textTransform: "uppercase", letterSpacing: 1 }}>
                  Venue
                </Text>
                <Text style={{ fontSize: 12, fontWeight: 600, color: text }}>
                  The Foundry, Lisbon
                </Text>
              </Column>
            </Row>

            {/* Bottom: notice + barcode */}
            <Row stackOnMobile={false} style={{ justifyContent: "space-between", alignItems: "center" }}>
              <Text style={{ fontSize: 9, color: muted, maxWidth: 340, lineHeight: 1.4 }}>
                Admit one. Grants access to all keynotes, workshops, and catering. Carry photo ID for badge printing.
              </Text>
              <Image
                src={{ src: "assets/barcode.svg", width: 240, height: 60 }}
                alt="Barcode"
                style={{ width: 120, height: 24 }}
              />
            </Row>
          </Column>

          {/* 3. Perforated tear-line (1px dashed) */}
          <Column
            style={{
              width: 1,
              border: { left: `1px dashed ${border}` },
            }}
          />

          {/* 4. Right stub with QR */}
          <Column
            style={{
              width: 150,
              backgroundColor: isPaper ? "#F5F0E6" : "#12141A",
              padding: [20, 16],
              alignItems: "center",
              justifyContent: "space-between",
              textAlign: "center",
            }}
          >
            <Column style={{ gap: 2, alignItems: "center" }}>
              <Text
                style={{
                  fontFamily: t.fonts.mono,
                  fontSize: 9,
                  fontWeight: 600,
                  color: muted,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                Gate scan
              </Text>
            </Column>

            {/* QR with 1px frame */}
            <Column
              style={{
                border: `1px solid ${border}`,
                borderRadius: 4,
                padding: 4,
              }}
            >
              <Image
                src={{ src: "assets/qr-placeholder.svg", width: 200, height: 200 }}
                alt="Gate QR"
                style={{ width: 90, height: 90 }}
              />
            </Column>

            <Column style={{ gap: 2, alignItems: "center" }}>
              <Text
                style={{
                  fontFamily: t.fonts.mono,
                  fontSize: 10,
                  fontWeight: 600,
                  color: text,
                }}
              >
                #004218
              </Text>
              <Text
                style={{
                  fontFamily: t.fonts.mono,
                  fontSize: 8,
                  color: muted,
                  letterSpacing: 0.5,
                  textTransform: "uppercase",
                }}
              >
                Non-transferable
              </Text>
            </Column>
          </Column>
        </Row>
      </Document.Page>
    </Document>
  );
}
