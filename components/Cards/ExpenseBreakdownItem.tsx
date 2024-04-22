import React from 'react';
import { FiArrowDown, FiArrowRight, FiArrowUp } from 'react-icons/fi';
import { AiOutlineShopping } from 'react-icons/ai';
import { BiTaxi, BiCameraMovie } from 'react-icons/bi';
import { FaUtensils } from 'react-icons/fa';
import { ExpenseItem } from '@/types/types';

interface ExpenseBreakdownItemProps {
    expense: ExpenseItem;
}

const ExpenseBreakdownItem: React.FC<ExpenseBreakdownItemProps> = ({ expense }) => {
    const { category, name, amount, percentage } = expense;

    const getIcon = (category: string) => {
        switch (category) {
            case 'Transport':
                return <BiTaxi className="text-gray-500" />;
            case 'Food':
                return <FaUtensils className="text-gray-500" />;
            case 'Entertainment':
                return <BiCameraMovie className="text-purple-500" />;
            case 'Shopping':
                return <AiOutlineShopping className="text-blue-500" />;
            default:
                return null;
        }
    };

    const renderArrow = (percentage: number) => {
        if (percentage > 0) {
            return <FiArrowUp className="text-green-500" />;
        } else if (percentage < 0) {
            return <FiArrowDown className="text-red-500" />;
        } else {
            // If percentage is exactly 0, you can handle this case if needed
            return null;
        }
    };

    return (
        <div className="flex h-16 justify-between w-full items-center border-gray-300 py-2 gap-4">
            <div className="flex h-full items-center flex-col justify-center p-4 bg-gray-100 rounded-md">
                {getIcon(category)}
            </div>
            <div className="flex items-start w-full">
                <div className="flex flex-col">
                    <span className="text-sm text-gray-500 lg:text-xs">{name}</span>
                    <span className="font-bold text-gray-800 lg:text-sm">${amount.toFixed(2)}</span>
                    <span className="text-sm text-gray-500 lg:text-xs flex items-center">{Math.abs(percentage)}% {renderArrow(percentage)}</span>
                </div>
            </div>
            <div className="text-md p-2 font-bold text-gray-700">
                <FiArrowRight />
            </div>
        </div>
    );
};

export default ExpenseBreakdownItem;
