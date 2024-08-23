import React, { useState } from 'react'
import Modal from './Modal'

export default function ModalPopup() {
    const [showModalPopup,setShowModalPopup] = useState(false)

    function handleClick() {
        setShowModalPopup(!showModalPopup)
    }

    function onClose() {
        setShowModalPopup(false)
    }
    return (
        <div className='mt-[20px] flex justify-center'>
            <div>
                <button onClick={()=> handleClick()} className='p-2 border rounded font-bold'>Open Modal Popup</button>
                <div>
                    {showModalPopup &&
                    <Modal 
                    onClose={onClose}
                    header= 'The Custom Header'
                    body= 'The Custom Body'
                    footer= 'The Custom Footer'
                    />}
                </div>
            </div>
        </div>
    )
}
