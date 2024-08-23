import React, { useState } from 'react'
import TabsContent from './data'

export default function Tab() {

    const [currentElement,setCurrentElement] = useState(0)
    function handleClick(index) {
        setCurrentElement(index)
    }
    return (
        <div className=' flex justify-center mt-[10px]'>
            <div className=''>
               <div className='flex'>
               {TabsContent.map((item)=> {
                    return <div 

                    onClick={()=> handleClick(item.id)} key={item.id}
                    className={`${currentElement === item.id ? 'bg-black text-white' :''} duration-200 cursor-pointer border w-[100px] text-center p-2`}>
                        {item.label}
                    </div>
                })}
               </div>
               <div className="content">
                {TabsContent[currentElement].content}
            </div>
            </div>

        </div>
    )
}
