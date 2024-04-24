import BalancesComp from '@/components/BalancesComp'
import React from 'react'

const Balances = () => {
    return (
        <div className='p-4 rounded'>
            <div className="pb-0">
                <h6 className="text-gray-500 text-xl">Balances</h6>
            </div>
            <div className="w-fulll py-4 h-full">
                <BalancesComp />
            </div>
        </div>
    )
}

export default Balances