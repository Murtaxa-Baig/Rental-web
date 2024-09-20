import React, { useState } from 'react';
import edit from '@/public/images/edit.svg';
import Image from 'next/image';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import BillingOptions from '../ui/billingOptions/BillingOptions';
import InvoiceOptions from '../ui/invoiceOptions/InvoiceOptions';

export default function Billing({ loader, formData, handleChange, handleSubmit }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const rentInfo = [
        {
            title: 'Extra services',
            disc: 'You can change predefined daily prices in the vehicle options or directly here',
            name: 'extra_services_charge',
            price: formData?.extra_services_charge || '€0.00'
        },
        {
            title: 'Delivery price',
            disc: 'Delivery price will be added to total price',
            name: 'delivery_price',
            price: formData?.delivery_price || '€0.00'
        },
        {
            title: 'Deposit',
            disc: 'Real security deposit that the client pays for this rental',
            name: 'deposit',
            price: formData?.deposit || '€0.00'
        },
        {
            title: 'Excess',
            disc: 'Maximum responsibility of the customer in case of damage, theft or fire of the vehicle',
            name: 'excess',
            price: formData?.excess || '€0.00'
        },
        {
            title: 'KMs included',
            disc: 'KMs included in the price',
            name: 'km',
            price: formData?.km || '150'
        },
        {
            title: 'KMs extra price',
            disc: 'Price of each extra km over those included in the contract',
            name: 'km_extra_price',
            price: formData?.km_extra_price || '€0.00'
        },
    ];

    const paymentDetails = [
        {
            title: 'Price per day',
            disc: 'You can change predefined daily prices in the vehicle options or directly here',
            name: 'price_per_day',
            price: formData?.price_per_day || '€0.00'
        },
        {
            title: 'Agency commission',
            disc: 'Commission due to the partner, tour operator or agency providing the service.',
            name: 'agency_commision',
            price: formData?.agency_commision || '€0.00'
        },
        {
            title: 'Expenses',
            disc: 'Expenses for the suppliers car rental, transportation or any other expenses. (In total)',
            name: 'expenses',
            price: formData?.expenses || '€0.00'
        },
        {
            title: 'Total price',
            disc: 'Total rental price agreed with the customer',
            name: 'total_price',
            price: formData?.total_price || '€0.00'
        },
        {
            title: 'Total profit',
            disc: 'Corporate income from this rental',
            name: 'totalProfit',
            price: formData?.totalProfit || '€0.00'
        },
    ];

    const accordionData = [
        {
            title: 'BILLING OPTIONS',
            content: <BillingOptions />
        },
        {
            title: 'INVOICE OPTIONS',
            content: <InvoiceOptions
                formData={formData}
                handleChange={handleChange}
            />
        },
    ];

    return (
        <>
            <div className="flex flex-wrap items-center w-full justify-between">
                <div className="p-2 w-full sm:w-[49%] mb-4">
                    <p className='text-gray-600 font-bold my-5'>RENT INFO</p>
                    {rentInfo.map((item, index) => (
                        <div key={index} className='flex items-center justify-between'>
                            <div className='w-[70%]'>
                                <p className='text-gray-600 font-semibold text-sm'>{item.title}</p>
                                <p className='text-gray-500 font-semibold text-xs my-2'>{item.disc}</p>
                            </div>
                            <div className='w-[25%] flex items-center justify-between'>
                                <input
                                    type="text"
                                    name={item.name}
                                    placeholder='€0.00'
                                    value={formData[item.name]}
                                    onChange={handleChange}
                                    className='outline-none w-[50px]'
                                />
                                <div className='h-8 flex justify-center items-center w-8 rounded-full bg-slate-200'>
                                    <Image
                                        src={edit}
                                        height={25}
                                        width={25}
                                    />
                                </div>
                            </div>
                            <hr className='text-gray-500 my-3' />
                        </div>
                    ))}
                </div>

                <div className="p-2 w-full sm:w-[49%] mb-4">
                    <p className='text-gray-600 font-bold my-5'>Payment details</p>
                    {paymentDetails.map((item, index) => (
                        <div key={index} className='flex items-center justify-between'>
                            <div className='w-[70%]'>
                                <p className='text-gray-600 font-semibold text-sm'>{item.title}</p>
                                <p className='text-gray-500 font-semibold text-xs my-2'>{item.disc}</p>
                            </div>
                            <div className='w-[25%] flex items-center justify-between'>
                                <input
                                    type="text"
                                    name={item.name}
                                    value={formData[item.name]}
                                    onChange={handleChange}
                                    placeholder='€0.00'
                                    className='outline-none w-[50px]'
                                />
                                <div className='h-8 flex justify-center items-center w-8 rounded-full bg-slate-200'>
                                    <Image
                                        src={edit}
                                        height={25}
                                        width={25}
                                    />
                                </div>
                            </div>
                            <hr className='text-gray-500 my-3' />
                        </div>
                    ))}
                </div>
            </div>

            {/* Accordion Section */}
            <div className="w-full mx-auto mt-3">
                {accordionData.map((item, index) => (
                    <div key={index} className="border-b-2 border-gray-200">
                        <div
                            aria-expanded={activeIndex === index}
                            className="w-full text-left p-4 focus:outline-none "
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="flex justify-between items-center text-gray-600">
                                <span className="font-bold">{item.title}</span>
                                {activeIndex === index ? (
                                    <ChevronUpIcon className="w-5 h-5 text-gray-500 transition-transform duration-300" />
                                ) : (
                                    <ChevronDownIcon className="w-5 h-5 text-gray-500 transition-transform duration-300" />
                                )}
                            </div>
                        </div>
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'p-4 bg-white' : 'max-h-0'}`}>
                            {item.content}
                        </div>
                    </div>
                ))}
            </div>

            {/* Additional Fields */}
            <div className="relative w-full my-5">
                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">Company name</label>
                <select
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className='w-full p-2 text-gray-500 rounded-md border-[1px] border-gray-400 outline-none'
                >
                    <option value="Gig Masters">Gig Masters</option>
                </select>
            </div>

            <textarea
                className='w-full my-5 border-[1px] border-gray-300 rounded-md outline-none p-2 text-gray-500'
                placeholder='Additional info'
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                rows="4"
            />

            <label htmlFor='attachFiles' className="text-blue-500 font-bold px-2 mb-4 border-[1px] rounded-md border-blue-500 p-3 my-5">
                Attach files
                <input
                    type="file"
                    accept="image/*"
                    id='attachFiles'
                    name='files'
                    onChange={handleChange}
                    className='hidden'
                />
            </label>
            <br />

            <button onClick={handleSubmit} className='bg-blue-500 text-white rounded-md w-full p-3 mt-8'>
                <p className='text-center font-bold'>{loader ? 'Saving...' : 'Finish and Save'}</p>
            </button>
        </>
    );
}
