"use client";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

type Msg = { role: "user" | "assistant"; text: string };

const knowledge: { keys: string[]; reply: string; action?: () => void }[] = [
  { keys: ["service", "services", "what do you do"], reply: "We offer performance marketing, social media management, website development, branding & graphic design, video editing & content creation, influencer marketing, professional photoshoots and AI agents. Visit the Services page for details." },
  { keys: ["price", "pricing", "cost", "plan", "package"], reply: "Plans: Starter ?9,999/mo, Growth ?19,999/mo (most popular), Scale ?34,999/mo, and Enterprise/Custom. Professional Photoshoot and AI Agent are ?15,000/mo. Advertising spend is separate." },
  { keys: ["contact", "email", "phone", "whatsapp", "talk"], reply: "Email: vercitygrowth@gmail.com. Phone/WhatsApp: +91 88513 84747. You can also use the contact form on the Contact page." },
  { keys: ["process", "how", "work flow", "steps"], reply: "Our process: Discover ? Strategise ? Execute ? Optimise." },
  { keys: ["portfolio", "work", "projects"], reply: "Check the Work section for demo concept projects. Verified client work is added when approved." },
  { keys: ["about", "who"], reply: "VERCITY GROWTH is a digital growth agency combining creativity, strategy and technology to help businesses grow." },
  { keys: ["faq", "question"], reply: "See the FAQ section for common questions about services, packages, ad spend, timing and getting started." },
];

function replyFor(input: string): string {
  const q = input.toLowerCase();
  for (const k of knowledge) {
    if (k.keys.some((key) => q.includes(key))) return k.reply;
  }
  return "I can help with services, pricing, contact details, process, work and FAQs. Try asking one of those.";
}

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([{ role: "assistant", text: "Hi! I am the VERCITY GROWTH assistant. How can I help you today?" }]);
  const endRef = useRef<HTMLDivElement>(null);
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, open]);
  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMsgs((m) => [...m, { role: "user", text }, { role: "assistant", text: replyFor(text) }]);
    setInput("");
  };
  return (
    <>
      <button type="button" onClick={() => setOpen((v) => !v)} aria-label="Open assistant" className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-dark shadow-lg transition-transform hover:scale-105 focus-ring">
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
      {open && (
        <div className="fixed bottom-24 right-6 z-50 flex w-[90vw] max-w-sm flex-col overflow-hidden rounded-2xl border border-border bg-panel shadow-2xl">
          <div className="border-b border-border px-4 py-3 font-display font-bold">VERCITY GROWTH Assistant</div>
          <div className="max-h-80 flex-1 space-y-3 overflow-y-auto p-4 text-sm">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-xl px-3 py-2 ${m.role === "user" ? "bg-accent text-accent-dark" : "bg-surface text-text"}`}>{m.text}</div>
              </div>
            ))}
            <div ref={endRef} />
          </div>
          <div className="flex gap-2 border-t border-border p-3">
            <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") send(); }} placeholder="Ask something..." className="flex-1 rounded-lg border border-border bg-bg px-3 py-2 text-sm focus-ring" />
            <button type="button" onClick={send} aria-label="Send" className="btn btn-primary px-3 py-2"><Send className="h-4 w-4" /></button>
          </div>
        </div>
      )}
    </>
  );
}
