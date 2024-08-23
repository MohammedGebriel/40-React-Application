import axios from 'axios'
import React, { useEffect, useState } from 'react'



export default function JsonServer() {
    const [data,setData] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:8000/users')
        .then((res) => setData(res.data))
        .catch(err => console.log(err))
    },[])

    if(data.length > 0) {
        console.log(data)
    }
    
    return (
        <div className='p-[30px]'>
            <table className='w-full border text-center' >
                <thead>
                    <tr className='flex border-b'>
                        <th className='w-[33%] border-r p-[10px]'>Id</th>
                        <th className='w-[33%] border-r p-[10px]'>Name</th>
                        <th className='w-[33%] p-[10px]'>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.length > 0 &&
                        data.map((row)=> 
                            <tr className='flex border-b'>
                                <td className='w-[33%] p-[10px] border-r'>{row.id}</td>
                                <td className='w-[33%] p-[10px] border-r'>{row.name}</td>
                                <td className='w-[33%] p-[10px]'>{row.email}</td>
                            </tr>
                        )
                    }
                    
                </tbody>
            </table>
        </div>
    )
}
