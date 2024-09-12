import React, { useState } from 'react'
import abarth from '@/public/images/abarth.jpg'
import Image from 'next/image'
import pdfOfferModal from '../modal/pdfOfferModal/pdfOfferModal'


export default function Results() {

    const [percentage, setPercentage] = useState(0)
    const [pdfModal, setPdfModal] = useState(false)

    const array = ['English', 'Russian', 'Italian', 'German', 'French', 'Portuguese', 'Spanish', 'Polish', 'Chinese', 'Dutch', 'Czech']


    return (
        <>
            <p className='text-gray-500 font-bold my-5 text-xl'>CALCULATED CARDS</p>

            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                <div className="w-full md:w-[49%] flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                    <div className=" w-full md:w-[50%] mb-4 md:mb-0 p-2 border-[1px] border-gray-400 rounded-md flex items-center">
                        <input type="checkbox" name="" className='w-4 h-4' id="selectAll" />
                        <label className='ml-2 text-gray-500 ' htmlFor="selectAll">Select all</label>
                    </div>
                    <div className=" w-full md:w-[50%] mb-4 md:mb-0 p-2 border-[1px] border-gray-400 rounded-md flex items-center">
                        <input type="checkbox" name="" className='w-4 h-4' id="freeKm" />
                        <label className='ml-2 text-gray-500 ' htmlFor="freeKm">Free km</label>
                    </div>
                </div>
                <div className="w-full md:w-[49%] flex flex-col md:flex-row md:items-center md:justify-between mt-4 md:mt-0 gap-1">
                    <div className=" w-full md:w-[50%] mb-4 md:mb-0 p-2 border-[1px] border-gray-400 rounded-md flex items-center">
                        <input type="checkbox" name="" className='w-4 h-4' id="unlimitedKm" />
                        <label className='ml-2 text-gray-500 ' htmlFor="unlimitedKm">Unlimited km</label>
                    </div>
                    <div className="relative w-full md:w-[50%]">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Include km
                        </label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between my-5 gap-2">
                <div className=" w-full flex justify-between items-center md:w-[50%] mb-4 md:mb-0">
                    <button onClick={() => setPercentage(percentage - 10)} className='text-blue-500 font-bold border-[1px] w-[40%] border-gray-400 rounded-md p-2'>
                        -10%
                    </button>

                    <div>
                        {percentage}%
                    </div>
                    <button onClick={() => setPercentage(percentage + 10)} className='text-blue-500 font-bold border-[1px] w-[40%] border-gray-400 rounded-md p-2'>
                        +10%
                    </button>

                </div>
                <div className=" w-full flex justify-between items-center md:w-[50%] gap-2">
                    <div className="relative w-full md:w-[33%]">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Percentage
                        </label>
                        <div className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            {percentage}
                        </div>
                    </div>
                    <div className="relative w-full md:w-[33%]">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Value
                        </label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="relative w-full md:w-[33%]">
                        <button className=' border-[1px] w-[33%] border-red-400 text-red-500 rounded-md p-2'>
                            X
                        </button>
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <div className=" p-4">
                    <div className='flex justify-end'>
                        <button className='text-gray-500 h-[50px] w-[50px] rounded-full hover:bg-gray-300'>X</button>
                    </div>
                    <div className="bg-white p-4 shadow-lg rounded-lg flex items-center justify-between gap-2">
                        <input type="checkbox" name="" className='w-4 h-4' id="" />
                        <Image
                            src={abarth}
                            height={40}
                            width={40}
                            alt=''
                        />
                        <div className='text-center'>
                            <p className='text-gray-600 font-bold'>Abarth 500</p>
                            <p className='text-gray-400 text-[10px] my-1'>2024 Sedan/Limousine</p>
                            <p className='text-gray-600 my-1'>NO PHOTOS</p>
                        </div>
                        <div className='flex items-center gap-5'>
                            <div>
                                <div className='my-2'>
                                    <p className='text-gray-500 font-bold text-[14px]'>0 €</p>
                                    <p className='text-gray-400 text-[10px]'>Deposit</p>
                                </div>
                                <div className='my-2'>
                                    <p className='text-gray-500 font-bold text-[14px]'>0 km</p>
                                    <p className='text-gray-400 text-[10px]'>Included KMs</p>
                                </div>

                            </div>
                            <div>
                                <div className='my-2'>
                                    <p className='text-gray-500 font-bold text-[14px]'>0 €</p>
                                    <p className='text-gray-400 text-[10px]'>Extra KMs</p>
                                </div>
                                <div className='my-2'>
                                    <p className='text-gray-500 font-bold text-[14px]'>0 €</p>
                                    <p className='text-gray-400 text-[10px]'>Price</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>



            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 my-4 gap-4">
                <button className='bg-blue-500 text-white h-16 rounded-md font-bold w-full '>
                    Copy results
                </button>

                <button onClick={() => setPdfModal(true)} className='border-[1px] border-blue-500 text-blue-500 h-16 rounded-md font-bold w-full '>
                    PDF offer
                </button>

                <div className="w-full relative">
                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                        Language
                    </label>
                    <select name="" id="" className='w-full p-2 h-16 text-gray-500 rounded-md border-[1px] border-gray-400 outline-none'>
                        {
                            array.map((item, index) => {
                                return <option key={index} value={item}>{item}</option>
                            }
                            )
                        }
                    </select>
                </div>




                <button className='border-[1px] border-red-500 text-red-500 h-16 rounded-md font-bold w-full '>
                    X Reset
                </button>


            </div>

            {
                pdfModal && <pdfOfferModal
                    setPdfModal={setPdfModal}
                />
            }


        </>
    )
}
