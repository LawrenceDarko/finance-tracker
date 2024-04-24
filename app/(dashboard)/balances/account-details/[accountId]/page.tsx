import AccountDetailsCard from '@/components/Cards/AccountDetailsCard'
import TransactionsHistory from '@/components/Tables/TransactionsHistory'
import React from 'react'

const AccountDetails = ({params}: {params: { accountId: string}}) => {
    return (
        <div className="p-4 rounded flex flex-col gap-10">
            <div>
                <div className="pb-4">
                    <h6 className="text-gray-500 text-xl">Account Details</h6>
                </div>
                
                <div className="bg-white w-fulll p-4 rounded shadow-lg min-h-[230px]">
                    <AccountDetailsCard accountId={params.accountId} />
                </div>
            </div>

            <div>
                <div className="pb-4">
                    <h6 className="text-gray-500 text-xl">Transactions History</h6>
                </div>
                
                {/* <div className="bg-white w-fulll overflow-auto p-4 rounded shadow-lg max-h-[600px]"> */}
                    <TransactionsHistory />
                {/* </div> */}
            </div>
        </div>
    )
}

export default AccountDetails