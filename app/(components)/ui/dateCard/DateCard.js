import React from 'react'

export default function DateCard(props) {
    return (
        <>
            <div class="bg-white rounded-lg shadow-md p-4">
                <h1 className='text-center text-lg	text-blue-600 font-bold'>{props.date}</h1>
                <div className='flex items-center'>
                    <div className='w-[50%] text-center'>
                        <p className='font-bold'>Start</p>
                        <p>{props.start}</p>
                    </div>
                    <div className='w-[50%] text-center'>
                        <p className='font-bold'>End</p>
                        <p>{props.end}</p>
                    </div>
                </div>
            </div>

        </>
    )
}
