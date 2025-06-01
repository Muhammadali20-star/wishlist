import React from 'react'
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist } from '../../redux/features/wishlist.slice';

const Heart = () => {
    const wishlist = useSelector((state) => state.wishlist);
    const dispatch = useDispatch();
    const handleRemove = (id) => {
        dispatch(removeFromWishlist(id));
      };
    
    
  return (
    <div className='container mx-auto'>
            <div className='grid  sm:grid-cols-2  lg:grid-cols-4 gap-6 py-10 px-4'>
            {wishlist?.map((recipe) => (
                <div key={recipe.id} className='bg-white shadow-lg px-4 rounded-[12px]'>
                 <div className="relative">
                  <img loading='lazy' src={recipe.image}  alt={recipe.title}  />
                  <button onClick={()=> handleRemove(recipe.id)} className="absolute top-2 right-2 text-xl text-gray-600 hover:text-blue-600" ><FaHeart className='text-[#8967F0]' /></button>
                 </div>
                 <div className='flex flex-col gap-2 py-4'>
                 <h2><span className='font-bold'>name:</span> {recipe.name}</h2>
                 <h2><span className='font-bold'>prepTimeMinutes:</span> {recipe.prepTimeMinutes}</h2>
                 <h2><span className='font-bold'>cookTimeMinutes:</span> {recipe.cookTimeMinutes}</h2>
                 <h2><span className='font-bold'>servings:</span> {recipe.servings}</h2>
                 <h2><span className='font-bold'>difficulty:</span> {recipe.difficulty}</h2>
                 <h2><span className='font-bold'>cuisine:</span> {recipe.cuisine}</h2>
                 <h2><span className='font-bold'>caloriesPerServing:</span> {recipe.caloriesPerServing}</h2>
                 </div>
                </div>
            ))}
            </div>
        </div>
  )
}

export default React.memo(Heart)