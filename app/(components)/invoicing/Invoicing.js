'use client'
import React, { useState } from 'react'
import addTerm from '@/public/images/addTerm.svg'
import Image from 'next/image'

export default function Invoicing() {
    const [priceInclude, setPriceInclude] = useState(false)

    const array = ['English', 'Russian', 'Italian', 'German', 'French', 'Portuguese', 'Spanish', 'Polish', 'Chinese', 'Dutch', 'Czech']
    const [conditionList, setConditionList] = useState(null)


    const PriceIncludeTrue = () => {
        setPriceInclude(true)
    }

    const PriceIncludeFalse = () => {
        setPriceInclude(false)
    }


    const addConditions = () => {
        if (conditionList == null) {
            setConditionList(1)
        }
        else {
            setConditionList(conditionList + 1)
        }
    }



    return (
        <>
            <div className='p-3'>
                <p className='font-bold text-gray-500 text-sm'>Prices include VAT</p>
                <div className='w-full flex flex-col md:flex-row items-start md:items-center justify-between'>
                    <p className='w-full md:w-[70%] text-[12px] text-gray-400 mb-2 md:mb-0'>
                        If you choose yes the system will display prices with VAT
                    </p>
                    <div className='flex items-center w-full md:w-[25%]'>
                        <button
                            onClick={PriceIncludeTrue}
                            className={`w-1/2 border-l border-t border-b font-bold ${priceInclude ? 'border-green-500 bg-green-100' : 'border-gray-300'} text-blue-500 rounded-sm px-4 py-2`}>
                            Yes
                        </button>
                        <button
                            onClick={PriceIncludeFalse}
                            className={`w-1/2 border-r border-t border-b font-bold ${priceInclude ? 'border-gray-300' : 'border-red-500 bg-red-100'} text-blue-500 rounded-sm px-4 py-2`}>
                            No
                        </button>
                    </div>
                </div>
            </div>
            <hr className='text-gray-400 my-5' />


            <div className='p-3'>
                <p className='font-bold text-gray-500 text-sm'>VAT percentage (%)</p>
                <div className='w-full flex flex-col md:flex-row items-start md:items-center justify-between'>
                    <p className='w-full md:w-[70%] text-[12px] text-gray-400 mb-2 md:mb-0'>
                        If you choose yes the system will display prices with VAT
                    </p>
                    <div className=' w-full md:w-[25%]'>
                        <input type='text' className='w-full border-[1px] border-gray-400 rounded-sm h-14 px-2 outline-none' />
                    </div>
                </div>
            </div>



            <hr className='text-gray-400 my-5' />
            <div className='p-3'>
                <p className='font-bold text-gray-500 text-sm'>Additional information</p>
                <div className='w-full flex flex-col md:flex-row items-start md:items-center justify-between'>
                    <p className='w-full md:w-[70%] text-[12px] text-gray-400 mb-2 md:mb-0'>
                        Additional information in invoice (fill each locale you use).
                    </p>
                    <div className="relative w-full md:w-[25%]">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Language
                        </label>
                        <select name="" id="" className='w-full border-[1px] border-gray-400 rounded-sm h-14 px-2 text-gray-500'>
                            {
                                array.map((item, index) => {
                                    return <option key={index} value={item}>{item}</option>
                                }
                                )
                            }
                        </select>
                    </div>
                </div>
                <textarea
                    className='w-full my-3 border-[1px] border-gray-300 rounded-md outline-none p-2 text-gray-500 '
                    id=""
                    name=""
                    rows="3"
                    cols="50"
                />
            </div>


            <hr className='text-gray-400 my-5' />
            <div className='p-3'>
                <p className='font-bold text-gray-500 text-sm'>Terms and conditions list</p>
                <div className='w-full flex flex-col md:flex-row items-start md:items-center justify-between'>
                    <p className='w-full md:w-[70%] text-[12px] text-gray-400 mb-2 md:mb-0'>
                        Please specify terms and conditions list (fill each locale you use).
                    </p>
                    <div className="relative w-full md:w-[25%]">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Language
                        </label>
                        <select name="" id="" className='w-full border-[1px] border-gray-400 rounded-sm h-14 px-2 text-gray-500'>
                            {
                                array.map((item, index) => {
                                    return <option key={index} value={item}>{item}</option>
                                }
                                )
                            }
                        </select>
                    </div>
                </div>
                {
                    conditionList == null &&
                    <button
                        // onClick={addConditions}
                        className='p-3 border-[1px] border-blue-400 rounded-md'>
                        <Image
                            src={addTerm}
                            height={20}
                            width={20}
                            alt=''
                        />
                    </button>
                }
            </div>

            <div className='flex items-center w-[30%] gap-2 mt-8'>
                <button className='py-2 px-6 flex justify-center items-center border-[1px] border-blue-400 text-blue-500 font-bold rounded-md'>
                    Cancel
                </button>
                <button className='py-2 px-6 flex justify-center items-center text-white bg-blue-500 font-bold rounded-md'>
                    Save
                </button>

            </div>




        </>
    )
}
