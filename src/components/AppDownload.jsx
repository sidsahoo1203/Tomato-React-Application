import React from 'react';
import { assets } from '../assets/assets';

const AppDownload = () => {
  return (
    <div className="app-download relative bg-gradient-to-r from-red-200 via-orange-200 to-pink-100 p-6 sm:p-8 md:p-10 lg:p-12 rounded-3xl shadow-3xl text-center mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl mt-5 sm:mt-6 md:-mt-16 mb-12 sm:mb-12 md:mb-16 lg:mb-20">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-pink-200 opacity-20 rounded-3xl z-[-1]"></div>
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
        Get the Tomato App
      </h2>
      
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6">
        Enjoy a seamless experience on your device. Download now from your preferred store.
      </p>

      <div className="app-download-platform flex flex-row justify-center gap-6">
        <a 
          href="https://play.google.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-105 sm:hover:scale-110"
        >
          <img 
            src={assets.play_store} 
            alt="Google Play Store" 
            className="w-36 sm:w-44 h-auto cursor-pointer hover:shadow-lg sm:hover:shadow-xl transition-shadow duration-300"
          />
        </a>
        <a 
          href="https://apps.apple.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-105 sm:hover:scale-110"
        >
          <img 
            src={assets.app_store} 
            alt="Apple App Store" 
            className="w-36 sm:w-44 h-auto cursor-pointer hover:shadow-lg sm:hover:shadow-xl transition-shadow duration-300"
          />
        </a>
      </div>
    </div>
  );
}

export default AppDownload;
