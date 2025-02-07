import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from './../assets/assets';
import { StoreContext } from '../context/storeContext';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { getTotalCartAmount } = useContext(StoreContext);

    const handleMenuClick = (sectionId) => () => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        setIsSidebarOpen(false);
    };

    const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

    const renderCartBadge = () => {
        const totalAmount = getTotalCartAmount();
        if (totalAmount > 0) {
            return (
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">
                </div>
            );
        }
        return null;
    };

    return (
        <>
            <nav className="bg-white shadow-md px-4 py-3 h-[70px] flex justify-between items-center mb-20 relative">
                <Link to="/" aria-label="Homepage">
                    <img src={assets.logo} alt="Logo" className="h-12 sm:w-[130px] sm:h-[35px]" />
                </Link>

                <div className="flex items-center space-x-4">
                    <img
                        src={assets.search_icon}
                        alt="Search Icon"
                        className="w-6 h-6 text-gray-600 cursor-pointer hover:text-orange-600"
                        aria-label="Search"
                    />
                    <div className="relative">
                        <Link to='/cart' aria-label="Cart">
                            <img
                                src={assets.basket_icon}
                                alt="Cart Icon"
                                className="w-6 h-6 text-gray-600 cursor-pointer hover:text-orange-600"
                            />
                        </Link>
                        {renderCartBadge()}
                    </div>
                    <button
                        onClick={() => alert('Sign in functionality not implemented')}
                        className="text-slate-700 bg-white border hover:bg-orange-500 font-medium rounded-full text-sm px-4 py-2"
                        aria-label="Sign In"
                    >
                        Sign In
                    </button>

                    <button
                    className="block lg:hidden text-gray-700 hover:text-orange-600"
                    onClick={toggleSidebar}
                    aria-label="Toggle Navigation Menu"
                    aria-expanded={isSidebarOpen}
                >
                <img src={assets.menu} alt="" className="w-6 mt-5 mb-5 h-6" />

                </button>
                </div>
            </nav>

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 w-64 h-full bg-gradient-to-b from-white via-gray-100 to-gray-200 shadow-lg transform transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} z-50`}>
                <button
                    className="absolute top-4 right-4 text-gray-700 hover:text-orange-600"
                    onClick={toggleSidebar}
                    aria-label="Close Sidebar"
                >
                    <img src={assets.cross_icon} alt="Close Icon" className="w-5 mt-2 mb-5 h-5" />
                </button>
                <ul className="flex flex-col p-6 space-y-4">
                    {[
                        { id: 'home', label: 'Home', sectionId: null },
                        { id: 'menu', label: 'Menu', sectionId: 'explore-menu' },
                        { id: 'mobile-app', label: 'Mobile App', sectionId: 'food-display' },
                        { id: 'contact-us', label: 'Contact Us', sectionId: 'app-download' }
                    ].map(({ id, label, sectionId }) => (
                        <li key={id}>
                            <Link
                                to={sectionId ? `#${sectionId}` : '/'}
                                onClick={sectionId ? handleMenuClick(sectionId) : undefined}
                                className="text-gray-700 text-lg font-semibold hover:text-orange-600 transition-colors"
                                aria-label={label}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Navbar;
