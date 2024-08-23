// import React, { useState } from 'react'
// import CRUDAddItem from './CRUDAddItem'
// import CRUDEditItem from './CRUDEditItem';
// export default function SimpleCRUD() {
//     const data = [
//         {
//             id:1,
//             name: "Gabriel",
//         },
//         {
//             id:2,
//             name: "Mohammed",
//         }
//     ]
//     const [lists,setLists] = useState(data);
//     const [updateState,setUpdateState] = useState(null)
//     function handleDelete(id) {
//         const newList = lists.filter((list) => list.id !== id)
//         setLists(newList)
//     }
//     function handleUpdate(id) {
//         setUpdateState(id)
//     }
//     return (
//         <div className=' h-screen flex justify-center items-center'>
//             <div className='w-[400px] bg-[#777] p-[20px] rounded'>
//                 <CRUDAddItem lists={lists} setLists={setLists} />
//                 {
//                     lists.map((li)=> 
//                     <div>
//                         {
//                         updateState === li.id
//                         ? 
//                             <CRUDEditItem setUpdateState={setUpdateState}  setLists={setLists} lists={lists} SingleList={li} />
//                         :
//                             <div className='my-[10px] flex justify-between items-center'>
//                                 <p className=''>{li.name}</p>
//                                 <div className='flex gap-[10px]'>
//                                     <button onClick={()=> handleUpdate(li.id)} className=' bg-[#228799] p-[5px] rounded text-white'>Edit</button>
//                                     <button onClick={()=> handleDelete(li.id)} className=' bg-red-500 p-[5px] rounded'>Delete</button>
//                                 </div>
//                             </div>
//                     }
//                     </div>
//                     )
//                 }
//             </div>
//         </div>
//     )
// }



// import React, { useState } from 'react'
// import CRUDAddItem from './CRUDAddItem'
// import CRUDEditItem from './CRUDEditItem'
// export default function SimpleCRUD() {
//     const data = [
//         {
//             id:1,
//             name: 'Gabriel',
//         },
//         {
//             id:2,
//             name: 'Mohammed'
//         },
//     ]
//     const [lists,setLists] = useState(data)
//     const [updateState,setUpdateState] = useState(false)

//     function handleDelete(id) {
//         const newList = lists.filter(
//             (list) =>  id !== list.id
//         )
//         setLists(newList)
//     }

//     function handleUpdate(id) {
//         setUpdateState(id)
//     }


//     return (
//         <div className='h-screen flex justify-center items-center'>
//             <div className='w-[400px] bg-slate-400 p-[20px]'>
//                 <CRUDAddItem lists={lists} setLists={setLists}/>
//                 <div>
//                     {lists.map((li)=>
//                         <div>
//                             {
//                                 updateState === li.id
//                                 ?
//                                 <CRUDEditItem singleList={li} lists={lists} setLists={setLists} setUpdateState={setUpdateState} />
//                                 : 
//                                 <div className='flex justify-between items-center mb-[20px]'>
//                                 <p>{li.name}</p>
//                                 <div className='flex gap-2'>
//                                     <button onClick={()=> handleUpdate(li.id)} className='bg-[#2abeb7] text-white p-[5px] rounded'>Edit</button>
//                                     <button onClick={()=> handleDelete(li.id)} className='bg-[#c53030] text-white p-[5px] rounded'>Delete</button>
//                                 </div>
//                             </div>
//                             }
//                         </div>
//                 )}
//                 </div>
//             </div>
//         </div>
//     )
// }


import React, { useState } from 'react'
import CRUDAddItem from './CRUDAddItem'
import CRUDEditItem from './CRUDEditItem'

