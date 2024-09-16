import Image from 'next/image'
import React, { useState } from 'react'
import profile from '@/public/images/profile.jpg';
import edit from '@/public/images/edit.svg';
import add from '@/public/images/add.svg';
import AddExtraModal from '../modal/addExtraModal/AddExtraModal';

export default function ExtraServices({ setActiveTab }) {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <p className='font-bold text-gray-500'>Extra Services</p>

            <div className="flex flex-wrap items-center w-full justify-between">
                <div className="flex items-center p-2 w-full sm:w-[49%] mb-4">
                    <div className='w-[70%] flex'>
                        <input type="checkbox" name="" id="" className='mr-2' />
                        <div className='w-[80%]'>
                            <p className='text-gray-600 font-bold'>Death Calculator</p>
                            <p className='text-[12px] text-gray-500'>text</p>
                            <div className='flex items-center justify-between mt-3 w-full'>
                                <div>
                                    <p className='text-gray-600 font-bold'>0€</p>
                                    <p className='text-gray-400 text-[10px]'>All Period</p>
                                </div>
                                <div>
                                    <p className='text-gray-600 font-bold'>0€</p>
                                    <p className='text-gray-400 text-[10px]'>Per Day</p>
                                </div>
                                <div className='h-12 flex justify-center items-center w-12 rounded-full bg-slate-200'>
                                    <Image
                                        src={edit}
                                        height={25}
                                        width={25}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='w-[20%]'>
                        <Image
                            src={profile}
                            width={75}
                            height={75}
                            className='rounded-full'
                            alt=''
                        />

                    </div>
                </div>
                <div className="flex items-center p-2 w-full sm:w-[49%] mb-4">
                    <div className='w-[70%] flex'>
                        <Image
                            src={add}
                            height={25}
                            width={25}
                            alt=''
                            className='mx-2'
                        />
                        <div className='w-[80%]'>
                            <button
                                onClick={() => setShowModal(true)}
                                className='text-blue-600 font-bold'>Another service</button>
                            <p className='text-[12px] text-gray-500'>Service description</p>
                        </div>
                        {showModal &&
                            <AddExtraModal setShowModal={setShowModal} />
                        }
                    </div>
                    <div className='w-[20%]'>
                        <Image
                            src={profile}
                            width={75}
                            height={75}
                            className='rounded-full'
                            alt=''
                        />

                    </div>
                </div>
            </div>


            <div className='flex justify-end'>
                <button
                    onClick={() => { setActiveTab('Billing') }}
                    className='w-[30%] p-2 mt-8 rounded bg-blue-500 text-white font-bold'
                >
                    Go to Billig tab
                </button>

            </div>
        </>
    )
}
