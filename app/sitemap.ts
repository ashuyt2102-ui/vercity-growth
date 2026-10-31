import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const routes = ["", "/services", "/work", "/pricing", "/about", "/contact", "/privacy", "/terms"];
  const staticEntries = routes.map((r) => ({ url: `${site}${r}`, lastModified: new Date() }));
  const serviceEntries = services.map((s) => ({ url: `${site}/services/${s.slug}`, lastModified: new Date() }));
  const workEntries = projects.map((p) => ({ url: `${site}/work/${p.slug}`, lastModified: new Date() }));
  return [...staticEntries, ...serviceEntries, ...workEntries];
}
