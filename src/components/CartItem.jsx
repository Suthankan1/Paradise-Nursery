import React from 'react';

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
                <h4>{item.name}</h4>
                <p>Unit Price: ${item.price.toFixed(2)}</p>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <div className="item-quantity">
                <button onClick={() => onDecrease(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => onIncrease(item.id)}>+</button>
            </div>
            <button onClick={() => onRemove(item.id)}>Delete</button>
        </div>
    );
};

export default CartItem;
