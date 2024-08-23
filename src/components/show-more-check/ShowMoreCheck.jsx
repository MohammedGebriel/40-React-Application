import React, { useState } from 'react'
import ShowMoreTest from './ShowMoreTest';
import { FaAngleDown,FaAngleUp  } from "react-icons/fa";

export default function ShowMoreCheck() {
    const [showMore1,setShowMore1] = useState(false)
    const [showMore2,setShowMore2] = useState(false)

    function handleShowMoreOne() {
        setShowMore1(!showMore1)
        // setShowMore2(false)
    }
    function handleShowMoreTwo() {
        setShowMore2(!showMore2)
        // setShowMore1(false)
    }
    return (
        <div className=' flex justify-center items-center h-screen'>
            <div>
                
                <div className='mb-[20px]'>
                    <h1 className='text-[25px] font-bold mb-[10px]'>Group 1</h1>
                    <ShowMoreTest label='Check 1' id='Check 1' name='Check 1' />
                    <ShowMoreTest label='Check 2' id='Check 2' name='Check 2' />
                    <p onClick={()=> handleShowMoreOne()} className=' cursor-pointer duration-500 text-[20px] flex items-center gap-2'>
                        {showMore1 ? <FaAngleDown /> :<FaAngleUp />  }    Show More
                    </p>
                    {/* {
                        showMore1 ?
                        <div className=' duration-500 '>
                            <ShowMoreTest label='Check 3' id='Check 3' name='Check 3' />
                            <ShowMoreTest label='Check 4' id='Check 4' name='Check 4' />
                        </div>
                        : null
                    } */}
                    <div className={` ${showMore1 ? '' : " hidden opacity-0"} duration-1000`}>
                        <ShowMoreTest label='Check 3' id='Check 3' name='Check 3' />
                        <ShowMoreTest label='Check 4' id='Check 4' name='Check 4' />
                    </div>
                </div>
                <div>
                    <h1 className='text-[25px] font-bold mb-[10px]'>Group 2</h1>
                    <ShowMoreTest label='Check 5' id='Check 5' name='Check 5' />
                    <ShowMoreTest label='Check 6' id='Check 6' name='Check 6' />
                    <p onClick={()=> handleShowMoreTwo()} className=' cursor-pointer duration-500 text-[20px] flex items-center gap-2'>
                        {showMore2 ? <FaAngleDown /> :<FaAngleUp />  }    Show More
                    </p>
                    <div className={` ${showMore2 ? '' : "hidden opacity-0"} duration-1000`}>
                        <ShowMoreTest label='Check 7' id='Check 7' name='Check 7' />
                        <ShowMoreTest label='Check 8' id='Check 8' name='Check 8' />
                    </div>

                </div>
            
            </div>


        </div>
    )
}
