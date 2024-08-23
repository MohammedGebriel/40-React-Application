import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";

export default function RatingStar() {
    const [rating,setRating] = useState()
    const [hover,setHover] = useState()
    
    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex)
    }
    function handleMouseEnter(getCurrentIndex) {
        setHover(getCurrentIndex)
    }
    function handleMouseLeave() {
        setHover(rating)
    }
console.log(rating)
    return (
        <div className='flex justify-center h-screen items-center'>
            {
                [...Array(9)].map((_,index) => {
                    index += 1
                    return <FaStar
                    key={index}
                    onClick={()=> handleClick(index)}
                    onMouseOver={()=> handleMouseEnter(index)}
                    onMouseLeave={()=> handleMouseLeave(index)}
                    className={` duration-200 cursor-pointer ${index <= (rating || hover) ? 'text-[#fff700]' : "text-[#000]"}`}
                    size={40}/>
                })
            }
        </div>
    )
}
