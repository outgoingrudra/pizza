// assets.js - Pizza Menu Data

export const pizzaMenu = [
  {
    id: 1,
    name: "Margherita",
    description: "Classic Italian pizza with fresh mozzarella, tomato sauce, and basil leaves. Simple yet delicious!",
    price: 12.99,
    image: "/pizza/img1.jpg",
    category: "Vegetarian",
    size: ["Small", "Medium", "Large"],
    isVegetarian: true,
    isPopular: true,
    rating: 4.5,
    reviews: 230
  },
  {
    id: 2,
    name: "Pepperoni",
    description: "America's favorite! Loaded with premium pepperoni slices and melted mozzarella cheese.",
    price: 14.99,
    image: "/pizza/img2.jpg",
    category: "Non-Vegetarian",
    size: ["Small", "Medium", "Large"],
    isVegetarian: false,
    isPopular: true,
    rating: 4.8,
    reviews: 450
  },
  {
    id: 3,
    name: "BBQ Chicken",
    description: "Tender grilled chicken with BBQ sauce, red onions, and cilantro. A smoky delight!",
    price: 16.99,
    image: "/pizza/img3.jpg",
    category: "Non-Vegetarian",
    size: ["Small", "Medium", "Large"],
    isVegetarian: false,
    isPopular: true,
    rating: 4.7,
    reviews: 320
  },
  {
    id: 4,
    name: "Veggie Supreme",
    description: "A garden of flavors! Bell peppers, onions, mushrooms, olives, and fresh tomatoes.",
    price: 13.99,
    image: "/pizza/img4.jpg",
    category: "Vegetarian",
    size: ["Small", "Medium", "Large"],
    isVegetarian: true,
    isPopular: false,
    rating: 4.4,
    reviews: 180
  },
  {
    id: 5,
    name: "Meat Lovers",
    description: "For the carnivores! Pepperoni, sausage, bacon, ham, and ground beef on a cheesy base.",
    price: 18.99,
    image: "/pizza/img5.jpg",
    category: "Non-Vegetarian",
    size: ["Small", "Medium", "Large"],
    isVegetarian: false,
    isPopular: true,
    rating: 4.9,
    reviews: 520
  }
];

// Size multipliers for pricing
export const sizeMultipliers = {
  Small: 0.8,
  Medium: 1.0,
  Large: 1.3
};

// Categories for filtering
export const categories = [
  "All",
  "Vegetarian",
  "Non-Vegetarian"
];