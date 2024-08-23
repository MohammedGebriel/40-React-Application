import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

export default function DateTimePick() {
    const [value, onChange] = useState(new Date());
    const [value2, onChange2] = useState(new Date());

    
    const different = (value2 - value)/60/60/24/1000

    return (
        <div className='flex justify-center text-center flex-col gap-[10px] my-[100px] items-center'>
            
            <h1 className='text-[30px] font-bold mb-[20px]'>Date Time Picker Package</h1>
            <DateTimePicker onChange={onChange} value={value}/>
            <DateTimePicker onChange={onChange2} value={value2} />
            <p>Different Between Two Date Pick is {different} Day</p>

        </div>
    )
}
