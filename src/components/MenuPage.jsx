import React, { useState, useEffect } from 'react';
import MenuCard from './MenuCard';
import Cart from './Cart';
import './MenuPage.css';
import OrderHistory from './OrderHistory.jsx';

export default function MenuPage() {
  const [menuItems, setMenuItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('sabor_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('sabor_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    fetch('https://sabor-latino-backend.onrender.com/menu')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch menu items');
        return res.json();
      })
      .then((data) => {
        setMenuItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading menu:', err);
        setError(err.message);
        setLoading(false);
      });

    fetchOrders();
  }, []);

  const fetchOrders = () => {
    fetch('https://sabor-latino-backend.onrender.com/orders')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setOrders(Array.isArray(data) ? data : []);
      })
      .catch((err) => console.error('Error fetching orders:', err));
  };

  const getGroupedMenu = () => {
    const groups = {};
    menuItems.forEach((item) => {
      const category = item.category;
      if (!groups[category]) groups[category] = [];
      groups[category].push(item);
    });
    return Object.keys(groups).map((categoryName) => ({
      category: categoryName,
      items: groups[categoryName],
    }));
  };

  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((ci) => ci._id === item._id);
      if (existingItem) {
        return prevCart.map((ci) =>
          ci._id === item._id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (itemId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((ci) => ci._id === itemId);
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map((ci) =>
          ci._id === itemId ? { ...ci, quantity: ci.quantity - 1 } : ci
        );
      }
      return prevCart.filter((ci) => ci._id !== itemId);
    });
  };

  const handleClearCart = () => setCart([]);

  // Now takes both the order id and the specific item id being edited
  const handleUpdatedQuantity = async (orderId, itemId, currentQuantity) => {
    const newQuantityInput = prompt('Enter new quantity: ', String(currentQuantity || 1));
    if (newQuantityInput === null || newQuantityInput.trim() === '') return;

    const parsedQty = parseInt(newQuantityInput, 10);
    if (isNaN(parsedQty) || parsedQty <= 0) {
      alert('Please enter a valid number greater than 0');
      return;
    }

    try {
      const res = await fetch(`https://sabor-latino-backend.onrender.com/orders/${orderId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ itemId, quantity: parsedQty }),
      });
      if (!res.ok) {
        const errBody = await res.json().catch(() => ({}));
        throw new Error(errBody.error || `Server error: ${res.status}`);
      }
      alert('Order updated successfully!');
      fetchOrders();
    } catch (err) {
      alert(`Could not update order: ${err.message}`);
    }
  };

  const handleCancelOrder = (orderId) => {
    fetch(`https://sabor-latino-backend.onrender.com/orders/${orderId}`, { method: 'DELETE' })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to cancel order');
        alert('Order cancelled successfully!');
        fetchOrders();
      })
      .catch((err) => alert(err.message));
  };

  const handleCheckout = async () => {
    if (cart.length === 0) return;
    try {
      const response = await fetch('https://sabor-latino-backend.onrender.com/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: cart,
          total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
        }),
      });

      if (response.ok) {
        alert('Order placed successfully!');
        setCart([]);
        fetchOrders();
      } else {
        const errBody = await response.json().catch(() => ({}));
        alert(errBody.error || 'Server accepted the request but failed to save the order.');
      }
    } catch (error) {
      alert('Could not connect to the backend server');
    }
  };

  if (loading) return <div className="menu-status">Loading Sabor Latino Menu...</div>;
  if (error) return <div className="menu-status">Error: {error}</div>;

  const groupedMenu = getGroupedMenu();

  return (
    <>
      <div className="menu-page-layout">
        <main className="menu-main-content">
          <h1>Our Menu</h1>
          {groupedMenu.map((categorySection) => (
            <section key={categorySection.category} className="menu-category">
              <h2>{categorySection.category}</h2>
              <div className="menu-items-grid">
                {categorySection.items.map((item) => (
                  <MenuCard key={item._id || item.id} item={item} onAddToCart={handleAddToCart} />
                ))}
              </div>
            </section>
          ))}
        </main>

        <aside className="menu-sidebar-area">
          <Cart
            cartItems={cart}
            onClearCart={handleClearCart}
            onRemoveItem={handleRemoveFromCart}
            onCheckout={handleCheckout}
          />
          <OrderHistory
            orders={orders}
            onUpdateQuantity={handleUpdatedQuantity}
            onCancelOrder={handleCancelOrder}
          />
        </aside>
      </div>
    </>
  );
}