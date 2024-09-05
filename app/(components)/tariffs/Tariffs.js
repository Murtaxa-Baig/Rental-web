'use client'
import React, { useState } from 'react'
import tick from '@/public/images/tick.svg'
import Image from 'next/image'
import more from "@/public/images/more.svg"
import exclamation from "@/public/images/exclamation.svg"
import ApplyMatrixModal from '../modal/applyMatrixModal/ApplyMatrixModal'

export default function Tariffs() {

    const [showmodal, setShowModal] = useState(false)
    const [roundingEnabled, setRoundingEnabled] = useState(false)
    const [roundPrice, setRoundPrice] = useState(false)
    const [roundDistance, setRoundDistance] = useState(false)
    const [tariffication, setTariffication] = useState(false)




    const RoundingEnable = () => { setRoundingEnabled(true) }
    const RoundingDisable = () => { setRoundingEnabled(false) }

    const RoundPriceTrue = () => { setRoundPrice(true) }
    const RoundPriceFalse = () => { setRoundPrice(false) }

    const RoundDistanceTrue = () => { setRoundDistance(true) }
    const RoundDistanceFalse = () => { setRoundDistance(false) }


    return (
        <>
            <div className='px-2'>
                <p className='text-center font-semibold text-2xl text-gray-500'>Days tariff matrix</p>
                <p className='text-sm text-gray-400 text-center'>This tariffs matrix used to calculate price of car rental if car tariffs not filled, add or delete rows, and fill this matrix. Then save result.</p>
                <p className='text-center font-bold text-xl text-gray-700 my-3'>Validation requirements:</p>

                <div className='flex items-center md:mx-5 my-4'>
                    <Image
                        src={tick}
                        className='mx-4'
                        alt=''
                    />
                    <p className='text-gray-400 text-sm'>Minimal count of rows: 1, maximum: not limited.</p>
                </div>
                <div className='flex items-center md:mx-5 my-4'>
                    <Image
                        src={tick}
                        className='mx-4'
                        alt=''
                    />
                    <p className='text-gray-400 text-sm'>“From days” of the next row must be +1 greater than “up to days” of the previous row.</p>
                </div>
                <div className='flex items-center md:mx-5 my-4'>
                    <Image
                        src={tick}
                        className='mx-4'
                        alt=''
                    />
                    <p className='text-gray-400 text-sm'>Up to days must be greater than from days</p>
                </div>
                <div className='flex items-center md:mx-5 my-4'>
                    <Image
                        src={tick}
                        className='mx-4'
                        alt=''
                    />
                    <p className='text-gray-400 text-sm'>Price coefficient and base km day coefficient must be between 0 and 1</p>
                </div>

                <table className="min-w-full bg-white">
                    <thead>
                        <th className='text-sm text-gray-400'>from days</th>
                        <th className='text-sm text-gray-400'>up to days</th>
                        <th className='text-sm text-gray-400'>price coefficient</th>
                        <th className='text-sm text-gray-400'>base km day coefficient</th>
                        <th className='text-sm text-gray-400'>actions</th>
                    </thead>
                    <tbody className="text-gray-600 text-sm">
                        <tr className='my-6'>
                            <td className='text-center'><input type="number" placeholder='1' name="" id="" className='outline-none w-[60px]' /></td>
                            <td className='text-center'><input type="number" placeholder='3' name="" id="" className='outline-none w-[60px]' /></td>
                            <td className='text-center'><input type="number" placeholder='1' name="" id="" className='outline-none w-[60px]' /></td>
                            <td className='text-center'><input type="number" placeholder='1' name="" id="" className='outline-none w-[60px]' /></td>
                            <td className='text-center'><Image src={more} alt='' className='mx-auto' /></td>
                        </tr>
                        <tr className='my-6'>
                            <td className='text-center'><input type="number" placeholder='4' name="" id="" className='outline-none w-[60px]' /></td>
                            <td className='text-center'><input type="number" placeholder='6' name="" id="" className='outline-none w-[60px]' /></td>
                            <td className='text-center'><input type="number" placeholder='0.93' name="" id="" className='outline-none w-[60px]' /></td>
                            <td className='text-center'><input type="number" placeholder='1' name="" id="" className='outline-none w-[60px]' /></td>
                            <td className='text-center'><Image src={more} alt='' className='mx-auto' /></td>
                        </tr>
                        <tr className='my-6'>
                            <td className='text-center'><input type="number" placeholder='7' name="" id="" className='outline-none w-[60px]' /></td>
                            <td className='text-center'><input type="number" placeholder='12' name="" id="" className='outline-none w-[60px]' /></td>
                            <td className='text-center'><input type="number" placeholder='0.85' name="" id="" className='outline-none w-[60px]' /></td>
                            <td className='text-center'><input type="number" placeholder='0.86' name="" id="" className='outline-none w-[60px]' /></td>
                            <td className='text-center'><Image src={more} alt='' className='mx-auto' /></td>
                        </tr>
                        <tr className='my-6'>
                            <td className='text-center'><input type="number" placeholder='13' name="" id="" className='outline-none w-[60px]' /></td>
                            <td className='text-center'><input type="number" placeholder='18' name="" id="" className='outline-none w-[60px]' /></td>
                            <td className='text-center'><input type="number" placeholder='0.75' name="" id="" className='outline-none w-[60px]' /></td>
                            <td className='text-center'><input type="number" placeholder='0.76' name="" id="" className='outline-none w-[60px]' /></td>
                            <td className='text-center'><Image src={more} alt='' className='mx-auto' /></td>
                        </tr>
                        <tr className='my-6'>
                            <td className='text-center'><input type="number" placeholder='19' name="" id="" className='outline-none w-[60px]' /></td>
                            <td className='text-center'><input type="number" placeholder='23' name="" id="" className='outline-none w-[60px]' /></td>
                            <td className='text-center'><input type="number" placeholder='0.67' name="" id="" className='outline-none w-[60px]' /></td>
                            <td className='text-center'><input type="number" placeholder='0.76' name="" id="" className='outline-none w-[60px]' /></td>
                            <td className='text-center'><Image src={more} alt='' className='mx-auto' /></td>
                        </tr>
                        <tr className='my-6'>
                            <td className='text-center'><input type="number" placeholder='24' name="" id="" className='outline-none w-[60px]' /></td>
                            <td className='text-center'><input type="number" placeholder='30' name="" id="" className='outline-none w-[60px]' /></td>
                            <td className='text-center'><input type="number" placeholder='0.5' name="" id="" className='outline-none w-[60px]' /></td>
                            <td className='text-center'><input type="number" placeholder='0.76' name="" id="" className='outline-none w-[60px]' /></td>
                            <td className='text-center'><Image src={more} alt='' className='mx-auto' /></td>
                        </tr>
                    </tbody>
                </table>
                <div className='flex items-center justify-between my-3'>
                    <button className='py-2  px-6 flex justify-center items-center border-[1px] border-blue-400 text-blue-500 font-bold rounded-md'>
                        Save matrix
                    </button>
                    <button onClick={() => setShowModal(true)} className='py-2  px-6 flex justify-center items-center border-[1px] border-blue-400 text-blue-500 font-bold rounded-md'>
                        Apply matrix to all cars
                    </button>
                    {
                        showmodal && <ApplyMatrixModal
                            setShowModal={setShowModal}
                        />
                    }
                </div>

                <p className='font-bold text-[18px] text-gray-700 my-3'>Chose the way of rounding tariff values</p>

                <div className='w-full flex flex-col md:flex-row items-start md:items-center justify-between'>
                    <p className='w-full font-bold text-gray-700 mb-2 md:mb-0'>
                        Is rounding enabled
                    </p>
                    <div className='flex items-center w-full md:w-[25%]'>
                        <button
                            onClick={RoundingEnable}
                            className={`w-1/2 border-l border-t border-b font-bold ${roundingEnabled ? 'border-green-500 bg-green-100' : 'border-gray-300'} text-blue-500 rounded-sm px-4 py-2`}>
                            Yes
                        </button>
                        <button
                            onClick={RoundingDisable}
                            className={`w-1/2 border-r border-t border-b font-bold ${roundingEnabled ? 'border-gray-300' : 'border-red-500 bg-red-100'} text-blue-500 rounded-sm px-4 py-2`}>
                            No
                        </button>
                    </div>
                </div>
                <hr className='text-gray-400 my-5' />

                <div className='w-full flex flex-col md:flex-row items-start md:items-center justify-between'>
                    <p className='w-full font-bold text-gray-700 mb-2 md:mb-0'>
                        Price rounding
                    </p>
                    <div className=' w-full md:w-[25%]'>
                        <select name="" id="" className='w-full border-[1px] border-gray-400 rounded-sm h-14 px-2 text-gray-500'>
                            <option value="">0.1</option>
                            <option value="">0.5</option>
                            <option value="">1</option>
                            <option value="">5</option>
                            <option value="">10</option>
                            <option value="">50</option>
                            <option value="">100</option>
                        </select>
                    </div>
                </div>

                <hr className='text-gray-400 my-5' />

                <div className='w-full flex flex-col md:flex-row items-start md:items-center justify-between'>
                    <p className='w-full font-bold text-gray-700 mb-2 md:mb-0'>
                        Round price up
                    </p>
                    <div className='flex items-center w-full md:w-[25%]'>
                        <button
                            onClick={RoundPriceTrue}
                            className={`w-1/2 border-l border-t border-b font-bold ${roundPrice ? 'border-green-500 bg-green-100' : 'border-gray-300'} text-blue-500 rounded-sm px-4 py-2`}>
                            Yes
                        </button>
                        <button
                            onClick={RoundPriceFalse}
                            className={`w-1/2 border-r border-t border-b font-bold ${roundPrice ? 'border-gray-300' : 'border-red-500 bg-red-100'} text-blue-500 rounded-sm px-4 py-2`}>
                            No
                        </button>
                    </div>
                </div>

                <hr className='text-gray-400 my-5' />
                <div className='w-full flex flex-col md:flex-row items-start md:items-center justify-between'>
                    <p className='w-full font-bold text-gray-700 mb-2 md:mb-0'>
                        Distance rounding
                    </p>
                    <div className=' w-full md:w-[25%]'>
                        <select name="" id="" className='w-full border-[1px] border-gray-400 rounded-sm h-14 px-2 text-gray-500'>
                            <option value="">0.1</option>
                            <option value="">0.5</option>
                            <option value="">1</option>
                            <option value="">5</option>
                            <option value="">10</option>
                            <option value="">50</option>
                            <option value="">100</option>
                        </select>
                    </div>
                </div>

                <hr className='text-gray-400 my-5' />


                <div className='w-full flex flex-col md:flex-row items-start md:items-center justify-between'>
                    <p className='w-full font-bold text-gray-700 mb-2 md:mb-0'>
                        Round distance up
                    </p>
                    <div className='flex items-center w-full md:w-[25%]'>
                        <button
                            onClick={RoundDistanceTrue}
                            className={`w-1/2 border-l border-t border-b font-bold ${roundDistance ? 'border-green-500 bg-green-100' : 'border-gray-300'} text-blue-500 rounded-sm px-4 py-2`}>
                            Yes
                        </button>
                        <button
                            onClick={RoundDistanceFalse}
                            className={`w-1/2 border-r border-t border-b font-bold ${roundDistance ? 'border-gray-300' : 'border-red-500 bg-red-100'} text-blue-500 rounded-sm px-4 py-2`}>
                            No
                        </button>
                    </div>
                </div>
                <hr className='text-gray-400 my-5' />

                <button className='flex items-center justify-center border-[1px] w-full sm:w-[20%] border-blue-500 rounded-md font-bold text-blue-500 cursor-pointer p-2'>
                    Save rounding
                </button>

                <p className='text-gray-700 font-bold text-[20px] mt-5 mb-6'>Seasons settings</p>
                <p className='text-gray-500 '>This is a matrix of seasonal surcharges to the price. Add and remove rows in the
                    table to create seasonal surcharges to the base price.</p>
                <p className='text-gray-700 font-bold text-[20px] mt-5 mb-6'>Rules</p>

                <div className='flex items-center md:mx-5 my-4'>
                    <Image
                        src={tick}
                        className='mx-4'
                        alt=''
                    />
                    <p className='text-gray-400 text-sm'>Minimal count of rows: 0, max not limited.</p>
                </div>
                <div className='flex items-center md:mx-5 my-4'>
                    <Image
                        src={tick}
                        className='mx-4'
                        alt=''
                    />
                    <p className='text-gray-400 text-sm'>Intervals may intersect, in this case the intersections of the intervals will be summed.</p>
                </div>

                <table className="min-w-full bg-white">
                    <thead>
                        <th className='text-sm w-[33%] text-center text-gray-400'>from days</th>
                        <th className='text-sm w-[33%] text-center text-gray-400'>up to days</th>
                        <th className='text-sm w-[33%] text-center text-gray-400'>price coefficient</th>
                    </thead>
                    <tbody>
                    </tbody>
                </table>

                <p className='text-gray-500 text-center my-6'>No settings yet</p>

                <div className='w-full text-center my-4'>
                    <button className='text-gray-500 font-bold'>+ Add new</button>
                </div>

                <button className='flex items-center justify-center border-[1px] w-full sm:w-[20%] border-blue-500 rounded-md font-bold text-blue-500 cursor-pointer p-2'>
                    Save seasons
                </button>

                <hr className='text-gray-400 my-7' />

                <p className='text-center font-semibold text-2xl text-gray-500'>Cancellation policy</p>
                <p className='text-sm text-gray-400 text-center'>This cancellation policy used to show information in generated offers, you can leave it empty if not required.</p>
                <p className='text-center font-bold text-xl text-gray-700 my-3'>Validation requirements:</p>

                <div className='flex items-center md:mx-5 my-4'>
                    <Image
                        src={tick}
                        className='mx-4'
                        alt=''
                    />
                    <p className='text-gray-400 text-sm'>Minimal count of rows: 0, max not limited.</p>
                </div>
                <div className='flex items-center md:mx-5 my-4'>
                    <Image
                        src={tick}
                        className='mx-4'
                        alt=''
                    />
                    <p className='text-gray-400 text-sm'>Days of next row must be greater than previous row</p>
                </div>
                <table className="min-w-full bg-white">
                    <thead>
                        <th className='text-sm w-[33%] text-center text-gray-400'>days</th>
                        <th className='text-sm w-[33%] text-center text-gray-400'>percents</th>
                        <th className='text-sm w-[33%] text-center text-gray-400'>actions</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='text-center'><input type="number" placeholder='3' name="" id="" className='outline-none w-[60px]' /></td>
                            <td className='text-center'><input type="number" placeholder='100' name="" id="" className='outline-none w-[60px]' /></td>
                            <td className='text-center'><Image src={more} alt='' className='mx-auto' /></td>
                        </tr>
                        <tr>
                            <td className='text-center'><input type="number" placeholder='7' name="" id="" className='outline-none w-[60px]' /></td>
                            <td className='text-center'><input type="number" placeholder='60' name="" id="" className='outline-none w-[60px]' /></td>
                            <td className='text-center'><Image src={more} alt='' className='mx-auto' /></td>
                        </tr>
                        <tr>
                            <td className='text-center'><input type="number" placeholder='14' name="" id="" className='outline-none w-[60px]' /></td>
                            <td className='text-center'><input type="number" placeholder='40' name="" id="" className='outline-none w-[60px]' /></td>
                            <td className='text-center'><Image src={more} alt='' className='mx-auto' /></td>
                        </tr>
                        <tr>
                            <td className='text-center'><input type="number" placeholder='30' name="" id="" className='outline-none w-[60px]' /></td>
                            <td className='text-center'><input type="number" placeholder='30' name="" id="" className='outline-none w-[60px]' /></td>
                            <td className='text-center'><Image src={more} alt='' className='mx-auto' /></td>
                        </tr>
                    </tbody>
                </table>

                <button className='flex my-5 items-center justify-center border-[1px] w-full sm:w-[20%] border-blue-500 rounded-md font-bold text-blue-500 cursor-pointer p-2'>
                    Save policy
                </button>

                <hr className='text-gray-400 my-8' />

                <p className='text-center font-bold text-xl text-gray-700 my-3'>Tariffication options</p>
                <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between my-8">
                    {/* Radio group 1: Standart and Working Days */}
                    <div className="flex items-center justify-between w-full md:w-[40%] mb-4 md:mb-0">
                        <div className='flex items-center'>
                            {/* Radio button for 'Standart' */}
                            <input
                                type="radio"
                                name="tariffication"
                                id="Standart"
                                onClick={() => setTariffication(false)}
                                className='mx-2 h-4 w-4'
                            />
                            <label htmlFor="Standart" onClick={() => setTariffication(false)} className='text-gray-500'>Standart</label>
                        </div>

                        <div className='flex items-center'>
                            {/* Radio button for 'Working Days' */}
                            <input
                                type="radio"
                                name="tariffication"
                                id="WorkingDays"
                                onClick={() => setTariffication(true)}
                                className='mx-2 h-4 w-4'
                            />
                            <label htmlFor="WorkingDays" onClick={() => setTariffication(true)} className='text-gray-500'>Working days</label>
                        </div>
                    </div>

                    {/* Radio group 2: Hourly Tariffication */}
                    <div className="flex items-center w-full md:w-[49%]">
                        <input
                            type="radio"
                            name="tariffication"
                            id="Hourly"
                            disabled
                            className='mx-2 h-4 w-4 cursor-not-allowed'
                        />
                        <label htmlFor="Hourly" className='text-gray-500 cursor-not-allowed'>
                            Hourly tariffication (on development)
                        </label>
                    </div>
                </div>

                {
                    tariffication ? (<>
                        <p className='text-gray-600 my-5'>Tariff is calculated by working days of rental.</p>
                        <p className='text-gray-600 text-sm'>
                            Working days count calculates by algorithm: if start day and end day it's same
                            date, then days = 1, if rent from evening to morning of next day then days = 2,
                            or if rent from friday to monday, then days = 4.
                        </p>
                        <hr className='text-gray-400 my-5' />
                    </>) : (<>
                        <p className='text-gray-600 my-5'>Standart tariffication option. Tariff is calculated by days of rental (default).</p>
                        <p className='text-gray-600 text-sm'>
                            Days count calculates by formula: days = total hours / 24 (hours in day)
                            and rounded to upper integer. Rent for few hours is calculated as for one day.
                            And rent from 10 o'clock to 11 o'clock next day is calculated as for two days.
                        </p>
                        <div className='flex items-center mt-5 bg-cyan-200 rounded-md p-2'>
                            <Image
                                src={exclamation}
                                alt=''
                                className='mx-1'
                            />
                            <p className='text-[12px] text-gray-500'>
                                Buffer time represents the time in minutes that defines an acceptable
                                margin or gap, preventing the addition of an extra day to the reservation.
                                By default, it is configured to 120 minutes. This implies that if the reservation
                                lasts 25 hours and 59 minutes, it will be considered as one day, but if the
                                reservation extends to 26 hours, it will be counted as 2 days.                            </p>
                        </div>
                        <div className='flex items-center mt-5 bg-cyan-200 rounded-md p-2'>
                            <Image
                                src={exclamation}
                                alt=''
                                className='mx-1'
                            />
                            <p className='text-[12px] text-gray-500'>
                                You can add a negative value; for example, if the value is -60 minutes,
                                then with a duration of 1 day and 22:59, it will be considered as 1 day.
                                If it is 23:01, then it will be counted as 2 days. Two days and 1 minute will
                                be counted as 3 days.
                            </p>
                        </div>

                        <div className="relative w-full md:w-[30%] mb-4 md:mb-0 mt-5">
                            <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                Standard buffer time
                            </label>
                            <input
                                type="number"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>


                        <hr className='text-gray-400 my-5' />
                    </>)
                }


                <button className='flex my-5 items-center justify-center border-[1px] w-full sm:w-[20%] border-blue-500 rounded-md font-bold text-blue-500 cursor-pointer p-2'>
                    Save policy
                </button>



            </div>
        </>
    )
}
