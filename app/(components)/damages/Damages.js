'use client'
import Image from 'next/image'
import React from 'react'
import Switch from 'react-switch';
import interior from '@/public/images/interior.svg'
import exterior from '@/public/images/exterior.svg'
import { useState } from 'react';
import AddDamageModal from '../modal/addDamageModal/AddDamageModal';

export default function Damages({ handleChange, formData }) {

    const [checked, setChecked] = useState(false);
    const [showModal,setShowModal] = useState(false)


    const handleChanges = (nextChecked) => {
        setChecked(nextChecked);
    };

    return (
        <>
            <div className="md:w-[40%] sm:w-full flex items-center mb-10 justify-center">
                <p className={`${checked ? 'text-gray-500' : 'font-bold text-gray-600'}`}>Exterior</p>
                <Switch
                    onChange={handleChanges}
                    checked={checked}
                    offColor="#888"
                    onColor="#3464eb"
                    height={20}
                    width={40}
                    className="mx-2"
                    uncheckedIcon={false}
                    checkedIcon={false}
                />
                <p className={`${!checked ? 'text-gray-500' : 'font-bold text-gray-600'}`}>Interior</p>
            </div>
            <hr className="text-gray-500" />
            <div className="w-full flex flex-col md:flex-row items-center">
                <div className="w-full md:w-[40%] text-center mb-4 md:mb-0">
                    <Image
                        src={checked ? interior : exterior}
                        alt="Document Icon"
                        className="mx-auto "
                        title="Select Damage part"
                        onClick={()=>setShowModal(true)}
                    />
                </div>
                <div className="w-full md:w-[60%] sm:h-[40vh] md:h-[80vh] mt-4 md:mt-0 flex justify-center items-center">
                    <p className="font-bold text-gray-600 text-center">Tap on the vehicle{`'`}s part to add damage</p>
                </div>
            </div>
            {
                showModal && <AddDamageModal
                setShowModal={setShowModal}
                />
            }

        </>
    )
}
