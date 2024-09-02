import React from 'react'
import Link from 'next/link'
import add from '@/public/images/add.svg'
import Image from 'next/image'

export default function page() {
    return (
        <>

            <div className='mt-10 mb-3'>
                <h1 className='font-bold text-3xl text-gray-500'>Invoices
                </h1>
                <p className='text-gray-500'>
                    <Link href="/" className='text-blue-700'>Home</Link> /Invoices
                </p>
            </div>
            <div className='py-4 bg-white w-full rounded-md'>
                <div className="w-full">
                    <div className='p-8 flex flex-col md:flex-row items-center md:justify-between gap-2'>
                        <input
                            type="date"
                            className='w-full md:w-[20%] p-3 border-[1px] border-black outline-none rounded-md h-14 mb-4 md:mb-0'
                        />
                        <input
                            type="text"
                            placeholder='Search invoice'
                            className='w-full md:w-[60%] p-3 border-[1px] border-black outline-none rounded-md h-14 mb-4 md:mb-0'
                        />
                        <div className='flex w-full md:w-[20%] flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4'>
                            <Link
                            href='/new-invoice'
                            className='border-[1px] h-14 px-3 rounded-md shadow-lg w-full flex justify-center items-center hover:bg-gray-200'>
                                <Image
                                    src={add}
                                    width={20}
                                    height={20}
                                    className="rounded-full mr-2"
                                    alt="Filter Icon"
                                />
                                New Docs
                            </Link>
                        </div>
                    </div>

                    <div className='hidden sm:flex px-3'>
                        <p className='w-[5%] text-[12px] text-gray-400'>Invoice type</p>
                        <p className='w-[12%] ml-2 text-[12px] text-gray-400'>№</p>
                        <p className='w-[13%] text-[12px] text-gray-400'>Date</p>
                        <p className='w-[25%]  text-[12px] text-gray-400'>Bill to</p>
                        <p className='w-[25%]  text-[12px] text-gray-400'>Status</p>
                        <p className='w-[10%]  text-[12px] text-gray-400'>Amount</p>
                        <p className='w-[10%] text-end text-[12px] text-gray-400'>Files</p>
                    </div>


                    <div className='w-[22%] p-3 mx-auto border-[1px] rounded-md'>
                        <p className='font-bold text-sm text-gray-400 text-center my-2'>Payment</p>
                        <div className='flex justify-center items-center'>
                            <div className='mx-2'>
                                <p className='text-[10px] text-blue-400'>Totals</p>
                                <p className='font-bold text-blue-400'>€0</p>
                            </div>
                            <div className='mx-2'>
                                <p className='text-[10px] text-gray-400'>Paid</p>
                                <p className='font-bold text-gray-400'>€0</p>
                            </div>
                            <div className='mx-2'>
                                <p className='text-[10px] text-gray-400'>To be paid</p>
                                <p className='font-bold text-gray-400'>€0</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>




        </>
    )
}
