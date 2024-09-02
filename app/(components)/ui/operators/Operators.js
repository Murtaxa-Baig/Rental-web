'use client'
import React from 'react'
import { useState } from 'react';

export default function Operators() {
    const [activeTab, setActiveTab] = useState('Active');

    const renderContent = () => {
        switch (activeTab) {
            case 'Active':
                return <input />;
            case 'Deactivated':
                return <input />;
            default:
                return null;
        }
    }

    return (
        <>
            <div className="w-full">
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
                    <ul className="flex flex-col sm:flex-row">
                        {['Active', 'Deactivated'].map((tab) => (
                            <li
                                key={tab}
                                className={`w-full sm:w-[50%] ${activeTab === tab ? 'text-blue-600 border-blue-600' : 'border-transparent'} mb-2 sm:mb-0 sm:mr-2`}
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


            {/* for medium and large screen */}
            <div className='hidden sm:flex px-3'>
                <p className='w-[10%] text-[12px] text-gray-400'>NO</p>
                <p className='w-[40%] text-[12px] text-gray-400'>USERNAME</p>
                <p className='w-[30%] text-[12px] text-gray-400'>EMAIL</p>
                <p className='w-[18%] text-end text-[12px] text-gray-400'>EDIT</p>
            </div>



            {/* for small screen only  */}
            <div className='flex justify-between md:hidden px-2'>
                <p className='w-[10%] text-[12px] text-gray-400'>NO</p>
                <p className='w-[70%] text-[12px] text-gray-400'>USERNAME</p>
                <p className='w-[10%] text-[12px] text-gray-400'>EDIT</p>
            </div>




        </>
    )
}
