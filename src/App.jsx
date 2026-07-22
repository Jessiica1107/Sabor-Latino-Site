import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import AboutUs from './components/AboutUs.jsx';
import PopularDishes from './components/PopularDishes.jsx';
import Gallery from './components/Gallery.jsx';
import MenuPage from './components/MenuPage.jsx';
import ContactUs from './components/ContactUs.jsx';


export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (targetPage) => {
    if (targetPage === 'about') {
      setCurrentPage('home');
      
      setTimeout(() => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); 
    } else {
      setCurrentPage(targetPage);
      window.scrollTo(0, 0); 
    }
  };

 return (
<div className="app-container">
      <Navbar onNavigate={handleNavigation} />
      <main className="main-content">
{currentPage === 'home' ? (
          <>
            <Hero />
            <div id="about">
              <AboutUs />
            </div>
            <PopularDishes />
            <Gallery />
          </>
        ) : currentPage === 'menu' ? (
          <MenuPage />
        ) : (
          <ContactUs />
        )}
      </main>

      <Footer />
    </div>
  );
}
