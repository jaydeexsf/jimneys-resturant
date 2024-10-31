import React, { useState, useEffect } from 'react';
import { getFirestore, doc, collection, getDocs, setDoc } from 'firebase/firestore';
import { GiCancel } from "react-icons/gi";


const SettingsComponent = ({ onClose }) => {
    const [users, setUsers] = useState([]);
    const [selectedEmail, setSelectedEmail] = useState('');
    const db = getFirestore();

    useEffect(() => {
        const fetchUsers = async () => {
            const usersCollection = collection(db, 'users');
            const usersSnapshot = await getDocs(usersCollection);
            const usersData = usersSnapshot.docs.map((doc) => doc.data());
            setUsers(usersData);
        };
        fetchUsers();
    }, [db]);

    const handleSetAsEmployee = async () => {
        try {
            const employeeRef = doc(db, 'employees', selectedEmail);
            await setDoc(employeeRef, { email: selectedEmail });
            alert(`${selectedEmail} has been set as an employee`);
        } catch (error) {
            console.error("Failed to set employee:", error);
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-md w-80">
                <div className='flex justify-between items-center'>
                    <h2 className="text-xl font-semibold mb-4">Settings</h2>
                    <button onClick={onClose} className="text-red-500 mb-4"><GiCancel /></button>
                </div>
                <select 
                    onChange={(e) => setSelectedEmail(e.target.value)} 
                    value={selectedEmail} 
                    className="border border-gray-300 p-2 rounded w-full mb-4"
                >
                    <option value="">Select a user</option>
                    {users.map((user, index) => (
                        <option key={index} value={user.email}>{user.email}</option>
                    ))}
                </select>
                <button
                    onClick={handleSetAsEmployee}
                    className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-800 w-full"
                >
                    Set as Employee
                </button>
            </div>
        </div>
    );
};

export default SettingsComponent;
