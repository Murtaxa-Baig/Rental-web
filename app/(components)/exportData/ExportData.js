import Image from 'next/image';
import React from 'react'
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default function ExportData() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);


    return (
        <>
            <p className='text-gray-600 font-semibold text-2xl text-center'>Generate analytics</p>
            <div className='my-3 flex items-center w-full bg-gray-50 rounded-lg shadow-lg p-3'>
                <div>
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
                <div>
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

            <p className='text-gray-600 font-semibold text-2xl text-center'>Select dates interval</p>
        </>
    )
}
