'use client'

import React, { useState } from 'react'
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import DonutChart from '../Graphs/DonutChart';
import TabItem from '../TabItem';

const TotalBalanceCards = () => {
    const [activeTab, setActiveTab] = useState<number>(1);

    const chartData = [30, 20, 25];
    const chartLabels = ['Red', 'Blue', 'Yellow'];
    const centerText = 'Total'; // Customize this text

    const isPreviousDisabled = activeTab === 1;
    const isNextDisabled = activeTab === 3;

    const handleTabClick = (tab: number) => {
        setActiveTab(tab);
    };

    const handlePrevious = () => {
        const prevTab = activeTab > 1 ? activeTab - 1 : 3; // Loop back to last tab if at the first tab
        setActiveTab(prevTab);
    };

    const handleNext = () => {
        const nextTab = activeTab < 3 ? activeTab + 1 : 1; // Loop back to first tab if at the last tab
        setActiveTab(nextTab);
    };


    const renderCard = () => {
        switch (activeTab) {
            case 1:
                return (
                    <div className="w-full h-full flex-col flex-between bg-white ">
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='text-md font-bold text-gray-700'>My Spending for April</h1>
                            <p className='text-xs text-gray-400'>Well done, your budget is on track</p>
                        </div>
                        <div className='w-full h-full'>
                            <DonutChart data={chartData} labels={chartLabels} centerText={centerText} />
                        </div>
                    </div>
                    );
            case 2:
                return (
                    <div className="w-full h-full bg-white">
                        2
                    </div>
                );
            case 3:
                return (
                    <div className="w-full h-full bg-white">
                        3
                    </div>
                )
            default:
                return null;
        }
    };
    
    return (
        <div>
        
        <div className="relative flex flex-col min-w-0 h-[250px] mb-6 break-words bg-white rounded shadow-lg xl:mb-0">
            <div className="flex-auto p-4">
                <div className="flex h-full justify-between flex-col">
                    <div className="w-full flex-[0.9] h-full overflow-hidden">
                        {renderCard()}
                    </div>
                    <div className="w-full flex-[0.1] flex-between">
                        <button
                                onClick={handlePrevious}
                                className={`cursor-pointer gap-1 text-sm flex-center ${isPreviousDisabled ? 'text-gray-400' : ''}`}
                                disabled={isPreviousDisabled}
                            >
                                <MdOutlineChevronLeft />
                                Previous
                        </button>
                        <div className='flex'>
                            <TabItem onClick={() => handleTabClick(1)} isActive={activeTab === 1} />
                            <TabItem onClick={() => handleTabClick(2)} isActive={activeTab === 2} />
                            <TabItem onClick={() => handleTabClick(3)} isActive={activeTab === 3} />
                        </div>
                        <button
                            onClick={handleNext}
                            className={`cursor-pointer gap-1 text-sm flex-center ${isNextDisabled ? 'text-gray-400' : ''}`}
                            disabled={isNextDisabled}
                        >
                            Next
                            <MdOutlineChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default TotalBalanceCards