import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function ReactCalendar() {
    const [value, onChange] = useState(new Date());
    console.log(value);
    
    return (
        <div className="flex justify-center  text-center flex-col my-[100px] items-center gap-[20px] ">
            <h1 className='text-[30px] font-bold mb-[20px]'>React Calendar Package</h1>
            <Calendar onChange={onChange} value={value} />
            <p>{`${value}`}</p>
        </div>
    )
}
