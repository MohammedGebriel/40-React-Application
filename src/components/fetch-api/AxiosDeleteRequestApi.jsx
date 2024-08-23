import axios from 'axios'
import React, {  useState } from 'react'

export default function AxiosDeleteRequestApi() {
    const [data,setData] = useState([])
    
    if(data.length > 0 ) {
        console.log(data)
    }

    const handleFetch = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => setData(res.data))
    }

    const handleRemove = ()=> {
        axios.delete('https://jsonplaceholder.typicode.com/posts')
        .then(alert("Request Deleted")
        )
        setData([])
    }

    return (
        <div className=' min-h-screen flex flex-col px-[20px] pt-[50px] items-center  bg-[#333]'>
            <div  className='w-full mb-[30px]  h-fit md:w-[400px] bg-white p-[20px] rounded '>
                <div className='w-full flex justify-center mb-[20px]'>
                    <button onClick={handleFetch}  className='bg-[#1d4b86] text-white rounded p-[8px] w-fit '>
                        Fetch Request
                    </button>
                </div>

                <div className='w-full flex justify-center'>
                    <button onClick={handleRemove}  className='bg-[#1d4b86] text-white rounded p-[8px] w-fit '>
                        Delete Request
                    </button>
                </div>
            </div> 
            <div>
                {data.length > 0 && data.map((post,i)=> (
                    <p key={i} className='text-white text-center'>{post.title}</p>
                ))}
            </div>
        </div>
    )
}
