import React from 'react'
import { IconType } from 'react-icons';

interface UTabItem {
    onClick: (value: any) => any;
    isActive: boolean;
}

const TabItem: React.FC<UTabItem> = ({ onClick, isActive}: any) => {
    return (
        <div
            className=''
            onClick={onClick}
        >
        <div className="flex items-center space-x-2">
            <span className={`${isActive ? 'text-[#299D91]' : 'text-[#D1D1D1]'} text-xl`}>•</span>
        </div>
        </div>
    );
};

export default TabItem