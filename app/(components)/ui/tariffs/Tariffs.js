import React, { useState } from 'react';
import TariffsModal from '../../modal/tariffsModal/TariffsModal';

export default function Tariffs({ formData, handleChange }) {
    const [showTariffs, setShowTariffs] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const toggleShowTariffs = () => {
        setShowTariffs(prev => !prev);
    };

    return (
        <>
            <div className='flex items-center gap-4'>
                <p className='font-bold text-gray-500'>Create new rates</p>
                <button
                    onClick={() => setShowModal(true)}
                    className='bg-blue-700 text-white font-bold p-2 px-4 rounded-md'>
                    Calculate daily rates from basic price automatically
                </button>
            </div>
            {showModal && (
                <TariffsModal
                    setShowModal={setShowModal}
                    setShowTariffs={setShowTariffs}
                />
            )}

            <div className='mt-8'>
                <div className='flex items-center gap-4'>
                    <input
                        type="radio"
                        id='dailyTariff'
                        name='tariffType'
                        className='h-4 w-4'
                    />
                    <label htmlFor="dailyTariff" className='text-gray-500'>Daily tariff</label>
                </div>

                <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="col-span-1 relative">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Tariff name
                        </label>
                        <input
                            type="text"
                            name="tariff_name"
                            value={formData.tariff_name}
                            onChange={handleChange}
                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                        />
                    </div>
                    <div className="col-span-1 relative">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Daily price
                        </label>
                        <input
                            type="text"
                            name="daily_price"
                            value={formData.daily_price}
                            onChange={handleChange}
                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                        />
                    </div>
                    <div className="col-span-1 relative">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            From days
                        </label>
                        <input
                            type="text"
                            name="from_days"
                            value={formData.from_days}
                            onChange={handleChange}
                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                        />
                    </div>
                    <div className="col-span-1 relative">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            To day (Included)
                        </label>
                        <input
                            type="text"
                            name="to_days"
                            value={formData.to_days}
                            onChange={handleChange}
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
                            name="kmPerDay"
                            value={formData.km_extra_price_tariff || ''}
                            onChange={handleChange}
                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                        />
                    </div>
                    <div className="col-span-1 relative">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            KM ext price
                        </label>
                        <input
                            type="text"
                            name="km_extra_price_tariff"
                            value={formData.km_extra_price_tariff}
                            onChange={handleChange}
                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                        />
                    </div>
                    <div className="col-span-1 flex items-center gap-3">
                        <input
                            type="checkbox"
                            id='unlimitedKilometers'
                            name="unlimited_kilometers"
                            checked={formData.unlimited_kilometers}
                            onChange={handleChange}
                            className='h-5 w-5'
                        />
                        <label htmlFor="unlimitedKilometers" className='text-gray-500'>Unlimited kilometers</label>
                    </div>
                    <div className="col-span-1">
                        <button className='flex items-center justify-center border-[1px] w-full border-blue-500 rounded-md font-bold text-blue-500 cursor-pointer p-2'>
                            Cancel
                        </button>
                    </div>
                </div>

                <div>
                    <p className='font-bold text-gray-500 my-5'>Weekly rates</p>
                    {showTariffs ? (
                        <>
                            {[1, 2, 3, 4, 5, 6].map((item, index) => (
                                <div key={index}>
                                    <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                        <div className="col-span-1 relative">
                                            <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                                Tariff name
                                            </label>
                                            <input
                                                type="text"
                                                name={`weeklyTariffName_${index}`}
                                                value={formData[`weeklyTariffName_${index}`] || ''}
                                                onChange={handleChange}
                                                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                                            />
                                        </div>
                                        <div className="col-span-1 relative">
                                            <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                                Daily price
                                            </label>
                                            <input
                                                type="text"
                                                name={`weeklyDailyPrice_${index}`}
                                                value={formData[`weeklyDailyPrice_${index}`] || ''}
                                                onChange={handleChange}
                                                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                                            />
                                        </div>
                                        <div className="col-span-1 relative">
                                            <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                                From days
                                            </label>
                                            <input
                                                type="text"
                                                name={`weeklyFromDays_${index}`}
                                                value={formData[`weeklyFromDays_${index}`] || ''}
                                                onChange={handleChange}
                                                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                                            />
                                        </div>
                                        <div className="col-span-1 relative">
                                            <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                                To day (Included)
                                            </label>
                                            <input
                                                type="text"
                                                name={`weeklyToDay_${index}`}
                                                value={formData[`weeklyToDay_${index}`] || ''}
                                                onChange={handleChange}
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
                                                name={`weeklyKmPerDay_${index}`}
                                                value={formData[`weeklyKmPerDay_${index}`] || ''}
                                                onChange={handleChange}
                                                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                                            />
                                        </div>
                                        <div className="col-span-1 relative">
                                            <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                                KM ext price
                                            </label>
                                            <input
                                                type="text"
                                                name={`weeklyKmExtPrice_${index}`}
                                                value={formData[`weeklyKmExtPrice_${index}`] || ''}
                                                onChange={handleChange}
                                                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                                            />
                                        </div>
                                        <div className="col-span-1 flex items-center gap-3">
                                            <input
                                                type="checkbox"
                                                id={`weeklyUnlimitedKilometers_${index}`}
                                                name={`weeklyUnlimitedKilometers_${index}`}
                                                checked={formData[`weeklyUnlimitedKilometers_${index}`] || false}
                                                onChange={handleChange}
                                                className='h-5 w-5'
                                            />
                                            <label htmlFor={`weeklyUnlimitedKilometers_${index}`} className='text-gray-500'>Unlimited kilometers</label>
                                        </div>
                                        <div className="col-span-1">
                                            <button
                                                onClick={toggleShowTariffs}
                                                className='flex items-center justify-center text-white w-full bg-blue-500 rounded-md font-bold cursor-pointer p-2 mt-2 md:mt-0'>
                                                Add rate
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : (
                        <p className='text-sm font-bold text-gray-700 text-center'>No rates of current type added yet, add new tariff.</p>
                    )}
                </div>
            </div>
        </>
    );
}
