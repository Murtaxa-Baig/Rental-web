import React, { useEffect, useState } from 'react'
import AddCustomerOrAgencyModal from '../modal/addCustomerOrAgencyModal/AddCustomerOrAgencyModal'

export default function Customer({ setActiveTab, formData, handleChange, setFormData }) {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    const [showAddCustomerOrAgencyModal, setAddCustomerOrAgencyModal] = useState(false);
    const [clients, setClients] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredClients, setFilteredClients] = useState([]);
    const [selectedClient, setSelectedClient] = useState(null);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [isNextTab, setIsNextTab] = useState(false)

    const fetchClients = async () => {
        const response = await fetch(`${backendUrl}owner/create-client/`);
        const result = await response.json();
        setClients(result);
    };

    useEffect(() => {
        fetchClients();
    }, []);

    useEffect(() => {
        // Filter clients based on the search term
        if (searchTerm) {
            const filtered = clients.filter(client =>
                client.client_name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredClients(filtered);
        } else {
            setFilteredClients(clients);
        }
    }, [searchTerm, clients]);

    const handleClientClick = (client) => {
        setSelectedClient(client);
        setSearchTerm(client.client_name);
        setFilteredClients([]);
        setDropdownVisible(false);
        setIsNextTab(true);

        // Set the selected client ID in the formData
        setFormData((prevData) => ({
            ...prevData,
            client: client.id,
        }));
    };


    return (
        <>
            <p className='text-gray-600 my-3'>Here you can find and select the correct Client or Agency</p>

            <div className='flex flex-col sm:flex-row text-center w-full gap-2 relative'>
                <input
                    type="text"
                    name="client"
                    placeholder='Start typing client / Agency name'
                    className='p-2 border-[1px] h-14 border-gray-500 rounded-md outline-none w-full sm:w-[70%]'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => setDropdownVisible(true)}
                    onBlur={() => setTimeout(() => setDropdownVisible(false), 200)}
                />
                <button
                    onClick={() => setAddCustomerOrAgencyModal(true)}
                    className='p-2 w-full sm:w-[30%] rounded-md bg-blue-500 text-white font-bold'>
                    Add new Client or Agency
                </button>

                {dropdownVisible && filteredClients.length > 0 && (
                    <div className='absolute top-14 left-0 w-full sm:w-[69%] rounded-md bg-white border border-gray-300 max-h-60 overflow-y-auto z-10'>
                        {filteredClients.map((client) => (
                            <button
                                key={client.id}
                                onClick={() => handleClientClick(client)}
                                onMouseDown={() => handleClientClick(client)}
                                className='cursor-pointer text-left p-2 w-full hover:bg-gray-200'>
                                {client.client_name}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {selectedClient && (
                <div className='mt-4 p-4 border rounded'>
                    <h3 className='text-lg font-bold'>Selected Client</h3>
                    <p>Name: {selectedClient.client_name} {selectedClient.client_surname}</p>
                </div>
            )}

            {showAddCustomerOrAgencyModal && (
                <AddCustomerOrAgencyModal
                    setAddCustomerOrAgencyModal={setAddCustomerOrAgencyModal}
                />
            )}

            {
                isNextTab ? <div className='flex justify-end'>
                    <button
                        onClick={() => setActiveTab('Extra Services')}
                        className='w-[30%] p-2 mt-8 rounded bg-blue-500 text-white font-bold'>
                        Go to service tab
                    </button>
                </div> : null
            }
        </>
    );
}
