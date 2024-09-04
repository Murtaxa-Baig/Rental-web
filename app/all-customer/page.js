'use client'
import Link from 'next/link'
import { useState } from 'react';
import Clients from '../(components)/clients/Clients';
import Companies from '../(components)/companies/Companies';
import AllCustomer from '../(components)/allCustomer/AllCustomer';

export default function Page() {
    const [activeTab, setActiveTab] = useState('Clients');

    const renderContent = () => {
        switch (activeTab) {
            case 'Clients':
                return <Clients />;
            case 'Companies':
                return <Companies />;
            case 'All customer':
                return <AllCustomer />;
            default:
                return null;
        }
    }

    return (
        <>
            <div className='mt-10 mb-3'>
                <h1 className='font-bold text-3xl text-gray-500'>Customers
                </h1>
                <p className='text-gray-500'>
                    <Link href="/" className='text-blue-700'>Home</Link> /Customers
                </p>
            </div>
            <div className='p-4 bg-white w-full rounded-md'>
                <div className="w-full">
                    <div className="text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                        <ul className="flex">
                            {['Clients', 'Companies', 'All customer'].map((tab) => (
                                <li
                                    key={tab}
                                    className={`w-[33%] ${activeTab === tab ? 'text-blue-600 border-blue-600' : 'border-transparent'} me-2`}
                                >
                                    <button
                                        className={`inline-block p-4 border-2 w-full rounded-md font-bold ${activeTab === tab
                                            ? 'text-blue-600 border-blue-600 bg-blue-100 dark:text-blue-500 dark:border-blue-500'
                                            : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                                            }`}
                                        onClick={() => setActiveTab(tab)}
                                    >
                                        {tab}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <hr className='text-gray-500 my-4' />

                    <div className="mt-4">
                        {renderContent()}
                    </div>
                </div>

            </div>
        </>
    )
}
