'use client'
import Link from 'next/link'
import React, { useState } from 'react';
import AddClient from '../(components)/addClient/AddClient';
import AddAgency from '../(components)/addAgency/AddAgency';
import AddStaffDriver from '../(components)/addStaffDriver/AddStaffDriver';

export default function Page() {
  const [activeTab, setActiveTab] = useState('Add Client / Driver');

  const renderContent = () => {
    switch (activeTab) {
      case 'Add Client / Driver':
        return <AddClient />;
      case 'Add Agency':
        return <AddAgency />;
      case 'Add Staff Driver':
        return <AddStaffDriver />;
      default:
        return null;
    }
  }

  return (
    <>
      <div className='mt-10 mb-3'>
        <h1 className='font-bold text-3xl text-gray-500'>Add Client or Agency</h1>
        <p className='text-gray-500'>
          <Link href="/" className='text-blue-700'>Home</Link> /Add Client or Agency
        </p>
      </div>
      <div className='flex'>
        <main className="flex-grow w-full md:w-17/20 lg:w-[75%]">
          <div className="p-6 bg-white rounded-lg mr-3">
            <div className="w-full">
              <div className="text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                <ul className="flex">
                  {['Add Client / Driver', 'Add Agency', 'Add Staff Driver'].map((tab) => (
                    <li
                      key={tab}
                      className={`w-[33%] ${activeTab === tab ? 'text-blue-600 border-blue-600' : 'border-transparent'} me-2`}
                    >
                      <Link
                        href="#"
                        className={`inline-block p-4 border-b-2 w-full rounded-t-lg font-bold ${activeTab === tab
                          ? 'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500'
                          : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                          }`}
                        onClick={() => setActiveTab(tab)}
                      >
                        {tab}
                      </Link>
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
        </main>
      </div>
    </>
  )
}
