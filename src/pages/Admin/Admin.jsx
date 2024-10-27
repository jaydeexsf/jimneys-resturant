import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import products from '../../database/index'; 
import MenuItem from '../../components/MenuItem';
import Button3 from '../../components/Button3';
import { Link } from 'react-router-dom';

export const Admin = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [activeButton, setActiveButton] = useState("All");
    const [isEditing, setIsEditing] = useState(false);
    const [editingItem, setEditingItem] = useState({});
    const [isDeleting, setIsDeleting] = useState(false);
    const [newImage, setNewImage] = useState('');
    const [updatedName, setUpdatedName] = useState('');
    const [updatedDescription, setUpdatedDescription] = useState('');
    const [originalPrice, setOriginalPrice] = useState('');
    const [currentPrice, setCurrentPrice] = useState('');
    const [discountPercentage, setDiscountPercentage] = useState('');
    const [updatedCategory, setUpdatedCategory] = useState('');

    // Filter products based on selected category
    const filteredProducts = selectedCategory === "All"
        ? products
        : products.filter(product => product.category === selectedCategory);

    // Handle button click for category selection
    const handleButtonClick = (category) => {
        const newCategory = activeButton === category ? "All" : category;
        setActiveButton(newCategory);
        setSelectedCategory(newCategory);
    };

    // Handle product editing
    const handleEditProduct = (product) => {
        setIsEditing(true);
        setEditingItem(product);
        setUpdatedName(product.name);
        setUpdatedDescription(product.description);
        setOriginalPrice(product.originalPrice);
        setCurrentPrice(product.currentPrice);
        setDiscountPercentage(product.discountPercentage);
        setUpdatedCategory(product.category);
    };

    // Update product
    const handleUpdateProduct = async () => {
        const updatedProduct = {
            ...editingItem,
            name: updatedName,
            imageUrl: newImage || editingItem.imageUrl,
            description: updatedDescription,
            originalPrice,
            currentPrice: currentPrice || undefined,
            discountPercentage: discountPercentage || undefined,
            category: updatedCategory
        };

        console.log(updatedProduct);

        // Uncomment the below lines to update the product in Firebase
        // try {
        //     await firebase.firestore().collection('products').doc(editingItem.id).update(updatedProduct);
        // } catch (error) {
        //     console.error("Error updating product: ", error);
        // }

        setIsEditing(false);
    };

    // Handle product deletion
    const handleDeleteProduct = async () => {
        // Uncomment the below lines to delete the product from Firebase
        // try {
        //     await firebase.firestore().collection('products').doc(editingItem.id).delete();
        // } catch (error) {
        //     console.error("Error deleting product: ", error);
        // }
        setIsDeleting(false);
    };

    return (
        <>
            <div className={`${isDeleting ?' overflow-y-none' : 'overflow-none'}  bg-gray-900 min-h-screen pb-8 flex flex-col items-center text-white`}>
                {/* <div className="flex justify-between items-center mb-8 mt-3 w-full px-8">
                </div> */}
                <div className='flex items-center justify-between mt-4 mb-4 w-full px-8'> 
                    <h1 className='text-2xl font-semibold'>Manage Products</h1>
                    <span><Link to="/jimneys-resturant/add-product"><button className='bg-white text-slate-900 hover:text-white px-3 py-2 hover:bg-indigo-900 font-semibol text-xs rounded-md'>Add Product</button></Link>
                    </span>
                </div>
                <div className="flex gap-4 mt-4 mb-6">
                    {["All", "Breakfast", "Lunch", "Dinner"].map((category) => (
                        <Button3
                            key={category}
                            cont={category}
                            onClick={() => handleButtonClick(category)}
                            isActive={activeButton === category}
                        />
                    ))}
                </div>
                <div className="grid justify-center py-[8px] px grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
                    {filteredProducts.map((item, index) => (
                        <div className='relative bg-gray-950 pb-4' key={index}>
                            <MenuItem description={false} item={item} />
                            <div className='px-2 flex justify-between text-[12px] absolute bottom-2 w-full'>
                                <button
                                    className='bg-blue-600 shadow-red-700 transition-all duration-200 hover:bg-blue-900 shadow-sm px-2 py-1 rounded-sm flex items-center gap-1'
                                    onClick={() => handleEditProduct(item)}
                                >
                                    <FaEdit /> Edit
                                </button>
                                <button
                                    className='bg-red-600 shadow-white hover:bg-red-700 transition-all duration-200 shadow-sm px-2 py-1 rounded-sm flex items-center gap-1'
                                    onClick={() => {
                                        setEditingItem(item);
                                        setIsDeleting(true);
                                    }}
                                >
                                    <FaTrash /> Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Delete Confirmation Modal */}
            {isDeleting && (
                <div className='min-h-screen  absolute w-full top-0 flex justify-center items-center bg-black/60 z-[10000000000]'>
                    <div className='bg-gray-800 p-5 rounded-md'>
                        <h2 className='text-xl mb-4'>Confirm Deletion</h2>
                        <p>Are you sure you want to delete {editingItem.name}?</p>
                        <div className='flex justify-between mt-4'>
                            <button onClick={handleDeleteProduct} className='bg-red-600 px-3 py-1 rounded-md'>Delete</button>
                            <button onClick={() => setIsDeleting(false)} className='bg-gray-500 px-3 py-1 rounded-md'>Cancel</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Product Modal */}
            {isEditing && (
                <div className='min-h-screen absolute w-full top-0 flex justify-center bg-black/60 z-[10000000000]'>
                    <div className='bg-gray-800 p-5 rounded-md'>
                        <h2 className='text-xl mb-4'>Edit Product</h2>
                        <img src={editingItem.imageUrl} alt='' className='w-full h-[200px]' />
                        <input
                            type='text'
                            placeholder='Product Name'
                            value={updatedName}
                            onChange={(e) => setUpdatedName(e.target.value)}
                            className='border rounded-md p-2 mb-2 w-full'
                        />
                        <input
                            type='text'
                            placeholder='Image URL'
                            value={newImage}
                            onChange={(e) => setNewImage(e.target.value)}
                            className='border rounded-md p-2 mb-2 w-full'
                        />
                        <textarea
                            placeholder='Description'
                            value={updatedDescription}
                            onChange={(e) => setUpdatedDescription(e.target.value)}
                            className='border rounded-md p-2 mb-2 w-full'
                        />
                        <input
                            type='number'
                            placeholder='Original Price'
                            value={originalPrice}
                            onChange={(e) => setOriginalPrice(e.target.value)}
                            className='border rounded-md p-2 mb-2 w-full'
                        />
                        <input
                            type='number'
                            placeholder='Current Price (optional)'
                            value={currentPrice}
                            onChange={(e) => setCurrentPrice(e.target.value)}
                            className='border rounded-md p-2 mb-2 w-full'
                        />
                        <input
                            type='text'
                            placeholder='Discount Percentage (optional)'
                            value={discountPercentage}
                            onChange={(e) => setDiscountPercentage(e.target.value)}
                            className='border rounded-md p-2 mb-2 w-full'
                        />
                        <input
                            type='text'
                            placeholder='Category'
                            value={updatedCategory}
                            onChange={(e) => setUpdatedCategory(e.target.value)}
                            className='border rounded-md p-2 mb-2 w-full'
                        />
                        <div className='flex justify-between mt-4'>
                            <button onClick={handleUpdateProduct} className='bg-green-600 px-3 py-1 rounded-md'>Update</button>
                            <button onClick={() => setIsEditing(false)} className='bg-gray-500 px-3 py-1 rounded-md'>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Admin;
