import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../../redux/features/wishlist.slice';

const Products = ({data}) => {
  const dispatch = useDispatch();

  const handleAddToWishlist = (recipe) => {
    dispatch(addToWishlist(recipe));
  };
  return (
    <div className='container mx-auto'>
      <h2 className='text-center text-4xl font-semibold text-gray-800'>Recipe</h2>
        <div className='grid  sm:grid-cols-2  lg:grid-cols-4 gap-6 py-10 px-4'>
        {data?.map((recipe) => (
            <div key={recipe.id} className='bg-white shadow-lg px-4 rounded-[12px]'>
             <div className="relative">
              <img loading='lazy' src={recipe.image}  alt={recipe.title}  />
              <button onClick={()=> handleAddToWishlist(recipe)} className="absolute top-2 right-2 text-xl text-gray-600 hover:text-blue-600" ><FaRegHeart className='text-blue-500' /></button>
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

export default React.memo(Products)