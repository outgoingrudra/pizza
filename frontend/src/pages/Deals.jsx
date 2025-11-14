import React, { useState } from 'react';

const Deals = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const deals = [
    {
      id: 1,
      title: "Weekend Special",
      description: "Get 2 Large Pizzas for the price of 1!",
      discount: "50% OFF",
      code: "WEEKEND50",
      validUntil: "Sunday, 11:59 PM",
      icon: "🎉",
      color: "from-orange-500 to-red-500",
      terms: "Valid on weekends only. Cannot be combined with other offers."
    },
    {
      id: 2,
      title: "First Order Bonus",
      description: "New customer? Enjoy 30% off your first order!",
      discount: "30% OFF",
      code: "FIRST30",
      validUntil: "One time use",
      icon: "🎊",
      color: "from-purple-500 to-pink-500",
      terms: "Valid for first-time customers only."
    },
    {
      id: 3,
      title: "Family Feast",
      description: "Order 3 or more pizzas and save big!",
      discount: "25% OFF",
      code: "FAMILY25",
      validUntil: "Limited time",
      icon: "👨‍👩‍👧‍👦",
      color: "from-green-500 to-teal-500",
      terms: "Minimum 3 pizzas required. Valid on all sizes."
    },
    {
      id: 4,
      title: "Midweek Madness",
      description: "Tuesday & Wednesday special deals!",
      discount: "20% OFF",
      code: "MIDWEEK20",
      validUntil: "Every Tue-Wed",
      icon: "🔥",
      color: "from-yellow-500 to-orange-500",
      terms: "Valid on Tuesdays and Wednesdays only."
    },
    {
      id: 5,
      title: "Student Special",
      description: "Students get exclusive discounts!",
      discount: "15% OFF",
      code: "STUDENT15",
      validUntil: "Always available",
      icon: "🎓",
      color: "from-blue-500 to-indigo-500",
      terms: "Valid student ID required at delivery."
    },
    {
      id: 6,
      title: "Late Night Cravings",
      description: "Order after 9 PM and save!",
      discount: "10% OFF",
      code: "LATENIGHT",
      validUntil: "9 PM - 12 AM",
      icon: "🌙",
      color: "from-indigo-600 to-purple-600",
      terms: "Valid on orders placed between 9 PM and midnight."
    }
  ];

  const comboDeals = [
    {
      id: 1,
      name: "Party Pack",
      description: "4 Large Pizzas + 2L Drink + Garlic Bread",
      price: "$59.99",
      originalPrice: "$79.99",
      savings: "$20",
      image: "🍕🍕🍕🍕",
      popular: true
    },
    {
      id: 2,
      name: "Duo Delight",
      description: "2 Medium Pizzas + Wings + Dessert",
      price: "$34.99",
      originalPrice: "$45.99",
      savings: "$11",
      image: "🍕🍕🍗",
      popular: false
    },
    {
      id: 3,
      name: "Solo Special",
      description: "1 Large Pizza + Drink + Garlic Bread",
      price: "$19.99",
      originalPrice: "$26.99",
      savings: "$7",
      image: "🍕🥤",
      popular: false
    }
  ];

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 text-8xl">🍕</div>
          <div className="absolute bottom-10 right-20 text-8xl">🎉</div>
          <div className="absolute top-20 right-40 text-6xl">💰</div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-pulse">
              Amazing Deals & Offers! 🎉
            </h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Save big on your favorite pizzas with our exclusive deals and combo offers
            </p>
          </div>
        </div>
      </div>

      {/* Promo Codes Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Active Promo Codes 🎫
          </h2>
          <p className="text-gray-600 text-lg">
            Click on any code to copy and apply at checkout
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Gradient Header */}
              <div className={`bg-gradient-to-r ${deal.color} p-6 text-white relative`}>
                <div className="absolute top-3 right-3 text-5xl opacity-20">
                  {deal.icon}
                </div>
                <div className="text-6xl mb-3">{deal.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{deal.title}</h3>
                <div className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full inline-block">
                  <span className="font-bold text-lg">{deal.discount}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-700 mb-4 text-lg">
                  {deal.description}
                </p>

                {/* Promo Code */}
                <div className="bg-orange-50 border-2 border-orange-200 border-dashed rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Promo Code:</p>
                      <p className="text-2xl font-bold text-orange-600 tracking-wider">
                        {deal.code}
                      </p>
                    </div>
                    <button
                      onClick={() => handleCopyCode(deal.code)}
                      className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                        copiedCode === deal.code
                          ? 'bg-green-500 text-white'
                          : 'bg-orange-500 text-white hover:bg-orange-600'
                      }`}
                    >
                      {copiedCode === deal.code ? '✓ Copied!' : '📋 Copy'}
                    </button>
                  </div>
                </div>

                {/* Valid Until */}
                <div className="flex items-center justify-between text-sm mb-3">
                  <span className="text-gray-500">Valid until:</span>
                  <span className="font-semibold text-orange-600">
                    {deal.validUntil}
                  </span>
                </div>

                {/* Terms */}
                <p className="text-xs text-gray-500 italic">
                  {deal.terms}
                </p>

                {/* Apply Button */}
                <a
                  href="/menu"
                  className="mt-4 w-full block text-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105"
                >
                  Order Now →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Combo Deals Section */}
      <div className="bg-gradient-to-r from-orange-100 to-yellow-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Combo Deals 🎁
            </h2>
            <p className="text-gray-600 text-lg">
              Best value for money! Pre-made combos at unbeatable prices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comboDeals.map((combo) => (
              <div
                key={combo.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative"
              >
                {combo.popular && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10 animate-pulse">
                    🔥 Popular
                  </div>
                )}

                <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-8 text-center">
                  <div className="text-6xl mb-4">{combo.image}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {combo.name}
                  </h3>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 mb-6 text-center text-lg">
                    {combo.description}
                  </p>

                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-3xl font-bold text-orange-600">
                        {combo.price}
                      </span>
                      <span className="text-xl text-gray-400 line-through">
                        {combo.originalPrice}
                      </span>
                    </div>
                    <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold">
                      Save {combo.savings}!
                    </span>
                  </div>

                  <a
                    href="/menu"
                    className="w-full block text-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105"
                  >
                    Add to Cart 🛒
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">
            Don't Miss Out! 🚀
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            These amazing deals won't last forever. Order now and save big!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/menu"
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 hover:text-orange-700 transition-all duration-300 transform hover:scale-105"
            >
              Browse Menu 🍕
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300"
            >
              Contact Us 📞
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;