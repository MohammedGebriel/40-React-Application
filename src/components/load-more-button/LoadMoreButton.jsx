import React, { useEffect, useState } from 'react'

export default function LoadMoreButton() {
    const [product,setProduct] = useState([]);
    const [loading,setLoading] = useState(false);
    // const [errMsg,setErrMsg] = useState(null);   
    const [count,setCount] = useState(1);
    const [disableButton,setDisableButton] = useState(false)

    function handleMore(e) {
        setCount(count + 1)
        if(count >= 5) {
            setDisableButton(true)
        }
    }
    async function fetchProduct() {
        
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=${count * 20}&skip=0&select=title,price`)
            const result = await response.json()
            if(result) {
                setProduct(result.products);
                setLoading(false);
            }
        }catch(e) {
            // setErrMsg(e.message)
            setLoading(false)
        }
    }
    
    useEffect(()=> {
        fetchProduct()
    },[count])

    console.log(product)

    if(loading) {
        return <div>Loading Data ! Please Wait</div>
    }
    // if(errMsg !== null) {
    //     return <div>Error occurred</div>
    // }

    return (
        <div className='p-[20px]'>
            <h1 className='text-[30px] font-bold text-center mb-2'>Load More</h1>
            <div className='grid grid-cols-3 gap-2'>
                {
                    product && product.length 
                    ? product.map((item) => (
                        <div key={item.id} className='border p-[10px] flex flex-col gap-[10px]'>
                            <h1>{item.title}</h1>
                            <h3>{item.price}</h3>
                        </div>
                    ))
                    : null
                }
            </div>
            <div className='flex justify-center'>
                <button 
                disabled= {disableButton}
                className={`p-[10px] border mt-[10px] rounded text-[20px] bg-[#666] w-fit ${disableButton && 'hidden'}`}
                onClick={()=> handleMore()}>Load More Button</button>
            </div>
            {
                disableButton
                ? <div className='text-center mt-[10px]'> You Reached 100 products</div>
                : null
            }

        </div>
    )
}
