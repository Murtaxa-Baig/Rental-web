import React, { useState } from 'react'
import AddCustomerOrAgencyModal from '../modal/addCustomerOrAgencyModal/AddCustomerOrAgencyModal'

export default function Customer({ setActiveTab }) {
    const [showAddCustomerOrAgencyModal, setAddCustomerOrAgencyModal] = useState(false)
    return (
        <>
            <p className='text-gray-600 my-3'>Here you can find and select the correct Client or Agency</p>

            <div className='flex flex-col sm:flex-row text-center w-full gap-2'>
                <input
                    type="text"
                    placeholder='Start typing client / Agency name'
                    className='p-2 border-[1px] h-14 border-gray-500 rounded-md outline-none w-full sm:w-[70%]'
                />
                <button
                    onClick={() => setAddCustomerOrAgencyModal(true)}
                    className='p-2 w-full sm:w-[30%] rounded-md bg-blue-500 text-white font-bold'>
                    Add new Client or Agency
                </button>
            </div>


            {
                showAddCustomerOrAgencyModal && <AddCustomerOrAgencyModal
                    setAddCustomerOrAgencyModal={setAddCustomerOrAgencyModal}
                />
            }



            <div className='flex justify-end'>
                <button
                    onClick={() => { setActiveTab('Extra Services') }}
                    className='w-[30%] p-2 mt-8 rounded bg-blue-500 text-white font-bold'
                    
                >
                    Go to service tab
                </button>

            </div>

        </>
    )
}
