import UpcomingBillsList from '@/components/Tables/UpcomingBillsList'
import React from 'react'

const Bills = () => {
    return (
        <div className='p-4 rounded'>
            <div className="pb-0">
                <h6 className="text-gray-500 text-xl">Upcoming Bills</h6>
            </div>
            <div className="w-fulll py-4 h-full">
                <UpcomingBillsList />
            </div>
        </div>
    )
}

export default Bills