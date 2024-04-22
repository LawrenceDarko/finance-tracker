import React from 'react';

interface BillItemProps {
    date: Date;
    companyName: string;
    lastCharge: string;
    amount: number;
    logo: string;
}

const BillItem: React.FC<BillItemProps> = ({date, companyName, lastCharge, amount, logo}) => {

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Get month index (0-based) from the date object
    const monthIndex = date.getMonth();

    // Get month name from the months array using the month index
    const monthName = months[monthIndex];

    return (
        <div className="flex justify-between w-full items-center border-gray-300 py-3 gap-4">
            {/* Date Container */}
            <div className="flex items-center flex-col justify-center py-3 bg-gray-100 rounded-md p-2">
                <span className="text-sm text-gray-500">{monthName}</span>
                <span className="text-2xl font-bold text-gray-700">{date.getDay()}</span>
            </div>

            <div className="flex items-start w-full space-x-4">
                <div className="flex flex-col">
                    <img src={logo} alt="Logo" className="h-9 w-9 rounded-full" />
                    <span className="font-bold text-gray-800 lg:text-sm">{companyName}</span>
                    <span className="text-sm text-gray-500 lg:text-xs">Last Charge - {lastCharge}</span>
                </div>
            </div>

            <div className="text-md p-2 border rounded-md font-bold text-gray-700">${amount}</div>
        </div>
    );
};

export default BillItem;
