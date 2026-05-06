import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyBookCTA from "@/components/layout/StickyBookCTA";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paddock Lounge Kigali | Premium Nightlife & VIP Experience",
  description:
    "Experience the vibrant nightlife of Kigali at Paddock Lounge. Premium VIP reservations, world-class cocktails, and the best DJ lineups in Rwanda.",
  keywords: [
    "VIP bottle service Kigali",
    "best nightlife in Kigali",
    "Kicukiro nightlife tonight",
    "Paddock Lounge",
    "afrobeats Kigali",
  ],
  openGraph: {
    title: "Paddock Lounge Kigali",
    description: "Kigali's premier nightlife destination. Book your VIP table tonight.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyBookCTA />
      </body>
    </html>
  );
}
