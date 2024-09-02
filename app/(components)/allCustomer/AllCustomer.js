'use client'
import React from 'react'
import Image from 'next/image'
import Switch from 'react-switch';
import add from "@/public/images/add.svg"
import call from "@/public/images/call.svg"
import more from "@/public/images/more.svg"
import Link from 'next/link'
import { useState } from 'react'

export default function AllCustomer() {
    const [checked, setChecked] = useState(false);


    const handleChange = (nextChecked) => {
        setChecked(nextChecked);
    };



    const customers = [
        {
            name: 'Murtaxa Baig',
            language: 'English',
            rents: '3',
        },

    ];



    return (
        <>
            <div className='p-8 flex flex-col md:flex-row items-center md:justify-between'>
                <input
                    type="text"
                    placeholder='Customer search'
                    className='w-full md:w-[49%] p-3 border-[1px] border-black outline-none rounded-md h-14 mb-4 md:mb-0'
                />
                <div className='flex flex-col md:flex-row md:items-center md:space-x-3 w-full md:w-[50%]'>
                    <Link href='/add-client'
                        className='border-[1px] h-14 px-3 rounded-md shadow-lg text-blue-600 font-bold flex items-center justify-center hover:bg-blue-100 w-full md:w-auto'>
                        <Image
                            src={add}
                            width={18}
                            height={18}
                            className="rounded-full mr-2"
                            alt="Add Icon"
                        />
                        Add new client
                    </Link>
                    <Link href='/add-agency'
                        className='border-[1px] h-14 px-3 rounded-md shadow-lg text-blue-600 font-bold flex items-center justify-center hover:bg-blue-100 w-full md:w-auto'>
                        <Image
                            src={add}
                            width={18}
                            height={18}
                            className="rounded-full mr-2"
                            alt="Add Icon"
                        />
                        Add new Company
                    </Link>
                </div>
            </div>


            <div className='flex flex-col sm:flex-row items-center justify-between'>
                <hr className='w-full sm:w-[36%] text-gray-500 hidden sm:block' />
                <div className='w-full sm:w-[25%] flex items-center justify-center sm:justify-between my-2 sm:my-0'>
                    <p className='text-[12px] text-gray-500'>1 counterparties of 1</p>
                    <p className='text-[12px] text-red-500 ml-2 sm:ml-0'>deleted 0</p>
                    <Switch
                        onChange={handleChange}
                        checked={checked}
                        offColor="#888"
                        onColor="#3464eb"
                        height={20}
                        width={40}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        className='mx-2'
                    />
                    <p className='text-[14px]'>
                        {checked ? 'Hide' : 'Show'}
                    </p>
                </div>
                <hr className='w-full sm:w-[36%] text-gray-500 hidden sm:block' />
            </div>




            {/* for Medium and large screen */}

            <div className="overflow-x-auto mt-5 hidden sm:block">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr className="w-full  text-gray-400 uppercase text-sm leading-normal">
                            <th className="w-[30%] py-3 px-4 text-left">Customer Name</th>
                            <th className="w-[17.5%] py-3 px-4 text-left">Contacts</th>
                            <th className="w-[17.5%] py-3 px-4 text-left">Language</th>
                            <th className="w-[17.5%] py-3 px-4 text-left">Documents</th>
                            <th className="w-[17.5%] py-3 px-4 text-left">Rents</th>
                            <th className="w-[17.5%] py-3 px-4 text-left"></th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm">
                        {customers.map((customer, index) => (
                            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-4 text-left">{customer.name}</td>
                                <td className="py-3 px-4 text-left">
                                    <Image
                                        src={call}
                                        height={20}
                                        width={20}
                                        alt='Call Icon'
                                    />
                                </td>
                                <td className="py-3 px-4 text-left">{customer.language}</td>
                                <td className="py-3 px-4 text-left">Show Docs</td>
                                <td className="py-3 px-4 text-left font-bold text-blue-500">{
                                    customer.rents ? customer.rents : 0
                                }</td>
                                <td className="py-3 px-4 text-left flex justify-center "><p className='text-white'>text</p>
                                    <Image className='bg-transparent' src={more} height={20} width={20} alt="More Icon" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            {/* for Mobile view only */}

            <div className='mt-6 block md:hidden'>
                <p className='text-gray-400 text-sm'>All</p>
                {customers.map((customer, index) => (
                    <div key={index} className='flex items-center justify-between my-2'>
                        <p className='text-sm'>{customer.name}</p>
                        <button className='border-[1px] border-blue-500 text-blue-400 font-bold p-2 px-4 rounded-md'>Edit</button>
                        <Image className='bg-transparent' src={more} height={20} width={20} alt="More Icon" />
                    </div>
                ))}
            </div>


        </>
    )
}
