import React, { useEffect, useState } from 'react'

export default function GithubProfileFinder() {
    const [username,setUsername] = useState('mohammedGebriel');
    const [userData,setUserData] = useState([]);
    const [loading,setLoading] = useState(false)
    console.log(username);

    async function fetchGithubUserData() {
        setLoading(true)
        const response = await fetch(`https://api.github.com/user`);
        const data = await response.json();

        if(data) {
            setUserData(data)
            setLoading(false)
            setUsername('')
        }
    }


    useEffect(()=> {
        fetchGithubUserData()
    },[])
    console.log(userData)


    if(loading) {
        return <h1>Loading data ! Please Wait</h1>
    }

    return (
        <div className='flex justify-center mt-[20px]'>
            <div>
                <input 
                className='border p-[10px] w-[250px] text-black'
                type="text"
                name='search-by-username'
                placeholder='Search Github Username...'
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                />
                <button  className='p-[10px] h-full font-bold bg-[#36a9c5]'>Search</button>
            </div>
        </div>
    )
}
