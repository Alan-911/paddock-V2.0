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
    name: 'The Old Fashioned',
    description: 'The original cocktail. Born in the 1800s, it survived Prohibition to remain the undisputed king of whiskey drinks. Simple, strong, and eternal.',
    tag: 'THE CLASSIC',
    image: 'https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '2',
    name: 'The Negroni',
    description: 'Invented in Florence in 1919 when Count Camillo Negroni demanded a stronger Americano. A bittersweet Italian masterpiece.',
    tag: 'BITTERSWEET',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '3',
    name: 'The Dry Martini',
    description: 'The pinnacle of elegance. Favored by spies and presidents alike, its perfect crystal clarity hides a lethal, gin-soaked kick.',
    tag: 'ELEGANCE',
    image: 'https://images.unsplash.com/photo-1575037614876-c385380f689c?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '4',
    name: 'The Margarita',
    description: 'Crafted in 1938 for a beautiful showgirl who was allergic to all spirits except Tequila. The perfect balance of salt, sour, and smoke.',
    tag: 'CROWD PLEASER',
    image: 'https://images.unsplash.com/photo-1568227066270-b1d64380b271?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '5',
    name: 'The Mojito',
    description: 'A Cuban legend born in Havana. This was famously Ernest Hemingway\'s daytime drink of choice while writing his greatest novels.',
    tag: 'REFRESHING',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '6',
    name: 'Espresso Martini',
    description: 'Created in 1980s London when a famous supermodel asked a bartender for a drink to "wake her up and mess her up." Pure caffeinated luxury.',
    tag: 'LATE NIGHT',
    image: 'https://images.unsplash.com/photo-1629153545163-42eb40822184?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '7',
    name: 'Aperol Spritz',
    description: 'The sunset in a glass. This glowing orange aperitif has been the undisputed life of Venetian summer parties for over a century.',
    tag: 'SUNSET VIBES',
    image: 'https://images.unsplash.com/photo-1560508180-03f285f67ecd?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '8',
    name: 'The Whiskey Sour',
    description: 'Originally crafted by sailors in the 1870s to prevent scurvy, it evolved into a perfectly frothy, sweet-and-sour work of art.',
    tag: 'FROTHY & SOUR',
    image: 'https://images.unsplash.com/photo-1606131731446-5568d87113aa?auto=format&fit=crop&q=80&w=1200',
  },
];
