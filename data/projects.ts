export type Project = {
  id: string;
  slug: string;
  title: string;
  label: string;
  category: string;
  brief: string;
  client: string;
  industry: string;
  services: string[];
  description: string;
  audience: string;
  approach: string;
  deliverables: string[];
  decisions: string[];
  cover: string;
  gallery: string[];
};

export const projectCategories = ["All Projects", "Performance Marketing", "Branding", "Website Development", "Social Media", "Creative Campaigns"] as const;

export const projects: Project[] = [
  {
    id: "performance-marketing-project",
    slug: "performance-marketing-project",
    title: "Performance Marketing Project",
    label: "Client project",
    category: "Performance Marketing",
    brief: "Paid campaign setup and optimisation for lead generation.",
    client: "Client",
    industry: "Services",
    services: ["Performance Marketing"],
    description: "Real client project.",
    audience: "Service businesses.",
    approach: "Clear campaign structure and tracking.",
    deliverables: ["Campaign plan", "Tracking setup", "Creative briefs"],
    decisions: ["Focus on measurable outcomes"],
    cover: "/images/project-1.jpg",
    gallery: ["/images/project-1.jpg"],
  },
  {
    id: "branding-project",
    slug: "branding-project",
    title: "Branding Project",
    label: "Client project",
    category: "Branding",
    brief: "Brand identity and visual system for a growing business.",
    client: "Client",
    industry: "Retail",
    services: ["Branding & Graphic Design"],
    description: "Real client project.",
    audience: "Brands needing identity.",
    approach: "Consistent visual system.",
    deliverables: ["Logo", "Colour system", "Typography"],
    decisions: ["Prioritise consistency"],
    cover: "/images/project-2.png",
    gallery: ["/images/project-2.png"],
  },
  {
    id: "website-development-project",
    slug: "website-development-project",
    title: "Website Development Project",
    label: "Client project",
    category: "Website Development",
    brief: "Responsive website for service enquiries.",
    client: "Client",
    industry: "Services",
    services: ["Website Development"],
    description: "Real client project.",
    audience: "Service businesses.",
    approach: "Clear hierarchy and fast enquiry path.",
    deliverables: ["Home page", "Service pages", "Contact form"],
    decisions: ["Single primary CTA"],
    cover: "/images/project-3.png",
    gallery: ["/images/project-3.png"],
  },
  {
    id: "social-media-project",
    slug: "social-media-project",
    title: "Social Media Project",
    label: "Client project",
    category: "Social Media",
    brief: "Social content planning and creative for brand growth.",
    client: "Client",
    industry: "Lifestyle",
    services: ["Social Media Management"],
    description: "Real client project.",
    audience: "Brands growing social presence.",
    approach: "Consistent posting rhythm.",
    deliverables: ["Content calendar", "Post templates", "Reels plan"],
    decisions: ["Quality over volume"],
    cover: "/images/project-4.png",
    gallery: ["/images/project-4.png"],
  },
  {
    id: "creative-campaign-project",
    slug: "creative-campaign-project",
    title: "Creative Campaign Project",
    label: "Client project",
    category: "Creative Campaigns",
    brief: "Multi-format campaign creatives for ads and social.",
    client: "Client",
    industry: "Consumer",
    services: ["Video Editing & Content Creation"],
    description: "Real client project.",
    audience: "Brands running campaigns.",
    approach: "One core message across formats.",
    deliverables: ["Ad layouts", "Story formats", "Banner adaptations"],
    decisions: ["Consistent type and colour"],
    cover: "/images/project-5.png",
    gallery: ["/images/project-5.png"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
