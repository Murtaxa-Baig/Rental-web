'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import documentIcon from '@/public/images/document.svg';
import Link from 'next/link';
import AddDocumentModal from '../modal/addDocumentModal/AddDocumentModal';

export default function AddAgency() {
    const [isShowModal, setIsShowModal] = useState(false);
    const [formData, setFormData] = useState({
        company_name: '',
        person_name: '',
        person_surname: '',
        phone_number: '',
        email: '',
        website: '',
        address: '',
        language: 'EN', // Changed to match the `array` value
        vat: '',
        client_name: '',
        linked_company: '',
        note: '',
        documents: []
    });

    const [companies, setCompanies] = useState([]);
    const [clients, setClients] = useState([]);

    const languages = ['English', 'Russian', 'Italian', 'German', 'French', 'Portuguese', 'Spanish', 'Polish', 'Chinese', 'Dutch', 'Czech'];

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const res = await fetch("https://buraak.pythonanywhere.com/owner/create-client/");
                if (!res.ok) {
                    throw new Error("Network Response was not ok");
                }
                const data = await res.json();
                setClients(data);
            } catch (error) {
                console.log("Error fetching clients", error);
            }
        };
        fetchClients();
    }, []);

    useEffect(() => {
        // Fetch companies data when the component mounts
        const fetchCompanies = async () => {
            try {
                const res = await fetch('https://buraak.pythonanywhere.com/owner/agencies/');
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await res.json();
                setCompanies(data);
            } catch (error) {
                console.error('Error fetching companies:', error);
            }
        };

        fetchCompanies();
    }, []);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleCompanyChange = (e) => {
        const selectedCompanyId = e.target.value;
        setFormData({
            ...formData,
            linked_company: selectedCompanyId
        });
    };

    const handleClientsChange = (e) => {
        const selectedClientID = e.target.value;
        setFormData({
            ...formData,
            client_name: selectedClientID
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const submissionData = new FormData();

        submissionData.append('company_name', formData.company_name);
        submissionData.append('person_name', formData.person_name);
        submissionData.append('person_surname', formData.person_surname);
        submissionData.append('phone_number', formData.phone_number);
        submissionData.append('email', formData.email);
        submissionData.append('website', formData.website);
        submissionData.append('address', formData.address);
        submissionData.append('language', formData.language);
        submissionData.append('vat', formData.vat);
        submissionData.append('client_name', formData.client_name);
        submissionData.append('linked_company', formData.linked_company);
        submissionData.append('note', formData.note);

        formData.documents.forEach((doc, index) => {
            submissionData.append(`documents[${index}]document`, doc.document); // File
            submissionData.append(`documents[${index}]document_name`, doc.document_name); // String
            submissionData.append(`documents[${index}]issue_date`, doc.issue_date); // Date
            submissionData.append(`documents[${index}]expiry_date`, doc.expiry_date); // Date
        });

        console.log(submissionData)

        try {
            const res = await fetch('https://buraak.pythonanywhere.com/owner/agencies/', {
                method: 'POST',
                // Do not set 'Content-Type'; the browser will set it automatically, including the boundary
                body: submissionData
            });

            if (!res.ok) {
                const errorData = await res.json();
                console.error('Error creating agency:', errorData);
                alert(`Error: ${JSON.stringify(errorData)}`);
                return;
            }

            const data = await res.json();
            console.log('Agency created successfully:', data);
            alert('Agency created successfully!');
            // Optionally, reset the form or redirect the user
        } catch (error) {
            console.error('Error creating agency:', error);
            alert('An unexpected error occurred.');
        }
    };



    const addDocument = (document) => {
        setFormData({
            ...formData,
            documents: [...formData.documents, document]
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                {/* Company Name and Person's Name */}
                <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-8">
                    <div className="relative w-full md:w-[49%] mb-4 md:mb-0">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Company Name
                        </label>
                        <input
                            type="text"
                            name="company_name"
                            value={formData.company_name}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="relative w-full md:w-[49%]">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Person's Name
                        </label>
                        <input
                            type="text"
                            name="person_name"
                            value={formData.person_name}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                </div>

                {/* Person's Surname and Phone Number */}
                <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-8">
                    <div className="relative w-full md:w-[49%] mb-4 md:mb-0">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Person's Surname
                        </label>
                        <input
                            type="text"
                            name="person_surname"
                            value={formData.person_surname}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="relative w-full md:w-[49%]">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Person's Number
                        </label>
                        <input
                            type="text"
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Email and Website */}
                <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-8">
                    <div className="relative w-full md:w-[49%] mb-4 md:mb-0">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="relative w-full md:w-[49%]">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Website
                        </label>
                        <input
                            type="text"
                            name="website"
                            value={formData.website}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Address and Language */}
                <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-8">
                    <div className="relative w-full md:w-[49%] mb-4 md:mb-0">
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
                    <div className="relative w-full md:w-[49%]">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Language
                        </label>
                        <select
                            name="language"
                            value={formData.language}
                            onChange={handleInputChange}
                            className='w-full p-2 text-gray-500 rounded-md border-[1px] border-gray-400 outline-none'
                        >
                            {languages.map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* VAT and Client Name */}
                <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-8">
                    <div className="relative w-full md:w-[49%] mb-4 md:mb-0">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            VAT
                        </label>
                        <input
                            type="text"
                            name="vat"
                            value={formData.vat}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="relative w-full md:w-[49%] mt-8">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Enter Client Name
                        </label>
                        <select
                            name="client_name"
                            value={formData.client_name}
                            onChange={handleClientsChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select a Client</option>
                            {clients.map((client) => (
                                <option key={client.id} value={client.id}>
                                    {client.client_name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Link to Company */}
                <div className="relative w-full mt-8">
                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                        Link to Company
                    </label>
                    <select
                        name="linked_company"
                        value={formData.linked_company}
                        onChange={handleCompanyChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select a Company</option>
                        {companies.map((company) => (
                            <option key={company.id} value={company.id}>
                                {company.company_name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Note */}
                <div className="relative w-full mt-8">
                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                        Note
                    </label>
                    <textarea
                        name="note"
                        value={formData.note}
                        onChange={handleInputChange}
                        className='w-full border-[1px] border-gray-300 rounded-md outline-none p-2 text-gray-500'
                        rows="4"
                        cols="50"
                    />
                </div>

                {/* Create New Document */}
                <div
                    className='mt-8 p-5 border-2 border-dashed border-gray-500 md:w-[30%] lg:w-[25%] text-center sm:w-full cursor-pointer'
                    onClick={() => { setIsShowModal(true) }}
                >
                    <p className='font-bold text-gray-400'>Create New Document</p>
                    <Image className='my-4 mx-auto' src={documentIcon} width={50} height={50} alt="Document Icon" />
                </div>

                {/* Document Modal */}
                {
                    isShowModal &&
                    <AddDocumentModal
                        setIsShowModal={setIsShowModal}
                        addDocument={addDocument}
                    />
                }

                {/* Form Actions */}
                <div className='flex items-center justify-end gap-4 flex-col sm:flex-row mt-8'>
                    <Link href='/reservations' className='flex items-center justify-center border-[1px] w-full sm:w-[20%] border-blue-500 rounded-md font-bold text-blue-500 cursor-pointer p-2'>
                        Cancel
                    </Link>

                    <button type='submit' className='flex items-center justify-center text-white w-full sm:w-[20%] bg-blue-500 rounded-md font-bold cursor-pointer p-2 mt-2 sm:mt-0'>
                        Create Partner
                    </button>
                </div>
            </form>
        </>
    );
}
