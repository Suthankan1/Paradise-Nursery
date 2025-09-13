import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/images/background.jpg'; // Make sure to add this image

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1>Paradise Nursery</h1>
      <p>
        Welcome to Paradise Nursery, your one-stop shop for beautiful houseplants. We offer a wide
        variety of plants, from easy-care options for beginners to exotic finds for experienced plant lovers.
        Start your green journey with us today!
      </p>
      <button onClick={() => navigate('/products')}>Get Started</button>
    </div>
  );
};

export default LandingPage;
