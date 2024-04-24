import React from 'react'
import BalanceItem from './Cards/BalanceItem'
import { SampleData } from '@/app/constants'

const BalancesComp = () => {
    return (
        <div className='grid  lg:grid-cols-3 xl:grid-cols-4 w-full gap-7 min-xl:gap-10'>
            {SampleData.map((item, index) => (
                <BalanceItem key={index} data={item} />
            ))}
        </div>
    )
}

export default BalancesComp