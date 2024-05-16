import { SampleData } from '@/app/constants'
import React from 'react'
import BreakdownCard from './BreakdownCard'
import { AiOutlineShopping } from 'react-icons/ai';
import { BiTaxi, BiCameraMovie } from 'react-icons/bi';
import { FaUtensils } from 'react-icons/fa';
import { GiReceiveMoney, GiPayMoney, GiHealthNormal } from 'react-icons/gi';
import { RiBankLine } from 'react-icons/ri';
import { IExpensesGoalsCategory, ITransaction } from '@/types/types';


interface Props {
    transaction: IExpensesGoalsCategory;
}

const ExpensesGoalsCategoryItem: React.FC<Props> = ({ transaction }) => {
    const {category, amount } = transaction;

    const getIcon = () => {
        switch (category) {
            case 'Transport':
            return <BiTaxi className="text-gray-500" />;
        case 'Food':
            return <FaUtensils className="text-gray-500" />;
        case 'Sales':
            return <GiReceiveMoney className="text-green-500" />
        case 'Entertainment':
            return <BiCameraMovie className="text-purple-500" />; // Icon for Entertainment
        case 'Shopping':
            return <AiOutlineShopping className="text-blue-500" />; // Icon for Shopping
        case 'Salary':
            return <GiReceiveMoney className="text-green-500" />; // Icon for Salary (Revenue)
        case 'Health':
            return <GiHealthNormal className="text-red-500" />; // Icon for Health (Expense)
        case 'Investment':
            return <RiBankLine className="text-yellow-500" />
        default:
                return null;
            }
    };
    
    return (
        <div className="flex bg-white rounded shadow-sm justify-between w-full items-end border-gray-300 p-3 gap-4">
            <div className="flex items-center flex-col justify-center p-4 bg-gray-100 rounded-md">
                {getIcon()}
            </div>

            <div className="flex items-start w-full space-x-4">
                <div className="flex flex-col">
                    <span className="text-sm text-gray-500 lg:text-xs">{category}</span>
                    <span className="font-semibold text-gray-800">${amount}</span>
                </div>
            </div>

            <div className="text-md cursor-pointer flex justify-center h-full w-full items-end flex-col font-semibold text-gray-700">
                <div className="text-sm border-[#299D91] text-[#299D91] rounded-md border px-3 py-2 lg:text-xs whitespace-nowrap">Adjust</div>
            </div>
        </div>
    )
}

export default ExpensesGoalsCategoryItem