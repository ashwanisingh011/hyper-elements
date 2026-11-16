import { Button, Column, Divider, Email, Heading, Image, Link, List, ListItem, Row, Span, Text } from "@hyper-elements/react";
import { Footer } from "../components/Footer.js";
import { InfoBlock } from "../components/InfoBlock.js";
import { eventData, sampleAttendee } from "../data.js";
import { currentTheme } from "../tokens.js";

export function ConfirmationEmail() {
  const logoSrc = currentTheme.name === "daylight" ? "assets/logo-daylight.svg" : "assets/logo.svg";

  return (
    <Email
      width={600}
      title={`Your Ticket to ${eventData.name}`}
      previewText={`You are confirmed for ${eventData.name}! Order #${sampleAttendee.orderNumber}`}
      style={{
        backgroundColor: currentTheme.colors.bg,
        color: currentTheme.colors.text,
        fontFamily: currentTheme.fonts.email,
        gap: 24,
      }}
    >
      {/* Header Bar */}
      <Column style={{ padding: [24, 20, 8, 20], alignItems: "center" }}>
        <Image
          src={{ src: logoSrc, width: 280, height: 48 }}
          alt={eventData.name}
          style={{ width: 190, height: 32 }}
        />
      </Column>

      {/* Main Content Card */}
      <Column
        style={{
          backgroundColor: currentTheme.colors.surface,
          border: `1px solid ${currentTheme.colors.border}`,
          borderRadius: currentTheme.radius,
          padding: [32, 28],
          gap: 24,
        }}
      >
        {/* Intro */}
        <Column style={{ gap: 8, alignItems: "center", textAlign: "center" }}>
          <Heading
            level={1}
            style={{
              fontSize: currentTheme.type.h1Email,
              fontWeight: 800,
              color: currentTheme.colors.text,
              lineHeight: 1.2,
            }}
          >
            You're in, Alex! 🎟️
          </Heading>
          <Text
            style={{
              fontSize: currentTheme.type.body,
              color: currentTheme.colors.textMuted,
              lineHeight: 1.5,
            }}
          >
            Your registration for the <Span style={{ fontWeight: 700, color: currentTheme.colors.text }}>{sampleAttendee.tier}</Span> pass to Northwind Summit 2027 is confirmed.
          </Text>
        </Column>

        {/* Order Summary Card */}
        <Column
          style={{
            backgroundColor: currentTheme.colors.surfaceAlt,
            border: `1px solid ${currentTheme.colors.border}`,
            borderRadius: currentTheme.radius,
            padding: 20,
            gap: 16,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: 800,
              color: currentTheme.colors.accent,
              letterSpacing: 1.5,
              textTransform: "uppercase",
            }}
          >
            Order Details
          </Text>

          <Row stackOnMobile={true} style={{ gap: 16, justifyContent: "space-between" }}>
            <InfoBlock label="Attendee" value={sampleAttendee.name} />
            <InfoBlock label="Order #" value={sampleAttendee.orderNumber} valueMono={true} />
            <InfoBlock label="Tier" value={sampleAttendee.tier} accentValue={true} />
          </Row>

          <Divider style={{ borderTop: `1px solid ${currentTheme.colors.border}` }} />

          <Row stackOnMobile={true} style={{ gap: 16, justifyContent: "space-between" }}>
            <InfoBlock label="Dates" value={eventData.dates} />
            <InfoBlock label="Seat" value={sampleAttendee.seat} />
            <InfoBlock label="Total Paid" value={sampleAttendee.paid} />
          </Row>

          <Divider style={{ borderTop: `1px solid ${currentTheme.colors.border}` }} />

          <InfoBlock label="Venue Location" value={eventData.venue} />
        </Column>

        {/* Action Buttons */}
        <Column style={{ alignItems: "center", gap: 14, padding: [8, 0] }}>
          <Button
            href="https://example.com/calendar"
            style={{
              backgroundColor: currentTheme.colors.primary,
              color: currentTheme.colors.primaryText,
              borderRadius: currentTheme.radius,
              padding: "14px 28px",
              fontSize: currentTheme.type.body,
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Add to calendar
          </Button>

          <Link
            href="https://example.com/ticket.pdf"
            style={{
              fontSize: currentTheme.type.small,
              fontWeight: 600,
              color: currentTheme.colors.accent,
              textDecoration: "underline",
            }}
          >
            Download your ticket (PDF)
          </Link>
        </Column>

        {/* What to bring Checklist */}
        <Column
          style={{
            border: { top: `1px solid ${currentTheme.colors.border}` },
            padding: [20, 0, 0, 0],
            gap: 10,
          }}
        >
          <Text
            style={{
              fontSize: 13,
              fontWeight: 800,
              color: currentTheme.colors.text,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            What to bring on Day 1
          </Text>

          <List type="bullet" style={{ gap: 6, color: currentTheme.colors.textMuted, fontSize: 14 }}>
            <ListItem>Your ticket QR code (digital on your phone or printed PDF)</ListItem>
            <ListItem>A government-issued photo ID matching your registration name</ListItem>
            <ListItem>A laptop charger for interactive breakout and workshop tracks</ListItem>
          </List>
        </Column>
      </Column>

      {/* Email Footer */}
      <Footer venueAddress={eventData.venue} variant="email" />
    </Email>
  );
}
