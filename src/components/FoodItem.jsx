import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { StoreContext } from '../context/storeContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const isInCart = !!cartItems[id];
  console.log(cartItems)

  return (
    <div className='bg-white shadow-md rounded-lg overflow-hidden'>
      <div className='relative'>
        <img className='w-full h-48 object-cover' src={image} alt={name} />
        {!isInCart ? (
          <button 
            className='absolute top-4 right-4 bg-orange-600 p-1 rounded-full text-white hover:bg-orange-700'
            onClick={() => addToCart(id)}
            aria-label="Add to cart"
          >
            <img className='w-8 h-8' src={assets.add_icon_white} alt="" />
          </button>
        ) : (
          <div className='absolute top-4 right-4 flex items-center bg-gray-900 p-2 rounded-full'>
            <button 
              className='text-red-500 hover:text-red-600'
              onClick={() => removeFromCart(id)}
              aria-label="Remove from cart"
            >
              <img className='w-6 h-6' src={assets.remove_icon_red} alt="" />
            </button>
            <p className='mx-2 text-white'>{cartItems[id]}</p>
            <button 
              className='text-green-500 hover:text-green-600'
              onClick={() => addToCart(id)}
              aria-label="Add more to cart"
            >
              <img className='w-6 h-6' src={assets.add_icon_green} alt="" />
            </button>
          </div> 
        )}
      </div>
      <div className='p-4'>
        <div className='flex items-center justify-between mb-2'>
          <p className='text-lg font-semibold'>{name}</p>
          <img className='w-24 h-4' src={assets.rating_starts} alt="Rating stars" />
        </div>
        <p className='text-gray-600 mb-2'>{description}</p>
        <p className='text-xl font-bold text-gray-900'>${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default FoodItem