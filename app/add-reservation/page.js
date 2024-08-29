'use client'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import calender from '@/public/images/calender.svg'
import user from '@/public/images/user.svg'
import add from "@/public/images/add.svg"
import filt from "@/public/images/filter.svg"
import service from '@/public/images/service.svg'
import file from '@/public/images/file.svg'
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
                <h1 className='font-bold text-3xl text-gray-500'>New reservation</h1>
                <p className='text-gray-500'>
                    <Link href="/" className='text-blue-700'>Home</Link> /New reservation
                </p>
            </div>
            <div className='flex'>
                <main className="flex-grow w-full md:w-17/20 lg:w-[75%]">
                    <div class="p-6 bg-white rounded-lg mr-3">
                        <div class="container">
                            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                <button className='w-full border-[1px] border-slate-500 rounded-[4px]	 py-2 px-4 font-bold text-gray-500 flex items-center'>
                                    <Image
                                        src={calender}
                                        width={20}
                                        height={20}
                                        className='mr-2'
                                        alt="Filter Icon"
                                    />

                                    Dates and Vehicle
                                </button>
                                <button className='w-full border-[1px] border-slate-500 rounded-[4px]	 py-2 px-4 font-bold text-gray-500 flex items-center'>
                                    <Image
                                        src={user}
                                        width={20}
                                        height={20}
                                        className='mr-2'
                                        alt="Filter Icon"
                                    />
                                    Customer
                                </button>
                                <button className='w-full border-[1px] border-slate-500 rounded-[4px]	 py-2 px-4 font-bold text-gray-500 flex items-center'>
                                    <Image
                                        src={service}
                                        width={20}
                                        height={20}
                                        className='mr-2'
                                        alt="Filter Icon"
                                    />
                                    Extra Services
                                </button>
                                <button className='w-full border-[1px] border-slate-500 rounded-[4px]	 py-2 px-4 font-bold text-gray-500 flex items-center'>
                                    <Image
                                        src={file}
                                        width={20}
                                        height={20}
                                        className='mr-2'
                                        alt="Filter Icon"
                                    />
                                    Billing
                                </button>
                            </div>
                        </div>

                        <hr className='text-gray-500 my-4' />

                        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between">
                            <div className="w-full md:w-[49%] flex flex-col md:flex-row md:items-center md:justify-between">
                                <div className="relative w-full md:w-[60%] mb-4 md:mb-0">
                                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                        Start Date
                                    </label>
                                    <input
                                        type="date"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="relative w-full md:w-[35%]">
                                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                        Start time
                                    </label>
                                    <input
                                        type="time"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-[49%] flex flex-col md:flex-row md:items-center md:justify-between mt-4 md:mt-0">
                                <div className="relative w-full md:w-[60%] mb-4 md:mb-0">
                                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                        End Date
                                    </label>
                                    <input
                                        type="date"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="relative w-full md:w-[35%]">
                                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                        End time
                                    </label>
                                    <input
                                        type="time"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                        </div>



                        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-4">
                            <div className="relative w-full md:w-[49%] mb-4 md:mb-0">
                                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                    Pickup location
                                </label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="relative w-full md:w-[49%]">
                                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                    Return location
                                </label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>


                        <div className='flex flex-col mt-4 md:flex-row items-center md:justify-between'>
                            <input
                                type="text"
                                placeholder='Search Vehicle'
                                className='w-full md:w-[72%]  p-3 border-[1px] border-black outline-none rounded-md h-14 mb-4 md:mb-0'
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
                                    New car
                                </Link>
                            </div>
                        </div>

                        <div className='flex items-center justify-center mt-2'>
                            <p className='text-[14px] text-gray-600 mx-2'>Own cars</p>
                            <Switch
                                onChange={handleChange}
                                checked={checked}
                                offColor="#3464eb"
                                onColor="#34eb52"
                                height={20}
                                width={40}
                                uncheckedIcon={false}
                                checkedIcon={false}
                            />
                            <p className='text-[14px] text-gray-300 mx-2'>Partners cars</p>
                        </div>


                    </div>
                </main>
                <aside className="hidden md:block md:w-3/20 lg:w-[25%]">
                    <div className='bg-white rounded-lg p-3'>
                        <p>text</p>
                    </div>
                </aside>
            </div>

        </>
    )
}
