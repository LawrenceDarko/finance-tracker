'use client'

import React, { useState } from "react";
import { IoMdPerson, IoMdCall, IoMdCash, IoMdCube, IoMdDocument } from 'react-icons/io';
import { GrOverview } from "react-icons/gr";
import { FaChartPie } from "react-icons/fa6";
import { BsBank2 } from "react-icons/bs";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import TransactTabItem from "./TransactTabItem";
import TransactionItem from "./Cards/TransactionItem";
// import TransactTabItem from "./TransactTabItem.jsx";

interface Transaction {
    id: number;
    category: string;
    name: string;
    transactionType: 'expense' | 'revenue';
    amount: number;
    date: string;
}

const RecentTransactionsComp = () => {
    
    const [activeTab, setActiveTab] = useState('All');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    const transactions: Transaction[] =  [
        { id: 1, category: "Transport", name: "Taxi Fare", transactionType: "expense", amount: 160.0, date: "2023-05-17" },
        { id: 2, category: "Food", name: "Restaurant Bill", transactionType: "expense", amount: 75.0, date: "2023-05-18" },
        { id: 3, category: "Sales", name: "Product Sales", transactionType: "revenue", amount: 1200.0, date: "2023-05-19" },
        { id: 4, category: "Entertainment", name: "Movie Tickets", transactionType: "expense", amount: 40.0, date: "2023-05-20" },
        { id: 5, category: "Transport", name: "Bus Pass", transactionType: "expense", amount: 50.0, date: "2023-05-21" },
        { id: 6, category: "Shopping", name: "Clothing Purchase", transactionType: "expense", amount: 100.0, date: "2023-05-22" },
        // { id: 7, category: "Salary", name: "Monthly Income", transactionType: "revenue", amount: 3000.0, date: "2023-05-23" },
        // { id: 8, category: "Health", name: "Gym Membership", transactionType: "expense", amount: 80.0, date: "2023-05-24" },
        // { id: 9, category: "Food", name: "Groceries", transactionType: "expense", amount: 120.0, date: "2023-05-25" },
        // { id: 10, category: "Investment", name: "Stock Purchase", transactionType: "expense", amount: 500.0, date: "2023-05-26" }
    ];
    

    const renderFilteredTransactions = () => {
        switch (activeTab) {
            case "All":
                return transactions.map((transaction, index) => (
                <TransactionItem key={transaction.id} transaction={transaction} />
                // {index !== transaction.length - 1 && (
                //     <div className="border-b border-gray-100 my-1" />
                // )}
                ));
            case "Revenue":
                return transactions
                .filter((transaction) => transaction.transactionType === "revenue")
                .map((transaction) => (
                    <TransactionItem key={transaction.id} transaction={transaction} />
                ));
            case "Expenses":
                return transactions
                .filter((transaction) => transaction.transactionType === "expense")
                .map((transaction) => (
                    <TransactionItem key={transaction.id} transaction={transaction} />
                ));
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col w-full gap-3">
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
    );
    };

export default RecentTransactionsComp;
