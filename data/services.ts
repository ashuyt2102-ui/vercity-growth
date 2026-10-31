export type ServiceFaq = { q: string; a: string };
export type Service = {
  id: string;
  slug: string;
  title: string;
  short: string;
  problem: string;
  deliverables: string[];
  process: string[];
  relatedWork: string[];
  faqs: ServiceFaq[];
};

export const services: Service[] = [
  {
    id: "performance-marketing",
    slug: "performance-marketing",
    title: "Performance Marketing",
    short: "Meta Ads, Google Ads, campaign strategy, conversion tracking and optimisation.",
    problem: "You are spending on ads without a clear link between spend and enquiries.",
    deliverables: ["Meta Ads", "Google Ads", "Campaign strategy", "Conversion tracking", "Optimisation"],
    process: ["Discover", "Strategise", "Execute", "Optimise"],
    relatedWork: ["campaign-creative-system-concept"],
    faqs: [{ q: "Is ad spend included?", a: "No. Advertising spend is separate from management fees." }],
  },
  {
    id: "social-media-management",
    slug: "social-media-management",
    title: "Social Media Management",
    short: "Content strategy, Instagram management, reels, creative direction and brand growth.",
    problem: "Your social channels are irregular or disconnected from wider marketing.",
    deliverables: ["Content strategy", "Instagram management", "Reels", "Creative direction", "Brand growth"],
    process: ["Discover", "Strategise", "Execute", "Optimise"],
    relatedWork: ["campaign-creative-system-concept"],
    faqs: [{ q: "How many posts?", a: "Post counts depend on the selected plan." }],
  },
  {
    id: "website-development",
    slug: "website-development",
    title: "Website Development",
    short: "Shopify, WordPress, landing pages and custom websites.",
    problem: "Your website is slow, unclear, or hard to update.",
    deliverables: ["Shopify", "WordPress", "Landing pages", "Custom websites"],
    process: ["Discover", "Strategise", "Execute", "Optimise"],
    relatedWork: ["service-business-landing-concept"],
    faqs: [{ q: "Shopify or WordPress?", a: "Yes, where suitable. Stack chosen per project." }],
  },
  {
    id: "branding-graphic-design",
    slug: "branding-graphic-design",
    title: "Branding & Graphic Design",
    short: "Brand identity, advertising creatives, product graphics and visual systems.",
    problem: "Your visuals look inconsistent or take too long to produce.",
    deliverables: ["Brand identity", "Advertising creatives", "Product graphics", "Visual systems"],
    process: ["Discover", "Strategise", "Execute", "Optimise"],
    relatedWork: ["campaign-creative-system-concept"],
    faqs: [{ q: "Can you follow brand guidelines?", a: "Yes." }],
  },
  {
    id: "video-editing-content",
    slug: "video-editing-content",
    title: "Video Editing & Content Creation",
    short: "Reels, promotional videos, UGC-style advertisements and short-form content.",
    problem: "You need consistent short-form content for ads and social.",
    deliverables: ["Reels", "Promotional videos", "UGC-style ads", "Short-form content"],
    process: ["Discover", "Strategise", "Execute", "Optimise"],
    relatedWork: ["campaign-creative-system-concept"],
    faqs: [{ q: "Revisions?", a: "Revision rounds agreed per project." }],
  },
  {
    id: "influencer-marketing",
    slug: "influencer-marketing",
    title: "Influencer Marketing",
    short: "Creator research, collaborations and campaign management.",
    problem: "You want credible reach through creators.",
    deliverables: ["Creator research", "Collaborations", "Campaign management"],
    process: ["Discover", "Strategise", "Execute", "Optimise"],
    relatedWork: ["campaign-creative-system-concept"],
    faqs: [{ q: "Are creator fees included?", a: "No. Creator fees are separate." }],
  },
  {
    id: "professional-photoshoot",
    slug: "professional-photoshoot",
    title: "Professional Photoshoot",
    short: "Studio and product photography for ecommerce, ads and social content.",
    problem: "Your product images are inconsistent or not strong enough.",
    deliverables: ["Shot list and styling", "Photography session", "Edited image set", "Format variants"],
    process: ["Discover", "Strategise", "Execute", "Optimise"],
    relatedWork: [],
    faqs: [{ q: "Are props included?", a: "Production expenses are confirmed in the quote." }],
  },
  {
    id: "ai-agent",
    slug: "ai-agent",
    title: "AI Agent",
    short: "Custom AI agents for automation, support and lead handling.",
    problem: "You need to automate repetitive tasks and customer interactions.",
    deliverables: ["Agent design", "Workflow integration", "Testing and deployment", "Ongoing tuning"],
    process: ["Discover", "Strategise", "Execute", "Optimise"],
    relatedWork: [],
    faqs: [{ q: "Is hosting included?", a: "Hosting and API costs are confirmed in the quote." }],
  }
];

export function getService(idOrSlug: string) {
  return services.find((s) => s.id === idOrSlug || s.slug === idOrSlug);
}
