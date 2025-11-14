import React, { useState } from 'react';
import PizzaCard from '../component/PizzaCard';
import { pizzaMenu, categories } from '../assets/assets';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  // Filter pizzas based on category and search
  const getFilteredPizzas = () => {
    let filtered = pizzaMenu;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(pizza => pizza.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(pizza =>
        pizza.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pizza.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort pizzas
    switch (sortBy) {
      case 'popular':
        return filtered.sort((a, b) => b.rating - a.rating);
      case 'priceLow':
        return filtered.sort((a, b) => a.price - b.price);
      case 'priceHigh':
        return filtered.sort((a, b) => b.price - a.price);
      case 'name':
        return filtered.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return filtered;
    }
  };

  const filteredPizzas = getFilteredPizzas();

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Delicious Menu 🍕
            </h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Explore our handcrafted pizzas made with fresh ingredients and baked to perfection
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="sticky top-8 z-40 bg-white shadow-md py-6 border-b border-orange-100">
        <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          {/* <div className="mb-6">
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search for your favorite pizza..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-gray-700 pr-12 transition-all duration-300"
              />
              <span className="absolute right-5 top-1/2 transform -translate-y-1/2 text-2xl">
                🔍
              </span>
            </div>
          </div> */}

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-orange-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-orange-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3">
              <label className="text-gray-700 font-medium">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-gray-700 cursor-pointer"
              >
                <option value="popular">Most Popular</option>
                <option value="priceLow">Price: Low to High</option>
                <option value="priceHigh">Price: High to Low</option>
                <option value="name">Name (A-Z)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <p className="text-gray-600">
            Showing <span className="font-bold text-orange-600">{filteredPizzas.length}</span> pizza
            {filteredPizzas.length !== 1 ? 's' : ''}
          </p>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-orange-500 hover:text-orange-600 font-medium flex items-center gap-2"
            >
              Clear search ✕
            </button>
          )}
        </div>
      </div>

      {/* Pizza Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {filteredPizzas.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPizzas.map((pizza) => (
              <PizzaCard key={pizza.id} pizza={pizza} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-8xl mb-6">😢</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No pizzas found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search or filters
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            🎉 Special Offer! 🎉
          </h2>
          <p className="text-xl text-orange-100 mb-6">
            Order 2 or more pizzas and get <span className="font-bold text-yellow-300">20% OFF</span>
          </p>
          <a
            href="/deals"
            className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 hover:text-orange-700 transition-all duration-300 transform hover:scale-105"
          >
            View All Deals
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;