import React, { useState } from 'react';

const PizzaCard = ({ pizza }) => {
  const [selectedSize, setSelectedSize] = useState('Medium');
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  // Size multipliers for pricing
  const sizeMultipliers = {
    Small: 0.8,
    Medium: 1.0,
    Large: 1.3
  };

  // Calculate price based on selected size
  const calculatePrice = () => {
    return (pizza.price * sizeMultipliers[selectedSize]).toFixed(2);
  };

  // Handle add to cart
  const handleAddToCart = () => {
    setIsAdded(true);
    // Here you would typically dispatch to cart context/redux
    console.log(`Added ${quantity} ${selectedSize} ${pizza.name} to cart`);
    
    // Reset animation after 2 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group">
      {/* Image Container */}
      <div className="relative overflow-hidden h-64">
        <img 
          src={pizza.image} 
          alt={pizza.name}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {pizza.isPopular && (
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              🔥 Popular
            </span>
          )}
          {pizza.isVegetarian && (
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              🌱 Veg
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-110">
          <span className="text-xl">❤️</span>
        </button>

        {/* Rating Badge */}
        <div className="absolute bottom-3 left-3 bg-white px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
          <span className="text-yellow-500 text-sm">⭐</span>
          <span className="font-semibold text-sm">{pizza.rating}</span>
          <span className="text-gray-500 text-xs">({pizza.reviews})</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title and Category */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-gray-800 mb-1">{pizza.name}</h3>
          <span className="text-xs text-orange-600 font-medium bg-orange-50 px-2 py-1 rounded-full">
            {pizza.category}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {pizza.description}
        </p>

        {/* Size Selection */}
        <div className="mb-4">
          <label className="text-sm font-semibold text-gray-700 mb-2 block">
            Select Size:
          </label>
          <div className="flex gap-2">
            {pizza.size.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`flex-1 py-2 px-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                  selectedSize === size
                    ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-orange-100'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="mb-4">
          <label className="text-sm font-semibold text-gray-700 mb-2 block">
            Quantity:
          </label>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-8 rounded-full bg-gray-200 hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center justify-center font-bold"
            >
              -
            </button>
            <span className="font-bold text-lg w-8 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(Math.min(10, quantity + 1))}
              className="w-8 h-8 rounded-full bg-gray-200 hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center justify-center font-bold"
            >
              +
            </button>
          </div>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between gap-3 pt-4 border-t border-gray-200">
          <div>
            <p className="text-xs text-gray-500">Price</p>
            <p className="text-2xl font-bold text-orange-600">
              ${calculatePrice()}
            </p>
          </div>
          <button
            onClick={handleAddToCart}
            className={`flex-1 py-3 px-4 rounded-lg font-bold text-white transition-all duration-300 transform hover:scale-105 ${
              isAdded
                ? 'bg-green-500 hover:bg-green-600'
                : 'bg-orange-500 hover:bg-orange-600'
            }`}
          >
            {isAdded ? (
              <span className="flex items-center justify-center gap-2">
                ✓ Added!
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                🛒 Add to Cart
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;