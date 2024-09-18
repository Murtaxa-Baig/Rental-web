import React from 'react'

export default function BillingOptions() {
    return (
        <>
            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-2">
                <div className="w-full flex items-center justify-between md:w-[49%] mb-4 md:my-3 px-3">
                    <div className='w-[80%] '>
                        <p className='font-semibold text-gray-700'>Hide price per day in contract</p>
                        <p className='text-sm text-gray-500 mt-2'>By default price per day is hidden in the contract</p>

                    </div>
                    <input type="checkbox" name="" className='w-5 h-5' id="" />
                </div>
                <div className="w-full flex items-center justify-between md:w-[49%] mb-4 md:my-3 px-3">
                    <div className='w-[80%] '>
                        <p className='font-semibold text-gray-700'>Commision only</p>
                        <p className='text-sm text-gray-500 mt-2'>All fields will be ignored in calculation except expenses</p>

                    </div>
                    <input type="checkbox" name="" className='w-5 h-5' id="" />
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-2">
                <div className="w-full flex items-center justify-between md:w-[49%] mb-4 md:my-3 px-3">
                    <div className='w-[80%] '>
                        <p className='font-semibold text-gray-700'>Hide total price from contract</p>
                        <p className='text-sm text-gray-500 mt-2'>If checked price will be hidden in pdf document only</p>

                    </div>
                    <input type="checkbox" name="" className='w-5 h-5' id="" />
                </div>
            </div>

        </>
    )
}
