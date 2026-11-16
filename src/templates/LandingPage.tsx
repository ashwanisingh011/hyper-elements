import { Column, Grid, Heading, Page, Row, Text } from "@hyper-elements/react";
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
  const isMidnight = currentTheme.name === "midnight";
  const bg = currentTheme.colors.bg;
  const surface = currentTheme.colors.surface;
  const surfaceAlt = currentTheme.colors.surfaceAlt;
  const text = currentTheme.colors.text;
  const muted = currentTheme.colors.textMuted;
  const border = currentTheme.colors.border;
  const accent = currentTheme.colors.accent;

  return (
    <Page
      width={1120}
      title={`${eventData.name} — Lisbon, Portugal // 2027`}
      description={eventData.tagline}
      style={{
        backgroundColor: bg,
        color: text,
        fontFamily: currentTheme.fonts.body,
        gap: 64,
      }}
    >
      {/* 1. Header Bar */}
      <BrandHeader
        rightText="38°42'N 9°08'W · LISBON"
        ctaHref="#tickets"
        ctaText="Reserve Pass"
        variant="web"
      />

      {/* 2. Hero Section */}
      <Column
        style={{
          alignItems: "center",
          textAlign: "center",
          padding: [72, 32, 80, 32],
          backgroundColor: surface,
          border: `1.5px solid ${border}`,
          borderRadius: currentTheme.radius * 2,
          gap: 32,
          width: "100%",
        }}
      >
        <Column style={{ alignItems: "center", gap: 18, maxWidth: 880 }}>
          <Column
            style={{
              backgroundColor: surfaceAlt,
              border: `1px solid ${border}`,
              borderRadius: 4,
              padding: "6px 16px",
            }}
          >
            <Text
              style={{
                fontFamily: currentTheme.fonts.mono,
                fontSize: 11,
                fontWeight: 700,
                color: accent,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              // LISBON · MARCH 18–19, 2027 · THE FOUNDRY
            </Text>
          </Column>

          <Heading
            level={1}
            style={{
              fontFamily: currentTheme.fonts.heading,
              fontSize: 72,
              fontWeight: 700,
              color: text,
              lineHeight: 1.05,
              letterSpacing: -1.5,
              mobile: {
                fontSize: 42,
              },
            }}
          >
            Building the next decade of software.
          </Heading>

          <Text
            style={{
              fontSize: 20,
              lineHeight: 1.5,
              color: muted,
              maxWidth: 720,
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
          <CtaButton href="#tickets" variant="accent">
            {eventData.ctaText}
          </CtaButton>
          <CtaButton href="#schedule" variant="secondary">
            View Schedule // Day 1
          </CtaButton>
        </Row>

        {/* Stats Grid */}
        <Grid
          columns={4}
          stackOnMobile={true}
          style={{
            width: "100%",
            gap: 16,
            padding: [36, 0, 0, 0],
            border: { top: `1px solid ${border}` },
          }}
        >
          {eventData.stats.map((stat, i) => (
            <Column key={i} style={{ alignItems: "center", gap: 4, textAlign: "center" }}>
              <Heading
                level={3}
                style={{
                  fontFamily: currentTheme.fonts.heading,
                  fontSize: 38,
                  fontWeight: 700,
                  color: accent,
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </Heading>
              <Text
                style={{
                  fontFamily: currentTheme.fonts.mono,
                  fontSize: 10,
                  fontWeight: 700,
                  color: muted,
                  letterSpacing: 1.5,
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
          eyebrow="01 // CURATED KEYNOTES"
          title="Engineers & Designers Shaping Systems at Scale"
          subtitle="Direct technical breakdowns from leaders authoring architectures that outlive hype cycles."
        />
        <Grid columns={4} stackOnMobile={true} style={{ gap: 20, width: "100%" }}>
          {speakers.map((speaker) => (
            <SpeakerCard
              key={speaker.id}
              id={speaker.id}
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
          eyebrow="02 // AGENDA TIMELINE"
          title="Day 1 Schedule: Thursday, March 18"
          subtitle="Morning access and badging begin at 08:30 GMT. Opening address commences promptly at 09:30 GMT."
        />
        <Column
          style={{
            backgroundColor: surface,
            border: `1px solid ${border}`,
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
          eyebrow="03 // DELEGATE ACCESS"
          title="Transparent Conference Passes"
          subtitle="Every registration grants full venue access, catered lunches, keynote recordings, and community tables."
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
          eyebrow="04 // VENUE & LOGISTICS"
          title="Frequently Asked Questions"
          subtitle="Essential details regarding accessibility, badge transfers, catering, and venue transit in Lisbon."
        />
        <Column style={{ gap: 16, width: "100%" }}>
          {faqs.map((faq, idx) => (
            <FaqItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </Column>
      </Column>

      {/* 7. Final Call to Action */}
      <Column
        style={{
          width: "100%",
          backgroundColor: surfaceAlt,
          border: `1.5px solid ${accent}`,
          borderRadius: currentTheme.radius * 2,
          padding: [56, 32],
          gap: 22,
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Text
          style={{
            fontFamily: currentTheme.fonts.mono,
            fontSize: 11,
            fontWeight: 700,
            color: accent,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          // CAPACITY STRICTLY LIMITED TO 2,000 ATTENDEES
        </Text>
        <Heading
          level={2}
          style={{
            fontFamily: currentTheme.fonts.heading,
            fontSize: 48,
            fontWeight: 700,
            color: text,
            lineHeight: 1.1,
            mobile: {
              fontSize: 30,
            },
          }}
        >
          Join 2,000 builders in Lisbon.
        </Heading>
        <Text
          style={{
            fontSize: currentTheme.type.body,
            color: muted,
            maxWidth: 580,
            lineHeight: 1.5,
          }}
        >
          Two days of deep technical dialogue, architectural post-mortems, and lasting connections on the Atlantic riverfront.
        </Text>
        <CtaButton href="#tickets" variant="accent">
          {eventData.ctaText} // Reserve Now
        </CtaButton>
      </Column>

      {/* 8. Footer */}
      <Footer venueAddress={eventData.venue} variant="web" />
    </Page>
  );
}
