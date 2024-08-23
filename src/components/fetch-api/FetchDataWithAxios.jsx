import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function FetchDataWithAxios() {
    const [data,setData] = useState([])
    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => setData(res.data))
    },[])
    
    if(data.length > 0) {
        console.log(data);
    }   
    
    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-[23px] font-bold  my-[20px]'>
                Fetch Data from API in React With axios
            </h1>
            <table className='w-full overflow-auto border'>
                <thead className='w-full'>
                    <tr className='w-full border-b text-center'>
                        <th className='w-[20%] border-r'>Id</th>
                        <th className='w-[20%] border-r'>Name</th>
                        <th className='w-[20%] border-r'>Phone</th>
                        <th className='w-[20%] border-r'>UserName</th>
                        <th className='w-[20%]'>City</th>
                    </tr>
                </thead>
                
                <tbody>
                    {
                        data.map((row)=> (
                            <tr className='border-b'>
                                <td className='border-r p-[20px]'>{row.id}</td>
                                <td className='border-r p-[20px]'>{row.name}</td>
                                <td className='border-r p-[20px]'>{row.phone}</td>
                                <td className='border-r p-[20px]'>{row.username}</td>
                                <td className=' p-[20px]'>{row.address.city}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
