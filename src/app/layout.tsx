import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyBookCTA from "@/components/layout/StickyBookCTA";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });
const dancing = Dancing_Script({ variable: "--font-dancing", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://paddock-lounge.vercel.app"),
  title: {
    default: "Paddock Lounge Kigali | Premium Nightlife & VIP Experience",
    template: "%s | Paddock Lounge Kigali",
  },
  description:
    "Experience the vibrant nightlife of Kigali at Paddock Lounge. Premium VIP reservations, world-class cocktails, and the best DJ lineups in Rwanda.",
  keywords: [
    "VIP bottle service Kigali",
    "best nightlife in Kigali",
    "Kicukiro nightlife tonight",
    "Paddock Lounge",
    "afrobeats Kigali",
    "Kigali nightclub",
    "Rwanda nightlife",
    "Kigali lounge bar",
    "cocktails Kigali",
    "DJ events Kigali",
    "Kigali VIP experience",
    "night out Kigali",
    "Kicukiro bars",
    "premium lounge Rwanda",
    "Kigali weekend events",
  ],
  openGraph: {
    title: "Paddock Lounge Kigali",
    description:
      "Kigali's premier nightlife destination. Book your VIP table tonight.",
    type: "website",
    url: "https://paddock-lounge.vercel.app",
    siteName: "Paddock Lounge",
    locale: "en_US",
    images: [
      {
        url: "/paddock-hero-poster.jpg",
        width: 1920,
        height: 1080,
        alt: "Paddock Lounge Kigali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paddock Lounge Kigali | Premium Nightlife & VIP Experience",
    description:
      "Kigali's premier nightlife destination featuring world-class cocktails, VIP table service, and the best DJ lineups in Rwanda.",
    images: ["/paddock-hero-poster.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${playfair.variable} ${dancing.variable}`} suppressHydrationWarning>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyBookCTA />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NightClub",
              name: "Paddock Lounge",
              description:
                "Kigali's premier nightlife destination featuring world-class cocktails, VIP table service, and the best DJ lineups in Rwanda.",
              url: "https://paddock-lounge.vercel.app",
              telephone: "+250788471841",
              email: "info@paddocklounge.rw",
              address: {
                "@type": "PostalAddress",
                streetAddress: "KG 7 Ave",
                addressLocality: "Kigali",
                addressRegion: "Kigali",
                addressCountry: "RW",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -1.9706,
                longitude: 30.1044,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "18:00",
                  closes: "04:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "16:00",
                  closes: "00:00",
                },
              ],
              priceRange: "$$$",
              servesCuisine: [
                "Cocktails",
                "Gourmet Bites",
                "Premium Spirits",
              ],
              image: "/paddock-hero-poster.jpg",
              sameAs: [
                "https://instagram.com/paddocklounge_f1",
                "https://tiktok.com/@paddock_lounge_kgl",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
