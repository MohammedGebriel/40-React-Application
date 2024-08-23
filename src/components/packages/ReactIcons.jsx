import React from 'react'
import { FaYoutube,FaFacebookF ,FaSkype,FaSnapchatGhost ,FaYahoo ,FaUser ,FaRegTrashAlt   } from "react-icons/fa";

import { Helmet } from 'react-helmet';
export default function ReactIcons() {
    return (
        <div className='flex flex-col items-center justify-center bg-[#888] p-[50px] my-[100px]'>
            <Helmet>
                <title>React Packages</title>
                <meta charSet='utf-8'/>
                <meta name='description' content=''/>
                <meta name='keywords' content=''/>
            </Helmet>
            <h1 className='text-[30px] font-bold mb-[20px]'>React Icons Package</h1>
            <div className="icons flex flex-wrap gap-3">
            <FaFacebookF className='w-[40px] h-[40px] text-[#2660ac] hover:text-[#333] duration-300'/>
            <FaYoutube className='w-[40px] h-[40px] text-[#2660ac] hover:text-[#333] duration-300'/>
            <FaSkype className='w-[40px] h-[40px] text-[#2660ac] hover:text-[#333] duration-300'/>
            <FaSnapchatGhost className='w-[40px] h-[40px] text-[#2660ac] hover:text-[#333] duration-300'/>
            <FaYahoo className='w-[40px] h-[40px] text-[#2660ac] hover:text-[#333] duration-300'/>
            <FaUser className='w-[40px] h-[40px] text-[#2660ac] hover:text-[#333] duration-300'/>
            <FaRegTrashAlt className='w-[40px] h-[40px] text-[#2660ac] hover:text-[#333] duration-300'/>
            </div>
        </div>
    )
}
