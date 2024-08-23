//First Method

// import React, { useState } from 'react'
// import data from './data'

// export default function Accordion() {
//     const [selected,setSelected] = useState();
//     const [enableMultiSelection,setEnableMultiSelection] = useState(false);
//     const [multiple,setMultiple] = useState([])

//     function handleSingleSelection (getCurrentId) {
//         setSelected(getCurrentId === selected ? null : getCurrentId)
//     }


//     function handleMultiSelection (getCurrentId) {
//         let cpyMultiple = [...multiple]
//         const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId)
//         if(findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId)
//         else cpyMultiple.splice(findIndexOfCurrentId,1)
//         setMultiple(cpyMultiple)
//     }
//     // console.log([].indexOf()); // -1
//     return (
//         <div className=' h-screen flex flex-col gap-[30px] justify-center items-center'>
//             <button onClick={()=> setEnableMultiSelection(!enableMultiSelection)} className=' py-[10px] px-[20px] bg-[#614101] text-white font-bold text-[20px]'>Enable Multiple Selection</button>
            
//             <div className='w-[500px] text-[white]'>
//             {
//                 data && data.length > 0 
//                 ? data.map(dataItem => 
//                 <div key={dataItem.id} className='mb-[40px] bg-[#614101] '>
//                     <div onClick={()=> 
//                         enableMultiSelection
//                         ? handleMultiSelection(dataItem.id)
//                         : handleSingleSelection(dataItem.id)
//                     }  className=' p-[20px] flex justify-between items-center cursor-pointer'>
//                         <span>{dataItem.question} </span>
//                         <span className='text-[20px]'>+</span>
//                     </div>
//                     <div className='bg-[#555555] duration-300 '>
//                         {enableMultiSelection
//                         ? multiple.indexOf(dataItem.id) !== -1 && (
//                             <div className='p-[20px]'>{dataItem.answer}</div>
//                         )
//                         : selected === dataItem.id && (
//                             <div className='p-[20px]'>{dataItem.answer}</div>
//                         )
//                     }
//                         {/* {selected === dataItem.id 
//                         ? <div className='p-[20px]'>{dataItem.answer}</div>
//                         : null} */}
//                     </div>
//                 </div>)
//                 : <div>Not Found Data</div>
//             }
//             </div>
//         </div>
//     )
// }

// Second Method


// import React, { useState } from 'react'
// import Data from './data'

// export default function Accordion() {
//     const [selected,setSelected] = useState();
//     const [multipleSelected,setMultipleSelected] = useState(false);
//     const [multiples,setMultiples] = useState([]);

//     const handleSingleSelect = (currentId) => {
//         setSelected(currentId === selected ? null : currentId)
//     }

//     const handleMultipleSelect = (currentId) => {
//         const cpyMultiple = [...multiples]
//         cpyMultiple.indexOf(currentId) === -1 ? cpyMultiple.push(currentId) : cpyMultiple.splice(cpyMultiple.indexOf(currentId),1)
//         setMultiples(cpyMultiple)
//     }
//     console.log(multiples);
    

//     return (
//         <div className='h-screen flex justify-center items-center'>
//             <div className="accordion w-[500px]">
//                 <h1 onClick={()=> setMultipleSelected(!multipleSelected)} className='mb-[20px] text-center bg-[#dfefef] cursor-pointer'>Enable Multiple Selected</h1>
//                 {Data && Data.length > 0 &&
//                 Data.map((item) => 
//                     <div className='mb-[20px]'>
//                         <div onClick={() => 
//                             multipleSelected?
//                             handleMultipleSelect(item.id):
//                             handleSingleSelect(item.id)
//                             } className='bg-[#333] flex justify-between cursor-pointer  p-[20px] text-white'>
//                             <span>{item.question}</span>
//                             <span>+</span>
//                         </div>
//                         {
//                             multipleSelected
//                             ? 
//                             multiples.indexOf(item.id) !== -1 &&
//                                 <div className='bg-[#aaa]  p-[20px] text-white'>
//                                     dd
//                                 </div>
//                             :
//                             selected === item.id &&
//                                 <div className='bg-[#aaa]  p-[20px] text-white'>
//                                     dd
//                                 </div>
//                         }
//                     </div>
                    
//                 )
//                 }
//             </div>
//         </div>
//     )
// }


//Third Method

import React, { useState } from 'react'
import Data from './data'

export default function Accordion() {
    const [selected,setSelected] = useState()

    const [multiples,setMultiples] = useState([])
    const [enableMultipleSelect,setEnableMultipleSelect] = useState(false)

    return (
        <div className='h-screen flex justify-center items-center p-[20px]'>
            <div className='w-full md:w-[400px]'>   
                <div className='flex justify-center mb-[20px]'>
                    <button onClick={()=> setEnableMultipleSelect(!enableMultipleSelect)} className='bg-[#333] p-[10px] text-white rounded'>Enable Multi Accordion</button>
                </div>
                {Data && Data.length > 0 &&
                Data.map((item)=> 
                    <div className='mb-[20px]'>
                        <p onClick={
                            enableMultipleSelect 
                            ?
                                () => {
                                    const cpyMultiple = [...multiples];
                                    cpyMultiple.indexOf(item.id) === -1 ? cpyMultiple.push(item.id) : cpyMultiple.splice(cpyMultiple.indexOf(item.id),1)
                                    setMultiples(cpyMultiple)
                                }
                            :
                            ()=> setSelected(item.id === selected ? null : item.id)
                        } className='bg-[#333] cursor-pointer p-[15px] text-white flex justify-between'>
                            <span>
                                {item.question}
                            </span>
                            <span>+</span>
                        </p>


                        {
                            enableMultipleSelect
                            ?
                                multiples.indexOf(item.id) !== -1 &&
                                <p className='bg-[#aaa] p-[10px]'>
                                {item.answer}
                                </p>
                            :
                            selected === item.id  &&
                            <p className='bg-[#aaa] p-[10px]'>
                            {item.answer}
                            </p>
                        }

                    </div>
            )}
            </div>
        </div>
    )
}
