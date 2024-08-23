import React, { useEffect, useState } from 'react'

export default function ModernFetch() {
    const [data,setData] = useState([]);

    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await response.json();
        setData(result);
    }
    useEffect(()=>{
        fetchData()
    },[])
    if(data.length > 0) {
        console.log(data);
    }

    return (
        <div>
            <ul>
                {
                    data.map((user,i)=> 
                        <li>{user.id} || {user.name}</li>
                    )
                }
            </ul>
        </div>
    )
}
