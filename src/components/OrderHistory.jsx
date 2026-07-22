import React from 'react';
import './OrderHistory.css';

export default function OrderHistory({ orders, onUpdateQuantity, onCancelOrder }) {
  return (
    <div className="order-history-container">
      <h2>Active Orders Dashboard</h2>
      {orders.length === 0 ? (
        <p>No active orders found in database.</p>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div key={order._id} className="order-card">
              <div className="order-header">
                <strong>Order ID:</strong> <span className="order-id">{order._id}</span>
                <span className="order-total">Total: ${order.total.toFixed(2)}</span>
              </div>
              <ul className="order-items-list">
                {order.items && order.items.map((item, index) => (
                  <li key={item._id || index} className="order-item-detail">
                    {item.name} x {item.quantity} (${(item.price * item.quantity).toFixed(2)})
                    <button
                      className="edit-qty-btn"
                      onClick={() => onUpdateQuantity(order._id, item._id, item.quantity)}
                    >
                      - Edit Qty
                    </button>
                  </li>
                ))}
              </ul>

              <button
                className="cancel-order-btn"
                onClick={() => onCancelOrder(order._id)}
              >
                X Cancel Order
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}