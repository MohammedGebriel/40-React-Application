import React, { useEffect, useState } from 'react'

export default function FetchDataDynamic() {
    const [columns,setColumns] = useState([]);
    const [records,setRecords] = useState([])
    useEffect(()=> {
        fetch("http://localhost:3000/Data.json")
        .then(res => res.json())
        .then(data => {
            setRecords(data.users);
            setColumns(Object.keys(data.users[0]))
        });
    },[])

    return (
        <div className='p-[15px] lg:p-[30px] overflow-x-auto min-w-[600px]'>
            <table className='w-full border text-center ' >
                <thead>
                    <tr className='flex border-b'>
                        {
                            columns.map((column) => 
                                <th className='w-[33%] border-r p-[10px]'>{column}</th>
                            )
                        }
                        {/* <th className='w-[33%] border-r p-[10px]'>Id</th>
                        <th className='w-[33%] border-r p-[10px]'>Name</th>
                        <th className='w-[33%] p-[10px]'>Email</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        records && records.length > 0 &&
                        records.map((record)=> 
                            <tr className='flex border-b'>
                                <td className='w-[33%] p-[10px] border-r'>{record.id}</td>
                                <td className='w-[33%] p-[10px] border-r'>{record.name}</td>
                                <td className='w-[33%] p-[10px] !text-wrap'>{record.email}</td>
                            </tr>
                        )
                    }
                    
                </tbody>
            </table>
        </div>
    )
}
