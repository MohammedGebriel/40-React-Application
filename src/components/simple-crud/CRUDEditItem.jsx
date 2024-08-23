    // import React from 'react'

    // export default function CRUDEditItem({setUpdateState,setLists,lists,SingleList}) {
    //     function handleEdit(e) {
    //         e.preventDefault()
    //         const name = e.target.elements.name.value;
    //         const newList = lists.map((list) => 
    //             SingleList.id === list.id ? {...list,name}  : list
    //         )
    //         setLists(newList)

    //         setUpdateState(false)
    //     }
    //     function handleChange(e) {
    //         const value = e.target.value;
    //         const newList = lists.map((list) => 
    //             SingleList.id === list.id ? {...list,name:value}  : list
    //         )
    //         setLists(newList)
    //     }
    //     return (
    //         <form onSubmit={handleEdit}  className='flex'>
    //             <input type="text" onChange={handleChange} name="name" id="" value={SingleList.name}   className=' grow border-none outline-none p-[10px] font-bold'/>
    //             <button className='bg-[#2cb638] p-[10px] text-white'>Update</button>
    //         </form>
    //     )
    // }





    
// import React, { useState } from 'react'

// export default function CRUDEditItem({singleList,lists,setLists,setUpdateState}) {
//     const [value,setValue] = useState(singleList.name)
//     function handleUpdate(e) {
//         e.preventDefault();
//         const name = e.target.elements.name.value;
//         const newList = lists.map((list) => singleList.id === list.id ? {...list,name} : list );
//         setLists(newList);
//         if (name !== '') {
//             setUpdateState(false)
//         }
//     }
//     function handleChange(e) {
//         setValue(e.target.value)
//     }
    
//     return (
//         <form  onSubmit={handleUpdate}  action="" className='mb-[20px] flex'>
//             <input onChange={handleChange} value={value}  type="text" name="name" id="" className=' grow p-[10px] outline-none font-bold'/>
//             <button className='p-[10px] bg-[#2ec02e] text-white'>Update</button>
//         </form>
//     )
// }




import React, { useState } from 'react'

export default function CRUDEditItem({setUpdateState,SingleList,lists,setLists}) {
    const [value,setValue] = useState(SingleList.name)
    function handleSubmit(e) {
        e.preventDefault();
        const value = e.target.elements.name.value
        const newList = lists.map((list) =>
        SingleList.id === list.id ? {...list,name:value} :list
        )
        setLists(newList)
        setUpdateState(false)
    }
    function handleChange(e) {
        setValue(e.target.value)
    }
    return (
        <form onSubmit={handleSubmit} className='flex mb-[20px]' action="">
            <input onChange={handleChange} value={value} type="text" name='name' className='grow p-[12px] outline-none lg:text-[18px]' />
            <button className='p-[12px] bg-[#2dcc4f]'>Update</button>
        </form>
    )
}
