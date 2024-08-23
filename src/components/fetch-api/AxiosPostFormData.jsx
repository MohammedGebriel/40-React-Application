import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function AxiosPostFormData() {
    const [data,setData] = useState([])
    const [post,setPost] = useState({
        title: '',
        body: ''
    })
    const handleChange = (event) => {
        setPost({...post, [event.target.name]: event.target.value})
    }
    console.log(post)



    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => setData(res.data))
    },[])

    // console.log(data)
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts',[
            ...data,
            post
        ])
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => console.log(res)
        )
    }


    return (
        <div className=' h-screen flex justify-center items-center bg-[#333] p-[20px]'>

            <form onSubmit={handleSubmit} action="" className='w-full md:w-[400px] bg-white p-[20px] rounded '>
                <h1 className='text-[20px] font-bold mb-[20px] text-center'>Look at The Console</h1>
                <div className='flex flex-col  mb-[20px]'>
                    <h2 className='text-[24px] mb-[5px]'>Title:</h2>
                    <input onChange={handleChange} type="text" name='title' className='border p-[8px] w-full'/>
                </div>

                <div className='flex flex-col  mb-[20px]'>
                    <h2 className='text-[24px] mb-[5px]'>Body:</h2>
                    <input onChange={handleChange} type="text" name='body' className='border p-[8px] w-full'/>
                </div>

                <button  type="submit" className='bg-[#1d4b86] text-white rounded p-[8px] w-fit '>
                    Submit
                </button>
            </form> 

        </div>
    )
}
