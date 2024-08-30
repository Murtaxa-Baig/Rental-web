import React, { useState } from 'react'
import TariffsModal from '../../modal/tariffsModal/TariffsModal'

export default function Tariffs() {

    const [showTariffs, setShowTariffs] = useState(false)
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <div className='flex items-center gap-4'>
                <p className='font-bold text-gray-500'>Create new rates</p>
                <button
                    onClick={() => setShowModal(true)}
                    className='bg-blue-700 text-white font-bold p-2 px-4 rounded-md'>
                    Calculate daildy rates from basic price automatically
                </button>
            </div>
            {
                showModal && <TariffsModal
                    setShowModal={setShowModal}
                    setShowTariffs={setShowTariffs}
                />
            }


            <div className='mt-8'>
                <div className='flex items-center gap-4'>
                    <input type="radio" id='dailyTariff' className='h-4 w-4' />
                    <label For="dailyTariff" className=' text-gray-500'>Daily tariff</label>
                </div>

                <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="col-span-1 relative">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Tariff name
                        </label>
                        <input
                            type="text"
                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                        />

                    </div>
                    <div className="col-span-1 relative">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Daily price
                        </label>
                        <input
                            type="text"
                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                        />

                    </div>
                    <div className="col-span-1 relative">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            From days
                        </label>
                        <input
                            type="text"
                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                        />

                    </div>
                    <div className="col-span-1 relative">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            To day(Included)
                        </label>
                        <input
                            type="text"
                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                        />

                    </div>
                </div>

                <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="col-span-1 relative">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            KM/day incl.
                        </label>
                        <input
                            type="text"
                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                        />

                    </div>
                    <div className="col-span-1 relative">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            KM ext price
                        </label>
                        <input
                            type="text"
                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                        />

                    </div>
                    <div className="col-span-1 flex items-center gap-3">
                        <input type="checkbox" id='unlimitedKilometers' className='h-5 w-5' />
                        <label For="unlimitedKilometers" className='text-gray-500'>Unlimited kilometers</label>

                    </div>
                    <div className="col-span-1">
                        <button className='flex items-center justify-center border-[1px] w-full border-blue-500 rounded-md font-bold text-blue-500 cursor-pointer p-2'>
                            Cancel
                        </button>
                    </div>
                </div>

                <div>

                    <p className='font-bold text-gray-500 my-5'>Weekly rates</p>
                    {
                        showTariffs ?
                            <>
                                {
                                    [1, 2, 3, 4, 5, 6].map((item, index) => {
                                        return <>
                                            <div key={index} className="grid grid-cols-1 mt-8 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                                <div className="col-span-1 relative">
                                                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                                        Tariff name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                                                    />

                                                </div>
                                                <div className="col-span-1 relative">
                                                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                                        Daily price
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                                                    />

                                                </div>
                                                <div className="col-span-1 relative">
                                                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                                        From days
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                                                    />

                                                </div>
                                                <div className="col-span-1 relative">
                                                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                                        To day(Included)
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                                                    />

                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                                <div className="col-span-1 relative">
                                                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                                        KM/day incl.
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                                                    />

                                                </div>
                                                <div className="col-span-1 relative">
                                                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                                        KM ext price
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                                                    />

                                                </div>
                                                <div className="col-span-1 flex items-center gap-3">
                                                    <input type="checkbox" id='unlimitedKilometers' className='h-5 w-5' />
                                                    <label For="unlimitedKilometers" className='text-gray-500'>Unlimited kilometers</label>

                                                </div>
                                                <div className="col-span-1">
                                                    <button onClick={showTariffs} className='flex items-center justify-center text-white w-full bg-blue-500 rounded-md font-bold cursor-pointer p-2 mt-2 md:mt-0'>
                                                        Add rate
                                                    </button>
                                                </div>
                                            </div>


                                        </>
                                    })
                                }
                            </>

                            : <p className='text-sm font-bold text-gray-700 text-center'>No rates of current type added yet, add new tariff.</p>

                    }

                </div>
            </div>

        </>
    )
}
