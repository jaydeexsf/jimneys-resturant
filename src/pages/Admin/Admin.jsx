import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import MenuItem from '../../components/MenuItem';
import Button3 from '../../components/Button3';
import { Link, useNavigate } from 'react-router-dom';
import { db, storage } from '../../firebase';
// import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { MdCancel } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { getAuth, signOut } from "firebase/auth"; // Import Firebase signOut function


export const Admin = () => {
    const [products, setProducts] = useState([]); //this is from firebase
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
    const [previewImage, setPreviewImage] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // For navigation

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const productsCollection = collection(db, "products");
            const productsSnapshot = await getDocs(productsCollection);
            const productsList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProducts(productsList);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false); 
        }
    };
    

    useEffect(() => {
    
        fetchProducts();
       
    }, []);

    const filteredProducts = selectedCategory === "All"
        ? products
        : products.filter(product => product.category === selectedCategory);
    
    const handleButtonClick = (category) => {
        const newCategory = activeButton === category ? "All" : category;
        setActiveButton(newCategory);
        setSelectedCategory(newCategory);
    };

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

    const handleUpdateProduct = async () => {
        try {
            let imageUrl = editingItem.imageUrl; 
    
            if (newImage) {
                const imageRef = ref(storage, `productImages/${newImage.name}`);
    
                try {
                    setLoading(true);
                    imageUrl = await getDownloadURL(imageRef); 
                    console.log("Image already exists. Using existing URL:", imageUrl);
                } catch (error) {
                    if (error.code === 'storage/object-not-found') {
                        setLoading(true);
                        await uploadBytes(imageRef, newImage);
                        imageUrl = await getDownloadURL(imageRef);
                        console.log("Image uploaded successfully. New URL:", imageUrl);
                    } else {
                        throw error; 
                    }
                } finally {
                    setLoading(false);
                }
            }
    
            const updatedProduct = {
                ...editingItem,
                name: updatedName,
                imageUrl, 
                description: updatedDescription,
                originalPrice,
                currentPrice: currentPrice || '',
                discountPercentage: discountPercentage || '',
                category: updatedCategory
            };
    
            const productDoc = doc(db, "products", editingItem.id);
            await updateDoc(productDoc, updatedProduct);
            console.log("Updated product:", updatedProduct);
            setIsEditing(false);
            fetchProducts();
            setMessage('Successfully updated');
        } catch (err) {
            console.error(err);
            setMessage("Couldn't update product...try again");
        }
    };

    const handleLogout = async () => {
        const auth = getAuth();
        try {
            await signOut(auth);
            navigate("/login"); // Redirect to login page after logout
        } catch (error) {
            console.error("Logout failed", error);
        }
    };
    

    const handleDeleteProduct = async () => {
        const productDoc = doc(db, "products", editingItem.id);
        await deleteDoc(productDoc); 
        setIsDeleting(false);
        fetchProducts();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setNewImage(file);
            setPreviewImage(URL.createObjectURL(file));
        }

    };

    useEffect(()=>{
        if(message){
            setTimeout(() => {
                setMessage('')
            }, 4000);
        }
    }, [message])

    useEffect(()=> {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
            <div className={`${isDeleting ? 'overflow-y-none' : 'overflow-none'} bg-gray-900 min-h-screen pb-8 flex flex-col items-center text-white`}>
            <div className='fixed top-[90px] ml-8 left-[50%] z-[1000000] w-full translate-x-[-50%]'>
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
                <div className='flex items-center justify-between mt-4 mb-4 w-full px-8'> 
                    <h1 className='text-2xl font-semibold'>Manage Products</h1>
                    <span>
                        <Link to="/add-product">
                            <button className='bg-white text-slate-900 hover:text-white px-4 py-3 hover:bg-indigo-900 font-semibold text-xs rounded-md'>
                                Add Product
                            </button>
                        </Link>
                        {/* <button
                        onClick={handleLogout}
                        className="bg-red-600 text-white px-3 py-2 rounded-md font-semibold hover:bg-red-800"
                    >
                        Logout
                    </button> */}
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
                        <div className='relative bg-gray-950 pb-4' key={item.id}>
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
                    {loading && <div className="w-16 h-16 border-gray-400 rounded-full border-t-transparent border-4 animate-spin"></div>}
                </div>
            </div>

            {isDeleting && (
                <div className='fixed inset-0 flex justify-center items-center bg-black/60 z-[10000000000]'>
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
            
            {isEditing && (
                <div className='fixed inset-0 top-8 flex justify-center items-center bg-black/60 z-[10000000000] overflow-y-auto'>
                    <div className='bg-gray-800 p-5 pt-[550px] rounded-md max-w-lg w-full'>
                        <div className="flex justify-between items-center border-b-[2px] border-b-sky-500 mb-6 pb-2"> 
                            <div>
                                <button className='bg-gray-500 hover:bg-gray-600 px-3 py-1 rounded-full' onClick={() => setIsEditing(false)}>Back</button>
                            </div>
                            <div>
                                <div className='text-white font-bold text-xl'>
                                    <h1>Edit Product</h1>
                                </div>
                            </div>
                            <div></div>
                        </div>
                        <label className='text-gray-400'>Product Image:</label>
                        <input
                            type='file'
                            accept='image/*'
                            onChange={handleImageChange}
                            className='w-full p-1 mb-2 file:font-semibold bg-sky-70/10 rounded file:rounded file:py-2 file:px-4 file:hover:cursor-pointer file:hover:bg-red-700 file:text-gray-300 file:border-none file:outline-none file:bg-red-600 text-white cursor-pointer'
                        />
                        <div className="text-center mb-4 text-white">
                        {previewImage ? '' : <span>or <br />Keep the old image</span>}</div>
                        <div className="flex justify-center items-center w-full border-sky-600 border-2 rounded-md mb-6 mt-4">
                            {previewImage ? (
                                <img src={previewImage} alt="Preview" className='w-[300px] h-[300px] object-cover mb-4' />
                            ) : (
                                <img src={editingItem.imageUrl} alt='' className='w-[300px] object-cover h-[300px]' />
                            )}
                        </div>
                        <div>
                            <label className='text-gray-400'>Name:</label>
                            <input
                                type="text"
                                value={updatedName}
                                onChange={(e) => setUpdatedName(e.target.value)}
                                className='w-full mb-4 p-2 outline-none focus:border-sky-600 border-transparent border-[1px] bg-gray-700 rounded-md text-white'
                            />
                            <label className='text-gray-400'>Description:</label>
                            <textarea
                                value={updatedDescription}
                                onChange={(e) => setUpdatedDescription(e.target.value)}
                                className='w-full mb-4 p-2 bg-gray-700 outline-none focus:border-sky-600 border-transparent border-[1px] rounded-md text-white'
                            />
                            <label className='text-gray-400'>Original Price:</label>
                            <input
                                type="text"
                                value={originalPrice}
                                onChange={(e) => setOriginalPrice(e.target.value)}
                                className='w-full mb-4 p-2 bg-gray-700 outline-none focus:border-sky-600 border-transparent border-[1px] rounded-md text-white'
                            />
                            <label className='text-gray-400'>Current Price:</label>
                            <input
                                type="text"
                                value={currentPrice}
                                onChange={(e) => setCurrentPrice(e.target.value)}
                                className='w-full mb-4 p-2 bg-gray-700 outline-none focus:border-sky-600 border-transparent border-[1px] rounded-md text-white'
                            />
                            <label className='text-gray-400'>Discount Percentage:</label>
                            <input
                                type="text"
                                value={discountPercentage}
                                onChange={(e) => setDiscountPercentage(e.target.value)}
                                className='w-full mb-4 p-2 bg-gray-700 outline-none focus:border-sky-600 border-transparent border-[1px] rounded-md text-white'
                            />
                           <label className='text-gray-400'>Category:</label>
                            <select
                                value={updatedCategory}
                                onChange={(e) => setUpdatedCategory(e.target.value)}
                                className='w-full mb-4 p-2 bg-gray-700 outline-none focus:border-sky-600 border-transparent border-[1px] rounded-md text-white'
                            >
                                <option value="" disabled>Select a category</option>
                                <option value="Lunch">Lunch</option>
                                <option value="Breakfast">Breakfast</option>
                                <option value="Dinner">Dinner</option>
                            </select>

                        </div>
                        <div className="flex justify-between mt-4 items-cente">
                        <button onClick={handleUpdateProduct} className='bg-sky-600 hover:bg-sky-700 px-5 py-2 rounded-md'> {loading ? <div className="w-6 h-6 border-2 border-t-black border-gray-300 animate-spin rounded-full"></div> : 'Update'}</button>
                        <button onClick={() => setIsEditing(false)} className='bg-gray-500 hover:bg-gray-600 px-3 py-1 rounded-md'>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Admin;