export interface MenuItem {
  id: string;
  category: string;
  title: string;
  price: string;
  description: string;
  image: string;
  prepTime?: string;
  rating?: number;
}

export const FOOD_ITEMS: MenuItem[] = [
  // BURGERS
  { id: 'f1', category: 'Burgers', title: 'Beef Cheese Burger', price: '8,000', description: 'Juicy beef patty with melted cheese, fresh lettuce, and our signature sauce.', image: 'https://img.freepik.com/premium-photo/perfect-cheeseburger-one-table-professional-food-photography-high-quality-by-generative-ai_952778-8527.jpg?w=2000', prepTime: '15 min', rating: 4.8 },
  { id: 'f2', category: 'Burgers', title: 'Chicken Cheese Burger', price: '8,000', description: 'Crispy chicken breast topped with cheese and fresh greens.', image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&q=80&w=800', prepTime: '15 min', rating: 4.7 },
  { id: 'f3', category: 'Burgers', title: 'Egg Cheese Burger', price: '8,000', description: 'Classic burger topped with a perfectly fried egg and cheese.', image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&q=80&w=800', prepTime: '15 min', rating: 4.5 },
  { id: 'f4', category: 'Burgers', title: 'Fish Cheese Burger', price: '8,000', description: 'Crispy battered fish fillet with tartar sauce and cheese.', image: 'https://www.shutterstock.com/image-photo/delicious-crispy-fish-burger-cheese-600nw-777880585.jpg', prepTime: '20 min', rating: 4.6 },
  { id: 'f5', category: 'Burgers', title: 'Plain Burger', price: '8,000', description: 'Simple, delicious, classic beef burger.', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800', prepTime: '10 min', rating: 4.3 },
  { id: 'f6', category: 'Burgers', title: 'Vegetarian Burger', price: '8,000', description: 'Plant-based patty with fresh garden vegetables.', image: 'https://wallpapercave.com/wp/wp11267883.jpg', prepTime: '15 min', rating: 4.4 },
  { id: 'f7', category: 'Burgers', title: 'King Burger', price: '10,000', description: 'The ultimate Paddock double-patty burger experience.', image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=800', prepTime: '20 min', rating: 5.0 },

  // PIZZAS
  { id: 'f8', category: 'Pizzas', title: 'Pizza Americano', price: '10,000', description: 'Classic pepperoni and mozzarella cheese.', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=800', prepTime: '20 min', rating: 4.8 },
  { id: 'f9', category: 'Pizzas', title: 'Pizza Chicken Curry', price: '10,000', description: 'Spiced curry chicken topped with fresh herbs.', image: 'http://www.guyspizzas.com/wp-content/uploads/2019/12/pizza-hot-curry-chicken-1024x599.jpg', prepTime: '20 min', rating: 4.7 },
  { id: 'f10', category: 'Pizzas', title: 'Pizza Hawaiian', price: '10,000', description: 'Ham, pineapple, and melted mozzarella.', image: 'https://thestayathomechef.com/wp-content/uploads/2023/04/Hawaiian-Pizza-8.jpg', prepTime: '20 min', rating: 4.6 },
  { id: 'f11', category: 'Pizzas', title: 'Pizza Margarita', price: '10,000', description: 'Fresh tomatoes, mozzarella, and sweet basil.', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=800', prepTime: '15 min', rating: 4.9 },
  { id: 'f12', category: 'Pizzas', title: 'Pizza Meat Feast', price: '10,000', description: 'A hearty blend of premium meats and cheese.', image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=800', prepTime: '25 min', rating: 5.0 },
  { id: 'f13', category: 'Pizzas', title: 'Pizza Paddock Special', price: '10,000', description: 'Our signature house pizza loaded with premium toppings.', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800', prepTime: '25 min', rating: 5.0 },
  { id: 'f14', category: 'Pizzas', title: 'Pizza Regina', price: '10,000', description: 'Classic ham and mushroom pizza.', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800', prepTime: '20 min', rating: 4.7 },
  { id: 'f15', category: 'Pizzas', title: 'Pizza Vegetarian', price: '5,000', description: 'Fresh garden vegetables on a crisp crust.', image: 'https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?auto=format&fit=crop&q=80&w=800', prepTime: '15 min', rating: 4.5 },

  // MAIN COURSES
  { id: 'f16', category: 'Main Courses', title: 'Chicken Cordon Bleu', price: '10,000', description: 'Breaded chicken breast stuffed with ham and cheese.', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800', prepTime: '30 min', rating: 4.8 },
  { id: 'f17', category: 'Main Courses', title: 'Rosee beef au carottes', price: '13,000', description: 'Tender beef roast served with glazed carrots.', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800', prepTime: '35 min', rating: 4.9 },
  { id: 'f18', category: 'Main Courses', title: 'Steak Beef Sur les Épinards', price: '10,000', description: 'Premium steak served over a bed of fresh spinach.', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800', prepTime: '25 min', rating: 4.9 },
  { id: 'f19', category: 'Main Courses', title: 'Beef Boilo', price: '7,000', description: 'Traditional slow-cooked beef soup, rich and flavorful.', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=800', prepTime: '25 min', rating: 4.7 },
  { id: 'f20', category: 'Main Courses', title: 'Chicken Boilo', price: '7,000', description: 'Hearty, warming chicken soup cooked with local spices.', image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=800', prepTime: '25 min', rating: 4.6 },
  { id: 'f21', category: 'Main Courses', title: 'Fish Boilo', price: '7,000', description: 'Fresh fish broth, spiced to perfection.', image: 'https://images.unsplash.com/photo-1512832592051-1e085c88089b?auto=format&fit=crop&q=80&w=800', prepTime: '25 min', rating: 4.8 },

  // TRADITIONAL
  { id: 'f22', category: 'Traditional', title: 'Igisafuriya', price: '30,000', description: 'A massive traditional feast of chicken, plantains, and rich sauce.', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800', prepTime: '45 min', rating: 5.0 },
  { id: 'f23', category: 'Traditional', title: 'Ikidari', price: '25,000', description: 'A local favorite meant for sharing with friends.', image: 'https://nasseryouthmovement.net/uploads/images/2023/09/image_750x_64fcd300a2a6e.jpg', prepTime: '40 min', rating: 4.9 },
  { id: 'f24', category: 'Traditional', title: 'Agatogo', price: '8,000', description: 'Classic Rwandan plantain stew cooked with meat and rich flavors.', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=800', prepTime: '30 min', rating: 4.8 },

  // PLATTERS
  { id: 'f25', category: 'Platters', title: 'Mixed Meat Platter', price: '80,000', description: 'The ultimate VIP sharing board with all our best grilled meats.', image: 'https://static.vecteezy.com/system/resources/previews/051/166/536/non_2x/sizzling-mixed-barbecue-platter-featuring-grilled-meats-sausages-and-garnishes-perfect-for-meat-lovers-vibrant-colors-and-variety-create-appetizing-display-photo.JPG', prepTime: '45 min', rating: 5.0 },
  { id: 'f26', category: 'Platters', title: 'Chicken Platter', price: '80,000', description: 'A massive platter of grilled and fried chicken for the table.', image: 'https://static.vecteezy.com/system/resources/previews/059/515/598/non_2x/delicious-fried-chicken-platter-with-various-flavors-and-sides-perfect-for-sharing-free-photo.jpeg', prepTime: '40 min', rating: 4.9 },
  { id: 'f27', category: 'Platters', title: 'Fish Platter', price: '80,000', description: 'Premium selection of whole grilled and fried fish.', image: 'https://images.squarespace-cdn.com/content/v1/5fb536c928f96b044ab17bdd/1676473867330-C67M8MMT8PLS4B88NN8X/20230214_165352_0003.jpg', prepTime: '40 min', rating: 4.8 },
  { id: 'f28', category: 'Platters', title: 'Big Platter', price: '70,000', description: 'A generous mix of bites and sides for large groups.', image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&q=80&w=800', prepTime: '35 min', rating: 4.9 },
  { id: 'f29', category: 'Platters', title: 'Small Platter', price: '50,000', description: 'Perfect sharing size for 2-4 people.', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800', prepTime: '25 min', rating: 4.7 },

  // GRILLS
  { id: 'f30', category: 'Grills', title: 'Big Fish', price: '25,000', description: 'Whole grilled fish, perfectly seasoned and scored.', image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&q=80&w=800', prepTime: '35 min', rating: 4.9 },
  { id: 'f31', category: 'Grills', title: 'Broiler Chicken', price: '25,000', description: 'Whole grilled chicken straight from the fire.', image: 'https://images.pexels.com/photos/26625882/pexels-photo-26625882.jpeg?cs=srgb&dl=pexels-tkphotos-26625882.jpg&fm=jpg', prepTime: '30 min', rating: 4.8 },
  { id: 'f32', category: 'Grills', title: 'Nyamachoma', price: '25,000', description: 'Classic East African roasted meat.', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800', prepTime: '30 min', rating: 5.0 },
  { id: 'f33', category: 'Grills', title: 'Goat Brochette', price: '4,000', description: 'Tender goat meat skewered and grilled.', image: 'https://seeafricatoday.com/wp-content/uploads/2023/01/Goat-Brochettes-rwanda.jpg', prepTime: '15 min', rating: 4.9 },
  { id: 'f34', category: 'Grills', title: 'Fish Brochette', price: '3,000', description: 'Fresh fish cubes, grilled on a stick.', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800', prepTime: '15 min', rating: 4.7 },
  { id: 'f35', category: 'Grills', title: 'Beef Brochette', price: '2,500', description: 'Juicy beef cubes grilled with onions.', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800', prepTime: '15 min', rating: 4.6 },
  { id: 'f36', category: 'Grills', title: 'Chicken Brochette', price: '2,500', description: 'Marinated chicken breast skewers.', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800', prepTime: '15 min', rating: 4.8 },

  // OMELETTES
  { id: 'f37', category: 'Omelettes', title: 'Special Omelette', price: '5,000', description: 'Loaded with veggies, cheese, and meats.', image: 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/19/1600x800/landscape-1494614947-delish-philly-cheesesteak-omelette-1.jpg?resize=1200:*', prepTime: '10 min', rating: 4.7 },
  { id: 'f38', category: 'Omelettes', title: 'Chapati', price: '5,000', description: 'Flaky, warm, freshly made chapati bread.', image: 'https://images.unsplash.com/photo-1626082895617-2c6afda2c0f5?auto=format&fit=crop&q=80&w=800', prepTime: '5 min', rating: 4.9 },
  { id: 'f39', category: 'Omelettes', title: 'Plain Omelette', price: '3,000', description: 'Simple, fluffy 3-egg omelette.', image: 'https://images.unsplash.com/photo-1510693062738-eb4f29c92b4c?auto=format&fit=crop&q=80&w=800', prepTime: '10 min', rating: 4.2 },
  { id: 'f40', category: 'Omelettes', title: 'Spanish Omelette', price: '3,000', description: 'Omelette cooked with potatoes and onions.', image: 'https://images.unsplash.com/photo-1510693062738-eb4f29c92b4c?auto=format&fit=crop&q=80&w=800', prepTime: '12 min', rating: 4.6 },
];

export const DRINKS_ITEMS: MenuItem[] = [
  // BEERS
  { id: 'b1', category: 'Beers', title: 'Corona', price: '5,000', description: 'Clear bottle with the signature lime wedge ritual.', image: '/images/beers/image1.jpeg' },
  { id: 'b2', category: 'Beers', title: 'Heineken', price: '4,500', description: 'Iconic green bottle with heavy "ice-cold" condensation.', image: '/images/beers/image2.jpeg' },
  { id: 'b3', category: 'Beers', title: 'Guinness', price: '3,500', description: 'Dark, sophisticated bottle against a high-contrast background.', image: '/images/beers/image3.jpeg' },
  { id: 'b4', category: 'Beers', title: 'Smirnoff Ice', price: '3,500', description: 'Frosted bottle highlighting its crisp, citrus nature.', image: '/images/beers/image4.jpeg' },
  { id: 'b5', category: 'Beers', title: 'Savanna', price: '3,000', description: 'Short, clear bottle showcasing the golden dry cider.', image: '/images/beers/image6.jpeg' },
  { id: 'b6', category: 'Beers', title: 'Tusker', price: '3,000', description: 'Bold yellow and black label, a classic East African staple.', image: '/images/beers/image5.jpeg' },
  { id: 'b7', category: 'Beers', title: 'Amstel', price: '2,000', description: 'Slow brewed premium lager.', image: '/images/beers/image7.jpeg' },
  { id: 'b8', category: 'Beers', title: 'Mutzig (Big)', price: '2,500', description: 'The taste of success.', image: '/images/beers/image9.jpeg' },
  { id: 'b9', category: 'Beers', title: 'Skol Malt', price: '2,000', description: '100% Malt lager.', image: '/images/beers/image10.png' },
  { id: 'b10', category: 'Beers', title: 'Virunga', price: '2,000', description: 'Mist of the volcanoes.', image: '/images/beers/image11.jpeg' },
  { id: 'b11', category: 'Beers', title: 'Primus', price: '1,500', description: 'The original Rwandan beer.', image: '/images/beers/image8.png' },

  // COCKTAILS
  { id: 'd13', category: 'Cocktails', title: 'Long Island Iced Tea', price: '15,000', description: 'A potent mix of vodka, tequila, light rum, triple sec, gin, and a splash of cola.', image: 'https://images.unsplash.com/photo-1599021455589-3543d2c6e61f?auto=format&fit=crop&q=80&w=800' },
  { id: 'd14', category: 'Cocktails', title: 'Adios Motherfucker', price: '15,000', description: 'Bold and blue, packed with five spirits and a splash of citrus.', image: 'https://images.unsplash.com/photo-1587223962930-cb7f31384c19?auto=format&fit=crop&q=80&w=800' },
  { id: 'd15', category: 'Cocktails', title: 'Margarita', price: '15,000', description: 'Classic tequila, triple sec, and lime juice with a salted rim.', image: 'https://images.unsplash.com/photo-1568227448378-c1e1933f7c4e?auto=format&fit=crop&q=80&w=800' },
  { id: 'd16', category: 'Cocktails', title: 'Sex on the Bench', price: '15,000', description: 'Sweet and fruity vodka cocktail.', image: 'https://images.unsplash.com/photo-1605256247963-7188d3e23b2c?auto=format&fit=crop&q=80&w=800' },
  { id: 'd17', category: 'Cocktails', title: 'Paddock Panty', price: '15,000', description: 'Our secret signature house cocktail.', image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=800' },
  { id: 'd18', category: 'Cocktails', title: 'Cosmopolitan', price: '10,000', description: 'Vodka, triple sec, cranberry juice, and freshly squeezed lime.', image: 'https://images.unsplash.com/photo-1615887023516-9b6ca8fa6639?auto=format&fit=crop&q=80&w=800' },
  { id: 'd19', category: 'Cocktails', title: 'Daiquiri', price: '10,000', description: 'Rum, citrus juice, and sweetener.', image: 'https://images.unsplash.com/photo-1615887023516-9b6ca8fa6639?auto=format&fit=crop&q=80&w=800' },
  { id: 'd20', category: 'Cocktails', title: 'Miss Rwanda', price: '10,000', description: 'Elegant, sweet, and perfectly balanced local favorite.', image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800' },
  { id: 'd21', category: 'Cocktails', title: 'Mojito', price: '10,000', description: 'Refreshing Cuban classic with mint and lime.', image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&q=80&w=800' },
  { id: 'd22', category: 'Cocktails', title: 'Whiskey Sour', price: '10,000', description: 'Whiskey, lemon juice, sugar, and a dash of egg white.', image: 'https://images.unsplash.com/photo-1631526488258-a83d739818e6?auto=format&fit=crop&q=80&w=800' },

  // SHOTS (PREMIUM LIQUORS & COGNAC)
  { id: 'sh1', category: 'Shots', title: 'Johnnie Walker (Shot)', price: 'Shot Price', description: 'Black Label, Red Label, Blue Label, Gold Label, Platinum, and Double Black.', image: '/images/liquors/image1.png' },
  { id: 'sh2', category: 'Shots', title: "Jack Daniel's (Shot)", price: 'Shot Price', description: 'Standard and Gentleman Jack.', image: '/images/liquors/image2.jpeg' },
  { id: 'sh3', category: 'Shots', title: 'Chivas Regal (Shot)', price: 'Shot Price', description: '12 Years and 18 Years.', image: '/images/liquors/image3.jpeg' },
  { id: 'sh4', category: 'Shots', title: 'Jameson (Shot)', price: 'Shot Price', description: 'Original and Black Barrel.', image: '/images/liquors/image4.png' },
  { id: 'sh5', category: 'Shots', title: 'Hennessy (Shot)', price: 'Shot Price', description: 'VS and VSOP.', image: '/images/liquors/image5.png' },
  { id: 'sh6', category: 'Shots', title: 'Martell (Shot)', price: 'Shot Price', description: 'VS, VSOP, and Blue Swift.', image: '/images/liquors/image6.png' },
  { id: 'sh7', category: 'Shots', title: 'Remy Martin (Shot)', price: 'Shot Price', description: 'VSOP.', image: '/images/liquors/image7.png' },
  { id: 'sh8', category: 'Shots', title: 'Viceroy Brandy (Shot)', price: 'Shot Price', description: 'Premium Brandy.', image: '/images/liquors/image8.png' },
  { id: 'sh9', category: 'Shots', title: 'Tanqueray Gin (Shot)', price: 'Shot Price', description: 'Standard and No. Ten.', image: '/images/liquors/image9.png' },
  { id: 'sh10', category: 'Shots', title: "Hendrick's Gin (Shot)", price: 'Shot Price', description: 'Premium distilled gin.', image: '/images/liquors/image10.png' },
  { id: 'sh11', category: 'Shots', title: 'Bombay Sapphire (Shot)', price: 'Shot Price', description: 'Premium London dry gin.', image: '/images/liquors/image11.png' },
  { id: 'sh12', category: 'Shots', title: "Gordon's Gin (Shot)", price: 'Shot Price', description: 'London Dry and Pink.', image: '/images/liquors/image12.png' },
  { id: 'sh13', category: 'Shots', title: 'Smirnoff (Shot)', price: 'Shot Price', description: 'Classic Vodka.', image: '/images/liquors/image13.png' },
  { id: 'sh14', category: 'Shots', title: 'Don Julio & Camino (Shot)', price: 'Shot Price', description: 'Don Julio (Blanco, Reposado, Anejo, 1942) and Camino Tequila.', image: '/images/liquors/image14.png' },
  { id: 'sh15', category: 'Shots', title: 'Premium Vodka (Shot)', price: 'Shot Price', description: 'Cîroc (various flavors), Belvedere, Grey Goose and Jose Cuervo.', image: '/images/liquors/image15.jpeg' },
  { id: 'sh16', category: 'Shots', title: 'Captain Morgan (Shot)', price: 'Shot Price', description: 'Black and Spiced Rum.', image: '/images/liquors/image16.jpeg' },
  { id: 'sh17', category: 'Shots', title: 'Bacardi (Shot)', price: 'Shot Price', description: 'Classic white rum.', image: '/images/liquors/image17.png' },
  { id: 'sh18', category: 'Shots', title: 'Havana Club (Shot)', price: 'Shot Price', description: 'Authentic Cuban rum.', image: '/images/liquors/image18.png' },
  { id: 'sh19', category: 'Shots', title: 'Baileys (Shot)', price: 'Shot Price', description: 'Irish cream liqueur.', image: '/images/liquors/image19.jpeg' },
  { id: 'sh20', category: 'Shots', title: 'Amarula (Shot)', price: 'Shot Price', description: 'South African cream liqueur.', image: '/images/liquors/image20.jpeg' },
  { id: 'sh21', category: 'Shots', title: 'Campari (Shot)', price: 'Shot Price', description: 'Classic Italian bitter.', image: '/images/liquors/image21.png' },
  { id: 'sh22', category: 'Shots', title: 'Jägermeister (Shot)', price: 'Shot Price', description: 'Herbal liqueur.', image: '/images/liquors/image22.jpeg' },
  { id: 'sh23', category: 'Shots', title: 'Kahlúa (Shot)', price: 'Shot Price', description: 'Coffee liqueur.', image: '/images/liquors/image23.png' },

  // SOFT DRINKS
  { id: 's1', category: 'Soft Drinks', title: 'Fresh Juice', price: '4,000', description: 'Freshly squeezed juice.', image: '/images/soft_drinks/image1.jpeg' },
  { id: 's2', category: 'Soft Drinks', title: 'Minute Maid / Other Juices', price: '2,500', description: 'Chilled fruit juice.', image: '/images/soft_drinks/image2.png' },
  { id: 's3', category: 'Soft Drinks', title: 'Fanta (Plastic)', price: '2,000', description: 'Refreshing orange soda.', image: '/images/soft_drinks/image3.png' },
  { id: 's4', category: 'Soft Drinks', title: 'Tonic Water / Soda Water', price: '2,000', description: 'Mixer or refreshing drink.', image: '/images/soft_drinks/image4.jpeg' },
  { id: 's5', category: 'Soft Drinks', title: 'Inyange Water (Large)', price: '2,000', description: 'Premium mineral water.', image: '/images/soft_drinks/image5.jpeg' },
  { id: 's6', category: 'Soft Drinks', title: 'Inyange Water (Small)', price: '1,000', description: 'Premium mineral water.', image: '/images/soft_drinks/image5.jpeg' },
  { id: 's7', category: 'Soft Drinks', title: 'Red Bull', price: '5,000', description: 'Energy drink.', image: '/images/soft_drinks/image6.jpeg' },
  { id: 's8', category: 'Soft Drinks', title: 'Maltona', price: '1,000', description: 'Malt beverage.', image: '/images/soft_drinks/image7.png' },

  // MOCKTAILS
  { id: 'm1', category: 'Mocktails', title: 'Virgin Mojito', price: '8,000', description: 'Premium non-alcoholic mojito.', image: '/images/soft_drinks/image8.jpeg' },
  { id: 'm2', category: 'Mocktails', title: 'Virgin Colada', price: '8,000', description: 'Premium non-alcoholic colada.', image: '/images/soft_drinks/image9.png' },
  { id: 'm3', category: 'Mocktails', title: 'Virgin Strawberry', price: '8,000', description: 'Premium non-alcoholic strawberry drink.', image: '/images/soft_drinks/image10.jpeg' },
  { id: 'm4', category: 'Mocktails', title: 'Chapman', price: '8,000', description: 'Classic refreshing mocktail.', image: '/images/soft_drinks/image10.jpeg' },
  { id: 'm5', category: 'Mocktails', title: 'Lemonade', price: '8,000', description: 'Classic, Mint, or Strawberry.', image: '/images/soft_drinks/image11.jpeg' },

  // HOT DRINKS
  { id: 'h1', category: 'Hot Drinks', title: 'Cappuccino', price: '3,500', description: 'Rich espresso topped with frothy milk.', image: '/images/hot_drinks/image1.png' },
  { id: 'h2', category: 'Hot Drinks', title: 'Mocha', price: '3,000', description: 'Espresso mixed with chocolate and steamed milk.', image: '/images/hot_drinks/image2.png' },
  { id: 'h3', category: 'Hot Drinks', title: 'African Tea', price: '2,500', description: 'Traditional spiced milk tea.', image: '/images/hot_drinks/image3.jpeg' },
  { id: 'h4', category: 'Hot Drinks', title: 'Black Coffee', price: '1,500', description: 'Freshly brewed local Rwandan coffee.', image: '/images/hot_drinks/image4.png' },
  { id: 'h5', category: 'Hot Drinks', title: 'Expresso', price: '2,000', description: 'Strong, bold espresso shot.', image: '/images/hot_drinks/image5.jpeg' },

  // WHISKY
  { id: 'l1', category: 'Whisky', title: 'Johnnie Walker', price: 'Bottle / Shot', description: 'Black Label, Red Label, Blue Label, Gold Label, Platinum, and Double Black.', image: '/images/liquors/image1.png' },
  { id: 'l2', category: 'Whisky', title: "Jack Daniel's", price: 'Bottle / Shot', description: 'Standard and Gentleman Jack.', image: '/images/liquors/image2.jpeg' },
  { id: 'l3', category: 'Whisky', title: 'Chivas Regal', price: 'Bottle / Shot', description: '12 Years and 18 Years.', image: '/images/liquors/image3.jpeg' },
  { id: 'l4', category: 'Whisky', title: 'Jameson', price: 'Bottle / Shot', description: 'Original and Black Barrel.', image: '/images/liquors/image4.png' },

  // COGNAC & BRANDY
  { id: 'l5', category: 'Cognac & Brandy', title: 'Hennessy', price: 'Bottle / Shot', description: 'VS and VSOP.', image: '/images/liquors/image5.png' },
  { id: 'l6', category: 'Cognac & Brandy', title: 'Martell', price: 'Bottle / Shot', description: 'VS, VSOP, and Blue Swift.', image: '/images/liquors/image6.png' },
  { id: 'l7', category: 'Cognac & Brandy', title: 'Remy Martin', price: 'Bottle / Shot', description: 'VSOP.', image: '/images/liquors/image7.png' },
  { id: 'l8', category: 'Cognac & Brandy', title: 'Viceroy Brandy', price: 'Bottle / Shot', description: 'Premium Brandy.', image: '/images/liquors/image8.png' },

  // GIN, VODKA & TEQUILA
  { id: 'l9', category: 'Gin, Vodka & Tequila', title: 'Tanqueray Gin', price: 'Bottle / Shot', description: 'Standard and No. Ten.', image: '/images/liquors/image9.png' },
  { id: 'l10', category: 'Gin, Vodka & Tequila', title: "Hendrick's Gin", price: 'Bottle / Shot', description: 'Premium distilled gin.', image: '/images/liquors/image10.png' },
  { id: 'l11', category: 'Gin, Vodka & Tequila', title: 'Bombay Sapphire', price: 'Bottle / Shot', description: 'Premium London dry gin.', image: '/images/liquors/image11.png' },
  { id: 'l12', category: 'Gin, Vodka & Tequila', title: "Gordon's Gin", price: 'Bottle / Shot', description: 'London Dry and Pink.', image: '/images/liquors/image12.png' },
  { id: 'l13', category: 'Gin, Vodka & Tequila', title: 'Smirnoff', price: 'Bottle / Shot', description: 'Classic Vodka.', image: '/images/liquors/image13.png' },
  { id: 'l14', category: 'Gin, Vodka & Tequila', title: 'Don Julio & Camino', price: 'Bottle / Shot', description: 'Don Julio (Blanco, Reposado, Anejo, 1942) and Camino Tequila.', image: '/images/liquors/image14.png' },
  { id: 'l15', category: 'Gin, Vodka & Tequila', title: 'Premium Vodka', price: 'Bottle / Shot', description: 'Cîroc (various flavors), Belvedere, Grey Goose and Jose Cuervo.', image: '/images/liquors/image15.jpeg' },

  // RUM & LIQUEURS
  { id: 'l16', category: 'Rum & Liqueurs', title: 'Captain Morgan', price: 'Bottle / Shot', description: 'Black and Spiced Rum.', image: '/images/liquors/image16.jpeg' },
  { id: 'l17', category: 'Rum & Liqueurs', title: 'Bacardi', price: 'Bottle / Shot', description: 'Classic white rum.', image: '/images/liquors/image17.png' },
  { id: 'l18', category: 'Rum & Liqueurs', title: 'Havana Club', price: 'Bottle / Shot', description: 'Authentic Cuban rum.', image: '/images/liquors/image18.png' },
  { id: 'l19', category: 'Rum & Liqueurs', title: 'Baileys', price: 'Bottle / Shot', description: 'Irish cream liqueur.', image: '/images/liquors/image19.jpeg' },
  { id: 'l20', category: 'Rum & Liqueurs', title: 'Amarula', price: 'Bottle / Shot', description: 'South African cream liqueur.', image: '/images/liquors/image20.jpeg' },
  { id: 'l21', category: 'Rum & Liqueurs', title: 'Campari', price: 'Bottle / Shot', description: 'Classic Italian bitter.', image: '/images/liquors/image21.png' },
  { id: 'l22', category: 'Rum & Liqueurs', title: 'Jägermeister', price: 'Bottle / Shot', description: 'Herbal liqueur.', image: '/images/liquors/image22.jpeg' },
  { id: 'l23', category: 'Rum & Liqueurs', title: 'Kahlúa', price: 'Bottle / Shot', description: 'Coffee liqueur.', image: '/images/liquors/image23.png' },

  // CHAMPAGNES & SPARKLING
  { id: 'c1', category: 'Champagnes & Sparkling', title: 'Veuve Clicquot', price: '245,000', description: 'Premium Champagne.', image: '/images/champains/image1.jpeg' },
  { id: 'c2', category: 'Champagnes & Sparkling', title: 'Moët & Chandon', price: '215,000', description: 'Premium Champagne.', image: '/images/champains/image2.png' },
  { id: 'c3', category: 'Champagnes & Sparkling', title: 'Luc Belaire', price: '150,000', description: 'Premium Sparkling Wine.', image: '/images/champains/image3.jpeg' },
  { id: 'c4', category: 'Champagnes & Sparkling', title: 'Prosecco', price: '65,000', description: 'Classic Sparkling Wine.', image: '/images/champains/image4.png' },
];

export const ALL_FOOD_CATEGORIES = [...new Set(FOOD_ITEMS.map(item => item.category))];
export const ALL_DRINKS_CATEGORIES = [...new Set(DRINKS_ITEMS.map(item => item.category))];
