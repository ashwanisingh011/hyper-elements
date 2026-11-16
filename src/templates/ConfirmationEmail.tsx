import {
  Column,
  Divider,
  Email,
  Heading,
  LineBreak,
  Link,
  List,
  ListItem,
  Row,
  Section,
  Span,
  Text,
} from "@hyper-elements/react";
import { eventData, sampleAttendee } from "../data.js";
import { currentTheme } from "../tokens.js";

export function ConfirmationEmail() {
  const isMidnight = currentTheme.name === "midnight";
  const bg = currentTheme.colors.bg;
  const surface = currentTheme.colors.surface;
  const surfaceAlt = currentTheme.colors.surfaceAlt;
  const ink = currentTheme.colors.text;
  const muted = currentTheme.colors.textMuted;
  const accent = currentTheme.colors.accent;
  const border = currentTheme.colors.border;

  const kicker = {
    fontFamily: currentTheme.fonts.mono,
    fontSize: 11,
    fontWeight: 700 as const,
    letterSpacing: 2,
    textTransform: "uppercase" as const,
    color: accent,
  };

  const hairline = <Divider style={{ borderTop: `1px solid ${border}`, width: "100%" }} />;

  return (
    <Email
      width={600}
      lang="en-GB"
      title={`${eventData.name} — Delegate Access Dispatch // No. 07`}
      previewText={`Your seat is confirmed, ${sampleAttendee.name}. Official delegate credentials and Lisbon summit briefing.`}
      style={{
        backgroundColor: bg,
        color: ink,
        fontFamily: currentTheme.fonts.body,
        fontSize: 16,
        lineHeight: 1.6,
      }}
    >
      {/* 1. Technical Coordinate Masthead */}
      <Section
        style={{
          padding: [32, 40, 0],
          gap: 14,
          mobile: { padding: [24, 20, 0], gap: 10 },
        }}
      >
        <Row
          stackOnMobile={false}
          style={{
            padding: [0, 0, 10],
            border: { bottom: `1px solid ${border}` },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Column>
            <Text style={{ ...kicker, fontSize: 10 }}>DISPATCH // NO. 07</Text>
          </Column>
          <Column style={{ alignItems: "end" }}>
            <Text style={{ ...kicker, fontSize: 10, textAlign: "right" }}>
              38°42'N 9°08'W · LISBON
            </Text>
          </Column>
        </Row>

        <Heading
          level={1}
          style={{
            fontFamily: currentTheme.fonts.heading,
            fontSize: 74,
            fontWeight: 400,
            fontStyle: "italic",
            lineHeight: 1,
            letterSpacing: -1.5,
            textAlign: "center",
            color: ink,
            mobile: { fontSize: 52 },
          }}
        >
          Northwind
        </Heading>

        <Text
          style={{
            fontFamily: currentTheme.fonts.heading,
            fontStyle: "italic",
            fontSize: 18,
            color: muted,
            textAlign: "center",
            padding: [0, 0, 4],
            mobile: { fontSize: 15 },
          }}
        >
          A monograph on software architecture, craft, and the next decade of computing
        </Text>

        {/* Technical Double Rule */}
        <Column style={{ gap: 2, padding: [4, 0] }}>
          <Divider style={{ borderTop: `1px solid ${border}` }} />
          <Divider style={{ borderTop: `2px solid ${accent}` }} />
        </Column>
      </Section>

      {/* 2. Opening Letter to Attendee */}
      <Section
        style={{
          padding: [32, 40, 0],
          gap: 16,
          mobile: { padding: [24, 20, 0], gap: 14 },
        }}
      >
        <Text style={kicker}>DELEGATE CONFIRMATION &amp; ACCESS BRIEFING</Text>

        <Heading
          level={2}
          style={{
            fontFamily: currentTheme.fonts.heading,
            fontSize: 38,
            fontWeight: 600,
            lineHeight: 1.15,
            color: ink,
            letterSpacing: -0.5,
            mobile: { fontSize: 28 },
          }}
        >
          Your seat is confirmed, {sampleAttendee.name}
        </Heading>

        <Text
          style={{
            fontFamily: currentTheme.fonts.heading,
            fontSize: 20,
            fontStyle: "italic",
            lineHeight: 1.45,
            color: muted,
            mobile: { fontSize: 17 },
          }}
        >
          Two days on the Lisbon waterfront with two thousand engineers, forty speakers, and your confirmed access to The Foundry.
        </Text>

        <Text style={{ padding: [6, 0, 0] }}>
          <Span
            style={{
              fontFamily: currentTheme.fonts.mono,
              fontWeight: 700,
              letterSpacing: 1.2,
              textTransform: "uppercase",
              fontSize: 12,
              color: accent,
            }}
          >
            The Foundry was built to cast heavy ocean steel.
          </Span>{" "}
          Next March, we gather in its vaulted stone halls to examine what makes software systems weather their own decades:
          how high-performing teams avoid organizational entropy, why foundational design outlasts marketing cycles, and what happens when
          software is authored with twenty-year longevity in mind.
        </Text>

        <Text>
          Your registration for the <Span style={{ fontWeight: 700, color: ink }}>{sampleAttendee.tier} tier</Span> is officially confirmed.
          Below you will find your digital boarding credentials, allocated seating block, and fast-track instructions for Day 1.
        </Text>
      </Section>

      {/* 3. The Digital Boarding Pass / Cyber-Aviation Ticket Card */}
      <Section style={{ padding: [32, 40, 0], mobile: { padding: [24, 20, 0] } }}>
        <Column
          style={{
            backgroundColor: surface,
            border: `1.5px solid ${border}`,
            borderRadius: currentTheme.radius,
            padding: [26, 28],
            gap: 18,
            mobile: { padding: [20, 16] },
          }}
        >
          {/* Boarding Card Top Row */}
          <Row stackOnMobile={false} style={{ justifyContent: "space-between", alignItems: "center" }}>
            <Text style={kicker}>OFFICIAL ACCESS CREDENTIALS</Text>
            <Column
              style={{
                backgroundColor: isMidnight ? "#152011" : "#FCEEEA",
                border: `1px solid ${accent}`,
                borderRadius: 4,
                padding: "3px 10px",
              }}
            >
              <Text
                style={{
                  fontFamily: currentTheme.fonts.mono,
                  fontSize: 10,
                  fontWeight: 800,
                  color: accent,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                CONFIRMED // FAST-TRACK
              </Text>
            </Column>
          </Row>

          <Heading
            level={3}
            style={{
              fontFamily: currentTheme.fonts.heading,
              fontSize: 28,
              fontWeight: 600,
              lineHeight: 1.1,
              color: ink,
              mobile: { fontSize: 24 },
            }}
          >
            {sampleAttendee.name} — {sampleAttendee.tier} Pass
          </Heading>

          <Text
            style={{
              fontFamily: currentTheme.fonts.mono,
              fontSize: 12,
              color: muted,
            }}
          >
            Order #{sampleAttendee.orderNumber} · Issued {sampleAttendee.orderDate} · Total {sampleAttendee.paid}
          </Text>

          {hairline}

          {/* Key Spec Matrix */}
          <Row
            style={{
              gap: 24,
              padding: [4, 0],
              mobile: { gap: 16 },
            }}
          >
            {/* Left: Seat & Pass Info */}
            <Column style={{ width: 230, gap: 10 }}>
              <Text style={{ ...kicker, fontSize: 10 }}>DELEGATE ALLOCATION</Text>
              <List style={{ fontSize: 14, lineHeight: 1.5, gap: 5, indent: 16, color: muted }}>
                <ListItem>
                  <Span style={{ fontWeight: 600, color: ink }}>Seat:</Span> {sampleAttendee.seat}
                </ListItem>
                <ListItem>
                  <Span style={{ fontWeight: 600, color: ink }}>Access:</Span> All talks, workshops, speaker dinner
                </ListItem>
                <ListItem>
                  <Span style={{ fontWeight: 600, color: ink }}>Venue:</Span> The Foundry, 42 Harbor Street, Lisbon
                </ListItem>
                <ListItem>
                  <Span style={{ fontWeight: 600, color: ink }}>Dates:</Span> March 18–19, 2027
                </ListItem>
              </List>
            </Column>

            {/* Right: Check-In Logistics */}
            <Column style={{ gap: 10 }}>
              <Text style={{ ...kicker, fontSize: 10 }}>CHECK-IN CHECKLIST</Text>
              <List type="number" style={{ fontSize: 14, lineHeight: 1.5, gap: 5, indent: 22, color: muted }}>
                <ListItem>
                  <Span style={{ fontWeight: 600, color: ink }}>Pass QR Code:</Span> Digital wallet pass or printed DL PDF
                </ListItem>
                <ListItem>
                  <Span style={{ fontWeight: 600, color: ink }}>Photo ID:</Span> Government-issued ID matching delegate name
                </ListItem>
                <ListItem>
                  <Span style={{ fontWeight: 600, color: ink }}>Hardware:</Span> Laptop and charger for interactive labs
                </ListItem>
              </List>
            </Column>
          </Row>

          {hairline}

          {/* Action Row */}
          <Row
            stackOnMobile={false}
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              padding: [6, 0, 0],
            }}
          >
            <Link
              href="https://example.com/ticket.pdf"
              style={{
                fontFamily: currentTheme.fonts.mono,
                fontSize: 13,
                fontWeight: 700,
                color: accent,
                textDecoration: "underline",
              }}
            >
              Download PDF Pass with Barcode →
            </Link>

            <Link
              href="https://example.com/calendar"
              style={{
                fontFamily: currentTheme.fonts.mono,
                fontSize: 12,
                color: muted,
                textDecoration: "underline",
              }}
            >
              Add to Calendar
            </Link>
          </Row>
        </Column>
      </Section>

      {/* 4. Pull Quote */}
      <Section style={{ padding: [32, 40, 0], mobile: { padding: [24, 20, 0] } }}>
        <Column
          style={{
            gap: 12,
            padding: [24, 0],
            border: { top: `1px solid ${border}`, bottom: `1px solid ${border}` },
          }}
        >
          <Text
            style={{
              fontFamily: currentTheme.fonts.heading,
              fontSize: 27,
              fontStyle: "italic",
              lineHeight: 1.25,
              letterSpacing: -0.2,
              textAlign: "center",
              color: ink,
              mobile: { fontSize: 21 },
            }}
          >
            “We do not build software for the moment of its launch. We build it for the quiet years that follow.”
          </Text>
          <Text style={{ ...kicker, color: muted, textAlign: "center", fontSize: 10 }}>
            Maya Okonkwo // Principal Engineer, Lumen Labs
          </Text>
        </Column>
      </Section>

      {/* 5. Keynote Program Masterclasses */}
      <Section
        style={{
          padding: [32, 40, 0],
          gap: 14,
          mobile: { padding: [24, 20, 0] },
        }}
      >
        <Text style={kicker}>CURATED DAY 1 PROGRAM // LISBON</Text>

        <Column style={{ border: { bottom: `1px solid ${border}` } }}>
          {[
            {
              num: "01",
              time: "09:30",
              title: "The Next Decade: Opening Keynote",
              speaker: "Maya Okonkwo",
              role: "Principal Engineer, Lumen Labs",
            },
            {
              num: "02",
              time: "10:45",
              title: "Designing for Humans and Autonomous Agents",
              speaker: "Daniel Reyes",
              role: "Head of Design, Parallel",
            },
            {
              num: "03",
              time: "13:30",
              title: "Scaling Teams Without Scaling Chaos",
              speaker: "Priya Nair",
              role: "CTO, Kestrel Health",
            },
            {
              num: "04",
              time: "15:00",
              title: "Shipping Small, Learning Fast",
              speaker: "Jonas Lindqvist",
              role: "Founder, Fjord Systems",
            },
          ].map((item, idx) => (
            <Row
              key={idx}
              stackOnMobile={false}
              style={{
                gap: 18,
                padding: [18, 0],
                border: { top: `1px solid ${border}` },
                mobile: { gap: 12 },
              }}
            >
              <Column style={{ width: 44, flex: "none" }}>
                <Text
                  style={{
                    fontFamily: currentTheme.fonts.heading,
                    fontSize: 32,
                    lineHeight: 1,
                    color: accent,
                    fontWeight: 600,
                  }}
                >
                  {item.num}
                </Text>
                <Text
                  style={{
                    fontFamily: currentTheme.fonts.mono,
                    fontSize: 10,
                    color: muted,
                    fontWeight: 700,
                    letterSpacing: 0.5,
                    padding: [4, 0, 0],
                  }}
                >
                  {item.time}
                </Text>
              </Column>

              <Column style={{ gap: 4, flex: 1 }}>
                <Heading
                  level={3}
                  style={{
                    fontFamily: currentTheme.fonts.heading,
                    fontSize: 21,
                    fontWeight: 600,
                    lineHeight: 1.25,
                    color: ink,
                  }}
                >
                  {item.title}
                </Heading>
                <Text style={{ fontSize: 13, lineHeight: 1.45, color: muted }}>
                  <Span style={{ fontWeight: 600, color: ink }}>{item.speaker}</Span> · {item.role}
                </Text>
              </Column>
            </Row>
          ))}
        </Column>
      </Section>

      {/* 6. Sign-off and Monograph Footer */}
      <Section
        style={{
          padding: [36, 40, 48],
          gap: 20,
          mobile: { padding: [28, 20, 36], gap: 16 },
        }}
      >
        <Text style={{ fontFamily: currentTheme.fonts.heading, fontStyle: "italic", fontSize: 20, color: ink }}>
          Until March in Lisbon,
          <LineBreak />
          <Span style={{ fontWeight: 600 }}>The Northwind Curators</Span>
        </Text>

        <Column style={{ gap: 2, padding: [6, 0] }}>
          <Divider style={{ borderTop: `1px solid ${border}` }} />
          <Divider style={{ borderTop: `2px solid ${accent}` }} />
        </Column>

        <Text
          style={{
            fontFamily: currentTheme.fonts.mono,
            fontSize: 11,
            lineHeight: 1.6,
            color: muted,
            textAlign: "center",
          }}
        >
          Northwind Summit 2027 · The Foundry, 42 Harbor Street, Lisbon, Portugal
          <LineBreak />
          Official delegate pass issued to {sampleAttendee.name} ({sampleAttendee.email}).
          <LineBreak />
          <Link href="https://northwind.example/2027" style={{ color: muted }}>
            Web Edition
          </Link>
          {"  //  "}
          <Link href="https://northwind.example/support" style={{ color: muted }}>
            Support
          </Link>
          {"  //  "}
          <Link href="https://northwind.example/transfer" style={{ color: muted }}>
            Transfer Pass
          </Link>
        </Text>
      </Section>
    </Email>
  );
}
