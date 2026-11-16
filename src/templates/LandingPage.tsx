import { Column, Grid, Heading, Page, Row, Section, Text } from "@hyper-elements/react";
import { BrandHeader } from "../components/BrandHeader.js";
import { CtaButton } from "../components/CtaButton.js";
import { FaqItem } from "../components/FaqItem.js";
import { Footer } from "../components/Footer.js";
import { PriceCard } from "../components/PriceCard.js";
import { ScheduleRow } from "../components/ScheduleRow.js";
import { SectionTitle } from "../components/SectionTitle.js";
import { SpeakerCard } from "../components/SpeakerCard.js";
import { eventData, faqs, pricingTiers, schedule, speakers } from "../data.js";
import { currentTheme } from "../tokens.js";

export function LandingPage() {
  return (
    <Page
      width={1120}
      title={`${eventData.name} — Lisbon, Portugal`}
      description={eventData.tagline}
      style={{
        backgroundColor: currentTheme.colors.bg,
        color: currentTheme.colors.text,
        fontFamily: currentTheme.fonts.body,
        gap: 64,
      }}
    >
      {/* 1. Header Bar */}
      <BrandHeader
        rightText="March 18–19, 2027"
        ctaHref="#tickets"
        ctaText="Get tickets"
        variant="web"
      />

      {/* 2. Hero Section */}
      <Column
        style={{
          alignItems: "center",
          textAlign: "center",
          padding: [64, 24, 72, 24],
          backgroundColor: currentTheme.colors.surface,
          border: `1px solid ${currentTheme.colors.border}`,
          borderRadius: currentTheme.radius * 1.5,
          gap: 32,
          width: "100%",
        }}
      >
        <Column style={{ alignItems: "center", gap: 16, maxWidth: 840 }}>
          <Column
            style={{
              backgroundColor: currentTheme.colors.surfaceAlt,
              border: `1px solid ${currentTheme.colors.border}`,
              borderRadius: 30,
              padding: "6px 18px",
            }}
          >
            <Text
              style={{
                fontSize: currentTheme.type.small,
                fontWeight: 700,
                color: currentTheme.colors.accent,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              Lisbon · March 18–19, 2027
            </Text>
          </Column>

          <Heading
            level={1}
            style={{
              fontSize: currentTheme.type.h1,
              fontWeight: 900,
              color: currentTheme.colors.text,
              lineHeight: 1.1,
              letterSpacing: -1,
              mobile: {
                fontSize: 36,
              },
            }}
          >
            {eventData.name}
          </Heading>

          <Text
            style={{
              fontSize: 20,
              lineHeight: 1.5,
              color: currentTheme.colors.textMuted,
              maxWidth: 680,
              mobile: {
                fontSize: 16,
              },
            }}
          >
            {eventData.tagline}
          </Text>
        </Column>

        {/* Hero CTAs */}
        <Row stackOnMobile={true} style={{ gap: 16, justifyContent: "center", alignItems: "center" }}>
          <CtaButton href="#tickets" variant="primary">
            {eventData.ctaText}
          </CtaButton>
          <CtaButton href="#schedule" variant="secondary">
            View schedule
          </CtaButton>
        </Row>

        {/* Stats Grid */}
        <Grid
          columns={4}
          stackOnMobile={true}
          style={{
            width: "100%",
            gap: 16,
            padding: [32, 0, 0, 0],
            border: { top: `1px solid ${currentTheme.colors.border}` },
          }}
        >
          {eventData.stats.map((stat, i) => (
            <Column key={i} style={{ alignItems: "center", gap: 4, textAlign: "center" }}>
              <Heading
                level={3}
                style={{
                  fontSize: 32,
                  fontWeight: 800,
                  color: currentTheme.colors.accent,
                  lineHeight: 1.1,
                }}
              >
                {stat.value}
              </Heading>
              <Text
                style={{
                  fontSize: currentTheme.type.small,
                  fontWeight: 600,
                  color: currentTheme.colors.textMuted,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </Text>
            </Column>
          ))}
        </Grid>
      </Column>

      {/* 3. Speakers Section */}
      <Column style={{ width: "100%", gap: 32 }}>
        <SectionTitle
          eyebrow="Keynotes & Panels"
          title="Industry leaders shaping modern software"
          subtitle="Learn firsthand from engineers and designers leading high-impact teams worldwide."
        />
        <Grid columns={4} stackOnMobile={true} style={{ gap: 20, width: "100%" }}>
          {speakers.map((speaker) => (
            <SpeakerCard
              key={speaker.id}
              name={speaker.name}
              role={speaker.role}
              company={speaker.company}
              avatar={speaker.avatar}
            />
          ))}
        </Grid>
      </Column>

      {/* 4. Schedule Section */}
      <Column id="schedule" style={{ width: "100%", gap: 32 }}>
        <SectionTitle
          eyebrow="Curated Agenda"
          title="Day 1 Schedule: Thursday, March 18"
          subtitle="Doors open at 08:30 for morning coffee and check-in. Keynotes begin promptly at 09:30."
        />
        <Column
          style={{
            backgroundColor: currentTheme.colors.surface,
            border: `1px solid ${currentTheme.colors.border}`,
            borderRadius: currentTheme.radius,
            overflow: "hidden",
            width: "100%",
          }}
        >
          {schedule.map((item, idx) => (
            <ScheduleRow
              key={idx}
              time={item.time}
              title={item.title}
              speaker={item.speaker}
              isLast={idx === schedule.length - 1}
            />
          ))}
        </Column>
      </Column>

      {/* 5. Pricing Section */}
      <Column id="tickets" style={{ width: "100%", gap: 32 }}>
        <SectionTitle
          eyebrow="Passes & Registration"
          title="Simple, transparent conference pricing"
          subtitle="All passes include full access to the conference venue, catering, and post-event talk recordings."
        />
        <Grid columns={3} stackOnMobile={true} style={{ gap: 24, width: "100%" }}>
          {pricingTiers.map((tier, idx) => (
            <PriceCard
              key={idx}
              name={tier.name}
              price={tier.price}
              features={tier.features}
              badge={tier.badge}
              highlighted={tier.highlighted}
            />
          ))}
        </Grid>
      </Column>

      {/* 6. FAQ Section */}
      <Column style={{ width: "100%", gap: 32 }}>
        <SectionTitle
          eyebrow="Got Questions?"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about ticketing, accessibility, transfers, and venue logistics."
        />
        <Column style={{ gap: 16, width: "100%" }}>
          {faqs.map((faq, idx) => (
            <FaqItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </Column>
      </Column>

      {/* 7. Final CTA Band */}
      <Column
        style={{
          width: "100%",
          backgroundColor: currentTheme.colors.surfaceAlt,
          border: `1px solid ${currentTheme.colors.accent}`,
          borderRadius: currentTheme.radius * 1.5,
          padding: [56, 32],
          gap: 24,
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Heading
          level={2}
          style={{
            fontSize: currentTheme.type.h2,
            fontWeight: 800,
            color: currentTheme.colors.text,
            mobile: {
              fontSize: 26,
            },
          }}
        >
          Join 2,000 builders in Lisbon.
        </Heading>
        <Text
          style={{
            fontSize: currentTheme.type.body,
            color: currentTheme.colors.textMuted,
            maxWidth: 580,
            lineHeight: 1.5,
          }}
        >
          Two days of intensive learning, architecture breakdowns, and direct conversations with peers from across the globe.
        </Text>
        <CtaButton href="#tickets" variant="primary">
          {eventData.ctaText}
        </CtaButton>
      </Column>

      {/* 8. Footer */}
      <Footer venueAddress={eventData.venue} variant="web" />
    </Page>
  );
}
