import React, { useState } from 'react'
import AddClient from '../../addClient/AddClient';
import AddAgency from '../../addAgency/AddAgency';


export default function AddCustomerOrAgencyModal({ setAddCustomerOrAgencyModal }) {
    const [activeTab, setActiveTab] = useState('Add Client / Driver');

    const renderContent = () => {
        switch (activeTab) {
            case 'Add Client / Driver':
                return <AddClient />;
            case 'Add Agency':
                return <AddAgency />;
            default:
                return null;
        }
    }


    const closeModal = () => {
        setAddCustomerOrAgencyModal(false);
    };



    return (
        <>
            <div className="fixed inset-0 z-10 bg-black bg-opacity-50 backdrop-blur-sm"></div>

            {/* Modal */}
            <div className="fixed inset-0 z-20 flex items-center justify-center">
                <div className="w-[80%] p-2 flex flex-col justify-between h-[80vh] rounded-lg bg-white shadow-lg">
                    <div className='h-14 w-full flex justify-between items-center px-3'>
                        <p className='font-bold text-gray-400 text-[20px]'>Add customer or agency</p>
                        <button onClick={closeModal} className='text-gray-500 p-2 text-[30px]'>✗</button>
                    </div>
                    <hr className='text-gray-500' />

                    <div className="overflow-y-auto flex-grow">

                        <div className="w-full">
                            <div className="text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                                <ul className="flex">
                                    {['Add Client / Driver', 'Add Agency'].map((tab) => (
                                        <li
                                            key={tab}
                                            className={`w-[49%] ${activeTab === tab ? 'text-blue-600 border-blue-600' : 'border-transparent'} me-2`}
                                        >
                                            <div
                                                className={`inline-block p-4 border-b-2 w-full rounded-t-lg font-bold ${activeTab === tab
                                                    ? 'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500'
                                                    : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                                                    }`}
                                                onClick={() => setActiveTab(tab)}
                                            >
                                                {tab}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <hr className='text-gray-500 my-4' />

                            <div className="mt-4 px-3">
                                {renderContent()}
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </>
    )
}
