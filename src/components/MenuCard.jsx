import React from 'react';
import './MenuCard.css';

export default function MenuCard({ item, onAddToCart }) {
    return (
        <div className="menu-card">
            <img src={item.image} alt={item.name} />
            <div className="menu-card-info">
                <h3>{item.name}</h3>
                <p className="menu-description">{item.description}</p>
                <p className="menu-price">${item.price.toFixed(2)}</p>
                <button className="add-to-cart-btn" onClick={() => onAddToCart(item)}>
                    Add Item to Cart
                </button>
            </div>
        </div>
    );
}