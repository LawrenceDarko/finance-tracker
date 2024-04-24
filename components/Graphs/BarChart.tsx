'use client'

import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { IBarChartProps } from '@/types/types';
    
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const BarChart: React.FC<IBarChartProps> = ({ labels, datasets, title }) => {

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: `${title}`,
        },
        },
    };
    
        
    const data = {
        labels: labels || [],
        datasets: datasets || [],
    };

    
    return (
        <div className='w-[95%] h-[95%] overflow-x-auto '>
            <Bar options={options} data={data} />
        </div>
    )
}

export default BarChart