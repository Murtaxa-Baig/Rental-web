'use client'
import Link from 'next/link'
import React, { useState } from 'react';
import OwnFleet from '../(components)/ownFleet/OwnFleet';
import PartnersFleet from '../(components)/partnersFleet/PartnersFleet';
import DeactivatedVehicles from '../(components)/deactivatedVehicles/DeactivatedVehicles';


export default function Page() {
  const [activeTab, setActiveTab] = useState('Own fleet');

  const renderContent = () => {
    switch (activeTab) {
      case 'Own fleet':
        return <OwnFleet />;
      case 'Partners fleet':
        return <PartnersFleet />;
      case 'Deactivated vehicles':
        return <DeactivatedVehicles />;
      default:
        return null;
    }
  }

  return (
    <>
      <div className='mt-10 mb-3'>
        <h1 className='font-bold text-3xl text-gray-500'>Vehicles</h1>
        <p className='text-gray-500'>
          <Link href="/" className='text-blue-700'>Home</Link> /Vehicles
        </p>
      </div>
      <div className='flex'>
        <main className="flex-grow w-full md:w-17/20 lg:w-[75%]">
          <div className="p-6 bg-white rounded-lg mr-3">
            <div className="w-full">
              <div className="text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                <ul className="flex">
                  {['Own fleet', 'Partners fleet', 'Deactivated vehicles'].map((tab) => (
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
        </main>
      </div>
    </>
  )
}
