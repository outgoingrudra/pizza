import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Deals from './pages/Deals';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Footer from './component/Footer';
import Profile from './pages/Profile';
import Login from './component/Login';

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-gray-50">
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/profile" element={<Profile/>} />
          </Routes>
        </main>
        <Footer/>

        {/* Notifications */}
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#ff6b00',
              color: '#fff',
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;