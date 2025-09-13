import React from 'react';

const PlantCard = ({ plant, onAddToCart }) => {
    // Ensure image path is relative to public folder
    const imagePath = process.env.PUBLIC_URL + plant.image;
    return (
        <div className="plant-card">
            <img src={imagePath} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>${plant.price.toFixed(2)}</p>
            <button onClick={() => onAddToCart(plant)}>Add to Cart</button>
        </div>
    );
};

export default PlantCard;
