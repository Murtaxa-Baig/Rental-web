'use client'
import Image from 'next/image';
import React, { useState } from "react";
import profile from '@/public/images/profile.jpg';
import Link from 'next/link';
import dashboard from '@/public/images/dashboard.svg';
import calender from '@/public/images/calender.svg';
import cash from '@/public/images/cash.svg';
import add from '@/public/images/add.svg';
import allReservation from '@/public/images/allReservation.svg';
import user from '@/public/images/user.svg';
import car from '@/public/images/car.svg';
import mail from '@/public/images/mail.svg';
import file from '@/public/images/file.svg';
import setting from '@/public/images/setting.svg';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';



export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <nav className="bg-blue-600 p-4">
                <div className="container mx-auto flex items-center justify-between">
                    {/* Left Side: Company Icon and Buttons */}
                    <div className="flex items-center space-x-4">
                        <div className="text-white font-bold text-lg">
                            <Link href='/'>
                                Rental Web
                            </Link>
                        </div>
                        <div className="hidden md:flex space-x-4">
                            <button className="text-white rounded-sm px-2 font-medium">
                                <Link href='/reservations' >All reservations</Link>
                            </button>
                            <button className="text-white font-medium">
                                <Link href='/add-reservation' >New reservations</Link>
                            </button>
                            <button className="text-white font-medium">
                                <Link href='/add-customer' >Add customer</Link>
                            </button>
                            <button className="text-white font-medium">
                                <Link href='/add-vehicle'>Add vehicle</Link>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Toggle Icon */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-white"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Right Side: Profile Section with Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center space-x-2 text-white"
                        >
                            <Image
                                src={profile}
                                width={35}
                                height={35}
                                className="rounded-full"
                                alt="Profile Picture"
                            />
                            <span>Profile</span>
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        {isOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                >
                                    Billing
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                >
                                    Logout
                                </a>
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile View: Dropdown Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden flex flex-col space-y-2 mt-2 bg-white">
                        <div className='max-h-[100vh] overflow-y-auto'>
                            <div className='w-full h-[70vh]'>
                                <hr className='text-gray-500' />
                                <Link onClick={() => setIsMobileMenuOpen(false)} href="/" className='w-full flex items-center h-14 px-4 font-bold text-gray-500'>
                                    <Image src={dashboard} width={20} height={20} className='mr-4' alt="Filter Icon" />
                                    Dashboard
                                </Link>
                                <hr className='text-gray-500' />
                                <Link href="/calender">
                                    <div onClick={() => setIsMobileMenuOpen(false)} className='w-full flex items-center h-14 px-4 font-bold text-gray-500'>
                                        <Image src={calender} width={20} height={20} className='mr-4' alt="Filter Icon" />
                                        Calender
                                    </div>
                                </Link>
                                <hr className='text-gray-500' />
                                <Link href="/offer-generator">
                                    <div onClick={() => setIsMobileMenuOpen(false)} className='w-full flex items-center h-14 px-4 font-bold text-gray-500'>
                                        <Image src={cash} width={20} height={20} className='mr-4' alt="Filter Icon" />
                                        Offers generator
                                    </div>
                                </Link>
                                <hr className='text-gray-500' />
                                <Accordion allowZeroExpanded>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className="flex items-center">
                                                <Link href=""
                                                    className='w-full flex items-center h-14 px-4 font-bold text-gray-500'>
                                                    <Image src={cash} width={20} height={20} className='mr-4' alt="Filter Icon" />
                                                    Reservations
                                                </Link>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <Link
                                                href='/add-reservation'>
                                                <div onClick={() => setIsMobileMenuOpen(false)} className='w-full flex items-center h-14 px-4 font-bold text-gray-500'>
                                                    <Image src={add} width={20} height={20} className='mr-2 ' alt="Filter Icon" />
                                                    New reservation
                                                </div>
                                            </Link>
                                        </AccordionItemPanel>
                                        <AccordionItemPanel>
                                            <Link href="/reservations">
                                                <div onClick={() => setIsMobileMenuOpen(false)} className='w-full flex items-center h-14 px-4 font-bold text-gray-500'>
                                                    <Image src={allReservation} width={20} height={20} className='mr-2 ' alt="Filter Icon" />
                                                    Reservation List
                                                </div>
                                            </Link>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
                                <Accordion allowZeroExpanded>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className="flex items-center">
                                                <Link href=""
                                                    className='w-full flex items-center h-14 px-4 font-bold text-gray-500'>
                                                    <Image src={user} width={20} height={20} className='mr-4' alt="Filter Icon" />
                                                    Customer
                                                </Link>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <Link href='/add-client'>
                                                <div onClick={() => setIsMobileMenuOpen(false)} className='w-full flex items-center h-14 px-4 font-bold text-gray-500'>
                                                    <Image src={add} width={20} height={20} className='mr-2 ' alt="Filter Icon" />
                                                    New Client
                                                </div>
                                            </Link>
                                        </AccordionItemPanel>
                                        <AccordionItemPanel>
                                            <Link href="/add-agency">
                                                <div onClick={() => setIsMobileMenuOpen(false)} className='w-full flex items-center h-14 px-4 font-bold text-gray-500'>
                                                    <Image src={add} width={20} height={20} className='mr-2 ' alt="Filter Icon" />
                                                    New Customer
                                                </div>
                                            </Link>
                                        </AccordionItemPanel>
                                        <AccordionItemPanel>
                                            <Link href="/all-customer">
                                                <div onClick={() => setIsMobileMenuOpen(false)} className='w-full flex items-center h-14 px-4 font-bold text-gray-500'>
                                                    <Image src={allReservation} width={20} height={20} className='mr-2 ' alt="Filter Icon" />
                                                    Customers
                                                </div>
                                            </Link>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
                                <Accordion allowZeroExpanded>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className="flex items-center">
                                                <button
                                                    className='w-full flex items-center h-14 px-4 font-bold text-gray-500'>
                                                    <Image src={car} width={20} height={20} className='mr-4' alt="Filter Icon" />
                                                    Vehicle
                                                </button>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <Link href='/add-vehicle'>
                                                <div onClick={() => setIsMobileMenuOpen(false)} className='w-full flex items-center h-14 px-4 font-bold text-gray-500'>
                                                    <Image src={add} width={20} height={20} className='mr-2 ' alt="Filter Icon" />
                                                    Add vehicle
                                                </div>
                                            </Link>
                                        </AccordionItemPanel>
                                        <AccordionItemPanel>
                                            <Link href="/vehicles">
                                                <div onClick={() => setIsMobileMenuOpen(false)} className='w-full flex items-center h-14 px-4 font-bold text-gray-500'>
                                                    <Image src={allReservation} width={20} height={20} className='mr-2 ' alt="Filter Icon" />
                                                    Vehicle list
                                                </div>
                                            </Link>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
                                <hr className='text-gray-500' />
                                <Link href="/users">
                                    <div onClick={() => setIsMobileMenuOpen(false)} className='w-full flex items-center h-14 px-4 font-bold text-gray-500'>
                                        <Image src={user} width={20} height={20} className='mr-4' alt="Filter Icon" />
                                        Users
                                    </div>
                                </Link>
                                <hr className='text-gray-500' />
                                <Link href="/invoices">
                                    <div onClick={() => setIsMobileMenuOpen(false)} className='w-full flex items-center h-14 px-4 font-bold text-gray-500'>
                                        <Image src={file} width={20} height={20} className='mr-4' alt="Filter Icon" />
                                        Invoices
                                    </div>
                                </Link>

                                <hr className='text-gray-500' />
                                <Link href="/settings">
                                    <div onClick={() => setIsMobileMenuOpen(false)} className='w-full flex items-center h-14 px-4 font-bold text-gray-500'>
                                        <Image src={setting} width={20} height={20} className='mr-4' alt="Filter Icon" />
                                        Setting
                                    </div>
                                </Link>
                                <hr className='text-gray-500'  />
                                <div className='w-full h-[20vh] text-center mt-3'>
                                    <Image src={profile} width={100} height={100} className="rounded-full mx-auto" alt="Profile Picture" />
                                    <p className='font-bold text-center mt-4'>Company Name</p>
                                    <p className='text-center'>Murtaxa Baig</p>
                                </div>
                                <Link href=""
                                    className='w-full flex items-center justify-center h-14 px-4 font-bold text-blue-500 text-[14px]'>
                                    <Image src={mail} width={20} height={20} className='mr-2' alt="Filter Icon" />
                                    Send feedback
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}
