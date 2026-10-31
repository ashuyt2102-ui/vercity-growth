"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactInput } from "@/lib/validations";
import { services } from "@/data/services";
import { getPlan } from "@/data/pricing";
import { budgetOptions } from "@/data/site";
import { useSearchParams } from "next/navigation";

export default function ContactForm() {
  const params = useSearchParams();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", service: "" as ContactInput["service"], brief: "", businessName: "", phone: "", budget: "", adBudget: "", plan: "", honeypot: "" },
  });
  useEffect(() => {
    const service = params.get("service");
    const plan = params.get("plan");
    if (service && services.some((s) => s.id === service)) setValue("service", service as ContactInput["service"]);
    if (plan) { const p = getPlan(plan); if (p) setValue("plan", p.id); }
  }, [params, setValue]);
  const onSubmit = async (data: ContactInput) => {
    setStatus("submitting"); setServerError(null); setFieldErrors({});
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const json = await res.json();
      if (!res.ok) { if (json.fieldErrors) setFieldErrors(json.fieldErrors); setServerError(json.error || "Something went wrong."); setStatus("error"); return; }
      setStatus("success"); reset();
    } catch { setServerError("Network error. Please try again."); setStatus("error"); }
  };
  if (status === "success") {
    return (<div className="card p-6" role="status"><h2 className="font-display text-2xl font-bold">Thank you.</h2><p className="mt-2 text-text-muted">Your enquiry has been sent. We will get back to you soon.</p><button onClick={() => setStatus("idle")} className="btn btn-ghost mt-4">Send another</button></div>);
  }
  const err = (name: keyof ContactInput) => errors[name]?.message || fieldErrors[String(name)];
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card p-6" noValidate>
      {serverError && <div className="mb-4 rounded-lg border border-red-500/40 bg-red-500/10 p-3 text-sm" role="alert">{serverError}</div>}
      <div className="grid gap-4 md:grid-cols-2">
        <div><label htmlFor="name" className="block text-sm font-medium">Name *</label><input id="name" type="text" autoComplete="name" {...register("name")} className="mt-1 w-full rounded-lg border border-border bg-bg px-3 py-2" />{err("name") && <p className="mt-1 text-xs text-red-400">{err("name")}</p>}</div>
        <div><label htmlFor="email" className="block text-sm font-medium">Email *</label><input id="email" type="email" autoComplete="email" {...register("email")} className="mt-1 w-full rounded-lg border border-border bg-bg px-3 py-2" />{err("email") && <p className="mt-1 text-xs text-red-400">{err("email")}</p>}</div>
      </div>
      <div className="mt-4"><label htmlFor="service" className="block text-sm font-medium">Service *</label><select id="service" {...register("service")} className="mt-1 w-full rounded-lg border border-border bg-bg px-3 py-2"><option value="">Select a service</option>{services.map((s) => <option key={s.id} value={s.id}>{s.title}</option>)}</select>{err("service") && <p className="mt-1 text-xs text-red-400">{err("service")}</p>}</div>
      <div className="mt-4"><label htmlFor="brief" className="block text-sm font-medium">Project brief *</label><textarea id="brief" rows={4} {...register("brief")} className="mt-1 w-full rounded-lg border border-border bg-bg px-3 py-2" />{err("brief") && <p className="mt-1 text-xs text-red-400">{err("brief")}</p>}</div>
      <details className="mt-4">
        <summary className="cursor-pointer text-sm font-medium">Add project details</summary>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div><label htmlFor="businessName" className="block text-sm font-medium">Business name</label><input id="businessName" type="text" autoComplete="organization" {...register("businessName")} className="mt-1 w-full rounded-lg border border-border bg-bg px-3 py-2" /></div>
          <div><label htmlFor="phone" className="block text-sm font-medium">Phone</label><input id="phone" type="tel" autoComplete="tel" {...register("phone")} className="mt-1 w-full rounded-lg border border-border bg-bg px-3 py-2" />{err("phone") && <p className="mt-1 text-xs text-red-400">{err("phone")}</p>}</div>
          <div><label htmlFor="budget" className="block text-sm font-medium">Monthly service budget</label><select id="budget" {...register("budget")} className="mt-1 w-full rounded-lg border border-border bg-bg px-3 py-2"><option value="">Select</option>{budgetOptions.map((b) => <option key={b} value={b}>{b}</option>)}</select></div>
          <div><label htmlFor="adBudget" className="block text-sm font-medium">Advertising budget</label><input id="adBudget" type="text" {...register("adBudget")} placeholder="e.g. ₹50,000/month" className="mt-1 w-full rounded-lg border border-border bg-bg px-3 py-2" /></div>
          <div className="md:col-span-2"><label htmlFor="plan" className="block text-sm font-medium">Selected plan (if any)</label><input id="plan" type="text" {...register("plan")} className="mt-1 w-full rounded-lg border border-border bg-bg px-3 py-2" readOnly /></div>
        </div>
      </details>
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register("honeypot")} />
      <p className="mt-4 text-xs text-text-muted">We use your details to respond to this enquiry. See our <a href="/privacy" className="underline">privacy policy</a>. Marketing subscriptions are not enabled by default.</p>
      <button type="submit" disabled={status === "submitting"} className="btn btn-primary mt-6 w-full md:w-auto">{status === "submitting" ? "Sending..." : "Send Enquiry"}</button>
    </form>
  );
}

