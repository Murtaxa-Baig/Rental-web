'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import add from '@/public/images/add.svg'
import NewPaymentModal from '../(components)/modal/newPaymentModal/NewPaymentModal'

export default function page() {

    const [showModal, setShowModal] = useState(false)


    return (
        <>

            <div className='mt-10 mb-3'>
                <h1 className='font-bold text-3xl text-gray-500'>New Invoice
                </h1>
                <p className='text-gray-500'>
                    <Link href="/" className='text-blue-700'>Home</Link> /
                    <Link href="/invoices" className='text-blue-700'>Invoices</Link> / New Invoice
                </p>
            </div>
            <hr className='text-gray-500' />
            <div className='p-4 bg-white w-full rounded-md '>
                <div className="w-full flex flex-col md:flex-row items-center gap-4 my-2">
                    <p className='text-[24px] font-bold text-gray-500 w-full md:w-[10%] mb-4 md:mb-0'>Number</p>

                    <div className="relative w-full md:w-[20%] mb-4 md:mb-0">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Series
                        </label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="relative w-full md:w-[20%] mb-4 md:mb-0">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Document N
                        </label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="relative w-full md:w-[20%] mb-4 md:mb-0">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Date
                        </label>
                        <input
                            type="date"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="relative w-full md:w-[20%] mb-4 md:mb-0">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Type
                        </label>
                        <select name="" id="" className='w-full p-2 text-gray-500 rounded-md border-[1px] border-gray-400 outline-none'>
                            {['Proforma', 'Invoice'].map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>

                    <div className="relative w-full md:w-[20%]">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Language
                        </label>
                        <select name="" id="" className='w-full p-2 text-gray-500 rounded-md border-[1px] border-gray-400 outline-none'>
                            {['English', 'Russian', 'Italian', 'German', 'French', 'Portuguese', 'Spanish', 'Polish', 'Chinese', 'Dutch', 'Czech']
                                .map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))}
                        </select>
                    </div>
                </div>
                <hr className='text-gray-500 my-2' />

                <div className='flex flex-col md:flex-row justify-between items-center my-4 gap-4'>

                    <div className='w-full md:w-[47%]'>
                        <p className='w-full text-blue-500 font-bold my-5'>
                            Bill to:
                        </p>
                        <div className='flex items-center gap-2'>
                            <input
                                type="text"
                                className='border-[1px] border-gray-400 rounded-md w-full md:w-[70%] p-2 h-14'
                                placeholder='Start typing client/agency name'
                            />
                            <div className='flex w-full md:w-[30%] flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4'>
                                <Link
                                    href='/new-invoice'
                                    className='border-[1px] border-blue-400 h-14 px-3 rounded-md shadow-lg w-full flex justify-center items-center hover:bg-gray-200'>
                                    <Image
                                        src={add}
                                        width={20}
                                        height={20}
                                        className="rounded-full mr-1"
                                        alt="Filter Icon"
                                    />
                                    Add new
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className='w-full md:w-[47%]'>
                        <p className='w-full text-blue-500 font-bold my-5'>
                            Bill from:
                        </p>
                        <div className='w-full relative'>
                            <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                Select
                            </label>
                            <select name="" id="" className='w-full p-2 h-14 text-gray-500 rounded-md border-[1px] border-gray-400 outline-none'>
                                {['Gig Maters'].map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>


                <div className='h-12 bg-slate-200 w-full  items-center px-2 hidden sm:flex'>
                    <p className='text-[12px] text-gray-500 w-[4%]'>№</p>
                    <p className='text-[12px] text-gray-500 w-[16%]'>Code</p>
                    <p className='text-[12px] text-gray-500 w-[16%]'>Description</p>
                    <p className='text-[12px] text-gray-500 w-[16%]'></p>
                    <p className='text-[12px] text-gray-500 w-[12%]'>Quantity</p>
                    <p className='text-[12px] text-gray-500 w-[12%]'>Net price</p>
                    <p className='text-[12px] text-gray-500 w-[12%]'>VAT</p>
                    <p className='text-[12px] text-gray-500 w-[12%]'>Total price</p>

                </div>


                <div className='flex justify-end items-center my-4 gap-2'>
                    <div className='flex w-full md:w-[15%] flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4'>
                        <button
                            href='/new-invoice'
                            className='border-[1px] border-blue-400 h-14 px-3 rounded-md shadow-lg w-full flex justify-center items-center hover:bg-gray-200'>
                            Link Reservation
                        </button>
                    </div>
                    <div className='flex w-full md:w-[15%] flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4'>
                        <button
                            href='/new-invoice'
                            className='border-[1px] border-blue-400 h-14 px-3 rounded-md shadow-lg w-full flex justify-center items-center hover:bg-gray-200'>
                            <Image
                                src={add}
                                width={20}
                                height={20}
                                className="rounded-full mr-1"
                                alt="Filter Icon"
                            />
                            Add new
                        </button>
                    </div>
                </div>

                <hr className='text-gray-500 my-2' />

                <div className="flex flex-col md:flex-row items-stretch justify-between w-full gap-4">
                    <div className="w-full md:w-[33%] border-[1px] border-gray-400 rounded-md p-4 flex flex-col">
                        <p className="font-bold text-blue-500">Already paid</p>
                        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-4">
                            <div className="relative w-full md:w-[49%] mb-4 md:mb-0">
                                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                    Status
                                </label>
                                <select className="w-full p-2 text-gray-500 rounded-md border-[1px] border-gray-400 outline-none">
                                    {['Not Paid', 'Paid'].map((item, index) => (
                                        <option key={index} value={item}>{item}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="relative w-full md:w-[49%]">
                                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                    Date
                                </label>
                                <input
                                    type="date"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                        <div className="relative w-full my-8">
                            <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                Status
                            </label>
                            <select className="w-full p-2 text-gray-500 rounded-md border-[1px] border-gray-400 outline-none">
                                {['Cash', 'Payment link', 'BY invoice', 'Credit card', 'Bank transfer', 'Stripe', 'Paypal', 'Crypto', 'Other'].map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="w-full md:w-[33%] border-[1px] border-gray-400 rounded-md flex flex-col">
                        <p className="font-bold text-blue-500 m-4">Payment method</p>
                        <button
                            onClick={() => setShowModal(true)}
                            className="mx-4 mt-4 w-[90%] h-12 rounded-md text-center border-[1px] border-blue-400 text-blue-500 font-bold">
                            Add New
                        </button>
                        {showModal && <NewPaymentModal setShowModal={setShowModal} />}
                        <div className="p-4 bg-gray-100 mt-10 flex-grow">
                            <p className="text-gray-500 my-4 text-sm">Bank details</p>
                            <p className="text-gray-500 text-sm"> <span className="font-bold">NAME:</span>  Gig Masters</p>
                            <p className="text-gray-500 text-sm"> <span className="font-bold">Address: </span>Via Foro S. Martino, 22, 21012 Cassano Magnago VA, Italy</p>
                        </div>
                    </div>

                    <div className="w-full md:w-[33%] border-[1px] border-gray-400 rounded-md p-4 flex flex-col">
                        <p className="font-bold text-blue-500">To be paid</p>
                        <div className="flex items-center justify-between my-3">
                            <p>SUBTOTAL</p>
                            <p className="text-gray-500">€0.00</p>
                        </div>
                        <div className="flex items-center justify-between my-3">
                            <p className="text-gray-400">VAT</p>
                            <p className="text-gray-500">€0.00</p>
                        </div>
                        <hr className="text-gray-400" />
                        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-4">
                            <div className="relative w-full md:w-[49%] mb-4 md:mb-0">
                                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                    Status
                                </label>
                                <select className="w-full p-2 text-gray-500 rounded-md border-[1px] border-gray-400 outline-none">
                                    {['Amount', 'Percent'].map((item, index) => (
                                        <option key={index} value={item}>{item}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="relative w-full md:w-[49%]">
                                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                    Value
                                </label>
                                <input
                                    type="text"
                                    placeholder="€0"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between my-3">
                            <p className="text-gray-600 font-bold">Total</p>
                            <p className="text-gray-600 font-bold">€0.00</p>
                        </div>
                        <div className="w-full flex items-center justify-between">
                            <button className="font-bold w-[48%] border-[1px] border-blue-400 text-blue-500 h-12 rounded-md">Create PDF</button>
                            <button className="font-bold w-[48%] bg-blue-500 text-white h-12 rounded-md">Save</button>
                        </div>
                    </div>
                </div>



            </div >
        </>
    )
}
