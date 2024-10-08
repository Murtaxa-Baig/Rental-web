'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import DatesAndVehicles from '../(components)/datesAndVehicles/DatesAndVehicles';
import Customer from '../(components)/customer/Customer';
import ExtraServices from '../(components)/extraServices/ExtraServices';
import Billing from '../(components)/billing/Billing';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Page() {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL
    const [selectColor, setSelectColor] = useState('text-orange-600');
    const [activeTab, setActiveTab] = useState('Dates and Vehicles');
    const [startLocation, setStartLocation] = useState(null);
    const [returnLocation, setReturnLocation] = useState(null);
    const [loader, setLoader] = useState(false)
    const [formData, setFormData] = useState({
        status: '',
        start_date: '',
        start_time: '',
        end_date: '',
        end_time: '',
        pickup_location: '',
        pickup_location_notes: '',
        return_location: '',
        return_location_notes: '',
        extra_services_charge: null,
        delivery_price: null,
        deposit: null,
        excess: null,
        km: '',
        km_extra_price: null,
        price_per_day: null,
        agency_commision: null,
        expenses: null,
        total_price: null,
        hide_price_per_day: false,
        commision_only: false,
        hide_total_price: false,
        vat_percentage: '',
        prices_include_vat: true,
        additional_info: '',
        additional_info_files: null,
        vehicle: null,
        company: null,
        client: null,
        Vehicle: null,
        content_type: null,
        object_id: null
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        setLoader(true)
        e.preventDefault();

        if (!formData.status.trim()) {
            toast.error('Status is required.');
            setLoader(false);
            return;
        }

        if (!formData.start_date.trim()) {
            toast.error('Start date is required.');
            setLoader(false);
            return;
        }

        if (!formData.start_time.trim()) {
            toast.error('Start time is required.');
            setLoader(false);
            return;
        }

        if (!formData.end_date.trim()) {
            toast.error('End date is required.');
            setLoader(false);
            return;
        }

        if (!formData.end_time.trim()) {
            toast.error('End time is required.');
            setLoader(false);
            return;
        }


        if (!formData.pickup_location.trim()) {
            toast.error('Pickup location is required.');
            setLoader(false);
            return;
        }

        if (!formData.return_location.trim()) {
            toast.error('Return locaion is required.');
            setLoader(false);
            return;
        }

        if (!formData.vehicle) {
            toast.error('Please select vehicle');
            setLoader(false);
            return;
        }

        if (!formData.content_type) {
            toast.error('Agency / client is required');
            setLoader(false);
            return;
        }

        if (!formData.agency_commision) {
            toast.error('Agency commision is required');
            setLoader(false);
            return;
        }

        if (!formData.delivery_price) {
            toast.error('Delivery price is required');
            setLoader(false);
            return;
        }

        if (!formData.deposit) {
            toast.error('Deposit is required');
            setLoader(false);
            return;
        }

        if (!formData.expenses) {
            toast.error('Expenses is required');
            setLoader(false);
            return;
        }

        if (!formData.excess) {
            toast.error('Excess is required');
            setLoader(false);
            return;
        }


        if (!formData.extra_services_charge) {
            toast.error('Extra services charges is required');
            setLoader(false);
            return;
        }
        
        if (!formData.price_per_day) {
            toast.error('Price per day is required');
            setLoader(false);
            return;
        }

        if (!formData.vat_percentage) {
            toast.error('VAT percentage is required');
            setLoader(false);
            return;
        }

        if (!formData.total_price) {
            toast.error('Total price is required');
            setLoader(false);
            return;
        }

        if (!formData.km_extra_price) {
            toast.error('Km extra price is required');
            setLoader(false);
            return;
        }



        try {
            const response = await fetch(`${backendUrl}owner/reservations/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                toast.success('Reservation added successfully.');
                setFormData({
                    status: '',
                    start_date: '',
                    start_time: '',
                    end_date: '',
                    end_time: '',
                    pickup_location: '',
                    pickup_location_notes: '',
                    return_location: '',
                    return_location_notes: '',
                    extra_services_charge: 12,
                    delivery_price: null,
                    deposit: null,
                    excess: null,
                    km: '',
                    km_extra_price: null,
                    price_per_day: null,
                    agency_commision: null,
                    expenses: null,
                    total_price: null,
                    hide_price_per_day: false,
                    commision_only: false,
                    hide_total_price: false,
                    vat_percentage: '',
                    prices_include_vat: true,
                    additional_info: '',
                    additional_info_files: null,
                    vehicle: null,
                    company: null,
                    client: null,
                    Vehicle: null,
                    content_type: null,
                    object_id: null
                })
                setLoader(false)
                console.log('Success:', result);
            } else {
                console.error('Error:', result);
                setLoader(false)
                toast.error('Failed to create reservation.');
            }
        } catch (error) {
            console.error('Error during API call:', error);
            setLoader(false)
            toast.error('An error occurred. Please try again.');
        }
    };


    console.log("form data is here", formData);


    const renderContent = () => {
        switch (activeTab) {
            case 'Dates and Vehicles':
                return <DatesAndVehicles
                    startLocation={startLocation}
                    setStartLocation={setStartLocation}
                    returnLocation={returnLocation}
                    setReturnLocation={setReturnLocation}
                    formData={formData}
                    setFormData={setFormData}
                    handleChange={handleChange}
                />;
            case 'Customer':
                return <Customer
                    setActiveTab={setActiveTab}
                    formData={formData}
                    handleChange={handleChange}
                    setFormData={setFormData}
                />;
            case 'Extra Services':
                return <ExtraServices
                    setActiveTab={setActiveTab}
                    formData={formData}
                    handleChange={handleChange}
                />;
            case 'Billing':
                return <Billing
                    loader={loader}
                    formData={formData}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />;
            default:
                return null;
        }
    };


    const handleColor = (event) => {
        const value = event.target.value;
        switch (value) {
            case 'REQUESTED':
                setSelectColor('text-orange-600');
                break;
            case 'CONFIRMED':
                setSelectColor('text-green-600');
                break;
            case 'MAINTAINENCE':
                setSelectColor('text-gray-400');
                break;
            case 'COMPLETED':
                setSelectColor('text-blue-600');
                break;
            case 'CANCELED':
                setSelectColor('text-red-500');
                break;
            default:
                setSelectColor('text-gray-600');
        }
    };

    return (
        <>
            <ToastContainer />
            <div className='mt-10 mb-3'>
                <h1 className='font-bold text-3xl text-gray-500'>New reservation</h1>
                <p className='text-gray-500'>
                    <Link href="/" className='text-blue-700'>Home</Link> / New reservation
                </p>
            </div>

            <div className='flex'>
                <main className="flex-grow w-full md:w-17/20 lg:w-[75%]">
                    <div className="p-6 bg-white rounded-lg mr-3">
                        <div className="w-full">
                            <ul className="flex text-sm font-medium text-center text-gray-500">
                                {['Dates and Vehicles', 'Customer', 'Extra Services', 'Billing'].map((tab) => (
                                    <li key={tab} className={`w-[33%] ${activeTab === tab ? 'text-blue-600 border-blue-600' : 'border-transparent'} me-2`}>
                                        <Link
                                            href="#"
                                            className={`inline-block p-4 border-b-2 w-full rounded-t-lg font-bold ${activeTab === tab
                                                ? 'text-blue-600 border-blue-600'
                                                : 'hover:text-gray-600 hover:border-gray-300'}`}
                                            onClick={() => setActiveTab(tab)}
                                        >
                                            {tab}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <hr className='text-gray-500 my-4' />
                            <div className="mt-4">
                                {renderContent()}
                            </div>
                        </div>
                    </div>
                </main>

                <aside className="hidden md:block md:w-3/20 lg:w-[25%]">
                    <div className='bg-white rounded-lg p-3'>
                        <p className='font-bold'>Basic information</p>
                        <hr className='text-gray-400' />

                        <p className='font-semibold text-sm mb-4'>Status</p>
                        <select
                            className={`w-full my-2 border-[1px] border-gray-400 font-bold rounded-sm h-12 px-2 ${selectColor}`}
                            onChange={(e) => { handleColor(e); handleChange(e); }}
                            name="status"
                            value={formData.status}
                        >
                            <option value="REQUESTED" className='text-orange-500 font-bold'>REQUESTED</option>
                            <option value="CONFIRMED" className='text-green-600 font-bold'>CONFIRMED</option>
                            <option value="MAINTAINENCE" className='text-gray-400 font-bold'>MAINTAINENCE</option>
                            <option value="COMPLETED" className='text-blue-600 font-bold'>COMPLETED</option>
                            <option value="CANCELED" className='text-red-500 font-bold'>CANCELED</option>
                        </select>
                        <hr className='text-gray-400' />

                        <p className='font-semibold text-sm mb-4'>DATES</p>
                        <div className='flex items-center justify-between'>
                            <p className='text-gray-400'>From:</p>
                            <p className='font-bold text-sm'>{formData.start_date} {formData.start_time ? '|' : ''} {formData.start_time}</p>
                        </div>
                        <hr className='text-gray-400' />
                        <div className='flex items-center justify-between mt-4'>
                            <p className='text-gray-400'>Until:</p>
                            <p className='font-bold text-sm'>{formData.end_date} {formData.end_time ? '|' : ''} {formData.end_time}</p>
                        </div>
                        <hr className='text-gray-400' />

                        <p className='font-semibold text-sm my-5'>LOCATIONS</p>
                        <p className='text-sm font-bold'>Delivery location:</p>
                        <p className='text-[12px] font-bold mt-2 text-gray-700'>{startLocation || ''}</p>

                        <p className='text-sm font-bold'>Return location:</p>
                        <p className='text-[12px] font-bold mt-2 text-gray-700'>{returnLocation || ''}</p>
                    </div>
                </aside>
            </div>
        </>
    );
}
