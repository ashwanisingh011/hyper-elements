import {
  Button,
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
  const t = currentTheme;
  const c = t.colors;

  // Email-safe fonts
  const serif = t.fonts.emailDisplay;
  const sans = t.fonts.emailBody;
  const mono = "'Courier New', Courier, monospace";

  const kicker = {
    fontFamily: mono,
    fontSize: 11 as const,
    fontWeight: 600 as const,
    letterSpacing: 1.5,
    textTransform: "uppercase" as const,
    color: c.accent,
  };

  const hairline = <Divider style={{ borderTop: `1px solid ${c.border}`, width: "100%" }} />;

  return (
    <Email
      width={t.emailWidth}
      lang="en-GB"
      title={`${eventData.name} — Your seat is confirmed`}
      previewText={`Your seat is confirmed, ${sampleAttendee.name}. See you in Lisbon.`}
      style={{
        backgroundColor: c.surfaceAlt,
        color: c.text,
        fontFamily: sans,
        fontSize: 16,
        lineHeight: 1.6,
      }}
    >
      {/* ── Main card on surfaceAlt background ── */}
      <Section
        style={{
          padding: [32, 0],
          mobile: { padding: [20, 0] },
        }}
      >
        <Column
          style={{
            backgroundColor: c.surface,
            border: `1px solid ${c.border}`,
            borderRadius: 8,
            padding: [40, 40],
            gap: 24,
            mobile: { padding: [28, 20] },
          }}
        >
          {/* Header: mono label + date */}
          <Row
            stackOnMobile={false}
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              padding: [0, 0, 16, 0],
              border: { bottom: `1px solid ${c.border}` },
            }}
          >
            <Text style={{ ...kicker, fontSize: 10 }}>Northwind Summit</Text>
            <Text style={{ ...kicker, fontSize: 10, color: c.textMuted }}>
              March 18–19, 2027
            </Text>
          </Row>

          {/* Main heading — serif (Georgia fallback) */}
          <Heading
            level={1}
            style={{
              fontFamily: serif,
              fontSize: t.type.h1Email,
              fontWeight: 700,
              lineHeight: 1.15,
              color: c.text,
              letterSpacing: -0.5,
              mobile: { fontSize: 28 },
            }}
          >
            Your seat is confirmed, {sampleAttendee.name}
          </Heading>

          <Text
            style={{
              fontFamily: sans,
              fontSize: 16,
              lineHeight: 1.6,
              color: c.textMuted,
            }}
          >
            Two days on the Lisbon waterfront with two thousand engineers, forty speakers, and your confirmed access to The Foundry.
          </Text>

          {hairline}

          {/* ── Booking details card ── */}
          <Column
            style={{
              backgroundColor: c.surfaceAlt,
              borderRadius: 8,
              padding: [24, 24],
              gap: 16,
              mobile: { padding: [20, 16] },
            }}
          >
            <Text style={kicker}>Booking details</Text>

            <Row style={{ gap: 24, mobile: { gap: 16 } }}>
              <Column style={{ gap: 8, flex: 1 }}>
                <Text style={{ ...kicker, fontSize: 10, color: c.textMuted }}>Delegate</Text>
                <Text style={{ fontSize: 15, fontWeight: 600, color: c.text }}>
                  {sampleAttendee.name}
                </Text>
              </Column>
              <Column style={{ gap: 8, flex: 1 }}>
                <Text style={{ ...kicker, fontSize: 10, color: c.textMuted }}>Tier</Text>
                <Text style={{ fontSize: 15, fontWeight: 600, color: c.text }}>
                  {sampleAttendee.tier}
                </Text>
              </Column>
            </Row>

            <Row style={{ gap: 24, mobile: { gap: 16 } }}>
              <Column style={{ gap: 8, flex: 1 }}>
                <Text style={{ ...kicker, fontSize: 10, color: c.textMuted }}>Order</Text>
                <Text style={{ fontFamily: mono, fontSize: 13, color: c.text }}>
                  {sampleAttendee.orderNumber}
                </Text>
              </Column>
              <Column style={{ gap: 8, flex: 1 }}>
                <Text style={{ ...kicker, fontSize: 10, color: c.textMuted }}>Seat</Text>
                <Text style={{ fontFamily: mono, fontSize: 13, color: c.text }}>
                  {sampleAttendee.seat}
                </Text>
              </Column>
            </Row>

            <Row style={{ gap: 24, mobile: { gap: 16 } }}>
              <Column style={{ gap: 8, flex: 1 }}>
                <Text style={{ ...kicker, fontSize: 10, color: c.textMuted }}>Total paid</Text>
                <Text style={{ fontSize: 15, fontWeight: 600, color: c.text }}>
                  {sampleAttendee.paid}
                </Text>
              </Column>
              <Column style={{ gap: 8, flex: 1 }}>
                <Text style={{ ...kicker, fontSize: 10, color: c.textMuted }}>Venue</Text>
                <Text style={{ fontSize: 14, color: c.text }}>
                  The Foundry, Lisbon
                </Text>
              </Column>
            </Row>
          </Column>

          {hairline}

          {/* ── What to bring ── */}
          <Text style={kicker}>What to bring</Text>
          <List style={{ fontSize: 14, lineHeight: 1.6, gap: 6, indent: 18, color: c.textMuted }}>
            <ListItem>
              <Span style={{ fontWeight: 600, color: c.text }}>QR Code:</Span> Digital wallet pass or printed PDF
            </ListItem>
            <ListItem>
              <Span style={{ fontWeight: 600, color: c.text }}>Photo ID:</Span> Government-issued, matching delegate name
            </ListItem>
            <ListItem>
              <Span style={{ fontWeight: 600, color: c.text }}>Hardware:</Span> Laptop and charger for interactive labs
            </ListItem>
          </List>

          {hairline}

          {/* ── Single bulletproof accent button ── */}
          <Column style={{ alignItems: "center", padding: [8, 0] }}>
            <Button
              href="https://example.com/ticket.pdf"
              style={{
                backgroundColor: c.accent,
                color: c.accentText,
                fontSize: 14,
                fontWeight: 700,
                textDecoration: "none",
                padding: "14px 32px",
                borderRadius: 8,
              }}
            >
              Download your pass
            </Button>
          </Column>

          {hairline}

          {/* ── Sign-off ── */}
          <Text
            style={{
              fontFamily: serif,
              fontStyle: "italic",
              fontSize: 18,
              color: c.text,
              lineHeight: 1.4,
            }}
          >
            See you in Lisbon,
            <LineBreak />
            <Span style={{ fontWeight: 700, fontStyle: "normal" }}>The Northwind Team</Span>
          </Text>
        </Column>
      </Section>

      {/* ── Footer ── */}
      <Section
        style={{
          padding: [0, 0, 32],
          gap: 8,
          mobile: { padding: [0, 0, 24] },
        }}
      >
        <Text
          style={{
            fontFamily: mono,
            fontSize: 11,
            lineHeight: 1.6,
            color: c.textMuted,
            textAlign: "center",
          }}
        >
          Northwind Summit 2027
          <LineBreak />
          The Foundry, 42 Harbor Street, Lisbon
          <LineBreak />
          Issued to {sampleAttendee.name} ({sampleAttendee.email})
        </Text>
        <Text
          style={{
            fontSize: 11,
            color: c.textMuted,
            textAlign: "center",
          }}
        >
          <Link href="https://northwind.example/2027" style={{ color: c.textMuted }}>
            Web
          </Link>
          {"  ·  "}
          <Link href="https://northwind.example/support" style={{ color: c.textMuted }}>
            Support
          </Link>
          {"  ·  "}
          <Link href="https://northwind.example/transfer" style={{ color: c.textMuted }}>
            Transfer
          </Link>
        </Text>
      </Section>
    </Email>
  );
}
