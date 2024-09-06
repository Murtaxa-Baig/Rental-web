import React from 'react'

export default function CongratulationsModal({ setCongratulationsModal, title, disc }) {
    const closeModal = () => {
        setCongratulationsModal(false);
    };


    return (
        <>
            <div className="fixed inset-0"></div>

            {/* Modal */}
            <div className="fixed inset-0 flex items-center justify-center">
                <div className="w-[50%] p-2 flex flex-col justify-between h-[80vh] rounded-lg bg-white shadow-lg">
                    <div className='h-14 w-full flex justify-between items-center px-3'>
                        <p className='flex items-center'><span className='font-bold text-gray-600 text-[20px] mx-3'>{title} </span> <span className='font-bold text-gray-600'>Congratulations in {disc}</span></p>
                        <button onClick={closeModal} className='text-gray-500 p-2 text-[30px]'>✗</button>
                    </div>
                    <hr className='text-gray-400' />

                    <div className="overflow-y-auto flex-grow">
                        <textarea
                            placeholder='Enter the title of the email here'
                            className='w-full  outline-none p-2 text-gray-500'
                            id=""
                            name=""
                            rows="2"
                            cols="50"
                        />

                        <hr className='text-gray-400' />
                        <textarea
                            placeholder='Enter the text of the email here'
                            className='w-full  outline-none p-2 text-gray-500'
                            id=""
                            name=""
                            rows="15"
                            cols="50"
                        />

                        <div className='flex items-center justify-end w-full px-3 gap-2 mt-8'>
                            <button onClick={closeModal} className='py-2 px-6 flex justify-center items-center border-[1px] border-blue-400 text-blue-500 font-bold rounded-md'>
                                Cancel
                            </button>
                            <button className='py-2 px-6 flex justify-center items-center text-white bg-blue-500 font-bold rounded-md'>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
