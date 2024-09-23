import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function NewPaymentModal({ setShowModal }) {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL
    const [formData, setFormData] = useState({
        payment_method: "bank",
        name: "",
        cif: "",
        iban: "",
        swift: "",
        account: "",
        bank: "",
        address: ""
    });


    const closeModal = () => {
        setShowModal(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${backendUrl}owner/payment-methods/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                toast.success('Payment added successfully.');
                setFormData({
                    payment_method: "",
                    name: "",
                    cif: "",
                    iban: "",
                    swift: "",
                    account: "",
                    bank: "",
                    address: ""
                });
            } else {
                toast.error('Failed to create client. Please try again.');
            }
        } catch (error) {
            toast.error('An error occurred. Please try again.');
        }
    };
    return (
        <>
            <ToastContainer />
            <div className="fixed z-10 inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

            {/* Modal */}
            <div className="fixed z-10 inset-0 flex items-center justify-center">
                <div className="md:w-[50%] w-[90%] p-2 flex flex-col justify-between h-[80vh] rounded-lg bg-white shadow-lg">
                    <div className='h-14 w-full flex justify-between items-center px-3'>
                        <p className='font-bold text-gray-400 text-[20px]'>Add new payment method</p>
                        <button onClick={closeModal} className='text-gray-500 p-2 text-[30px]'>✗</button>
                    </div>

                    <div className="overflow-y-auto flex-grow">
                        <form action="" onSubmit={handleSubmit} className='mx-4'>


                            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-8">
                                <div className="relative w-full md:w-[30%] mb-4 md:mb-0">
                                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                        Payment method
                                    </label>
                                    <select
                                        name="payment_method"
                                        onChange={handleInputChange}
                                        value={formData.payment_method}
                                        id="" className='w-full p-2 text-gray-500 rounded-md border-[1px] border-gray-400 outline-none'>
                                        {['Bank Transfer'].map((item, index) => (
                                            <option key={index} value={item}>{item}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="w-full md:w-[65%]">
                                    <p className='text-bold text-blue-500 text-sm'>Make sure that the data is entered correctly in order to avoid errors when making an invoice</p>
                                </div>
                            </div>


                            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-7">
                                <div className="relative w-full md:w-[49%] mb-4 md:mb-0">
                                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        onChange={handleInputChange}
                                        value={formData.name}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="relative w-full md:w-[49%]">
                                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                        CIF
                                    </label>
                                    <input
                                        type="text"
                                        name="cif"
                                        onChange={handleInputChange}
                                        value={formData.cif}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>


                            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-7">
                                <div className="relative w-full md:w-[49%] mb-4 md:mb-0">
                                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                        IBAN
                                    </label>
                                    <input
                                        type="text"
                                        name="iban"
                                        onChange={handleInputChange}
                                        value={formData.iban}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="relative w-full md:w-[49%]">
                                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                        SWIFT
                                    </label>
                                    <input
                                        type="text"
                                        name="swift"
                                        onChange={handleInputChange}
                                        value={formData.swift}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-7">
                                <div className="relative w-full md:w-[49%] mb-4 md:mb-0">
                                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                        Account
                                    </label>
                                    <input
                                        type="text"
                                        name="account"
                                        onChange={handleInputChange}
                                        value={formData.account}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="relative w-full md:w-[49%]">
                                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                        Bank
                                    </label>
                                    <input
                                        type="text"
                                        name="bank"
                                        onChange={handleInputChange}
                                        value={formData.bank}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>


                            <div className="relative w-full mt-7">
                                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    name="address"
                                    onChange={handleInputChange}
                                    value={formData.address}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-7">
                                <div className="w-full md:w-[49%] flex items-center mb-4 md:mb-0">
                                    <input type="checkbox" id='validation' className='h-4 w-4 mr-2' />
                                    <label For="validation" className='cursor-pointer'>The data is entered correctly</label>

                                </div>
                                <div className="w-full md:w-[49%]">
                                    <button type='submit' className='w-full bg-blue-500 rounded-md font-bold text-white h-12'>
                                        Add
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
