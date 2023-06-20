import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/HousesForSale');
  };

  return (
    <div className="hero min-h-screen stylehero">
      <div className="w-full hero-content lolo text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Find a home that suits your lifestyle.</h1>
          <p className="py-6">Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else.</p>
          <button className="btn btn-primary" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;



