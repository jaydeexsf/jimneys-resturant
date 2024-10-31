import React, { useEffect, useState } from 'react';
import { db, storage } from '../firebase';
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { PiImagesSquareLight } from 'react-icons/pi';
import { MdCancel } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { Link } from 'react-router-dom';

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
    const [message, setMessage] = useState('');

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

        if (category === '') {
            setError('Select Category');
            setLoading(false);
            return;
        }

        try {
            const imageRef = ref(storage, `productImages/${imageFile.name}`);
            await uploadBytes(imageRef, imageFile);
            const imageUrl = await getDownloadURL(imageRef);

            const newProduct = {
                name,
                imageUrl: imageUrl,
                description,
                originalPrice: Number(originalPrice),
                currentPrice: Number(currentPrice),
                discountPercentage: discountPercentage ? Number(discountPercentage) : null,
                category,
            };

            await addDoc(collection(db, "products"), newProduct);
            setMessage('Product added successfully');
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

    useEffect(() => {
        if (originalPrice && currentPrice) {
            const discount = ((originalPrice - currentPrice) / originalPrice) * 100;
            setDiscountPercentage(discount); 
        }
    }, [originalPrice, currentPrice]);

    useEffect(() => {
        if (originalPrice && discountPercentage) {
            const discountedPrice = originalPrice - (originalPrice * discountPercentage / 100);
            setCurrentPrice(discountedPrice); 
        }
    }, [originalPrice, discountPercentage]);

    useEffect(() => {
        if (message) {
            setTimeout(() => {
                setMessage('');
            }, 4000);
        }
    }, [message]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-gray-900 min-h-screen flex flex-col items-center text-white p-8">
            <div className='fixed top-[90px] ml-2 left-[50%] z-[100000000000000000] w-full translate-x-[-50%]'>
                {message ? 
                <div className='relative w-fit'>
                    <div className='bg-red-600/90 flex gap-1 items-center pr-8 pl-2 py-2 rounded text-white text-md'>
                        <span>
                            <IoMdCheckmark size={20} className="text-green-600 font-bold" />
                        </span>
                        <span className='text-green-200'>{message}</span>
                        <span className='absolute top-0 right-1'>
                            <button onClick={() => setMessage('')}>
                                <MdCancel size={20} />
                            </button>
                        </span>
                    </div>
                </div>
                : ''}
            </div>

            <div className='absolute top-[120px] left-[2%] bg-red-600 flex justify-center items-center px-4 py-1 rounded-full'>
                <Link to="/admin">Back</Link>
            </div>

            <h1 className="text-xl md:text-2xl font-bold mb-6">Add New Product</h1>
            <form onSubmit={handleAddProduct} className="bg-gray-800 p-6 text-sm rounded-md w-full max-w-md space-y-4">
                {error && <p className="text-red-500 mb-2">{error}</p>}

                <input
                    type="text"
                    placeholder="Product Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={loading}
                    className="border border-gray-700 focus:border-red-600 outline-none bg-gray-900 text-white rounded-md p-3 w-full"
                />

                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    disabled={loading}
                    className="border border-gray-700 bg-gray-900 focus:border-red-600 outline-none text-white rounded-md p-3 w-full h-24"
                />

                <input
                    type="number"
                    placeholder="Original Price"
                    value={originalPrice}
                    onChange={(e) => setOriginalPrice(e.target.value)}
                    required
                    disabled={loading}
                    className="border border-gray-700 bg-gray-900 focus:border-red-600 outline-none text-white rounded-md p-3 w-full"
                />

                <input
                    type="number"
                    placeholder="Current Price (optional)"
                    value={currentPrice}
                    onChange={(e) => setCurrentPrice(e.target.value)}
                    disabled={loading}
                    className="border border-gray-700 bg-gray-900 focus:border-red-600 outline-none text-white rounded-md p-3 w-full"
                />

                <input
                    type="number"
                    placeholder="Discount Percentage (optional)"
                    value={discountPercentage}
                    onChange={(e) => setDiscountPercentage(e.target.value)}
                    disabled={loading}
                    className="border border-gray-700 bg-gray-900 focus:border-red-600 outline-none text-white rounded-md p-3 w-full"
                />

                <select
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    className='w-full mb-4 p-2 bg-gray-700 outline-none focus:border-red-600 focus:border-[1.5px] border-transparent border-[1px] rounded-md text-white'
                >
                    <option value="">Select a category</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Dinner">Dinner</option>
                </select>

                <div className="mt-4">
                    <label className="text-gray-400 text-sm">Upload Product Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        disabled={loading}
                        className="block w-full mt-2 text-sm text-gray-400 file:py-2 file:px-4 file:rounded-md file:bg-red-600 file:text-white file:font-semibold file:border-0 file:cursor-pointer hover:file:bg-red-700"
                    />
                    {previewImage && (
                        <img src={previewImage} alt="Preview" className="mt-4 w-full h-48 object-cover rounded-md" />
                    )}
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className={`mt-6 w-full flex items-center justify-center gap-2 bg-red-600 px-4 py-3 rounded-md text-white font-semibold ${
                        loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'
                    }`}
                >
                    {loading && <div className="border-t-transparent border-gray-400 border-4 rounded-full w-5 h-5 animate-spin"></div>}
                    {loading ? 'Adding...' : 'Add Product'}
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
