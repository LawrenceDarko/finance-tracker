import ExpenseBreakdownCard from '@/components/Cards/ExpenseBreakdownCard'
import ExpensesGoalsCategory from '@/components/Cards/ExpensesGoalsCategory'
import MainGoalsCard from '@/components/Cards/MainGoalsCard'
import React from 'react'

const Goals = () => {
    return (
        <div>
            <MainGoalsCard />
            <div className="mt-10 px-4">
                <h6 className="text-gray-500 text-xl">Expenses Breakdown</h6>
            </div>
            <div className="w-fulll p-4 h-full">
                <ExpensesGoalsCategory />
            </div>
        </div>
    )
}

export default Goals