import React from 'react'

export default function NewUserModal({ setShowModal }) {
    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

            {/* Modal */}
            <div className="fixed inset-0 flex items-center justify-center">
                <div className="w-[50%] p-2 flex flex-col justify-between h-[70vh] rounded-lg bg-white shadow-lg">
                    <div className='h-14 w-full flex justify-between items-center px-3'>
                        <p className='font-bold text-gray-400 text-[20px]'>Add new OPERATOR</p>
                        <button onClick={closeModal} className='text-gray-500 p-2 text-[30px]'>✗</button>
                    </div>


                    <form action="" onSubmit={(e) => e.preventDefault()} className='px-2'>
                        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-8">
                            <div className="w-full md:w-[49%] mb-4 md:mb-0">
                                <input
                                    type="text"
                                    placeholder='Name'
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="w-full md:w-[49%]">
                                <input
                                    type="text"
                                    placeholder='Surname'
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-8">
                            <div className="w-full md:w-[49%] md:mb-0">
                                <input
                                    type="text"
                                    placeholder='Call'
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="w-full md:w-[49%]">
                                <input
                                    type="email"
                                    placeholder='Email'
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between">
                            <div className="w-full md:w-[49%] md:mb-0">
                            </div>
                            <div className="w-full md:w-[49%]">
                                <p className='text-[10px]'>Only user itself can change email in account settings</p>
                            </div>
                        </div>



                        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between my-8">
                            <div className="w-full flex items-center md:w-[49%]">
                                <input
                                    id='AccessToCalendar'
                                    type="checkbox"
                                    className="h-5 w-5 "
                                />
                                <label For="AccessToCalendar" className='mx-2'>Access to calendar</label>
                            </div>
                            <div className="flex items-center w-full md:w-[49%]">
                                <input
                                    id='BillingVisible'
                                    type="checkbox"
                                    className="h-5 w-5 "
                                />
                                <label For="BillingVisible" className='mx-2'>Billing visible</label>
                            </div>
                        </div>


                        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between my-8">
                            <div className="w-full flex items-center md:w-[49%]">
                                <input
                                    id='AccessToOffers'
                                    type="checkbox"
                                    className="h-5 w-5 "
                                />
                                <label For="AccessToOffers" className='mx-2'>Access to offers</label>
                            </div>
                            <div className="flex items-center w-full md:w-[49%]">
                                <input
                                    id='ContactsVisible'
                                    type="checkbox"
                                    className="h-5 w-5 "
                                />
                                <label For="ContactsVisible" className='mx-2'>Contacts visible</label>
                            </div>
                        </div>

                        <div className="w-full md:w-[50%] flex flex-col md:flex-row md:items-center md:justify-end mt-4 ml-auto gap-2">
                            <div className="w-full md:w-[49%] mb-4 md:mb-0">
                                <button
                                    onClick={closeModal}
                                    className='flex items-center justify-center border-[1px] w-full border-blue-500 rounded-md font-bold text-blue-500 cursor-pointer p-2'>
                                    Cancel
                                </button>
                            </div>
                            <div className="w-full md:w-[49%]">
                                <button type='submit' className='flex items-center justify-center text-white w-full bg-blue-500 rounded-md font-bold cursor-pointer p-2 mt-2 md:mt-0'>
                                    Save
                                </button>
                            </div>
                        </div>




                    </form>


                </div>
            </div>

        </>
    )
}
