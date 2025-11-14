import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Visit Us",
      details: ["123 Pizza Street", "Food District", "New York, NY 10001"],
      color: "from-orange-400 to-orange-500"
    },
    {
      icon: "📞",
      title: "Call Us",
      details: ["+1 (234) 567-890", "+1 (234) 567-891", "Available 24/7"],
      color: "from-red-400 to-red-500"
    },
    {
      icon: "✉️",
      title: "Email Us",
      details: ["info@pizzapalace.com", "support@pizzapalace.com", "Response within 2 hours"],
      color: "from-yellow-400 to-yellow-500"
    },
    {
      icon: "⏰",
      title: "Working Hours",
      details: ["Mon - Fri: 10:00 AM - 11:00 PM", "Sat - Sun: 10:00 AM - 12:00 AM", "Holidays: 11:00 AM - 10:00 PM"],
      color: "from-green-400 to-green-500"
    }
  ];

  const faqs = [
    {
      question: "What are your delivery areas?",
      answer: "We deliver to all areas within a 10-mile radius of our location. Check our delivery zone at checkout!"
    },
    {
      question: "How long does delivery take?",
      answer: "Standard delivery time is 30-45 minutes. We guarantee hot and fresh pizzas every time!"
    },
    {
      question: "Do you offer vegetarian options?",
      answer: "Yes! We have a wide variety of vegetarian pizzas. Look for the 🌱 Veg badge on our menu."
    },
    {
      question: "Can I customize my pizza?",
      answer: "Absolutely! You can add or remove toppings, choose your crust type, and adjust the size to your preference."
    }
  ];

  const socialMedia = [
    { name: "Facebook", icon: "📘", link: "#", color: "hover:bg-blue-600" },
    { name: "Instagram", icon: "📸", link: "#", color: "hover:bg-pink-600" },
    { name: "Twitter", icon: "🐦", link: "#", color: "hover:bg-blue-400" },
    { name: "YouTube", icon: "📺", link: "#", color: "hover:bg-red-600" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Get In Touch 📞
            </h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible!
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center text-4xl mb-4 mx-auto shadow-lg`}>
                {info.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                {info.title}
              </h3>
              <div className="text-center space-y-1">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Send Us a Message 💬
              </h2>
              <p className="text-gray-600 text-lg">
                Fill out the form below and we'll get back to you shortly
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors duration-300"
                    placeholder="+1 (234) 567-890"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="order">Order Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="complaint">Complaint</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              <button
                onClick={handleSubmit}
                className={`w-full py-4 rounded-lg font-bold text-white text-lg transition-all duration-300 transform hover:scale-105 ${
                  isSubmitted
                    ? 'bg-green-500 hover:bg-green-600'
                    : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600'
                }`}
              >
                {isSubmitted ? '✓ Message Sent Successfully!' : 'Send Message 📤'}
              </button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-8 h-96 flex items-center justify-center shadow-xl">
              <div className="text-center">
                <div className="text-8xl mb-4">🗺️</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Find Us Here
                </h3>
                <p className="text-gray-600">
                  123 Pizza Street, Food District<br />
                  New York, NY 10001
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                >
                  Open in Maps
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Follow Us 🌟
              </h3>
              <div className="grid grid-cols-4 gap-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className={`bg-gray-100 ${social.color} rounded-xl p-4 flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-110 text-white`}
                  >
                    <span className="text-4xl mb-2">{social.icon}</span>
                    <span className="text-xs font-semibold text-gray-700">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                Need Immediate Help? 🚨
              </h3>
              <p className="text-orange-100 mb-6">
                Call us directly for urgent inquiries
              </p>
              <a
                href="tel:+1234567890"
                className="inline-block bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
              >
                📞 Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-orange-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions ❓
            </h2>
            <p className="text-gray-600 text-lg">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-start">
                  <span className="text-orange-500 mr-3">Q:</span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-8 leading-relaxed">
                  <span className="text-orange-500 font-bold mr-2">A:</span>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Order Your Favorite Pizza? 🍕
          </h2>
          <p className="text-orange-100 text-xl mb-8 max-w-2xl mx-auto">
            Don't wait! Browse our menu and get your pizza delivered hot and fresh to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/menu"
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              View Menu
            </a>
            <a
              href="tel:+1234567890"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300"
            >
              Call to Order
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;