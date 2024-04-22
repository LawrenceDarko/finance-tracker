import React from 'react'

const CashFlow = () => {
    return (
        <div className='flex flex-col w-full h-full'>
            <div className='w-full flex justify-center items-center py-5'>
                <h1 className='font-semibold text-xl'>My Cashflow for June</h1>
            </div>
            <div className="flex w-full justify-center h-full gap-5 items-center">
                <div className='w-full h-full space-y-8 justify-center items-center'>
                    <div className='w-full'>
                        <div className="flex items-center w-full">
                            <div className="flex items-center w-full relative">
                                <p className='uppercase text-xs font-semibold text-gray-600'>Earned</p>
                                <div className='p-1 rounded bg-[#299D91] bg-opacity-20 absolute left-[60%] mt-[65px] text-xs font-bold text-[#299D91]'>$3,000</div>
                            </div>
                        </div>
                        <div className='h-[7px] xl:h-[9px] bg-gray-200 rounded-full'>
                            <div className='h-full w-[70%] bg-[#299D91] rounded'></div>
                        </div>
                    </div>

                    <div className='w-full'>
                        <div className="flex items-center w-full">
                            <div className="flex items-center w-full relative">
                                <p className='uppercase text-xs font-semibold text-gray-600'>spent</p>
                                <div className='p-1 rounded bg-red-100 absolute left-[30%] mt-[65px] text-red-500 text-xs font-bold'>$1,000</div>
                            </div>
                        </div>
                        <div className='h-[7px] xl:h-[9px] bg-gray-200 rounded-full'>
                            <div className='h-full w-[40%] bg-red-500 rounded'></div>
                        </div>
                    </div>
                </div>

                <div className='space-y-1'>
                    <h1 className='font-extrabold text-2xl mt-3 lg:text-4xl text-gray-600'>$24,578</h1>
                    <p className='uppercase font-semibold text-gray-500 text-sm'>Remaining</p>
                </div>
            </div>
            
        </div>
    )
}

export default CashFlow