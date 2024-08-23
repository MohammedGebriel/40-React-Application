import React from 'react'
import {motion} from 'framer-motion'

export default function Modal({header,body,footer,onClose}) {


    return (
        <div className='fixed left-0 top-0 bg-[#020202da] z-[5] text-white w-full h-full'>
            <motion.div
                initial = {{marginTop: -200,opacity:0}}
                animate= {{
                    opacity: 1,
                    marginTop: 200
                }}
                transition={{duration: 0.6}}
                className='content relative w-[80%] bg-[#fff] text-black  mx-auto '>
                <span onClick={()=> onClose()} className='absolute cursor-pointer right-[20px] top-[10px] text-[20px] font-bold'>X</span>
                <div className="header text-[25px] py-[20px] text-center">
                    {header
                    ? header
                    : "The header Content"}
                </div>
                <div className="body text-[25px] py-[20px] text-center">
                    {body
                    ? body
                    : "The Body Content"
                    }
                </div>
                <div className="footer text-[25px] py-[20px] text-center">
                    {footer
                    ? footer
                    : "The Footer Content"}
                </div>
            </motion.div>
        </div>
    )
}
