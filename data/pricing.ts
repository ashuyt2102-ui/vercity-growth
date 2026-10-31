export type PricingPlan = {
  id: string;
  name: string;
  price: number | null;
  period: "month";
  summary: string;
  scope: string[];
  cta: string;
  popular?: boolean;
  custom?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: 9999,
    period: "month",
    summary: "Basic marketing strategy and social media support.",
    scope: [
      "Basic marketing strategy",
      "Social media audit",
      "12 static creatives",
      "4 reels",
      "Monthly performance report",
      "Basic content calendar",
    ],
    cta: "Get started",
  },
  {
    id: "growth",
    name: "Growth",
    price: 19999,
    period: "month",
    summary: "Complete growth strategy with Meta Ads management.",
    scope: [
      "Complete growth strategy",
      "20 static creatives",
      "8 reels",
      "Meta Ads management",
      "Campaign optimisation",
      "Monthly performance report",
      "Content calendar",
      "Creative consultation",
    ],
    cta: "Get started",
    popular: true,
  },
  {
    id: "scale",
    name: "Scale",
    price: 34999,
    period: "month",
    summary: "Advanced strategy with Meta and Google Ads management.",
    scope: [
      "Advanced marketing strategy",
      "30 static creatives",
      "12 reels",
      "Meta and Google Ads management",
      "Advanced campaign optimisation",
      "Landing page recommendations",
      "Competitor analysis",
      "Priority support",
      "Detailed reporting",
    ],
    cta: "Get started",
  },
  {
    id: "enterprise",
    name: "Enterprise / Custom",
    price: null,
    period: "month",
    summary: "Custom scope for large-scale campaigns.",
    scope: [
      "Custom marketing strategy",
      "Large-scale campaigns",
      "Dedicated creative direction",
      "Custom development",
      "Tailored deliverables",
    ],
    cta: "Let's discuss",
    custom: true,
  },
  {
    id: "professional-photoshoot",
    name: "Professional Photoshoot",
    price: 15000,
    period: "month",
    summary: "Studio and product photography for ecommerce and ads.",
    scope: [
      "Shot list and styling plan",
      "Photography session",
      "Edited image set",
      "Format variants for channels",
    ],
    cta: "Book a shoot",
  },
  {
    id: "ai-agent",
    name: "AI Agent",
    price: 15000,
    period: "month",
    summary: "Custom AI agents for automation, support and lead handling.",
    scope: [
      "Agent design",
      "Workflow integration",
      "Testing and deployment",
      "Ongoing tuning",
    ],
    cta: "Build an agent",
  }
];

export function formatINR(value: number) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);
}

export function getPlan(id: string) {
  return pricingPlans.find((p) => p.id === id);
}
