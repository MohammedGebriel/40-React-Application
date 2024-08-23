// import React, { useRef } from 'react'

// export default function CRUDAddItem({lists,setLists}) {
//     const NameRef = useRef()
//     function handleAdd(e) {
//         e.preventDefault();
//         const name = e.target.elements.name.value;
//         const newList = [
//             {
//                 id:3,
//                 name
//             }
//         ];
//         if(name !== '') {
//             setLists(lists.concat(newList));
//         }
//         NameRef.current.value = ''
//     }
//     return (
//         <form onSubmit={handleAdd} className='flex mb-[20px]'>
//             <input ref={NameRef} type="text" name="name" id=""   className=' grow border-none outline-none p-[10px] font-bold'/>
//             <button className='bg-[#2cb638] p-[10px] text-white'>Add</button>
//         </form>
//     )
// }



// import React, { useRef } from 'react'

// export default function CRUDAddItem({lists,setLists}) {
//     const NameRef = useRef()
//     function handleAdd(e) {
//         e.preventDefault();
//         const value = e.target.elements.name.value
//         const newList = {
//             id: Math.floor(Math.random() * 1000000000000) ,
//             name: value,
//         }
//         if(value !== '') {
//             setLists(
//                 prev => prev.concat(newList)
//             )
//         }
//         NameRef.current.value = ''
//     }
//     return (

//         <form onSubmit={handleAdd} action="" className='mb-[20px] flex'>
//             <input ref={NameRef} type="text" name="name" id="" className=' grow p-[10px] outline-none font-bold'/>
//             <button className='p-[10px] bg-[#2ec02e] text-white'>Add</button>
//         </form>

//     )
// }


import React, { useRef } from 'react'

export default function CRUDAddItem({setLists,lists}) {
    const NameRef = useRef()
    function handleSubmit(e) {
        e.preventDefault()
        const value = e.target.elements.name.value;
        const newList = {
            id : Math.floor(Math.random() * 100000),
            name: value,
        }
        if(value !== ''){
            setLists(lists.concat(newList))
        }
        NameRef.current.value = ''
    }

    return (
        <form onSubmit={handleSubmit} className='flex mb-[20px]' action="">
            <input ref={NameRef} type="text" name='name' className='grow p-[12px] outline-none lg:text-[18px]' />
            <button className='p-[12px] bg-[#2dcc4f]'>Add</button>
        </form>
    )
}
