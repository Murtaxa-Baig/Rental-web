'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import document from '@/public/images/document.svg'
import Link from 'next/link'
import AddDocumentModal from '../modal/addDocumentModal/AddDocumentModal'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function AddAgency() {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    const [isShowModal, setIsShowModal] = useState(false);
    const [loader, setLoader] = useState(false);
    const [clientSearchTerm, setClientSearchTerm] = useState('');
    const [companySearchTerm, setCompanySearchTerm] = useState('');
    const [filteredClients, setFilteredClients] = useState([]);
    const [filteredAgencies, setFilteredAgencies] = useState([]);
    const [clients, setClients] = useState([]);
    const [agencies, setAgencies] = useState([]);
    const [selectedClient, setSelectedClient] = useState(null);
    const [clientDropdownVisible, setClientDropdownVisible] = useState(false);
    const [companyDropdownVisible, setCompanyDropdownVisible] = useState(false);

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
        client_name: null,
        linked_company: '',
        notes: ''
    })

    const array = ['English', 'Russian', 'Italian', 'German', 'French', 'Portuguese', 'Spanish', 'Polish', 'Chinese', 'Dutch', 'Czech']

    const fetchClients = async () => {
        const response = await fetch(`${backendUrl}owner/create-client/`);
        const result = await response.json();
        setClients(result);
        setFilteredClients(result);
    };

    const fetchAgencies = async () => {
        const response = await fetch(`${backendUrl}owner/agencies/`);
        const result = await response.json();
        setAgencies(result);
        setFilteredAgencies(result);
    };

    useEffect(() => {
        fetchClients();
        fetchAgencies();
    }, []);

    useEffect(() => {
        if (clientSearchTerm) {
            const filtered = clients.filter(client =>
                client.client_name.toLowerCase().includes(clientSearchTerm.toLowerCase())
            );
            setFilteredClients(filtered);
        } else {
            setFilteredClients(clients);  // Reset to all clients if no search term
        }
    }, [clientSearchTerm, clients]);



    // Filter agencies based on search term
    useEffect(() => {
        if (companySearchTerm) {
            
            const filtered = agencies.filter(agency =>
                agency.company_name && agency.company_name.toLowerCase().includes(companySearchTerm.toLowerCase())
            );
            setFilteredAgencies(filtered);
        } else {
            setFilteredAgencies(agencies);
        }
    }, [companySearchTerm, agencies]);



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleClientClick = (client) => {
        setSelectedClient(client);
        setClientSearchTerm(client.client_name);
        setClientDropdownVisible(false);
        setFormData({
            ...formData,
            client_name: client.id,
        });
    };

    const handleAgencyClick = (agency) => {
        setSelectedClient(agency);
        setCompanySearchTerm(agency.company_name);
        setCompanyDropdownVisible(false);
        setFormData({
            ...formData,
            linked_company: agency.client_name,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true);

        const response = await fetch(`${backendUrl}owner/agencies/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            const data = await response.json();
            toast.success('Agency added successfully.');
            setLoader(false);
            setFormData({
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
                notes: ''
            });
        } else {
            toast.error('An error occurred. Please try again.');
            setLoader(false);
        }
    };


    console.log("Agency form data is here", formData);


    return (
        <>
            <ToastContainer />
            <form onSubmit={handleSubmit}>
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
                        />
                    </div>
                </div>

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
                            Person{`'`}s Number
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
                            id="" className='w-full p-2 text-gray-500 rounded-md border-[1px] border-gray-400 outline-none'>
                            {
                                array.map((item, index) => {
                                    return <option key={index} value={item}>{item}</option>
                                }
                                )
                            }
                        </select>
                    </div>
                </div>


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
                        <input
                            type="text"
                            name="client_name"
                            value={clientSearchTerm}
                            onChange={(e) => setClientSearchTerm(e.target.value)}
                            onFocus={() => setClientDropdownVisible(true)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {clientDropdownVisible && filteredClients.length > 0 && (
                            <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-y-auto">
                                {filteredClients.map((client) => (
                                    <li
                                        key={client.id}
                                        onClick={() => handleClientClick(client)}
                                        className="p-2 hover:bg-gray-100 cursor-pointer"
                                    >
                                        {client.client_name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>


                <div className="relative w-full  mt-8">
                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                        Link to company
                    </label>
                    <input
                        type="text"
                        value={companySearchTerm}
                        onChange={(e) => {
                            setCompanySearchTerm(e.target.value)
                        }}
                        onFocus={() => setCompanyDropdownVisible(true)}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {companyDropdownVisible && (
                        <ul className="absolute w-full z-10 bg-white border rounded-lg mt-2 max-h-60 overflow-y-auto">
                            {filteredAgencies.map((agency) => (
                                <li key={agency.id} onClick={() => handleAgencyClick(agency)} className="cursor-pointer p-2 hover:bg-blue-100">
                                    {agency.company_name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>



                <div className="relative w-full  mt-8">
                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                        Note
                    </label>
                    <textarea
                        className='w-full border-[1px] border-gray-300 rounded-md outline-none p-2 text-gray-500'
                        id=""
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        rows="4"
                        cols="50"
                    />

                </div>


                <div className='mt-8 p-5 border-2 border-dashed border-gray-500 md:w-[30%] lg:w-[25%] text-center sm:w-full'
                    onClick={() => { setIsShowModal(true) }}
                >
                    <p className='font-bold text-gray-400'>Create New Document</p>
                    <Image className='my-4 mx-auto' src={document} width={50} height={50} alt="Call Icon" />
                </div>
                {
                    isShowModal &&
                    <AddDocumentModal
                        isShowModal={isShowModal}
                        setIsShowModal={setIsShowModal}
                    />
                }
                <div className='flex items-center justify-end gap-4 flex-col sm:flex-row'>
                    <Link href='/reservations' className='flex items-center justify-center border-[1px] w-full sm:w-[20%] border-blue-500 rounded-md font-bold text-blue-500 cursor-pointer p-2'>
                        Cancel
                    </Link>

                    <button type='submit' className='flex items-center justify-center text-white w-full sm:w-[20%] bg-blue-500 rounded-md font-bold cursor-pointer p-2 mt-2 sm:mt-0'>
                        {loader ? 'Creating partner...' : 'Create partner'}
                    </button>
                </div>
            </form>
        </>
    )
}
