import { ExpensesGoalsCategoryData } from '@/app/constants'
import React from 'react'
import BreakdownCard from './BreakdownCard'
import ExpensesGoalsCategoryItem from './ExpensesGoalsCategoryItem'

const ExpensesGoalsCategory = () => {
    return (
        <div className='grid  lg:grid-cols-3 xl:grid-cols-4 w-full gap-7 min-xl:gap-10'>
            {ExpensesGoalsCategoryData.map((item, index) => (
                <ExpensesGoalsCategoryItem transaction={item} key={index} />
            ))}
        </div>
    )
}

export default ExpensesGoalsCategory