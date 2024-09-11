import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function OfferGeneratorModal({ setShowOfferGenerate, startDate, setStartDate, endDate, setEndDate, dateDifference, setDateDifference }) {

    const closeModal = () => {
        setShowOfferGenerate(false);
    };

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"></div>

            {/* Modal */}
            <div className="fixed inset-0 z-20 flex items-center justify-center">
                <div className="w-[50%] p-3 h-[55vh] rounded-lg bg-white shadow-lg ">
                    {/* Header with Close Button */}
                    <div className='h-14 w-full flex justify-between items-center px-3'>
                        <p className='font-bold text-gray-400 text-[16px] text-center'>
                            Select dates to check available cars and generate an offer
                        </p>
                        <button onClick={closeModal} className='text-gray-500 p-2 text-[30px]'>✗</button>
                    </div>
                    <hr className='text-gray-400' />
                    <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-8 ">
                        <div className="flex justify-between items-center w-full md:w-[49%] mb-4 md:mb-0">
                            <p className='text-gray-500 font-bold px-2'>From:</p>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                placeholderText="Select Start Date"
                                className="p-2 outline-none text-gray-600 bg-transparent border-[1px] border-gray-400 rounded-md"
                            />
                        </div>
                        <div className="flex justify-between items-center w-full md:w-[49%]">
                            <p className='text-gray-500 font-bold px-2'>Until:</p>
                            <DatePicker
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                                placeholderText="Select End Date"
                                className="p-2 outline-none text-gray-600 bg-transparent border-[1px] border-gray-400 rounded-md"
                            />
                        </div>
                    </div>


                    <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-8">
                        <div className="flex justify-between items-center w-full md:w-[49%] mb-4 md:mb-0">
                            <p className='text-gray-500 font-bold px-2'>Start time:</p>
                            <input type="time" className='p-2 outline-none border-[1px] border-gray-400 rounded-md' />
                        </div>
                        <div className="flex justify-between items-center w-full md:w-[49%]">
                            <p className='text-gray-500 font-bold px-2'>End time:</p>
                            <input type="time" className='p-2 outline-none border-[1px] border-gray-400 rounded-md' />
                        </div>
                    </div>

                    <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-16">
                        <div className=" w-full md:w-[49%] mb-4 md:mb-0">
                            {dateDifference !== null && (
                                <div className='border-[1px] flex items-center p-2 border-gray-400 rounded-md'>
                                    <p className='text-gray-500 font-semibold px-2'>Days period :</p>
                                    <p className='text-gray-500 font-bold px-2'>{dateDifference} {dateDifference === 1 ? 'day' : 'days'}</p>

                                </div>
                            )}
                        </div>
                        <div className="flex justify-between items-center w-full md:w-[49%] gap-2">
                            <button onClick={closeModal} className='py-2 w-full px-6 flex justify-center items-center border-[1px] border-blue-400 text-blue-500 font-bold rounded-md'>
                                Cancel
                            </button>
                            <button onClick={closeModal} className='py-2 px-6 w-full flex justify-center items-center text-white bg-blue-500 font-bold rounded-md'>
                                Apply
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
