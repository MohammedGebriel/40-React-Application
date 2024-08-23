// import React, { useRef, useState } from 'react'
// import { FaRegTrashAlt } from "react-icons/fa";

// export default function TodoApp() {
//     const inputRef = useRef()
//     const [check,setCheck] = useState(false)
//     const data = [
//         {
//             id: 1,
//             action: 'HomeWork',
//             done:false,
//         },
//         {
//             id:2,
//             action: 'Exercise',
//             done:false,
//         },
//     ]
//     const [lists,setLists] = useState(data);

//     function handleSubmit(e) {
//         e.preventDefault();
//         const value = e.target.elements.add.value;
//         const newList = {
//             id: Math.floor(Math.random() * 10000),
//             action: value
//         };
//         setLists(lists.concat(newList));
//         inputRef.current.value = ''
//     }

//     function handleDelete(id) {
//         const newList = lists.filter((list) =>
//             id !== list.id 
//         )
//         setLists(newList)
//     }

//     function handleCheck(id) {
//         const newList = lists.map((li) =>
//             id === li.id ? {...li,done:!check} : li
//         )
//         setLists(newList)
//     }

//     return (
//         <div className='h-screen flex justify-center items-center px-[20px] bg-[#333]'>
//             <div className='w-full lg:w-[450px] bg-white p-[20px] px-[40px] rounded text-center'>
//                 <h2 className=' font-bold text-[48px] mb-[20px]'>Todo App</h2>
//                 <form onSubmit={handleSubmit} action="" className="add flex mb-[20px]">
//                     <input  ref={inputRef} name='add' type="text" className='grow text-[18px] border p-[10px] outline-none rounded-s-lg' />
//                     <button className='p-[10px] bg-[#26c233] rounded-e-lg'>Add</button>
//                 </form>
//                 <div className="lists">
//                     {lists.map((list) => 
//                     <div className='flex justify-between mb-[20px]'>
                        
//                         <p className={`${list.done ? 'line-through' : ''}`} >{list.action}</p>
//                         <div className="actions flex gap-3 items-center ">
//                             <span onClick={()=> setCheck(!check)}>
//                                 <input onClick={()=> handleCheck(list.id)}  className='w-full h-full' type="checkbox" name="" id="" />
//                             </span>
//                             <FaRegTrashAlt onClick={()=> handleDelete(list.id)} className=' text-red-700 cursor-pointer'/>
//                         </div>
//                     </div>
//                     )}
//                 </div>
//             </div> 
//         </div>
//     )
// }




import React from 'react'
import { useState } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";

export default function TodoApp() {
    const [select,setSelcet] = useState(false)
    const [lists,setLists] = useState(
        [
            {
                id:1,
                action: 'HomeWork',
                check:select,
            },
            {
                id:2,
                action: 'Exercise',
                check: select,
            }
        ]
    )
    function handleAdd(e) {
        e.preventDefault();
        const value = e.target.elements.input.value;
        const newList = {
            id: Math.floor(Math.random() * 1000000),
            action: value,
        }
        setLists(lists.concat(newList))
        e.target.elements.input.value = ''
    }

    function handleRemove(id) {
        const newList = lists.filter((list) => list.id !== id)
        setLists(newList)
    }

    function handleUpdate(id) {
        const newList = lists.map((li) => 
        id === li.id ? {...li ,check:!select} : li
        )
        setLists(newList)
    }

    return (
        <div className='h-screen flex justify-center  px-[20px] bg-[#333]   '>
            <div className='w-full lg:w-[400px] mt-[100px] h-fit  bg-slate-300 text-center p-[15px] px-[30px] rounded'>
                <h1 className='text-[48px] font-bold mb-[20px]'>Todo App</h1>
                <form onSubmit={handleAdd} action="" className="add flex mb-[20px]">
                    <input className='grow p-[15px] rounded-s-lg outline-none' type="text" name="input" id="" />
                    <button className='bg-[#21b158] p-[10px] rounded-e-lg text-white font-medium'>Add</button>
                </form>
                <div className="lists">
                    {
                        lists.map((list) => 
                            <div className='flex items-center justify-between mb-[10px]'>
                                <p className={`${list.check ? 'line-through' : ''}`}>{list.action}</p>
                                <div className="actions flex items-center gap-2">
                                    <span onClick={()=> setSelcet(!select)}>
                                        <input onClick={()=> handleUpdate(list.id)} className='w-full h-full block' type="checkbox" name="" id="" />
                                    </span>
                                    <FaRegTrashAlt onClick={()=> handleRemove(list.id)} className='cursor-pointer'/>
                                </div>
                            </div>
                        )
                    }       
                </div>
            </div>
        </div>
    )
}
