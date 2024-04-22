import React from 'react'
import ExpenseBreakdownItem from './ExpenseBreakdownItem'
import { ExpenseItem } from '@/types/types';


const ExpensesBreakdown = () => {

    const expenses: ExpenseItem[] = [
        { category: 'Transport', name: 'Transportation', amount: 100, percentage: 20 },
        { category: 'Food', name: 'Groceries', amount: 200, percentage: 40 },
        { category: 'Entertainment', name: 'Movies', amount: 50, percentage: 10 },
        { category: 'Shopping', name: 'Clothing', amount: 150, percentage: 30 }
    ];

    return (
        <div className='h-full w-full gap-x-10 grid grid-cols-2'>
            {expenses.map((expense, index) => (
                <ExpenseBreakdownItem key={index} expense={expense} />
            ))}
        </div>
    )
}

export default ExpensesBreakdown