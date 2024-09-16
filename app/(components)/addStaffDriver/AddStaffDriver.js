'use client'
import React from 'react'
import service from '@/public/images/service.svg'
import Image from 'next/image'
import { useState } from 'react'
import AddNewCompany from '../modal/addNewCompany/AddNewCompany'

export default function AddStaffDriver() {

    const [isShowModal, setIsShowModal] = useState(false)
    const [isNextPart, setIsNextPart] = useState(false)



    const array = ['English', 'Russian', 'Italian', 'German', 'French', 'Portuguese', 'Spanish', 'Polish', 'Chinese', 'Dutch', 'Czech']
    const role = ['Driver', 'Oprater', 'Partner']
    return (
        <>

            <form action="" onSubmit={(e) => e.preventDefault()}>
                {isNextPart ? (<>
                    <p className='font-bold text-gray-600 text-[20px]'>Documents</p>
                    <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-8">
                        <div className="relative w-full md:w-[49%] mb-4 md:mb-0">
                            <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                Driving license
                            </label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="relative w-full md:w-[49%]">
                            <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                Passport
                            </label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-8">
                        <div className="relative w-full md:w-[49%] mb-4 md:mb-0">
                            <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                Issue date
                            </label>
                            <input
                                type="date"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="relative w-full md:w-[49%]">
                            <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                Date of issue
                            </label>
                            <input
                                type="date"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-8">
                        <div className="relative w-full md:w-[49%] mb-4 md:mb-0">
                            <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                Valid until date
                            </label>
                            <input
                                type="date"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="relative w-full md:w-[49%]">
                            <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                Valid until date
                            </label>
                            <input
                                type="date"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <p className='text-gray-500 text-xs my-5'>Here you can attach <span className='font-bold text-gray-600'>driving license scans</span> as well as <span className='font-bold text-gray-600'>customer passport scans</span></p>


                    <div className='w-full md:w-[49%] '>
                        <label for='uploadScan' className="text-blue-500 font-bold mb-4 border-[1px] rounded-md border-blue-500 p-2">
                            Upload scan
                            <input type="file" accept="image/*" id='uploadScan' className='hidden' />
                        </label>
                    </div>



                    <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-8">
                        <div className="w-full md:w-[49%] mb-4 md:mb-0">

                        </div>
                        <div className='w-full md:w-[49%] flex items-center  gap-2  my-5'>
                            <button
                                onClick={() => { setIsNextPart(false) }}
                                className='w-[49%] border-[1px] border-blue-500 rounded-md font-bold text-blue-500 p-2'>
                                Back
                            </button>
                            <button className='w-[49%]  rounded-md font-bold text-white bg-blue-500 p-2'>
                                Create staff
                            </button>
                        </div>
                    </div>



                </>) : (
                    <>
                        <p className='font-bold text-gray-600 text-[20px]'>Base info</p >
                        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-8">
                            <div className="relative w-full md:w-[49%] mb-4 md:mb-0">
                                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="relative w-full md:w-[49%]">
                                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                    Surname
                                </label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-8">
                            <div className="relative w-full md:w-[49%] mb-4 md:mb-0">
                                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="relative w-full md:w-[49%]">
                                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                        <div className="relative w-full md:w-[49%] mt-8">
                            <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                Language
                            </label>
                            <select name="" id="" className='w-full p-2 text-gray-500 rounded-md border-[1px] border-gray-400 outline-none'>
                                {
                                    array.map((item, index) => {
                                        return <option key={index} value={item}>{item}</option>
                                    }
                                    )
                                }
                            </select>
                        </div>

                        <div className="w-full flex items-center flex-col md:flex-row md:items-center md:justify-between mt-8">
                            <div className="relative w-full md:w-[49%] mb-4 md:mb-0">
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                                    <div className='flex items-center gap-3'>
                                        <input type="checkbox" id='accessGranted' className='h-4 w-4' />
                                        <label htmlFor="accessGranted" className='text-gray-400'>Access granted</label>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <input type="checkbox" id='showBilling' className='h-4 w-4' />
                                        <label htmlFor="showBilling" className='text-gray-400'>Show billing</label>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <input type="checkbox" id='showContacts' className='h-4 w-4' />
                                        <label htmlFor="showContacts" className='text-gray-400'>Show contacts</label>
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-full md:w-[49%] mt-8">
                                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                    Role
                                </label>
                                <select name="" id="" className='w-full p-2 text-gray-500 rounded-md border-[1px] border-gray-400 outline-none'>
                                    {
                                        role.map((item, index) => (
                                            <option key={index} value={item}>{item}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 mt-5 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4">
                            <div className="md:col-span-3 lg:col-span-3 w-full relative h-14">
                                <label className="absolute -top-3 left-3 font-bold bg-white px-1 text-[12px] text-gray-600">
                                    Link to company
                                </label>
                                <input
                                    type="text"
                                    placeholder=''
                                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none h-full"
                                />
                            </div>
                            <div className="md:col-span-1 lg:col-span-1 w-full flex items-center border-2 p-2 rounded-md h-14">
                                <button
                                    onClick={() => { setIsShowModal(true) }}
                                    className='w-full  rounded-[4px] p-2 font-bold text-gray-500 flex items-center h-full'>
                                    <Image
                                        src={service}
                                        width={20}
                                        height={20}
                                        className='mr-2'
                                        alt="Filter Icon"
                                    />
                                    Add new company
                                </button>
                            </div>
                        </div>

                        {
                            isShowModal && <AddNewCompany
                                setIsShowModal={setIsShowModal}
                            />
                        }

                        <div className='flex items-center justify-end gap-4 flex-col sm:flex-row mt-8'>
                            <button
                                onClick={() => setIsNextPart(true)}
                                className='flex items-center justify-center text-white w-full sm:w-[20%] bg-blue-500 rounded-md font-bold cursor-pointer p-2 mt-2 sm:mt-0'>
                                Next
                            </button>
                        </div>
                    </>
                )
                }
            </form>
        </>
    )
}
