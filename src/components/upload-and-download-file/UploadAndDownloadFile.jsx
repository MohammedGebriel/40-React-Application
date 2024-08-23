import React, { useState } from 'react'
import Image from './homeimage.jpg'
import CV from './TestingCV.pdf'

export default function UploadAndDownloadFile() {
    const [file,setFile] = useState();

    const handleFile = (e) => {
        setFile(e.target.files[0])
    }
    
    const handleUpload = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file',file)
        fetch(
            'url',
            {
                method: 'POST',
                body: formData
            }
        ).then((response) => response.json())
        .then((result) => {
            console.log('success',result)
        }).catch(error => {
            console.log('error',error)
        })
    }

    
    return (
        <div className='flex justify-center flex-col items-center mt-[30px]'>
            <div className='file-download flex flex-col gap-[30px] mb-[30px]'>
                <a href={Image} download className='p-[10px] text-center bg-[#17692b] text-white rounded text-[20px]'>DownLoad Image</a>
                <a href={Image} target='_blank' className='p-[10px] text-center bg-[#17692b] text-white rounded text-[20px]' rel="noreferrer">Look At Image</a>
                <a href={CV} download className='p-[10px] text-center bg-[#17692b] text-white rounded text-[20px]'>DownLoad File</a>
                <a href={CV} target='_blank' className='p-[10px] text-center bg-[#17692b] text-white rounded text-[20px]' rel="noreferrer">Look At File</a>
            </div>
            
            <div className="file-upload  text-center">
                <h2 className='text-[22px] mb-[10px]'>FileUpload</h2>
                <form onSubmit={handleUpload} action="" className='flex flex-col gap-[20px]'>
                    <input type="file" name='file' onChange={handleFile} />
                    <button className='bg-[#333]'>Upload</button>
                </form>
            </div> 
        </div>
    )
}
