import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import filt from '@/public/images/filter.svg'
import add from '@/public/images/add.svg'

export default function PartnersFleet() {
    return (
        <>
            <div className='py-8 flex flex-col md:flex-row items-center md:justify-between'>
                <input
                    type="text"
                    placeholder='Vehicle search'
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
                    <Link href='/add-vehicle'
                        className='border-[1px] h-14 px-3 rounded-md shadow-lg text-blue-600 font-bold flex items-center justify-center hover:bg-blue-100 w-full md:w-auto'>
                        <Image
                            src={add}
                            width={18}
                            height={18}
                            className="rounded-full mr-2"
                            alt="Add Icon"
                        />
                        Add new car
                    </Link>
                </div>
            </div>



            <div className='flex flex-col sm:flex-row items-center w-full justify-between my-3'>
                <p className='w-full sm:w-[12%] text-sm text-gray-400'>0 vehicles of 0</p>
                <hr className='w-full sm:w-[88%] text-gray-500 hidden sm:block' />
            </div>



             {/* for medium and large screen  */}
             <div className="overflow-x-auto mt-5 hidden sm:block">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="w-[30%] py-2 px-4 text-left text-sm text-gray-400">Brand and Model</th>
                            <th className="py-2 px-4 text-left text-sm text-gray-400">Color</th>
                            <th className="py-2 px-4 text-left text-sm text-gray-400">KMs</th>
                            <th className="py-2 px-4 text-left text-sm text-gray-400">Location</th>
                            <th className="py-2 px-4 text-left text-sm text-gray-400">Refference</th>
                            <th className="py-2 px-4 text-left text-sm text-gray-400">Availability</th>
                            <th className="py-2 px-4 text-left text-sm text-gray-400">Status</th>
                            <th className="py-2 px-4  text-gray-500"></th>
                        </tr>
                    </thead>
                    {/* <tbody>
                        {tableData.map((item, index) => (
                            <tr key={index} className='my-4'>
                                <td className="w-[30%] py-2 px-4 border-b">
                                    <div className='flex items-center '>
                                        <Image
                                            src={item.logo}
                                            height={50}
                                            width={50}
                                            className="rounded-full mx-2 bg-transparent"
                                        />
                                        <div>
                                            <p className='font-bold text-gray-500'>{item.brandModel}</p>
                                            <p className='text-[12px] text-slate-400'>{item.details}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-2 px-4 border-b underline text-blue-400 text-[12px]">{item.color}</td>
                                <td className="py-2 px-4 border-b underline text-blue-400 text-[12px]">{item.kms}</td>
                                <td className="py-2 px-4 border-b underline text-blue-400 text-[12px]">{item.location}</td>
                                <td className="py-2 px-4 border-b text-center">
                                    <Image
                                        src={calender}
                                        width={20}
                                        height={20}
                                        alt="Add Icon"
                                    />
                                </td>
                                <td className="py-2 px-4 border-b">
                                    <button className='text-[12px] text-green-500 border-[1px] border-green-500 rounded-md py-1 px-2'>{item.status}</button>
                                </td>
                                <td className="py-2 px-4 border-b text-center">
                                    <Image src={more} className="w-5 h-5 text-gray-500" />
                                </td>
                            </tr>
                        ))}
                    </tbody> */}
                </table>
            </div>


        </>
    )
}
