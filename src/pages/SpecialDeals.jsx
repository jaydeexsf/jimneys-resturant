import React, { useEffect, useState } from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { db } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

const SpecialDeals = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(2);
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(2);
      } else if (window.innerWidth < 768) {
        setItemsToShow(4);
      } else {
        setItemsToShow(6);
      }
    };

    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);

    return () => window.removeEventListener('resize', updateItemsToShow);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); 
      try {
        const q = query(
          collection(db, 'products'),
          where('currentPrice', '!=', null || 0 )
        );
        const querySnapshot = await getDocs(q);
        const productsArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsArray);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false); // End loading
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex, products.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsToShow) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - itemsToShow + products.length) % products.length);
  };

  return (
    <div className="bg-black text-white py-8 px-3 pt-[70px] pb-[10px] rounded-md relative">
      <div className="flex justify-center items-center mb-4">
        <h2 className="text-3xl md:text-4xl text-red-600 text-center mb-6 font-bold">Special Deals</h2>
      </div>
      <div className="relative">
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full hover:bg-gray-600 z-10"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <MdArrowBackIos size={24} />
        </button>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="loader"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 overflow-hidden">
            {products.length > 0 ? (
              products.slice(currentIndex, currentIndex + itemsToShow).map((product) => {
                const discountPercentage = Math.round(
                  ((product.originalPrice - product.currentPrice) / product.originalPrice) * 100
                );
                return (
                  <div key={product.id} className="bg-gray-950 relative rounded-md hover:shadow-lg transition-shadow duration-300">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-[170px] object-cover rounded-t-md mb-2"
                    />
                    <h3 className="text-lg px-2 font-semibold truncate">{product.name}</h3>
                    <p className="text-gray-400 px-2 text-sm truncate">{product.description}</p>
                    <div className="flex justify-between px-2 pb-2 items-center mt-2">
                      <p className="text-red-500 font-bold">R {product.currentPrice}</p>
                      <p className="text-gray-500 line-through">R {product.originalPrice}</p>
                    </div>
                    <p className="text-green-500 rounded-full flex justify-center items-center bg-red-100 p-2 absolute top-2 right-2 text-[10px] text-center font-bold">
                      Save <br /> {discountPercentage}%
                    </p>
                  </div>
                );
              })
            ) : (
              <p className="text-center text-gray-400">No special deals available at the moment.</p>
            )}
          </div>
        )}

        {/* Next Button */}
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full hover:bg-gray-600 z-10"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <MdArrowForwardIos size={24} />
        </button>
      </div>
    </div>
  );
};

export default SpecialDeals;
