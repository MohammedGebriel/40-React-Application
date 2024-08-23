// import React, { useState } from 'react'

// export default function SearchBar() {
//     const [data,setData] = useState([])
//     const [value,setValue] = useState('')

//     const handleChange = async (e) => {
//         setValue(e.target.value);
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const result = await response.json();
//         setData(result);


//     }
//     console.log(data);
    

//     return (
//         <div className='my-[30px] flex justify-center text-center'>
//             <div>
//                 <div className='flex mb-[20px] justify-center'>
//                     <input onChange={handleChange} value={value} type="text" className='border  p-[10px] outline-none w-[250px]'/>
//                     <button className='p-[10px] bg-[#22be56] text-white '>Search</button>
//                 </div>
//                 <div className="suggestion">
//                     {   
//                         value &&
//                         data.filter((item) => item.title.startsWith(value) && item.title !== value)
//                         .slice(0,5)
//                         .map((item) => 
//                             <p className='border-b-[2px]' onClick={()=> setValue(item.title)}>{item.title}</p>
//                         )
//                     }
//                 </div>
//             </div>
//         </div>
//     )
// }



import React, { useState } from 'react'

export default function SearchBar() {
    const [value,setValue] = useState('')
    const [data,setData] = useState([])
    const handleChange = async (e) => {
        setValue(e.target.value)
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const result = await response.json();
        setData(result)
    }
    console.log(data);
    

    return (
        <div className=' flex justify-center p-[20px] py-[30px]'>
            <div>
                <div className='flex justify-center mb-[20px]'>
                    <input onChange={handleChange} value={value} type="text"  className='border outline-none p-[10px] w-[250px]' />
                    <button className='bg-[#28be22] p-[10px] text-white'>Search</button>
                </div>
                <div className="suggestion text-center">
                    {
                        value && 
                        data.filter((item) => item.title.startsWith(value) && item.title !== value)
                        .slice(0,5)
                        .map((item)=> 
                            <p onClick={()=> setValue(item.title)} className='border-b-2 mb-2 pb-2'>{item.title}</p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

