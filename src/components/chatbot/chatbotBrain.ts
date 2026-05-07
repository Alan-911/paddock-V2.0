// ─── Paddock Lounge Chatbot Brain ─────────────────────────────────
// Hybrid AI: Gemma model via Google AI API, with keyword fallback.

export type QuickAction = {
  label: string;
  value: string;
};

export type BotResponse = {
  text: string;
  quickActions?: QuickAction[];
  action?: 'open-booking' | 'open-map' | 'open-menu' | 'open-events' | 'open-vip';
};

const QUICK_ACTIONS_DEFAULT: QuickAction[] = [
  { label: '📋 Book a Table', value: 'book a table' },
  { label: '📖 Menu', value: 'full menu' },
  { label: '🍸 Cocktails', value: 'cocktails' },
  { label: '🎶 Events', value: 'events tonight' },
  { label: '💎 VIP Tables', value: 'vip tables' },
  { label: '📍 Location', value: 'where are you located' },
];

const QUICK_ACTIONS_MENU: QuickAction[] = [
  { label: '🍸 Cocktails', value: 'cocktails' },
  { label: '🍔 Food Menu', value: 'food menu' },
  { label: '💎 VIP Bottles', value: 'vip tables' },
  { label: '🔙 Main Menu', value: 'help' },
];

type KnowledgeEntry = {
  patterns: string[];
  response: BotResponse;
};

