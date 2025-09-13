import React from 'react';

const PlantCard = ({ plant, onAddToCart }) => {
  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>${plant.price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(plant)}>Add to Cart</button>
    </div>
  );
};

export default PlantCard;