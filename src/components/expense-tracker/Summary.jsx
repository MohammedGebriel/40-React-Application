import React, { useContext } from 'react'
import ExpanseChart from './ExpanseChart'
import { GlobalContext } from './Context'

export default function Summary() {
    const {expenseValue,incomeValue} = useContext(GlobalContext)
    return (
        <div className='bg-white px-[10px] lg:px-[20px] py-[30px] lg:py-[60px] gap-[20px] grid grid-cols-1 lg:grid-cols-2'>
            <div className='text-center'>
                <p className='font-bold text-[22px] mb-[20px]  text-[#777]'>Balance is $ {incomeValue - expenseValue}</p>
                <div className="box bg-[#eee] p-[20px]">
                    <p className='flex flex-col mb-[20px]'>
                        <span className=' font-bold text-[35px]'>$ {incomeValue}</span>
                        <span className='text-[#777] text-[18px]'>Total Income</span>
                    </p>
                    <p className='flex flex-col'>
                        <span className=' font-bold text-[35px]'>$ {expenseValue}</span>
                        <span className='text-[#777] text-[18px]'>Total Expense</span>
                    </p>

                </div>
            </div>
            <ExpanseChart />
        </div>
    )
}
