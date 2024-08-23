import React from 'react'
import useFetch from './useFetch'

export default function UseFetchHookTest() {
    const {data,loading,error} = useFetch(
        "https://dummyjson.com/products?limit=120&skip=0&select=title,price"
    );


    return (
        <div className='flex justify-center text-center my-[20px]'>
            <div>
            <h1 className='text-[35px] font-bold mb-[10px] '>Use Fetch Hook</h1>
            {
                loading ? <h3>Loading Data ! Please Wait</h3> : null
            }
            {
                error ? <h3>Error Occurred</h3> : null
            }
            {
                data && data.products && data.products.length 
                ? data.products.map((productItem,index) => <p key={index} className='my-[5px]'>{productItem.title}</p>)
                : null
            }
            </div>
        </div>
    )
}
