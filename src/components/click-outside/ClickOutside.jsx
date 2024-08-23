import React, { useEffect, useRef, useState } from 'react'

export default function ClickOutside() {
    const [showContent,setShowContent] = useState(false)
    const ref = useRef()

    useEffect(()=> {
        function handleShowContent (event) {
            if(!ref.current || ref.current.contains(event.target)) {
                return
            }
            setShowContent(false)
        }
        window.addEventListener('mousedown',handleShowContent)
        window.addEventListener('touchstart',handleShowContent)
    },[])

    return (
        <div className='flex justify-center items-center h-screen'>
            <div>
                {showContent
                ?   
                <div ref={ref} className='text-center'>
                    <h1 className='text-[30px] mb-[10px]'>This is a random content</h1>
                    <p className='text-[20px] w-[370px]'>
                        Please Click outside of this to close this. It won't close if you Click inside of this content
                    </p>
                </div>
                :
                <button onClick={()=> setShowContent(true)} className='border p-2 px-8 bg-black text-white rounded font-bold'>
                    ShowContent
                </button>}
            </div>
        </div>
    )
}
