'use client'
import React, { useState } from 'react'
import service from '@/public/images/service.svg'
import Image from 'next/image'
import AddNewCompany from '../modal/addNewCompany/AddNewCompany'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import Perameter from '../ui/perameter/Perameter'
import Excess from '../ui/excess/Excess'
import Tariffs from '../ui/tariffs/Tariffs'
import SeasonMatrix from '../ui/seasonMatrix/SeasonMatrix'
import Additional from '../ui/additional/Additional'
import Documents from '../ui/documents/Documents'

export default function VehicleInformation() {

    const [isShowModal, setIsShowModal] = useState(false)
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const vehicleType = ['Car', 'Wagon', 'Moto', 'WaterToy', 'Boat']
    const brand = [
        "Aston Martin", "Alfa Romeo", "Acura", "Audi", "Bentley",
        "BMW", "Bugatti", "Buick", "Cadillac", "Chevrolet",
        "Chrysler", "Citroën", "Daihatsu", "Dodge", "Ferrari",
        "Fiat", "Ford", "Genesis", "GMC", "Honda",
        "Hummer", "Hyundai", "Infiniti", "Isuzu", "Jaguar",
        "Jeep", "Kia", "Koenigsegg", "Lamborghini", "Lancia",
        "Land Rover", "Lexus", "Lincoln", "Lucid", "Maserati",
        "Mazda", "McLaren", "Mercedes-Benz", "Mini", "Mitsubishi",
        "Nissan", "Pagani", "Peugeot", "Polestar", "Porsche",
        "Ram", "Renault", "Rivian", "Rolls-Royce", "Saab",
        "Seat", "Skoda", "Smart", "Subaru", "Suzuki",
        "Tesla", "Toyota", "Volkswagen", "Volvo"
    ]

    const model = ['2020', '2021', '2022', '2023']
    const selectCategories = ['Wagon/Estate', 'Passenger van', 'Sedan', 'Convertible', 'Sport', 'SUV/4{`×`}4', 'Crossover', 'Coupe']


    const accordionData = [
        {
            title: 'Perameter',
            content: <Perameter />
        },
        {
            title: 'Excess',
            content: <Excess />
        },
        {
            title: 'Tariffs',
            content: <Tariffs />
        },
        {
            title: 'Season matrix',
            content: <SeasonMatrix />
        },
        {
            title: 'Additional',
            content: <Additional />
        },
        {
            title: 'Documents',
            content: <Documents />
        },
    ];

    return (
        <>
            <form action="" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col md:flex-row items-center w-full">
                    <div className='w-full md:w-[20%]'>
                        <div className="border-[1px] border-cyan-400 h-[125px] w-[125px] rounded-full flex justify-center items-center mx-auto">
                            <p>Logo</p>
                        </div>
                    </div>
                    <div className="w-full md:w-[80%]">
                        <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="col-span-1 relative">
                                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                    Vehicle type
                                </label>
                                <select name="" id="" className='w-full p-2 text-gray-500 rounded-md border-2 border-gray-300 outline-none'>
                                    {vehicleType.map((item, index) => (
                                        <option key={index} value={item}>{item}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-span-1 relative">
                                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                    Brand
                                </label>
                                <select name="" id="" className='w-full p-2 text-gray-500 rounded-md border-2 border-gray-300 outline-none'>
                                    {brand.map((item, index) => (
                                        <option key={index} value={item}>{item}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-span-1 relative">
                                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                    Model
                                </label>
                                <select name="" id="" className='w-full p-2 text-gray-500 rounded-md border-2 border-gray-300 outline-none'>
                                    {model.map((item, index) => (
                                        <option key={index} value={item}>{item}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="col-span-1 relative">
                                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                    Select categories
                                </label>
                                <select name="" id="" className='w-full p-2 text-gray-500 rounded-md border-2 border-gray-300 outline-none'>
                                    {selectCategories.map((item, index) => (
                                        <option key={index} value={item}>{item}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-span-1 relative">
                                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                    Year of issue
                                </label>

                                <input
                                    type="text"
                                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                                />
                            </div>
                            <div className="col-span-1 relative">
                                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                    Plate number
                                </label>

                                <input
                                    type="text"
                                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                                />
                            </div>
                        </div>


                        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-8">
                            <div className="relative w-full md:w-[49%] mb-4 md:mb-0">
                                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                    Base location
                                </label>
                                <input
                                    type="text"
                                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="relative w-full md:w-[49%]">
                                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                    Link of offices
                                </label>
                                <input
                                    type="text"
                                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </div>

                </div>

                <p className='text-sm my-4'>Here you can decide if the car is your own or if it{`'`}s the agency{`'`}s car.</p>
                <div className="grid grid-cols-1 mt-5 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4">
                    <div className="md:col-span-1 lg:col-span-1 w-full flex items-center border-2 p-2 rounded-md h-14">
                        <input type="radio" />
                        <p className="font-bold text-gray-500 ml-2">It{`'`}s own client</p>
                    </div>
                    <div className="md:col-span-3 lg:col-span-3 w-full relative h-14">
                        <label className="absolute -top-3 left-3 font-bold bg-white px-1 text-[12px] text-gray-600">
                            Link to company
                        </label>
                        <input
                            type="text"
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


                <div className="w-full mx-auto mt-3">
                    {accordionData.map((item, index) => (
                        <div key={index} className="border-b-2 border-gray-200">
                            <button
                                className="w-full text-left p-4 focus:outline-none bg-cyan-50"
                                onClick={() => toggleAccordion(index)}
                            >
                                <div className="flex justify-between items-center text-blue-500">
                                    <span className=" font-medium">{item.title}</span>
                                    {activeIndex === index ? (
                                        <ChevronUpIcon className="w-5 h-5 text-gray-500 transition-transform duration-300" />
                                    ) : (
                                        <ChevronDownIcon className="w-5 h-5 text-gray-500 transition-transform duration-300" />
                                    )}
                                </div>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? ' p-4 bg-white' : 'max-h-0'}`}
                            >
                                {item.content}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="col-span-1 flex items-center">
                        <input type="checkbox" id='excludeFromOffersGenerator' className='h-4 w-4' />
                        <label For="excludeFromOffersGenerator" className='ml-2'>Exclude From Offers Generator</label>
                    </div>
                    <div className="col-span-1 flex items-center">
                        <input type="checkbox" id='deactivatesd' className='h-4 w-4' />
                        <label For="deactivatesd" className='ml-2'>Deactivatesd</label>
                    </div>
                    <div className="col-span-1 flex items-center">
                        <input type="checkbox" id='hideFromBooking' className='h-4 w-4' />
                        <label For="hideFromBooking" className='ml-2'>Hide from Booking</label>
                    </div>
                </div>

                <div className='flex items-center justify-start gap-4 mt-8 flex-col sm:flex-row'>
                    <button className='flex items-center justify-center border-[1px] w-full sm:w-[20%] border-blue-500 rounded-md font-bold text-blue-500 cursor-pointer p-2'>
                        Cancel
                    </button>
                    <button type='submit' className='flex items-center justify-center text-white w-full sm:w-[20%] bg-blue-500 rounded-md font-bold cursor-pointer p-2 mt-2 sm:mt-0'>
                        Add vehicle
                    </button>
                </div>


            </form>

        </>
    )
}
