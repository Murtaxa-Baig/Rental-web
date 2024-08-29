'use client'
import React from 'react'
import camera from '@/public/images/camera.svg'
import user from '@/public/images/user.svg'
import call from '@/public/images/call.svg'
import mail from '@/public/images/mail.svg'
import service from '@/public/images/service.svg'
import crown from '@/public/images/crown.svg'
import upload from '@/public/images/upload.svg'
import sad from '@/public/images/sad.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import AddNewCompany from '../modal/addNewCompany/AddNewCompany'

export default function AddClient() {
    
    const [isShowModal, setIsShowModal] = useState(false)
    const array = ['English', 'Russian', 'Italian', 'German', 'French', 'Portuguese', 'Spanish', 'Polish', 'Chinese', 'Dutch', 'Czech']
    return (
        <>
            <form action="" onSubmit={(e) => e.preventDefault()}>
                <label for="image" className='w-full cursor-pointer	 bg-gray-200 flex justify-center items-center p-2'>
                    <input id='image' type="file" accept="image/*" className='hidden' />
                    <Image src={camera} width={25} height={25} alt="camera Picture" />
                    <p className='font-bold text-[14px] text-gray-500 mx-2'>Use auto filling</p>
                    <p className='text-[10px] text-gray-500 mx-1'>Just upload scan or photo of the passport</p>
                </label>
                <div class="grid grid-cols-1 mt-5 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className='border-2 p-2 flex items-center rounded-md'>
                        <input type="text" placeholder='Client Name' className='outline-none w-[90%]' />
                        <Image src={user} width={16} height={16} />
                    </div>
                    <div className='border-2 p-2 flex items-center rounded-md'>
                        <input type="text" placeholder='Client Surname' className='outline-none w-[90%]' />
                        <Image src={user} width={16} height={16} />
                    </div>
                    <input type="date" placeholder='Birth Date' className='border-2 p-2 outline-none rounded-md' />
                    <div className="relative w-full  mb-4 md:mb-0">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Add birth place
                        </label>
                        <input
                            type="text"
                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                        />
                    </div>
                </div>


                <div className="grid grid-cols-1 mt-5 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4">
                    <div className="md:col-span-1 lg:col-span-1 relative">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Language
                        </label>
                        <select name="" id="" className='w-full p-2 text-gray-500 rounded-md border-2 border-gray-500 outline-none'>
                            {
                                array.map((item, index) => {
                                    return <option key={index} value={item}>{item}</option>
                                }
                                )
                            }
                        </select>
                    </div>
                    <div className='md:col-span-1 lg:col-span-1 border-2 p-2 flex items-center rounded-md'>
                        <input type="text" placeholder='Phone number' className='outline-none w-[90%]' />
                        <Image src={call} width={16} height={16} alt="Call Icon" />
                    </div>
                    <div className='md:col-span-1 lg:col-span-1 border-2 p-2 flex items-center rounded-md'>
                        <input type="email" placeholder='Email' className='outline-none w-[90%]' />
                        <Image src={mail} width={16} height={16} alt="Mail Icon" />
                    </div>
                    <div className="md:col-span-2 lg:col-span-2 relative">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Address
                        </label>
                        <input
                            type="text"
                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                        />
                    </div>
                </div>
                <p className='font-bold text-gray-400 my-3'>Here you can decide if the client is your own or if it's agency's client</p>


                <div className="grid grid-cols-1 mt-5 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4">
                    <div className="md:col-span-1 lg:col-span-1 w-full flex items-center border-2 p-2 rounded-md h-14">
                        <input type="radio" />
                        <p className="font-bold text-gray-500 ml-2">It's own client</p>
                    </div>
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

                <div className='flex items-center my-5 gap-5'>
                    <div className='flex items-center'>
                        <input type="checkbox" id='vip' className='h-4 w-4' />
                        <Image
                            src={crown}
                            width={20}
                            height={20}
                            className='mx-2'
                            alt="Filter Icon"
                        />
                        <label For="vip" className='font-bold  text-gray-600'>
                            It's VIP Client
                        </label>
                    </div>
                    <div className='flex items-center'>
                        <input type="checkbox" id='blackList' className='h-4 w-4' />
                        <Image
                            src={sad}
                            width={20}
                            height={20}
                            className='mx-2'
                            alt="Filter Icon"
                        />
                        <label For="blackList" className='font-bold  text-gray-600'>
                            Black list
                        </label>
                    </div>

                </div>

                <hr className='text-gray-500 my-4' />

                <p className='font-bold text-gray-600 my-6'>Driver license</p>



                <div className="grid grid-cols-1 mt-5 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    <input type="text" placeholder='Serial number' className='rounded-[4px] sm:w-full p-2 font-bold text-gray-500 border-2 outline-none' />
                    <input type="text" placeholder='Category' className='rounded-[4px] sm:w-full p-2 font-bold text-gray-500 border-2 outline-none' />
                    <div className="md:col-span-1 lg:col-span-1 sm:w-full relative">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Valid date
                        </label>
                        <input
                            type="date"
                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                        />
                    </div>
                </div>



                <p className='font-bold text-gray-600 my-6'>Customer passport</p>


                <div className="grid grid-cols-1 mt-5 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    <input type="text" placeholder='Serial number' className='rounded-[4px] p-2 font-bold text-gray-500 border-2 outline-none' />
                    <div className="md:col-span-1 lg:col-span-1 relative">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Valid date
                        </label>
                        <input
                            type="date"
                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                        />
                    </div>
                </div>


                <p className='text-gray-300 my-6'>Here you can attach <span className='font-bold text-gray-600'>driving license scans</span> as well as <span className='font-bold text-gray-600'>customer passport scans</span></p>


                <label for='uploadScan' className='flex items-center justify-center border-[1px]  w-[20%] border-blue-500 rounded-md font-bold text-blue-500 cursor-pointer p-2 '>
                    <input id='uploadScan' type="file" accept="image/*" className='hidden' />
                    <Image src={upload} className='mr-2' width={25} height={25} alt="camera Picture" />
                    Upload Scans
                </label>

                <hr className='text-gray-500 my-4' />

                <div className='flex items-center justify-end gap-4 flex-col sm:flex-row'>
                    <Link href='/reservations' className='flex items-center justify-center border-[1px] w-full sm:w-[20%] border-blue-500 rounded-md font-bold text-blue-500 cursor-pointer p-2'>
                        Cancel
                    </Link>

                    <button type='submit' className='flex items-center justify-center text-white w-full sm:w-[20%] bg-blue-500 rounded-md font-bold cursor-pointer p-2 mt-2 sm:mt-0'>
                        Create Client
                    </button>
                </div>

            </form>
        </>
    )
}
