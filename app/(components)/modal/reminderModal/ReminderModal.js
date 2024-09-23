import React from 'react'

export default function ReminderModal({ setShowModal }) {
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
                        <p className='font-bold text-gray-400 text-[20px]'>Add Reminder</p>
                        <button onClick={closeModal} className='text-gray-500 p-2 text-[30px]'>✗</button>
                    </div>
                    <hr className='text-gray-400' />

                    <div className="overflow-y-auto flex-grow">
                        <form action="" onSubmit={(e) => e.preventDefault()} className='mx-4'>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
