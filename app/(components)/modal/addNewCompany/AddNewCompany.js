import React from 'react'
import AddAgency from '../../addAgency/AddAgency';

export default function AddNewCompany({ setIsShowModal }) {

    const closeModal = () => {
        setIsShowModal(false);
    };

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

            <div className="fixed inset-0 flex items-center justify-center z-10">
                <div className="w-[60%] p-2 flex flex-col justify-between h-[80vh] rounded-lg bg-white shadow-lg">
                    <div className='h-14 w-full flex justify-between items-center px-3'>
                        <p className='font-bold text-gray-400 text-[20px]'>Add new partner</p>
                        <button onClick={closeModal} className='text-gray-500 p-2 text-[30px]'>✗</button>
                    </div>

                    <div className="overflow-y-auto flex-grow px-2">
                        <AddAgency />
                    </div>
                </div>
            </div>
        </>
    )
}