const KNOWLEDGE: KnowledgeEntry[] = [
  // Greetings
  {
    patterns: ['hi', 'hello', 'hey', 'good evening', 'good night', 'yo', 'sup', 'hola', 'what\'s up', 'whats up'],
    response: {
      text: "Hey there! Welcome to Paddock Lounge 🎉\n\nI'm your personal concierge. What can I help you with tonight?",
      quickActions: QUICK_ACTIONS_DEFAULT,
    },
  },
  // Full menu (MUST come before Help so "full menu" doesn't match "menu" in help)
  {
    patterns: ['full menu', 'see menu', 'menu page', 'all menu', 'view menu', 'show menu', 'open menu'],
    response: {
      text: "Let me take you to our full menu page! 📖",
      action: 'open-menu',
    },
  },
  // Help / What can you do
  {
    patterns: ['help', 'what can you do', 'options', 'start', 'main menu'],
    response: {
      text: "Here's what I can help you with:",
      quickActions: QUICK_ACTIONS_DEFAULT,
    },
  },
  // Booking
  {
    patterns: ['book', 'reserve', 'reservation', 'table', 'book a table', 'booking'],
    response: {
      text: "Let me open our reservation form for you! 🪑\n\nYou can pick your date, time, party size, and table preference. It takes just 30 seconds.",
      action: 'open-booking',
    },
  },
  // Hours
  {
    patterns: ['hours', 'open', 'close', 'when', 'time', 'schedule', 'what time', 'opening'],
    response: {
      text: "🕐 Our hours:\n\n• Wed – Sat: 6 PM – 4 AM\n• Sunday: 4 PM – Midnight\n• Mon & Tue: Closed\n\nWe recommend arriving before 9 PM to get the best tables!",
      quickActions: [
        { label: '📋 Book a Table', value: 'book a table' },
        { label: '📍 Get Directions', value: 'directions' },
      ],
    },
  },
  // Location
  {
    patterns: ['where', 'location', 'address', 'directions', 'find you', 'map', 'how to get', 'located'],
    response: {
      text: "📍 Paddock Lounge\nKG 7 Ave, Kigali, Rwanda\n(Kicukiro area)\n\nLet me show you on the map!",
      action: 'open-map',
      quickActions: [
        { label: '📋 Book a Table', value: 'book a table' },
        { label: '📞 Call Us', value: 'phone number' },
      ],
    },
  },
  // Cocktails
  {
    patterns: ['cocktail', 'cocktails', 'drinks', 'drink menu', 'what drinks', 'signature drink', 'signature cocktail'],
    response: {
      text: "🍸 Our Signature Cocktails:\n\n1. Paddock Panty — Our secret house signature\n2. Miss Rwanda — Elegant local favorite\n3. Long Island Iced Tea — Dangerously smooth\n4. Sex on the Bench — Sweet crowd pleaser\n5. Mojito (Classic/Flavoured)\n6. Margarita (Classic/Frozen)\n7. Adios (Blue Long Island)\n8. Flaming Lamborghini 🔥 — The showstopper!\n\nWant to see the full menu?",
      quickActions: [
        { label: '📖 Full Menu', value: 'full menu' },
        { label: '🍔 Food Menu', value: 'food menu' },
        { label: '📋 Book a Table', value: 'book a table' },
      ],
    },
  },
  // Food
  {
    patterns: ['food', 'eat', 'hungry', 'food menu', 'what food', 'snacks', 'dinner', 'burger', 'pizza', 'chicken'],
    response: {
      text: "🍽️ Gourmet Bites:\n\n1. Paddock Day — Our house signature dish\n2. King Burger — Ultimate double-patty\n3. Igisafuriya — Traditional feast (for groups!)\n4. Nyamachoma — East African roasted meat\n5. Chicken Wings — Late night favorite\n6. Goat Brochette — Rwandan grill classic\n7. Four Season Pizza\n8. Chicken Cordon Bleu\n\nPerfect for sharing with friends over drinks!",
      quickActions: QUICK_ACTIONS_MENU,
    },
  },
  // VIP
  {
    patterns: ['vip', 'vvip', 'bottle service', 'bottle', 'premium table', 'vip table', 'vip experience', 'private'],
    response: {
      text: "💎 VIP Table Options:\n\n🏆 VVIP Suite — RWF 500,000\n   12 guests, 3 bottles, security & hostess\n\n🎧 DJ Booth VIP — RWF 350,000\n   8 guests, 2 bottles, DJ booth access\n\n🏔️ Mezzanine — RWF 250,000\n   6 guests, 1 bottle, elevated view\n\n🏇 Grandstand — RWF 200,000\n   5 guests, 1 bottle\n\n🏎️ Trackside — RWF 150,000\n   4 guests, champagne/spirit\n\n💃 Main Floor — RWF 100,000\n   4 guests, by the dancefloor",
      quickActions: [
        { label: '📋 Book VIP', value: 'book a table' },
        { label: '💎 VIP Page', value: 'vip page' },
        { label: '📞 Call Us', value: 'phone number' },
      ],
    },
  },
  // VIP page
  {
    patterns: ['vip page', 'vip details', 'see vip'],
    response: {
      text: "Let me take you to our VIP experience page! 💎",
      action: 'open-vip',
    },
  },
  // Events
  {
    patterns: ['event', 'events', 'tonight', 'this week', 'whats on', 'what\'s on', 'dj', 'lineup', 'music', 'party', 'afrobeats', 'amapiano'],
    response: {
      text: "🎶 Upcoming Events:\n\n🔥 Fri May 9 — Afrobeats Friday\n   DJ Krest all night long\n\n🎵 Sat May 10 — Saturday Takeover\n   DJ Monarch exclusive set\n\n🎶 Sat May 17 — Amapiano Night\n   Special themed night!\n\n⚡ Sat May 24 — 1ST ANNIVERSARY\n   Paddock's biggest night ever!\n\nBook early — VIP tables sell out fast!",
      quickActions: [
        { label: '🎶 Events Page', value: 'events page' },
        { label: '📋 Book a Table', value: 'book a table' },
      ],
    },
  },
  // Events page
  {
    patterns: ['events page', 'all events', 'see events'],
    response: {
      text: "Let me show you our full events lineup! 🎶",
      action: 'open-events',
    },
  },
  // Price / Cost
  {
    patterns: ['price', 'cost', 'how much', 'expensive', 'cheap', 'afford', 'entry', 'cover charge', 'entrance fee'],
    response: {
      text: "💰 No cover charge for general entry!\n\nVIP tables start from RWF 100,000 and go up to RWF 500,000 for the VVIP Suite.\n\nCocktails are competitively priced for a premium experience. Check our full menu for details!",
      quickActions: [
        { label: '💎 VIP Prices', value: 'vip tables' },
        { label: '📖 Full Menu', value: 'full menu' },
        { label: '📋 Book a Table', value: 'book a table' },
      ],
    },
  },
  // Dress code
  {
    patterns: ['dress code', 'what to wear', 'outfit', 'dress', 'attire', 'dresscode'],
    response: {
      text: "👔 Dress Code: Smart Casual to Elegant\n\nWe love to see our guests looking sharp! Think stylish and refined.\n\n✅ Smart casual, cocktail attire, trendy fits\n❌ Flip flops, gym wear, torn clothing\n\nDress to impress — you're at Paddock! 🔥",
    },
  },
  // Phone / Contact
  {
    patterns: ['phone', 'call', 'contact', 'number', 'reach', 'whatsapp'],
    response: {
      text: "📞 Contact Us:\n\nPhone: +250 788 471 841\nWhatsApp: +250 788 471 841\n\nOr just book right here — I can open the form for you!",
      quickActions: [
        { label: '📋 Book a Table', value: 'book a table' },
      ],
    },
  },
  // Anniversary
  {
    patterns: ['anniversary', '1st anniversary', 'first anniversary', 'may 24', 'special event'],
    response: {
      text: "🎉 PADDOCK 1ST ANNIVERSARY!\n\n📅 Saturday, May 24\n🎶 Biggest night of the year\n💎 Special VIP packages available\n🔥 Surprise performances\n\nThis will sell out — book your table NOW!",
      quickActions: [
        { label: '📋 Book for Anniversary', value: 'book a table' },
        { label: '💎 VIP Packages', value: 'vip tables' },
      ],
    },
  },
  // About
  {
    patterns: ['about', 'story', 'who', 'history', 'when did', 'founded'],
    response: {
      text: "🏇 About Paddock Lounge\n\nBorn in Kigali, built for the world. Paddock Lounge is Kigali's premier nightlife destination — where world-class cocktails, gourmet bites, and the best DJs in Rwanda come together under one roof.\n\nLocated in Kicukiro on KG 7 Ave, we're open Wed–Sun for unforgettable nights.",
      quickActions: [
        { label: '📍 Location', value: 'where are you located' },
        { label: '🕐 Hours', value: 'hours' },
      ],
    },
  },
  // Thank you / bye
  {
    patterns: ['thank', 'thanks', 'bye', 'goodbye', 'see you', 'later', 'cheers'],
    response: {
      text: "You're welcome! See you at Paddock tonight 🔥🎉\n\nRemember — the night is always better at Paddock Lounge!",
    },
  },
  // Parking
  {
    patterns: ['parking', 'park', 'car', 'drive'],
    response: {
      text: "🅿️ Yes! We have secure parking available right at the venue. Free for all guests.\n\nIf driving, we recommend Uber/Bolt for the ride home after a great night! 🚗",
    },
  },
  // Age / ID
  {
    patterns: ['age', 'old', 'id', 'minimum age', '18', '21'],
    response: {
      text: "🪪 Minimum age: 18+\n\nPlease bring a valid ID (national ID, passport, or driver's license). Our security team checks at the door.",
    },
  },
  // WiFi
  {
    patterns: ['wifi', 'internet', 'wi-fi', 'password'],
    response: {
      text: "📶 Yes, free WiFi is available for all guests! Ask our staff for the password when you arrive.",
    },
  },
  // Group / birthday
  {
    patterns: ['birthday', 'group', 'party', 'celebration', 'celebrate', 'bachelor', 'bachelorette', 'corporate'],
    response: {
      text: "🎂 Celebrating something special?\n\nWe love hosting birthdays, group celebrations, and corporate events! Our VIP packages include:\n\n• Dedicated area\n• Bottle service\n• Custom decorations (on request)\n• Dedicated hostess\n\nContact us to plan your night!",
      quickActions: [
        { label: '📋 Book for Event', value: 'book a table' },
        { label: '💎 VIP Packages', value: 'vip tables' },
        { label: '📞 Call Us', value: 'phone number' },
      ],
    },
  },
];

