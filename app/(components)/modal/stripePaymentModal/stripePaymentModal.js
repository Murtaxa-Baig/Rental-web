import React from 'react'
import Image from 'next/image';
import stripeModal from '@/public/images/stripeModal.png'
import card1 from '@/public/images/card1.svg'
import card2 from '@/public/images/card2.svg'
import card3 from '@/public/images/card3.svg'
import card4 from '@/public/images/card4.svg'
import { useState } from 'react';

export default function StripePaymentModal({ setStripeChecked ,GoogleHandleChange}) {
    const [isChecked, setIsChecked] = useState(false);

    const closeModal = () => {
        setStripeChecked(false);
    };


    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const handleConnect = ()=>{
        GoogleHandleChange()
        setStripeChecked(false)
    }


    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

            {/* Modal */}
            <div className="fixed inset-0 flex items-center justify-center">
                <div className="w-[50%] p-2 flex flex-col justify-between h-[80vh] rounded-lg bg-white shadow-lg">
                    <div className='h-14 w-full flex justify-between items-center px-3'>
                        <p className='font-bold text-gray-400 text-[20px]'>Fully integrated payment solution</p>
                        <button onClick={closeModal} className='text-gray-500 p-2 text-[30px]'>✗</button>
                    </div>

                    <div className="overflow-y-auto flex-grow">
                        <Image
                            src={stripeModal}
                            alt=''
                            className='mx-auto'
                        />
                        <div className='w-full flex justify-between items-center my-2 px-3'>
                            <div className='p-3 py-8 w-[49%] border-[1px] border-blue-400 rounded-lg'>
                                <Image
                                    src={card1}
                                    alt=''
                                    className='mx-auto my-2'
                                />
                                <p className='text-center text-gray-600'>Deposit pre-authorisation</p>
                            </div>
                            <div className='p-3 py-8 w-[49%] border-[1px] border-blue-400 rounded-lg'>
                                <Image
                                    src={card2}
                                    alt=''
                                    className='mx-auto my-2'
                                />
                                <p className='text-center text-gray-600'>Send Payment link & Deposit link</p>
                            </div>
                        </div>
                        <div className='w-full flex justify-between items-center my-2 px-3'>
                            <div className='p-3 py-8 w-[49%] border-[1px] border-blue-400 rounded-lg'>
                                <Image
                                    src={card3}
                                    alt=''
                                    className='mx-auto my-2'
                                />
                                <p className='text-center text-gray-600'>Manual withdrawal of money from the card</p>
                            </div>
                            <div className='p-3 py-8 w-[49%] border-[1px] border-blue-400 rounded-lg'>
                                <Image
                                    src={card4}
                                    alt=''
                                    className='mx-auto my-2'
                                />
                                <p className='text-center text-gray-600'>Full integration of payments into our system</p>
                            </div>
                        </div>
                        <p className='font-bold text-gray-600 my-3'>Benefit from:</p>
                        <ul className="list-disc ml-4 px-3">
                            <li className="text-sm text-gray-500">Convenient withdrawal of payments from credit cards</li>
                            <li className="text-sm text-gray-500">Secure linking of cards to client profiles</li>
                            <li className="text-sm text-gray-500">Ability to block security deposits</li>
                            <li className="text-sm text-gray-500">Direct deposit link integration within the system</li>
                            <li className="text-sm text-gray-500">Start to accept Amex, Visa, Mastercard, and other cards</li>
                        </ul>


                        <p className='font-bold text-gray-600 my-3'>Transaction-based pricing:</p>
                        <ul className="list-disc ml-4 px-3">
                            <li className="text-sm text-gray-500">Transaction-based pricing with no fixed or monthly fees</li>
                            <li className="text-sm text-gray-500">Full integration with the Top Rent App system</li>
                            <li className="text-sm text-gray-500">Stripe pricing +0.6% Application Fee</li>
                            <li className="text-sm text-gray-500">Efficient management of transactions and funds</li>
                            <li className="text-sm text-gray-500">Stripe’s pricing for other payment methods may vary per country</li>
                        </ul>

                        <div className='flex items-center my-8'>
                            <input type="checkbox" name="" id="checkbox" onChange={handleCheckboxChange} checked={isChecked} className='h-4 w-4 ' />
                            <label For="checkbox" className='text-gray-500 mx-2'>I want to enable the Stripe integration and agree to the 0.6% application fee</label>
                        </div>

                        <div className='flex items-center w-[95%] mx-auto gap-2 mb-5'>
                            <button onClick={closeModal} className='py-2 w-full px-6 flex justify-center items-center border-[1px] border-blue-400 text-blue-500 font-bold rounded-md'>
                                Cancel
                            </button>
                            <button onClick={handleConnect} className={`py-2 w-full px-6 flex justify-center items-center ${isChecked ? 'text-white bg-blue-500': 'text-gray-400 bg-gray-200'} font-bold rounded-md`}>
                                Connect with stripe
                            </button>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
