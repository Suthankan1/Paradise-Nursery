import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import './index.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (plant) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === plant.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...plant, quantity: 1 }];
      }
    });
  };

  const handleIncreaseQuantity = (plantId) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === plantId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (plantId) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === plantId ? { ...item, quantity: item.quantity - 1 } : item
      ).filter(item => item.quantity > 0)
    );
  };

  const handleRemoveItem = (plantId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== plantId));
  };

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductsPage cart={cart} onAddToCart={handleAddToCart} />} />
      <Route path="/cart" element={<CartPage cart={cart} onIncrease={handleIncreaseQuantity} onDecrease={handleDecreaseQuantity} onRemove={handleRemoveItem} />} />
    </Routes>
  );
};

export default App;