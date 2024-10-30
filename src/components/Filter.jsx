// import React, { useEffect, useState } from 'react';
// import { db } from '../firebase'; // Adjust the path as needed
// import { collection, getDocs } from 'firebase/firestore';
// import MenuItem from './MenuItem';
// import Button3 from './Button3';

// export const Filter = () => {
//     const [products, setProducts] = useState([]);
//     const [selectedCategory, setSelectedCategory] = useState("All");
//     const [activeButton, setActiveButton] = useState("All");

//     // Fetch products from Firebase Firestore
//     useEffect(() => {
//         const fetchProducts = async () => {
//             const productsCollection = collection(db, 'products'); // Use the name of your Firestore collection
//             const productsSnapshot = await getDocs(productsCollection);
//             const productsList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//             setProducts(productsList);
//         };

//         fetchProducts();
//     }, []);

//     // Filter products based on the selected category
//     const filteredProducts = selectedCategory === "All"
//         ? products
//         : products.filter(product => product.category === selectedCategory);

//     // Update states when buttons are clicked
//     const handleButtonClick = (category) => {
//         if (activeButton === category) {
//             setActiveButton("All");
//             setSelectedCategory("All");
//         } else {
//             setActiveButton(category);
//             setSelectedCategory(category);
//         }
//     };

//     return (
//         <div className='bg-gray-900 min-h-[100vh] flex flex-col items-center h-full text-white'>
//             <h1 className='flex justify-center text-3xl font-bold mb-8'>Menu</h1>
//             <div className="flex gap-4 mt-[30px] p-[15px]">
//                 <Button3
//                     cont="All"
//                     onClick={() => handleButtonClick("All")}
//                     isActive={activeButton === "All"}
//                 />
//                 <Button3
//                     cont="Breakfast"
//                     onClick={() => handleButtonClick("Breakfast")}
//                     isActive={activeButton === "Breakfast"}
//                 />
//                 <Button3
//                     cont="Lunch"
//                     onClick={() => handleButtonClick("Lunch")}
//                     isActive={activeButton === "Lunch"}
//                 />
//                 <Button3
//                     cont="Dinner"
//                     onClick={() => handleButtonClick("Dinner")}
//                     isActive={activeButton === "Dinner"}
//                 />
//             </div>
//             <div className="grid justify-center w-[100vw] p-[80px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                 {filteredProducts.map((item) => (
//                     <MenuItem key={item.id} item={item} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Filter;
