import React from 'react';

const About = () => {
  const stats = [
    { number: "10+", label: "Years Experience", icon: "🏆" },
    { number: "50K+", label: "Happy Customers", icon: "😊" },
    { number: "100+", label: "Pizza Varieties", icon: "🍕" },
    { number: "4.9★", label: "Average Rating", icon: "⭐" }
  ];

  const values = [
    {
      title: "Quality Ingredients",
      description: "We use only the freshest, locally-sourced ingredients to ensure every bite is perfection.",
      icon: "🌟",
      color: "from-orange-400 to-orange-500"
    },
    {
      title: "Authentic Recipes",
      description: "Our recipes have been passed down through generations, staying true to Italian traditions.",
      icon: "📜",
      color: "from-red-400 to-red-500"
    },
    {
      title: "Fast Delivery",
      description: "Hot and fresh pizzas delivered to your doorstep in 30 minutes or less, guaranteed!",
      icon: "🚀",
      color: "from-yellow-400 to-yellow-500"
    },
    {
      title: "Customer First",
      description: "Your satisfaction is our priority. We go the extra mile to make you smile!",
      icon: "❤️",
      color: "from-pink-400 to-pink-500"
    }
  ];

  const team = [
    {
      name: "Marco Rossi",
      role: "Head Chef",
      image: "👨‍🍳",
      bio: "Master pizzaiolo with 15 years of experience from Naples, Italy."
    },
    {
      name: "Sofia Chen",
      role: "Operations Manager",
      image: "👩‍💼",
      bio: "Ensuring smooth operations and exceptional customer service every day."
    },
    {
      name: "Luigi Romano",
      role: "Pizza Specialist",
      image: "👨‍🍳",
      bio: "Expert in crafting unique flavor combinations and specialty pizzas."
    },
    {
      name: "Emma Johnson",
      role: "Customer Relations",
      image: "👩‍💻",
      bio: "Dedicated to making every customer experience memorable and delightful."
    }
  ];

  const timeline = [
    { year: "2014", event: "PizzaPalace was founded with a dream to serve authentic Italian pizza" },
    { year: "2016", event: "Expanded to 5 locations across the city due to overwhelming demand" },
    { year: "2019", event: "Launched online ordering platform and delivery service" },
    { year: "2022", event: "Won 'Best Pizza in Town' award for 3 consecutive years" },
    { year: "2024", event: "Serving 50,000+ happy customers with 100+ pizza varieties" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-500 to-red-500 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-9xl animate-pulse">🍕</div>
          <div className="absolute bottom-20 right-10 text-9xl animate-pulse" style={{ animationDelay: '1s' }}>🍕</div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Story 📖
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              From a small family kitchen to the city's favorite pizzeria, 
              discover the passion behind every slice we serve
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-b from-orange-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center transform transition-all duration-300 hover:scale-110"
              >
                <div className="text-5xl mb-3">{stat.icon}</div>
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Where It All Began 🌟
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                PizzaPalace was born from a simple dream - to bring authentic Italian pizza 
                to our community. What started as a small family recipe has grown into 
                something truly special.
              </p>
              <p>
                Our founder, inspired by his grandmother's traditional recipes from Naples, 
                decided to share the taste of Italy with the world. Every pizza we make 
                carries that same love and dedication.
              </p>
              <p>
                Today, we're proud to serve thousands of happy customers while staying true 
                to our roots - fresh ingredients, authentic methods, and a whole lot of heart.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="text-9xl mb-4">🍕</div>
                <p className="text-2xl font-bold text-gray-800">
                  Made with Love
                </p>
                <p className="text-gray-600 mt-2">
                  Since 2014
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gradient-to-b from-orange-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Values 💎
            </h2>
            <p className="text-gray-600 text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center text-3xl mb-4 mx-auto shadow-lg`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Journey 🚀
          </h2>
          <p className="text-gray-600 text-lg">
            Milestones that shaped our story
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-200"></div>

          {timeline.map((item, index) => (
            <div
              key={index}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:text-right md:pr-1/2' : 'md:text-left md:pl-1/2'
              }`}
            >
              <div className={`md:inline-block md:w-5/12 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-2xl hover:scale-105">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    {item.year}
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {item.event}
                  </p>
                </div>
              </div>
              
              {/* Timeline Dot */}
              <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-6 h-6 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gradient-to-b from-orange-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Meet Our Team 👥
            </h2>
            <p className="text-gray-600 text-lg">
              The amazing people behind your favorite pizzas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-8 text-center">
                  <div className="text-8xl mb-4">{member.image}</div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-orange-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
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
            Hungry Yet? 🍕
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Join thousands of happy customers and experience the PizzaPalace difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/menu"
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 hover:text-orange-700 transition-all duration-300 transform hover:scale-105"
            >
              Order Now 🛒
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300"
            >
              Get in Touch 📞
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;