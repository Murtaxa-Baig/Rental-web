import React from 'react';

export default function Perameter({ formData, handleChange }) {
    const color = ['White', 'Black', 'Gray', 'Red', 'Green', 'Blue', 'Dark Red', 'Dark Green', 'Dark Blue', 'Dark Gray', 'Yellow', 'Orange', 'Pink', 'Purple'];

    return (
        <>
            <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="col-span-1 relative">
                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                        Odometer
                    </label>
                    <input
                        name="odometer"
                        value={formData.odometer}
                        onChange={handleChange}
                        type="text"
                        className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                    />
                </div>
                <div className="col-span-1 relative">
                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                        Color
                    </label>
                    <select
                        name="color"
                        value={formData.color}
                        onChange={handleChange}
                        className='w-full p-2 text-gray-500 rounded-md border-2 border-gray-300 outline-none'
                    >
                        {color.map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))}
                    </select>
                </div>
                <div className="col-span-1 relative">
                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                        Passenger
                    </label>
                    <select
                        name="passengers"
                        value={formData.passengers}
                        onChange={handleChange}
                        className='w-full p-2 text-gray-500 rounded-md border-2 border-gray-300 outline-none'
                    >
                        {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="col-span-1 relative">
                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                        Fuel Type
                    </label>
                    <select
                        name="fuel_type"
                        value={formData.fuel_type}
                        onChange={handleChange}
                        className='w-full p-2 text-gray-500 rounded-md border-2 border-gray-300 outline-none'
                    >
                        {['Petrol', 'Diesel', 'Electric', 'GPL', 'Hybrid'].map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))}
                    </select>
                </div>
                <div className="col-span-1 relative">
                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                        Transmission
                    </label>
                    <select
                        name="transmission"
                        value={formData.transmission}
                        onChange={handleChange}
                        className='w-full p-2 text-gray-500 rounded-md border-2 border-gray-300 outline-none'
                    >
                        {['Automatic', 'Manual'].map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))}
                    </select>
                </div>
                <div className="col-span-1 relative">
                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                        Base kilometers a day
                    </label>
                    <input
                        name="base_kilometers_per_day"
                        value={formData.base_kilometers_per_day}
                        onChange={handleChange}
                        type="text"
                        className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="col-span-1 relative">
                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                        KM{`'`}s extra price
                    </label>
                    <input
                        name="km_extra_price"
                        value={formData.km_extra_price}
                        onChange={handleChange}
                        type="text"
                        className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                    />
                </div>
                <div className="col-span-1 relative">
                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                        Basic daily price
                    </label>
                    <input
                        name="basic_daily_price"
                        value={formData.basic_daily_price}
                        onChange={handleChange}
                        type="text"
                        className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                    />
                </div>
                <div className="col-span-1 relative">
                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                        Deposit
                    </label>
                    <input
                        name="deposit"
                        value={formData.deposit}
                        onChange={handleChange}
                        type="text"
                        className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="col-span-1 relative">
                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                        Max speed
                    </label>
                    <input
                        name="max_speed"
                        value={formData.max_speed}
                        onChange={handleChange}
                        type="text"
                        className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                    />
                </div>
            </div>
        </>
    );
}
