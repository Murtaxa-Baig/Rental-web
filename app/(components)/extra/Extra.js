'use client'
import React, { useState } from 'react'
import AddExtraModal from '../modal/addExtraModal/AddExtraModal'
import Image from 'next/image'
import remove from '@/public/images/remove.svg'
import pen from '@/public/images/pen.svg'
import airport from '@/public/images/airport.svg'
import bike from '@/public/images/bike.svg'
import child from '@/public/images/child.svg'
import connected from '@/public/images/connected.svg'
import sim from '@/public/images/sim.svg'
import mobile from '@/public/images/mobile.svg'
import extraDriver from '@/public/images/extraDriver.svg'
import helmet from '@/public/images/helmet.svg'
import babySeat from '@/public/images/babySeat.svg'
import wifi from '@/public/images/wifi.svg'
import navigator from '@/public/images/navigator.svg'
import carSky from '@/public/images/carSky.svg'
import mobileHandler from '@/public/images/mobileHandler.svg'
import towTrack from '@/public/images/towTrack.svg'
import travelConcierge from '@/public/images/travelConcierge.svg'



export default function Extra() {
    const [showModal, setShowModal] = useState(false)


    const extra = [
        {
            title: "Airport Shuttle",
            disc: "Convenient airport transfer: comfortable cars, precision, safety, high-quality service.",
            img: airport,
        },
        {
            title: "Bike Rack",
            disc: "Enhance your rental experience with a convenient bike rack option.",
            img: bike,
        },
        {
            title: "Child Booster",
            disc: "Ensure children's safety during car rental.",
            img: child,
        },
        {
            title: "Connected Riding",
            disc: "Stay connected and navigate effortlessly with our smartphone mount.",
            img: connected,
        },
        {
            title: "Data Roam",
            disc: "Stay connected with our pre-loaded Data SIM Card.",
            img: sim,
        },
        {
            title: "Enhanced Communication",
            disc: "Stay connected safely with our interphone system for clear communication while riding.",
            img: mobile,
        },
        {
            title: "Extra Driver",
            disc: "Include an additional driver in the rental for shared driving convenience.",
            img: extraDriver,
        },
        {
            title: "Head Protection",
            disc: "Ensure your safety by using modern and reliable automotive helmets during rental.",
            img: helmet,
        },
        {
            title: "Infant Comfort",
            disc: "Ensure your little one's safety and comfort with our baby seat rental",
            img: babySeat,
        },
        {
            title: "Mobile Wi-Fi Hotspot",
            disc: "Use a stable Wi-Fi connection during your rental car for a more comfortable trip.",
            img: wifi,
        },
        {
            title: "Navigation",
            disc: "Navigation service for convenience and safety during your rental car journeys.",
            img: navigator,
        },
        {
            title: "Ski Rack",
            disc: "Convenient ski and snowboard transportation with a car-compatible rack system.",
            img: carSky,
        },
        {
            title: "Storage Solutions",
            disc: "Expand your storage capacity and organize your belongings with our luggage boxes.",
            img: mobileHandler,
        },
        {
            title: "Tow Truck Assistance",
            disc: "Emergency roadside assistance and evacuation of your vehicle in any situation.",
            img: towTrack,
        },
        {
            title: "Travel Concierge Assistance",
            disc: "Enjoy personalized travel assistance and recommendations.",
            img: travelConcierge,
        },
    ]



    return (
        <>
            <div className='flex items-center justify-between'>
                <p className='text-gray-700 font-bold text-xl'>Extra</p>
                <button
                    onClick={() => setShowModal(true)}
                    className='py-1 px-3 bg-blue-500 text-white rounded-sm'>Add extra +</button>
            </div>
            {
                showModal && <AddExtraModal
                    setShowModal={setShowModal}
                />
            }

            <div className='px-4'>
                {
                    extra.map((items,index) => {
                        return (
                            <>

                                <div key={index} className='w-full flex flex-col md:flex-row items-center justify-between my-4'>
                                    <div className='w-full md:w-[45%] flex items-center mb-4 md:mb-0'>
                                        <div className='w-[50px] h-[50px] rounded-full flex justify-center items-center'>
                                            <Image src={items.img} alt='' />
                                        </div>
                                        <div className='ml-3'>
                                            <p className='text-sm font-bold text-gray-600'>{items.title}</p>
                                            <p className='text-[10px] text-gray-400 '>{items.disc}</p>
                                        </div>
                                    </div>
                                    <div className='w-full md:w-[20%] flex justify-between items-center mb-4 md:mb-0'>
                                        <div>
                                            <p className='font-bold text-gray-600'>0 €</p>
                                            <p className='text-[10px] text-gray-400 '>Price</p>
                                        </div>
                                        <div>
                                            <p className='font-bold text-gray-600'>Per Day</p>
                                            <p className='text-[10px] text-gray-400 '>Type</p>
                                        </div>
                                        <div>
                                            <p className='font-bold text-gray-600'>0</p>
                                            <p className='text-[10px] text-gray-400 '>Cars</p>
                                        </div>
                                    </div>
                                    <div className='w-full md:w-[30%] flex justify-between items-center'>
                                        <button className='py-2 px-6 flex justify-center items-center border-[1px] border-blue-400 text-blue-500 font-bold rounded-md'>
                                            Vehicle
                                        </button>
                                        <div className='flex items-center'>
                                            <button className='w-[40px] h-[40px] mx-1 rounded-full bg-red-200 flex justify-center items-center'>
                                                <Image src={remove} alt='' />
                                            </button>
                                            <button className='w-[40px] h-[40px] mx-1 rounded-full bg-blue-200 flex justify-center items-center'>
                                                <Image src={pen} alt='' />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <hr className='text-gray-400' />
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
