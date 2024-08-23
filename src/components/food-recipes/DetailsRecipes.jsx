import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from './context/context';

export default function DetailsRecipes() {
  const {id} = useParams()
  const {recipeDetailsData,setRecipeDetailsData,handleAddToFavorites,favoritesList} = useContext(GlobalContext)
  
  useEffect(()=> {
    async function getRecipeDetails() {
      const response = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
      const data = await response.json()
      if(data) {
        setRecipeDetailsData(data?.recipe)
      }
    }
    getRecipeDetails()
  },[id])
  return (
    <div className='container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10'>
      <div className='row-start-2 lg:row-start-auto'>
        <div className="h-96 overflow-hidden rounded-xl group">
          <img src={recipeDetailsData.image_url} alt=""
            className='w-full h-full object-cover block group-hover:scale-110 duration-300'
            />
        </div>
      </div>
      <div>
        <span
        className='text-sm text-cyan-700 font-medium'
        >{recipeDetailsData.publisher}</span>
        <h3
          className='font-bold text-2xl  truncate text-black'
        >{recipeDetailsData.title}
        </h3>
        <div>
          <button onClick={() => handleAddToFavorites(recipeDetailsData)} className='mt-[20px] text-sm p-3 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white'>
            {favoritesList.findIndex(item => item.id === recipeDetailsData.id) === -1
            ? "Save as favorites"
            : "Remove From favorites"
            }
            
          </button> 
        </div>
        <div>
          <span className='text-2xl font-semibold text-black mt-[10px] inline-block'>Ingredients:</span>
          <ul>
            {   
              recipeDetailsData.ingredients?.map(item => <li>
                {item}
              </li>)
            }
          </ul>
        </div>
      </div>
      

    </div>
  )
}
