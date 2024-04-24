import BalancesComp from '@/components/BalancesComp'
import ExpenseBreakdownCard from '@/components/Cards/ExpenseBreakdownCard'
import StatisticsCard from '@/components/Cards/StatisticsCard'
import ExpensesComparison from '@/components/ExpensesComparison'
import BarChart from '@/components/Graphs/BarChart'
import React from 'react'

const Expenses = () => {
    return (
        <div className='p-4 rounded'>
            <div className="pb-4">
                <h6 className="text-gray-500 text-xl">Expenses Comparison</h6>
            </div>
            <div className="w-full h-full">
                <ExpensesComparison />
            </div>

            <div className="mt-10">
                <h6 className="text-gray-500 text-xl">Expenses Breakdown</h6>
            </div>
            <div className="w-fulll py-4 h-full">
                <ExpenseBreakdownCard />
            </div>
        </div>
    )
}

export default Expenses