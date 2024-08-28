'use client'
import Link from 'next/link'
import React from 'react'
import filt from "@/public/images/filter.svg"
import add from "@/public/images/add.svg"
import Image from 'next/image'
import Switch from 'react-switch';
import { useState } from 'react'



export default function page() {
    const [checked, setChecked] = useState(false);

    

    const handleChange = (nextChecked) => {
        setChecked(nextChecked);
    };

    return (
        <>
            <div className='mt-10 mb-3'>
                <h1 className='font-bold text-3xl text-gray-500'>Reservations</h1>
                <p className='text-gray-500'>
                    <Link href="/" className='text-blue-700'>Home</Link> / Reservations
                </p>
            </div>
            <div className='p-4 bg-white w-full rounded-md'>
                <div class="flex items-center justify-between  shadow-lg p-3">
                    <div class="container bg-white rounded-lg">
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
                            <button className='w-full border-[1px] border-slate-500 rounded-sm	 py-2 px-4 font-bold text-gray-500'>Yesterday</button>
                            <button className='w-full border-[1px] border-slate-500 rounded-sm	 py-2 px-4 font-bold text-gray-500'>Today</button>
                            <button className='w-full border-[1px] border-slate-500 rounded-sm	 py-2 px-4 font-bold text-gray-500'>Tomorrow</button>
                            <button className='w-full border-[1px] border-slate-500 rounded-sm	 py-2 px-4 font-bold text-gray-500'>After Tomorrow</button>
                            <button className='w-full border-[1px] border-slate-500 rounded-sm	 py-2 px-4 font-bold text-gray-500'>Week</button>
                            <button className='w-full border-[1px] border-slate-500 rounded-sm py-2 px-4 font-bold text-blue-500 bg-blue-100'>All</button>
                        </div>
                    </div>
                </div>
                <div className='p-8 flex flex-col md:flex-row items-center md:justify-between'>
                    <input
                        type="text"
                        placeholder='Search Reservation'
                        className='w-full md:w-[72%] p-3 border-[1px] border-black outline-none rounded-md h-14 mb-4 md:mb-0'
                    />
                    <div className='flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto'>
                        <button className='border-[1px] h-14 px-3 rounded-md shadow-lg w-full md:w-auto flex justify-center items-center hover:bg-gray-200'>
                            <Image
                                src={filt}
                                width={35}
                                height={35}
                                className="rounded-full"
                                alt="Filter Icon"
                            />
                        </button>
                        <Link href='/add-reservation'
                            className='border-[1px] h-14 px-3 rounded-md shadow-lg text-blue-600 font-bold flex items-center justify-center hover:bg-blue-100 w-full md:w-auto'>
                            <Image
                                src={add}
                                width={18}
                                height={18}
                                className="rounded-full mr-2"
                                alt="Add Icon"
                            />
                            New Reservation
                        </Link>
                    </div>
                </div>

                <div className='flex items-center justify-between'>
                    <hr className='w-[38%] text-gray-500' />
                    <div className='w-[22%] flex items-center justify-between'>
                        <p className='text-[12px] text-gray-500'>1 orders of 1</p>
                        <p className='text-[12px] text-red-500'>canceled 0</p>
                        <Switch
                            onChange={handleChange}
                            checked={checked}
                            offColor="#888"
                            onColor="#3464eb"
                            height={20}
                            width={40}
                            uncheckedIcon={false}
                            checkedIcon={false}
                        />
                        <p className='text-[14px]'>
                            {checked ? 'Hide' : 'Show'}
                        </p>
                    </div>
                    <hr className='w-[38%] text-gray-500' />
                </div>
            </div>
        </>
    )
}
