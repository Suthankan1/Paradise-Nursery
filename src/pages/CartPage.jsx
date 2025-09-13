import React from 'react';
import Header from '../components/Header';
import CartItem from '../components/CartItem';
import { useNavigate } from 'react-router-dom';

const CartPage = ({ cart, onIncrease, onDecrease, onRemove }) => {
  const navigate = useNavigate();

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const calculateTotalCost = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <>
      <Header cartItemCount={getCartItemCount()} />
      <div className="page-container cart-page">
        <h2>Your Shopping Cart</h2>
        <p>Total Plants: {getCartItemCount()}</p>
        <div className="cart-items">
          {cart.length === 0 ? (
            <p>Your cart is empty. Start shopping!</p>
          ) : (
            cart.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                onRemove={onRemove}
              />
            ))
          )}
        </div>
        <div className="cart-total">
          Total Cost: ${calculateTotalCost().toFixed(2)}
        </div>
        <div className="cart-buttons">
          <button className="continue" onClick={() => navigate('/products')}>Continue Shopping</button>
          <button className="checkout" onClick={() => alert('Proceeding to checkout!')}>Checkout</button>
        </div>
      </div>
    </>
  );
};

export default CartPage;