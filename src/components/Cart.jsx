import React from 'react';
import './Cart.css';

export default function Cart({ cartItems, onClearCart, onRemoveItem, onCheckout }) {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="cart-container">
      <h2>Your Order</h2>
      
      {cartItems.length === 0 ? (
        <p className="empty-cart-text">Your cart is empty.</p>
      ) : (
        <ul id="cart-items-list">
          {cartItems.map(item => (
            <li key={item._id || item.id} className="cart-item">
              <div className="cart-item-info">
                {item.name} x {item.quantity} - ${(item.price * item.quantity).toFixed(2)}
              </div>

              <button 
                className="remove-item-btn" 
                onClick={() => onRemoveItem(item._id || item.id)} 
                title="Remove Item"
              >
                &times;
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="cart-summary">
        <div className="total-price-box">
          <span>Total:</span>
          <span id="cart-total-price">${total.toFixed(2)}</span>
        </div>

        {cartItems.length > 0 && (
          <div className="cart-actions-wrapper">
            <button 
              id="checkout-btn"
              onClick={onCheckout}
            >
              Checkout Order
            </button>
            
            <button id="clear-cart-btn" onClick={onClearCart}>
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}