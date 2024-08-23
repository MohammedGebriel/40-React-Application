import React from 'react'
import { Link } from 'react-router-dom'

export default function MainCard({img,title,link}) {
    return (
        <div className="card p-[16px] rounded-[15px]">
            <div className="image">
            <img src={img} className="rounded w-full h-[200px] max-h-[200px]" alt="" />
            </div>
            <h1 className="title text-[20px] md:text-[24px] xl:text-[26px] font-bold py-[15px] text-center">
                {title}
            </h1>
            <div className='flex justify-center'>
                <Link
                    to={link}
                    className="border-2 border-[#353535] hover:bg-[#353535] hover:text-white duration-300 p-[10px] w-fit rounded-full text-[#353535] font-medium"
                >
                    Go to App
                </Link>
            </div>
        </div>
    )
}
