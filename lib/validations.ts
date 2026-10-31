import { z } from "zod";

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

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(120, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(200),
  service: z.enum(serviceIds, { message: "Please select a service" }),
  brief: z.string().trim().min(10, "Please share a short project brief").max(4000, "Brief is too long"),
  businessName: z.string().trim().max(160).optional().or(z.literal("")),
  phone: z
    .string()
    .trim()
    .max(30)
    .regex(/^[0-9+\-\s()]*$/, "Please enter a valid phone number")
    .optional()
    .or(z.literal("")),
  budget: z.string().trim().max(80).optional().or(z.literal("")),
  adBudget: z.string().trim().max(80).optional().or(z.literal("")),
  plan: z.string().trim().max(80).optional().or(z.literal("")),
  honeypot: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function validateServicePlan(service: string, plan?: string) {
  // plan validation done against pricing data at call site
  return { service, plan };
}
