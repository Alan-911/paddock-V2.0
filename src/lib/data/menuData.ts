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
  // ==================== BURGERS ====================
  { id: 'f1', category: 'Burgers', title: 'Beef Cheese Burger', price: '8,000', description: 'Juicy beef patty with melted cheese, fresh lettuce, and our signature sauce.', image: 'https://img.freepik.com/premium-photo/perfect-cheeseburger-one-table-professional-food-photography-high-quality-by-generative-ai_952778-8527.jpg?w=2000', prepTime: '15 min', rating: 4.8 },
  { id: 'f2', category: 'Burgers', title: 'Chicken Cheese Burger', price: '8,000', description: 'Crispy chicken breast topped with cheese and fresh greens.', image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&q=80&w=800', prepTime: '15 min', rating: 4.7 },
  { id: 'f3', category: 'Burgers', title: 'Egg Cheese Burger', price: '8,000', description: 'Classic burger topped with a perfectly fried egg and cheese.', image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&q=80&w=800', prepTime: '15 min', rating: 4.5 },
  { id: 'f4', category: 'Burgers', title: 'Fish Cheese Burger', price: '8,000', description: 'Crispy battered fish fillet with tartar sauce and cheese.', image: 'https://www.shutterstock.com/image-photo/delicious-crispy-fish-burger-cheese-600nw-777880585.jpg', prepTime: '20 min', rating: 4.6 },
  { id: 'f5', category: 'Burgers', title: 'Plain Burger', price: '8,000', description: 'Simple, delicious, classic beef burger.', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800', prepTime: '10 min', rating: 4.3 },
  { id: 'f6', category: 'Burgers', title: 'Vegetarian Avocado Burger', price: '8,000', description: 'Plant-based patty with creamy avocado and fresh garden vegetables.', image: 'https://wallpapercave.com/wp/wp11267883.jpg', prepTime: '15 min', rating: 4.4 },
  { id: 'f7', category: 'Burgers', title: 'King Burger', price: '10,000', description: 'The ultimate Paddock double-patty burger experience.', image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=800', prepTime: '20 min', rating: 5.0 },

  // ==================== PIZZAS ====================
  { id: 'f8', category: 'Pizzas', title: 'Americano Pizza', price: '10,000', description: 'Classic pepperoni and mozzarella cheese.', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=800', prepTime: '20 min', rating: 4.8 },
  { id: 'f9', category: 'Pizzas', title: 'Chicken Curry Pizza', price: '10,000', description: 'Spiced curry chicken topped with fresh herbs.', image: 'http://www.guyspizzas.com/wp-content/uploads/2019/12/pizza-hot-curry-chicken-1024x599.jpg', prepTime: '20 min', rating: 4.7 },
  { id: 'f10', category: 'Pizzas', title: 'Hawaiian Pizza', price: '10,000', description: 'Ham, pineapple, and melted mozzarella.', image: 'https://thestayathomechef.com/wp-content/uploads/2023/04/Hawaiian-Pizza-8.jpg', prepTime: '20 min', rating: 4.6 },
  { id: 'f11', category: 'Pizzas', title: 'Pizza Margarita', price: '10,000', description: 'Fresh tomatoes, mozzarella, and sweet basil.', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=800', prepTime: '15 min', rating: 4.9 },
  { id: 'f12', category: 'Pizzas', title: 'Four Season Pizza', price: '10,000', description: 'Four quarters, four toppings — artichoke, ham, mushroom, olive.', image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=800', prepTime: '25 min', rating: 5.0 },
  { id: 'f13', category: 'Pizzas', title: 'Pizza Francaise', price: '10,000', description: 'French-style pizza with cream base and toppings.', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800', prepTime: '25 min', rating: 5.0 },
  { id: 'f14', category: 'Pizzas', title: 'Chicken Pizza', price: '10,000', description: 'Tender grilled chicken with mozzarella and herbs.', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800', prepTime: '20 min', rating: 4.7 },
  { id: 'f15', category: 'Pizzas', title: 'Pizza Vegetarian', price: '5,000', description: 'Fresh garden vegetables on a crisp crust.', image: 'https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?auto=format&fit=crop&q=80&w=800', prepTime: '15 min', rating: 4.5 },
  { id: 'f15b', category: 'Pizzas', title: 'Indian Pizza', price: '10,000', description: 'Spiced tandoori chicken with peppers and onion.', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=800', prepTime: '20 min', rating: 4.6 },
  { id: 'f15c', category: 'Pizzas', title: 'Fish Pizza', price: '10,000', description: 'Fresh fish fillet with lemon and herbs.', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=800', prepTime: '20 min', rating: 4.5 },
  { id: 'f15d', category: 'Pizzas', title: 'Pizza Hot Dog', price: '10,000', description: 'Hot dog sausage with mustard and mozzarella.', image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=800', prepTime: '20 min', rating: 4.4 },
  { id: 'f15e', category: 'Pizzas', title: 'Pizza Loyal', price: '10,000', description: 'House special blend of premium toppings.', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800', prepTime: '20 min', rating: 4.8 },
  { id: 'f15f', category: 'Pizzas', title: 'Tona Pizza', price: '10,000', description: 'Tuna, onion, and olives on a crisp base.', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800', prepTime: '20 min', rating: 4.6 },

  // ==================== SOUPS ====================
  { id: 'f50', category: 'Soups', title: 'Beef Soup', price: '5,000', description: 'Rich and hearty slow-simmered beef broth.', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=800', prepTime: '20 min', rating: 4.7 },
  { id: 'f51', category: 'Soups', title: 'Chicken Soup', price: '8,000', description: 'Warming chicken broth with local herbs and spices.', image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=800', prepTime: '20 min', rating: 4.8 },
  { id: 'f52', category: 'Soups', title: 'Fish Soup', price: '6,000', description: 'Fresh fish broth, spiced to perfection.', image: 'https://images.unsplash.com/photo-1512832592051-1e085c88089b?auto=format&fit=crop&q=80&w=800', prepTime: '20 min', rating: 4.6 },
  { id: 'f53', category: 'Soups', title: 'Carrot Soup', price: '5,000', description: 'Creamy roasted carrot soup with a hint of ginger.', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=800', prepTime: '15 min', rating: 4.5 },
  { id: 'f54', category: 'Soups', title: 'Mixed Soup', price: '5,000', description: 'A blend of vegetables and meat in rich broth.', image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=800', prepTime: '20 min', rating: 4.5 },
  { id: 'f55', category: 'Soups', title: 'Mushroom Soup', price: '5,000', description: 'Creamy mushroom soup with fresh herbs.', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=800', prepTime: '15 min', rating: 4.6 },
  { id: 'f56', category: 'Soups', title: 'Vegetable Soup', price: '5,000', description: 'Garden fresh vegetable soup.', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=800', prepTime: '15 min', rating: 4.4 },
  { id: 'f57', category: 'Soups', title: 'Bouillon', price: '7,000', description: 'Traditional clear broth, rich and nourishing.', image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=800', prepTime: '25 min', rating: 4.7 },

  // ==================== MAIN COURSES ====================
  { id: 'f16', category: 'Main Courses', title: 'Chicken Cordon Bleu', price: '10,000', description: 'Breaded chicken breast stuffed with ham and cheese.', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800', prepTime: '30 min', rating: 4.8 },
  { id: 'f17', category: 'Main Courses', title: 'Rosee Beef au Carottes', price: '13,000', description: 'Tender beef roast served with glazed carrots.', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800', prepTime: '35 min', rating: 4.9 },
  { id: 'f18', category: 'Main Courses', title: 'Steak Beef Sur les Epinards', price: '10,000', description: 'Premium steak served over a bed of fresh spinach.', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800', prepTime: '25 min', rating: 4.9 },
  { id: 'f60', category: 'Main Courses', title: 'Bolognese', price: '10,000', description: 'Classic Italian meat sauce over fresh pasta.', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800', prepTime: '20 min', rating: 4.7 },
  { id: 'f61', category: 'Main Courses', title: 'Chicken Pilau', price: '30,000', description: 'Aromatic spiced rice cooked with tender chicken.', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800', prepTime: '35 min', rating: 4.9 },
  { id: 'f62', category: 'Main Courses', title: 'Fish Fillet', price: '10,000', description: 'Pan-seared fish fillet with herb butter sauce.', image: 'https://images.unsplash.com/photo-1512832592051-1e085c88089b?auto=format&fit=crop&q=80&w=800', prepTime: '20 min', rating: 4.8 },
  { id: 'f63', category: 'Main Courses', title: 'Fried Chicken', price: '15,000', description: 'Golden crispy fried chicken, seasoned to perfection.', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800', prepTime: '25 min', rating: 4.8 },
  { id: 'f64', category: 'Main Courses', title: 'Beef Stew', price: '10,000', description: 'Slow-cooked beef in a rich and savory gravy.', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=800', prepTime: '30 min', rating: 4.7 },
  { id: 'f65', category: 'Main Courses', title: 'Spaghetti Carbonara', price: '10,000', description: 'Creamy pasta with bacon and parmesan.', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800', prepTime: '15 min', rating: 4.8 },
  { id: 'f66', category: 'Main Courses', title: 'Chicken Wings', price: '8,000', description: 'Crispy wings tossed in our signature sauce.', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800', prepTime: '20 min', rating: 4.9 },
  { id: 'f67', category: 'Main Courses', title: 'Chicken Wrap', price: '10,000', description: 'Grilled chicken wrapped with fresh veggies and sauce.', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800', prepTime: '15 min', rating: 4.6 },
  { id: 'f68', category: 'Main Courses', title: 'Fish Finger', price: '7,000', description: 'Crispy breaded fish fingers, golden and crunchy.', image: 'https://images.unsplash.com/photo-1512832592051-1e085c88089b?auto=format&fit=crop&q=80&w=800', prepTime: '15 min', rating: 4.5 },
  { id: 'f69', category: 'Main Courses', title: 'Meat Balls', price: '5,000', description: 'Seasoned beef meatballs in rich tomato sauce.', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800', prepTime: '20 min', rating: 4.6 },

  // ==================== BOILO ====================
  { id: 'f19', category: 'Boilo', title: 'Beef Boilo', price: '7,000', description: 'Traditional slow-cooked beef soup, rich and flavorful.', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=800', prepTime: '25 min', rating: 4.7 },
  { id: 'f20', category: 'Boilo', title: 'Chicken Boilo', price: '7,000', description: 'Hearty, warming chicken soup cooked with local spices.', image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=800', prepTime: '25 min', rating: 4.6 },
  { id: 'f21', category: 'Boilo', title: 'Fish Boilo', price: '7,000', description: 'Fresh fish broth, spiced to perfection.', image: 'https://images.unsplash.com/photo-1512832592051-1e085c88089b?auto=format&fit=crop&q=80&w=800', prepTime: '25 min', rating: 4.8 },

  // ==================== TRADITIONAL ====================
  { id: 'f22', category: 'Traditional', title: 'Igisafuriya (3 People)', price: '30,000', description: 'A massive traditional feast of chicken, plantains, and rich sauce for 3.', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800', prepTime: '45 min', rating: 5.0 },
  { id: 'f22b', category: 'Traditional', title: 'Igisafuriya (5 People)', price: '50,000', description: 'The full traditional feast for 5 — the ultimate group experience.', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800', prepTime: '50 min', rating: 5.0 },
  { id: 'f23', category: 'Traditional', title: 'Ikidari', price: '25,000', description: 'A local favorite meant for sharing with friends.', image: 'https://nasseryouthmovement.net/uploads/images/2023/09/image_750x_64fcd300a2a6e.jpg', prepTime: '40 min', rating: 4.9 },
  { id: 'f24', category: 'Traditional', title: 'Agatogo', price: '8,000', description: 'Classic Rwandan plantain stew cooked with meat and rich flavors.', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=800', prepTime: '30 min', rating: 4.8 },
  { id: 'f70', category: 'Traditional', title: 'Local Chicken (Inyarwanda)', price: '25,000', description: 'Free-range local chicken, slow-cooked the traditional way.', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800', prepTime: '40 min', rating: 5.0 },
  { id: 'f71', category: 'Traditional', title: 'Umugongo', price: '20,000', description: 'Traditional grilled meat served with local accompaniments.', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800', prepTime: '35 min', rating: 4.9 },

  // ==================== PLATTERS ====================
  { id: 'f25', category: 'Platters', title: 'Mixed Meat Platter', price: '80,000', description: 'The ultimate VIP sharing board with all our best grilled meats.', image: 'https://static.vecteezy.com/system/resources/previews/051/166/536/non_2x/sizzling-mixed-barbecue-platter-featuring-grilled-meats-sausages-and-garnishes-perfect-for-meat-lovers-vibrant-colors-and-variety-create-appetizing-display-photo.JPG', prepTime: '45 min', rating: 5.0 },
  { id: 'f26', category: 'Platters', title: 'Chicken Platter', price: '80,000', description: 'A massive platter of grilled and fried chicken for the table.', image: 'https://static.vecteezy.com/system/resources/previews/059/515/598/non_2x/delicious-fried-chicken-platter-with-various-flavors-and-sides-perfect-for-sharing-free-photo.jpeg', prepTime: '40 min', rating: 4.9 },
  { id: 'f27', category: 'Platters', title: 'Fish Platter', price: '80,000', description: 'Premium selection of whole grilled and fried fish.', image: 'https://images.squarespace-cdn.com/content/v1/5fb536c928f96b044ab17bdd/1676473867330-C67M8MMT8PLS4B88NN8X/20230214_165352_0003.jpg', prepTime: '40 min', rating: 4.8 },
  { id: 'f28', category: 'Platters', title: 'Platter of Beef', price: '50,000', description: 'Premium grilled beef platter for sharing.', image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&q=80&w=800', prepTime: '35 min', rating: 4.9 },
  { id: 'f29', category: 'Platters', title: 'Big Platter', price: '70,000', description: 'A generous mix of bites and sides for large groups.', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800', prepTime: '35 min', rating: 4.9 },
  { id: 'f29b', category: 'Platters', title: 'Small Platter', price: '50,000', description: 'Perfect sharing size for 2-4 people.', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800', prepTime: '25 min', rating: 4.7 },

  // ==================== GRILLS & BROCHETTES ====================
  { id: 'f30', category: 'Grills', title: 'Big Fish', price: '25,000', description: 'Whole grilled fish, perfectly seasoned and scored.', image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&q=80&w=800', prepTime: '35 min', rating: 4.9 },
  { id: 'f31', category: 'Grills', title: 'Broiler Chicken', price: '25,000', description: 'Whole grilled chicken straight from the fire.', image: 'https://images.pexels.com/photos/26625882/pexels-photo-26625882.jpeg?cs=srgb&dl=pexels-tkphotos-26625882.jpg&fm=jpg', prepTime: '30 min', rating: 4.8 },
  { id: 'f32', category: 'Grills', title: 'Nyamachoma', price: '25,000', description: 'Classic East African roasted meat.', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800', prepTime: '30 min', rating: 5.0 },
  { id: 'f72', category: 'Grills', title: 'Boka', price: '15,000', description: 'Grilled meat served sizzling with spices.', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800', prepTime: '25 min', rating: 4.8 },
  { id: 'f73', category: 'Grills', title: 'Sizzling', price: '10,000', description: 'Hot sizzling meat served on a cast iron plate.', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800', prepTime: '20 min', rating: 4.7 },
  { id: 'f74', category: 'Grills', title: 'Beef Fried Big', price: '20,000', description: 'Large portion of deep-fried seasoned beef.', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800', prepTime: '25 min', rating: 4.8 },
  { id: 'f75', category: 'Grills', title: 'Amuse-Gueule', price: '5,000', description: 'Bite-sized appetizer from the grill.', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800', prepTime: '10 min', rating: 4.5 },
  { id: 'f33', category: 'Grills', title: 'Beef Brochette', price: '2,500', description: 'Juicy beef cubes grilled with onions.', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800', prepTime: '15 min', rating: 4.6 },
  { id: 'f34', category: 'Grills', title: 'Chicken Brochette', price: '4,000', description: 'Marinated chicken breast skewers.', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800', prepTime: '15 min', rating: 4.8 },
  { id: 'f35', category: 'Grills', title: 'Fish Brochette', price: '4,000', description: 'Fresh fish cubes, grilled on a stick.', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800', prepTime: '15 min', rating: 4.7 },
  { id: 'f36', category: 'Grills', title: 'Goat Brochette', price: '2,500', description: 'Tender goat meat skewered and grilled.', image: 'https://seeafricatoday.com/wp-content/uploads/2023/01/Goat-Brochettes-rwanda.jpg', prepTime: '15 min', rating: 4.9 },
  { id: 'f76', category: 'Grills', title: 'Liver Brochette', price: '2,500', description: 'Grilled liver skewers, tender and savory.', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800', prepTime: '15 min', rating: 4.5 },
  { id: 'f77', category: 'Grills', title: 'Sausage Brochette', price: '3,000', description: 'Smoky grilled sausage on a stick.', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800', prepTime: '15 min', rating: 4.6 },
  { id: 'f78', category: 'Grills', title: 'Ururimi Brochette', price: '3,000', description: 'Traditional tongue brochette, a local delicacy.', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800', prepTime: '15 min', rating: 4.7 },
  { id: 'f79', category: 'Grills', title: 'Zingalo Brochette', price: '3,000', description: 'Spiced tripe brochette, grilled to perfection.', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800', prepTime: '15 min', rating: 4.5 },

  // ==================== OMELETTES ====================
  { id: 'f37', category: 'Omelettes', title: 'Special Omelette', price: '5,000', description: 'Loaded with veggies, cheese, and meats.', image: 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/19/1600x800/landscape-1494614947-delish-philly-cheesesteak-omelette-1.jpg?resize=1200:*', prepTime: '10 min', rating: 4.7 },
  { id: 'f38', category: 'Omelettes', title: 'Chapati Omelette', price: '5,000', description: 'Fluffy omelette wrapped in warm chapati bread.', image: 'https://images.unsplash.com/photo-1626082895617-2c6afda2c0f5?auto=format&fit=crop&q=80&w=800', prepTime: '10 min', rating: 4.9 },
  { id: 'f39', category: 'Omelettes', title: 'Plain Omelette', price: '3,000', description: 'Simple, fluffy 3-egg omelette.', image: 'https://images.unsplash.com/photo-1510693062738-eb4f29c92b4c?auto=format&fit=crop&q=80&w=800', prepTime: '10 min', rating: 4.2 },
  { id: 'f40', category: 'Omelettes', title: 'Spanish Omelette', price: '3,000', description: 'Omelette cooked with potatoes and onions.', image: 'https://images.unsplash.com/photo-1510693062738-eb4f29c92b4c?auto=format&fit=crop&q=80&w=800', prepTime: '12 min', rating: 4.6 },

  // ==================== SIDES ====================
  { id: 'f80', category: 'Sides', title: 'Chips', price: '3,000', description: 'Golden crispy French fries.', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800', prepTime: '10 min', rating: 4.5 },
  { id: 'f81', category: 'Sides', title: 'Rice', price: '5,000', description: 'Steamed fluffy white rice.', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=800', prepTime: '10 min', rating: 4.3 },
  { id: 'f82', category: 'Sides', title: 'Vegetable Rice', price: '5,000', description: 'Rice cooked with mixed vegetables.', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=800', prepTime: '12 min', rating: 4.5 },
  { id: 'f83', category: 'Sides', title: 'Pomme Isole', price: '3,000', description: 'Classic potato preparation.', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800', prepTime: '10 min', rating: 4.3 },
  { id: 'f84', category: 'Sides', title: 'Pomme Nature', price: '3,000', description: 'Plain boiled potatoes.', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800', prepTime: '10 min', rating: 4.2 },
  { id: 'f85', category: 'Sides', title: 'Pomme Saute', price: '3,000', description: 'Pan-fried potatoes with herbs.', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800', prepTime: '12 min', rating: 4.4 },
  { id: 'f86', category: 'Sides', title: 'Kacumbali', price: '3,000', description: 'Fresh East African tomato and onion salad.', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=800', prepTime: '5 min', rating: 4.6 },
  { id: 'f87', category: 'Sides', title: 'Banana', price: '1,000', description: 'Fresh banana.', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800', prepTime: '1 min', rating: 4.0 },

  // ==================== SIGNATURE ====================
  { id: 'f90', category: 'Signature', title: 'Paddock Day', price: '10,000', description: 'The house signature dish — a Paddock Lounge original.', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800', prepTime: '20 min', rating: 5.0 },
  { id: 'f91', category: 'Signature', title: 'Fish Filet Sauce Meuniere', price: '10,000', description: 'Pan-fried fish fillet in classic brown butter sauce.', image: 'https://images.unsplash.com/photo-1512832592051-1e085c88089b?auto=format&fit=crop&q=80&w=800', prepTime: '20 min', rating: 4.9 },
  { id: 'f92', category: 'Signature', title: 'Chicken Paddock', price: '10,000', description: 'Chef\'s special chicken, the Paddock way.', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800', prepTime: '25 min', rating: 4.9 },
  { id: 'f93', category: 'Signature', title: 'Chop Chop', price: '7,000', description: 'Quick-fire chopped meat, seasoned and grilled.', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800', prepTime: '15 min', rating: 4.7 },
];

export const DRINKS_ITEMS: MenuItem[] = [
  // ==================== BEERS ====================
  { id: 'b1', category: 'Beers', title: 'Mutzig P', price: '2,500', description: 'The taste of success — Bralirwa premium lager.', image: '/images/beers/image9.jpeg' },
  { id: 'b1b', category: 'Beers', title: 'Mutzig Pression', price: '4,000', description: 'Fresh draft Mutzig, poured from the tap.', image: '/images/beers/image9.jpeg' },
  { id: 'b2', category: 'Beers', title: 'Amstel', price: '2,500', description: 'Slow brewed premium lager.', image: '/images/beers/image7.jpeg' },
  { id: 'b2b', category: 'Beers', title: 'Amstel Pression', price: '4,000', description: 'Fresh draft Amstel, crisp from the tap.', image: '/images/beers/image7.jpeg' },
  { id: 'b3', category: 'Beers', title: 'Heineken Bottle', price: '3,000', description: 'Iconic green bottle, ice-cold premium lager.', image: '/images/beers/image2.jpeg' },
  { id: 'b3b', category: 'Beers', title: 'Heineken 0 Canette', price: '3,000', description: 'Non-alcoholic Heineken, all the taste.', image: '/images/beers/image2.jpeg' },
  { id: 'b4', category: 'Beers', title: 'Primus Knowless', price: '2,000', description: 'The original Rwandan beer.', image: '/images/beers/image8.png' },
  { id: 'b5', category: 'Beers', title: 'Skol Malt 33cl', price: '2,000', description: '100% Malt lager.', image: '/images/beers/image10.png' },
  { id: 'b5b', category: 'Beers', title: 'Skol Lager', price: '1,500', description: 'Light and refreshing lager.', image: '/images/beers/image10.png' },
  { id: 'b5c', category: 'Beers', title: 'Skol Pulse', price: '1,500', description: 'Flavored beer with a citrus punch.', image: '/images/beers/image10.png' },
  { id: 'b5d', category: 'Beers', title: 'Skol Canette', price: '1,500', description: 'Skol in a can, crisp and cold.', image: '/images/beers/image10.png' },
  { id: 'b6', category: 'Beers', title: 'Virunga Silver', price: '1,500', description: 'Light silver lager from the volcanoes.', image: '/images/beers/image11.jpeg' },
  { id: 'b6b', category: 'Beers', title: 'Virunga Mist', price: '2,000', description: 'Mist of the volcanoes, smooth and refreshing.', image: '/images/beers/image11.jpeg' },
  { id: 'b6c', category: 'Beers', title: 'Virunga Gold', price: '1,500', description: 'Premium gold lager from Virunga.', image: '/images/beers/image11.jpeg' },
  { id: 'b7', category: 'Beers', title: 'Panache 33cl', price: '1,000', description: 'Light lemon-beer shandy.', image: '/images/beers/image11.jpeg' },
  { id: 'b8', category: 'Beers', title: 'Leffe', price: '5,000', description: 'Belgian abbey beer, rich and smooth.', image: '/images/beers/image1.jpeg' },
  { id: 'b9', category: 'Beers', title: 'Guinness Bottle', price: '3,000', description: 'Dark, sophisticated stout.', image: '/images/beers/image3.jpeg' },
  { id: 'b10', category: 'Beers', title: 'Tusker Lager', price: '3,000', description: 'Classic East African lager.', image: '/images/beers/image5.jpeg' },
  { id: 'b10b', category: 'Beers', title: 'Tusker Malt', price: '3,000', description: 'Premium malt from Kenya.', image: '/images/beers/image5.jpeg' },
  { id: 'b10c', category: 'Beers', title: 'Tusker Lite', price: '3,000', description: 'Light and easy-drinking.', image: '/images/beers/image5.jpeg' },
  { id: 'b11', category: 'Beers', title: 'Smirnoff Ice', price: '4,500', description: 'Frosted citrus malt beverage.', image: '/images/beers/image4.jpeg' },
  { id: 'b11b', category: 'Beers', title: 'Smirnoff Guarana', price: '5,000', description: 'Smirnoff with guarana energy boost.', image: '/images/beers/image4.jpeg' },
  { id: 'b12', category: 'Beers', title: 'Savanna', price: '5,000', description: 'Premium dry cider from South Africa.', image: '/images/beers/image6.jpeg' },
  { id: 'b13', category: 'Beers', title: 'Red Bull', price: '5,000', description: 'Energy drink, gives you wings.', image: '/images/soft_drinks/image6.jpeg' },
  { id: 'b14', category: 'Beers', title: 'Exo', price: '5,000', description: 'Premium energy malt drink.', image: '/images/beers/image1.jpeg' },
  { id: 'b15', category: 'Beers', title: 'Corona', price: '5,000', description: 'Clear bottle with the signature lime wedge.', image: '/images/beers/image1.jpeg' },
  { id: 'b16', category: 'Beers', title: 'Carlsberg', price: '5,000', description: 'Probably the best beer in the world.', image: '/images/beers/image1.jpeg' },
  { id: 'b17', category: 'Beers', title: 'Stella', price: '5,000', description: 'Premium Belgian lager.', image: '/images/beers/image1.jpeg' },
  { id: 'b18', category: 'Beers', title: 'Desperados', price: '5,000', description: 'Tequila-flavored lager, bold and unique.', image: '/images/beers/image1.jpeg' },

  // ==================== COCKTAILS ====================
  { id: 'd13', category: 'Cocktails', title: 'Paddock Panty', price: '15,000', description: 'Our secret signature house cocktail.', image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=800' },
  { id: 'd14', category: 'Cocktails', title: 'Miss Rwanda', price: '10,000', description: 'Elegant, sweet, and perfectly balanced local favorite.', image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800' },
  { id: 'd15', category: 'Cocktails', title: 'Long Island Iced Tea', price: '15,000', description: 'A potent mix of vodka, tequila, rum, triple sec, gin, and cola.', image: 'https://images.unsplash.com/photo-1599021455589-3543d2c6e61f?auto=format&fit=crop&q=80&w=800' },
  { id: 'd16', category: 'Cocktails', title: 'Sex on the Bench (SOB)', price: '15,000', description: 'Sweet and fruity vodka cocktail.', image: 'https://images.unsplash.com/photo-1605256247963-7188d3e23b2c?auto=format&fit=crop&q=80&w=800' },
  { id: 'd17', category: 'Cocktails', title: 'Mojito Classic/Flavoured', price: '10,000', description: 'Refreshing Cuban classic with mint, lime, and rum — also available flavoured.', image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&q=80&w=800' },
  { id: 'd18', category: 'Cocktails', title: 'Whisky Sour', price: '10,000', description: 'Whiskey, lemon juice, sugar, and a dash of egg white.', image: 'https://images.unsplash.com/photo-1631526488258-a83d739818e6?auto=format&fit=crop&q=80&w=800' },
  { id: 'd19', category: 'Cocktails', title: 'Old Fashioned Cocktail', price: '10,000', description: 'Bourbon, bitters, sugar, and an orange twist.', image: 'https://images.unsplash.com/photo-1631526488258-a83d739818e6?auto=format&fit=crop&q=80&w=800' },
  { id: 'd20', category: 'Cocktails', title: 'Margarita (classic/flavoured/frozen)', price: '15,000', description: 'Classic, flavoured, or frozen — tequila, triple sec, lime.', image: 'https://images.unsplash.com/photo-1568227448378-c1e1933f7c4e?auto=format&fit=crop&q=80&w=800' },
  { id: 'd21', category: 'Cocktails', title: 'Pink Pussy Cocktail', price: '15,000', description: 'Sweet, fruity, and perfectly pink.', image: 'https://images.unsplash.com/photo-1605256247963-7188d3e23b2c?auto=format&fit=crop&q=80&w=800' },
  { id: 'd22', category: 'Cocktails', title: 'Gin & Tonic (easy mix)', price: '15,000', description: 'Premium gin with tonic water and fresh garnish.', image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&q=80&w=800' },
  { id: 'd23', category: 'Cocktails', title: 'Cosmopolitan', price: '10,000', description: 'Vodka, triple sec, cranberry juice, and lime.', image: 'https://images.unsplash.com/photo-1615887023516-9b6ca8fa6639?auto=format&fit=crop&q=80&w=800' },
  { id: 'd24', category: 'Cocktails', title: 'Daiquiri', price: '10,000', description: 'Rum, citrus juice, and sweetener — refreshing classic.', image: 'https://images.unsplash.com/photo-1615887023516-9b6ca8fa6639?auto=format&fit=crop&q=80&w=800' },
  { id: 'd25', category: 'Cocktails', title: 'Adios (Blue Long Island)', price: '15,000', description: 'Bold and blue, packed with five spirits and citrus.', image: 'https://images.unsplash.com/photo-1587223962930-cb7f31384c19?auto=format&fit=crop&q=80&w=800' },
  { id: 'd26', category: 'Cocktails', title: 'Vodka Orange / Screwdriver', price: '10,000', description: 'Classic screwdriver — vodka and fresh OJ.', image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800' },
  { id: 'd27', category: 'Cocktails', title: 'Tequila Sunrise', price: '15,000', description: 'Tequila, orange juice, and grenadine gradient.', image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=800' },
  { id: 'd28', category: 'Cocktails', title: 'Sangria Cocktail', price: '15,000', description: 'Red wine, brandy, and fresh fruit.', image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=800' },
  { id: 'd29', category: 'Cocktails', title: 'Yaggerbombo', price: '15,000', description: 'Jagermeister dropped into Red Bull — a party starter.', image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&q=80&w=800' },
  { id: 'd30', category: 'Cocktails', title: 'Grenade Shot', price: '10,000', description: 'Explosive mix of spirits, a crowd favorite.', image: 'https://images.unsplash.com/photo-1587223962930-cb7f31384c19?auto=format&fit=crop&q=80&w=800' },
  { id: 'd31', category: 'Cocktails', title: 'Vodka Orange', price: '10,000', description: 'Simple and classic — vodka with orange juice.', image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800' },

  // ==================== SHOTS ====================
  { id: 'sh40', category: 'Shots', title: 'Flaming B52', price: '6,000', description: 'Layered Kahlua, Baileys, and Grand Marnier — set ablaze.', image: '/images/liquors/image22.jpeg' },
  { id: 'sh41', category: 'Shots', title: 'Flaming Lamborghini', price: '15,000', description: 'A spectacular multi-spirit flaming cocktail.', image: '/images/liquors/image22.jpeg' },
  { id: 'sh42', category: 'Shots', title: 'MFK Shot (Paddock Spear)', price: '5,000', description: 'Our signature shot — bold and unforgettable.', image: '/images/liquors/image22.jpeg' },
  { id: 'sh43', category: 'Shots', title: 'Kamikaze Shot', price: '5,000', description: 'Vodka, triple sec, and lime — sharp and quick.', image: '/images/liquors/image22.jpeg' },
  { id: 'sh44', category: 'Shots', title: 'Hot Girl Shot', price: '5,000', description: 'Sweet and spicy party shot.', image: '/images/liquors/image22.jpeg' },
  { id: 'sh45', category: 'Shots', title: 'Paddock Orgasm', price: '5,000', description: 'A smooth, creamy indulgence.', image: '/images/liquors/image22.jpeg' },

  // ==================== SOFT DRINKS ====================
  { id: 's1', category: 'Soft Drinks', title: 'Fanta Orange', price: '1,500', description: 'Classic orange soda.', image: '/images/soft_drinks/image3.png' },
  { id: 's1b', category: 'Soft Drinks', title: 'Fanta Citron', price: '1,500', description: 'Lemon-flavored Fanta.', image: '/images/soft_drinks/image3.png' },
  { id: 's1c', category: 'Soft Drinks', title: 'Fanta Fiesta', price: '1,500', description: 'Tropical fruit Fanta blend.', image: '/images/soft_drinks/image3.png' },
  { id: 's1d', category: 'Soft Drinks', title: 'Fanta Plastic', price: '2,000', description: 'Large Fanta bottle.', image: '/images/soft_drinks/image3.png' },
  { id: 's2', category: 'Soft Drinks', title: 'Coke', price: '1,500', description: 'The classic cola.', image: '/images/soft_drinks/image3.png' },
  { id: 's2b', category: 'Soft Drinks', title: 'Coke Zero', price: '1,500', description: 'Zero sugar, full taste.', image: '/images/soft_drinks/image3.png' },
  { id: 's3', category: 'Soft Drinks', title: 'Sprite', price: '1,500', description: 'Crisp lemon-lime refreshment.', image: '/images/soft_drinks/image3.png' },
  { id: 's4', category: 'Soft Drinks', title: 'Tonic Water', price: '2,000', description: 'Classic mixer or standalone.', image: '/images/soft_drinks/image4.jpeg' },
  { id: 's4b', category: 'Soft Drinks', title: 'Soda Water', price: '2,000', description: 'Plain sparkling water.', image: '/images/soft_drinks/image4.jpeg' },
  { id: 's5', category: 'Soft Drinks', title: 'Juice Passion', price: '2,000', description: 'Sweet passionfruit juice.', image: '/images/soft_drinks/image2.png' },
  { id: 's5b', category: 'Soft Drinks', title: 'Juice Orange', price: '2,000', description: 'Classic orange juice.', image: '/images/soft_drinks/image2.png' },
  { id: 's5c', category: 'Soft Drinks', title: 'Juice Apple', price: '2,000', description: 'Crisp apple juice.', image: '/images/soft_drinks/image2.png' },
  { id: 's7', category: 'Soft Drinks', title: 'Virunga Sparkling Water', price: '1,000', description: 'Sparkling mineral water.', image: '/images/soft_drinks/image5.jpeg' },
  { id: 's8', category: 'Soft Drinks', title: 'Inyange Water (Small)', price: '1,000', description: 'Premium mineral water.', image: '/images/soft_drinks/image5.jpeg' },
  { id: 's9', category: 'Soft Drinks', title: 'Inyange Water (Large)', price: '2,000', description: 'Large premium mineral water.', image: '/images/soft_drinks/image5.jpeg' },

  // ==================== MOCKTAILS ====================
  { id: 'm1', category: 'Mocktails', title: 'Detox', price: '8,000', description: 'Cleansing and refreshing non-alcoholic blend.', image: '/images/soft_drinks/image8.jpeg' },
  { id: 'm2', category: 'Mocktails', title: 'Virgin Mojitos (flavoured/classic)', price: '8,000', description: 'Classic or flavoured — mint, lime, soda.', image: '/images/soft_drinks/image8.jpeg' },
  { id: 'm3', category: 'Mocktails', title: 'Virgin Daiquiri', price: '8,000', description: 'Fruity and frozen, no alcohol.', image: '/images/soft_drinks/image9.png' },
  { id: 'm4', category: 'Mocktails', title: 'Lemonades (flavoured)', price: '8,000', description: 'Classic, mint, or strawberry flavoured.', image: '/images/soft_drinks/image11.jpeg' },

  // ==================== FRESH & SMOOTHIES ====================
  { id: 'fr0', category: 'Fresh & Smoothies', title: 'Fresh Juice', price: '4,000', description: 'Freshly squeezed seasonal juice.', image: '/images/soft_drinks/image1.jpeg' },
  { id: 'fr1', category: 'Fresh & Smoothies', title: 'Milk Shake', price: '5,500', description: 'Thick creamy milkshake, your choice of flavour.', image: '/images/soft_drinks/image10.jpeg' },
  { id: 'fr2', category: 'Fresh & Smoothies', title: 'CupFull of Dreams Cocktail', price: '5,000', description: 'A dreamy blend of fresh fruits and flavours.', image: '/images/soft_drinks/image10.jpeg' },
  { id: 'fr3', category: 'Fresh & Smoothies', title: 'CupFull of Dreams', price: '5,500', description: 'Premium version of our signature smoothie.', image: '/images/soft_drinks/image10.jpeg' },

  // ==================== HOT DRINKS ====================
  { id: 'h1', category: 'Hot Drinks', title: 'Cappuccino', price: '3,000', description: 'Rich espresso topped with frothy milk.', image: '/images/hot_drinks/image1.png' },
  { id: 'h2', category: 'Hot Drinks', title: 'Coffee Mocha', price: '3,000', description: 'Espresso mixed with chocolate and steamed milk.', image: '/images/hot_drinks/image2.png' },
  { id: 'h3', category: 'Hot Drinks', title: 'Coffee Latte', price: '3,000', description: 'Smooth espresso with velvety steamed milk.', image: '/images/hot_drinks/image2.png' },
  { id: 'h4', category: 'Hot Drinks', title: 'African Tea', price: '2,500', description: 'Traditional spiced milk tea.', image: '/images/hot_drinks/image3.jpeg' },
  { id: 'h5', category: 'Hot Drinks', title: 'Spice Tea', price: '3,500', description: 'Aromatic spiced tea blend.', image: '/images/hot_drinks/image3.jpeg' },
  { id: 'h6', category: 'Hot Drinks', title: 'Black Tea', price: '2,000', description: 'Simple classic black tea.', image: '/images/hot_drinks/image3.jpeg' },
  { id: 'h7', category: 'Hot Drinks', title: 'Black Coffee', price: '1,500', description: 'Freshly brewed local Rwandan coffee.', image: '/images/hot_drinks/image4.png' },
  { id: 'h8', category: 'Hot Drinks', title: 'American Coffee', price: '2,000', description: 'Long black Americano.', image: '/images/hot_drinks/image4.png' },
  { id: 'h9', category: 'Hot Drinks', title: 'Espresso Coffee', price: '2,000', description: 'Strong, bold espresso shot.', image: '/images/hot_drinks/image5.jpeg' },
  { id: 'h10', category: 'Hot Drinks', title: 'Hot Chocolate', price: '3,000', description: 'Rich and creamy hot chocolate.', image: '/images/hot_drinks/image2.png' },

  // ==================== WHISKY ====================
  { id: 'l1', category: 'Whisky', title: "Ballantine's", price: '4,000 – 85,000', description: 'Shot 4K · Small 25K · Quarter 40K · Half 65K · Bottle 85K.', image: '/images/liquors/image1.png' },
  { id: 'l2', category: 'Whisky', title: 'Red Label', price: '4,000 – 85,000', description: 'Shot 4K · Quarter 35K · Half 50K · Bottle 85K.', image: '/images/liquors/image1.png' },
  { id: 'l3', category: 'Whisky', title: 'Black Label', price: '5,000 – 130,000', description: 'Shot 5K · Quarter 45K · Half 85K · Bottle 130K.', image: '/images/liquors/image1.png' },
  { id: 'l4', category: 'Whisky', title: 'Double Black', price: '6,000 – 150,000', description: 'Shot 6K · Quarter 60K · Half 95K · Bottle 150K.', image: '/images/liquors/image1.png' },
  { id: 'l5', category: 'Whisky', title: 'Chivas 12', price: '6,000 – 155,000', description: 'Shot 6K · Quarter 60K · Half 100K · Bottle 155K.', image: '/images/liquors/image3.jpeg' },
  { id: 'l6', category: 'Whisky', title: "Jack Daniel's", price: '5,000 – 115,000', description: 'Shot 5K · Quarter 45K · Half 65K · Bottle 115K.', image: '/images/liquors/image2.jpeg' },
  { id: 'l7', category: 'Whisky', title: 'Jameson Black', price: '5,000 – 110,000', description: 'Shot 5K · Quarter 45K · Half 70K · Bottle 110K.', image: '/images/liquors/image4.png' },
  { id: 'l8', category: 'Whisky', title: 'Jameson Green Irish', price: '4,000 – 95,000', description: 'Shot 4K · Quarter 30K · Half 50K · Bottle 95K.', image: '/images/liquors/image4.png' },

  // ==================== COGNAC ====================
  { id: 'l10', category: 'Cognac', title: 'Hennessy VS', price: '7,500 – 185,000', description: 'Shot 7.5K · Quarter 55K · Half 105K · Bottle 185K.', image: '/images/liquors/image5.png' },
  { id: 'l11', category: 'Cognac', title: 'Hennessy VSOP', price: '10,000 – 265,000', description: 'Shot 10K · Quarter 75K · Half 150K · Bottle 265K.', image: '/images/liquors/image5.png' },
  { id: 'l12', category: 'Cognac', title: 'Martell VS', price: '7,000 – 175,000', description: 'Shot 7K · Quarter 50K · Half 100K · Bottle 175K.', image: '/images/liquors/image6.png' },
  { id: 'l13', category: 'Cognac', title: 'Martell VSOP', price: '10,000 – 260,000', description: 'Shot 10K · Quarter 75K · Half 150K · Bottle 260K.', image: '/images/liquors/image6.png' },
  { id: 'l14', category: 'Cognac', title: 'Remy Martin', price: '10,000 – 260,000', description: 'Shot 10K · Quarter 75K · Half 150K · Bottle 260K.', image: '/images/liquors/image7.png' },
  { id: 'l15', category: 'Cognac', title: 'Courvoisier VSOP', price: '9,500 – 245,000', description: 'Shot 9.5K · Quarter 60K · Half 140K · Bottle 245K.', image: '/images/liquors/image7.png' },

  // ==================== TEQUILA ====================
  { id: 'l20', category: 'Tequila', title: 'Camino Tequila', price: '4,000 – 80,000', description: 'Shot 4K · Quarter 35K · Half 50K · Bottle 80K.', image: '/images/liquors/image14.png' },
  { id: 'l21', category: 'Tequila', title: 'Olmeca Chocolate', price: '4,000 – 85,000', description: 'Shot 4K · Quarter 30K · Half 55K · Bottle 85K.', image: '/images/liquors/image14.png' },
  { id: 'l22', category: 'Tequila', title: 'Olmeca Gold', price: '4,500 – 95,000', description: 'Shot 4.5K · Quarter 35K · Half 55K · Bottle 95K.', image: '/images/liquors/image14.png' },
  { id: 'l23', category: 'Tequila', title: 'Olmeca Silver', price: '4,000 – 90,000', description: 'Shot 4K · Quarter 30K · Half 50K · Bottle 90K.', image: '/images/liquors/image14.png' },
  { id: 'l24', category: 'Tequila', title: 'Patron', price: '9,000 – 235,000', description: 'Shot 9K · Quarter 70K · Half 140K · Bottle 235K.', image: '/images/liquors/image14.png' },

  // ==================== GIN ====================
  { id: 'l30', category: 'Gin', title: 'Gilbys Gin', price: '6,500 – 35,000', description: 'Small 6.5K · Big 750ml 35K.', image: '/images/liquors/image12.png' },
  { id: 'l31', category: 'Gin', title: "Gordon's Gin", price: '3,500 – 65,000', description: 'Shot 3.5K · Quarter 30K · Half 45K · Bottle 65K.', image: '/images/liquors/image12.png' },
  { id: 'l32', category: 'Gin', title: 'Beefeater', price: '4,000 – 75,000', description: 'Shot 4K · Small 25K · Quarter 30K · Half 45K · Bottle 75K.', image: '/images/liquors/image12.png' },
  { id: 'l33', category: 'Gin', title: "Hendrick's", price: '7,000 – 170,000', description: 'Shot 7K · Quarter 55K · Half 110K · Bottle 170K.', image: '/images/liquors/image10.png' },
  { id: 'l34', category: 'Gin', title: 'G69 London Dry Gin', price: '4,500 – 105,000', description: 'Shot 4.5K · Quarter 45K · Half 65K · Bottle 105K.', image: '/images/liquors/image12.png' },

  // ==================== VODKA ====================
  { id: 'l40', category: 'Vodka', title: 'Absolut', price: '4,000 – 85,000', description: 'Shot 4K · Quarter 35K · Half 50K · Bottle 85K.', image: '/images/liquors/image13.png' },

  // ==================== RUM ====================
  { id: 'l50', category: 'Rum', title: 'Captain Morgan', price: '4,000 – 85,000', description: 'Shot 4K · Quarter 25K · Half 55K · Bottle 85K.', image: '/images/liquors/image16.jpeg' },
  { id: 'l51', category: 'Rum', title: 'Bacardi White', price: '4,000 – 90,000', description: 'Shot 4K · Quarter 35K · Half 50K · Bottle 90K.', image: '/images/liquors/image17.png' },

  // ==================== LIQUEURS ====================
  { id: 'l60', category: 'Liqueurs', title: 'Jagermeister', price: '5,000 – 105,000', description: 'Shot 5K · Quarter 45K · Half 60K · Bottle 105K.', image: '/images/liquors/image22.jpeg' },
  { id: 'l61', category: 'Liqueurs', title: "Bailey's", price: '18,000 – 100,000', description: 'Glass 18K · Quarter 40K · Half 65K · Bottle 100K.', image: '/images/liquors/image19.jpeg' },
  { id: 'l62', category: 'Liqueurs', title: 'Amarula', price: '15,000 – 90,000', description: 'Glass 15K · Quarter 30K · Half 55K · Bottle 90K.', image: '/images/liquors/image20.jpeg' },
  { id: 'l63', category: 'Liqueurs', title: 'Cointreau', price: '5,500 – 120,000', description: 'Shot 5.5K · Quarter 45K · Half 70K · Bottle 120K.', image: '/images/liquors/image21.png' },
  { id: 'l64', category: 'Liqueurs', title: 'Martini', price: '25,000 – 95,000', description: 'Glass 25K · Bottle 95K.', image: '/images/liquors/image21.png' },

  // ==================== OTHER SPIRITS ====================
  { id: 'l70', category: 'Other Spirits', title: 'Konyagi', price: '10,000', description: 'East African spirit, half 500ml.', image: '/images/liquors/image8.png' },
  { id: 'l71', category: 'Other Spirits', title: 'KIKI & PABLO', price: '4,000', description: 'Popular local spirit.', image: '/images/liquors/image8.png' },
  { id: 'l72', category: 'Other Spirits', title: 'Black and White Whisky', price: '40,000', description: 'Classic blended Scotch whisky.', image: '/images/liquors/image8.png' },

  // ==================== CHAMPAGNE ====================
  { id: 'c1', category: 'Champagne', title: 'Veuve Clicquot', price: '245,000', description: 'Premium Champagne, 750ml.', image: '/images/champains/image1.jpeg' },
  { id: 'c2', category: 'Champagne', title: 'Moet', price: '215,000', description: 'Premium Champagne, 750ml.', image: '/images/champains/image2.png' },

  // ==================== WINE ====================
  { id: 'w1', category: 'Wine', title: 'Wine Bottle', price: '45,000', description: 'House wine, 750ml bottle.', image: '/images/champains/image4.png' },
  { id: 'w2', category: 'Wine', title: 'Wine Glass', price: '8,500', description: 'Single glass of house wine.', image: '/images/champains/image4.png' },
  { id: 'w3', category: 'Wine', title: 'Sparkling Wine Bottle', price: '60,000', description: 'Premium sparkling wine, 750ml.', image: '/images/champains/image3.jpeg' },
  { id: 'w4', category: 'Wine', title: 'Baron D\'Arignac', price: '60,000', description: 'French sparkling wine, 750ml.', image: '/images/champains/image3.jpeg' },
  { id: 'w5', category: 'Wine', title: 'Cannatelli', price: '60,000', description: 'Italian sparkling wine, 750ml.', image: '/images/champains/image3.jpeg' },
  { id: 'w6', category: 'Wine', title: 'Muscador', price: '60,000', description: 'Spanish sparkling wine, 750ml.', image: '/images/champains/image3.jpeg' },
  { id: 'w7', category: 'Wine', title: 'Grand Sud Merlot', price: '55,000', description: 'French Merlot, 1L.', image: '/images/champains/image4.png' },
  { id: 'w8', category: 'Wine', title: 'Cabernet Sauvignon (Albali)', price: '45,000', description: 'Spanish Cabernet, 750ml.', image: '/images/champains/image4.png' },
  { id: 'w9', category: 'Wine', title: 'Belle Emilie Red', price: '45,000', description: 'French red wine, 750ml.', image: '/images/champains/image4.png' },
  { id: 'w10', category: 'Wine', title: 'Pico Andino (Various)', price: '45,000', description: 'Cabernet Sauvignon, Merlot, Chardonnay, or Sauvignon Blanc.', image: '/images/champains/image4.png' },
  { id: 'w11', category: 'Wine', title: 'Cellar Cask Red', price: '8,500', description: 'South African red, by the glass.', image: '/images/champains/image4.png' },
  { id: 'w12', category: 'Wine', title: 'Cellar Cask White', price: '8,500', description: 'South African white, by the glass.', image: '/images/champains/image4.png' },
  { id: 'w13', category: 'Wine', title: 'Cousins Red', price: '8,500 – 45,000', description: 'Glass 8.5K · Bottle 45K.', image: '/images/champains/image4.png' },
  { id: 'w14', category: 'Wine', title: 'Cousins White', price: '8,500 – 45,000', description: 'Glass 8.5K · Bottle 45K.', image: '/images/champains/image4.png' },
  { id: 'w15', category: 'Wine', title: 'Pearly Bay Sweet Red', price: '45,000', description: 'Sweet South African red, 750ml.', image: '/images/champains/image4.png' },
  { id: 'w16', category: 'Wine', title: 'Sangria Penasol', price: '45,000', description: 'Ready-mixed sangria, 750ml.', image: '/images/champains/image4.png' },

  // ==================== SPARKLING WINE ====================
  { id: 'sw1', category: 'Sparkling Wine', title: 'Comte de Chamberi Brut', price: '60,000', description: 'Crisp brut sparkling, 750ml.', image: '/images/champains/image3.jpeg' },
  { id: 'sw2', category: 'Sparkling Wine', title: 'Comte de Chamberi Rose Sec', price: '60,000', description: 'Dry rose sparkling, 750ml.', image: '/images/champains/image3.jpeg' },
  { id: 'sw3', category: 'Sparkling Wine', title: 'Provetto Brut', price: '60,000', description: 'Italian sparkling brut, 750ml.', image: '/images/champains/image3.jpeg' },
  { id: 'sw4', category: 'Sparkling Wine', title: 'Vina Albali Brut', price: '60,000', description: 'Spanish brut sparkling, 750ml.', image: '/images/champains/image3.jpeg' },
  { id: 'sw5', category: 'Sparkling Wine', title: 'Prospero Brut', price: '60,000', description: 'Premium brut sparkling, 750ml.', image: '/images/champains/image4.png' },
  { id: 'sw6', category: 'Sparkling Wine', title: 'Prospero Rose', price: '60,000', description: 'Rose sparkling wine, 750ml.', image: '/images/champains/image3.jpeg' },
];

export const ALL_FOOD_CATEGORIES = [...new Set(FOOD_ITEMS.map(item => item.category))];
export const ALL_DRINKS_CATEGORIES = [...new Set(DRINKS_ITEMS.map(item => item.category))];
