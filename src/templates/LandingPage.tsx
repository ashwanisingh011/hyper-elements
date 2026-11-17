import { Column, Divider, Grid, Heading, Page, Row, Text } from "@hyper-elements/react";
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
  const t = currentTheme;
  const c = t.colors;

  return (
    <Page
      width={t.maxWidth}
      title={`${eventData.name} — Lisbon, March 2027`}
      description={eventData.tagline}
      fonts={[
        { family: "Fraunces", src: "https://fonts.gstatic.com/s/fraunces/v31/6NUh6bt6Q3OBJhbSKQhzyVgB.woff2", format: "woff2", weight: "100 900" },
        { family: "Inter", src: "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hiA.woff2", format: "woff2", weight: "100 900" },
        { family: "IBM Plex Mono", src: "https://fonts.gstatic.com/s/ibmplexmono/v19/-F63fjptAgt5VM-kVkqdyU8n5iQ.woff2", format: "woff2", weight: "400 600" },
      ]}
      style={{
        backgroundColor: c.bg,
        color: c.text,
        fontFamily: t.fonts.body,
        gap: 0,
      }}
    >
      {/* ── 1. Header Bar ── */}
      <Column style={{ padding: [0, 48], width: "100%", mobile: { padding: [0, 20] } }}>
        <BrandHeader
          rightText="Lisbon / March 18–19, 2027"
          ctaHref="#tickets"
          ctaText="Reserve Pass"
          variant="web"
        />
      </Column>

      {/* ── 2. Hero Section — left-aligned, oversized headline ── */}
      <Column
        style={{
          padding: [t.space.section, 48, t.space.section, 48],
          gap: 32,
          width: "100%",
          alignItems: "start",
          mobile: { padding: [t.space.sectionMobile, 20] },
        }}
      >
        {/* Mono eyebrow */}
        <Text
          style={{
            fontFamily: t.fonts.mono,
            fontSize: t.type.kicker,
            fontWeight: 500,
            color: c.accent,
            letterSpacing: 1.5,
            textTransform: "uppercase",
          }}
        >
          Lisbon / March 18–19, 2027
        </Text>

        {/* Oversized headline */}
        <Heading
          level={1}
          style={{
            fontFamily: t.fonts.display,
            fontSize: t.type.h1,
            fontWeight: 500,
            color: c.text,
            lineHeight: 1.05,
            letterSpacing: -1.5,
            maxWidth: 900,
            mobile: {
              fontSize: t.type.h1Mobile,
            },
          }}
        >
          Building the next decade of software.
        </Heading>

        {/* Tagline in muted */}
        <Text
          style={{
            fontSize: 18,
            lineHeight: 1.6,
            color: c.textMuted,
            maxWidth: 600,
          }}
        >
          {eventData.tagline}
        </Text>

        {/* CTA row: one accent button + one text link */}
        <Row stackOnMobile={true} style={{ gap: 16, alignItems: "center" }}>
          <CtaButton href="#tickets" variant="accent">
            {eventData.ctaText}
          </CtaButton>
          <CtaButton href="#schedule" variant="secondary">
            View Schedule
          </CtaButton>
        </Row>

        {/* Stats row with hairline vertical dividers */}
        <Row
          stackOnMobile={true}
          style={{
            width: "100%",
            gap: 0,
            padding: [40, 0, 0, 0],
            border: { top: `1px solid ${c.border}` },
          }}
        >
          {eventData.stats.map((stat, i) => (
            <Column
              key={i}
              style={{
                flex: 1,
                padding: [24, 0],
                gap: 4,
                alignItems: "start",
                border: i < eventData.stats.length - 1
                  ? { right: `1px solid ${c.border}` }
                  : undefined,
              }}
            >
              <Heading
                level={3}
                style={{
                  fontFamily: t.fonts.display,
                  fontSize: 40,
                  fontWeight: 500,
                  color: c.text,
                  lineHeight: 1,
                  letterSpacing: -0.5,
                }}
              >
                {stat.value}
              </Heading>
              <Text
                style={{
                  fontFamily: t.fonts.mono,
                  fontSize: 11,
                  fontWeight: 500,
                  color: c.textMuted,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </Text>
            </Column>
          ))}
        </Row>
      </Column>

      {/* ── 3. Speakers Section — white surface band ── */}
      <Column
        style={{
          width: "100%",
          backgroundColor: c.surface,
          border: { top: `1px solid ${c.border}`, bottom: `1px solid ${c.border}` },
          padding: [t.space.section, 48],
          gap: 40,
          mobile: { padding: [t.space.sectionMobile, 20] },
        }}
      >
        <SectionTitle
          eyebrow="01 / Speakers"
          title="Engineers and designers shaping systems at scale"
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

      {/* ── 4. Schedule Section — paper bg ── */}
      <Column
        id="schedule"
        style={{
          width: "100%",
          padding: [t.space.section, 48],
          gap: 40,
          mobile: { padding: [t.space.sectionMobile, 20] },
        }}
      >
        <SectionTitle
          eyebrow="02 / Schedule"
          title="Day 1: Thursday, March 18"
          subtitle="Doors open at 08:30. Opening address at 09:30."
        />
        <Column
          style={{
            backgroundColor: c.surface,
            border: `1px solid ${c.border}`,
            borderRadius: t.radius,
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

      {/* ── 5. Pricing Section — surfaceAlt bg ── */}
      <Column
        id="tickets"
        style={{
          width: "100%",
          backgroundColor: c.surfaceAlt,
          border: { top: `1px solid ${c.border}`, bottom: `1px solid ${c.border}` },
          padding: [t.space.section, 48],
          gap: 40,
          mobile: { padding: [t.space.sectionMobile, 20] },
        }}
      >
        <SectionTitle
          eyebrow="03 / Tickets"
          title="Transparent conference passes"
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

      {/* ── 6. FAQ Section — paper bg ── */}
      <Column
        style={{
          width: "100%",
          padding: [t.space.section, 48],
          gap: 40,
          mobile: { padding: [t.space.sectionMobile, 20] },
        }}
      >
        <SectionTitle
          eyebrow="04 / FAQ"
          title="Frequently asked questions"
          subtitle="Essential details regarding accessibility, transfers, catering, and venue transit in Lisbon."
        />
        <Column style={{ width: "100%" }}>
          {faqs.map((faq, idx) => (
            <FaqItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </Column>
      </Column>

      {/* ── 7. Dark ink CTA band ── */}
      <Column
        style={{
          width: "100%",
          backgroundColor: c.darkBg,
          padding: [t.space.section, 48],
          gap: 24,
          alignItems: "center",
          textAlign: "center",
          mobile: { padding: [t.space.sectionMobile, 20] },
        }}
      >
        <Text
          style={{
            fontFamily: t.fonts.mono,
            fontSize: t.type.kicker,
            fontWeight: 500,
            color: c.accent,
            letterSpacing: 1.5,
            textTransform: "uppercase",
          }}
        >
          Capacity limited to 2,000 attendees
        </Text>
        <Heading
          level={2}
          style={{
            fontFamily: t.fonts.display,
            fontSize: 48,
            fontWeight: 500,
            color: c.darkText,
            lineHeight: 1.1,
            letterSpacing: -1,
            mobile: {
              fontSize: 32,
            },
          }}
        >
          Join 2,000 builders in Lisbon.
        </Heading>
        <Text
          style={{
            fontSize: t.type.body,
            color: t.name === "paper" ? "#A09E96" : c.textMuted,
            maxWidth: 540,
            lineHeight: 1.6,
          }}
        >
          Two days of deep technical dialogue, architectural post-mortems, and lasting connections on the Atlantic riverfront.
        </Text>
        <CtaButton href="#tickets" variant="accent">
          {eventData.ctaText}
        </CtaButton>
      </Column>

      {/* ── 8. Footer ── */}
      <Column style={{ padding: [0, 48], width: "100%", mobile: { padding: [0, 20] } }}>
        <Footer venueAddress={eventData.venue} variant="web" />
      </Column>
    </Page>
  );
}
