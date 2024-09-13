import React, { useState } from 'react';
import VehicleInformation from '../vehicleInformation/VehicleInformation';
import AddVehicleImages from '../addVehicleImages/AddVehicleImages';
import Damages from '../damages/Damages';

export default function NewCar() {

    const [activeTab, setActiveTab] = useState('Vehicle information');

    const renderContent = () => {
        switch (activeTab) {
            case 'Vehicle information':
                return <VehicleInformation />;
            case 'Add Images':
                return <AddVehicleImages />;
            case 'Damages':
                return <Damages />;
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
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        </>
    )
}
