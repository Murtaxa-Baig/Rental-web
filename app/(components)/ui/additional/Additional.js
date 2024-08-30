'use client'
import React from 'react'
import Switch from 'react-switch';
import { useState } from 'react';

export default function Additional() {

    const [checked, setChecked] = useState(false);


    const handleChange = (nextChecked) => {
        setChecked(nextChecked);
    };
    return (
        <>
            <p className='font-bold text-gray-600'>Vehicle complectations</p>
            <p className='text-[12px] text-gray-500 my-4'>Complectations that must be checked every time vehicle is rented</p>

            <div className="w-full flex flex-col md:flex-row items-center justify-between mt-4 gap-4">
                <div className="w-full md:w-[80%] mb-4 md:mb-0">
                    <div className="relative w-full">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Item
                        </label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                <div className="w-full md:w-[20%] ">
                    <button className='flex items-center justify-center w-full md:w-full border-[1px] border-blue-500 rounded-md font-bold text-blue-500 cursor-pointer p-2'>
                        Cancel
                    </button>
                </div>
            </div>

            <div className='flex items-center my-3'>
                <span className='font-bold text-gray-600'>Actual problems</span>
                <Switch
                    onChange={handleChange}
                    checked={checked}
                    offColor="#888"
                    onColor="#3464eb"
                    height={20}
                    width={40}
                    className='mx-2'
                    uncheckedIcon={false}
                    checkedIcon={false}
                />
                <span className='font-bold text-gray-600'>Actual problems</span>
            </div>


        </>
    )
}
