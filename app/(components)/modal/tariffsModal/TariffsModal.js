import React from 'react'

export default function TariffsModal({ setShowModal, setShowTariffs }) {

    const closeModal = () => {
        setShowModal(false);
    };


    const showTariffs = () => {
        setShowTariffs(true)
        setShowModal(false)
    }

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>


            <div className="fixed inset-0 flex items-center justify-center z-10">
                <div className="w-[40%] p-8  h-[40vh] rounded-lg bg-white shadow-lg">
                    <p className='font-bold text-gray-600 text-center'>Are you sure you want to calculate all rates from the car price.</p>
                    <p className=' text-gray-400 text-center'>All previous rates will be erased after saving the vehicle</p>
                    <div className='flex items-center w-full gap-2 mt-[70px]'>
                        <button onClick={closeModal} className='flex items-center justify-center text-white w-full bg-blue-500 rounded-md font-bold cursor-pointer p-2 mt-2 md:mt-0'>
                            Cancel
                        </button>
                        <button onClick={showTariffs} className='flex items-center justify-center text-white w-full bg-blue-500 rounded-md font-bold cursor-pointer p-2 mt-2 md:mt-0'>
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
