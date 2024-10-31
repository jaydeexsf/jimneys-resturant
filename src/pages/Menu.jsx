import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import MenuItem from '../components/MenuItem';
import Button3 from '../components/Button3';

export const Menu = () => {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [activeButton, setActiveButton] = useState("All");
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
            setLoading(true)
            const productsCollection = collection(db, 'products'); // Use the name of your Firestore collection
            const productsSnapshot = await getDocs(productsCollection);
            const productsList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProducts(productsList);
            } catch (err) {
            console.log(err)
            } finally {
            setLoading(false)
            }
        };

        fetchProducts();
    }, []);

    const filteredProducts = selectedCategory === "All"
        ? products
        : products.filter(product => product.category === selectedCategory);

    const handleButtonClick = (category) => {
        if (activeButton === category) {
            setActiveButton("All");
            setSelectedCategory("All");
        } else {
            setActiveButton(category);
            setSelectedCategory(category);
        }
    };

    useEffect(()=> {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className='bg-gray-900 min-h-[100vh] flex py-[10px] mx-auto flex-col items-center h-full text-white'>
            <h1 className='flex text-3xl font-bold w-full justify-center text-center mb-8'>Menu</h1>
            <div className="flex gap-4 mt-[0px] pb-[15px] px-8 mx-auto">
                <Button3
                    cont="All"
                    onClick={() => handleButtonClick("All")}
                    isActive={activeButton === "All"}
                />
                <Button3
                    cont="Breakfast"
                    onClick={() => handleButtonClick("Breakfast")}
                    isActive={activeButton === "Breakfast"}
                />
                <Button3
                    cont="Lunch"
                    onClick={() => handleButtonClick("Lunch")}
                    isActive={activeButton === "Lunch"}
                />
                <Button3
                    cont="Dinner"
                    onClick={() => handleButtonClick("Dinner")}
                    isActive={activeButton === "Dinner"}
                />
            </div>
            <div className="grid justify-center mx-auto py-[10px] sm:grid-cols-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:6 gap-2">
                {filteredProducts.map((item) => (
                    <MenuItem key={item.id} description={true} item={item} />
                ))}
                {loading && <div className="w-16 h-16 border-gray-400 rounded-full border-t-transparent border-4 animate-spin"></div>}
            </div>
        </div>
    );
};

export default Menu;
