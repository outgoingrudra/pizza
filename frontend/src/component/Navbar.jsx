import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
     const navigate = useNavigate()
  const handleLogin = () => {
    navigate("/login")

    setIsLoggedIn(true);
    setShowUserDropdown(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowUserDropdown(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🍕</span>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              PizzaPalace
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-orange-500 font-medium transition duration-300 hover:bg-orange-50 px-3 py-2 rounded-lg">
              Home
            </a>
            <a href="/menu" className="text-gray-700 hover:text-orange-500 font-medium transition duration-300 hover:bg-orange-50 px-3 py-2 rounded-lg">
              Menu
            </a>
            <a href="/deals" className="text-gray-700 hover:text-orange-500 font-medium transition duration-300 hover:bg-orange-50 px-3 py-2 rounded-lg">
              Deals
            </a>
            <a href="/about" className="text-gray-700 hover:text-orange-500 font-medium transition duration-300 hover:bg-orange-50 px-3 py-2 rounded-lg">
              About
            </a>
            <a href="/contact" className="text-gray-700 hover:text-orange-500 font-medium transition duration-300 hover:bg-orange-50 px-3 py-2 rounded-lg">
              Contact
            </a>
          </div>

          {/* Right Side - Cart & Auth */}
          <div className="flex items-center space-x-4">
            {/* Cart Button with Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setShowCartDropdown(!showCartDropdown)}
                className="relative bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition duration-300 transform hover:scale-105"
              >
                <span>🛒</span>
                <div className="flex flex-col items-start">
                  <span className="text-xs font-medium">${cartTotal.toFixed(2)}</span>
                </div>
                <span className="absolute -top-2 -right-2 bg-white text-orange-500 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow-md">
                  {cartItems}
                </span>
              </button>

              {/* Cart Dropdown */}
              {showCartDropdown && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                  <div className="p-4 bg-orange-50 border-b border-orange-100">
                    <h3 className="font-semibold text-gray-800">Your Cart</h3>
                  </div>
                  <div className="p-4">
                    {cartItems === 0 ? (
                      <div className="text-center py-8 text-gray-500">
                        <span className="text-4xl mb-2 block">🍕</span>
                        <p>Your cart is empty</p>
                        <p className="text-sm mt-1">Add some delicious pizzas!</p>
                      </div>
                    ) : (
                      <div>
                        {/* Cart items would be mapped here */}
                        <p className="text-gray-600 text-sm">Cart items will appear here</p>
                      </div>
                    )}
                  </div>
                  {cartItems > 0 && (
                    <div className="p-4 bg-gray-50 border-t border-gray-200">
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-semibold">Total:</span>
                        <span className="font-bold text-orange-500 text-lg">${cartTotal.toFixed(2)}</span>
                      </div>
                      <a href="/cart" className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center py-2 rounded-lg transition duration-300">
                        View Cart & Checkout
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Login/User Profile */}
            {!isLoggedIn ? (
              <div className="relative">
                <button 
                  onClick={handleLogin}
                  className="hidden md:block border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-full transition duration-300 font-medium"
                >
                  Login
                </button>
              </div>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setShowUserDropdown(!showUserDropdown)}
                  className="hidden md:flex items-center space-x-2 bg-orange-100 hover:bg-orange-200 px-3 py-2 rounded-full transition duration-300"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-semibold">
                    J
                  </div>
                  <span className="text-gray-700 font-medium">John</span>
                  <svg className={`w-4 h-4 text-gray-600 transition-transform duration-300 ${showUserDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* User Dropdown Menu */}
                {showUserDropdown && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                    <div className="p-3 bg-orange-50 border-b border-orange-100">
                      <p className="font-semibold text-gray-800">Hi, John! 👋</p>
                      <p className="text-xs text-gray-600">john@example.com</p>
                    </div>
                    <div className="py-2">
                      <a href="/profile" className="flex items-center space-x-3 px-4 py-2 hover:bg-orange-50 transition duration-200">
                        <span>👤</span>
                        <span className="text-gray-700">Profile</span>
                      </a>
                      <a href="/orders" className="flex items-center space-x-3 px-4 py-2 hover:bg-orange-50 transition duration-200">
                        <span>📦</span>
                        <span className="text-gray-700">My Orders</span>
                      </a>
                      <a href="/favorites" className="flex items-center space-x-3 px-4 py-2 hover:bg-orange-50 transition duration-200">
                        <span>❤️</span>
                        <span className="text-gray-700">Favorites</span>
                      </a>
                      <a href="/settings" className="flex items-center space-x-3 px-4 py-2 hover:bg-orange-50 transition duration-200">
                        <span>⚙️</span>
                        <span className="text-gray-700">Settings</span>
                      </a>
                      <hr className="my-2 border-gray-200" />
                      <button 
                        onClick={handleLogout}
                        className="flex items-center space-x-3 px-4 py-2 hover:bg-red-50 transition duration-200 w-full text-left text-red-600"
                      >
                        <span>🚪</span>
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden flex flex-col space-y-1"
              onClick={toggleMenu}
            >
              <span className={`w-6 h-0.5 bg-orange-500 transition duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-orange-500 transition duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-orange-500 transition duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-orange-100">
            <a href="/" className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition duration-300">
              Home
            </a>
            <a href="/menu" className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition duration-300">
              Menu
            </a>
            <a href="/deals" className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition duration-300">
              Deals
            </a>
            <a href="/about" className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition duration-300">
              About
            </a>
            <a href="/contact" className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition duration-300">
              Contact
            </a>
            {!isLoggedIn ? (
              <button 
                onClick={handleLogin}
                className="w-full text-left px-3 py-2 text-orange-500 hover:bg-orange-50 rounded-lg transition duration-300 font-medium"
              >
                Login
              </button>
            ) : (
              <>
                <div className="px-3 py-2 bg-orange-50 rounded-lg">
                  <p className="font-semibold text-gray-800 text-sm">Hi, John! 👋</p>
                </div>
                <a href="/profile" className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition duration-300">
                  👤 Profile
                </a>
                <a href="/orders" className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition duration-300">
                  📦 My Orders
                </a>
                <a href="/favorites" className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition duration-300">
                  ❤️ Favorites
                </a>
                <a href="/settings" className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition duration-300">
                  ⚙️ Settings
                </a>
                <button 
                  onClick={handleLogout}
                  className="w-full text-left px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition duration-300"
                >
                  🚪 Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;