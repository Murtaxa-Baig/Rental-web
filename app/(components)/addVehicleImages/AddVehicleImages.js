import React from 'react';
import img from '@/public/images/img.svg';
import trash from '@/public/images/trash.svg';
import plusIcon from '@/public/images/plusIcon.svg';
import Image from 'next/image';

export default function AddVehicleImages({ handleChange, formData, handleRemoveImage }) {
    return (
        <>
            <div className='flex items-center justify-start gap-4 mt-8 flex-col sm:flex-row'>
                <label className='flex items-center justify-center border-[1px] w-full sm:w-[20%] border-blue-500 rounded-md font-bold text-blue-500 cursor-pointer p-2'>
                    <Image
                        src={img}
                        width={20}
                        height={20}
                        className='mr-2'
                        alt="Choose Icon"
                    />
                    Choose Images
                    <input
                        type="file"
                        name="uploaded_images"
                        accept="image/*"
                        multiple
                        onChange={handleChange}
                        className='hidden'
                    />
                </label>
            </div>

            <div className='mt-8 p-5 border-2 border-dashed border-gray-500 h-[40vh] w-full flex flex-col justify-center items-center'>
                {formData.images && formData.images.length > 0 ? (
                    <div className="grid grid-cols-8 gap-2">
                        {formData.images.map((image, index) => (
                            <div key={index} className="relative">
                                <img
                                    src={URL.createObjectURL(image)}
                                    alt={`Uploaded ${index}`}
                                    className="w-32 h-32 object-cover rounded-md"
                                />
                                <button
                                    type="button"
                                    onClick={() => handleRemoveImage(index)}
                                    className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full m-2"
                                >
                                    <Image src={trash} width={16} height={16} alt="Remove Icon" />
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <>
                        <Image className='my-4' src={plusIcon} width={30} height={30} alt="Document Icon" />
                        <p className='font-bold text-gray-400'>No Images Selected</p>
                    </>
                )}
            </div>
        </>
    );
}
