import React from 'react'
import img from '@/public/images/img.svg'
import Image from 'next/image';

export default function AddDamageModal({ setShowModal }) {


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
                        <p className='font-bold text-gray-400 text-[20px]'>Add Damage</p>
                        <button onClick={closeModal} className='text-gray-500 p-2 text-[30px]'>✗</button>
                    </div>

                    <hr className='text-gray-500' />

                    <div className="overflow-y-auto flex-grow">
                        <form action="" onSubmit={(e) => e.preventDefault()} className='mx-4'>
                            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-8">
                                <div className="relative w-full md:w-[69%] mb-4 md:mb-0">
                                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                        Damage type
                                    </label>
                                    <select name="" id="" className='w-full p-2 text-gray-500 rounded-md border-[1px] border-gray-400 outline-none'>
                                        {
                                            ['Scratch', 'Dent', 'Clack', 'Clip'].map((item, index) => {
                                                return <option key={index} value={item}>{item}</option>
                                            }
                                            )
                                        }
                                    </select>
                                </div>
                                <div className="relative w-full md:w-[29%]">
                                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                        Degree
                                    </label>
                                    <select name="" id="" className='w-full p-2 text-gray-500 rounded-md border-[1px] border-gray-400 outline-none'>
                                        {
                                            ['Low', 'High'].map((item, index) => {
                                                return <option key={index} value={item}>{item}</option>
                                            }
                                            )
                                        }
                                    </select>
                                </div>
                            </div>

                            <div className="relative w-full mt-8">
                                <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                    Damage discription
                                </label>
                                <textarea
                                    className='w-full border-[1px] border-gray-300 rounded-md outline-none p-2 text-gray-500 '
                                    id=""
                                    name=""
                                    rows="4"
                                    cols="50"
                                />
                            </div>

                            <label for="addImages" className='flex items-center justify-center mt-2 w-full border-[1px] border-blue-500 rounded-md font-bold text-blue-500 cursor-pointer p-2'>
                                <Image
                                    src={img}
                                    width={20}
                                    height={20}
                                    className='mr-2'
                                    alt="Filter Icon"
                                />
                                Add images
                            </label>
                            <input type="file" accept="image/*" id='addImages' className='hidden' />

                            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-4">

                                <div className="w-full md:w-[49%]">
                                    <button type='submit' className='flex items-center justify-center text-white w-full bg-blue-500 rounded-md font-bold cursor-pointer p-2 mt-2 md:mt-0'>
                                        Save
                                    </button>
                                </div>
                                <div className="w-full md:w-[49%] mb-4 md:mb-0">
                                    <button
                                        onClick={closeModal}
                                        className='flex items-center justify-center border-[1px] w-full border-blue-500 rounded-md font-bold text-blue-500 cursor-pointer p-2'>
                                        Cancel
                                    </button>
                                </div>
                            </div>




                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