// Fallback response
const FALLBACK: BotResponse = {
  text: "I'm not sure about that, but I'd love to help! Here are some things I can assist with:",
  quickActions: QUICK_ACTIONS_DEFAULT,
};

export function getResponse(input: string): BotResponse {
  const lower = input.toLowerCase().trim();

  // Check each knowledge entry
  for (const entry of KNOWLEDGE) {
    for (const pattern of entry.patterns) {
      if (lower.includes(pattern)) {
        return entry.response;
      }
    }
  }

  return FALLBACK;
}

export function getWelcomeMessage(): BotResponse {
  return {
    text: "Hey! I'm your Paddock AI concierge powered by Gemma 🎉\n\nI can help you book a table, explore our menu, check events, or answer any questions about the lounge.\n\nWhat would you like to know?",
    quickActions: QUICK_ACTIONS_DEFAULT,
  };
}

// ─── Gemma AI Response (calls API route) ─────────────────────────
// Falls back to keyword matching if the API is unavailable.

type ChatMessage = { from: 'user' | 'bot'; text: string };

export async function getGemmaResponse(
  messages: ChatMessage[]
): Promise<BotResponse> {
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages }),
    });

    if (!res.ok) throw new Error(`API ${res.status}`);

    const data = await res.json();

    // Determine quick actions based on content
    const quickActions = getSmartQuickActions(data.text, data.action);

    return {
      text: data.text,
      action: data.action || undefined,
      quickActions,
    };
  } catch {
    // Fallback to keyword matching
    const lastMsg = messages[messages.length - 1];
    if (lastMsg?.from === 'user') {
      return getResponse(lastMsg.text);
    }
    return {
      text: "I'm having a moment! You can reach us on WhatsApp at +250 788 471 841.",
      quickActions: QUICK_ACTIONS_DEFAULT,
    };
  }
}

// Smart quick actions based on AI response context
function getSmartQuickActions(text: string, action?: string | null): QuickAction[] {
  const lower = text.toLowerCase();

  if (action === 'open-booking') {
    return []; // Booking form is opening, no chips needed
  }

  if (lower.includes('cocktail') || lower.includes('drink') || lower.includes('menu')) {
    return QUICK_ACTIONS_MENU;
  }

  if (lower.includes('vip') || lower.includes('rwf') || lower.includes('bottle')) {
    return [
      { label: '📋 Book VIP', value: 'book a table' },
      { label: '💎 VIP Page', value: 'vip page' },
    ];
  }

  if (lower.includes('event') || lower.includes('dj') || lower.includes('night')) {
    return [
      { label: '🎶 Events Page', value: 'events page' },
      { label: '📋 Book a Table', value: 'book a table' },
    ];
  }

  // Default: show main options
  return [
    { label: '📋 Book a Table', value: 'book a table' },
    { label: '🍸 Cocktails', value: 'cocktails' },
    { label: '💎 VIP', value: 'vip tables' },
  ];
}
