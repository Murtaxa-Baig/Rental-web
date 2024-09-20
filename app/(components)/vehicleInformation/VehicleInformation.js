
'use client'
import React, { useState } from 'react';
import service from '@/public/images/service.svg';
import Image from 'next/image';
import AddNewCompany from '../modal/addNewCompany/AddNewCompany';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import Perameter from '../ui/perameter/Perameter';
import Excess from '../ui/excess/Excess';
import Tariffs from '../ui/tariffs/Tariffs';
import SeasonMatrix from '../ui/seasonMatrix/SeasonMatrix';
import Additional from '../ui/additional/Additional';
import Documents from '../ui/documents/Documents';
import astonMartin from '@/public/images/astonMartin.jpg'
import alfaRomeo from '@/public/images/alfaRomeo.jpg'
import acura from '@/public/images/acura.jpg'
import audi from '@/public/images/audi.png'
import bentley from '@/public/images/bentley.png'
import rivian from '@/public/images/rivian.png'
import bmw from '@/public/images/bmw.png'
import Bugatti from '@/public/images/Bugatti.jpg'
import buick from '@/public/images/buick.jpg'
import cadillac from '@/public/images/cadillac.png'
import chevrolet from '@/public/images/chevrolet.png'
import chrysler from '@/public/images/chrysler.png'
import citroen from '@/public/images/citroen.jpg'
import daihatsu from '@/public/images/daihatsu.png'
import honda from '@/public/images/honda.png'
import dodge from '@/public/images/dodge.png'
import ferrari from '@/public/images/ferrari.png'
import hyundai from '@/public/images/hyundai.png'
import jaguar from '@/public/images/jaguar.png'
import subaru from '@/public/images/subaru.png'
import jeep from '@/public/images/jeep.png'
import fiat from '@/public/images/images.jpeg'
import ford from '@/public/images/ford.jpg'
import genesis from '@/public/images/genesis.jpg'
import GMC from '@/public/images/GMC.jpg'
import isuzu from '@/public/images/isuzu.png'
import Infiniti from '@/public/images/Infiniti.jpg'
import Kia from '@/public/images/Kia.jpg'
import Koenigsegg from '@/public/images/Koenigsegg.jpg'
import lancia from '@/public/images/lancia.jpg'
import landRover from '@/public/images/landRover.jpg'
import lexus from '@/public/images/lexus.jpg'
import lamborghini from '@/public/images/lamborghini.png'
import maserati from '@/public/images/maserati.png'
import porsche from '@/public/images/porsche.png'
import toyota from '@/public/images/toyota.png'
import mazda from '@/public/images/mazda.png'
import tesla from '@/public/images/tesla.png'
import mitsubishi from '@/public/images/mitsubishi.png'
import nissan from '@/public/images/nissan.png'
import lincoln from '@/public/images/lincoln.jpg'
import mcLaren from '@/public/images/mcLaren.jpg'
import mercedesBenz from '@/public/images/mercedesBenz.jpg'
import mini from '@/public/images/mini.jpg'
import pagani from '@/public/images/pagani.jpg'
import peugeot from '@/public/images/peugeot.jpg'
import polestar from '@/public/images/polestar.jpg'
import ram from '@/public/images/ram.jpg'
import renault from '@/public/images/renault.jpg'
import rollsRoyce from '@/public/images/rollsRoyce.jpg'
import saab from '@/public/images/saab.jpg'
import seat from '@/public/images/seat.jpg'
import skoda from '@/public/images/skoda.jpg'
import smart from '@/public/images/smart.jpg'
import suzuki from '@/public/images/suzuki.jpg'
import volkswagen from '@/public/images/volkswagen.jpg'
import volvo from '@/public/images/volvo.jpg'


