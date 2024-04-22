import React from 'react'
import BarChart from '../Graphs/BarChart'

const StatisticsCard = () => {
    return (
        <div className="p-4 rounded">
            <div className="pb-4">
                <h6 className="text-gray-500 text-xl">Statistics</h6>
            </div>
            
            <div className="bg-white p-4 rounded shadow-lg h-[300px]">
                <BarChart />
            </div>
        </div>
    )
}

export default StatisticsCard

