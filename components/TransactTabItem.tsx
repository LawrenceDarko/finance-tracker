import React from 'react'
import { IconType } from 'react-icons';

interface UTransactTabItem {
    icon: React.ReactElement;
    label: string;
    onClick: (value: any) => any;
    isActive: boolean;
    underlineTab?: boolean;
}

const TransactTabItem: React.FC<UTransactTabItem> = ({ icon, label, onClick, isActive, underlineTab }: any) => {
    return (
        <div
        className={`p-1 rounded cursor-pointer hover:bg-gray-200 ${
            isActive
            ? underlineTab
                ? 'text-[#299D91] border-b-2 border-[#299D91] bg-white'
                : 'bg-[#299D91] text-white'
            : ''
        }`}
        onClick={onClick}
        >
        <div className="flex items-center space-x-2">
            {icon}
            <span>{label}</span>
        </div>
        </div>
    );
};

export default TransactTabItem