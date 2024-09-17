import React, { useState } from 'react';
import VehicleInformation from '../vehicleInformation/VehicleInformation';
import AddVehicleImages from '../addVehicleImages/AddVehicleImages';
import Damages from '../damages/Damages';

export default function NewCar() {

    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL
    const [activeTab, setActiveTab] = useState('Vehicle information');
    const [formData, setFormData] = useState({
        vehicle_type: "",
        brand: "",
        model: "",
        plate_number: "",
        year_of_issue: null,
        base_location: "",
        odometer: null,
        passengers: null,
        transmission: "",
        fuel_type: "",
        base_kilometers_per_day: null,
        unlimited_km: null,
        color: "",
        max_speed: null,
        basic_daily_price: null,
        km_extra_price: null,
        deposit: null,
        excess: null,
        excess_percentage: null,
        excess_theft: null,
        excess_damage: null,
        excess_kasco: null,
        tariff_name: "",
        daily_price: null,
        km_extra_price_tariff: null,
        from_days: null,
        to_days: null,
        unlimited_kilometers: false,
        ownership: "",
        images: null
    });



    const handleChange = (e) => {
        const { name, type, files, checked, value } = e.target;

        if (type === 'file' && name === 'images') {
            setFormData(prevData => ({
                ...prevData,
                images: [
                    ...(prevData.images || []),
                    ...Array.from(files).filter(file =>
                        !(prevData.images || []).some(existingFile => existingFile.name === file.name)
                    )
                ]
            }));
        } else {
            setFormData(prevData => ({
                ...prevData,
                [name]: type === 'checkbox' ? checked : value
            }));
        }
    };

    const handleRemoveImage = (index) => {
        setFormData(prevData => ({
            ...prevData,
            images: prevData.images.filter((_, i) => i !== index)
        }));
    };




    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formDataToSubmit = new FormData();

            Object.keys(formData).forEach((key) => {
                if (key === 'images' && formData[key]) {
                    formData[key].forEach((file, i) => {
                        formDataToSubmit.append(`image_${i}`, file);
                    });
                } else {
                    formDataToSubmit.append(key, formData[key]);
                }
            });

            const response = await fetch(`${backendUrl}owner/vehicles/`, {
                method: 'POST',
                body: formDataToSubmit
            });

            if (!response.ok) {
                throw new Error('Failed to submit data');
            }

            const data = await response.json();
            console.log('Success:', data);
        } catch (error) {
            console.error('Error:', error);
        }
    };


    const renderContent = () => {
        switch (activeTab) {
            case 'Vehicle information':
                return <VehicleInformation
                    handleChange={handleChange}
                    formData={formData}
                />;
            case 'Add Images':
                return <AddVehicleImages
                    handleChange={handleChange}
                    formData={formData}
                    handleRemoveImage={handleRemoveImage}
                />;
            case 'Damages':
                return <Damages
                    handleChange={handleChange}
                    formData={formData}
                />;
            default:
                return null;
        }
    }

    return (
        <>
            <div className='flex'>
                <main className="flex-grow w-full md:w-17/20 lg:w-[75%]">
                    <div className="p-6 bg-white rounded-lg mr-3">
                        <div className="w-full">
                            <div className="text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                                <ul className="flex">
                                    {['Vehicle information', 'Add Images', 'Damages'].map((tab) => (
                                        <li
                                            key={tab}
                                            className={`w-[33%] ${activeTab === tab ? 'text-blue-600 border-blue-600' : 'border-transparent'} me-2`}
                                        >
                                            <button
                                                className={`inline-block p-4 border-2 w-full rounded-md font-bold ${activeTab === tab
                                                    ? 'text-blue-600 border-blue-600 bg-blue-100 dark:text-blue-500 dark:border-blue-500'
                                                    : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                                                    }`}
                                                onClick={() => setActiveTab(tab)}
                                            >
                                                {tab}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <hr className='text-gray-500 my-4' />

                            <div className="mt-4">
                                {renderContent()}
                                <div className='flex items-center justify-start gap-4 mt-8 flex-col sm:flex-row'>
                                    <button className='flex items-center justify-center border-[1px] w-full sm:w-[20%] border-blue-500 rounded-md font-bold text-blue-500 cursor-pointer p-2'>
                                        Cancel
                                    </button>
                                    <button onClick={handleSubmit} className='flex items-center justify-center text-white w-full sm:w-[20%] bg-blue-500 rounded-md font-bold cursor-pointer p-2 mt-2 sm:mt-0'>
                                        Add vehicle
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        </>
    )
}
