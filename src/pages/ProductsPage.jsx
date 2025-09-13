import React from 'react';
import plants from '../assets/data/plants';
import Header from '../components/Header';
import PlantCard from '../components/PlantCard';

const ProductsPage = ({ cart, onAddToCart }) => {
  const categories = [...new Set(plants.map(plant => plant.category))];

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <>
      <Header cartItemCount={getCartItemCount()} />
      <div className="page-container">
        <h2>Our Plants</h2>
        {categories.map(category => (
          <div key={category}>
            <h3>{category}</h3>
            <div className="product-list">
              {plants
                .filter(plant => plant.category === category)
                .map(plant => (
                  <PlantCard key={plant.id} plant={plant} onAddToCart={onAddToCart} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsPage;