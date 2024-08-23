import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// طبعا هنا هنعمل تظبيط للتصميم عن طريق ال customization css

export default function DatePick() {
    const [startDate, setStartDate] = useState(new Date());
    const [startDate2, setStartDate2] = useState(new Date());
    const different = (startDate2 - startDate)/60/60/24/1000

    return (
        <div className="flex justify-center flex-col my-[100px] items-center gap-[20px] ">
            <h1 className='text-[30px] font-bold mb-[20px]'>Date Picker Package</h1>
            <DatePicker
                className="border"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat = "yyyy/MM/dd"
                minDate={new Date()}
                showYearDropdown
                scrollableMonthYearDropdown
            />
            <DatePicker
                className="border"
                selected={startDate2}
                onChange={(date) => setStartDate2(date)}
                dateFormat = "yyyy/MM/dd"
                minDate={new Date()}
                showYearDropdown
                scrollableMonthYearDropdown
            />
            <p>Different Between Two Date Pick is {different} Day</p>

        </div>
    );
}
