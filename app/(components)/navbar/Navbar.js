'use client'
import Image from 'next/image';
import React, { useState } from "react";
import profile from '@/public/images/profile.jpg';
import Link from 'next/link';

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <nav className="bg-blue-800 p-4">
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
                    <div className="md:hidden flex flex-col space-y-2 mt-2">
                        <button className="text-white">All reservations</button>
                        <button className="text-white">New reservations</button>
                        <button className="text-white">Add customer</button>
                        <button className="text-white">Add vehicle</button>
                    </div>
                )}
            </nav>
        </>
    );
}
