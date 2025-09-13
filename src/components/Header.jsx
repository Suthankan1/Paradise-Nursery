import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillCartFill } from 'react-icons/bs';

const Header = ({ cartItemCount }) => {
  return (
    <header className="header">
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <div className="cart-icon-container">
        <BsFillCartFill size={24} />
        <span className="cart-item-count">{cartItemCount}</span>
      </div>
    </header>
  );
};

export default Header;