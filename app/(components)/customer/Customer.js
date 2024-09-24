import React, { useEffect, useState } from 'react'
import AddCustomerOrAgencyModal from '../modal/addCustomerOrAgencyModal/AddCustomerOrAgencyModal'

export default function Customer({ setActiveTab, formData, handleChange, setFormData }) {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    const [showAddCustomerOrAgencyModal, setAddCustomerOrAgencyModal] = useState(false);
    const [clients, setClients] = useState([]);
    const [agencies, setAgencies] = useState([])
    const [combinedData, setCombinedData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [filteredData, setFilteredData] = useState([]);
    const [isNextTab, setIsNextTab] = useState(false)

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (searchQuery) {
                handleSearch();
            }
        }, 500); // 500ms delay
        return () => clearTimeout(delayDebounce);
    }, [searchQuery]);


    const fetchClients = async () => {
        try {
            const res = await fetch(`${backendUrl}owner/create-client/`);
            if (!res.ok) throw new Error("Network Response was not ok");
            const data = await res.json();
            setClients(data);
        } catch (error) {
            console.log("Error fetching clients", error);
        }
    };




    const fetchAgencies = async () => {
        try {
            const res = await fetch(`${backendUrl}owner/agencies/`);
            if (!res.ok) throw new Error('Network response was not ok');
            const data = await res.json();
            setAgencies(data);
        } catch (error) {
            console.error('Error fetching agencies:', error);
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            await fetchClients();
            await fetchAgencies();
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (clients.length > 0 || agencies.length > 0) {
            const combinedArray = [...clients, ...agencies];

            setCombinedData(combinedArray);  // Use combinedData for filtering later
            setFilteredData(combinedArray); // Initially set filteredData to the full list
            console.log("COMBINED DATA LENGHT", combinedData.length);
        }
    }, [clients, agencies]);





    const handleSearch = () => {

        if (!searchQuery) {
            setFilteredData(combinedData);
            return;
        }
        console.log("search query char", searchQuery);


        const filtered = combinedData.filter((item) => {
            const companyName = typeof item.company_name === 'string' ? item.company_name.toLowerCase() : '';
            const clientName = typeof item.client_name === 'string' ? item.client_name.toLowerCase() : '';

            return companyName.includes(searchQuery.toLowerCase()) || clientName.includes(searchQuery.toLowerCase());
        });
        console.log("FILTER DATA IS HERE", filtered)
        setFilteredData(filtered); // Update the filtered data state
    };



    useEffect(() => {
        handleSearch();
    }, [searchQuery, combinedData]);




    
    const handleSelect = (item) => {
        if (item.company_name) {
            setFormData({
                ...formData,
                content_type: 12,
                object_id: item.id,
            });
        } else if (item.client_name) {
            setFormData({
                ...formData,
                content_type: 13,
                object_id: item.id,
            });
        }
        setSearchQuery(item.client_name || item.company_name);
        // setClientAgencyName(item.client_name || item.company_name)
        setDropdownOpen(false);
    };


    return (
        <>
            <p className='text-gray-600 my-3'>Here you can find and select the correct Client or Agency</p>

            <div className='flex flex-col sm:flex-row text-center w-full gap-2 relative'>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className='border-[1px] border-gray-400 rounded-md w-full md:w-[70%] p-2 h-14'
                    placeholder='Start typing client/agency name'
                    onFocus={() => setDropdownOpen(true)}
                />
                <button
                    onClick={() => setAddCustomerOrAgencyModal(true)}
                    className='p-2 w-full sm:w-[30%] rounded-md bg-blue-500 text-white font-bold'>
                    Add new Client or Agency
                </button>

                {dropdownOpen && filteredData.length > 0 && (
                    <ul className="absolute top-14 z-10 bg-slate-100 border border-gray-300 rounded-md max-h-60 overflow-y-auto w-[82%] md:w-[50%]">
                        {filteredData.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => handleSelect(item)}
                                className="p-2 cursor-pointer hover:bg-gray-200 text-left"
                            >
                                {item.company_name || item.client_name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>


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
