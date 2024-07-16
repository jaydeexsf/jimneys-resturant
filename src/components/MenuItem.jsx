import React from 'react';

const MenuItem = ({ item }) => {
  return (
    <div className="border p-4 rounded">
      <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-xl font-bold">{item.name}</h3>
      <p className="text-gray-600 mb-2">{item.description}</p>
      <p className="text-green-600 font-bold">R{item.price}</p>
    </div>
  );
};

export default MenuItem;
