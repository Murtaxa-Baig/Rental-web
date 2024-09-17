'use client'
import React, { useState } from 'react'
import service from '@/public/images/service.svg'
import Image from 'next/image'
import AddNewCompany from '../modal/addNewCompany/AddNewCompany'

export default function AddStaffDriver() {
    const [isShowModal, setIsShowModal] = useState(false)
    const [isNextPart, setIsNextPart] = useState(false)
    const backendUrl= process.env.NEXT_PUBLIC_BACKEND_URL
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        phone_number: '',
        address: '',
        date_of_birth: '',
        driving_license_number: '',
        driving_license_issue_date: '',
        driving_license_expiry_date: '',
        driving_license_scan: null,
        passport_number: '',
        passport_issue_date: '',
        passport_expiry_date: '',
        passport_scan: null,
        company_link: '',
        role: ''
    })

    const array = ['English', 'Russian', 'Italian', 'German', 'French', 'Portuguese', 'Spanish', 'Polish', 'Chinese', 'Dutch', 'Czech']
    const role = ['Driver', 'Operator', 'Partner']

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleFileChange = (e) => {
        const { name, files } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: files[0] || null
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = new FormData()
        for (const key in formData) {
            data.append(key, formData[key])
        }

        try {
            const response = await fetch(`${backendUrl}owner/staff-drivers/`, {
                method: 'POST',
                body: data
            })

            if (response.ok) {
                console.log('Staff driver created successfully')
                setFormData({
                    name: '',
                    surname: '',
                    email: '',
                    phone_number: '',
                    address: '',
                    date_of_birth: '',
                    driving_license_number: '',
                    driving_license_issue_date: '',
                    driving_license_expiry_date: '',
                    driving_license_scan: null,
                    passport_number: '',
                    passport_issue_date: '',
                    passport_expiry_date: '',
                    passport_scan: null,
                    company_link: '',
                    role: ''
                })
                setIsNextPart(false)
                // Reset form or handle successful submission
            } else {
                console.log('Failed to create staff driver')
                // Handle error
            }
        } catch (error) {
            console.error('Error:', error)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {isNextPart ? (
                    <>
                        <p className='font-bold text-gray-600 text-[20px]'>Documents</p>
                        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-8">
                            <div className="relative w-full md:w-[49%] mb-4 md:mb-0">
                                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                    Driving license
                                </label>
                                <input
                                    type="text"
                                    name="driving_license_number"
                                    value={formData.driving_license_number}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="relative w-full md:w-[49%]">
                                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                    Passport
                                </label>
                                <input
                                    type="text"
                                    name="passport_number"
                                    value={formData.passport_number}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-8">
                            <div className="relative w-full md:w-[49%] mb-4 md:mb-0">
                                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                    Issue date driving license
                                </label>
                                <input
                                    type="date"
                                    name="driving_license_issue_date"
                                    value={formData.driving_license_issue_date}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="relative w-full md:w-[49%]">
                                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                    Date of issue passport
                                </label>
                                <input
                                    type="date"
                                    name="passport_issue_date"
                                    value={formData.passport_issue_date}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-8">
                            <div className="relative w-full md:w-[49%] mb-4 md:mb-0">
                                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                    Valid until date of driving license
                                </label>
                                <input
                                    type="date"
                                    name="driving_license_expiry_date"
                                    value={formData.driving_license_expiry_date}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="relative w-full md:w-[49%]">
                                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                    Valid until date of passport
                                </label>
                                <input
                                    type="date"
                                    name="passport_expiry_date"
                                    value={formData.passport_expiry_date}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        <p className='text-gray-500 text-xs my-5'>Here you can attach <span className='font-bold text-gray-600'>driving license scans</span> as well as <span className='font-bold text-gray-600'>customer passport scans</span></p>

                        <div className='w-full md:w-[49%] my-2'>
                            <label htmlFor='drivingLicenseScan' className="text-blue-500 font-bold mb-4 border-[1px] rounded-md border-blue-500 p-2">
                                Upload driving license scan
                                <input
                                    type="file"
                                    accept="image/*"
                                    id='drivingLicenseScan'
                                    name='driving_license_scan'
                                    className='hidden'
                                    onChange={handleFileChange}
                                />
                            </label>
                        </div>

                        <div className='w-full md:w-[49%] mt-7'>
                            <label htmlFor='passportScan' className="text-blue-500 font-bold mb-4 border-[1px] rounded-md border-blue-500 p-2">
                                Upload passport scan
                                <input
                                    type="file"
                                    accept="image/*"
                                    id='passportScan'
                                    name='passport_scan'
                                    className='hidden'
                                    onChange={handleFileChange}
                                />
                            </label>
                        </div>

                        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-8">
                            <div className="w-full md:w-[49%] mb-4 md:mb-0"></div>
                            <div className='w-full md:w-[49%] flex items-center gap-2 my-5'>
                                <button
                                    onClick={() => { setIsNextPart(false) }}
                                    className='w-[49%] border-[1px] border-blue-500 rounded-md font-bold text-blue-500 p-2'>
                                    Back
                                </button>
                                <button type='submit' className='w-[49%] rounded-md font-bold text-white bg-blue-500 p-2'>
                                    Create staff
                                </button>
                            </div>
                        </div>

                    </>
                ) : (
                    <>
                        <p className='font-bold text-gray-600 text-[20px]'>Base info</p>
                        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-8">
                            <div className="relative w-full md:w-[49%] mb-4 md:mb-0">
                                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="relative w-full md:w-[49%]">
                                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                    Surname
                                </label>
                                <input
                                    type="text"
                                    name="surname"
                                    value={formData.surname}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-8">
                            <div className="relative w-full md:w-[49%] mb-4 md:mb-0">
                                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                    Phone number
                                </label>
                                <input
                                    type="tel"
                                    name="phone_number"
                                    value={formData.phone_number}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="relative w-full md:w-[49%]">
                                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        <div className="relative w-full mt-8">
                            <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                Address
                            </label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="relative w-full mt-8">
                            <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                Date of birth
                            </label>
                            <input
                                type="date"
                                name="date_of_birth"
                                value={formData.date_of_birth}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="relative w-full mt-8">
                            <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                Company
                            </label>
                            <select
                                name="company_link"
                                value={formData.company_link}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select company</option>
                                {/* Map through your companies array if available */}
                            </select>
                        </div>

                        <div className="relative w-full mt-8">
                            <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                Role
                            </label>
                            <select
                                name="role"
                                value={formData.role}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select role</option>
                                {role.map((r, index) => (
                                    <option key={index} value={r}>{r}</option>
                                ))}
                            </select>
                        </div>

                        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-8">
                            <div className='w-full md:w-[49%] flex items-center gap-2 my-5'>
                                <button
                                    type='button'
                                    onClick={() => { setIsNextPart(true) }}
                                    className='w-[49%] rounded-md font-bold text-white bg-blue-500 p-2'>
                                    Next
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </form>

            {isShowModal && <AddNewCompany setIsShowModal={setIsShowModal} />}
        </>
    )
}
