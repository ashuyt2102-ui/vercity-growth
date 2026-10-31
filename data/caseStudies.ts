export type CaseStudy = {
  id: string;
  title: string;
  client: string;
  industry: string;
  overview: string;
  challenge: string;
  strategy: string;
  execution: string;
  results: string[]; // only verified stats; empty array hides section
  lessons: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "cs1",
    title: "Performance-Led Growth Engagement",
    client: "Demo Client",
    industry: "E-Commerce",
    overview: "Demo case study placeholder. Replace with verified client details.",
    challenge: "Placeholder challenge description.",
    strategy: "Placeholder strategy description.",
    execution: "Placeholder execution description.",
    results: [], // Add verified metrics only
    lessons: "Placeholder lessons learned.",
  },
];