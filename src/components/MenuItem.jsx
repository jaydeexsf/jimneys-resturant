import React from 'react';

const MenuItem = ({ item }) => {

  const price = {
      backgroundColor: 'red',
      display: 'inline-block',
      position: 'absolute',
      bottom: '120px',
      right: '20px',
      padding: '5px',
      borderRadius: '5px',
  }
  

  return (
    <div className="relative shadow bg-gray-950 flex min-w-[210px] flex-col justify-between p-4 mx-auto rounded">
      <img src={item.imageUrl} alt={item.name} className="w-full h-[72] object-cover mb-4" />
      <div className='bg-white-500 flex-end'>
      <h3 className="text-xl font-bold">{item.name}</h3>
      <p className="text-gray-600 mb-2">{item.description}</p>
      <p style={price} className="text-white text-[20px] font-bold">R{item.price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
