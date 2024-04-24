import { SampleData } from '@/app/constants'
import React from 'react'
import BalanceItem from './BalanceItem'
import BreakdownCard from './BreakdownCard'

const ExpenseBreakdownCard = () => {
    return (
        <div className='grid  lg:grid-cols-3 xl:grid-cols-4 w-full gap-7 min-xl:gap-10'>
            {SampleData.map((item, index) => (
                <BreakdownCard key={index} />
            ))}
        </div>
    )
}

export default ExpenseBreakdownCard