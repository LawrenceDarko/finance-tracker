import React from 'react'
import BarChart from '../Graphs/BarChart'
import { faker } from '@faker-js/faker';

const StatisticsCard = () => {

    const labels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const customDatasets = [
        {
            label: 'Current Year',
            data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
            backgroundColor: '#299D91',
        },
        {
            label: 'Previous Year',
            data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
            backgroundColor: '#D1D1D1',
        },
    ];

    return (
        <div className="p-4 rounded">
            <div className="pb-4">
                <h6 className="text-gray-500 text-xl">Statistics</h6>
            </div>
            
            <div className='bg-white w-fulll p-4 rounded shadow-lg h-[300px]'>
                <BarChart labels={labels} datasets={customDatasets} title="Custom Monthly Spendings"/>
            </div>
        </div>
    )
}

export default StatisticsCard

