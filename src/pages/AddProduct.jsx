import React, { useState } from 'react';
import { db, storage } from '../firebase';
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const AddProduct = () => {
    const [name, setName] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [description, setDescription] = useState('');
    const [originalPrice, setOriginalPrice] = useState('');
    const [currentPrice, setCurrentPrice] = useState('');
    const [discountPercentage, setDiscountPercentage] = useState('');
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    const handleAddProduct = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Upload the image to Firebase Storage
            const imageRef = ref(storage, `productImages/${imageFile.name}`);
            await uploadBytes(imageRef, imageFile);
            const imageUrl = await getDownloadURL(imageRef);

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

            // Save the product to Firestore
            await addDoc(collection(db, "products"), newProduct);
            console.log('New product added:', newProduct);
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
        setImageFile(null);
        setPreviewImage(null);
        setDescription('');
        setOriginalPrice('');
        setCurrentPrice('');
        setDiscountPercentage('');
        setCategory('');
    };

    return (
        <div className="bg-gray-900 min-h-screen flex flex-col items-center text-white p-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-6">Add New Product</h1>
            <form onSubmit={handleAddProduct} className="bg-gray-800 p-3 text-sm rounded-md w-full max-w-md">
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <input
                    type="text"
                    placeholder="Product Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={loading}
                    className="border border-gray-700 bg-gray-900 text-white rounded-md p-2 mb-2 w-full"
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    disabled={loading}
                    className="border border-gray-700 bg-gray-900 text-white rounded-md p-2 mb-2 w-full"
                />
                <input
                    type="number"
                    placeholder="Original Price"
                    value={originalPrice}
                    onChange={(e) => setOriginalPrice(e.target.value)}
                    required
                    disabled={loading}
                    className="border border-gray-700 bg-gray-900 text-white rounded-md p-2 mb-2 w-full"
                />
                <input
                    type="number"
                    placeholder="Current Price (optional)"
                    value={currentPrice}
                    onChange={(e) => setCurrentPrice(e.target.value)}
                    disabled={loading}
                    className="border border-gray-700 bg-gray-900 text-white rounded-md p-2 mb-2 w-full"
                />
                <input
                    type="text"
                    placeholder="Discount Percentage (optional)"
                    value={discountPercentage}
                    disabled={loading}
                    onChange={(e) => setDiscountPercentage(e.target.value)}
                    className="border border-gray-700 bg-gray-900 text-white rounded-md p-2 mb-2 w-full"
                />
                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    disabled={loading}
                    className="border border-gray-700 bg-gray-900 text-white rounded-md p-2 mb-2 w-full"
                />

                <div className="mt-4">
                    <label className="text-gray-400 text-sm">Upload Product Image</label>
                    <input
                     disabled={loading}
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="block text-gray-400 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-red-600 file:hover:cursor-pointer file:text-white hover:file:bg-red-700 mt-2 w-full"
                    />
                    {previewImage && (
                        <img src={previewImage} alt="Preview" className="mt-4 w-full h-48 object-cover rounded-md" />
                    )}
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className={`mt-6 w-full flex items-center justify-center gap-2 bg-red-600 px-4 py-2 rounded-md text-white font-semibold ${
                        loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'
                    }`}
                >
                  {loading ?  <div className="border-gray-500 border-t-black border-2 rounded-full w-4 h-4 animate-spin"></div> : ''} {loading ? 'Adding...' : 'Add Product'}
                </button>
            </form>
        </div>
    );
};

export default AddProduct;