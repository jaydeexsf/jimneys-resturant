import React, { useState } from 'react';
import { getFirestore, doc, collection, getDocs, deleteDoc, setDoc, getDoc } from 'firebase/firestore';
import { GiCancel } from "react-icons/gi";
import { FaSpinner } from "react-icons/fa";
import { AiOutlineUserAdd, AiOutlineUser, AiOutlineWarning } from "react-icons/ai";
import { MdError } from "react-icons/md"; 
import { FaUserCircle } from "react-icons/fa"; 

const SettingsComponent = ({ onClose }) => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [mode, setMode] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const db = getFirestore();

    const fetchData = async (collectionName) => {
        setIsLoading(true);
        setErrorMessage(null); 
        const usersCollection = collection(db, collectionName);
        const usersSnapshot = await getDocs(usersCollection);
        const usersData = usersSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        setUsers(usersData);
        setIsLoading(false);
    };

    const handleSetAsEmployee = async (userId) => {
        try {
            const userDoc = doc(db, 'users', userId);
            const userSnapshot = await getDoc(userDoc);
            if (userSnapshot.exists()) {
                const employeeRef = doc(db, 'employees', userSnapshot.data().email);
                await setDoc(employeeRef, { email: userSnapshot.data().email });
                alert(`${userSnapshot.data().email} has been set as an employee`);
                fetchData('employees'); 
            } else {
                console.error("User does not exist");
                setErrorMessage("User does not exist.");
            }
        } catch (error) {
            console.error("Failed to set employee:", error);
            setErrorMessage("Failed to set employee. Please try again.");
        }
    };

    const handleRemoveEmployee = async (email) => {
        try {
            const employeeRef = doc(db, 'employees', email);
            await deleteDoc(employeeRef);
            alert(`${email} has been removed as an employee`);
            fetchData('employees'); 
        } catch (error) {
            console.error("Failed to remove employee:", error);
            setErrorMessage("Failed to remove employee. Please try again.");
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-md w-80">
                <div className='flex justify-between items-center'>
                    <h2 className="text-xl font-semibold mb-4">Settings</h2>
                    <button onClick={onClose} className="text-red-500 mb-4"><GiCancel size={24} /></button>
                </div>

                {errorMessage && (
                    <div className="flex items-center text-red-500 mb-4">
                        <MdError size={20} className="mr-2" />
                        {errorMessage}
                    </div>
                )}

                {!mode && (
                    <div className="flex gap-4">
                        <button
                            onClick={() => { setMode('add'); fetchData('users'); }}
                            className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-800 w-full flex items-center justify-center"
                        >
                            <AiOutlineUserAdd className="mr-2" /> Add Employee
                        </button>
                        <button
                            onClick={() => { setMode('remove'); fetchData('employees'); }}
                            className="bg-red-600 text-white px-4 py-2 rounded font-semibold hover:bg-red-800 w-full flex items-center justify-center"
                        >
                            <AiOutlineUser className="mr-2" /> Remove Employee
                        </button>
                    </div>
                )}

                {isLoading && (
                    <div className="flex justify-center items-center my-4">
                        <FaSpinner className="animate-spin text-gray-500 text-3xl" />
                    </div>
                )}

                {!isLoading && mode && (
                    <>
                        {users.length === 0 ? (
                            <div className="text-center text-gray-500 mt-4">
                                <AiOutlineWarning size={20} className="inline-block mb-2" />
                                <p>No users found in the database.</p>
                            </div>
                        ) : (
                            <ul className="mt-4">
                                {users.map((user) => (
                                    <li key={user.id} className="flex justify-between items-center p-2 border-b border-gray-200">
                                        <div className="flex items-center gap-2">
                                            {user.image ? (
                                                <img src={user.image} alt="user profile" className="w-8 h-8 rounded-full" />
                                            ) : (
                                                <FaUserCircle size={30} className="text-gray-400" />
                                            )}
                                            <span>{user.email}</span>
                                        </div>
                                        {mode === 'add' ? (
                                            <button
                                                onClick={() => handleSetAsEmployee(user.id)}
                                                className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-800"
                                            >
                                                Add
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => handleRemoveEmployee(user.email)}
                                                className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-800"
                                            >
                                                Remove
                                            </button>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </>
                )}

                {mode && !isLoading && (
                    <button
                        onClick={() => { setMode(null); setUsers([]); }}
                        className="mt-4 bg-gray-600 text-white px-4 py-2 rounded font-semibold hover:bg-gray-800 w-full"
                    >
                        Back
                    </button>
                )}
            </div>
        </div>
    );
};

export default SettingsComponent;
