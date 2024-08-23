import React from 'react'
import DatePick from './DatePick'
import DateTimePick from './DateTimePick'
import ReactCalendar from './ReactCalendar'
import ReactToastify from './ReactToastify'
import SweetAlert from './SweetAlert'
import ReactIcons from './ReactIcons'

export default function ContainerPackages() {
    return (
        <div className='p-[20px]'>
            {/* فيه معلومات كتيره جدا عن كل مكتبه من دول تقدر تبقا ترجع ليهم مره تانيه وتتعلم اكتر عنهم  */}
            <h1 className='text-[30px] text-center font-bold mb-[20px] '> Packages</h1>
            <SweetAlert />
            <ReactToastify />
            <ReactCalendar />
            <DatePick />
            <DateTimePick />
            <ReactIcons />
        </div>
    )
}
