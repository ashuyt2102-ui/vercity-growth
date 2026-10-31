export type SocialLink = { label: string; href: string; icon: string };
export type ContactConfig = {
  email?: string;
  phone?: string;
  whatsapp?: string;
  bookingUrl?: string;
  address?: string;
};

export const siteConfig = {
  name: "Vercity Growth",
  wordmark: "VERCITY GROWTH",
  tagline: "Strategy. Creative. Performance.",
  description:
    "Vercity Growth brings performance marketing, websites, content, and creative together to help your business reach the right audience and turn interest into enquiries.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://vercitygrowth.com",
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Our Work", href: "/work" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  contact: {
    email: process.env.NEXT_PUBLIC_BUSINESS_CONTACT_EMAIL || process.env.BUSINESS_CONTACT_EMAIL || "vercitygrowth@gmail.com",
    phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || "+91 88513 84747",
    whatsapp: process.env.NEXT_PUBLIC_BUSINESS_WHATSAPP || "918851384747",
    bookingUrl: process.env.NEXT_PUBLIC_BUSINESS_BOOKING_URL || undefined,
  } satisfies ContactConfig,
  socials: ([
    process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM
      ? { label: "Instagram", href: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM, icon: "Instagram" }
      : null,
    process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN
      ? { label: "LinkedIn", href: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN, icon: "Linkedin" }
      : null,
    process.env.NEXT_PUBLIC_SOCIAL_X
      ? { label: "X", href: process.env.NEXT_PUBLIC_SOCIAL_X, icon: "Twitter" }
      : null,
    process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE
      ? { label: "YouTube", href: process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE, icon: "Youtube" }
      : null,
  ].filter(Boolean) as SocialLink[]),
};

export const serviceIds = [
  "performance-marketing",
  "social-media-management",
  "website-development",
  "branding-graphic-design",
  "video-editing-content",
  "influencer-marketing",
  "professional-photoshoot",
  "ai-agent",
] as const;
export type ServiceId = (typeof serviceIds)[number];

export const budgetOptions = [
  "Below ₹15,000",
  "₹15,000–₹24,999",
  "₹25,000–₹49,999",
  "₹50,000–₹99,999",
  "₹1,00,000+",
  "Help me choose",
] as const;
