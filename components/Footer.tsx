import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-panel">
      <div className="container-x section-pad grid gap-10 md:grid-cols-4">
        <div>
          <div className="font-display text-xl font-bold">YOUR GROWTH STORY STARTS NOW.</div>
          <p className="mt-3 text-sm text-text-muted">VERCITY GROWTH — We engineer digital growth.</p>
          <Link href="/contact" className="btn btn-primary mt-4 inline-block">Let&apos;s talk</Link>
        </div>
        <div>
          <div className="text-sm font-semibold">Navigate</div>
          <ul className="mt-3 space-y-2 text-sm text-text-muted">
            <li><Link href="/services" className="hover:text-text">Services</Link></li>
            <li><Link href="/work" className="hover:text-text">Work</Link></li>
            <li><Link href="/pricing" className="hover:text-text">Pricing</Link></li>
            <li><Link href="/about" className="hover:text-text">About</Link></li>
            <li><Link href="/contact" className="hover:text-text">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold">Policies</div>
          <ul className="mt-3 space-y-2 text-sm text-text-muted">
            <li><Link href="/privacy" className="hover:text-text">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-text">Terms</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold">Contact</div>
          <ul className="mt-3 space-y-2 text-sm text-text-muted">
            {siteConfig.contact.email && (<li><a href={`mailto:${siteConfig.contact.email}`} className="hover:text-text">{siteConfig.contact.email}</a></li>)}
            {siteConfig.contact.phone && (<li><a href={`tel:${siteConfig.contact.phone}`} className="hover:text-text">{siteConfig.contact.phone}</a></li>)}
            {siteConfig.contact.whatsapp && (<li><a href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-text">WhatsApp</a></li>)}
            {siteConfig.contact.bookingUrl && (<li><a href={siteConfig.contact.bookingUrl} target="_blank" rel="noopener noreferrer" className="hover:text-text">Book a call</a></li>)}
            {siteConfig.socials.map((s) => (<li key={s.href}><a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-text">{s.label}</a></li>))}
          </ul>
          {!siteConfig.contact.email && !siteConfig.contact.phone && siteConfig.socials.length === 0 && (
            <p className="mt-3 text-sm text-text-muted">Contact details will be published once configured.</p>
          )}
        </div>
      </div>
      <div className="container-x border-t border-border py-6 text-xs text-text-muted">
        © {new Date().getFullYear()} Vercity Growth. All rights reserved.
      </div>
    </footer>
  );
}