export default function SimpleCRUD() {
    const [lists,setLists] = useState([
        {
            id: 1,
            name: "Gabriel",
        },
        {
            id:2,
            name: "Mohammed"
        }
    ])
    const [updateState,setUpdateState] = useState(false)
    function handleDelete(id) {
        const newList = lists.filter((list) => 
        id !== list.id 
        )
        setLists(newList)
    }
    function handleUpdate(id) {
        setUpdateState(id)
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='min-w-[300px] lg:w-[400px] bg-slate-400 p-[20px]'>
                <CRUDAddItem setLists={setLists} lists={lists} />
                <div className="Lists">
                    {
                        lists.map((list) => 
                            <div>
                                {
                                    updateState === list.id 
                                    ?
                                        <CRUDEditItem SingleList={list} setUpdateState={setUpdateState} setLists={setLists} lists={lists} />
                                    :
                                        <div className='mb-[15px] flex justify-between items-center'>
                                            <p>{list.name}</p>
                                            <div className="buttons flex gap-2">
                                                <button onClick={()=> handleUpdate(list.id)} className='bg-[#2a7f94] p-[8px] text-white rounded'>Edit</button>
                                                <button onClick={()=> handleDelete(list.id)} className='bg-[#a0202b] p-[8px] text-white rounded'>Delete</button>
                                            </div>
                                        </div>
                                }
                            </div>
                    )}
                </div>
            </div>
        </div>
    )
}












// Testing All Code in one File



// import React, { useState } from 'react'

// export default function Testing() {
//     const [updateState,setUpdateState] = useState(false)
//     const [updateValue,setUpdateValue] = useState('')
//     const [data,setData] = useState([
//         {
//             id:1,
//             name: "Gabriel",
//         },
//         {
//             id:2,
//             name: "Sayed",
//         },
//     ])

//     const handleAdd = (event) => {
//         event.preventDefault()
//         if(event.target.elements.name.value !== '') {
//             const newList = {
//                 id: Math.floor(Math.random() * 10000),
//                 [event.target.elements.name.name] : event.target.elements.name.value,
//             }
//             setData(data.concat(newList));
//             event.target.name.value = ' '
//         }
//     }

//     const handleDelete = (id) => {
//         const newList = data.filter((user) => 
//             id !== user.id
//         )
//         setData(newList)
//     }
//     const handleUpdateState = (id,user) => {
//         setUpdateState(id);
//         setUpdateValue(user.name)
//     }
//     const handleEdit = (id,user) => {
//         if(updateValue !== '') {
//             const newList = data.map((user) => 
//                 id === user.id ? {...user, name:updateValue} : user
//             )
//             setData(newList)
//             setUpdateValue('')
//             setUpdateState(null)
//         }
//     }
//     return (
//         <div className='h-screen flex justify-center items-center p-[20px]'>
//             <div className='w-full md:w-[400px] bg-[#94A3B8] p-[20px] rounded'>
//                 <form onSubmit={handleAdd} action='' className='flex mb-[20px]'>
//                     <input name='name' type="text" className='w-full p-[10px] outline-none' />
//                     <button type='submit' className='p-[10px] px-[10px] bg-[#2DCC4F]'>Add</button>
//                 </form>
//                 <div>
//                     {
//                         data.map((user) => (
//                             <div>
//                                 {
//                                 updateState === user.id
//                                 ?
//                                     <div  className='flex mb-[20px]'>
//                                         <input value={updateValue} onChange={(e)=>setUpdateValue(e.target.value)} name='name' type="text" className='w-full p-[10px] outline-none' />
//                                         {/* <input  onChange={()=>handleChange(user.id)} name='name' type="text" className='w-full p-[10px] outline-none' /> */}
//                                         <button onClick={()=> handleEdit(user.id,user)}  className='p-[10px] px-[10px] bg-[#2DCC4F]'>Update</button>
//                                     </div>
//                                 :
//                                 <div key={user.id} className='flex mb-[10px] items-center justify-between   '>
//                                     <p className='md:text-[20px]'>{user.name}</p>
//                                     <div className="buttons flex gap-[10px] text-white">
//                                         <button onClick={()=> handleUpdateState(user.id,user)} className='p-[8px] rounded bg-[#2A7F94]'>
//                                             Edit
//                                         </button>
//                                         <button onClick={()=>handleDelete(user.id)} className='p-[8px] rounded bg-[#A0202B]'>
//                                             Delete
//                                         </button>
//                                     </div>
//                                 </div>
//                             }
//                             </div>
                            
//                         ))
//                     }
//                 </div>

//             </div>
//         </div>
//     )       
// }






