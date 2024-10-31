// Import necessary libraries and modules  
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
import { GiCancel } from "react-icons/gi";
import { FiSettings } from "react-icons/fi"; // Settings icon
import { MdLogout } from "react-icons/md"; // Logout icon
import logo from '../assets/images/PSX_20240717_161845-removebg-preview.png';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import SettingsComponent from './SettingsComponent'; // Import new component

const Header = ({ className }) => {
    const location = useLocation().pathname;
    const [menuVisible, setMenuVisible] = useState(false); // Default menu to hidden
    const [currentUser, setCurrentUser] = useState(null);
    const [isShowingSettings, setIsShowingSettings] = useState(false);
    const navigate = useNavigate();

    // Check for auth state
    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user); // Update current user when authenticated
        });
        return () => unsubscribe();
    }, []);

    const getLinkClassName = (path) =>
        `hover:text-red-700 p-2 rounded-lg mx-2 ${location === path ? 'text-red-700 underline' : 'text-white hover:bg-gray-900'}`;

    const toggleMenu = () => setMenuVisible(!menuVisible);

    const handleLogout = async () => {
        const auth = getAuth();
        try {
            await signOut(auth);
            navigate("/login"); // Redirect to login page after logout
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    return (
        <header className="bg-black p-4 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl flex gap-2 items-center">
                    <img src={logo} className="w-10" alt="Logo" />
                    Jimney's
                </h1>

                {/* Mobile Menu Toggle Button */}
                <button onClick={toggleMenu} className="md:hidden">
                    {menuVisible ? (
                        <GiCancel className="text-gray-200 text-3xl" />
                    ) : (
                        <CiMenuBurger className="text-gray-200 text-3xl" />
                    )}
                </button>

                {/* Mobile Navigation */}
                <div
                    className={`absolute top-16 right-0 w-full bg-red-950 p-6 transition-transform duration-300 ${menuVisible ? 'block' : 'hidden'}`}
                >
                    {currentUser && (
                        <div className="flex items-center gap-2 mb-4">
                            <img src={currentUser.photoURL} alt={currentUser.displayName} className="w-10 h-10 rounded-full" />
                            <span className="text-white">Hi, {currentUser.displayName}</span>
                        </div>
                    )}
                    <nav className="flex flex-col mb-4">
                        <Link to="/" className={getLinkClassName('/')}>Home</Link>
                        <Link to="/menu" className={getLinkClassName('/menu')}>Menu</Link>
                        <Link to="/order" className={getLinkClassName('/order')}>Order</Link>
                        <Link to="/location" className={getLinkClassName('/location')}>Location</Link>
                    </nav>
                    {currentUser && (
                        <div className="flex flex-col">
                            <button
                                onClick={() => setIsShowingSettings(true)}
                                className="flex items-center gap-2 mt-2 bg-blue-600 text-white px-3 py-2 rounded-md font-semibold hover:bg-blue-800"
                            >
                                <FiSettings /> Settings
                            </button>
                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-2 mt-2 bg-red-600 text-white px-3 py-2 rounded-md font-semibold hover:bg-red-800"
                            >
                                <MdLogout /> Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Show Settings Component */}
            {isShowingSettings && (
                <SettingsComponent 
                    onClose={() => setIsShowingSettings(false)} 
                />
            )}
        </header>
    );
};

export default Header;

