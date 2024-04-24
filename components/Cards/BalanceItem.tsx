import React from 'react';
import Image from 'next/image';
import { FiChevronRight } from 'react-icons/fi';
import { BalanceItemData } from '@/types/types';
import Link from 'next/link';


const BalanceItem: React.FC<{ data: BalanceItemData }> = ({ data }) => {
    const { cardType, cardLogoSrc, accountNumber, totalAmount, bankName } = data;

    return (
        <div className='bg-white shadow-lg w-full rounded-md p-4'>
            <div className='flex justify-between items-center'>
                <p>{cardType}</p>
                <div className='flex justify-center gap-1 items-center'>
                    <p className='text-sm'>{bankName}</p>
                    {cardLogoSrc && <Image src={cardLogoSrc} height={45} width={45} alt='logo' />}
                </div>
            </div>
            <div className='my-3 border-b border-gray-100' />
            <div>
                <h1 className='font-bold text-xl'>{accountNumber}</h1>
                <p className='text-sm text-gray-500'>Account Number</p>

                <h1 className='font-bold text-xl pt-3'>{totalAmount}</h1>
                <p className='text-sm text-gray-500'>Total Amount</p>
            </div>
            <div className='flex w-full justify-between items-center'>
                <p className='text-[#299D91]'>Remove</p>
                <Link href={`/balances/account-details/${accountNumber}`} className='flex text-white rounded-md px-4 py-2 bg-[#299D91] justify-between items-center gap-2'>
                    <p className=''>Details</p>
                    <FiChevronRight className='text-white' />
                </Link>
            </div>
        </div>
    );
};

export default BalanceItem