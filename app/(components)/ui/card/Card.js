import React from 'react'
import Image from 'next/image'
export default function Card(props) {
    return (
        <div>
            <div className='flex items-center'>
                <Image
                    src={props.img}
                    height={35}
                    width={35}
                    className='text-blue-600'
                    alt="Profile Picture"
                />
                <div className='ml-3'>
                    <p className='font-bold text-gray-500'>{props.title}</p>
                    <p className='text-gray-500'>{props.text}</p>
                </div>
            </div>
        </div>
    )
}
