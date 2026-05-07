export type FoodItem = {
  id: string;
  name: string;
  description: string;
  tag: string;
  image: string;
};

export const foodItems: FoodItem[] = [
  {
    id: '1',
    name: 'Paddock Day',
    description: 'The house signature dish — a Paddock Lounge original. Our chef\'s pride, crafted to define the Paddock experience.',
    tag: 'HOUSE SIGNATURE',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '2',
    name: 'King Burger',
    description: 'The ultimate Paddock double-patty burger experience. Juicy, loaded, and built for the hungry.',
    tag: 'CROWD FAVORITE',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '3',
    name: 'Igisafuriya',
    description: 'A massive traditional feast of chicken, plantains, and rich sauce. The ultimate group sharing experience.',
    tag: 'TRADITIONAL FEAST',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '4',
    name: 'Nyamachoma',
    description: 'Classic East African roasted meat, seasoned with traditional spices and grilled over open flame.',
    tag: 'EAST AFRICAN CLASSIC',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '5',
    name: 'Chicken Wings',
    description: 'Crispy wings tossed in our signature sauce — the perfect companion to your late-night drinks.',
    tag: 'LATE NIGHT',
    image: 'https://images.unsplash.com/photo-1524114664604-cd8133cd67ad?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '6',
    name: 'Goat Brochette',
    description: 'Tender goat meat skewered and grilled to perfection. A Rwandan grill classic, done the Paddock way.',
    tag: 'GRILL FAVORITE',
    image: 'https://seeafricatoday.com/wp-content/uploads/2023/01/Goat-Brochettes-rwanda.jpg',
  },
  {
    id: '7',
    name: 'Four Season Pizza',
    description: 'Four quarters, four toppings — artichoke, ham, mushroom, olive. Our most popular pizza.',
    tag: 'PIZZA',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '8',
    name: 'Chicken Cordon Bleu',
    description: 'Breaded chicken breast stuffed with ham and melted cheese. A premium main course that never disappoints.',
    tag: 'PREMIUM MAIN',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=1200',
  },
];
