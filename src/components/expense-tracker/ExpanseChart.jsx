import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { GlobalContext } from './Context';

export default function ExpanseChart() {
    const {expenseValue,incomeValue} = React.useContext(GlobalContext)

    return (
        <div className='h-full flex justify-center items-center'>
            <PieChart
                series={[
                    {
                    data: [
                        { id: 0, value: incomeValue, label: 'Income' },
                        { id: 1, value: expenseValue, label: 'Expense' },
                    ],
                    },
                ]}
                width={400}
                height={200}
            />
        </div>
    )
}
