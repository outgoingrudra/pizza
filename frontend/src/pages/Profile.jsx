import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  
  const [userData, setUserData] = useState({
    name: 'John PizzaLover',
    email: 'john@pizzalove.com',
    phone: '+1 (234) 567-8900',
    address: '123 Pizza Street, New York, NY 10001',
    image: '👨‍💼', // You can replace with actual image URL
    joinDate: 'January 2024',
    preferences: {
      favoriteCrust: 'Thin Crust',
      favoriteToppings: ['Pepperoni', 'Mushrooms', 'Extra Cheese'],
      spiceLevel: 'Medium',
      newsletter: true,
      specialOffers: true
    },
    orderStats: {
      totalOrders: 24,
      totalSpent: 486.50,
      favoritePizza: 'Pepperoni Passion'
    }
  });

  const [editData, setEditData] = useState(userData);

  const handleEditToggle = () => {
    if (isEditing) {
      // Save changes
      setUserData(editData);
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setEditData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: type === 'checkbox' ? checked : value
        }
      }));
    } else {
      setEditData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setEditData(prev => ({
          ...prev,
          image: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const orderHistory = [
    { id: 1, date: '2024-03-15', items: ['Pepperoni Pizza', 'Garlic Bread'], total: 28.50, status: 'Delivered' },
    { id: 2, date: '2024-03-10', items: ['Margherita Pizza', 'Coke'], total: 22.00, status: 'Delivered' },
    { id: 3, date: '2024-03-05', items: ['BBQ Chicken Pizza', 'Wings'], total: 35.75, status: 'Delivered' },
  ];

  const tabs = [
    { id: 'profile', name: 'Profile Info', icon: '👤' },
    { id: 'orders', name: 'Order History', icon: '📦' },
    { id: 'preferences', name: 'Preferences', icon: '⚙️' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-4xl text-white shadow-2xl">
                  {isEditing ? editData.image : userData.image}
                </div>
                {isEditing && (
                  <label className="absolute bottom-0 right-0 bg-orange-500 text-white p-2 rounded-full cursor-pointer shadow-lg hover:bg-orange-600 transition duration-300">
                    <span>📷</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={editData.name}
                      onChange={handleInputChange}
                      className="bg-orange-50 border-2 border-orange-200 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:border-orange-500"
                    />
                  ) : (
                    userData.name
                  )}
                </h1>
                <p className="text-gray-600 mt-1">Member since {userData.joinDate}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                    🏆 Pizza Lover
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {userData.orderStats.totalOrders} Orders
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={handleEditToggle}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  isEditing 
                    ? 'bg-green-500 hover:bg-green-600 text-white' 
                    : 'bg-orange-500 hover:bg-orange-600 text-white'
                }`}
              >
                {isEditing ? '💾 Save Changes' : '✏️ Edit Profile'}
              </button>
              {isEditing && (
                <button
                  onClick={() => {
                    setIsEditing(false);
                    setEditData(userData);
                  }}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
                >
                  ❌ Cancel
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-lg transition duration-300 ${
                    activeTab === tab.id
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Profile Info Tab */}
          {activeTab === 'profile' && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Personal Information</h2>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={editData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition duration-300"
                    />
                  ) : (
                    <p className="text-gray-800 text-lg">{userData.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="phone"
                      value={editData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition duration-300"
                    />
                  ) : (
                    <p className="text-gray-800 text-lg">{userData.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Delivery Address</label>
                  {isEditing ? (
                    <textarea
                      name="address"
                      value={editData.address}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition duration-300 resize-none"
                    />
                  ) : (
                    <p className="text-gray-800 text-lg">{userData.address}</p>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Statistics</h2>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-orange-50 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-orange-600">{userData.orderStats.totalOrders}</div>
                    <div className="text-gray-600">Total Orders</div>
                  </div>
                  
                  <div className="bg-green-50 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-green-600">${userData.orderStats.totalSpent}</div>
                    <div className="text-gray-600">Total Spent</div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-xl p-6 text-center col-span-2">
                    <div className="text-xl font-bold text-blue-600">{userData.orderStats.favoritePizza}</div>
                    <div className="text-gray-600">Favorite Pizza</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-white text-center">
                  <h3 className="text-lg font-bold mb-2">Loyalty Rewards</h3>
                  <p className="text-orange-100 mb-4">You're 6 orders away from a free pizza! 🎉</p>
                  <div className="w-full bg-orange-200 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Order History Tab */}
          {activeTab === 'orders' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Order History</h2>
              <div className="space-y-4">
                {orderHistory.map((order) => (
                  <div key={order.id} className="border-2 border-gray-100 rounded-xl p-6 hover:shadow-md transition duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-gray-800">Order #{order.id}</h3>
                        <p className="text-gray-600 text-sm">{order.date}</p>
                      </div>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {order.status}
                      </span>
                    </div>
                    <div className="mb-4">
                      <p className="text-gray-700">
                        {order.items.join(', ')}
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-orange-600">${order.total}</span>
                      <button className="text-orange-500 hover:text-orange-600 font-semibold transition duration-300">
                        Reorder 🍕
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Preferences Tab */}
          {activeTab === 'preferences' && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Pizza Preferences</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Favorite Crust</label>
                    {isEditing ? (
                      <select
                        name="preferences.favoriteCrust"
                        value={editData.preferences.favoriteCrust}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition duration-300"
                      >
                        <option value="Thin Crust">Thin Crust</option>
                        <option value="Thick Crust">Thick Crust</option>
                        <option value="Stuffed Crust">Stuffed Crust</option>
                        <option value="Gluten-Free">Gluten-Free</option>
                      </select>
                    ) : (
                      <p className="text-gray-800 text-lg">{userData.preferences.favoriteCrust}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Spice Level</label>
                    {isEditing ? (
                      <select
                        name="preferences.spiceLevel"
                        value={editData.preferences.spiceLevel}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition duration-300"
                      >
                        <option value="Mild">Mild</option>
                        <option value="Medium">Medium</option>
                        <option value="Hot">Hot</option>
                        <option value="Extra Hot">Extra Hot</option>
                      </select>
                    ) : (
                      <p className="text-gray-800 text-lg">{userData.preferences.spiceLevel}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-4">Communication Preferences</label>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          name="preferences.newsletter"
                          checked={isEditing ? editData.preferences.newsletter : userData.preferences.newsletter}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          className="w-5 h-5 text-orange-500 rounded focus:ring-orange-400"
                        />
                        <span className="text-gray-800">Receive newsletter updates</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          name="preferences.specialOffers"
                          checked={isEditing ? editData.preferences.specialOffers : userData.preferences.specialOffers}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          className="w-5 h-5 text-orange-500 rounded focus:ring-orange-400"
                        />
                        <span className="text-gray-800">Receive special offers and discounts</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Favorite Toppings</label>
                {isEditing ? (
                  <div className="space-y-2">
                    {['Pepperoni', 'Mushrooms', 'Extra Cheese', 'Onions', 'Peppers', 'Olives', 'Sausage', 'Bacon'].map((topping) => (
                      <label key={topping} className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={editData.preferences.favoriteToppings.includes(topping)}
                          onChange={(e) => {
                            const newToppings = e.target.checked
                              ? [...editData.preferences.favoriteToppings, topping]
                              : editData.preferences.favoriteToppings.filter(t => t !== topping);
                            setEditData(prev => ({
                              ...prev,
                              preferences: {
                                ...prev.preferences,
                                favoriteToppings: newToppings
                              }
                            }));
                          }}
                          className="w-5 h-5 text-orange-500 rounded focus:ring-orange-400"
                        />
                        <span className="text-gray-800">{topping}</span>
                      </label>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {userData.preferences.favoriteToppings.map((topping, index) => (
                      <span key={index} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                        {topping}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link
            to="/menu"
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
          >
            <div className="text-4xl mb-4">🍕</div>
            <h3 className="font-semibold text-gray-800 mb-2">Order Pizza</h3>
            <p className="text-gray-600 text-sm">Get your favorite pizza delivered</p>
          </Link>
          
          <Link
            to="/deals"
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
          >
            <div className="text-4xl mb-4">💰</div>
            <h3 className="font-semibold text-gray-800 mb-2">Special Deals</h3>
            <p className="text-gray-600 text-sm">Check out today's offers</p>
          </Link>
          
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-lg p-6 text-center text-white">
            <div className="text-4xl mb-4">🎁</div>
            <h3 className="font-semibold mb-2">Loyalty Points</h3>
            <p className="text-orange-100 text-sm">180 points - Free pizza soon!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;