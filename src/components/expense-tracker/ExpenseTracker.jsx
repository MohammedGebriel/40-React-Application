import React, { useContext } from 'react'
import ExpanseHeader from './ExpanseHeader'
import Summary from './Summary'
import ExpanseView from './ExpanseView'
import { GlobalContext } from './Context'

export default function ExpenseTracker() {
    const {allTransaction} = useContext(GlobalContext)
    return (
        <div className='bg-slate-200 h-screen '>
            <ExpanseHeader />
            <Summary />
            <div className='p-[10px] bg-inherit lg:p-[20px] grid grid-cols-1 lg:grid-cols-2 gap-[20px]'>
                
                <ExpanseView 
                type='Income' 
                data = {allTransaction.filter(item => item.type === 'Income')}
                />
                <ExpanseView 
                type='Expense'
                data = {allTransaction.filter(item => item.type === 'Expense')}
                />
            </div>
        </div>
    )
}
