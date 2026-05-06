export type Cocktail = {
  id: string;
  name: string;
  description: string;
  tag: string;
  image: string;
};

export const cocktails: Cocktail[] = [
  {
    id: '1',
    name: 'Paddock Panty',
    description: 'Our secret signature house cocktail. A daring blend that\'s become the most talked-about drink in Kigali nightlife.',
    tag: 'HOUSE SIGNATURE',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '2',
    name: 'Miss Rwanda',
    description: 'Elegant, sweet, and perfectly balanced — a local favorite crafted to celebrate the beauty of Rwandan spirit.',
    tag: 'LOCAL FAVORITE',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '3',
    name: 'Long Island Iced Tea',
    description: 'A potent mix of vodka, tequila, rum, triple sec, gin, and cola. Deceptively smooth, dangerously strong.',
    tag: 'POWERHOUSE',
    image: 'https://images.unsplash.com/photo-1599021455589-3543d2c6e61f?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '4',
    name: 'Sex on the Bench (SOB)',
    description: 'Sweet and fruity vodka cocktail that goes down easy. The perfect start to a wild night at Paddock.',
    tag: 'CROWD PLEASER',
    image: 'https://images.unsplash.com/photo-1605256247963-7188d3e23b2c?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '5',
    name: 'Mojito Classic/Flavoured',
    description: 'Refreshing Cuban classic with mint, lime, and rum. Available in classic or your choice of flavours.',
    tag: 'REFRESHING',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '6',
    name: 'Margarita',
    description: 'Classic, flavoured, or frozen — tequila, triple sec, and lime. The salt-rimmed icon of any great night out.',
    tag: 'CLASSIC',
    image: 'https://images.unsplash.com/photo-1568227448378-c1e1933f7c4e?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '7',
    name: 'Adios (Blue Long Island)',
    description: 'Bold and blue, packed with five spirits and citrus. One sip and the night takes a whole new direction.',
    tag: 'BOLD & BLUE',
    image: 'https://images.unsplash.com/photo-1587223962930-cb7f31384c19?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '8',
    name: 'Flaming Lamborghini',
    description: 'A spectacular multi-spirit flaming shot. The ultimate showstopper — fire, flavour, and pure Paddock energy.',
    tag: 'SHOWSTOPPER',
    image: 'https://images.unsplash.com/photo-1629153545163-42eb40822184?auto=format&fit=crop&q=80&w=1200',
  },
];
