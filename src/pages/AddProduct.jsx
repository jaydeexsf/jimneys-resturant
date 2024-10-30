import React, { useEffect, useState } from 'react';
import { db, storage } from '../firebase';
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { PiImagesSquareLight } from 'react-icons/pi';
import { MdCancel } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";



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
    const [message, setMessage] = useState('my name is moloantoa');

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
            setMessage('Product added sucesfully')
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

    useEffect(()=>{
        if(message){
            setTimeout(() => {
                setMessage('')
            }, 40000);
        }
    }, [message])

    return (
        <div className="bg-gray-900 min-h-screen flex flex-col items-center text-white p-8">
            <div className='fixed top-[90px] left-[50%] z-[1000000] w-full translate-x-[-50%]'>
                {message ? 
                <div className='relative w-fit'>
                    <div className='bg-red-600/90 flex gap-1 items-center pr-8 pl-2 py-2 rounded text-white text-md font-' > <span > <IoMdCheckmark size={20} className="text-green-600 font-bold" />
                    </span> <span className='text-green-200'>{message}</span> <span className='absolute top-0 right-1'><button onClick={()=> setMessage('')}><MdCancel size={20}/>
</button></span> </div>
                    
                </div>    
            :
            ''
            }

            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-6">Add New Product </h1>
            <form onSubmit={handleAddProduct} className="bg-gray-800 p-3 text-sm rounded-md w-full max-w-md">
                {error && <p className="text-red-500 mb-4">{error}</p>} {/* Display error message */}
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
                    {loading ?  <div className="border-gray-500 border-t-black border-2 rounded-full w-4 h-4 animate-spin"></div> : ''} 
                    {loading ? 'Adding...' : 'Add Product'}
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
