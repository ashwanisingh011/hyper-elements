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
import { eventData, sampleAttendee, schedule, speakers } from "../data.js";

// Editorial color palette inspired by heritage letterpress on warm newsprint cream
const PAPER = "#F5F0E6";
const INK = "#1D1B18";
const QUIET = "#6A645A";
const RULE = "#D6CDBD";
const TOMATO = "#B83A26";
const SURFACE = "#FAF7F2";

// Authentic editorial typography stacks
const DISPLAY = "'Bodoni Moda', Didot, 'Bodoni 72', 'Playfair Display', Georgia, serif";
const TEXT = "'Source Serif 4', Georgia, 'Times New Roman', serif";

const kickerStyle = {
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: 1.8,
  textTransform: "uppercase" as const,
  color: TOMATO,
};

const ruleBorder = `1px solid ${RULE}`;

/** Classic newspaper double rule: 1px hairline over 2px bold rule */
const doubleRule = (
  <Column style={{ gap: 2, padding: [6, 0] }}>
    <Divider style={{ borderTop: `1px solid ${INK}` }} />
    <Divider style={{ borderTop: `2px solid ${INK}` }} />
  </Column>
);

/** Single hairline divider */
const hairline = <Divider style={{ borderTop: ruleBorder, width: "100%" }} />;

/** Curated session brief with number, title, speaker and abstract */
const sessionBrief = (
  num: string,
  time: string,
  title: string,
  speakerName: string,
  speakerRole: string
) => (
  <Row
    stackOnMobile={false}
    style={{
      gap: 20,
      padding: [18, 0],
      border: { top: ruleBorder },
      mobile: { gap: 14 },
    }}
  >
    <Column style={{ width: 42, flex: "none" }}>
      <Text style={{ fontFamily: DISPLAY, fontSize: 32, lineHeight: 1, color: TOMATO, fontWeight: 600 }}>
        {num}
      </Text>
      <Text style={{ fontSize: 11, color: QUIET, fontWeight: 600, letterSpacing: 0.5, padding: [4, 0, 0] }}>
        {time}
      </Text>
    </Column>
    <Column style={{ gap: 4, flex: 1 }}>
      <Heading
        level={3}
        style={{
          fontFamily: DISPLAY,
          fontSize: 20,
          fontWeight: 600,
          lineHeight: 1.25,
          color: INK,
        }}
      >
        {title}
      </Heading>
      <Text style={{ fontSize: 14, lineHeight: 1.45, color: QUIET }}>
        <Span style={{ fontWeight: 600, color: INK }}>{speakerName}</Span> · {speakerRole}
      </Text>
    </Column>
  </Row>
);

