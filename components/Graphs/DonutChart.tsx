import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement, Tooltip, Legend} from 'chart.js'

Chart.register(ArcElement, Tooltip, Legend);

interface DonutChartProps {
    data: number[];
    labels: string[];
    centerText?: string;
}

const DonutChart: React.FC<DonutChartProps> = ({ data, labels, centerText }) => {
    const chartData = {
        // labels: labels,
        datasets: [
            {
                // label: 'Total Balance',
                data,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
        ],
        
    };

    const options: any = {
        cutout: '70%',
        maintainAspectRatio: false, // Disable aspect ratio to freely adjust chart dimensions
        responsive: true,
        plugins: {
            tooltip: {
                enabled: true,
            },
            legend: {
                display: true,
                position: 'right',
                align: 'center',
                labels: {
                    boxWidth: 10,
                    padding: 10,
                },
            },
        },
        elements: {
            center: {
                text: centerText,
                fontStyle: 'Arial', // Customize as needed
                color: '#03aa9c',
                sidePadding: 10,
            },
        },
    };

    const textCenter = {
        id: 'text-center',
        beforeDatasetsDraw: (chart: any,) => {
            const { ctx, data } = chart;
            ctx.save();
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.font = 'bolder 20px Arial';
            ctx.fillText('$4,200', chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y);
            ctx.restore();
        }
    }

    // return <Doughnut data={chartData} options={options} />;
    return (
        <div className='flex-center h-[90%] relative'>
            <div className='w-[150px]'>
                <Doughnut data={chartData} options={options} plugins={[textCenter]}/>
            </div>
            <div className='absolute right-0 flex text-gray-500 text-sm flex-col justify-between h-[90%]'>
                <div className='flex flex-col leading-tight'>
                    <p className='font-semibold text-gray-700 text-[13px]'>Wants</p>
                    <p className='text-[10px] text-gray-400'>$1,500/$2,000</p>
                </div>
                <div className='flex flex-col leading-tight'>
                    <p className='font-semibold text-gray-700 text-[13px]'>Saved</p>
                    <p className='text-[10px] text-gray-400'>$1,500/$2,000</p>
                </div>
                <div className='flex flex-col leading-tight'>
                    <p className='font-semibold text-gray-700 text-[13px]'>Needs</p>
                    <p className='text-[10px] text-gray-400'>$1,500/$2,000</p>
                </div>
            </div>
        </div>
    )
};

export default DonutChart;
