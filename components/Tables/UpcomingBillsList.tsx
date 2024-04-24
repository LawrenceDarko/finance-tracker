'use client'

import React, { useEffect, useState } from "react";
import DBLTable from "dbl-table";
import { IoMdRefresh } from "react-icons/io";
import Link from "next/link";
import { merchantListData, upcomingBillsData } from "@/app/constants";
import { ITableColumn } from "@/types/types";
import Image from "next/image";



const UpcomingBillsList = () => {
    const [isLoading, setIsLoading] = useState(false)
    
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const columns: ITableColumn[] = [
        { 
            label: 'Due Date', 
            key: 'date', 
            renderCell: (value: any) => (
                <div className="flex items-center w-[100px] flex-col justify-center py-3 bg-gray-100 rounded-md p-2">
                    <span className="text-sm text-gray-500">{months[value.getMonth()]}</span>
                    <span className="text-2xl font-bold text-gray-700">{value.getDay()}</span>
                </div>
            ),
        },
        { 
            label: 'Name', 
            key: 'name',
            renderCell: (value: string) => (
                <div className="flex items-center gap-2">
                    <div className="text-md p-2 rounded-md font-bold text-gray-700">{value}</div>
                </div>
            ),
        },
        { 
            label: 'Logo', 
            key: 'logo',
            renderCell: (value: string) => (
                <Image src={value} alt="logo" width={40} height={40} className="rounded-full" />
            ),
        },
        { label: 'Item Description', key: 'description' },
        {
            label: 'Last Charged',
            key: 'lastCharged',
            renderCell: (value: string) => (
                <div className="flex">
                    {value}
                </div>
            ),
        },
        { 
            label: 'Amount', 
            key: 'amount',
            renderCell: (value: string) => (
                <div className="flex">
                    <div className="text-md p-2 border rounded-md font-bold text-gray-700">${value}</div>
                </div>
            ),
        },
    ];

    const onRowSelection = (rowData: any) => {
        console.log(rowData);
    };

    const toolbars: React.ReactNode[] = [
        <div key="toolbar" className="flex items-center justify-center gap-2">
            <button key="newUnit" className="px-3 py-1 text-white bg-[#299D91] rounded">
                <Link href='/merchants/add-merchant'>Add Bill</Link>
            </button>
            <IoMdRefresh title="Refresh"  size={24} className={`${isLoading ? 'animate-spin' : ''} cursor-pointer`}/>
        </div>
    ];

    

    return (
        <div className="min-w-full overflow-x-auto">
            <DBLTable
                data={upcomingBillsData}
                columns={columns}
                enableServerPagination={false}
                enableStripStyle={false}
                removeStraightLines={true}
                // tableTitle="Transactions "
                printTools
                loading={isLoading}
                toolbars={toolbars}
                // showSearch={false}
                // onRowSelection={onRowSelection}
                // showActions={showActions}
                customStyles={{
                    // component: {boxShadow: 'none'}
                }}
            />
        </div>
    );
}

export default UpcomingBillsList;
