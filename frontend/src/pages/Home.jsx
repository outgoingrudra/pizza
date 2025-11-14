import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../component/Hero';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
     <Hero/>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose PizzaPalace?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Hot pizza delivered to your door in 30 minutes or less</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fresh Ingredients</h3>
              <p className="text-gray-600">100% fresh vegetables and premium quality cheese</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Best Prices</h3>
              <p className="text-gray-600">Great deals and discounts on your favorite pizzas</p>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Home;