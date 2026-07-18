import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { lat } from "@/lib/i18n/lat";
import { cyr } from "@/lib/i18n/cyr";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

// TODO: change to your real production domain before deploying.
const SITE_URL = "https://kamtar.uz";

// SEO note: the site's UI language is switched client-side (lotin/kirill), so search
// engines primarily index the server-rendered (lotin) version. To maximise discovery for
// people who search in Uzbek Cyrillic, the title/description/keywords below deliberately
// combine both scripts so both audiences see relevant matches in search results.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: lat.meta.title,
    template: "%s | Kamtar ERP",
  },
  description: `${lat.meta.description} ${cyr.meta.description}`,
  keywords: [...lat.meta.keywords, ...cyr.meta.keywords],
  applicationName: "Kamtar ERP",
  authors: [{ name: "Kamtar ERP" }],
  category: "business",
  alternates: {
    canonical: "/",
    languages: {
      "uz-Latn": "/",
      "uz-Cyrl": "/",
      uz: "/",
    },
  },
  openGraph: {
    title: lat.meta.title,
    description: lat.meta.description,
    url: SITE_URL,
    siteName: "Kamtar ERP",
    locale: "uz_UZ",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kamtar ERP",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: lat.meta.title,
    description: lat.meta.description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Kamtar ERP",
  alternateName: ["Камтар ЕРП", "Kamtar ЕРП дастури"],
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: lat.meta.description,
  url: SITE_URL,
  inLanguage: ["uz-Latn", "uz-Cyrl"],
  offers: {
    "@type": "Offer",
    price: "25",
    priceCurrency: "USD",
  },
  areaServed: {
    "@type": "Country",
    name: "Uzbekistan",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz-Latn" className={manrope.variable}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-ink font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
