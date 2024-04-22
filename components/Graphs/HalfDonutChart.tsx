import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement, Tooltip, Legend} from 'chart.js'

Chart.register(ArcElement, Tooltip, Legend);

interface HalfDonutChartProps {
    data: number[];
    labels: string[];
    centerText?: string;
}

const HalfDonutChart: React.FC<HalfDonutChartProps> = ({ data, labels, centerText }) => {
    const chartData = {
        // labels: labels,
        datasets: [
            {
                // label: 'Total Balance',
                data,
                backgroundColor: ['#299D91', '#E8E8E8'],
            },
        ],
        
    };

    const options: any = {
        borderWidth: 0,
        cutout: "80%",
        circumference: 180,
        rotation: 270,
        // borderRadius: 1000,
        spacing: -2,
    };


    // return <Doughnut data={chartData} options={options} />;
    return (
        <div className='flex-center h-[90%] relative'>
            <div className='w-[150px]'>
                <Doughnut data={chartData} options={options}/>
            </div>
        </div>
    )
};

export default HalfDonutChart;
