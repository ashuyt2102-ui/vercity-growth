export type Testimonial = {
  id: string;
  name: string;
  company: string;
  role: string;
  quote: string;
  photo?: string;
  permissionRecorded: boolean;
  sample?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    id: "sample-1",
    name: "Sample Client",
    company: "Sample Company",
    role: "Founder",
    quote: "Sample testimonial for development. Replace with approved client feedback.",
    permissionRecorded: false,
    sample: true,
  },
];
