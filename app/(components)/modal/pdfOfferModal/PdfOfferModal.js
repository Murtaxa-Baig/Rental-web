import React from 'react'

export default function PdfOfferModal({ setPdfModal }) {
    const closeModal = () => {
        setPdfModal(false);
    };

    return (
        <>

            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"></div>

            {/* Modal */}
            <div className="fixed inset-0 z-20 flex items-center justify-center">
                <div className="w-[50%] p-3 h-[55vh] rounded-lg bg-white shadow-lg ">
                    {/* Header with Close Button */}
                    <div className='h-14 w-full flex justify-between items-center px-3'>
                        <p className='font-bold text-gray-400 text-[16px] text-center'>
                            Set start and end locations
                        </p>
                        <button onClick={closeModal} className='text-gray-500 p-2 text-[30px]'>✗</button>
                    </div>
                    <hr className='text-gray-400' />
                    <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-8 ">


                    </div>
                </div>
            </div>


        </>
    )
}