export default function VehicleInformation({ handleChange, formData }) {
    const [isShowModal, setIsShowModal] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    const [selectedBrand, setSelectedBrand] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const vehicleType = ['Car', 'Wagon', 'Moto', 'WaterToy', 'Boat']
    const brand = [
        { name: "Aston Martin", logo: astonMartin },
        { name: "Alfa Romeo", logo: alfaRomeo },
        { name: "Acura", logo: acura },
        { name: "Audi", logo: audi },
        { name: "Bentley", logo: bentley },
        { name: "BMW", logo: bmw },
        { name: "Bugatti", logo: Bugatti },
        { name: "Buick", logo: buick },
        { name: "Cadillac", logo: cadillac },
        { name: "Chevrolet", logo: chevrolet },
        { name: "Chrysler", logo: chrysler },
        { name: "Citroën", logo: citroen },
        { name: "Daihatsu", logo: daihatsu },
        { name: "Dodge", logo: dodge },
        { name: "Ferrari", logo: ferrari },
        { name: "Fiat", logo: fiat },
        { name: "Ford", logo: ford },
        { name: "Genesis", logo: genesis },
        { name: "GMC", logo: GMC },
        { name: "Honda", logo: honda },
        { name: "Hyundai", logo: hyundai },
        { name: "Infiniti", logo: Infiniti },
        { name: "Isuzu", logo: isuzu },
        { name: "Jaguar", logo: jaguar },
        { name: "jeep", logo: jeep },
        { name: "Kia", logo: Kia },
        { name: "Koenigsegg", logo: Koenigsegg },
        { name: "Lamborghini", logo: lamborghini },
        { name: "Lancia", logo: lancia },
        { name: "Land Rover", logo: landRover },
        { name: "Lexus", logo: lexus },
        { name: "Lincoln", logo: lincoln },
        { name: "Maserati", logo: maserati },
        { name: "Mazda", logo: mazda },
        { name: "McLaren", logo: mcLaren },
        { name: "Mercedes-Benz", logo: mercedesBenz },
        { name: "Mini", logo: mini },
        { name: "Mitsubishi", logo: mitsubishi },
        { name: "Nissan", logo: nissan },
        { name: "Pagani", logo: pagani },
        { name: "Peugeot", logo: peugeot },
        { name: "Polestar", logo: polestar },
        { name: "Porsche", logo: porsche },
        { name: "Ram", logo: ram },
        { name: "Renault", logo: renault },
        { name: "Rivian", logo: rivian },
        { name: "Rolls-Royce", logo: rollsRoyce },
        { name: "Saab", logo: saab },
        { name: "Seat", logo: seat },
        { name: "Skoda", logo: skoda },
        { name: "Smart", logo: smart },
        { name: "Subaru", logo: subaru },
        { name: "Suzuki", logo: suzuki },
        { name: "Tesla", logo: tesla },
        { name: "Toyota", logo: toyota },
        { name: "Volkswagen", logo: volkswagen },
        { name: "Volvo", logo: volvo },

    ]

    const model = ['2020', '2021', '2022', '2023']
    const selectCategories = ['Wagon/Estate', 'Passenger van', 'Sedan', 'Convertible', 'Sport', 'SUV/4{`×`}4', 'Crossover', 'Coupe']


    const accordionData = [
        {
            title: 'Perameter',
            content: <Perameter
                formData={formData}
                handleChange={handleChange}
            />
        },
        {
            title: 'Excess',
            content: <Excess
                formData={formData}
                handleChange={handleChange}
            />
        },
        {
            title: 'Tariffs',
            content: <Tariffs
                formData={formData}
                handleChange={handleChange}
            />
        },
        {
            title: 'Season matrix',
            content: <SeasonMatrix
                formData={formData}
                handleChange={handleChange}
            />
        },
        {
            title: 'Additional',
            content: <Additional
                formData={formData}
                handleChange={handleChange}
            />
        },
        {
            title: 'Documents',
            content: <Documents
                formData={formData}
                handleChange={handleChange}
            />
        },
    ];



    const handleBrandChange = (e) => {
        const selectedBrandName = e.target.value;
        const foundBrand = brand.find((b) => b.name === selectedBrandName);
        console.log("selected brand is ", foundBrand);

        setSelectedBrand(foundBrand);
        handleChange(e)
    };

    console.log("Data form", formData);

    return (
        <>
            <div className="flex flex-col md:flex-row items-center w-full">
                <div className='w-full md:w-[20%]'>
                    <div className="h-[125px] w-[125px] flex justify-center items-center mx-auto">
                        {selectedBrand ? (
                            <Image
                                src={selectedBrand.logo}
                                className='w-full h-full object-contain	'
                                alt={selectedBrand.name}
                            />
                        ) : (
                            <p className='text-center'>No brand selected</p>
                        )}
                    </div>
                </div>
                <div className="w-full md:w-[80%]">
                    <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="col-span-1 relative">
                            <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                Vehicle type
                            </label>
                            <select name="vehicle_type" value={formData.vehicle_type}
                                onChange={handleChange} id="" className='w-full p-2 text-gray-500 rounded-md border-2 border-gray-300 outline-none'>
                                {vehicleType.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-span-1 relative">
                            <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                Brand
                            </label>
                            <select
                                value={formData.brand}
                                onChange={handleBrandChange}  
                                name="brand" id="" className='w-full p-2 text-gray-500 rounded-md border-2 border-gray-300 outline-none'>
                                {brand.map((item, index) => (
                                    <option key={index} value={item.name}>{item.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-span-1 relative">
                            <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                Model
                            </label>
                            <select
                                value={formData.model}
                                onChange={handleChange}
                                name="model" id="" className='w-full p-2 text-gray-500 rounded-md border-2 border-gray-300 outline-none'>
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
                                name='year_of_issue'
                                type="text"
                                value={formData.year_of_issue}
                                onChange={handleChange}
                                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                            />
                        </div>
                        <div className="col-span-1 relative">
                            <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                Plate number
                            </label>

                            <input
                                name='plate_number'
                                value={formData.plate_number}
                                onChange={handleChange}
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
                                name='base_location'
                                value={formData.base_location}
                                onChange={handleChange}
                                type="text"
                                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="relative w-full md:w-[49%]">
                            <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                Link of offices
                            </label>
                            <input

                                // value={formData.}
                                // onChange={handleChange}
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
                        <div
                            aria-expanded={activeIndex === index}
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
                        </div>
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

            {/* <div className='flex items-center justify-start gap-4 mt-8 flex-col sm:flex-row'>
                    <button className='flex items-center justify-center border-[1px] w-full sm:w-[20%] border-blue-500 rounded-md font-bold text-blue-500 cursor-pointer p-2'>
                        Cancel
                    </button>
                    <button type='submit' className='flex items-center justify-center text-white w-full sm:w-[20%] bg-blue-500 rounded-md font-bold cursor-pointer p-2 mt-2 sm:mt-0'>
                        Add vehicle
                    </button>
                </div> */}

        </>
    )
}
