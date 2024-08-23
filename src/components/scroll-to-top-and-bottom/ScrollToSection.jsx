import React, { useRef } from 'react'

export default function ScrollToSection() {
    const ref = useRef()
    const data = [
        {
            label : 'First Section ',
            style : {
                width: "100%",
                height: "600px",
                backgroundColor: "red"
            }
        },
        {
            label : 'Second Section ',
            style : {
                width: "100%",
                height: "600px",
                backgroundColor: "gray"
            }
        },
        {
            label : 'Third Section ',
            style : {
                width: "100%",
                height: "600px",
                backgroundColor: "blue"
            }
        },
        {
            label : 'Fourth Section ',
            style : {
                width: "100%",
                height: "600px",
                backgroundColor: "orange"
            }
        },
        {
            label : 'Fifth Section ',
            style : {
                width: "100%",
                height: "600px",
                backgroundColor: "black"
            }
        },
    ]
    function handleScrollToSection() {
        // ref.current.scrollIntoView({
        //     behavior: "smooth"
        // })

        let pos = ref.current.getBoundingClientRect().top
        window.scrollTo({
            top:pos,
            behavior: "smooth"
        })

    }
    return (
        <div>
            <div className='text-center my-[20px]'>
                <h1 className='text-[30px] font-bold mb-[20px]'>Scroll to a Particular Section</h1>
                <button onClick={()=> handleScrollToSection()} className='border mb-[10px] p-2 rounded text-white bg-[#44babe]'>Click To Scroll To Section</button>
                {
                    data.map((item,index) => <div
                    ref={index === 3 ? ref : null}
                    style={item.style}>
                        <h3 className='text-white'>{item.label}</h3>
                    </div>)
                }
            </div>
        </div>
    )
}
