import React from 'react'

export default function ApplyMatrixModal({ setShowModal }) {

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

            {/* Modal */}
            <div className="fixed inset-0 flex items-center justify-center">
                <div className="w-[30%] p-2 flex flex-col justify-between h-[45vh] rounded-lg bg-white shadow-lg">
                    <div className='h-14 w-full flex justify-between items-center px-3'>
                        <p className='font-bold text-gray-400 text-[20px]'>Apply matrix to all vehicles</p>
                        <button onClick={closeModal} className='text-gray-500 p-2 text-[30px]'>✗</button>
                    </div>
                    <hr className='text-gray-400' />


                    <div className="overflow-y-auto flex-grow">
                        <p className='my-3 text-gray-400 font-bold text-center'>Danger action!</p>
                        <p className='my-3 text-gray-400 text-sm text-center mx-4'>This action will apply tariffs matrix to all vehicles. Are you sure? This action rewrites tariffs for all vehicles. (save before apply)</p>
                    </div>
                    <div className='flex items-center w-full gap-2 mt-3 px-5'>
                        <button onClick={closeModal} className='py-2 px-6 w-full flex justify-center items-center text-white bg-blue-500 font-bold rounded-md'>
                            Cancel
                        </button>
                        <button onClick={closeModal} className='py-2 px-6 w-full flex justify-center items-center text-white bg-blue-500 font-bold rounded-md'>
                            Apply
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}
