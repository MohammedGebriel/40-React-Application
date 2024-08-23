import React, { useEffect, useState } from 'react'

// 'https://dummyjson.com/users' 

export default function SearchAutocomplete() {
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchParam,setSearchParam] = useState('');
    const [filteredUsers,setFilteredUsers] = useState([]);
    const [showDropDown,setShowDropDown] = useState(false);


    
    function handleClick(event) {
        setSearchParam(event.target.innerText);
        setShowDropDown(false)
        setUsers([])
    }
    
    function handleChange(event) {
        let query = event.target.value.toLowerCase();
        setSearchParam(query);
        if(query.length > 1) {
            const filteredData =
                users && users.length
                ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
                : [];
            setFilteredUsers(filteredData); 
            setShowDropDown(true)
        }else {
            setShowDropDown(false)
        }
    }
    


    async function fetchUsers()  {
        try {
            setLoading(true);
            const response = await fetch('https://dummyjson.com/users');
            const result = await response.json();
            if(result) {
                setUsers(result.users.map(userItem => userItem.firstName));
                setLoading(false);
                setError(null);
            }
        }catch(e) {
            setError(e)
            setLoading(false)
        }
    }

    
    useEffect(()=> {
        fetchUsers()
    },[])
    


console.log(users);
console.log(filteredUsers);

    return (
        <div className='h-screen flex flex-col gap-[20px] items-center mt-[30px]'>
            {
                loading 
                ? 
                    <h1 className='text-[30px] font-bold'>Loading Data... Please Wait!</h1>
                : 
                <div>
                    <input 
                    type="text"
                    placeholder='Search Users Here'
                    className='border px-[20px] py-[10px] outline-none min-w-[250px] text-[18px]'
                    value={searchParam}
                    onChange={handleChange}
                    
                    />
                </div>
            }

            {
                showDropDown
                ? <ul onClick={handleClick}>
                    {
                        filteredUsers.map((user)=> 
                        <li>
                            {user}
                        </li>)
                    }
                </ul>
                : null
            }
        </div>
    )
}
