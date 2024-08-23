import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ReactToastify() {
    const notify = () => toast("Wow so easy!");

    return (
        <div className=' flex flex-col justify-center items-center my-[100px]'>
            <h1 className='text-[30px] text-center font-bold mb-[20px] '>React Toastify Package</h1>
            <button className='bg-[#1fb9b9] p-[10px] w-fit' onClick={notify}>Click On Me</button>
            <ToastContainer />
        </div>
    )
}
