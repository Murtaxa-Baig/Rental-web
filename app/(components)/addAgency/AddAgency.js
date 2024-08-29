'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import document from '@/public/images/document.svg'
import Link from 'next/link'
import AddDocumentModal from '../modal/addDocumentModal/AddDocumentModal'


export default function AddAgency() {
    const [isShowModal, setIsShowModal] = useState(false)


    const array = ['English', 'Russian', 'Italian', 'German', 'French', 'Portuguese', 'Spanish', 'Polish', 'Chinese', 'Dutch', 'Czech']


    return (
        <>
            <form action="" onSubmit={(e) => e.preventDefault()}>
                <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-8">
                    <div className="relative w-full md:w-[49%] mb-4 md:mb-0">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Company Name
                        </label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="relative w-full md:w-[49%]">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Person's Name
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
                            Person's Surname
                        </label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="relative w-full md:w-[49%]">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Person's Number
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
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="relative w-full md:w-[49%]">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Website
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
                            Address
                        </label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="relative w-full md:w-[49%]">
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
                </div>


                <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-8">
                    <div className="relative w-full md:w-[49%] mb-4 md:mb-0">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            VAT
                        </label>
                        <input
                            type="email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="relative w-full md:w-[49%]">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Enter Client Name
                        </label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>


                <div className="relative w-full  mt-8">
                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                        Link to company
                    </label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>



                <div className="relative w-full  mt-8">
                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                        Note
                    </label>
                    <textarea
                        className='w-full border-[1px] border-gray-300 rounded-md outline-none p-2 text-gray-500'
                        id=""
                        name=""
                        rows="4"
                        cols="50"
                    />

                </div>


                <div className='mt-8 p-5 border-2 border-dashed border-gray-500 md:w-[30%] lg:w-[25%] text-center sm:w-full'
                    onClick={() => { setIsShowModal(true) }}
                >
                    <p className='font-bold text-gray-400'>Create New Document</p>
                    <Image className='my-4 mx-auto' src={document} width={50} height={50} alt="Call Icon" />
                </div>
                {
                    isShowModal &&
                    <AddDocumentModal
                        isShowModal={isShowModal}
                        setIsShowModal={setIsShowModal}
                    />
                }
                <div className='flex items-center justify-end gap-4 flex-col sm:flex-row'>
                    <Link href='/reservations' className='flex items-center justify-center border-[1px] w-full sm:w-[20%] border-blue-500 rounded-md font-bold text-blue-500 cursor-pointer p-2'>
                        Cancel
                    </Link>

                    <button type='submit' className='flex items-center justify-center text-white w-full sm:w-[20%] bg-blue-500 rounded-md font-bold cursor-pointer p-2 mt-2 sm:mt-0'>
                        Create partner
                    </button>
                </div>
            </form>
        </>
    )
}
