import React, { useState } from 'react';
// import firebase from 'firebase/app'; // Make sure to import firebase if you're using it
// import Button3 from '../../components/Button3'; // Assuming you have a Button3 component

const AddProduct = () => {
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');
    const [originalPrice, setOriginalPrice] = useState('');
    const [currentPrice, setCurrentPrice] = useState('');
    const [discountPercentage, setDiscountPercentage] = useState('');
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleAddProduct = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Create a new product object
        const newProduct = {
            name,
            imageUrl,
            description,
            originalPrice: Number(originalPrice),
            currentPrice: Number(currentPrice),
            discountPercentage: discountPercentage ? Number(discountPercentage) : null,
            category,
        };

        try {
            // Uncomment the below line to add the product to Firebase
            // await firebase.firestore().collection('products').add(newProduct);
            console.log('New product added:', newProduct);
            // Reset form after successful addition
            resetForm();
        } catch (err) {
            console.error('Error adding product:', err);
            setError('Failed to add product. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setName('');
        setImageUrl('');
        setDescription('');
        setOriginalPrice('');
        setCurrentPrice('');
        setDiscountPercentage('');
        setCategory('');
    };

    return (
        <div className='bg-gray-900 min-h-screen flex flex-col items-center text-white p-8'>
            <h1 className='text-3xl font-bold mb-6'>Add New Product</h1>
            <form onSubmit={handleAddProduct} className='bg-gray-800 p-6 rounded-md w-full max-w-md'>
                {error && <p className='text-red-500 mb-4'>{error}</p>}
                <input
                    type='text'
                    placeholder='Product Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className='border rounded-md p-2 mb-4 w-full'
                />
                <input
                    type='text'
                    placeholder='Image URL'
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    required
                    className='border rounded-md p-2 mb-4 w-full'
                />
                <textarea
                    placeholder='Description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className='border rounded-md p-2 mb-4 w-full'
                />
                <input
                    type='number'
                    placeholder='Original Price'
                    value={originalPrice}
                    onChange={(e) => setOriginalPrice(e.target.value)}
                    required
                    className='border rounded-md p-2 mb-4 w-full'
                />
                <input
                    type='number'
                    placeholder='Current Price (optional)'
                    value={currentPrice}
                    onChange={(e) => setCurrentPrice(e.target.value)}
                    className='border rounded-md p-2 mb-4 w-full'
                />
                <input
                    type='text'
                    placeholder='Discount Percentage (optional)'
                    value={discountPercentage}
                    onChange={(e) => setDiscountPercentage(e.target.value)}
                    className='border rounded-md p-2 mb-4 w-full'
                />
                <input
                    type='text'
                    placeholder='Category'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    className='border rounded-md p-2 mb-4 w-full'
                />
                <button
                    type='submit'
                    disabled={loading}
                    className={`bg-blue-600 px-4 py-2 rounded-md text-white ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    {loading ? 'Adding...' : 'Add Product'}
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
