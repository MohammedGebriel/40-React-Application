import { createContext, useEffect, useState } from "react";


export const GlobalContext = createContext(null)

export default function GlobalState({children}) {
    const [value,setValue] = useState('Income')

    const [transactionData,setTransactionData] = useState({
        description: '',
        amount: 0,
        type: value,
    })
    const [expenseValue,setExpenseValue] = useState(50);
    const [incomeValue,setIncomeValue] = useState(70);
    const [allTransaction,setAllTransaction] = useState([]);
    

    function handleSubmit(event) {
        event.preventDefault()
        if(!transactionData.description || !transactionData.amount) return

        setAllTransaction([
            ...allTransaction,
            {
                ...transactionData, id:Date.now()
            }
        ])
        
    }
    useEffect(()=> {
        let income = 0;
        let expense = 0;
        allTransaction.forEach(item =>
            {item.type === 'Income' ?
                income = income + parseInt(item.amount):
                expense = expense + parseInt(item.amount)
            }
        )
        setExpenseValue(expense);
        setIncomeValue(income);
    },[allTransaction])

    return <GlobalContext.Provider value={{
        value,
        setValue,
        transactionData,
        setTransactionData,
        expenseValue,
        setExpenseValue,
        incomeValue,
        setIncomeValue,
        allTransaction,
        setAllTransaction,
        handleSubmit
    }}>
        {children}
    </GlobalContext.Provider>
}