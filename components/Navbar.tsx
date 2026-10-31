"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <header className={`sticky top-0 z-40 transition-colors ${scrolled ? "border-b border-border bg-bg/80 backdrop-blur" : "bg-transparent"}`}>
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-xl font-bold tracking-tight text-text focus-ring" aria-label="Vercity Growth home">VERCITY GROWTH</Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-text-muted transition-colors hover:text-text focus-ring">{item.label}</Link>
          ))}
          <Link href="/contact" className="btn btn-primary text-sm">Let&apos;s Talk</Link>
        </nav>
        <button type="button" className="md:hidden focus-ring rounded-lg p-2" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((v) => !v)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div id="mobile-menu" className="border-t border-border bg-bg md:hidden">
          <nav className="container-x flex flex-col gap-3 py-4" aria-label="Mobile">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-2 text-base font-medium focus-ring">{item.label}</Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-primary mt-2 w-full">Let&apos;s Talk</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
