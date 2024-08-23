import React, { useContext } from 'react'
import { GlobalContext } from './context/context'
import RecipesItem from './RecipesItem';

export default function FavoriteRecipes() {
    const {favoritesList} = useContext(GlobalContext)
    console.log(favoritesList);
    return (
        <div className='container mt-[50px] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px]'>
            {
                favoritesList && favoritesList.length > 0 
                ? favoritesList.map((item) => 
                <div key={item.id}>
                    <RecipesItem item={item}/>   
                </div>)
                : <div className='!w-full'>
                    <p
                    className='text-xl lg:text-4xl text-center text-black font-normal !w-full'
                    >Nothing is Added in Favorites</p>
                </div>
            }
        </div>
    )
}
