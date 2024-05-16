'use client'

import TransactionItem from '@/components/Cards/TransactionItem';
import TransactTabItem from '@/components/TransactTabItem'
import { ITableColumn, ITransaction } from '@/types/types';
import DBLTable from 'dbl-table';
// import DBLTable from '@/components/Tables/DBLTable';
import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineShopping } from 'react-icons/ai';
import { BiCameraMovie, BiTaxi } from 'react-icons/bi';
import { BsFillClipboard2DataFill } from 'react-icons/bs';
import { FaChartPie, FaUtensils } from 'react-icons/fa';
import { GiReceiveMoney, GiPayMoney, GiHealthNormal } from 'react-icons/gi';
import { IoMdRefresh } from 'react-icons/io';
import { RiBankLine } from 'react-icons/ri';

const Transactions = () => {
    const [activeTab, setActiveTab] = useState('All');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    const transactions: ITransaction[] =  [
        { id: 1, category: "Transport", name: "Taxi Fare", transactionType: "expense", amount: 160.0, date: "2023-05-17" },
        { id: 2, category: "Food", name: "Restaurant Bill", transactionType: "expense", amount: 75.0, date: "2023-05-18" },
        { id: 3, category: "Sales", name: "Product Sales", transactionType: "revenue", amount: 1200.0, date: "2023-05-19" },
        { id: 4, category: "Entertainment", name: "Movie Tickets", transactionType: "expense", amount: 40.0, date: "2023-05-20" },
        { id: 5, category: "Transport", name: "Bus Pass", transactionType: "expense", amount: 50.0, date: "2023-05-21" },
        { id: 6, category: "Shopping", name: "Clothing Purchase", transactionType: "expense", amount: 100.0, date: "2023-05-22" },
        { id: 7, category: "Salary", name: "Monthly Income", transactionType: "revenue", amount: 3000.0, date: "2023-05-23" },
        { id: 8, category: "Health", name: "Gym Membership", transactionType: "expense", amount: 80.0, date: "2023-05-24" },
        { id: 9, category: "Food", name: "Groceries", transactionType: "expense", amount: 120.0, date: "2023-05-25" },
        { id: 10, category: "Investment", name: "Stock Purchase", transactionType: "expense", amount: 500.0, date: "2023-05-26" }
    ];

    const renderFilteredTransactions = () => {
        switch (activeTab) {
            case "All":
                return (
                    <div>
                        <React.Fragment>
                            <TransactionsTable data={transactions}/>
                        </React.Fragment>
                    </div>
                );
    
            case "Revenue":
                const revenueTransactions = transactions.filter(
                    (transaction) => transaction.transactionType === "revenue"
                );
                return (
                    <div>
                        <React.Fragment>
                            <TransactionsTable data={revenueTransactions}/>
                        </React.Fragment>
                    </div>
                );
    
            case "Expenses":
                const expenseTransactions = transactions.filter(
                    (transaction) => transaction.transactionType === "expense"
                );
                return (
                    <div>
                        <React.Fragment>
                            <TransactionsTable data={expenseTransactions}/>
                        </React.Fragment>
                    </div>
                );
    
            default:
                return null;
        }
    };
    
    
    return (
        <div className="flex flex-col w-full gap-3 p-4">
            <div className="w-full border-gray-200">
                <div className="flex justify-start gap-2 p-2 ">
                    <TransactTabItem underlineTab icon={<BsFillClipboard2DataFill />} label="All" onClick={() => handleTabClick('All')} isActive={activeTab === 'All'} />
                    <TransactTabItem underlineTab icon={<BsFillClipboard2DataFill />} label="Revenue" onClick={() => handleTabClick('Revenue')} isActive={activeTab === 'Revenue'} />
                    <TransactTabItem underlineTab icon={<FaChartPie />} label="Expenses" onClick={() => handleTabClick('Expenses')} isActive={activeTab === 'Expenses'} />
                </div>
            </div>
            <div className="w-full">
                {renderFilteredTransactions()}
            </div>
        </div>
    )
}

export default Transactions

export const TransactionsTable = ({data}: {data: any}) => {
    const [isLoading, setIsLoading] = useState(false)

    const getIcon = (category: string) => {
        switch (category) {
            case 'Transport':
            return <BiTaxi className="text-gray-500" />;
        case 'Food':
            return <FaUtensils className="text-gray-500" />;
        case 'Sales':
            return data?.transactionType === 'revenue' ? <GiReceiveMoney className="text-green-500" /> : <GiPayMoney className="text-red-500" />;
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

    const columns: ITableColumn[] = [
        { 
            label: 'Category', 
            key: 'category', 
            renderCell: (value: string) => (
                <div className="flex items-center gap-2">
                    {getIcon(value)}
                    <p>{value}</p>
                </div>
            )
        },
        { label: 'Name', key: 'name', },
        { 
            label: 'Transaction Type', 
            key: 'transactionType',
            renderCell: (value: string) => (
                <p className={value === 'revenue' ? 'text-green-500' : 'text-red-500'}>{value}</p>
            )
        },
        { 
            label: 'Amount', 
            key: 'amount',
            renderCell: (value: number) => <p>GHS {value}</p>
        },
        { label: 'Date', key: 'date' },
    ];

    const toolbars: React.ReactNode[] = [
        <div key="toolbar" className="flex items-center justify-center gap-2">
            <button key="newUnit" className="px-3 py-1 text-white bg-[#299D91] rounded">
                <Link href='/merchants/add-merchant'>Add Transaction</Link>
            </button>
            {/* <IoMdRefresh title="Refresh"  size={24} className={`${isLoading ? 'animate-spin' : ''} cursor-pointer`}/> */}
        </div>
    ];

    return (
        <div className="min-w-full overflow-x-auto">
            <DBLTable
                data={data}
                columns={columns}
                enableServerPagination={false}
                enableStripStyle={false}
                removeStraightLines={true}
                tableTitle="Transactions"
                printTools
                // loading={isLoading}
                toolbars={toolbars}
                showSearch={true}
                // onRowSelection={onRowSelection}
                // showActions={showActions}

                customStyles={{
                    component: {boxShadow: 'none'}
                }}
            />
        </div>
    );
}