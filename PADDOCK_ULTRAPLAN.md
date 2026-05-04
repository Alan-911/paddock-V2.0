# PADDOCK LOUNGE — ULTRAPLAN
**World-Class Nightlife Website · Kigali, Rwanda**
*Synthesized from: PADDOCK.docx · 10-to-10 implementation plan.docx · implementation_plan.md*

---

## VISION IN ONE SENTENCE
Build a real-time nightlife decision platform that makes a visitor feel like they are already inside Paddock Lounge — and converts that feeling into a booking within 3 clicks.

---

## TECH STACK (CONFIRMED)

| Layer | Choice | Reason |
|---|---|---|
| Framework | **Next.js 14 (App Router)** | SSR for SEO, dynamic routing, fast page loads |
| Styling | **CSS Modules + Vanilla CSS** | Full control for glassmorphism, parallax, custom animations |
| Animations | **Lottie + CSS keyframes** | Lightweight luxury — no heavy JS animation libs |
| Images | **Next.js `<Image>` (WebP/AVIF)** | Auto-optimization, lazy loading built-in |
| Video | **Short looped MP4 (5–8s) + static fallback** | Fast on Kigali mobile networks |
| Booking/Chat | **WhatsApp click-to-chat (Phase 1)** | Highest conversion for V1, zero backend needed |
| Hosting | **Vercel** | Edge CDN, perfect Next.js integration |
| SEO Schema | **JSON-LD in `<script>` tags** | Event + LocalBusiness + FAQ schemas |

---

## BRAND & DESIGN SYSTEM

### Colors
```
Background:   #0A0A0A  (near-black)
Primary Text: #FFFFFF
Gold/Premium: #C9A84C  (VIP sections, premium accents)
Accent:       #FF3A3A  (Live Energy Indicator — high)
Amber:        #FFB800  (Live Energy Indicator — moderate)
Green:        #00C853  (Live Energy Indicator — chill)
Glass:        rgba(255,255,255,0.08) with backdrop-filter: blur(12px)
```

### Typography
```
Display/Hero:  Clash Display or Bebas Neue (nightclub energy)
Body:          Inter or DM Sans (readability)
Accent/Labels: Mono font for DJ names, times, labels
```

### Motion Principles
- Hero video: slow-motion crowd/cocktail footage, looped, muted, ≤8s
- Scroll-triggered reveals: elements slide/fade in as user scrolls
- Parallax: cocktail section images move at 0.3x scroll speed
- Hover states: 200ms transitions — no jarring jumps
- NO haptic feedback (inconsistent device support)
- NO sound-on-hover (kills mobile UX)

---

## SITE ARCHITECTURE

```
/ (Home)
├── /menu
├── /events
├── /vip
├── /about
├── /contact
│
└── SEO Landing Pages (Phase 3)
    ├── /vip-kigali
    ├── /events-tonight-kigali
    ├── /afrobeats-kigali
    └── /nightlife-kigali
```

---

## PHASE-BY-PHASE PLAN

---

### PHASE 0 — PROJECT SETUP
**Duration: 1–2 days**

