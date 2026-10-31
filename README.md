# Vercity Growth

Marketing agency website built with Next.js 16, TypeScript, Tailwind CSS v4, React Three Fiber.

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000

## Build and run

```bash
npm run build
npm run start
```

## Checks

```bash
npm run lint
npm run typecheck
npm run launch:check
```

## Configuration

See .env.example. Required for production enquiry delivery:
- NEXT_PUBLIC_SITE_URL
- RESEND_API_KEY
- CONTACT_FROM_EMAIL
- CONTACT_TO_EMAIL

Optional durable rate limiting: UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN.

Optional business details/socials: NEXT_PUBLIC_BUSINESS_* variables.

## Content editing

Typed content lives in /data: site.ts, services.ts, pricing.ts, projects.ts, faq.ts, reporting.ts, testimonials.ts.

## Source notes

- Pricing amounts and monthly cadence are sourced from https://dynovista.com/our-pricing/ (checked 1 November 2026) and stored as integer rupees.
- Reporting metrics are illustrative sample data, not verified client results.
- Portfolio projects are self-initiated concept projects, not client work.
- No approved testimonials are published; the testimonials model remains ready for verified material.
- Supplied screenshots were not used as website images.
