import axios from 'axios'
import React, { useEffect } from 'react'


export default function AxiosCalls() {

    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=> console.log(res))
        .catch((err)=> console.error(err))
    },[])


    useEffect(()=> {
        axios.post('https://jsonplaceholder.typicode.com/posts',{
            title : 'Hello World',
            body: "Lorem Ipsum",
            userId: 1
        })
        .then((res)=> console.log(res))
        .catch((err)=> console.error(err))
    },[])


    useEffect(()=> {
        axios.patch('https://jsonplaceholder.typicode.com/todos/1',{
            completed: true,
            id: 3
            
        })
        .then((res)=> console.log(res))
        .catch((err)=> console.error(err))
    },[])
    

    useEffect(()=>{
        axios.delete('https://jsonplaceholder.typicode.com/todos/1')
        .then((res)=> console.log(res))
        .catch((err)=> console.error(err))
    },[])

    useEffect(()=> {
        axios.all([
            axios.get('https://jsonplaceholder.typicode.com/posts'),
            axios.get('https://jsonplaceholder.typicode.com/users')
        ]).then(axios.spread((posts,users)=>console.log(posts,users)))
        .catch((err)=> console.error(err))
    },[])

    
    return (
        <div className='h-screen flex justify-center items-center text-center'>
            <div>
                <p>AxiosCalls</p>
                <p>Look at The Console</p>
            </div>
        </div>
    )
}
