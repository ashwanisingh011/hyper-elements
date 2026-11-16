export interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export interface ScheduleItem {
  time: string;
  title: string;
  speaker: string;
}

export interface PricingTier {
  name: string;
  price: string;
  badge?: string;
  highlighted?: boolean;
  features: string[];
}

export interface FaqItemData {
  question: string;
  answer: string;
}

export interface Attendee {
  name: string;
  email: string;
  tier: string;
  orderNumber: string;
  seat: string;
  paid: string;
  orderDate: string;
}

export const eventData = {
  name: "Northwind Summit 2027",
  tagline: "Two days. One stage. Everything about building the next decade of software.",
  dates: "March 18–19, 2027",
  venue: "The Foundry, 42 Harbor Street, Lisbon, Portugal",
  doorsOpen: "08:30",
  startTime: "09:30",
  ctaText: "Get your ticket",
  ctaUrl: "https://example.com/tickets",
  stats: [
    { value: "2,000", label: "Attendees" },
    { value: "40", label: "Speakers" },
    { value: "3", label: "Stages" },
    { value: "2", label: "Days" },
  ],
};

export const speakers: Speaker[] = [
  {
    id: "speaker-1",
    name: "Maya Okonkwo",
    role: "Principal Engineer",
    company: "Lumen Labs",
    avatar: "assets/speaker-1.svg",
  },
  {
    id: "speaker-2",
    name: "Daniel Reyes",
    role: "Head of Design",
    company: "Parallel",
    avatar: "assets/speaker-2.svg",
  },
  {
    id: "speaker-3",
    name: "Priya Nair",
    role: "CTO",
    company: "Kestrel Health",
    avatar: "assets/speaker-3.svg",
  },
  {
    id: "speaker-4",
    name: "Jonas Lindqvist",
    role: "Founder",
    company: "Fjord Systems",
    avatar: "assets/speaker-4.svg",
  },
];

export const schedule: ScheduleItem[] = [
  { time: "09:30", title: "Opening keynote: The Next Decade", speaker: "Maya Okonkwo" },
  { time: "10:45", title: "Designing for Humans and Agents", speaker: "Daniel Reyes" },
  { time: "12:00", title: "Lunch and community tables", speaker: "n/a" },
  { time: "13:30", title: "Scaling Teams Without Scaling Chaos", speaker: "Priya Nair" },
  { time: "15:00", title: "Shipping Small, Learning Fast", speaker: "Jonas Lindqvist" },
  { time: "16:30", title: "Closing panel and party", speaker: "All speakers" },
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Community",
    price: "€149",
    features: ["Access to all talks", "Lunch & refreshments", "Online recordings access"],
  },
  {
    name: "Professional",
    price: "€349",
    highlighted: true,
    badge: "Most popular",
    features: [
      "Everything in Community",
      "Hands-on masterclass workshops",
      "Official speaker dinner invitation",
      "Priority main-stage seating",
    ],
  },
  {
    name: "Team (5 seats)",
    price: "€1,299",
    features: [
      "Everything in Professional",
      "Dedicated team working lounge",
      "Express check-in lane",
      "Custom company badge billing",
    ],
  },
];

export const faqs: FaqItemData[] = [
  {
    question: "Can I get a refund?",
    answer: "Yes, tickets can be fully refunded up to 30 days before the event starts.",
  },
  {
    question: "Is there a student discount?",
    answer: "Yes, 50% discount is available with a valid verified student ID.",
  },
  {
    question: "Will talks be recorded?",
    answer: "All main-stage talks are recorded and published in high definition within one week.",
  },
  {
    question: "Is the venue accessible?",
    answer: "Fully step-free venue with accessible restrooms, elevators, and dedicated quiet rooms.",
  },
  {
    question: "Can I transfer my ticket?",
    answer: "Yes, you can transfer your ticket to a colleague free of charge up to 48 hours prior to kickoff.",
  },
];

export const sampleAttendee: Attendee = {
  name: "Alex Morgan",
  email: "alex@example.com",
  tier: "Professional",
  orderNumber: "NWS-2027-004218",
  seat: "Block B · Row 7 · Seat 12",
  paid: "€349.00",
  orderDate: "January 12, 2027",
};
