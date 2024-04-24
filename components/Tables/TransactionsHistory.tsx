'use client'

import React, { useEffect, useState } from "react";
import DBLTable from "dbl-table";
import { IoMdRefresh } from "react-icons/io";
import Link from "next/link";
import { merchantListData } from "@/app/constants";
import { ITableColumn } from "@/types/types";



const TransactionsHistory = () => {
    const [merchantList, setMerchantList] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false)
    
    
    
    

    const columns: ITableColumn[] = [
        { label: 'Name', key: 'name' },
        { label: 'Email', key: 'email' },
        { label: 'Phone', key: 'phone' },
        {
            label: 'Status',
            key: 'status',
            renderCell: (value: string) => (
                <div className="flex">
                    {value}
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
                <Link href='/merchants/add-merchant'>Add Transaction</Link>
            </button>
            <IoMdRefresh title="Refresh"  size={24} className={`${isLoading ? 'animate-spin' : ''} cursor-pointer`}/>
        </div>
    ];

    

    return (
        <div className="min-w-full overflow-x-auto">
            <DBLTable
                data={merchantListData}
                columns={columns}
                enableServerPagination={false}
                enableStripStyle={false}
                removeStraightLines={true}
                tableTitle="Transactions "
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

export default TransactionsHistory;