export function ConfirmationEmail() {
  return (
    <Email
      width={600}
      lang="en-GB"
      title={`${eventData.name} — Dispatch No. 37 & Delegate Confirmation`}
      previewText={`Your seat is confirmed, ${sampleAttendee.name}. The official Northwind Summit 2027 dispatch and admission pass.`}
      fonts={[
        {
          family: "Bodoni Moda",
          src: "https://fonts.gstatic.com/s/bodonimoda/v28/aFTQ7PxzY382XsXX63LUYJSKSKjWXFBP.woff2",
          format: "woff2",
          weight: "400 900",
        },
        {
          family: "Bodoni Moda",
          src: "https://fonts.gstatic.com/s/bodonimoda/v28/aFTS7PxzY382XsXX63LUYJSPeKrcW3JNsao.woff2",
          format: "woff2",
          weight: "400 900",
          style: "italic",
        },
        {
          family: "Source Serif 4",
          src: "https://fonts.gstatic.com/s/sourceserif4/v15/vEFI2_tTDB4M7-auWDN0ahZJW1gb8te1Xb7G.woff2",
          format: "woff2",
          weight: "200 900",
        },
        {
          family: "Source Serif 4",
          src: "https://fonts.gstatic.com/s/sourceserif4/v15/vEFK2_tTDB4M7-auWDN0ahZJW1gewtW_WpzEpMs.woff2",
          format: "woff2",
          weight: "200 900",
          style: "italic",
        },
      ]}
      style={{
        backgroundColor: PAPER,
        color: INK,
        fontFamily: TEXT,
        fontSize: 17,
        lineHeight: 1.62,
      }}
    >
      {/* 1. Header Nameplate */}
      <Section
        style={{
          padding: [36, 44, 0],
          gap: 12,
          mobile: { padding: [24, 20, 0], gap: 10 },
        }}
      >
        <Row
          stackOnMobile={false}
          style={{
            padding: [0, 0, 10],
            border: { bottom: `1px solid ${INK}` },
            justifyContent: "space-between",
          }}
        >
          <Column>
            <Text style={{ ...kickerStyle, color: INK }}>DISPATCH NO. 37</Text>
          </Column>
          <Column style={{ alignItems: "end" }}>
            <Text style={{ ...kickerStyle, color: INK, textAlign: "right" }}>
              LISBON · 18–19 MARCH 2027
            </Text>
          </Column>
        </Row>

        <Heading
          level={1}
          style={{
            fontFamily: DISPLAY,
            fontSize: 78,
            fontWeight: 500,
            fontStyle: "italic",
            lineHeight: 1,
            letterSpacing: -2,
            textAlign: "center",
            color: INK,
            mobile: { fontSize: 56 },
          }}
        >
          Northwind
        </Heading>

        <Text
          style={{
            fontStyle: "italic",
            fontSize: 16,
            color: QUIET,
            textAlign: "center",
            padding: [0, 0, 4],
            mobile: { fontSize: 14 },
          }}
        >
          A seasonal dispatch on architecture, engineering, and the next decade of software
        </Text>

        {doubleRule}
      </Section>

      {/* 2. Opening Editorial Letter & Welcome */}
      <Section
        style={{
          padding: [32, 44, 0],
          gap: 18,
          mobile: { padding: [24, 20, 0], gap: 14 },
        }}
      >
        <Text style={kickerStyle}>DELEGATE ADMISSION &amp; DISPATCH</Text>

        <Heading
          level={2}
          style={{
            fontFamily: DISPLAY,
            fontSize: 40,
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: -0.5,
            color: INK,
            mobile: { fontSize: 30 },
          }}
        >
          Your seat is confirmed, {sampleAttendee.name}
        </Heading>

        <Text
          style={{
            fontSize: 20,
            fontStyle: "italic",
            lineHeight: 1.45,
            color: QUIET,
            mobile: { fontSize: 18 },
          }}
        >
          Two days on the Lisbon waterfront with two thousand builders, forty speakers, and everything we know about building software that endures.
        </Text>

        <Text style={{ fontSize: 13, color: QUIET }}>
          Registration Order #{sampleAttendee.orderNumber} · {sampleAttendee.tier} Delegate Tier
        </Text>

        <Text style={{ padding: [8, 0, 0] }}>
          <Span
            style={{
              fontWeight: 700,
              letterSpacing: 1.2,
              textTransform: "uppercase",
              fontSize: 13,
              color: INK,
            }}
          >
            The Foundry was built to pour iron into anchors.
          </Span>{" "}
          Next March, we take over its vaulted stone halls to examine what makes digital systems weather their own storms:
          how high-performing teams keep shipping small, why resilient design outlasts hype cycles, and what happens when
          software is authored for the next ten years instead of the next release sprint.
        </Text>

        <Text>
          Your registration for the <Span style={{ fontWeight: 600, color: INK }}>{sampleAttendee.tier} pass</Span> has been recorded in full.
          Below you will find your official pass credentials, your block assignment, and your fast-track details.
        </Text>
      </Section>

      {/* 3. Pull Quote */}
      <Section style={{ padding: [32, 44, 0], mobile: { padding: [24, 20, 0] } }}>
        <Column
          style={{
            gap: 12,
            padding: [24, 0],
            border: { top: `1px solid ${INK}`, bottom: `1px solid ${INK}` },
          }}
        >
          <Text
            style={{
              fontFamily: DISPLAY,
              fontSize: 26,
              fontStyle: "italic",
              lineHeight: 1.25,
              letterSpacing: -0.2,
              textAlign: "center",
              color: INK,
              mobile: { fontSize: 21 },
            }}
          >
            “We do not build software for the moment of its launch. We build it for the quiet years that follow.”
          </Text>
          <Text style={{ ...kickerStyle, color: QUIET, textAlign: "center", fontSize: 10 }}>
            Maya Okonkwo, Opening Keynote · Lisbon 2027
          </Text>
        </Column>
      </Section>

      {/* 4. Ruled Pass Credentials Box (The Recipe-style Box) */}
      <Section style={{ padding: [36, 44, 0], mobile: { padding: [28, 20, 0] } }}>
        <Column
          style={{
            gap: 18,
            padding: [28, 30, 30],
            border: `1px solid ${INK}`,
            backgroundColor: SURFACE,
            mobile: { padding: [20, 16, 22] },
          }}
        >
          {/* Box Header */}
          <Column style={{ gap: 6 }}>
            <Text style={kickerStyle}>OFFICIAL ADMISSION CREDENTIALS</Text>
            <Heading
              level={3}
              style={{
                fontFamily: DISPLAY,
                fontSize: 26,
                fontWeight: 600,
                lineHeight: 1.15,
                color: INK,
                mobile: { fontSize: 22 },
              }}
            >
              {sampleAttendee.name} — {sampleAttendee.tier} Pass
            </Heading>
            <Text style={{ fontSize: 13, color: QUIET }}>
              Order No. {sampleAttendee.orderNumber} · Issued {sampleAttendee.orderDate} · Paid {sampleAttendee.paid}
            </Text>
          </Column>

          {/* Two-Column Details */}
          <Row
            style={{
              gap: 28,
              padding: [18, 0, 0],
              border: { top: ruleBorder },
              mobile: { gap: 16 },
            }}
          >
            {/* Left: Event Logistics */}
            <Column style={{ width: 230, gap: 10 }}>
              <Text style={{ ...kickerStyle, color: INK, fontSize: 10 }}>
                VENUE &amp; SCHEDULE
              </Text>
              <List style={{ fontSize: 14, lineHeight: 1.5, gap: 4, indent: 16 }}>
                <ListItem>
                  <Span style={{ fontWeight: 600, color: INK }}>Dates:</Span> March 18–19, 2027
                </ListItem>
                <ListItem>
                  <Span style={{ fontWeight: 600, color: INK }}>Venue:</Span> The Foundry, 42 Harbor St, Lisbon
                </ListItem>
                <ListItem>
                  <Span style={{ fontWeight: 600, color: INK }}>Doors Open:</Span> 08:30 GMT (Coffee &amp; Badging)
                </ListItem>
                <ListItem>
                  <Span style={{ fontWeight: 600, color: INK }}>Opening Keynote:</Span> 09:30 GMT promptly
                </ListItem>
                <ListItem>
                  <Span style={{ fontWeight: 600, color: INK }}>Seat Allocation:</Span> {sampleAttendee.seat}
                </ListItem>
              </List>
            </Column>

            {/* Right: What to Bring */}
            <Column style={{ gap: 10 }}>
              <Text style={{ ...kickerStyle, color: INK, fontSize: 10 }}>
                DAY 1 CHECK-IN REQUIREMENTS
              </Text>
              <List type="number" style={{ fontSize: 14, lineHeight: 1.5, gap: 5, indent: 24 }}>
                <ListItem>
                  <Span style={{ fontWeight: 600, color: INK }}>Pass QR Code:</Span> Digital badge on phone or printed pass
                </ListItem>
                <ListItem>
                  <Span style={{ fontWeight: 600, color: INK }}>Photo ID:</Span> Government-issued ID matching your name
                </ListItem>
                <ListItem>
                  <Span style={{ fontWeight: 600, color: INK }}>Hardware:</Span> Laptop and charger for breakout labs
                </ListItem>
              </List>
            </Column>
          </Row>

          {/* Action Links */}
          <Row
            stackOnMobile={false}
            style={{
              gap: 20,
              padding: [16, 0, 0],
              border: { top: ruleBorder },
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link
              href="https://example.com/ticket.pdf"
              style={{
                fontFamily: TEXT,
                fontSize: 15,
                fontWeight: 700,
                color: TOMATO,
                textDecoration: "underline",
              }}
            >
              Download PDF Pass with Barcode →
            </Link>

            <Link
              href="https://example.com/calendar"
              style={{
                fontFamily: TEXT,
                fontSize: 14,
                color: QUIET,
                textDecoration: "underline",
              }}
            >
              Add to Calendar
            </Link>
          </Row>
        </Column>
      </Section>

      {/* 5. Keynote Program Sessions */}
      <Section
        style={{
          padding: [36, 44, 0],
          gap: 14,
          mobile: { padding: [28, 20, 0] },
        }}
      >
        <Text style={kickerStyle}>CURATED DAY 1 PROGRAM</Text>
        <Column style={{ border: { bottom: ruleBorder } }}>
          {sessionBrief("1", "09:30", "The Next Decade: Opening Keynote", "Maya Okonkwo", "Principal Engineer, Lumen Labs")}
          {sessionBrief("2", "10:45", "Designing for Humans and Autonomous Agents", "Daniel Reyes", "Head of Design, Parallel")}
          {sessionBrief("3", "13:30", "Scaling Teams Without Scaling Chaos", "Priya Nair", "CTO, Kestrel Health")}
          {sessionBrief("4", "15:00", "Shipping Small, Learning Fast", "Jonas Lindqvist", "Founder, Fjord Systems")}
        </Column>
      </Section>

      {/* 6. Sign-off and Heritage Footer */}
      <Section
        style={{
          padding: [36, 44, 48],
          gap: 22,
          mobile: { padding: [28, 20, 36], gap: 18 },
        }}
      >
        <Text style={{ fontStyle: "italic", fontSize: 18, color: INK }}>
          Until March in Lisbon,
          <LineBreak />
          <Span style={{ fontWeight: 600 }}>The Northwind Curators</Span>
        </Text>

        {doubleRule}

        <Text
          style={{
            fontSize: 12,
            lineHeight: 1.6,
            color: QUIET,
            textAlign: "center",
          }}
        >
          Northwind Summit 2027 · The Foundry, 42 Harbor Street, Lisbon, Portugal
          <LineBreak />
          You received this letter because you are a registered delegate for Northwind Summit.
          <LineBreak />
          <Link href="https://northwind.example/2027" style={{ color: QUIET }}>
            View Web Edition
          </Link>
          {"  ·  "}
          <Link href="https://northwind.example/support" style={{ color: QUIET }}>
            Delegate Support
          </Link>
          {"  ·  "}
          <Link href="https://northwind.example/transfer" style={{ color: QUIET }}>
            Transfer Registration
          </Link>
        </Text>
      </Section>
    </Email>
  );
}
