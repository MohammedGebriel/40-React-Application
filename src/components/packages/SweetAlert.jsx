import React from 'react'
import Swal from 'sweetalert2'
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'

export default function SweetAlert() {
    const Swal = require('sweetalert2');

    const handleClick = () => {
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
        })    
    }

    return (
        <div className='my-[100px] flex flex-col justify-center items-center '>
            <h1 className='text-[30px] text-center font-bold mb-[20px] '>SweetAlert2 Package</h1>
            <button onClick={handleClick} className='bg-[#1fb9b9] p-[10px] w-fit' >Click on Me</button>
        </div>
    )
}
