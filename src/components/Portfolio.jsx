import React from 'react';

// Minimal test component to verify deployment works
const Portfolio = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">
          <span className="text-white">Md Basit </span>
          <span className="text-green-500">Azam</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          AI/ML Research Portfolio - Test Version
        </p>
        <div className="text-lg text-green-400">
          ✅ Deployment is working!
        </div>
        <div className="mt-8 text-gray-400">
          If you can see this, your deployment is successful.
        </div>
      </div>
    </div>
  );
};

export default Portfolio;