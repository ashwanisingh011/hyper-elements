import { Column, Divider, Document, Heading, Image, Row, Text } from "@hyper-elements/react";
import { InfoBlock } from "../components/InfoBlock.js";
import { eventData, sampleAttendee } from "../data.js";
import { currentTheme } from "../tokens.js";

export function Ticket() {
  return (
    <Document
      size="A5"
      orientation="landscape"
      margin={{ top: 16, right: 16, bottom: 16, left: 16 }}
      title={`Ticket: ${sampleAttendee.name} — ${eventData.name}`}
      style={{
        backgroundColor: "#FFFFFF",
        color: "#101323",
        fontFamily: currentTheme.fonts.heading,
      }}
    >
      <Document.Page
        style={{
          backgroundColor: "#FFFFFF",
        }}
      >
        {/* Ticket Container */}
        <Row
          stackOnMobile={false}
          style={{
            border: "1.5px solid #2A3562",
            borderRadius: 12,
            backgroundColor: "#FFFFFF",
            overflow: "hidden",
            width: "100%",
            height: 340,
          }}
        >
          {/* Left Brand Color Accent Strip */}
          <Column
            style={{
              width: 14,
              backgroundColor: currentTheme.colors.primary,
            }}
          />

          {/* Main Body Pass */}
          <Column
            style={{
              flex: 1,
              padding: [20, 24],
              gap: 16,
              justifyContent: "space-between",
            }}
          >
            {/* Header / Logo / Event */}
            <Row stackOnMobile={false} style={{ justifyContent: "space-between", alignItems: "center" }}>
              <Column style={{ gap: 4 }}>
                <Image
                  src={{ src: "assets/logo-daylight.svg", width: 280, height: 48 }}
                  alt={eventData.name}
                  style={{ width: 175, height: 30 }}
                />
                <Text style={{ fontSize: 11, fontWeight: 700, color: "#5B6280", letterSpacing: 1 }}>
                  OFFICIAL ACCESS PASS · LISBON 2027
                </Text>
              </Column>

              <Column
                style={{
                  backgroundColor: "#F5F6FB",
                  border: "1px solid #DCE0F0",
                  borderRadius: 6,
                  padding: "6px 14px",
                  alignItems: "end",
                }}
              >
                <Text style={{ fontSize: 13, fontWeight: 800, color: currentTheme.colors.primary, textTransform: "uppercase" }}>
                  {sampleAttendee.tier} Pass
                </Text>
                <Text style={{ fontSize: 10, color: "#5B6280", fontFamily: currentTheme.fonts.mono }}>
                  {sampleAttendee.orderNumber}
                </Text>
              </Column>
            </Row>

            {/* Attendee Name & Seat Highlight */}
            <Row stackOnMobile={false} style={{ justifyContent: "space-between", alignItems: "end" }}>
              <Column style={{ gap: 4 }}>
                <Text style={{ fontSize: 10, fontWeight: 700, color: "#5B6280", letterSpacing: 1.5, textTransform: "uppercase" }}>
                  Pass Holder
                </Text>
                <Heading
                  level={1}
                  style={{
                    fontSize: 26,
                    fontWeight: 800,
                    color: "#101323",
                    lineHeight: 1.1,
                  }}
                >
                  {sampleAttendee.name}
                </Heading>
              </Column>

              <Column style={{ alignItems: "end", gap: 2 }}>
                <Text style={{ fontSize: 10, fontWeight: 700, color: "#5B6280", letterSpacing: 1.5, textTransform: "uppercase" }}>
                  Assigned Seating
                </Text>
                <Text style={{ fontSize: 14, fontWeight: 800, color: "#101323", fontFamily: currentTheme.fonts.mono }}>
                  {sampleAttendee.seat}
                </Text>
              </Column>
            </Row>

            {/* Event Metadata Row */}
            <Row
              stackOnMobile={false}
              style={{
                backgroundColor: "#F5F6FB",
                border: "1px solid #DCE0F0",
                borderRadius: 8,
                padding: "10px 14px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Column style={{ gap: 2 }}>
                <Text style={{ fontSize: 9, fontWeight: 700, color: "#5B6280", textTransform: "uppercase" }}>Dates</Text>
                <Text style={{ fontSize: 12, fontWeight: 700, color: "#101323" }}>{eventData.dates}</Text>
              </Column>
              <Column style={{ gap: 2 }}>
                <Text style={{ fontSize: 9, fontWeight: 700, color: "#5B6280", textTransform: "uppercase" }}>Schedule</Text>
                <Text style={{ fontSize: 12, fontWeight: 700, color: "#101323" }}>Doors 08:30 · Start 09:30</Text>
              </Column>
              <Column style={{ gap: 2 }}>
                <Text style={{ fontSize: 9, fontWeight: 700, color: "#5B6280", textTransform: "uppercase" }}>Venue</Text>
                <Text style={{ fontSize: 12, fontWeight: 700, color: "#101323" }}>The Foundry, Lisbon</Text>
              </Column>
            </Row>

            {/* Small Print / Notice */}
            <Text style={{ fontSize: 9, color: "#5B6280", lineHeight: 1.3 }}>
              This pass grants single-attendee admission to all main-stage sessions, catering, and workshops. Please carry photo ID for badge printing.
            </Text>
          </Column>

          {/* Perforated Divider Line */}
          <Column
            style={{
              width: 1,
              border: { left: "2px dashed #DCE0F0" },
            }}
          />

          {/* Right Stub (Tear-off & QR Scanner) */}
          <Column
            style={{
              width: 160,
              backgroundColor: "#F5F6FB",
              padding: 16,
              alignItems: "center",
              justifyContent: "space-between",
              textAlign: "center",
            }}
          >
            <Column style={{ gap: 4, alignItems: "center" }}>
              <Text style={{ fontSize: 10, fontWeight: 800, color: "#101323", letterSpacing: 1, textTransform: "uppercase" }}>
                SCAN AT GATE
              </Text>
              <Text style={{ fontSize: 9, color: "#5B6280" }}>
                Fast-Track Check-In
              </Text>
            </Column>

            <Image
              src={{ src: "assets/qr-placeholder.svg", width: 200, height: 200 }}
              alt="Check-in QR"
              style={{ width: 110, height: 110, borderRadius: 4 }}
            />

            <Column style={{ gap: 2, alignItems: "center" }}>
              <Text style={{ fontSize: 10, fontWeight: 700, color: "#101323", fontFamily: currentTheme.fonts.mono }}>
                #004218
              </Text>
              <Text style={{ fontSize: 8, color: "#5B6280", textTransform: "uppercase" }}>
                NON-TRANSFERABLE
              </Text>
            </Column>
          </Column>
        </Row>
      </Document.Page>
    </Document>
  );
}
