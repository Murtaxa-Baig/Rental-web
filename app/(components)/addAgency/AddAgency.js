'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import documentIcon from '@/public/images/document.svg';
import Link from 'next/link';
import AddDocumentModal from '../modal/addDocumentModal/AddDocumentModal';
import { fetchAgency } from '@/app/api/fetchAgency';
import { fetchClients } from '@/app/api/fetchClients';
import { createAgency } from '@/app/api/createAgency';
import { ToastContainer } from 'react-toastify';

export default function AddAgency() {
    // State variables
    const [isShowModal, setIsShowModal] = useState(false);
    const [formData, setFormData] = useState({
        company_name: '',
        person_name: '',
        person_surname: '',
        phone_number: '',
        email: '',
        website: '',
        address: '',
        language: 'EN', 
        vat: '',
        client_name: '',
        linked_company: '',
        note: '',
        documents: []
    });
    const [loader, setLoader] = useState(false);
    const [companies, setCompanies] = useState([]);
    const [clients, setClients] = useState([]);

    // Supported languages for selection
    const languages = [
        'English', 'Russian', 'Italian', 
        'German', 'French', 'Portuguese', 
        'Spanish', 'Polish', 'Chinese', 
        'Dutch', 'Czech'
    ];

    // Fetch clients from API on component mount
    useEffect(() => {
        const getClients = async () => {
            try {
                const data = await fetchClients();
                setClients(data);
            } catch (error) {
                console.error('Error fetching clients:', error);
            }
        };

        getClients();
    }, []);

    // Fetch companies from API on component mount
    useEffect(() => {
        const getCompanies = async () => {
            try {
                const data = await fetchAgency();
                setCompanies(data);
            } catch (error) {
                console.error('Error fetching companies:', error);
            }
        };

        getCompanies();
    }, []);

    // Handle input change for form fields
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    // Handle company selection
    const handleCompanyChange = (e) => {
        const selectedCompanyId = e.target.value;
        setFormData({
            ...formData,
            linked_company: selectedCompanyId
        });
    };

    // Handle client selection
    const handleClientsChange = (e) => {
        const selectedClientID = e.target.value;
        setFormData({
            ...formData,
            client_name: selectedClientID
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true);

        const submissionData = new FormData();

        // Append form data to FormData object
        Object.keys(formData).forEach(key => {
            if (key !== 'documents') {
                submissionData.append(key, formData[key]);
            }
        });

        // Append documents
        formData.documents.forEach((doc, index) => {
            submissionData.append(`documents[${index}]document`, doc.document);
            submissionData.append(`documents[${index}]document_name`, doc.document_name);
            submissionData.append(`documents[${index}]issue_date`, doc.issue_date);
            submissionData.append(`documents[${index}]expiry_date`, doc.expiry_date);
        });

        // Call API to create the agency
        try {
            await createAgency(submissionData);
        } catch (error) {
            console.error("Error creating agency", error);
        } finally {
            setLoader(false); // Reset loader state
        }
    };

    // Function to add a new document
    const addDocument = (document) => {
        setFormData({
            ...formData,
            documents: [...formData.documents, document]
        });
    };

    return (
        <>
            <ToastContainer />
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
                            Person{`'`}s Name
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
                            Person{`'`}s Surname
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
                            Phone Number
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
                    <div className="relative w-full md:w-[49%]">
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

                {/* Create New Document Button */}
                <div
                    className='mt-8 p-5 border-2 border-dashed border-gray-500 md:w-[30%] lg:w-[25%] text-center sm:w-full cursor-pointer'
                    onClick={() => { setIsShowModal(true); }}
                >
                    <p className='font-bold text-gray-400'>Create New Document</p>
                    <Image className='my-4 mx-auto' src={documentIcon} width={50} height={50} alt="Document Icon" />
                </div>

                {/* Document Modal */}
                {isShowModal && (
                    <AddDocumentModal
                        setIsShowModal={setIsShowModal}
                        addDocument={addDocument}
                    />
                )}

                {/* Form Actions */}
                <div className='flex items-center justify-end gap-4 flex-col sm:flex-row mt-8'>
                    <Link href='/reservations' className='flex items-center justify-center border-[1px] w-full sm:w-[20%] border-blue-500 rounded-md font-bold text-blue-500 cursor-pointer p-2'>
                        Cancel
                    </Link>

                    <button type='submit' className='flex items-center justify-center text-white w-full sm:w-[20%] bg-blue-500 rounded-md font-bold cursor-pointer p-2 mt-2 sm:mt-0'>
                        {loader ? 'Creating Partner...' : 'Create Partner'}
                    </button>
                </div>
            </form>
        </>
    );
}
