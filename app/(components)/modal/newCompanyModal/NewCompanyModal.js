import Image from 'next/image';
import React from 'react'
import camera from '@/public/images/camera.svg'

export default function NewCompanyModal({ setShowModal }) {

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

            {/* Modal */}
            <div className="fixed inset-0 flex items-center justify-center">
                <div className="w-[50%] p-2 flex flex-col justify-between h-[80vh] rounded-lg bg-white shadow-lg">
                    <div className='h-14 w-full flex justify-between items-center px-3'>
                        <p className='font-bold text-gray-400 text-[20px]'>New company</p>
                        <button onClick={closeModal} className='text-gray-500 p-2 text-[30px]'>✗</button>
                    </div>

                    <div className="overflow-y-auto flex-grow">
                        <form action="" onSubmit={(e) => e.preventDefault()} className='mx-4'>
                            <div className="flex flex-col md:flex-row items-center w-full gap-10">
                                <div className='w-full md:w-[20%]'>
                                    <label for="image" className="border-[1px] border-cyan-400 h-[125px] w-[125px] rounded-full flex justify-center items-center mx-auto">
                                        <Image
                                            src={camera}
                                            height={25}
                                            width={25}
                                            alt=''
                                        />
                                    </label>
                                    <input id='image' type="file" accept="image/*" className='hidden' />
                                    <p className='text-[10px] text-gray-400'>Logo will be displayed in letters on a white background, not white .png is recommended</p>
                                </div>
                                <div className="w-full md:w-[70%]">
                                    <div className="relative w-full mb-4 ">
                                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div className="relative w-full mb-4 ">
                                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                            Phone
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="relative w-full mb-4 mt-5">
                                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="relative w-full ">
                                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                    Website
                                </label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <p className='text-[12px] text-gray-400 mb-4'>Valid url: https://example.com. (using in letters)</p>
                            <div className="relative w-full mb-4">
                                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-8">
                                <div className="relative w-full md:w-[49%] mb-4 md:mb-0">
                                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                        VAT
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="w-full md:w-[49%] flex items-center">
                                    <label For="setDefault" className='mx-2 text-gray-400 '>Set as default</label>
                                    <input type="checkbox" name="setDefault" id="setDefault" className='h-4 w-4' />
                                </div>
                            </div>


                            <input
                                type="text"
                                placeholder='Additional info'
                                className="w-full my-3 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                placeholder='Bank name'
                                className="w-full my-3 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-8">
                                <div className="w-full md:w-[49%] mb-4 md:mb-0">
                                    <input
                                        type="text"
                                        placeholder='Account name'
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="w-full md:w-[49%] flex items-center">
                                    <input
                                        type="text"
                                        placeholder='Account number'
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-8">
                                <div className="w-full md:w-[49%] mb-4 md:mb-0">
                                    <input
                                        type="text"
                                        placeholder='Account swift'
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="w-full md:w-[49%] flex items-center">
                                    <input
                                        type="text"
                                        placeholder='Account iban'
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            <div className='flex items-center gap-4 w-[50%] my-5'>
                                <button onClick={closeModal} className='bg-blue-500 rounded-sm text-white w-[49%] p-2'>
                                    Cancel
                                </button>
                                <button type='submit' onClick={closeModal} className='bg-blue-500 rounded-sm text-white w-[49%] p-2'>
                                    Save
                                </button>
                                

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
