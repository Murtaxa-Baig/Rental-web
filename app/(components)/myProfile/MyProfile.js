import Image from 'next/image'
import React from 'react'
import account from '@/public/images/account.svg'
import lock from '@/public/images/lock.svg'

export default function MyProfile() {

    const array = ['English', 'Russian', 'Italian', 'German', 'French', 'Portuguese', 'Spanish', 'Polish', 'Chinese', 'Dutch', 'Czech']

    return (
        <>
            <div className='flex items-center'>
                <Image
                    src={account}
                    height={25}
                    width={25}
                    alt=''
                />
                <p className='font-bold text-gray-400 ml-2'>Account</p>
            </div>
            <hr className='text-gray-400' />

            <div className='w-[50%] relative mt-5'>
                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                    Account name
                </label>
                <input
                    type="text"
                    placeholder="Gig Masters"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className='flex items-center mt-5'>
                <Image
                    src={account}
                    height={25}
                    width={25}
                    alt=''
                />
                <p className='font-bold text-gray-400 ml-2'>Account</p>
            </div>
            <hr className='text-gray-400' />

            <div className='w-full'>
                <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="col-span-1 relative">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Your name
                        </label>
                        <input
                            type="text"
                            className="w-full border-[1px] border-gray-300 rounded-sm px-4 py-2 focus:outline-none"
                        />
                    </div>
                    <div className="col-span-1 relative">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Surname
                        </label>
                        <input
                            type="text"
                            className="w-full border-[1px] border-gray-300 rounded-sm px-4 py-2 focus:outline-none"
                        />
                    </div>
                    <div className="col-span-1 relative">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Number
                        </label>
                        <input
                            type="text"
                            className="w-full border-[1px] border-gray-300 rounded-sm px-4 py-2 focus:outline-none"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="col-span-1 relative">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full border-[1px] border-gray-300 rounded-sm px-4 py-2 focus:outline-none"
                        />
                    </div>
                    <div className="col-span-1 relative">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Address
                        </label>
                        <input
                            type="text"
                            className="w-full border-[1px] border-gray-300 rounded-sm px-4 py-2 focus:outline-none"
                        />
                    </div>
                    <div className="col-span-1 relative">
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

                <div className='w-[50%] flex items-center gap-3 mt-5'>
                    <button className='flex items-center justify-center border-[1px] w-full sm:w-[50%] border-blue-500 rounded-md font-bold text-blue-500 cursor-pointer p-2'>
                        Cancel
                    </button>

                    <button className='flex items-center justify-center text-white w-full sm:w-[50%] bg-blue-500 rounded-md font-bold cursor-pointer p-2 mt-2 sm:mt-0'>
                        Save
                    </button>
                </div>

                <div className='flex justify-end mt-5'>
                    <button className='flex items-center justify-center border-[1px] w-full sm:w-[30%] border-blue-500 rounded-md text-sm font-bold text-blue-500 cursor-pointer p-2'>
                        <Image
                            src={lock}
                            height={20}
                            width={20}
                            className='mx-1'
                            alt=''
                        />
                        Change password
                    </button>
                </div>

            </div>

        </>
    )
}
