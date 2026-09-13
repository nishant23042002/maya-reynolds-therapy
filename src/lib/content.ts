/**
 * Single source of truth for every homepage string.
 *
 * Why this file exists: the assignment grades "reusable themes/colors ... for
 * easy maintainability." The same principle applies to copy — a real client
 * project separates content from markup so a non-developer could eventually
 * edit this file without touching a component. Every draft below came from
 * Dr. Maya Reynolds' profile document (see the Reynolds Rebuild plan, § Maya
 * Reynolds brief and § Starter copy deck) — rewrite these in your own words
 * before this goes in your repo. The assignment explicitly checks for that.
 */

export const site = {
  name: "Dr. Maya Reynolds, PsyD",
  shortName: "Maya Reynolds Therapy",
  email: "hello@mayareynoldstherapy.com", // placeholder — this is a fictional practice
  address: "123th Street 45 W, Santa Monica, CA 90401", // verify against the source doc yourself
};

export const nav = {
  links: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Our Office", href: "#office" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: "Book a Consultation",
};

export const hero = {
  eyebrow: "Anxiety, Trauma & Burnout Therapy in Santa Monica, CA",
  headline: "Steadier ground, even on your hardest days.",
  subtext:
    "In-person sessions in Santa Monica and secure telehealth across California — for high-achievers, creatives, and professionals who feel like they're always bracing for what's next.",
  cta: "Schedule a Free Consultation",
  image: { src: "/images/hero-portrait.jpg", alt: "Woman sitting quietly in a sunlit window, looking out at the trees" },
};

// Structure mirrors the original's mission/about section, verified via
// devtools on conejovalleycounseling.com: one large serif intro line above
// two paragraph columns, each starting with a bold lead sentence.
export const mission = {
  eyebrow: "About Dr. Reynolds",
  introLine: "You don't have to keep bracing for what's next.",
  paragraphs: [
    {
      lead: "I'm a licensed clinical psychologist based in Santa Monica, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experience.",
      rest: "Many of the people I work with are high-achieving and self-aware — but privately exhausted, stuck in overthinking, or emotionally on edge.",
    },
    {
      lead: null as string | null,
      rest: "I take a warm, collaborative, and grounded approach: sessions structured enough to feel supportive, with space left for real reflection and depth.",
    },
  ],
  portrait: { src: "/images/maya-headshot.jpg", alt: "Dr. Maya Reynolds, PsyD" },
};

// TODO(you): Maya's profile only describes adult clients — do not reintroduce
// the original site's "Couples" / "Children & Teens" cards.
export const whoIHelp = [
  {
    title: "Anxious & Overwhelmed",
    body: "For the constant hum of worry, the racing heart before a meeting, the nights sleep won't come easily.",
    image: { src: "/images/who-i-help/anxious.jpg", alt: "Person sitting quietly by a window, lost in thought" },
  },
  {
    title: "Trauma Survivors",
    body: "Single-incident or long-standing — trauma-focused work, including EMDR, at a pace that puts your stability first.",
    image: { src: "/images/who-i-help/trauma.jpg", alt: "Person walking alone on a quiet path, at their own pace" },
  },
  {
    title: "Burned-Out High-Achievers",
    body: "Entrepreneurs, creatives, and professionals stretched thin by perfectionism and pressure.",
    image: { src: "/images/who-i-help/burnout.jpg", alt: "Person pausing for a quiet moment at a desk with a cup of coffee" },
  },
];

export const areasOfFocus = [
  "Anxiety",
  "Panic",
  "Trauma",
  "Burnout",
  "Perfectionism",
  "CBT",
  "EMDR",
  "Mindfulness",
  "Somatic Work",
  "Entrepreneurs & Creatives",
  "Nervous System Regulation",
  "…and more",
];

// Structure mirrors the original's "How We Work" section (devtools-verified):
// full-width tinted band, small eyebrow, H2, two-column paragraph text
// (first column leads with a bold sentence, same pattern as `mission`),
// a tall portrait on the right, and an underlined text link — not a button.
export const howIWork = {
  eyebrow: "How I Work",
  heading: "Here to help you feel steadier — not just fixed.",
  paragraphs: [
    {
      lead: "Sessions are structured enough to feel supportive, while still leaving space for real reflection and depth.",
      rest: "I integrate CBT, EMDR, mindfulness-based practices, and body-oriented techniques, working with both the emotional and physiological sides of what you're experiencing.",
    },
    {
      lead: null as string | null,
      rest: "Trauma work is paced carefully, with safety and stabilization always coming first. My goal isn't just symptom relief — it's helping you feel more regulated day to day, with real insight and a steadier relationship with yourself over time.",
    },
  ],
  cta: "Learn More About Me",
  image: { src: "/images/how-i-work.jpg", alt: "A calm, sunlit corner with comfortable seating" },
};

// Exactly three — the assignment checklist asks for three services, not the
// original site's four specialty cards.
export const services = [
  {
    title: "Anxiety & Panic Therapy",
    body: "We'll use CBT and mindfulness-based tools to understand what's driving the anxiety — and build a calmer, steadier baseline in daily life.",
  },
  {
    title: "Trauma Therapy & EMDR",
    body: "Trauma-focused work, including EMDR, helps your nervous system feel safe enough to let go of old bracing. We move at a pace that respects your stability first.",
  },
  {
    title: "Burnout Recovery for High-Achievers",
    body: "For entrepreneurs, creatives, and professionals running on empty, we'll rebuild sustainable ways of working — without losing the drive that got you here.",
  },
];

// New section required by Part 3 — not present on the original homepage.
export const office = {
  heading: "A Quiet Place to Land",
  body: "Sessions happen in a private Santa Monica office designed to feel calm the moment you walk in: natural light, comfortable seating, nothing to distract from the work. If getting here isn't realistic, secure telehealth is available anywhere in California.",
  images: [
    { src: "/images/office/office-1.jpg", alt: "Session room with large windows, natural light, and neutral seating" },
    { src: "/images/office/office-2.jpg", alt: "A second seating area with a bookshelf, used for reflection between conversations" },
  ],
};

// Required by the copy checklist even though the original homepage has no
// on-page FAQ (its nav links to a separate page) — see Reynolds Rebuild § 4.
// Kept to what the profile actually supports: no invented pricing/insurance.
export const faq = [
  {
    q: "Do you offer both in-person and online sessions?",
    a: "Yes — in person at my Santa Monica office, or by secure telehealth anywhere in California.",
  },
  {
    q: "What is EMDR, and could it help me?",
    a: "It's an evidence-based method for processing trauma so the memory stops carrying the same charge. We'd talk through whether it fits your situation in an early session.",
  },
  {
    q: "I function fine on the outside but feel exhausted underneath — is that something you treat?",
    a: "Yes — this is one of the most common things I hear, especially from entrepreneurs, creatives, and other high-achievers.",
  },
];

// Structure mirrors the original's final CTA (devtools-verified): tinted
// band, small eyebrow, H2, supporting paragraph, and an outlined button —
// the only outlined (not solid) button on the original homepage — plus a
// supporting photo instead of a plain color background.
export const ctaBanner = {
  eyebrow: "Schedule a Consultation",
  heading: "Find steadier ground.",
  body: "Click below to schedule a free 15-minute consultation.",
  cta: "Book Now",
  image: { src: "/images/cta-support.jpg", alt: "Calm, warm-toned still life" },
};
