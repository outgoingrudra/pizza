import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white py-16 md:py-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Hero Text */}
          <div className="space-y-6 animate-fadeIn">
            <div className="inline-block">
              <span className="bg-yellow-400 text-orange-800 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                🔥 #1 Pizza in Town
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Fresh Pizza
              <span className="block text-yellow-300 mt-2 animate-pulse">Delivered Hot</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-orange-50 leading-relaxed max-w-lg">
              Authentic Italian pizzas made with love and delivered to your doorstep. 
              Fresh ingredients, perfect crust, and cheesy goodness in every bite!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="/menu" 
                className="group bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 hover:text-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-center relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Order Now <span className="group-hover:rotate-12 transition-transform duration-300">🍕</span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
              
              <a 
                href="/deals" 
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 hover:shadow-xl text-center backdrop-blur-sm"
              >
                View Deals 🎉
              </a>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-6 pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-yellow-300">500+</p>
                <p className="text-sm text-orange-100">Happy Customers</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-yellow-300">30min</p>
                <p className="text-sm text-orange-100">Delivery Time</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-yellow-300">4.9★</p>
                <p className="text-sm text-orange-100">Rating</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex justify-center items-center animate-slideIn">
            {/* Main Image Container */}
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-300 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              
              {/* Image wrapper with enhanced styling */}
              <div className="relative bg-white rounded-3xl p-2 shadow-2xl transform hover:scale-105 transition-transform duration-500 hover:rotate-2">
                <img 
                  src="/Hero.jpg" 
                  alt="Delicious Pizza" 
                  className="w-full h-auto rounded-2xl object-cover"
                  loading="eager"
                  width="600"
                  height="600"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-lg animate-bounce">
                ✓ Fresh
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-orange-800 px-5 py-3 rounded-full font-bold shadow-lg animate-pulse">
                🔥 Hot & Ready
              </div>

              <div className="absolute top-1/2 -right-6 bg-red-500 text-white px-4 py-2 rounded-full font-bold shadow-lg transform -rotate-12">
                50% OFF
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-slideIn {
          animation: slideIn 0.8s ease-out;
        }

        /* Optimize image loading */
        img {
          content-visibility: auto;
        }
      `}</style>
    </section>
  );
};

export default Hero;