import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
    const {id} = useParams()
    console.log(id);

    const [product,setProduct] = useState([])
    useEffect(()=> {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res => setProduct(res.data))
    },[])
    
    
    return (
        <div className='flex flex-col lg:flex-row p-[20px] gap-[30px]'>
            <div className="image w-full flex justify-center">
                <img className='h-[400px] w-full lg:w-[400px]' src={product.image} alt="" />
            </div>
            <div className="details flex flex-col gap-[10px]">
                <p className='text-[18px] font-medium'>category: <span className='text-green-600 text-[22px]'>{product.category}</span></p>
                <h1 className=' font-bold text-[20px]'>{product.title}</h1>
                <h1 className=' font-bold text-[25px]'>Price : <span className='text-red-600 text-[28px]'>{product?.price}</span></h1>
                <p className='text-[22px]'>Count: {product?.rating?.count}</p>
                <p className='text-[22px]'>Rate: {product?.rating?.rate}</p>
                <p className='text-[20px] '>{product.description}</p>
            </div>
        </div>
    )
}
