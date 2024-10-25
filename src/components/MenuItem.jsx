import React from 'react';

const MenuItem = ({ item, description }) => {

  const price = {
      backgroundColor: 'red',
      display: 'inline-block',
      // position: 'absolute',
      // bottom: '0px',
      // right: '20px',
      // padding: '5px',
      // borderRadius: '5px',
  }
  

  return (
    <div className="relative shadow bg-gray-950 flex  w-[200px] flex-shrin flex-col justify-between p-2 mx-aut rounde">
      <h3 className="text-md font-bold text-center">{item.name}</h3>
      <img src={item.imageUrl} alt={item.name} className="w-full h-[150px] object-cover" />
      <div className='bg-white-500 flex-end'>
      {description ? <p style={price} className="text-white text-[15px] font- px-[4px] rounded-[2px]">R {item.price}</p> : ''}
      {description ? <p className="text-gray-600 text-xs mb-">{item.description}</p> : ''}
      </div>
    </div>
  );
};

export default MenuItem;
