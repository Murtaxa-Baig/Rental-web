import React, { useState } from 'react';
import documentIcon from '@/public/images/document.svg';
import Image from 'next/image';

export default function AddDocumentModal({ setIsShowModal, addDocument }) {
    const [documentData, setDocumentData] = useState({
        document_name: '',
        description: '',
        issue_date: '',
        expiry_data: '',
        document: null,
        valid_date: false,
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setDocumentData({
            ...documentData,
            [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate required fields if necessary
        if (!documentData.document) {
            alert("Please upload a document.");
            return;
        }


        // Pass the document data to the parent component
        addDocument(documentData);
        setIsShowModal(false);
    };

    const closeModal = () => {
        setIsShowModal(false);
    };

    return (
        <>
            {/* Background overlay */}
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

            {/* Modal */}
            <div className="fixed inset-0 flex items-center justify-center">
                <div className="w-[50%] p-2 flex flex-col justify-between h-[80vh] rounded-lg bg-white shadow-lg">
                    <div className='h-14 w-full flex justify-between items-center px-3'>
                        <p className='font-bold text-gray-400 text-[20px]'>Create New Document</p>
                        <button onClick={closeModal} className='text-gray-500 p-2 text-[30px]'>✗</button>
                    </div>

                    <div className="overflow-y-auto flex-grow">
                        <form onSubmit={handleSubmit} className='mx-4'>
                            <div className='w-full h-[35%] flex justify-center items-center'>
                                <label htmlFor="document" className='w-[20%] h-full cursor-pointer border-[1px] border-gray-500 hover:border-blue-500 rounded-full flex justify-center items-center p-2'>
                                    <input
                                        id='document'
                                        name='document'
                                        onChange={handleInputChange}
                                        type="file"
                                        accept="*"
                                        className='hidden'
                                    />
                                    <Image src={documentIcon} width={120} height={120} alt="Document Upload" />
                                </label>
                            </div>

                            <div className="relative w-full h-14 mt-5">
                                <label className="absolute -top-3 left-3 font-bold bg-white px-1 text-[12px] text-gray-600">
                                    Document Name
                                </label>
                                <input
                                    type="text"
                                    name="document_name"
                                    value={documentData.document_name}
                                    onChange={handleInputChange}
                                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none h-full"
                                    required
                                />
                            </div>
                            <div className="relative w-full h-14 mt-5">
                                <label className="absolute -top-3 left-3 font-bold bg-white px-1 text-[12px] text-gray-600">
                                    Description
                                </label>
                                <input
                                    type="text"
                                    name="description"
                                    value={documentData.description}
                                    onChange={handleInputChange}
                                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none h-full"
                                />
                            </div>

                            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-4">
                                <div className="relative w-full md:w-[49%] mb-4 md:mb-0">
                                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                        Issue Date
                                    </label>
                                    <input
                                        type="date"
                                        name="issue_date"
                                        value={documentData.issue_date}
                                        onChange={handleInputChange}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="relative w-full md:w-[49%]">
                                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                        Valid Date
                                    </label>
                                    <input
                                        type="date"
                                        name="expiry_data"
                                        value={documentData.expiry_data}
                                        onChange={handleInputChange}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            <div className='flex items-center gap-4 my-5'>
                                <input
                                    type="checkbox"
                                    id='isValid'
                                    name="valid_date"
                                    checked={documentData.valid_date}
                                    onChange={handleInputChange}
                                    className='h-5 w-5'
                                />
                                <label htmlFor="isValid">Valid Date</label>
                            </div>

                            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-4">
                                <div className="w-full md:w-[49%] mb-4 md:mb-0">
                                    <button
                                        type="button"
                                        onClick={closeModal}
                                        className='flex items-center justify-center border-[1px] w-full border-blue-500 rounded-md font-bold text-blue-500 cursor-pointer p-2'>
                                        Cancel
                                    </button>
                                </div>
                                <div className="w-full md:w-[49%]">
                                    <button onClick={handleSubmit} type='submit' className='flex items-center justify-center text-white w-full bg-blue-500 rounded-md font-bold cursor-pointer p-2 mt-2 md:mt-0'>
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
