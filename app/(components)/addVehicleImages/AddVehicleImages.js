import React from 'react'
import img from '@/public/images/img.svg'
import trash from '@/public/images/trash.svg'
import plusIcon from '@/public/images/plusIcon.svg'
import Image from 'next/image'

export default function AddVehicleImages() {
    return (
        <>

            <form action="" onSubmit={(e) => e.preventDefault()}>
                <div className='flex items-center justify-start gap-4 mt-8 flex-col sm:flex-row'>
                    <button className='flex items-center justify-center border-[1px] w-full sm:w-[20%] border-blue-500 rounded-md font-bold text-blue-500 cursor-pointer p-2'>
                        <Image
                            src={img}
                            width={20}
                            height={20}
                            className='mr-2'
                            alt="Filter Icon"
                        />
                        Choose
                    </button>
                    <button className='flex items-center justify-center text-white w-full sm:w-[20%] bg-blue-500 rounded-md font-bold cursor-pointer p-2 mt-2 sm:mt-0'>
                        <Image
                            src={trash}
                            width={20}
                            height={20}
                            className='mr-2'
                            alt="Filter Icon"
                        />
                        Remove
                    </button>
                </div>

                <div
                    className='mt-8 p-5 border-2 border-dashed border-gray-500  h-[40vh] w-full flex flex-col justify-center items-center'
                >

                    <Image className='my-4' src={plusIcon} width={30} height={30} alt="Document Icon" />
                    <p className='font-bold text-gray-400'>Create New Document</p>
                    <label for="uploadPhoto" className='flex items-center justify-center border-[1px] w-full sm:w-[20%] border-blue-500 rounded-md font-bold text-blue-500 cursor-pointer p-2 mt-5'>
                        Upload Photo
                    </label>
                    <input type="file" accept="image/*" id='uploadPhoto' className='hidden' />
                </div>

                <div className='flex items-center justify-start gap-4 mt-8 flex-col sm:flex-row'>
                    <button className='flex items-center justify-center border-[1px] w-full sm:w-[20%] border-blue-500 rounded-md font-bold text-blue-500 cursor-pointer p-2'>
                        Cancel
                    </button>
                    <button type='submit' className='flex items-center justify-center text-white w-full sm:w-[20%] bg-blue-500 rounded-md font-bold cursor-pointer p-2 mt-2 sm:mt-0'>
                        Add Vehicle
                    </button>
                </div>
            </form>
        </>
    )
}
