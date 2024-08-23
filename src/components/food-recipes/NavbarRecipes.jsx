import React, { useContext } from 'react'
import { GlobalContext } from './context/context'
import { Link } from 'react-router-dom';


export default function NavbarRecipes() {

    const {searchParam,setSearchParam,handleSubmit} = useContext(GlobalContext)
    console.log(searchParam);
    return (
            <div className='pt-[30px] container flex flex-col md:flex-row gap-[20px] md:gap-0 justify-between items-center '>
                <Link to="/food-recipes" className='text-[30px] font-medium'>Food Recipes</Link>
                <form action="" onSubmit={handleSubmit}>
                    <input 
                    className='lg:w-[300px] rounded-l-full  focus:outline-none p-[10px] px-[20px] bg-white/55  shadow-lg border border-red-300' 
                    type="text" name="" id=""
                    placeholder='Enter a Fruit....'
                    value={searchParam}
                    onChange={(event) => setSearchParam(event.target.value)}
                    />
                    <button className='p-[10px] bg-[#2cb120] text-white rounded-r-full shadow-lg px-[15px]'>Submit</button>
                </form>
                <ul>
                    <li className='flex gap-[20px]'>
                        <Link to='/food-recipes' className='text-[20px] '>
                        Home
                        </Link>
                        <Link to='/food-recipes/favorites' className='text-[20px] '>
                        Favorites
                        </Link>
                        {/* <a href="/" className='text-[20px] '>
                            Home
                        </a>
                        <a href="/favorites" className='text-[20px] '>
                            Favorites
                        </a> */}
                    </li>
                </ul>
            </div>
    )
}
