import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FaCalendarAlt } from 'react-icons/fa'; 

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="bg-gray-700 shadow-md"> {/* lighter grey */}
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center py-4 gap-4">

                    {/* Logo */}
                    <Link to="/" className="text-white text-xl font-semibold flex items-center gap-2">
                        <FaCalendarAlt className="text-yellow-300 text-2xl" />
                        <span className="tracking-wide">Event Manager</span>
                    </Link>

                    {/* Links */}
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                        <Link to="/" className="text-gray-200 hover:text-white transition">
                            Events
                        </Link>

                        {user ? (
                            <>
                                <Link
                                    to={user.role === 'admin' ? '/admin' : '/dashboard'}
                                    className="text-gray-200 hover:text-white transition"
                                >
                                    Dashboard
                                </Link>

                                <button
                                    onClick={handleLogout}
                                    className="bg-gray-600 hover:bg-gray-800 text-white px-4 py-2 rounded-md transition"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="text-gray-200 hover:text-white transition">
                                    Login
                                </Link>

                                <Link
                                    to="/register"
                                    className="bg-gray-200 text-gray-900 hover:bg-white px-4 py-2 rounded-md font-semibold transition"
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;