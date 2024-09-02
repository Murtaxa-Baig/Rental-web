import React from 'react'
import Link from 'next/link'

export default function page() {
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

                <div className='flex justify-between items-center my-4'>
                    <p className='w-[45%] text-blue-500 font-bold'>
                        Bill to:
                    </p>
                    <p className='w-[45%] text-blue-500 font-bold'>
                        Bill from:
                    </p>
                </div>

                <div className='flex justify-between items-center my-4'>
                    <div className='w-[45%]'>
                        
                    </div>
                    <div className='w-[45%]'>
                        
                    </div>
                </div>


            </div>
        </>
    )
}
