'use client'

import React from 'react';
import { PiMedalMilitaryDuotone } from "react-icons/pi";
import { TbTargetArrow } from 'react-icons/tb';
import HalfDonutComponent from '../Graphs/HalfDonutChart';
import DonutChart from '../Graphs/DonutChart';
import { FiEdit3 } from "react-icons/fi";

const GoalsCard = () => {
    const chartData = [30, 20];
    const chartLabels = ['Red', 'Blue'];

    return (
        <div className="relative flex flex-col min-w-0 h-[250px] mb-6 break-words overflow-hidden bg-white rounded shadow-lg xl:mb-0 p-4 xl:px-6">
            <div className="flex justify-between items-center border-b pb-2 mb-2">
                <div className="text-lg font-bold">$12,000</div>
                <div className="text-gray-500">May, 2023</div>
            </div>
            <div className="flex justify-between">
                <div className="flex flex-col gap-4 items-start">
                    <div className="flex items-start mb-1">
                        <PiMedalMilitaryDuotone size={21} className='mt-1'/>
                        <div className="ml-2">
                            <p className='text-xs text-gray-400'>Target Achieved</p>
                            <p className='text-lg font-semibold'>$12,500</p>
                        </div>
                    </div>
                    <div className="flex items-start mb-1">
                        <TbTargetArrow size={21} className='mt-1'/>
                        <div className="ml-2">
                            <p className='text-xs text-gray-400'>This month Target</p>
                            <p className='text-lg font-semibold'>$20,000</p>
                        </div>
                    </div>
                    <div className='px-3 py-1 flex gap-1 cursor-pointer justify-center items-center rounded border border-[#299D91]'>
                        <p className='text-[#299D91]'>Adjust Target</p>
                        <FiEdit3 color='#299D91'/>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center">
                    <div className='relative w-32 h-32'>
                        <HalfDonutComponent data={chartData} labels={chartLabels} />
                    </div>
                    <p className='text-sm'>Target vs Achievement</p>
                </div>
            </div>
        </div>
    );
};

export default GoalsCard;


