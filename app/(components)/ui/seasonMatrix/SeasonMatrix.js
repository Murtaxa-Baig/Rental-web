import React from 'react'

export default function SeasonMatrix() {
    return (
        <>
            <p className='text-gray-700'>Select seasons (rates) applyed to vehicle</p>

            <div className="relative mt-10">
                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                    Tariff name
                </label>
                <input
                    type="text"
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                />

            </div>
        </>
    )
}
