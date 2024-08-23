import React, { useEffect, useState } from 'react'

export default function ScrollIndicator() {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [errorMessage,setErrorMessage] = useState(null)

    const [scrollPercentage,setScrollPercentage] = useState(0)

    async function FetchData() {
        try{
            setLoading(true)
            const response = await fetch('https://dummyjson.com/products?limit=100&skip=0&select=title,price');
            const data = await response.json();

            if(data) {
                setData(data.products)
                setLoading(false)
            }

        }catch(e) {
            setErrorMessage(e.message);
            setLoading(false)
        }
    }

    useEffect(()=> {
        FetchData()
    },[])


    function handleScrollPercentage( ) {
        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercentage((howMuchScrolled / height ) * 100)

    }
    useEffect(()=> {
        window.addEventListener('scroll', handleScrollPercentage);
        return () => {
            window.removeEventListener('scroll', ()=>{})
        }
    },[])

    console.log(scrollPercentage);
    
    if(loading) {
        return <div>Data Loading ! Please Wait</div>
    }
    
    if(errorMessage !== null) {
        return <div>Error Occured</div>
    }

    return (
        <div>
            <div className='sticky top-0'>
                <h1 className='bg-slate-300 text-center p-[20px] text-[25px] font-bold'>Custom Scroll Indicator</h1>
                <div className='h-[10px] relative  bg-orange-500'>
                    <span
                        style={
                            {
                                width: `${scrollPercentage}%`
                            }
                        }
                        className={`h-[10px] absolute z-10 left-0  bg-blue-200 `}></span>
                </div>
            </div>
            <div className='flex flex-col items-center gap-3 py-3'>
                {
                    data && data.length > 0 
                    ?   data.map((dataItem) => <p className='text-[20px]'>{dataItem.title}</p>)
                    : null
                }   
            </div>
        </div>
    )
}
