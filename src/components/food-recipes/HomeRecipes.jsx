import React, { useContext } from 'react'
import { GlobalContext } from './context/context'
import RecipesItem from './RecipesItem';

export default function HomeRecipes() {
    const {recipesList,loading} = useContext(GlobalContext)
    console.log(recipesList);
    if(loading) return <div className='container'>Loading... Please Wait!</div>
    return (
        <div className='container mt-[50px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px]'>
            {
                recipesList && recipesList.length > 0 
                ? recipesList.map((item) => 
                <div key={item.id}>
                    <RecipesItem item={item}/>   
                </div>)
                : <div className='!w-full'>
                    <p
                    className='text-xl lg:text-4xl text-center text-black font-normal !w-full'
                    >Nothing to show. Please Search Something</p>
                </div>
            }
        </div>
    )
}
