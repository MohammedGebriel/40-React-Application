import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";

export default function CollapseNavbar() {
    const [collapse,setCollapse] = useState(false)
    return (
        <div>
            <ul className='bg-black flex items-center justify-end sm:justify-start gap-[10px] p-[10px] '>
                <li className='text-white text-[20px] hidden sm:block'><a href="/">Home</a></li>
                <li className='text-white text-[20px] hidden sm:block'><a href="/">Contact</a></li>
                <li className='text-white text-[20px] hidden sm:block'><a href="/">About</a></li>
                <li className='text-white text-[20px] hidden sm:block'><a href="/">News</a></li>
                <FaBars onClick={()=> setCollapse(!collapse)} className='text-white cursor-pointer text-[20px] sm:hidden'/>
            </ul>
            {
                collapse &&
                <div>
                    <ul className='bg-black duration-300 flex flex-col items-center sm:hidden  gap-[10px] p-[10px] '>
                        <li className='text-white text-[20px]'><a href="/">Home</a></li>
                        <li className='text-white text-[20px]'><a href="/">Contact</a></li>
                        <li className='text-white text-[20px]'><a href="/">About</a></li>
                        <li className='text-white text-[20px]'><a href="/">News</a></li>
                    </ul>
                </div>
            }
        </div>
    ) 
}
