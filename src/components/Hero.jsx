import React from 'react';
import './Hero.css'; 

function Hero() {
  // This automatically adjusts the path based on environment!
  const baseUrl = import.meta.env.BASE_URL; 

  return (
    <div 
      className="banner-container" 
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${baseUrl}images/outsideRestaurant.png)` 
      }}
    >
      <div className="banner-content">
        <h1>Sabor Latino</h1>
        <h2>The Best Ecuadorian Food</h2>
        <p>From the Heart of Ecuador to Your Table</p>
      </div>
    </div>
  );
}

export default Hero;