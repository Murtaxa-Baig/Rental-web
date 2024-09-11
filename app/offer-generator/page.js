'use client'
import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import OfferGeneratorModal from '../(components)/modal/offerGeneratorModal/OfferGeneratorModal';
import Vehicles from '../(components)/vehicles/Vehicles';
import Results from '../(components)/results/Results';

export default function Page() {
    const [activeTab, setActiveTab] = useState('Vehicles');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [dateDifference, setDateDifference] = useState(null);
    const [showOfferGenerate, setShowOfferGenerate] = useState(true)


    const renderContent = () => {
        switch (activeTab) {
            case 'Vehicles':
                return <Vehicles startDate={startDate} endDate={endDate} />;
            case 'Results':
                return <Results />;
            default:
                return null;
        }
    }



    const calculateDateDifference = (start, end) => {
        if (start && end) {
            const timeDiff = Math.abs(end - start);
            const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
            setDateDifference(daysDiff);
        } else {
            setDateDifference(null);
        }
    };

    useEffect(() => {
        calculateDateDifference(startDate, endDate);
    }, [startDate, endDate]);



    return (
        <>
            {
                showOfferGenerate && <OfferGeneratorModal
                    setShowOfferGenerate={setShowOfferGenerate}
                    startDate={startDate}
                    setStartDate={setStartDate}
                    endDate={endDate}
                    setEndDate={setEndDate}
                    dateDifference={dateDifference}
                    setDateDifference={setDateDifference}
                />
            }
            <div className='mt-10 mb-3'>
                <h1 className='font-bold text-3xl text-gray-500'>Offers generator</h1>
                <p className='text-gray-500'>
                    <Link href="/" className='text-blue-700'>Home</Link> / Offers generator
                </p>
            </div>
            <div className='p-4 bg-white w-full rounded-md'>
                <div className="w-full">
                    <div className="text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                        <ul className="flex">
                            {['Vehicles', 'Results'].map((tab) => (
                                <li
                                    key={tab}
                                    className={`w-[50%] ${activeTab === tab ? 'text-blue-600 border-blue-600' : 'border-transparent'} me-2`}
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
                        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-8 shadow-lg rounded-lg p-2">
                            <div className="flex justify-between items-center w-full md:w-[49%] mb-4 md:mb-0">
                                <div className='w-[50%]'>
                                    <p className='text-gray-500 font-bold px-2'>From:</p>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        selectsStart
                                        startDate={startDate}
                                        endDate={endDate}
                                        placeholderText="Select Start Date"
                                        className="p-2 outline-none text-gray-400 bg-transparent"
                                    />

                                </div>
                                <div className='w-[50%]'>
                                    <p className='text-gray-500 font-bold px-2'>Until:</p>
                                    <DatePicker
                                        selected={endDate}
                                        onChange={(date) => setEndDate(date)}
                                        selectsEnd
                                        startDate={startDate}
                                        endDate={endDate}
                                        minDate={startDate}
                                        placeholderText="Select End Date"
                                        className="p-2 outline-none text-gray-400 bg-transparent"

                                    />
                                </div>
                            </div>
                            <div className="flex justify-between items-center w-full md:w-[49%]">
                                <div className='w-[50%]'>
                                    {dateDifference !== null && (
                                        <>
                                            <p className='text-gray-500 font-bold px-2'>{dateDifference} {dateDifference === 1 ? 'day' : 'days'}</p>
                                            <p className='text-gray-500 font-semibold px-2'>Days amount</p>
                                        </>
                                    )}
                                </div>
                                <div className='w-[50%]'>
                                    <button onClick={()=>setShowOfferGenerate(true)} className='text-blue-500 border-[1px] w-full font-bold border-blue-400 rounded-md p-2'>
                                        Select period
                                    </button>

                                </div>
                            </div>
                        </div>
                        {renderContent()}
                    </div>
                </div>
            </div>
        </>
    )
}
