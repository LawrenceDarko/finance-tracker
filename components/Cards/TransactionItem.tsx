import { type } from 'os';
import React from 'react'
import { AiOutlineShopping } from 'react-icons/ai';
import { BiCameraMovie, BiTaxi } from "react-icons/bi";
import { FaUtensils } from 'react-icons/fa';
import { GiReceiveMoney, GiPayMoney, GiHealthNormal } from 'react-icons/gi';
import { RiBankLine } from 'react-icons/ri';

interface Transaction {
    id: number;
    category: string;
    name: string;
    transactionType: 'expense' | 'revenue';
    amount: number;
    date: string;
}

interface Props {
    transaction: Transaction;
}



const TransactionItem: React.FC<Props> = ({ transaction }) => {
    const { name, category, transactionType, amount, date } = transaction;

    const getIcon = () => {
        switch (category) {
            case 'Transport':
            return <BiTaxi className="text-gray-500" />;
        case 'Food':
            return <FaUtensils className="text-gray-500" />;
        case 'Sales':
            return transactionType === 'revenue' ? <GiReceiveMoney className="text-green-500" /> : <GiPayMoney className="text-red-500" />;
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

    const formatAmount = (value: number) => {
        return value.toFixed(2);
    };

    const renderAmount = () => {
        return transactionType === 'revenue' ? (
            <span className="text-green-500 font-semibold">${formatAmount(amount)}</span>
        ) : (
            <span className="text-red-500 font-semibold">-${formatAmount(amount)}</span>
        );
    };
    
    return (
        <div className="flex justify-between w-full items-end border-gray-300 py-3 gap-4">
            <div className="flex items-center flex-col justify-center p-4 bg-gray-100 rounded-md">
                {getIcon()}
            </div>

            <div className="flex items-start w-full space-x-4">
                <div className="flex flex-col">
                    <span className="font-semibold text-gray-800">{name}</span>
                    <span className="text-sm text-gray-500 lg:text-xs">{category}</span>
                </div>
            </div>

            <div className="text-md rounded-md flex flex-col font-semibold text-gray-700">
                {renderAmount()}
                <span className="text-sm text-gray-500 lg:text-xs whitespace-nowrap">{date}</span>
            </div>
        </div>
    )
}

export default TransactionItem