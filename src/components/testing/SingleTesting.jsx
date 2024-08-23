import React from 'react'

export default function SingleTesting({name,label,id}) {
    return (
        <div className='flex items-center gap-2'>
            <input type="checkbox" name={name} id={id} />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}
