import React, { useEffect, useState } from 'react'

import { FaArrowCircleLeft , FaArrowCircleRight  } from "react-icons/fa";


export default function ImageSlider({url}) {
    const [images,setImages] = useState([]);
    const [loading,setLoading] = useState(false);
    const [errMsg,setErrMsg] = useState(null);
    const [currentSlide,setCurrentSlide] = useState(0)

    function handlePrevious( ) {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1 )
    }
    function handleNext() {
        setCurrentSlide(currentSlide ===  images.length - 1 ? 0 : currentSlide + 1 )
    }

    async function getImages(getUrl) {
        try{
            setLoading(true)
            const response = await fetch(getUrl);
            const data = await response.json()
            if(data && data.length) {
                setImages(data)
                setLoading(false)
            }
        }catch(e) {
            setErrMsg(e.errMsg)
            setLoading(false)
        }
    }

    useEffect(()=> {
        if(url !== '') {
            getImages(url)
            
        }
        
    },[url])
    console.log(images)

    if(loading) {
        return <div>Loading data ! Please Wait</div>
    }
    
    if(errMsg !== null) {
        return <div>Error Occurred {errMsg}</div>
    }

    return (

        <div className="h-screen flex p-[20px] justify-center items-center">
            <div className='flex relative w-[600px] h-[450px] justify-center items-center'>
            <FaArrowCircleLeft onClick={()=> handlePrevious()} className='text-[30px] text-white absolute left-[16px] cursor-pointer'/>
            {
                images && images.length 
                ? 
                images.map((imageItem,index)=> (
                    <img
                    className={` ${currentSlide !== index ? 'hidden' : ''} duration-200 rounded-lg shadow-lg w-full h-full `}
                
                    key={imageItem.id}
                    src={imageItem.download_url}
                    alt={imageItem.download_url}
                    />
                ))
                :null
            }
            <FaArrowCircleRight onClick={()=> handleNext()} className='text-[30px] text-white absolute right-[16px] cursor-pointer'/>
            <div className="bullets flex gap-[5px] absolute bottom-[30px]">
                {
                    images && images.length
                    ? images.map((_,index) => 
                        <button className={` ${currentSlide === index ? '!bg-[#333]': '' } w-[15px] h-[15px] rounded-full bg-[white] z-10`}></button>
                    )
                    : null
                }
            </div>
        </div>
        </div>
    )
}
