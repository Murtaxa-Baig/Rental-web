import React from 'react'
import edit from '@/public/images/edit.svg';
import Image from 'next/image';

export default function Billing() {

    const rentInfo = [
        {
            title: 'Delivery price',
            disc: 'Delivery price will be added to total price',
            price: '€0.00'
        },
        {
            title: 'Deposit',
            disc: 'Real security deposit that the client pays for this rental',
            price: '€0.00'
        },
        {
            title: 'Excess',
            disc: 'Maximum responsibility of the customer in case of damage, theft or fire of the vehicle',
            price: '€0.00'
        },
        {
            title: 'KMs included',
            disc: 'KMs included in the price',
            price: '150'
        },
        {
            title: 'KMs extra price',
            disc: 'Price of each extra km over those included in the contract',
            price: '€0.00'
        },
    ]



    const paymentDetails = [
        {
            title: 'Price per day',
            disc: 'You can change predefined daily prices in the vehicle options or directly here',
            price: '€0.00'
        },
        {
            title: 'Agency commission',
            disc: 'Commission due to the partner, tour operator or agency providing the service.',
            price: '€0.00'
        },
        {
            title: 'Expenses',
            disc: 'Expenses for the suppliers car rental, transportation or any other expenses. (In total)',
            price: '€0.00'
        },
        {
            title: 'Total price',
            disc: 'Total rental price agreed with the customer',
            price: '150'
        },
        {
            title: 'Total profit',
            disc: 'Corporate income from this rental',
            price: '€0.00'
        },
    ]


    return (
        <>
            <div className="flex flex-wrap items-center w-full justify-between">
                <div className="p-2 w-full sm:w-[49%] mb-4">
                    <p className='text-gray-600 font-bold my-5'>RENT INFO</p>
                    {
                        rentInfo.map((item, index) => {
                            return (
                                <>
                                    <div key={index} className='flex items-center justify-between'>
                                        <div className='w-[70%]'>
                                            <p className='text-gray-600 font-semibold text-sm'>{item.title}</p>
                                            <p className='text-gray-500 font-semibold text-xs my-2'>{item.disc}</p>
                                        </div>
                                        <div className='w-[25%] flex items-center justify-between'>
                                            <p className='font-bold text-gray-600'>{item.price}</p>
                                            <div className='h-8 flex justify-center items-center w-8 rounded-full bg-slate-200'>
                                                <Image
                                                    src={edit}
                                                    height={25}
                                                    width={25}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <hr className='text-gray-500 my-3' />
                                </>
                            )
                        })
                    }
                </div>
                <div className="p-2 w-full sm:w-[49%] mb-4">
                    <p className='text-gray-600 font-bold my-5'>Payment details</p>
                    {
                        paymentDetails.map((item, index) => {
                            return (
                                <>
                                    <div key={index} className='flex items-center justify-between'>
                                        <div className='w-[70%]'>
                                            <p className='text-gray-600 font-semibold text-sm'>{item.title}</p>
                                            <p className='text-gray-500 font-semibold text-xs my-2'>{item.disc}</p>
                                        </div>
                                        <div className='w-[25%] flex items-center justify-between'>
                                            <p className='font-bold text-gray-600'>{item.price}</p>
                                            <div className='h-8 flex justify-center items-center w-8 rounded-full bg-slate-200'>
                                                <Image
                                                    src={edit}
                                                    height={25}
                                                    width={25}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <hr className='text-gray-500 my-3' />
                                </>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}
