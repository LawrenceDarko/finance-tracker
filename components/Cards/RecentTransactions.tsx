import React from 'react'
import { BsChevronRight } from 'react-icons/bs'
import RecentTransactionsComp from '../RecentTransactionsComp'

const RecentTransactions = () => {
    return (
        <div className="flex flex-col lg:w-1/3 px-4">
            <div className="flex items-center justify-between p-4">
                <h6 className="text-gray-500 text-xl">Recent Transactions</h6>
                <div className='text-gray-400 text-xs flex-center gap-2 cursor-pointer'>View All <BsChevronRight/></div>
            </div>
            <div className="bg-white flex-1 p-4 rounded shadow-lg overflow-auto">
                <RecentTransactionsComp />
            </div>
        </div>
    )
}

export default RecentTransactions


