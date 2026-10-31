export type ReportingMetric = {
  key: string;
  label: string;
  value: number;
  format: "currency" | "number" | "lakh" | "multiplier";
  description: string;
};

export type ReportingExample = {
  id: string;
  title: string;
  status: "illustrative";
  currency: "INR";
  adSpend: number;
  reach: number;
  impressions: number;
  leads: number;
  roas: number;
  dateRange: null;
  clientName: null;
  metrics: ReportingMetric[];
  source: string;
  publicationPermission: false;
};

export const reportingExample: ReportingExample = {
  id: "meta-reporting-example",
  title: "Meta Ads Performance",
  status: "illustrative",
  currency: "INR",
  adSpend: 50000,
  reach: 250000,
  impressions: 480000,
  leads: 850,
  roas: 4.2,
  dateRange: null,
  clientName: null,
  metrics: [
    { key: "adSpend", label: "Ad spend", value: 50000, format: "currency", description: "Amount paid to the advertising platform for this illustrative period." },
    { key: "reach", label: "Reach", value: 250000, format: "lakh", description: "Unique accounts shown the ads, expressed as 2.5 lakh." },
    { key: "impressions", label: "Impressions", value: 480000, format: "lakh", description: "Total times the ads were shown, expressed as 4.8 lakh." },
    { key: "leads", label: "Leads", value: 850, format: "number", description: "Enquiries captured from the campaign in this example." },
    { key: "costPerLead", label: "Cost per lead", value: 58.82, format: "currency", description: "Ad spend divided by leads: ₹50,000 ÷ 850 = ₹58.82." },
    { key: "roas", label: "ROAS", value: 4.2, format: "multiplier", description: "Return on ad spend as an illustrative supplied value. No verified revenue figure is inferred." },
  ],
  source: "Supplied illustrative sample dashboard",
  publicationPermission: false,
};

export function formatMetric(m: ReportingMetric) {
  if (m.format === "currency") {
    return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 2 }).format(m.value);
  }
  if (m.format === "lakh") {
    return m.value >= 100000 ? `${(m.value / 100000).toFixed(1)} lakh` : m.value.toLocaleString("en-IN");
  }
  if (m.format === "multiplier") return `${m.value}×`;
  return m.value.toLocaleString("en-IN");
}
