'use client'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import Image from 'next/image';
import plus from '@/public/images/plusIcon.svg'
import Operators from '../(components)/ui/operators/Operators';
import Partners from '../(components)/ui/partners/Partners';
import Drivers from '../(components)/ui/drivers/Drivers';
import NewUserModal from '../(components)/modal/newUserModal/NewUserModal';

export default function Page() {
  const [activeTab, setActiveTab] = useState('Operators');
  const [showModal, setShowModal] = useState(false)

  const renderContent = () => {
    switch (activeTab) {
      case 'Operators':
        return <Operators />;
      case 'Drivers':
        return <Drivers />;
      case 'Partners':
        return <Partners />;
      default:
        return null;
    }
  }

  return (
    <>
      <div className='mt-10 mb-3'>
        <h1 className='font-bold text-3xl text-gray-500'>Users and groups</h1>
        <p className='text-gray-500'>
          <Link href="/" className='text-blue-700'>Home</Link> / Users and groups
        </p>
      </div>

      <div className='flex flex-col'>
        <main className="flex-grow w-full md:w-[100%] lg:w-[100%]">
          <div className="p-4 bg-white rounded-lg mr-3">
            <div className="w-full flex flex-col sm:flex-row justify-between items-center">
              <div className="text-sm w-full sm:w-[50%] font-medium text-center text-gray-500 dark:text-gray-400 mb-4 sm:mb-0">
                <ul className="flex flex-col sm:flex-row w-full gap-2">
                  {['Operators', 'Drivers', 'Partners'].map((tab) => (
                    <li
                      key={tab}
                      className={`w-full sm:w-[33%] ${activeTab === tab ? 'text-blue-600 border-blue-600' : 'border-transparent'} mb-2 sm:mb-0`}
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

              <input
                type='text'
                className='w-full sm:w-[30%] p-2 border-[1px] rounded-sm outline-none'
                placeholder='Search'
              />
            </div>

            <div className='flex justify-end my-2'>
              <button
                onClick={() => setShowModal(true)}
                className='flex items-center justify-center w-full sm:w-[25%] p-2 border-[1px] bg-blue-500 text-white font-bold rounded-md'>
                <Image
                  src={plus}
                  width={16}
                  height={16}
                  className='mx-2'
                  alt="Add Icon"
                />
                Add new user
              </button>
            </div>
            {
              showModal &&
              <NewUserModal
                setShowModal={setShowModal}
              />
            }

            <div className="mt-4">
              {renderContent()}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
