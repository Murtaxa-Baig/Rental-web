import Image from 'next/image';
import React from 'react'
import camera from '@/public/images/camera.svg'

export default function AddExtraModal({ setShowModal }) {
    const array = ['English', 'Russian', 'Italian', 'German', 'French', 'Portuguese', 'Spanish', 'Polish', 'Chinese', 'Dutch', 'Czech']

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>

            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

            <div className="fixed inset-0 flex items-center justify-center z-10">
                <div className="w-[50%] p-2 flex flex-col justify-between h-[80vh] rounded-lg bg-white shadow-lg">
                    <div className='h-14 w-full flex justify-between items-center px-3'>
                        <p className='font-bold text-gray-400 text-[20px]'>Create Extra Service</p>
                        <button onClick={closeModal} className='text-gray-500 p-2 text-[30px]'>✗</button>
                    </div>
                    <hr className='text-gray-400 mb-6' />

                    <div className="overflow-y-auto flex-grow px-2">

                        <form action="" onSubmit={(e) => e.preventDefault()} className='px-5'>
                            <div className='flex items-center justify-between'>
                                <label for="image" className='w-[50px] h-[50px] rounded-full border-[1px] border-cyan-400 flex justify-center items-center'>
                                    <input id='image' type="file" accept="image/*" className='hidden' />
                                    <Image
                                        src={camera}
                                        className='w-6 h-6'
                                        alt=''
                                    />
                                </label>
                                <div className="relative w-full md:w-[30%]">
                                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                        Language
                                    </label>
                                    <select name="" id="" className='w-full p-2 text-gray-500 rounded-md border-[1px] border-gray-400 outline-none'>
                                        {
                                            array.map((item, index) => {
                                                return <option key={index} value={item}>{item}</option>
                                            }
                                            )
                                        }
                                    </select>
                                </div>
                            </div>

                            <div className="relative w-full my-8">
                                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none"
                                />
                            </div>

                            <hr className='text-gray-400 my-4' />


                            <div className="relative w-full my-8">
                                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                    Discription
                                </label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none"
                                />
                            </div>

                            <hr className='text-gray-400 my-4' />


                            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between my-8">
                                <div className="relative w-full md:w-[49%] mb-4 md:mb-0">
                                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                        Multiple
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="relative w-full md:w-[49%]">
                                    <div className="relative w-full md:w-[49%] mb-4 md:mb-0">
                                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                            Price
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>
                            </div>



                            <div className="relative w-full">
                                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                    Type
                                </label>
                                <select name="" id="" className='w-full p-2 text-gray-500 rounded-md border-[1px] border-gray-400 outline-none'>
                                    <option value="">Per day</option>
                                    <option value="">One time</option>
                                </select>
                            </div>

                            <div className='flex items-center w-full gap-2 my-8'>
                                <button onClick={closeModal} className='py-2 w-full px-6 flex justify-center items-center border-[1px] border-blue-400 text-blue-500 font-bold rounded-md'>
                                    Cancel
                                </button>
                                <button className='py-2 w-full px-6 flex justify-center items-center text-white bg-blue-500 font-bold rounded-md'>
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
