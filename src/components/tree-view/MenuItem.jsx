import React, { useState } from 'react'
import MenuList from './MenuList';

export default function MenuItem({item}) {
    const [displayCurrentChildren,setDisplayCurrentChildren] = useState({})

    function handleToggleChildren(getCurrentLabel) {
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel]
        })
    }

    console.log(displayCurrentChildren);
    return (
        <li className=' list-none ml-[10px]'>
            <div
            onClick={()=>handleToggleChildren(item.label)}
            className=' flex items-center gap-[20px] text-[22px] cursor-pointer'>
                <p> {item.label} </p>
                <span className=''>+</span>
            </div>
            {
                item && item.children && item.children.length > 0 && displayCurrentChildren[item.label]
                ?
                <MenuList list={item.children}/>
                : null
            }
        </li>
    )
}
