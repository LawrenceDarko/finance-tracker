import React from 'react';
import Image from 'next/image';
import { FiChevronRight } from 'react-icons/fi';
import { BalanceItemData } from '@/types/types';
import Link from 'next/link';
import { Ri24HoursFill } from 'react-icons/ri';


const BreakdownCard: React.FC<{ }> = ({  }) => {


    return (
        <div className='bg-white shadow-lg w-full rounded-md h-[300px]'>
            <div className='flex p-4 rounded-t-md bg-[#E8E8E8] justify-between items-center'>
                <div className='flex justify-center gap-2 items-center'>
                    <div className="flex items-center flex-col justify-center p-4 bg-[#D1D1D1] rounded-md">
                        <Ri24HoursFill />
                    </div>
                    <div className="flex items-start w-full space-x-4">
                        <div className="flex flex-col">
                        <span className="text-sm text-gray-500 lg:text-xs">Housing</span>
                            <span className="font-bold text-gray-800 lg:text-base">$350.00</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-end'>
                    <p className='font-semibold text-sm'>15%</p>
                    <p className='text-xs text-gray-500'>Compared to last month</p>
                </div>
            </div>
            <div className='p-4 overflow-y-auto '>
                <div className='flex justify-between items-center'>
                    <h1>House Rent</h1>
                    <div className='flex items-end flex-col'>
                        <p className='text-gray-600 text-base font-semibold'>$230.00</p>
                        <p className='text-xs text-gray-400'>17th May</p>
                    </div>
                </div>
                <div className='border-b my-2'/>
                <div className='flex justify-between items-center'>
                    <h1>House Rent</h1>
                    <div className='flex items-end flex-col'>
                        <p className='text-gray-600 text-base'>$230.00</p>
                        <p className='text-xs text-gray-400'>17th May</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BreakdownCard