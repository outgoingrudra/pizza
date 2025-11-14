import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-3xl">🍕</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                PizzaPalace
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Authentic Italian pizzas made with love and delivered fresh to your doorstep. Quality ingredients, perfect taste, every time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="hover:text-orange-500 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  Home
                </a>
              </li>
              <li>
                <a href="/menu" className="hover:text-orange-500 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  Menu
                </a>
              </li>
              <li>
                <a href="/deals" className="hover:text-orange-500 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  Deals & Offers
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-orange-500 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-orange-500 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Customer Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="/faq" className="hover:text-orange-500 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  FAQ
                </a>
              </li>
              <li>
                <a href="/track-order" className="hover:text-orange-500 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  Track Order
                </a>
              </li>
              <li>
                <a href="/returns" className="hover:text-orange-500 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  Returns Policy
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-orange-500 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-orange-500 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-orange-500 mt-1">📍</span>
                <span className="text-sm">123 Pizza Street, Food District, New York, NY 10001</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-orange-500">📞</span>
                <div>
                  <a href="tel:+1234567890" className="hover:text-orange-500 transition-colors duration-300 block text-sm">
                    +1 (234) 567-890
                  </a>
                  <a href="tel:+1234567891" className="hover:text-orange-500 transition-colors duration-300 block text-sm">
                    +1 (234) 567-891
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-orange-500">✉️</span>
                <a href="mailto:info@pizzapalace.com" className="hover:text-orange-500 transition-colors duration-300 text-sm">
                  info@pizzapalace.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-orange-500">⏰</span>
                <div className="text-sm">
                  <p>Mon - Fri: 10:00 AM - 11:00 PM</p>
                  <p>Sat - Sun: 10:00 AM - 12:00 AM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-white font-bold text-lg mb-1">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400 text-sm">Get special offers and updates delivered to your inbox!</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-3 rounded-l-full w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-r-full font-semibold transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 PizzaPalace. owner -  <a href="https://github.com/outgoingrudra"><b>Rudra Verma</b></a>
            </p>
            <div className="flex items-center space-x-4">
              <img src="/payment-methods.png" alt="Payment Methods" className="h-6 opacity-70" onError={(e) => e.target.style.display = 'none'} />
              <span className="text-gray-400 text-xs">Secure Payment</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;