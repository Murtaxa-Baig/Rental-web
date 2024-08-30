'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import document from '@/public/images/document.svg'
import AddDocumentModal from '../../modal/addDocumentModal/AddDocumentModal'

export default function Documents() {

    const [isShowModal, setIsShowModal] = useState(false)

    return (
        <>
            <div
                className='mt-8 p-5 border-2 border-dashed border-gray-500 md:w-[30%] h-[40vh] lg:w-[25%] sm:w-full flex flex-col justify-center items-center'
                onClick={() => { setIsShowModal(true) }}
            >
                <p className='font-bold text-gray-400'>Create New Document</p>
                <Image className='my-4' src={document} width={50} height={50} alt="Document Icon" />
            </div>
            {
                isShowModal &&
                <AddDocumentModal
                    isShowModal={isShowModal}
                    setIsShowModal={setIsShowModal}
                />
            }
        </>
    )
}
