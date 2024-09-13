import React from 'react'
import NewCar from '../../newCar/NewCar';

export default function NewCarModal({setShowNewCarModal}) {
    const closeModal = () => {
        setShowNewCarModal(false);
    };
    return (
        <>

            <div className="fixed inset-0 z-10 bg-black bg-opacity-50 backdrop-blur-sm"></div>

            {/* Modal */}
            <div className="fixed inset-0 z-20 flex items-center justify-center">
                <div className="w-[80%] p-2 flex flex-col justify-between h-[80vh] rounded-lg bg-white shadow-lg">
                    <div className='h-14 w-full flex justify-between items-center px-3'>
                        <p className='font-bold text-gray-400 text-[20px]'>Add New Car</p>
                        <button onClick={closeModal} className='text-gray-500 p-2 text-[30px]'>✗</button>
                    </div>

                    <div className="overflow-y-auto flex-grow">
                        <NewCar />
                    </div>
                </div>
            </div>
        </>
    )
}
