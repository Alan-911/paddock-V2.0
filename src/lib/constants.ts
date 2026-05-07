// ─── Paddock Lounge — Shared Constants ───────────────────────────
// Single source of truth for contact info, social links, and business details.

export const WHATSAPP_NUMBER = "250788471841";

export const WHATSAPP_BOOKING_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I'd like to book a table at Paddock Lounge")}`;

export const WHATSAPP_VIP_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I'd like to book a VIP table at Paddock Lounge")}`;

export const PHONE_NUMBER = "+250 788 471 841";
export const PHONE_URL = `tel:+${WHATSAPP_NUMBER}`;

export const EMAIL = "info@paddocklounge.rw";

export const ADDRESS = {
  street: "KG 7 Ave",
  city: "Kigali",
  country: "Rwanda",
  full: "KG 7 Ave, Kigali, Rwanda",
  googleMapsQuery: "Paddock+Lounge+Kigali",
  googleMapsUrl: "https://maps.google.com/?q=Paddock+Lounge+Kigali",
  lat: -1.9706,
  lng: 30.1044,
};

export const SOCIALS = {
  instagram: "https://instagram.com/paddocklounge_f1",
  tiktok: "https://tiktok.com/@paddock_lounge_kgl",
  // youtube: "",
};

export const HOURS = {
  weekday: "Wed – Sat: 6 PM – 4 AM",
  weekend: "Sun: 4 PM – Midnight",
  short: "Wed–Sun, 6 PM–4 AM",
};
