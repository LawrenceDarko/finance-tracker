import React from 'react';

const AccountDetailsCard = ({ accountId }: { accountId: string }) => {
    // Sample account details (replace with actual data)
    const accountDetails = {
        bankName: 'Example Bank.',
        accountType: 'Savings',
        balance: '$5000.00',
        branchName: 'Main Branch',
        accountNumber: '123 456 7***'
    };

    return (
        <div className="w-full h-full overflow-auto">
            <div className='grid grid-cols-2 gap-y-8 lg:grid-cols-3 h-full'>
                <div>
                    <h1 className='text-sm text-gray-400'>Bank Name</h1>
                    <p className='font-bold text-base text-gray-600'>{accountDetails.bankName}</p>
                </div>
                <div>
                    <h1 className='text-sm text-gray-400'>Account Type</h1>
                    <p className='font-bold text-base text-gray-600'>{accountDetails.accountType}</p>
                </div>
                <div>
                    <h1 className='text-sm text-gray-400'>Balance</h1>
                    <p className='font-bold text-base text-gray-600'>{accountDetails.balance}</p>
                </div>
                <div>
                    <h1 className='text-sm text-gray-400'>Branch Name</h1>
                    <p className='font-bold text-base text-gray-600'>{accountDetails.branchName}</p>
                </div>
                <div>
                    <h1 className='text-sm text-gray-400'>Account Number</h1>
                    <p className='font-bold text-base text-gray-600'>{accountDetails.accountNumber}</p>
                </div>
            </div>
            {/* Two buttons Edit and Remove */}
            <div className='flex gap-4 mt-8'>
                <button className='bg-[#299D91] text-white px-4 py-2 rounded'>Edit Details</button>
                <button className='text-sm text-red-500'>Remove</button>
            </div>
        </div>
    );
};

export default AccountDetailsCard;
