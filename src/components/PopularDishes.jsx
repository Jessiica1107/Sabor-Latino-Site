import React from 'react';
import './PopularDishes.css';

const PopularDishes = () => {

  return (
<section>
        <div className="popular-dishes">
            <h2>Our Most Popular Dishes:</h2>

            <div className="dish-row">
                <img src="./images/encebolladoDePescado.png.avif" alt="Dish Image" className="pop-dishes-img"/>
                <div className="dish-description">
                    <h3> Encebollado de pescado</h3>
                    <p>A traditional, comforting fish soup made with pieces of tuna and soft yuca. It is simmered
                        in a savory broth spiced with herbs and topped with a layer of pickled red onions.</p>
                </div>
            </div>

            <div className="dish-row">
                <img src="./images/shrimpCeviche.avif" alt="Dish Image" className="pop-dishes-img"/>

                <div className="dish-description">
                    <h3> Shrimp ceviche</h3>
                    <p> A refreshing, cold seafood dish featuring shrimp marinated in a bright citrus
                        blend of lime and orange juice. Mixed with diced tomatoes, onions, and fresh cilantro, it is a
                        perfect balance of tangy and savory flavors.</p>
                </div>
            </div>

            <div className="dish-row">
                <img src="./images/Chaulafan.png.avif" alt="Dish Image" className="pop-dishes-img"/>

                <div className="dish-description">
                    <h3> Chaulafan</h3>
                    <p> A hearty and flavorful Latin-style fried rice loaded with a mix of chicken, pork, and shrimp.
                        Tossed together with scrambled eggs, sweet peas, and carrots, this popular dish is seasoned with savory soy sauce.</p>
                </div>
            </div>
            </div>
        </section>
  );
};

export default PopularDishes;