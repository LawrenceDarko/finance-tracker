import React from 'react';
import BillItem from './BillItem'; // Import your BillItem component

const BillingList = () => {
    // Sample billing data array (you can replace this with your actual data)
    const billingData = [
        { date: new Date(), companyName: 'Adobe - Monthly', logo: '/icons/logo.svg', amount: 99.99, lastCharge: '14 May, 2022' },
        { date: new Date(), companyName: 'Microsoft - Annual', logo: '/icons/logo.svg', amount: 499.99, lastCharge: '10 April, 2022' },
        // { date: new Date(), companyName: 'Google - Quarterly', logo: '/icons/google-logo.svg', amount: 299.99, lastCharge: '21 June, 2022' }
    ];

    return (
        <div className="relative flex flex-col min-w-0 h-[250px] mb-6 break-words overflow-hidden bg-white rounded shadow-lg xl:mb-0 p-4 xl:px-6">
            {billingData.map((item, index) => (
                <div key={index}>
                    <BillItem
                        date={item.date}
                        companyName={item.companyName}
                        logo={item.logo}
                        amount={item.amount}
                        lastCharge={item.lastCharge}
                    />
                    {index !== billingData.length - 1 && (
                        <div className="border-b border-gray-100 my-1" />
                    )}
                </div>
            ))}
        </div>
    );
};

export default BillingList;
