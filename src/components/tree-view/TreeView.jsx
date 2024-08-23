import React from 'react'
import { MenuData } from './data'
import MenuList from './MenuList'
export default function TreeView() {
    return (
        <div className='bg-[#0d2341] w-[300px] text-white p-[20px] min-h-screen'>
            <MenuList list={MenuData} />
        </div>
    )
}
