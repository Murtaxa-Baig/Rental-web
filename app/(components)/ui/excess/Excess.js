import Image from 'next/image';
import React from 'react';
import questionMark from '@/public/images/questionMark.svg';
import secure from '@/public/images/secure.svg';

export default function Excess({ formData, handleChange }) {
    return (
        <>
            <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {['excess', 'excess_percentage', 'excess_theft', 'excess_kasco', 'excess_damage'].map((item, index) => {
                    const label = item
                        .replace('_', ' ')
                        .replace(/\b\w/g, char => char.toUpperCase())
                        .replace(/^Excess/, 'Excess');

                    return (
                        <div className="relative w-full mb-4 md:mb-0" key={index}>
                            <label className="absolute -top-2 left-3 bg-white px-1 text-[12px] text-gray-600 z-10">
                                {label}
                            </label>
                            <div className='relative'>
                                <input
                                    type="text"
                                    name={item} 
                                    value={formData[item] || ''}
                                    onChange={handleChange} 
                                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 pl-8 pr-8 focus:outline-none"
                                />
                                <div className='absolute left-2 top-1/2 transform -translate-y-1/2'>
                                    <Image src={questionMark} width={16} height={16} alt="Question mark" />
                                </div>
                                <div className='absolute right-2 top-1/2 transform -translate-y-1/2'>
                                    <Image src={secure} width={16} height={16} alt="Secure" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
