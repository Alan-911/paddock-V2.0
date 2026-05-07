import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full Menu",
  description:
    "Browse the full Paddock Lounge menu — signature cocktails, premium spirits, gourmet bites, and more. Explore our curated food and drinks selection in Kigali.",
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
