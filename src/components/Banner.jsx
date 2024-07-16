import React from 'react';

const Banner = () => {
  return (
    <section className="bg-orange-500 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl mb-4">Freshness in Every Bite</h1>
        <p className="mb-8">Jimney's Fish & Chips brings you the freshest and tastiest meals.</p>
        <button className="bg-white text-orange-500 py-2 px-4 rounded">Order Now</button>
      </div>
    </section>
  );
};

export default Banner;
