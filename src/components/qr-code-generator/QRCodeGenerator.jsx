import React, { useState } from 'react'
import QRCode from 'react-qr-code'

export default function QRCodeGenerator() {
    const [input,setInput] = useState('');
    const [qrCode,setQrCode] = useState('')

    function handleClick() {
        setQrCode(input)
        setInput('')
    }

    return (
        <div className='flex flex-col items-center gap-[15px]   mt-[50px]'>
            <h1 className='text-[25px] font-bold'>QR Code Generator</h1>
            <div>
                <input value={input} onChange={(e)=> setInput(e.target.value)} className=' border outline-none p-[10px]' placeholder='Enter Your Value Here' type="text" name="" id="" />
                <button disabled={input  === '' ? true : false } onClick={()=> handleClick()} className={`${input  === '' ? '!bg-[#333]' :''} bg-[#972e2e] text-white p-[10px]`}>Generate</button>
            </div>
            <div>
                <QRCode value={qrCode} id='qr-code-value' />
            </div>
        </div>
    )
}
