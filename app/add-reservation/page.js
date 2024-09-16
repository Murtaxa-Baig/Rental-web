'use client'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import calender from '@/public/images/calender.svg'
import user from '@/public/images/user.svg'
import service from '@/public/images/service.svg'
import file from '@/public/images/file.svg'
import { useState, useEffect } from 'react'
import DatesAndVehicles from '../(components)/datesAndVehicles/DatesAndVehicles';
import Customer from '../(components)/customer/Customer';
import ExtraServices from '../(components)/extraServices/ExtraServices';
import Billing from '../(components)/billing/Billing';


export default function Page() {
    const [selectColor, setSelectColor] = useState('text-orange-600');
    const [formDate, setFormDate] = useState('');
    const [untilDate, setUntilDate] = useState('');
    const [activeTab, setActiveTab] = useState('Dates and Vehicles');
    const [startLocation, setStartLocation] = useState(null);
    const [returnLocation, setReturnLocation] = useState(null);

    const renderContent = () => {
        switch (activeTab) {
            case 'Dates and Vehicles':
                return <DatesAndVehicles
                    startLocation={startLocation}
                    setStartLocation={setStartLocation}
                    returnLocation={returnLocation}
                    setReturnLocation={setReturnLocation}
                />;
            case 'Customer':
                return <Customer setActiveTab={setActiveTab} />;
            case 'Extra Services':
                return <ExtraServices setActiveTab={setActiveTab} />;
            case 'Billing':
                return <Billing />;
            default:
                return null;
        }
    }

    useEffect(() => {
        const dateObj = new Date();

        const day = dateObj.getDate().toString().padStart(2, '0');
        const month = dateObj.toLocaleString('default', { month: 'short' });
        const year = dateObj.getFullYear();

        const time = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }); // "07:00"

        const newDate = `${day} ${month} ${year} | ${time}`;

        setFormDate(newDate);
        setUntilDate(newDate)
    }, []);


    const handleColor = (event) => {
        const value = event.target.value;

        switch (value) {
            case 'REQUESTED':
                setSelectColor('text-orange-600');
                break;
            case 'CONFIRMED':
                setSelectColor('text-green-600');
                break;
            case 'MAINTAINENCE':
                setSelectColor('text-gray-400');
                break;
            case 'COMPLETED':
                setSelectColor('text-blue-600');
                break;
            case 'CANCELED':
                setSelectColor('text-red-500');
                break;
            default:
                setSelectColor('text-gray-600');
        }
    };


    return (
        <>


            <div className='mt-10 mb-3'>
                <h1 className='font-bold text-3xl text-gray-500'>New reservation</h1>
                <p className='text-gray-500'>
                    <Link href="/" className='text-blue-700'>Home</Link> / New reservation
                </p>
            </div>
            <div className='flex'>
                <main className="flex-grow w-full md:w-17/20 lg:w-[75%]">
                    <div class="p-6 bg-white rounded-lg mr-3">
                        <div className="w-full">
                            <div className="text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                                <ul className="flex">
                                    {['Dates and Vehicles', 'Customer', 'Extra Services', 'Billing'].map((tab) => (
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
                <aside className="hidden md:block md:w-3/20 lg:w-[25%]">
                    <div className='bg-white rounded-lg'>
                        <p className=' p-3 font-bold'>Basic information</p>
                        <hr className='text-gray-400' />

                        <div className='p-3'>
                            <p className='font-semibold text-sm mb-4'>Status</p>
                            <select
                                name=""
                                id=""
                                className={`w-full my-2 border-[1px] border-gray-400 font-bold rounded-sm h-12 px-2 ${selectColor}`}
                                onChange={handleColor}
                            >
                                <option value="REQUESTED" className='text-orange-500 font-bold'>REQUESTED</option>
                                <option value="CONFIRMED" className='text-green-600 font-bold'>CONFIRMED</option>
                                <option value="MAINTAINENCE" className='text-gray-400 font-bold'>MAINTAINENCE</option>
                                <option value="COMPLETED" className='text-blue-600 font-bold'>COMPLETED</option>
                                <option value="CANCELED" className='text-red-500 font-bold'>CANCELED</option>
                            </select>
                            <hr className='text-gray-400' />

                            <p className='font-semibold text-sm mb-4'>DATES</p>

                            <div className='flex items-center justify-between'>
                                <p className='text-gray-400'>From:</p>
                                <p className='font-bold text-sm'>{formDate}</p>
                            </div>
                            <hr className='text-gray-400' />
                            <div className='flex items-center justify-between mt-4'>
                                <p className='text-gray-400'>Until:</p>
                                <p className='font-bold text-sm'>{untilDate}</p>
                            </div>
                            <hr className='text-gray-400' />

                            <p className='font-semibold text-sm my-5'>LOCATIONS</p>

                            <p className='text-sm font-bold'>Delivery location:</p>
                            <p className='text-[12px] font-bold mt-2 text-gray-700'>{startLocation == null ? '' : startLocation}</p>

                            <p className='text-sm font-bold'>Return location:</p>
                            <p className='text-[12px] font-bold mt-2 text-gray-700'>{returnLocation == null ? '' : returnLocation}</p>



                            <p className='font-semibold text-sm my-5'>VEHICLES</p>
                            <hr />

                            <p className='font-semibold text-sm my-5'>CUSTOMER</p>
                        </div>
                    </div>

                    <div className='bg-white rounded-lg p-3 flex items-center justify-between mt-5'>
                        <p className='text-gray-600 font-bold text-lg'>TOTAL PRICE</p>
                        <p className='font-bold text-lg text-blue-500'>{`0`} €</p>
                    </div>
                </aside>
            </div>

        </>
    )
}
