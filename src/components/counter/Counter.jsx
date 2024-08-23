// import React, { useState } from 'react'

// export default function Counter() {
//     const [count,setCount] = useState(0)
//     function handleIncrement() {
//         setCount(count + 1)
//     }
//     function handleDecrement() {
//         setCount(count - 1)
//     }
//     return (
//         <div className='h-screen flex justify-center items-center'>
//             <div className="counter">
//                 <h1 style={{color: count >= 0 ? 'green' : 'red'}} className='text-[28px] text-center lg:text-[50px] font-bold mb-[20px]'>{count}</h1>
//                 <div className="buttons flex gap-[15px]">
//                     <button 
//                     onClick={handleIncrement}
//                     className='p-[10px] px-[15px] bg-[#20b94e] rounded text-[20px] text-white'>
//                         Increment
//                     </button>
//                     <button 
//                     onClick={handleDecrement}
//                     className='p-[10px] px-[15px] bg-[#ca3139] rounded text-[20px] text-white'>
//                         Decrement
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }


import React, { useState } from 'react'
export default function Counter() {
    const [count,setCount] = useState(0)
    const handleIncrement = () => {
        setCount(count + 1)
    }
    const handleDecrement = () => {
        setCount(count - 1)
    }
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="counter">
                <h1 style={{color: count >= 0 ? 'green' : 'red'}} className='text-[28px] text-center md:text-[50px] font-bold'>{count}</h1>
                <div className="buttons flex gap-[10px] mt-[20px]">
                    <button 
                    onClick={handleIncrement}
                    className='p-[10px] px-[15px] bg-[#20a874] text-white rounded'>
                        Increment
                    </button>
                    <button 
                    onClick={handleDecrement}
                    className='p-[10px] px-[15px] bg-[#b42424] text-white rounded'>
                        Decrement
                    </button>
                </div>
            </div>
        </div>
    )
}
