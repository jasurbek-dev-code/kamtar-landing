# Kamatar ERP — Landing Page

Next.js (App Router) + TypeScript + Tailwind CSS conversion of the Kamatar ERP
vizitka sayt, fully responsive (mobile → desktop).

## Ishga tushirish

```bash
npm install
npm run dev
```

`http://localhost:3000` da ochiladi.

## Struktura

```
app/
  layout.tsx        → SEO metadata, Manrope shrifti
  page.tsx           → barcha bo'limlarni yig'adi
  globals.css         → Tailwind + reveal animatsiyasi
components/
  Navbar.tsx          → scroll soyasi + mobil menyu (client)
  Hero.tsx
  Stats.tsx
  Problems.tsx
  Features.tsx
  HowItWorks.tsx      → bosiladigan qadamlar (client)
  Modules.tsx
  Pricing.tsx
  PricingCalculator.tsx → interaktiv narx kalkulyatori (client)
  Testimonials.tsx
  CTA.tsx             → React Hook Form bilan lead-forma (client)
  Footer.tsx
  Reveal.tsx          → scroll-reveal wrapper (client)
  icons.tsx           → umumiy SVG ikonalar
```

## Eslatmalar

- Ranglar `tailwind.config.ts`da asl dizayndagi CSS o'zgaruvchilariga mos
  qilib qo'shilgan (`green-nav`, `teal`, `red`, `ink`, va h.k.).
- "Sinab ko'rish" / "Bepul boshlash" tugmalarini asosiy tizim domenига
  (masalan `app.kamatar.uz`) yo'naltirish uchun ularni `<a href="...">`
  yoki `next/link`ga almashtiring.
- Kalkulyator va forma holatlari faqat frontendda ishlaydi — CTA formasini
  haqiqiy backend/CRM'ga ulash uchun `components/CTA.tsx` ichidagi
  `onSubmit` funksiyasini o'zgartiring.
- Deploy uchun Vercel tavsiya etiladi (`vercel.com` — Next.js loyihalarini
  avtomatik SSG/ISR bilan optimallashtiradi).
