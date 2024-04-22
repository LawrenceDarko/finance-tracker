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
    
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
    legend: {
        position: 'top' as const,
    },
    title: {
        display: true,
        text: 'Monthly Spendings',
    },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
const data = {
    labels,
    datasets: [
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
    ],
};

const BarChart = () => {
    return (
        <div className='w-full h-[95%] overflow-x-auto relative'>
            <Bar options={options} data={data} />
            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi minus fuga placeat neque recusandae animi ullam explicabo voluptate maiores cumque voluptates odio et eos qui exercitationem, quas doloribus alias iure.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere voluptate alias sapiente voluptatibus provident culpa quod at consequuntur exercitationem suscipit libero repellat cupiditate tenetur, molestias ab non sit, accusantium quisquam!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illo autem voluptates voluptatem. Nam et nulla odio quibusdam voluptas, culpa mollitia provident dolores rem alias! Ullam facere explicabo ab amet!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati at blanditiis maxime, consectetur eligendi aspernatur ullam illo porro dolorum sapiente aperiam. Officiis illo vel minima aliquid voluptatibus mollitia officia dignissimos.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam vitae ipsam natus non! Assumenda quia iste illo voluptatum perspiciatis velit commodi fuga? Accusamus veritatis, ullam at debitis cupiditate voluptates error?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi minus fuga placeat neque recusandae animi ullam explicabo voluptate maiores cumque voluptates odio et eos qui exercitationem, quas doloribus alias iure. */}
        </div>
    )
}

export default BarChart