import React, { useEffect, useState } from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { db } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

const SpecialDeals = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const q = query(
          collection(db, 'products'),
          where('currentPrice', '!=', null || 0)
        );
        const querySnapshot = await getDocs(q);
        const productsArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsArray);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to fetch special deals. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const scrollContainerRef = React.createRef();

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  };

  return (
    <div className="bg-black text-white py-8 px-4 rounded-md relative">
      <h2 className="text-3xl  md:text-4xl text-red-600 font-bold text-center mb-16">
        Special Deals
      </h2>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="loader border-t-4 border-red-600 w-10 h-10 rounded-full animate-spin"></div>
        </div>
      ) : error ? (
        <p className="text-center text-gray-400">{error}</p>
      ) : products.length > 0 ? (
        <div className="relative">
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full hover:bg-gray-600 z-10 focus:outline-none focus:ring focus:ring-red-600"
            onClick={scrollLeft}
            aria-label="Scroll left"
          >
            <MdArrowBackIos size={24} />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto overflow-x-hidden no-scrollbar scroll-smooth"
          >
            {products.map((product) => {
              const discountPercentage = Math.round(
                ((product.originalPrice - product.currentPrice) /
                  product.originalPrice) *
                  100
              );

              return (
                <div
                  key={product.id}
                  className="flex-shrink-0 w-64 bg-gray-950 rounded-md hover:shadow-lg transition-shadow duration-300 relative"
                >
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-[170px] object-cover rounded-t-md"
                  />
                  <div className="p-3">
                    <h3 className="text-lg font-semibold truncate">
                      {product.name}
                    </h3>
                    <p className="text-gray-400 text-sm truncate">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-red-500 font-bold">
                        R {product.currentPrice}
                      </span>
                      <span className="text-gray-500 line-through">
                        R {product.originalPrice}
                      </span>
                    </div>
                  </div>
                  <span className="text-green-500 bg-red-100 rounded-full px-2 py-1 text-[10px] absolute top-2 right-2">
                    Save {discountPercentage}%
                  </span>
                </div>
              );
            })}
          </div>

          {/* Scroll Right Button */}
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full hover:bg-gray-600 z-10 focus:outline-none focus:ring focus:ring-red-600"
            onClick={scrollRight}
            aria-label="Scroll right"
          >
            <MdArrowForwardIos size={24} />
          </button>
        </div>
      ) : (
        <p className="text-center text-gray-400">
          No special deals available at the moment.
        </p>
      )}
    </div>
  );
};

export default SpecialDeals;
