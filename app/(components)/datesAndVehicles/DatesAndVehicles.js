import React, { useEffect } from 'react';
import Image from 'next/image';
import filt from "@/public/images/filter.svg";
import add from "@/public/images/add.svg";
import Switch from 'react-switch';
import { useState } from 'react';
import NewCarModal from '../modal/newCarModal/NewCarModal';
import Autocomplete from 'react-google-autocomplete';

export default function DatesAndVehicles({ startLocation, setStartLocation, returnLocation, setReturnLocation, formData, handleChange, setFormData }) {
    const [checked, setChecked] = useState(false);
    const [showNewCarModal, setShowNewCarModal] = useState(false);
    const [selectColor, setSelectColor] = useState('text-orange-600');
    const [vehicles, setVehicles] = useState([])
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredVehicles, setFilteredVehicles] = useState([]);
    const [startLocationNote, setStartLocationNote] = useState(false)
    const [endLocationNote, setEndLocationNote] = useState(false)
    const [selectedVehicleId, setSelectedVehicleId] = useState(null);

    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL

    // const StartLocationSelected = (place) => {
    //     setStartLocation(place.formatted_address);
    // };

    // const ReturnLocationSelected = (place) => {
    //     setReturnLocation(place.formatted_address);
    // };

    const handleChanges = (nextChecked) => {
        setChecked(nextChecked);
    };

    const handleColor = (event) => {
        const value = event.target.value;
        handleChange(event); // Update form state

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



    const fetchVehicles = async () => {
        const response = await fetch(`${backendUrl}/owner/vehicles/`);
        const result = await response.json();
        setVehicles(result);
        // console.log("Vehicles data is here", vehicles);

    };

    useEffect(() => {
        fetchVehicles();
    }, []);




    useEffect(() => {
        const results = vehicles.filter(vehicle =>
            vehicle.brand.toLowerCase().includes(searchQuery.toLowerCase()) // Filter by brand
        );
        setFilteredVehicles(results);
    }, [searchQuery, vehicles]);


    // Handle search input change
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value); // Update search query
    };

    const handleVehicleSelect = (vehicleId, vehicleName) => {
        setSelectedVehicleId(vehicleId);
        handleChange({ target: { name: 'vehicle', value: vehicleId } });
        setFormData(prevData => ({
            ...prevData,
            vehicle: vehicleId
        }));
    };



    return (
        <>
            <select
                id=""
                className={`block md:hidden w-full my-5 border-[1px] border-gray-400 font-bold rounded-sm h-12 px-2 ${selectColor}`}
                onChange={handleColor}
                name="status"
                value={formData.status}
            >
                <option value="REQUESTED" className='text-orange-500 font-bold'>REQUESTED</option>
                <option value="CONFIRMED" className='text-green-600 font-bold'>CONFIRMED</option>
                <option value="MAINTAINENCE" className='text-gray-400 font-bold'>MAINTAINENCE</option>
                <option value="COMPLETED" className='text-blue-600 font-bold'>COMPLETED</option>
                <option value="CANCELED" className='text-red-500 font-bold'>CANCELED</option>
            </select>

            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="w-full md:w-[49%] flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="relative w-full md:w-[60%] mb-4 md:mb-0">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Start Date
                        </label>
                        <input
                            name="start_date"
                            value={formData.start_date} // Make sure `formData.start_date` is in `YYYY-MM-DD` format
                            onChange={handleChange}
                            type="date"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="relative w-full md:w-[35%]">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Start time
                        </label>
                        <input
                            name="start_time"
                            value={formData.start_time}
                            onChange={handleChange}
                            type="time"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                <div className="w-full md:w-[49%] flex flex-col md:flex-row md:items-center md:justify-between mt-4 md:mt-0">
                    <div className="relative w-full md:w-[60%] mb-4 md:mb-0">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            End Date
                        </label>
                        <input
                            name="end_date"
                            value={formData.end_date}
                            onChange={handleChange}
                            type="date"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="relative w-full md:w-[35%]">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            End time
                        </label>
                        <input
                            name="end_time"
                            value={formData.end_time}
                            onChange={handleChange}
                            type="time"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-4">
                <div className="relative w-full md:w-[49%] mb-4 md:mb-0">
                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                        Pickup location
                    </label>
                    <Autocomplete
                        apiKey="AIzaSyBBGxKE3abRfU_ZsgC6JmiIIUpO5QmaTjI"
                        onPlaceSelected={(place) => {
                            setStartLocation(place.formatted_address);
                            handleChange({ target: { name: "pickup_location", value: place.formatted_address } });
                        }}
                        options={{
                            types: ['geocode'],
                            componentRestrictions: { country: 'it' },
                        }}
                        value={startLocation}
                        onChange={(e) => setStartLocation(e.target.value)}
                        className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                    />
                    <span onClick={() => setStartLocationNote(true)} className='text-blue-500 my-1 underline mx-2 cursor-pointer'>+ Add notes</span>
                    {
                        startLocationNote ? <>
                            <div>
                                <input
                                    type="text"
                                    id=""
                                    name="pickup_location_notes"
                                    value={formData.pickup_location_notes}
                                    onChange={handleChange}
                                    placeholder='Add Note'
                                    className='outline-none border-[1px] border-gray-500 rounded-md p-2 w-full'
                                />
                            </div>
                        </> : null
                    }

                </div>
                <div className="relative w-full md:w-[49%]">
                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                        Return location
                    </label>
                    <Autocomplete
                        apiKey="AIzaSyBBGxKE3abRfU_ZsgC6JmiIIUpO5QmaTjI"
                        onPlaceSelected={(place) => {
                            setReturnLocation(place.formatted_address);
                            handleChange({ target: { name: "return_location", value: place.formatted_address } });
                        }}
                        options={{
                            types: ['geocode'],
                            componentRestrictions: { country: 'it' },
                        }}
                        value={returnLocation}
                        onChange={(e) => setReturnLocation(e.target.value)}
                        className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                    />
                    <span onClick={() => setEndLocationNote(true)} className='text-blue-500 my-1 underline mx-2 cursor-pointer'>+ Add notes</span>
                    {
                        endLocationNote ? <>
                            <div>
                                <input
                                    type="text"
                                    id=""
                                    name="return_location_notes"
                                    value={formData.return_location_notes}
                                    onChange={handleChange}
                                    placeholder='Add Note'
                                    className='outline-none border-[1px] border-gray-500 rounded-md p-2 w-full'
                                />
                            </div>
                        </> : null
                    }

                </div>
            </div>

            <div className='flex flex-col mt-4 md:flex-row items-center md:justify-between'>
                <input
                    type="text"
                    placeholder='Search Vehicle by Brand'
                    className='w-full md:w-[72%] p-3 border-[1px] border-black outline-none rounded-md h-14 mb-4 md:mb-0'
                    onChange={handleSearchChange} // Handle search change
                    value={searchQuery} // Controlled input
                />
                <div className='flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto'>
                    <button className='border-[1px] h-14 px-3 rounded-md shadow-lg w-full md:w-auto flex justify-center items-center hover:bg-gray-200'>
                        <Image
                            src={filt}
                            width={35}
                            height={35}
                            className="rounded-full"
                            alt="Filter Icon"
                        />
                    </button>
                    <button onClick={() => setShowNewCarModal(true)}
                        className='border-[1px] h-14 px-3 rounded-md shadow-lg text-blue-600 font-bold flex items-center justify-center hover:bg-blue-100 w-full md:w-auto'>
                        <Image
                            src={add}
                            width={18}
                            height={18}
                            className="rounded-full mr-2"
                            alt="Add Icon"
                        />
                        New car
                    </button>
                </div>
            </div>

            {showNewCarModal && <NewCarModal setShowNewCarModal={setShowNewCarModal} />}

            <div className='flex items-center justify-center mt-2'>
                <p className='text-[14px] text-gray-600 mx-2'>Own cars</p>
                <Switch
                    onChange={handleChanges}
                    checked={checked}
                    offColor="#3464eb"
                    onColor="#34eb52"
                    height={20}
                    width={40}
                    uncheckedIcon={false}
                    checkedIcon={false}
                />
                <p className='text-[14px] text-gray-300 mx-2'>Partners cars</p>
            </div>


            <div className='my-6'>
                {/* Display "No results found" if no matching vehicles */}
                {filteredVehicles.length === 0 ? (
                    <div className="text-center text-gray-600">No results found</div>
                ) : (
                    <table className='w-full hidden md:table'>
                        <thead className='w-full'>
                            <tr className='w-full '>
                                <th className='w-[7%]'></th>
                                <th className='text-gray-600 w-[33%] text-left font-semibold text-sm'>Brand and model</th>
                                <th className='text-gray-600 w-[10%] text-left font-semibold text-sm'>Color</th>
                                <th className='text-gray-600 w-[10%] text-left font-semibold text-sm'>Year</th>
                                <th className='text-gray-600 w-[20%] text-left font-semibold text-sm'>Plate number</th>
                                <th className='text-gray-600 w-[40%] text-left font-semibold text-sm'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredVehicles.map((car, index) => (
                                <tr key={index} className='w-full mb-8'>
                                    <th className='w-[7%]'>
                                        <input
                                            type="radio"
                                            name="vehicle"
                                            value={car.id} 
                                            checked={selectedVehicleId === car.id}
                                            onChange={() => handleVehicleSelect(car.id, car.brand)} 
                                            className='border-[2px]'
                                        />                                    </th>
                                    <th className='text-gray-600 w-[33%] text-left font-semibold text-sm'>{car?.brand}</th>
                                    <th className='text-gray-600 w-[10%] text-left font-semibold text-sm'>{car?.color}</th>
                                    <th className='text-gray-600 w-[10%] text-left font-semibold text-sm'>{car?.year_of_issue}</th>
                                    <th className='text-gray-600 w-[20%] text-left font-semibold text-sm'>{car?.plate_number}</th>
                                    <th className='text-gray-600 w-[40%]  font-semibold text-sm text-center'>
                                        <button className='text-green-500 p-1 border-[1px] border-green-500 text-sm rounded-md'>Available</button>
                                        <p className='text-xs text-blue-500 underline '>{car?.base_location}</p>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

        </>
    );
}
