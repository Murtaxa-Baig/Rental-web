import React from 'react'
import { useState } from 'react';
import filt from '@/public/images/filter.svg'
import abarth from '@/public/images/abarth.jpg'
import ford from '@/public/images/fordCard.jpg'
import mercedes from '@/public/images/mercedes-benz.jpg'
import renault from '@/public/images/renault.jpg'
import Image from 'next/image';
import Autocomplete from "react-google-autocomplete";

export default function Vehicles({ startDate, endDate }) {
    const [selectedButton, setSelectedButton] = useState('Own fleet');
    const [showDelivery, setShowDelivery] = useState(false)
    const [text, setText] = useState(null); // Text to be copied
    const [copied, setCopied] = useState(false);
    const [startLocation, setStartLocation] = useState('');
    const [endLocation, setEndLocation] = useState('');
    const [selectedPlace, setSelectedPlace] = useState({
        address: '',
        lat: '',
        lng: ''
    });

    const StartLocationSelected = (place) => {
        const { geometry, formatted_address } = place;
        if (geometry) {
            const { lat, lng } = geometry.startLocation;

            setSelectedPlace({
                address: formatted_address,
                lat: lat(),
                lng: lng(),
            });

            setStartLocation(formatted_address);
        }
    };


    const EndLocationSelected = (place) => {
        const { geometry, formatted_address } = place;
        if (geometry) {
            const { lat, lng } = geometry.endLocation;

            setSelectedPlace({
                address: formatted_address,
                lat: lat(),
                lng: lng(),
            });

            setEndLocation(formatted_address);
        }
    };



    // Function to handle button click
    const handleButtonClick = (button) => {
        setSelectedButton(button);
    };


    const copyToClipboard = () => {
        setText(`From ${startDate} to ${endDate} we have available :`)
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };




    const brand = [
        "", "Aston Martin", "Alfa Romeo", "Acura", "Audi", "Bentley",
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

    const color = ['White', 'Black', 'Gray', 'Red', 'Green', 'Blue', 'Dark Red', 'Dark Green', 'Dark Blue', 'Dark Gray', 'Yellow', 'Orange', 'Pink', 'Purple']

    const cards = [
        {
            logo: abarth,
            carName: 'Abarth 500',
            disc: '2024 Sedan/Limousine',
            city: 'Cassano Magnago'

        },
        {
            logo: ford,
            carName: 'Ford Focus',
            disc: '2024 Sedan/Limousine',
            city: 'Cassano Magnago'

        },
        {
            logo: mercedes,
            carName: 'Mercedes Benz Classe E',
            disc: '2024 Sedan/Limousine',
            city: 'Cassano Magnago'

        },

        {
            logo: renault,
            carName: 'Renault Clio',
            disc: '2024 Sedan/Limousine',
            city: 'Cassano Magnago'

        },
    ]

    const array = ['English', 'Russian', 'Italian', 'German', 'French', 'Portuguese', 'Spanish', 'Polish', 'Chinese', 'Dutch', 'Czech']


    return (
        <>
            <p className='text-gray-500 font-bold my-5 text-xl'>SELECT CARS</p>
            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between my-2">
                <div className="flex justify-between items-center w-full md:w-[49%] mb-4 md:mb-0">
                    <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between">
                        {/* Button 1 */}
                        <label className="flex items-center space-x-2 h-14 cursor-pointer border-[1px] border-gray-400 rounded-md p-2 px-4 my-2 md:my-0 md:flex-grow">
                            <input
                                type="radio"
                                name="radioButton"
                                checked={selectedButton === 'Own fleet'}
                                onChange={() => handleButtonClick('Own fleet')}
                                className="form-radio"
                            />
                            <span>Own fleet</span>
                        </label>

                        {/* Button 2 */}
                        <label className="flex items-center space-x-2 mx-4 h-14 cursor-pointer border-[1px] border-gray-400 rounded-md p-2 px-4 my-2 md:my-0 md:flex-grow">
                            <input
                                type="radio"
                                name="radioButton"
                                checked={selectedButton === 'Partner fleet'}
                                onChange={() => handleButtonClick('Partner fleet')}
                                className="form-radio"
                            />
                            <span>Partner fleet</span>
                        </label>

                        {/* Button 3 */}
                        <label className="flex items-center space-x-2 h-14 cursor-pointer border-[1px] border-gray-400 rounded-md p-2 px-4 my-2 md:my-0 md:flex-grow">
                            <input
                                type="radio"
                                name="radioButton"
                                checked={selectedButton === 'Select all'}
                                onChange={() => handleButtonClick('Select all')}
                                className="form-radio"
                            />
                            <span>Select all</span>
                        </label>
                    </div>
                </div>
                <div className="flex justify-between items-center w-full md:w-[49%]">
                    <input
                        type="text"
                        placeholder='Vehicle search'
                        className='w-full md:w-[80%] p-3 border-[1px] border-black outline-none rounded-md h-14 mb-4 md:mb-0'
                    />
                    <button className='border-[1px] h-14 px-3 rounded-md shadow-lg w-full md:w-auto flex justify-center items-center hover:bg-gray-200'>
                        <Image
                            src={filt}
                            width={35}
                            height={35}
                            className="rounded-full"
                            alt="Filter Icon"
                        />
                    </button>
                </div>
            </div>






            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between my-4">
                <div className="flex justify-between items-center w-full md:w-[49%] mb-4 md:mb-0">
                    <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                        <div className="flex-1 relative my-2 md:my-0">
                            <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                Select brand
                            </label>
                            <select name="" id="" className='w-full  h-14 p-2 text-gray-500 rounded-md border-2 border-gray-300 outline-none'>
                                {brand.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex-1 relative my-2 md:my-0">
                            <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                Select partner
                            </label>
                            <select name="" id="" className='w-full p-2 h-14 text-gray-500 rounded-md border-2 border-gray-300 outline-none'>
                                <option value=''></option>
                                <option value=''>abc</option>
                            </select>
                        </div>
                        <div className="flex-1 relative my-2 md:my-0">
                            <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                Select color
                            </label>
                            <select name="" id="" className='w-full p-2 h-14 text-gray-500 rounded-md border-2 border-gray-300 outline-none'>
                                {color.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                </div>
                <div className="flex justify-between items-center w-full md:w-[49%] gap-2">
                    <div className="flex-1 relative my-2 md:my-0">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Type
                        </label>
                        <select name="" id="" className='w-full p-2 h-14 text-gray-500 rounded-md border-2 border-gray-300 outline-none'>
                            {['Car', 'Wagon/Estate', 'Moto', 'Watertoy', 'Boat'].map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex-1 relative my-2 md:my-0">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Select categories
                        </label>
                        <select name="" id="" className='w-full p-2 h-14 text-gray-500 rounded-md border-2 border-gray-300 outline-none'>
                            {['Wagon/Estate', 'Passenger van', 'Sedan/Limousine', 'Convertible', 'Sport', 'SUV/ 4x4', 'Crossover', 'Coupe', 'Limousine'].map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center w-full md:w-[40%] my-4">
                <div className="flex-1 relative my-2 md:my-0">
                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                        Select city
                    </label>
                    <select name="" id="" className='w-full p-2 h-14 text-gray-500 rounded-md border-2 border-gray-300 outline-none'>
                        {[''].map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))}
                    </select>
                </div>
            </div>
            <hr className='text-gray-500' />


            <div className='w-[40%] my-3 flex items-center gap-2'>
                <button className='text-blue-500 border-[1px] w-full font-bold border-blue-400 rounded-md p-2'>
                    Select availabe
                </button>
                <button className='text-blue-500 border-[1px] w-full font-bold border-blue-400 rounded-md p-2'>
                    Reset selected
                </button>
            </div>




            <div className="p-4">
                {selectedButton === 'Own fleet' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {cards.map((card, index) => (
                            <div key={index} className="bg-white p-4 shadow-lg rounded-lg flex items-center justify-between gap-2">
                                <input type="checkbox" name="" className='w-4 h-4' id="" />
                                <Image
                                    src={card.logo}
                                    height={25}
                                    width={25}
                                    alt=''
                                />
                                <div>
                                    <p className='text-gray-600 font-bold'>{card.carName}</p>
                                    <p className='text-gray-400 text-[10px] my-1'>{card.disc}</p>
                                    <p className='text-gray-600 text-[10px] my-1'>{card.city}</p>
                                </div>
                                <button className='p-1 text-green-500 border-[1px] border-green-400 rounded-sm'>
                                    Availabe
                                </button>

                            </div>
                        ))}
                    </div>
                )}
                {selectedButton === 'Partner fleet' && (
                    <>
                    </>
                )}
                {selectedButton === 'Select all' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {cards.map((card, index) => (
                            <div key={index} className="bg-white p-4 shadow-lg rounded-lg flex items-center justify-between gap-2">
                                <input type="checkbox" name="" className='w-4 h-4' id="" />
                                <Image
                                    src={card.logo}
                                    height={25}
                                    width={25}
                                    alt=''
                                />
                                <div>
                                    <p className='text-gray-600 font-bold'>{card.carName}</p>
                                    <p className='text-gray-400 text-[10px] my-1'>{card.disc}</p>
                                    <p className='text-gray-600 text-[10px] my-1'>{card.city}</p>
                                </div>
                                <button className='p-1 text-green-500 border-[1px] border-green-400 rounded-sm'>
                                    Availabe
                                </button>

                            </div>
                        ))}
                    </div>
                )}
            </div>





            <hr className='text-gray-500 my-4' />



            <div className='flex items-center justify-between px-4'>
                <p className='text-gray-400 font-bold'>Delivery</p>
                <button onClick={() => setShowDelivery(true)} className='text-blue-500 border-[1px] font-bold border-blue-400 rounded-md p-2'>
                    Add delivery
                </button>
            </div>

            {
                showDelivery && (
                    <>
                        <div className='flex items-center justify-between p-3 shadow-lg rounded-lg'>
                            <div className='w-[40%]'>
                                <div className="w-full relative">
                                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                        Start address
                                    </label>
                                    {/* <input
                                        type="text"
                                        className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                                    /> */}
                                    <Autocomplete
                                        apiKey="AIzaSyBBGxKE3abRfU_ZsgC6JmiIIUpO5QmaTjI"
                                        onPlaceSelected={StartLocationSelected}
                                        value={startLocation}
                                        onChange={(e) => setStartLocation(e.target.value)}
                                        className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                                    />
                                </div>
                                <br />
                                <div className='flex justify-between items-center gap-2'>
                                    <div className="w-full relative">
                                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                            Cost
                                        </label>
                                        <input
                                            type="text"
                                            className=" border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                                        />
                                    </div>
                                    <button className='p-2  border-2 border-gray-300 rounded-lg text-gray-500 px-4'>
                                        x2
                                    </button>
                                    <button className='p-2  border-2 border-gray-300 rounded-lg text-gray-500 px-4'>
                                        x1.5
                                    </button>
                                </div>
                            </div>
                            <div className='w-[20%] flex justify-between items-center text-center'>
                                <hr className='text-gray-500' />
                                <div className='mx-1'>
                                    <p>0km</p>
                                    <button className='font-bold text-blue-500'>refetch</button>
                                </div>
                                <hr className='text-gray-500' />
                            </div>
                            <div className='w-[40%]'>
                                <div className="w-full relative">
                                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                        End address
                                    </label>
                                    <Autocomplete
                                        apiKey="AIzaSyBBGxKE3abRfU_ZsgC6JmiIIUpO5QmaTjI"
                                        onPlaceSelected={EndLocationSelected}
                                        value={endLocation}
                                        onChange={(e) => setEndLocation(e.target.value)}
                                        className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                                    />
                                </div>
                                <br />

                                <div className='flex justify-end'>
                                    <button onClick={() => setShowDelivery(false)} className='text-gray-500 p-2 h-[50px] w-[50px] hover:bg-gray-300 rounded-full text-[30px]'>X</button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }


            <p className='text-gray-400 font-bold mx-4 my-2'>Delivery cost result: 0</p>

            <hr className='text-gray-400 my-3' />


            <div className='flex flex-col md:flex-row items-center gap-3 w-full'>
                {/* Button */}
                <button className='bg-blue-500 text-white h-16 rounded-md font-bold w-full md:w-[40%]'>
                    Calculate
                </button>

                {/* Language Selector and Copy Button */}
                <div className='flex flex-col md:flex-row items-center w-full md:w-[60%] gap-2'>
                    {/* Select Language */}
                    <div className="relative w-full md:w-[49%]">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Language
                        </label>
                        <select className='w-full p-2 text-gray-500 rounded-md border-[1px] h-16 border-gray-400 outline-none'>
                            {
                                array.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))
                            }
                        </select>
                    </div>

                    {/* Copy Button */}
                    <div className="w-full md:w-[50%]">
                        <button onClick={copyToClipboard} className='text-blue-500 w-full h-16 border-[1px] font-bold border-blue-400 rounded-md p-2'>
                            {/* Copy Selected */}
                            {copied ? 'Text copied to clipboard!' : 'Copy Selected'}
                        </button>
                    </div>
                </div>
            </div>



        </>
    )
}
