import  { useEffect, useState } from 'react'

export default function useFetch(url) {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    async function fetchData() {
        setLoading(true)
        try{
            const response = await fetch(url);
            if(!response.ok) throw Error(response.statusText);
            const result = await response.json();
            if(data) {
                setData(result);
                setLoading(false);
                setError(null);
            }
        }catch(e){
            setError(`${e}. Some Error Occurred`);
            setLoading(false)
        }
    }

    useEffect(()=> {
        fetchData();
    },[url])

    return {data,error,loading};
}
