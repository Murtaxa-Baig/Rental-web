'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'
import filt from "@/public/images/filter.svg"
import add from "@/public/images/add.svg"
import Image from 'next/image'
import Switch from 'react-switch';
import { useState } from 'react'
import more from "@/public/images/more.svg"
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




export default function Page() {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL
    const [checked, setChecked] = useState(false);
    const [reservations, setReservations] = useState([])
    const [vehicles, setVehicles] = useState([])
    const [moreMenu, setMoreMenu] = useState(null)
    const [searchQuery, setSearchQuery] = useState("");
    const brands = [
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


    const fetchReservations = async () => {
        const response = await fetch(`${backendUrl}owner/reservations/`);
        const result = await response.json();
        setReservations(result);
    };
    const fetchVehicle = async () => {
        const response = await fetch(`${backendUrl}owner/vehicles/`);
        const result = await response.json();
        setVehicles(result);
    };

    useEffect(() => {
        fetchReservations();
        fetchVehicle()
    }, []);

    console.log("reservations are here", reservations);
    console.log("vehicle are here", vehicles);


    const filteredReservations = reservations.filter((reservation) => {
        const vehicle = vehicles.find(v => v.id === reservation.vehicle);
        const brand = brands.find(b => b.name === vehicle?.brand);
        if (brand) {
            return brand.name.toLowerCase().includes(searchQuery.toLowerCase());
        }
        return false;
    });


    const handleChange = (nextChecked) => {
        setChecked(nextChecked);
    };

    const toggleMoreMenu = (reservationId) => {
        setMoreMenu(moreMenu === reservationId ? null : reservationId);
    };

    return (
        <>
            <div className='mt-10 mb-3'>
                <h1 className='font-bold text-3xl text-gray-500'>Reservations</h1>
                <p className='text-gray-500'>
                    <Link href="/" className='text-blue-700'>Home</Link> / Reservations
                </p>
            </div>
            <div className='p-4 bg-white w-full rounded-md mb-10'>
                <div class="flex items-center justify-between  shadow-lg p-3">
                    <div class="container bg-white rounded-lg">
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
                            <button className='w-full border-[1px] border-slate-500 rounded-sm	 py-2 px-4 font-bold text-gray-500'>Yesterday</button>
                            <button className='w-full border-[1px] border-slate-500 rounded-sm	 py-2 px-4 font-bold text-gray-500'>Today</button>
                            <button className='w-full border-[1px] border-slate-500 rounded-sm	 py-2 px-4 font-bold text-gray-500'>Tomorrow</button>
                            <button className='w-full border-[1px] border-slate-500 rounded-sm	 py-2 px-4 font-bold text-gray-500'>After Tomorrow</button>
                            <button className='w-full border-[1px] border-slate-500 rounded-sm	 py-2 px-4 font-bold text-gray-500'>Week</button>
                            <button className='w-full border-[1px] border-slate-500 rounded-sm py-2 px-4 font-bold text-blue-500 bg-blue-100'>All</button>
                        </div>
                    </div>
                </div>
                <div className='p-8 flex flex-col md:flex-row items-center md:justify-between'>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder='Search Reservation'
                        className='w-full md:w-[72%] p-3 border-[1px] border-black outline-none rounded-md h-14 mb-4 md:mb-0'
                    />
                    <div className='flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto'>
                        <button className='border-[1px] h-14 px-3 rounded-md shadow-lg w-full md:w-auto flex justify-center items-center hover:bg-gray-200'>
                            <Image
                                src={filt}
                                width={35}
                                height={35}
                                className="rounded-full"
                                alt="Filter Icon"
                            />
                        </button>
                        <Link href='/add-reservation'
                            className='border-[1px] h-14 px-3 rounded-md shadow-lg text-blue-600 font-bold flex items-center justify-center hover:bg-blue-100 w-full md:w-auto'>
                            <Image
                                src={add}
                                width={18}
                                height={18}
                                className="rounded-full mr-2"
                                alt="Add Icon"
                            />
                            New Reservation
                        </Link>
                    </div>
                </div>

                <div className='md:flex items-center justify-between sm:block'>
                    <hr className='w-[38%] text-gray-500' />
                    <div className='w-[22%] flex items-center justify-between'>
                        <p className='text-[12px] text-gray-500'>{reservations.length} orders of {reservations.length}</p>
                        <p className='text-[12px] text-red-500'>canceled 0</p>
                        <Switch
                            onChange={handleChange}
                            checked={checked}
                            offColor="#888"
                            onColor="#3464eb"
                            height={20}
                            width={40}
                            uncheckedIcon={false}
                            checkedIcon={false}
                        />
                        <p className='text-[14px]'>
                            {checked ? 'Hide' : 'Show'}
                        </p>
                    </div>
                    <hr className='w-[38%] text-gray-500' />
                </div>



                <div className="overflow-x-auto mt-5 hidden sm:block">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr className="w-full  text-gray-400 uppercase text-sm leading-normal">
                                <th className="w-[5%] py-3 px-4 text-left">id</th>
                                <th className="w-[15%] py-3 px-4 text-left">Vehicle</th>
                                <th className="w-[15%] py-3 px-4 text-left">Customer & Info</th>
                                <th className="w-[15%] py-3 px-4 text-left">Locations</th>
                                <th className="w-[15%] py-3 px-4 text-left">Period</th>
                                <th className="w-[15%] py-3 px-4 text-left">Payment</th>
                                <th className="w-[5%] py-3 px-4 text-left"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredReservations.map((item, index) => {
                                    const vehicle = vehicles.find(v => v.id === item.vehicle);
                                    const brand = brands.find(b => b.name === vehicle?.brand);

                                    return (
                                        <tr key={index} className="w-full  text-gray-400 uppercase text-sm leading-normal">
                                            <td className="w-[5%] py-3 px-4 text-left">{item.id}</td>
                                            <td className="w-[15%] py-3 px-4 text-left">
                                                <div className="flex items-center">
                                                    {brand ? (
                                                        <Image src={brand.logo} width={30} height={30} alt={brand.name} className="mr-2" />
                                                    ) : null}
                                                    {vehicle ? vehicle.brand : null}
                                                </div>
                                            </td>
                                            <td className="w-[15%] py-3 px-4 text-left">Customer & Info</td>
                                            <td className="w-[15%] py-3 px-4 text-left">
                                                <p className='text-[10px] underline'>{item.pickup_location}</p>
                                                <p className='text-[10px] underline'>{item.return_location}</p>
                                            </td>
                                            <td className="w-[15%] py-3 px-4 text-left">
                                                <p className='text-[10px]'>{`${item.start_date} | ${item.start_time}`}</p>
                                                <p className='text-[10px]'>{`${item.end_date} | ${item.end_time}`}</p>
                                            </td>
                                            <td className="w-[15%] py-3 px-4 text-left">
                                                <p className='text-[10px]'>€ {item.total_price}</p>
                                            </td>
                                            <td className="py-3 px-4 text-left flex justify-center">
                                                <Image
                                                    onClick={() => toggleMoreMenu(item.id)}
                                                    className='bg-transparent' src={more} height={20} width={20} alt="More Icon" />
                                            </td>
                                            {
                                                moreMenu === item.id && (
                                                    <div className='absolute right-8 bg-white border rounded-md'>
                                                        <p className='hover:bg-gray-300 p-2'>View or Edit</p>
                                                        <p onClick={() => setMoreMenu(null)} className='hover:bg-gray-300 p-2'>Cancel</p>
                                                        <p className='hover:bg-gray-300 p-2'>Create invoice</p>
                                                    </div>
                                                )
                                            }
                                        </tr>
                                    )
                                })
                            }
                        </tbody>

                    </table>
                </div>



            </div>
        </>
    )
}