- [ ] `npx create-next-app@latest paddock-lounge --app --typescript`
- [ ] Set up folder structure: `app/`, `components/`, `public/media/`, `lib/`, `styles/`
- [ ] Install dependencies: `lottie-react`, `next-seo`, `framer-motion` (optional, only if CSS isn't enough)
- [ ] Set up Git repository and Vercel project (connect auto-deploy from `main` branch)
- [ ] Gather all assets: logo, brand photos, DJ photos, VIP table photos, cocktail photos/videos
- [ ] Compress all video to WebM/MP4 ≤5MB, all images to WebP ≤200KB

**Deliverable:** Running `npm run dev` shows a blank Next.js app on localhost.

---

### PHASE 1 — FOUNDATION & GLOBAL COMPONENTS
**Duration: 3–4 days**

#### 1.1 Global Layout (`app/layout.tsx`)
- Dark background `#0A0A0A` as body default
- Load custom fonts via `next/font`
- Meta defaults via `next-seo`
- JSON-LD `LocalBusiness` schema injected here

#### 1.2 Navigation Bar
- Sticky, glassmorphism style: `backdrop-filter: blur(16px)`, semi-transparent dark
- Desktop: Logo left · Links center · "Book Now" button right (gold border)
- Mobile: Hamburger → full-screen overlay menu
- Quick-action strip on mobile (always visible, fixed bottom): `📞 Call` · `📅 Book` · `📍 Location`

#### 1.3 Footer
- Social links (Instagram, TikTok, WhatsApp)
- Opening hours
- Google Maps embed (small)
- "© Paddock Lounge Kigali"

#### 1.4 "Book Now" / WhatsApp Sticky CTA
- Fixed element bottom-right on desktop
- WhatsApp deep link: `https://wa.me/25XXXXXXXXX?text=Hi, I'd like to book a table at Paddock`
- Pulse animation on the button to draw attention
- On mobile this merges into the bottom quick-action strip

**Deliverable:** All pages have consistent nav, footer, and sticky CTA.

---

### PHASE 2 — HOME PAGE (The Showpiece)
**Duration: 5–7 days**

Build each section as its own component in `components/home/`.

#### 2.1 `HeroSection`
**Inspired by: The Dead Rabbit (New York)**
- Full-screen, fullwidth — 100vh
- Background: looped silent MP4 video (crowd/DJ/cocktail footage)
- Fallback: high-res WebP image for slow connections (detect via `<video>` `onError`)
- Overlay: dark gradient `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7))`
- Center content:
  ```
  [Small tag: KIGALI'S PREMIER NIGHTLIFE DESTINATION]
  PADDOCK LOUNGE
  [Tagline: "Want to experience Kigali night? Paddock's got you."]
  [Book Now →]  [View DJ Lineup →]  [Explore Menu →]
  ```
- Scroll-down indicator (animated chevron bouncing)

#### 2.2 `LiveEnergyIndicator`
**The FOMO Engine — unique differentiator**
- Persistent, visible just below the hero or in the nav
- Shows current vibe: 🔴 High Energy (Almost Full) · 🟡 Moderate · 🟢 Chill
- Phase 1: Set manually (update via a simple JSON config file or environment variable)
- Phase 2: Connect to real data (reservation count, time of day)
- Copy examples:
  - 🔴 "The floor is ALIVE — only 3 tables left tonight!"
  - 🟡 "The night is warming up — grab your table now."
  - 🟢 "Perfect time to arrive early and claim your spot."

#### 2.3 `WhatsOnSection`
**Inspired by: The Dead Rabbit's "What's On"**
- Section title: **WHAT'S ON AT PADDOCK**
- 3-column card grid (or horizontal scroll on mobile)
- Each card: Date · Event name · Brief description · "Learn More →" link
- Special event card: Gold border + "TONIGHT" badge

#### 2.4 `DJLineupSection`
**Inspired by: Sunset Bar (Auckland)**
- Weekly grid: Monday → Sunday
- Each day card:
  - DJ Name (large, mono font)
  - Genre (e.g., Afrobeats · Hip-Hop · Amapiano)
  - Time
  - Photo thumbnail (circular, glowing border)
- Special event overlay: Full-width announcement banner
  ```
  ⚡ SPECIAL EVENT — [DATE]: [EVENT NAME] — Don't Miss It →
  ```
  This banner scrolls with the page (like a news ticker) or is pinned above the footer

#### 2.5 `CocktailExperienceSection`
**Inspired by: Paradiso Bar (Barcelona)**
- Dark section, full-width
- Hero Drink Slider: High-resolution cocktail images, auto-scroll every 3s
- Parallax "pouring" effect: As the user scrolls, a video/GIF of a cocktail being poured plays in the background at 0.3x scroll speed
- Hover interactions: When cursor hovers over a drink name → vibrant image fills the background
- Condensation texture: Subtle CSS `::before` pseudo-element with a frosted glass texture overlay
- Bubble/condensation Lottie animation plays alongside cocktail cards

#### 2.6 `AtmosphereSection`
**Inspired by: Havana Bar (Auckland)**
- Split layout: Left = atmospheric photo (crowd, slightly blurred `filter: blur(2px)` on background, sharp on bottles/foreground), Right = brand copy
- Copy angle: "Not just a bar. An experience."
- Bottle showcase: 3–4 premium spirit bottles displayed clearly (no blur)
- CTA: "Reserve Your Night →"

#### 2.7 `CuratedSocialSection`
- Staff-curated grid (NOT a live feed — avoids messiness)
- 4–6 vertical video thumbnails labeled "Tonight at Paddock"
- On click: plays inline with sound (user gesture required, so this is fine)
- Bottom: Instagram handle + "Follow for updates"

**Deliverable:** Home page fully built and looking world-class on both desktop and mobile.

---

### PHASE 3 — SECONDARY PAGES
**Duration: 4–5 days**

#### 3.1 `/menu` Page
**Inspired by: RUTZ Ltd (Rwanda)**
- Grid layout of cards, each card contains:
  - Item photo (high-res, square crop)
  - Horizontal separator line
  - Item name (bold)
  - Prep time or "Signature" badge
  - Star rating (1–5 stars, visual)
  - Short description (1 line)
  - Price
  - Dark "+ Add" button (Phase 1: links to WhatsApp order; Phase 2: connects to POS)
- Category filters: Cocktails · Spirits · Beer · Mocktails · Snacks
- Mobile: feels like a native app (single-column, large cards, smooth scroll)

#### 3.2 `/events` Page
**Inspired by: Sunset Bar layout**
- Two-column layout (desktop): Left = readable DJ schedule table, Right = lifestyle imagery
- Mobile: stacks to single column
- Table columns: Day · DJ Name · Genre · Time · Special Notes
- Gold highlight row for special/big events
- Below table: "Book for a Special Event" WhatsApp CTA

#### 3.3 `/vip` Page
- Section title: **VIP EXPERIENCE** (with gold accent)
- Gold design accents throughout
- What's included (per table):
  - 2 premium liquor bottles of your choice
  - Consumables (mixers, ice, garnishes)
  - Free snacks (chips, groundnuts)
  - Early booking discount
- VIP table gallery: Image grid showing each section/table area with a "Book This Table" button
- Booking CTA → WhatsApp with pre-filled message including table preference
- Advance payment note: "Secure your table with a deposit — balance on arrival"

#### 3.4 `/contact` Page
- Full-screen dark background image (backlit bar / vintage liquor bottle shelf, black & white)
- Centered white overlay box ("THE OFFICE" style from reference)
  - Phone number
  - Email
  - Address with embedded Google Map
  - Social icons
- Large white "RESERVE NOW" button → WhatsApp
- High contrast: dark bg + white text + white button = maximum conversion clarity

**Deliverable:** All 4 pages built and linked from navigation.

---

### PHASE 4 — SEO & HYPER-LOCAL DISCOVERY
**Duration: 3–4 days**

#### 4.1 JSON-LD Schema Markup
Add to relevant pages:

```json
// app/layout.tsx — LocalBusiness schema
{
  "@type": "BarOrPub",
  "name": "Paddock Lounge",
  "address": { "@type": "PostalAddress", "addressLocality": "Kigali", "addressCountry": "RW" },
  "openingHours": ["Fr 20:00-04:00", "Sa 20:00-04:00"],
  "telephone": "+25XXXXXXXXX",
  "url": "https://paddocklounge.rw"
}

// /events page — Event schema for each DJ night
{
  "@type": "Event",
  "name": "DJ [Name] at Paddock Lounge",
  "startDate": "2026-05-09T20:00",
  "location": { "@type": "Place", "name": "Paddock Lounge, Kigali" }
}

// FAQ schema on /vip and /contact
{
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How do I book a VIP table?", "acceptedAnswer": {...} },
    { "@type": "Question", "name": "What is the advance payment policy?", "acceptedAnswer": {...} }
  ]
}
```

#### 4.2 Intent-Based Landing Pages

| Page | Target Search | Content |
|---|---|---|
| `/vip-kigali` | "VIP bottle service Kigali" | VIP packages, table photos, booking |
| `/events-tonight-kigali` | "things to do tonight Kigali" | Tonight's DJ + energy indicator |
| `/afrobeats-kigali` | "afrobeats Kigali nightlife" | DJ lineup, atmosphere section |
| `/nightlife-kigali` | "Kigali nightlife" | Full brand story, what's on |

Each page is a standalone, conversion-focused page — not just a copy of the home page.

#### 4.3 Blog — "Why Paddock" Series
- Route: `/blog/[slug]`
- Content topics:
  - "Why Paddock is Kigali's #1 Nightlife Spot"
  - "Top Cocktails to Try in Kigali"
  - "A Night at Paddock Lounge — What to Expect"
  - "Kigali's Nightlife Scene: 2026 Guide"
- Phase 1: Write manually (4–6 posts)
- Phase 2: Semi-automated with a CMS (Sanity.io or Contentful)
- SEO: each post targets a specific long-tail keyword

#### 4.4 Google Business Profile Sync
- Make website the source of truth
- Events on site → manually push to Google Business Profile events weekly
- Photos from site → upload to Google Business
- Opening hours: update in one place (env variable) → reflects everywhere

**Deliverable:** Site ranks for at least 3 target keywords within 60 days of launch.

---

### PHASE 5 — PERFORMANCE AUDIT & LAUNCH
**Duration: 2–3 days**

#### 5.1 Performance Checklist
- [ ] All images served as WebP/AVIF via Next.js `<Image>`
- [ ] All hero videos ≤8 seconds, ≤5MB, with static fallback
- [ ] Lazy loading on all below-the-fold images
- [ ] CDN via Vercel Edge Network confirmed
- [ ] Font preloading: `rel="preload"` for display fonts
- [ ] No render-blocking scripts
- [ ] `next/dynamic` used for heavy components (video player, Lottie)

#### 5.2 Lighthouse Targets
| Metric | Target |
|---|---|
| Performance | ≥ 85 (mobile) |
| Accessibility | ≥ 90 |
| Best Practices | ≥ 90 |
| SEO | ≥ 95 |
| LCP (Largest Contentful Paint) | < 2.5s on simulated 4G |
| CLS (Cumulative Layout Shift) | < 0.1 |

#### 5.3 Conversion Funnel Test (3-Click Rule)
1. User lands on home page → sees Live Energy Indicator
2. User taps "Book Now" (sticky button or CTA)
3. WhatsApp opens with pre-filled message → booking initiated

This must work in < 3 clicks on mobile.

#### 5.4 Schema Validation
- Run all pages through Google Rich Results Test
- Confirm Event + LocalBusiness + FAQ schemas pass

#### 5.5 Final Pre-Launch Checks
- [ ] All pages have unique `<title>` and `<meta description>`
- [ ] OG tags (Open Graph) set for WhatsApp/social sharing previews
- [ ] `robots.txt` and `sitemap.xml` generated (`next-sitemap` package)
- [ ] `sitemap.xml` submitted to Google Search Console
- [ ] 404 page styled with brand aesthetic + "Go Back Home" link
- [ ] All external links open in `target="_blank"` with `rel="noopener noreferrer"`

**Deliverable:** Site live on custom domain, Lighthouse score verified, Google Search Console active.

---

## PHASED FEATURE ROADMAP (Beyond Launch)

### Version 2 (1–2 months post-launch)
- [ ] CMS integration (Sanity.io) so staff can update DJ lineup, events, and blog without a developer
- [ ] VIP Member system: email signup → digital member card → exclusive early booking
- [ ] Real-time Live Energy Indicator connected to actual reservation data
- [ ] Table pre-selection map (visual floor plan of VIP section)

### Version 3 (3–6 months post-launch)
- [ ] Embedded AI chatbot (Claude API) for booking, FAQs, menu questions
- [ ] Online advance payment processing (Stripe or local payment gateway)
- [ ] Automated blog post generation (Claude API) for Kigali nightlife content
- [ ] Analytics dashboard: which CTA converts best, which DJ nights drive most bookings

---

## FILE/FOLDER STRUCTURE (Reference)

```
paddock-lounge/
├── app/
│   ├── layout.tsx              ← Global layout + LocalBusiness schema
│   ├── page.tsx                ← Home page
│   ├── menu/page.tsx
│   ├── events/page.tsx
│   ├── vip/page.tsx
│   ├── contact/page.tsx
│   ├── blog/[slug]/page.tsx
│   ├── vip-kigali/page.tsx     ← SEO landing pages
│   ├── events-tonight-kigali/page.tsx
│   └── afrobeats-kigali/page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── StickyBookCTA.tsx
│   └── home/
│       ├── HeroSection.tsx
│       ├── LiveEnergyIndicator.tsx
│       ├── WhatsOnSection.tsx
│       ├── DJLineupSection.tsx
│       ├── CocktailExperienceSection.tsx
│       ├── AtmosphereSection.tsx
│       └── CuratedSocialSection.tsx
│
├── public/
│   ├── media/
│   │   ├── hero-video.mp4
│   │   ├── hero-fallback.webp
│   │   └── cocktails/
│   └── icons/
│
├── styles/
│   ├── globals.css             ← CSS variables, resets, base styles
│   └── [ComponentName].module.css
│
└── lib/
    ├── schema.ts               ← JSON-LD schema builders
    └── data/
        ├── djLineup.ts         ← Weekly DJ data
        ├── menu.ts             ← Menu items
        └── events.ts           ← Upcoming events
```

---

## KEY DECISIONS LOG

| Decision | Choice | Reason |
|---|---|---|
| Booking system V1 | WhatsApp | Zero backend, highest local conversion |
| Video strategy | Short loop + fallback | Kigali bandwidth constraints |
| Sound-on-hover | ❌ Removed | Kills mobile UX |
| Haptic feedback | ❌ Removed | Inconsistent device support |
| Live feed | ❌ Replaced with curated | Raw feeds are messy + brand risk |
| VIP member system | Phase 2 | Avoid overbuilding V1 |
| Online payments | Phase 3 | Need payment gateway setup first |
| Blog CMS | Phase 2 (Sanity) | Phase 1 = static content is fine |

---

## SUCCESS METRICS (30/60/90 Days)

| Timeline | Metric | Target |
|---|---|---|
| Launch day | Lighthouse mobile performance | ≥ 85 |
| 30 days | Google Search Console impressions | ≥ 500/month |
| 30 days | WhatsApp booking messages from site | ≥ 20/month |
| 60 days | Rank for "nightlife Kigali" | Top 5 |
| 60 days | Rank for "VIP Kigali" | Top 3 |
| 90 days | Monthly unique visitors | ≥ 1,000 |
| 90 days | VIP table bookings traced to website | ≥ 10/month |

---

*Last updated: 2026-05-04 · Built from PADDOCK.docx + 10-to-10 implementation plan.docx + implementation_plan.md*
