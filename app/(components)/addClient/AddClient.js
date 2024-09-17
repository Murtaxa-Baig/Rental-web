'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import camera from '@/public/images/camera.svg'
import user from '@/public/images/user.svg'
import call from '@/public/images/call.svg'
import mail from '@/public/images/mail.svg'
import service from '@/public/images/service.svg'
import upload from '@/public/images/upload.svg'
import sad from '@/public/images/sad.svg'
import AddNewCompany from '../modal/addNewCompany/AddNewCompany'

export default function AddClient() {
    const backendUrl= process.env.NEXT_PUBLIC_BACKEND_URL
    const [isShowModal, setIsShowModal] = useState(false);
    const [formData, setFormData] = useState({
        client_name: "",
        client_surname: "",
        birth_date: "",
        birth_place: "",
        language: "EN",
        phone_number: "",
        email: "",
        address: "",
        is_own_client: false,
        is_vip_client: false,
        is_blacklisted: false,
        driver_license_serial: "",
        driver_license_category: "",
        driver_license_valid_until: "",
        passport_serial: "",
        passport_valid_until: "",
        image: null,  // Added image field
    });

    const array = ['English', 'Russian', 'Italian', 'German', 'French', 'Portuguese', 'Spanish', 'Polish', 'Chinese', 'Dutch', 'Czech'];

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : (type === 'file' ? files[0] : value),
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("FORM DATA S HERE", formData);

        const backendUrl = process.env.BACKEND_URL;

        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }
        const bacendUrl = process.env.BACKEND_URL

        try {
            const response = await fetch(`${backendUrl}owner/create-client/`, {
                method: 'POST',
                body: formDataToSend,
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Client created successfully:', result);
                setFormData({
                    client_name: "",
                    client_surname: "",
                    birth_date: "",
                    birth_place: "",
                    language: "EN",
                    phone_number: "",
                    email: "",
                    address: "",
                    is_own_client: false,
                    is_vip_client: false,
                    is_blacklisted: false,
                    driver_license_serial: "",
                    driver_license_category: "",
                    driver_license_valid_until: "",
                    passport_serial: "",
                    passport_valid_until: "",
                    image: null,  
                });
                
            } else {
                console.error('Failed to create client:', response.statusText);

            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                {/* <label htmlFor="image" className='w-full cursor-pointer bg-gray-200 flex justify-center items-center p-2'>
                    <input id='image' name='image' type="file" accept="image/*" className='hidden' onChange={handleChange} />
                    <Image src={camera} width={25} height={25} alt="camera Picture" />
                    <p className='font-bold text-[14px] text-gray-500 mx-2'>Use auto filling</p>
                    <p className='text-[10px] text-gray-500 mx-1'>Just upload scan or photo of the passport</p>
                </label> */}
                <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className='border-2 p-2 flex items-center rounded-md'>
                        <input
                            name="client_name"
                            onChange={handleChange}
                            value={formData.client_name}
                            type="text"
                            placeholder='Client Name'
                            className='outline-none w-[90%]'
                        />
                        <Image src={user} width={16} height={16} />
                    </div>
                    <div className='border-2 p-2 flex items-center rounded-md'>
                        <input
                            name="client_surname"
                            type="text"
                            value={formData.client_surname}
                            onChange={handleChange}
                            placeholder='Client Surname'
                            className='outline-none w-[90%]'
                        />
                        <Image src={user} width={16} height={16} />
                    </div>
                    <input
                        name="birth_date"
                        type="date"
                        value={formData.birth_date}
                        onChange={handleChange}
                        className='border-2 p-2 outline-none rounded-md'
                    />
                    <div className="relative w-full mb-4 md:mb-0">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Add birth place
                        </label>
                        <input
                            name="birth_place"
                            type="text"
                            value={formData.birth_place}
                            onChange={handleChange}
                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 mt-5 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4">
                    <div className="md:col-span-1 lg:col-span-1 relative">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Language
                        </label>
                        <select
                            name="language"
                            value={formData.language}
                            onChange={handleChange}
                            className='w-full p-2 text-gray-500 rounded-md border-2 border-gray-500 outline-none'
                        >
                            {array.map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>
                    <div className='md:col-span-1 lg:col-span-1 border-2 p-2 flex items-center rounded-md'>
                        <input
                            name="phone_number"
                            type="text"
                            value={formData.phone_number}
                            onChange={handleChange}
                            placeholder='Phone number'
                            className='outline-none w-[90%]'
                        />
                        <Image src={call} width={16} height={16} alt="Call Icon" />
                    </div>
                    <div className='md:col-span-1 lg:col-span-1 border-2 p-2 flex items-center rounded-md'>
                        <input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Email'
                            className='outline-none w-[90%]'
                        />
                        <Image src={mail} width={16} height={16} alt="Mail Icon" />
                    </div>
                    <div className="md:col-span-2 lg:col-span-2 relative">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Address
                        </label>
                        <input
                            name="address"
                            type="text"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                        />
                    </div>
                </div>
                <p className='font-bold text-gray-400 my-3'>Here you can decide if the client is your own or if its agencys client</p>

                <div className="grid grid-cols-1 mt-5 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4">
                    <div className="md:col-span-1 lg:col-span-1 w-full flex items-center border-2 p-2 rounded-md h-14">
                        <input
                            name="is_own_client"
                            type="radio"
                            checked={formData.is_own_client}
                            onChange={() => setFormData({ ...formData, is_own_client: true })}
                        />
                        <p className="font-bold text-gray-500 ml-2">Its own client</p>
                    </div>
                    <div className="md:col-span-3 lg:col-span-3 w-full relative h-14">
                        <label className="absolute -top-3 left-3 font-bold bg-white px-1 text-[12px] text-gray-600">
                            Link to company
                        </label>
                        <input
                            name="linked_company"
                            type="text"
                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none h-full"
                        />
                    </div>
                    <div className="md:col-span-1 lg:col-span-1 w-full flex items-center border-2 p-2 rounded-md h-14">
                        <button
                            type="button"
                            onClick={() => setIsShowModal(true)}
                            className='w-full rounded-[4px] p-2 font-bold text-gray-500 flex items-center h-full'
                        >
                            <Image
                                src={service}
                                width={20}
                                height={20}
                                className='mr-2'
                                alt="Filter Icon"
                            />
                            <p>New Company</p>
                        </button>
                    </div>
                </div>
                <div className='flex items-center mt-5'>
                    <input
                        name="is_vip_client"
                        type="checkbox"
                        checked={formData.is_vip_client}
                        onChange={handleChange}
                        className='w-5 h-5'
                    />
                    <p className='font-bold text-gray-500 ml-2'>VIP Client</p>
                </div>
                <div className='flex items-center mt-3'>
                    <input
                        name="is_blacklisted"
                        type="checkbox"
                        checked={formData.is_blacklisted}
                        onChange={handleChange}
                        className='w-5 h-5'
                    />
                    <p className='font-bold text-gray-500 ml-2'>Blacklisted Client</p>
                </div>

                <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className='border-2 p-2 flex items-center rounded-md'>
                        <input
                            name="driver_license_serial"
                            type="text"
                            value={formData.driver_license_serial}
                            onChange={handleChange}
                            placeholder='Driver License Serial'
                            className='outline-none w-[90%]'
                        />
                        <Image src={user} width={16} height={16} />
                    </div>
                    <div className='border-2 p-2 flex items-center rounded-md'>
                        <input
                            name="driver_license_category"
                            type="text"
                            value={formData.driver_license_category}
                            onChange={handleChange}
                            placeholder='Driver License Category'
                            className='outline-none w-[90%]'
                        />
                        <Image src={user} width={16} height={16} />
                    </div>
                    <div className='border-2 p-2 flex items-center rounded-md'>
                        <input
                            name="driver_license_valid_until"
                            type="date"
                            value={formData.driver_license_valid_until}
                            onChange={handleChange}
                            placeholder='Driver License Valid Until'
                            className='outline-none w-[90%]'
                        />
                    </div>
                    <div className='border-2 p-2 flex items-center rounded-md'>
                        <input
                            name="passport_serial"
                            type="text"
                            value={formData.passport_serial}
                            onChange={handleChange}
                            placeholder='Passport Serial'
                            className='outline-none w-[90%]'
                        />
                        <Image src={user} width={16} height={16} />
                    </div>
                </div>
                <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className='border-2 p-2 flex items-center rounded-md'>
                        <input
                            name="passport_valid_until"
                            type="date"
                            value={formData.passport_valid_until}
                            onChange={handleChange}
                            placeholder='Passport Valid Until'
                            className='outline-none w-[90%]'
                        />
                    </div>
                </div>

                <div className='flex justify-end mt-5'>
                    <button
                        type="submit"
                        className='bg-blue-500 text-white p-2 w-[20%] rounded-md hover:bg-blue-600'
                    >
                        Save
                    </button>
                </div>
            </form>
            {isShowModal && <AddNewCompany onClose={() => setIsShowModal(false)} />}
        </>
    )
}
