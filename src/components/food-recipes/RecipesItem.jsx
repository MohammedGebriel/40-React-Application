import React from 'react'
import { Link } from 'react-router-dom'

export default function RecipesItem({item}) {
    return (
        <div className='flex flex-col  overflow-hidden p-3 bg-white/75 shadow-xl gap-3 border-2 rounded-2xl border-white'>
            <div className="h-40   overflow-hidden  ">
                <img className='min-h-full w-full' src={item.image_url}  alt="" />
            </div>
            <div>
                <span
                className='text-sm text-cyan-700 font-medium'
                >{item.publisher}</span>
                <h3 className='font-bold text-2xl truncate text-black'>{item.title}</h3>
                <Link
                className='mt-[20px] text-sm p-3 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white'
                to={`/food-recipes/recipes-item/${item.recipe_id}`}>
                    Recipe Details
                </Link>
            </div>
        </div>
    )
}
