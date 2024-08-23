import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({image,title,link}) {
    return (
        <div className="products-card border rounded-lg p-[20px] overflow-hidden">
            <div className="image ">
                <img className='w-full h-[250px]' src={image} alt="" />
            </div>
            <h1 className='font-bold text-[28px] my-[15px] truncate '>{title}</h1>
            <div className=" flex flex-col items-center">
                <Link to={link} className='p-[10px] bg-[#333] w-fit text-white rounded'>More Details</Link>
            </div>
        </div>
    )
}
