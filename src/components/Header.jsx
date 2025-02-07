import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <header className="bg-[url('/header_img.png')] bg-cover bg-center lg:h-[550px] lg:pt-28 mx-4 sm:mx-8 sm:h-[350px] lg:mx-32 rounded-lg my-auto flex items-cente sm:-mt-10">
            <div className='px-6 sm:px-8 md:px-12 lg:px-28 rounded-lg pt-12 sm:pt-16 md:pt-16 lg:pt-20 '>
                <motion.h1 
                    className='font-medium text-white text-3xl sm:text-3xl md:text-5xl lg:text-7xl leading-tight'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Order Your <br /> Favourite Food Here
                </motion.h1>
                
                <motion.p 
                    className='text-white text-xs sm:text-sm md:text-base lg:text-md sm-text-md pt-3 sm:pt-4 md:pt-5 lg:pt-5 w-full sm:w-4/4 md:w-2/3 lg:w-7/12'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Choose from a diverse menu featuring a delectable array of dishes crafted with the finest 
                    ingredients and culinary expertise. Our mission is to satisfy your craving and elevate your 
                    dining experience, one delicious meal at a time.
                </motion.p>

                <motion.button 
                    className='text-slate-700 bg-white border font-medium rounded-full text-xs sm:text-sm sm:block px-4 sm:px-5 mt-4 sm:mt-5 py-2'
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    aria-label="View Menu"
                >
                    View Menu
                </motion.button>
            </div>
        </header>
    );
}

export default Header;
