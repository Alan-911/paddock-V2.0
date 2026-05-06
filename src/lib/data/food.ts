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
    name: 'Wagyu Beef Sliders',
    description: 'Premium graded Wagyu beef, aged cheddar, and our signature house sauce on toasted brioche buns. Bite-sized luxury.',
    tag: 'SIGNATURE BITES',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '2',
    name: 'Truffle Fries',
    description: 'Crispy hand-cut fries tossed in white truffle oil, dusted with aged parmesan and fresh parsley. The ultimate late-night snack.',
    tag: 'LATE NIGHT',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '3',
    name: 'Spicy Tuna Crisps',
    description: 'Fresh sushi-grade tuna tartare tossed in spicy mayo, served over crispy rice squares with jalapeño garnish.',
    tag: 'SEAFOOD',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '4',
    name: 'Artisan Charcuterie',
    description: 'A curated selection of imported cured meats, aged cheeses, honeycomb, and artisan crackers. Perfect for sharing.',
    tag: 'SHARED PLATES',
    image: 'https://images.unsplash.com/photo-1606850688636-67a68579d46f?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '5',
    name: 'Crispy Calamari',
    description: 'Lightly dusted and flash-fried calamari rings, served with a zesty lemon aioli and spicy marinara dipping sauce.',
    tag: 'CROWD PLEASER',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '6',
    name: 'Sticky Glazed Wings',
    description: 'Double-fried for maximum crunch, tossed in our secret sweet and spicy sticky glaze. Warning: highly addictive.',
    tag: 'SPICY & SWEET',
    image: 'https://images.unsplash.com/photo-1524114664604-cd8133cd67ad?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '7',
    name: 'Paddock Spring Rolls',
    description: 'Crispy golden rolls packed with seasoned vegetables and glass noodles, served with a sweet chili dipping sauce.',
    tag: 'VEGETARIAN',
    image: 'https://images.unsplash.com/photo-1549233075-84e1bce9f91a?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '8',
    name: 'Gourmet Flatbread',
    description: 'Wood-fired flatbread topped with prosciutto, fresh mozzarella, fig jam, and baby arugula. A perfect balance of flavors.',
    tag: 'SAVORY & SWEET',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=1200',
  },
];
