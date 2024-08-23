import React from 'react'
import data from './LocalJsonData.json'
export default function ReadLocalJson() {
    return (
        <div className='flex p-[30px] gap-[20px] flex-wrap'>
            {
                data.map((d,i) => 
                    <div className='border' key={d.id}>
                        <h1>{d.title}</h1>
                        <p>{d.description}</p>
                    </div>
                )
            }
        </div>
    )
}
