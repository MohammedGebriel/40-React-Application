import React, { useRef } from 'react'
import useFetch from '../use-fetch/useFetch'

export default function ScrollToTopAndBottom() {
    const {data,loading,error} = useFetch('https://dummyjson.com/products?limit=100&skip=0&select=title,price');
    const ref = useRef()

    if(loading) {
        return <h1>Data Loading ! Please Wait</h1>
    }

    if(error) {
        return <h1>Error Occurred ! Please Try Again</h1>
    }

    function handleScrollToTop() {
        window.scrollTo({
            left:0,
            top:0,
            behavior: "smooth"
        })
    }

    function handleScrollToBottom() {
        ref.current.scrollIntoView({behavior:"smooth"})
    }

    return (
        <div className='flex justify-center text-center my-[20px]'>
            <div>
                <h1 className='my-[15px] font-bold text-[35px]'>Scroll To Top And Bottom</h1>
                <h3 className='my-[15px] font-bold text-[25px]'>This is the top Section</h3>
                <button onClick={()=>handleScrollToBottom()} className='border mb-[10px] p-2 rounded text-white bg-[#44babe]'>Scroll To Bottom</button>
                { data && data.products && data.products.length
                ?   data.products.map(item => 
                    <p key={item.id}>
                        {item.title}
                    </p>)
                : null
                }
                <h3 className='my-[15px] font-bold text-[25px]'>This is the Bottom Section</h3>
                <div ref={ref}></div>
                <button onClick={()=> handleScrollToTop()} className='border mb-[10px] p-2 rounded text-white bg-[#44babe]'>Scroll To Top</button>
            </div>
        </div>
    )
}
