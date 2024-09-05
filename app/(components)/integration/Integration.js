'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import google from '@/public/images/calender.png'
import cargo from '@/public/images/cargo.png'
import stripe from '@/public/images/stripe.png'
import setting from '@/public/images/setting.svg'
import Switch from 'react-switch';
import StripePaymentModal from '../modal/stripePaymentModal/stripePaymentModal'

export default function Integration() {
    const [showSettings, setShowSettings] = useState(false)
    const [googleChecked, setGoogleChecked] = useState(false);
    const [carogChecked, setCarogChecked] = useState(false);
    const [stripeChecked, setStripeChecked] = useState(false);


    const GoogleHandleChange = (nextChecked) => {
        setGoogleChecked(nextChecked);
    };
    const CargoHandleChange = (nextChecked) => {
        setCarogChecked(nextChecked);
    };
    const StripeHandleChange = () => {
        setStripeChecked(true);
    };

    return (
        <>
            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between p-3">
                <div className=" w-full md:w-[49%] border-[1px] border-gray-300 rounded-md px-3">
                    <Image
                        src={google}
                        alt=''
                        className='mx-auto'
                    />
                    <p className='font-bold text-gray-500'>Google Calendar integration</p>
                    <p className='text-gray-500 text-sm'>
                        SynchronSynchronize your vehicle reservations with Google Calendar.
                        All your reservations that you will share with this app, will be automatically
                        managed in Google Calendar.
                    </p>
                    {
                        showSettings ? <></> :
                            <button
                                onClick={() => setShowSettings(true)}
                                className='w-12 h-12 rounded-full hover:bg-gray-200'>
                                <Image
                                    src={setting}
                                    alt=''
                                    className='m-3'
                                />
                            </button>
                    }

                    {
                        showSettings ? (<>
                            <div className='flex items-center my-3'>
                                <input type="checkbox" name="" id="depositAmount" className='h-4 w-4 ' />
                                <label For="depositAmount" className='text-gray-500 mx-2'>Show deposit amount</label>
                            </div>
                            <div className='flex items-center my-3'>
                                <input type="checkbox" name="" id="extraKmPrice" className='h-4 w-4 ' />
                                <label For="extraKmPrice" className='text-gray-500 mx-2'>Show extra km price</label>
                            </div>
                            <div className='flex items-center my-3'>
                                <input type="checkbox" name="" id="totalPrice" className='h-4 w-4 ' />
                                <label For="totalPrice" className='text-gray-500 mx-2'>Show total price</label>
                            </div>
                            <div className='flex items-center my-3'>
                                <input type="checkbox" name="" id="kmIncluded" className='h-4 w-4 ' />
                                <label For="kmIncluded" className='text-gray-500 mx-2'>Show km included</label>
                            </div>
                            <div className='flex items-center my-3'>
                                <input type="checkbox" name="" id="showCommission" className='h-4 w-4 ' />
                                <label For="showCommission" className='text-gray-500 mx-2'>Show commission</label>
                            </div>
                            <div className='flex items-center my-3'>
                                <input type="checkbox" name="" id="totalProfit" className='h-4 w-4 ' />
                                <label For="totalProfit" className='text-gray-500 mx-2'>Show total profit</label>
                            </div>
                            <div className='flex items-center my-3'>
                                <input type="checkbox" name="" id="depositDate" className='h-4 w-4 ' />
                                <label For="depositDate" className='text-gray-500 mx-2'>Show block deposit date</label>
                            </div>
                            <div className='flex items-center my-3'>
                                <input type="checkbox" name="" id="vehicleOwner" className='h-4 w-4 ' />
                                <label For="vehicleOwner" className='text-gray-500 mx-2'>Show vehicle owner</label>
                            </div>
                            <div className='flex items-center my-3'>
                                <input type="checkbox" name="" id="customerPartner" className='h-4 w-4 ' />
                                <label For="customerPartner" className='text-gray-500 mx-2'>Show customer partner</label>
                            </div>
                            <div className='flex items-center my-3'>
                                <input type="checkbox" name="" id="showPayments" className='h-4 w-4 ' />
                                <label For="showPayments" className='text-gray-500 mx-2'>Show payments</label>
                            </div>
                            <div className='flex items-center my-3'>
                                <input type="checkbox" name="" id="nameInTitle" className='h-4 w-4 ' />
                                <label For="nameInTitle" className='text-gray-500 mx-2'>Show partner{`'`}s name in title</label>
                            </div>
                            <div className='flex justify-end'>
                                <button
                                    onClick={() => setShowSettings(false)}
                                    className='py-1 px-2 border-[1px] border-blue-400 text-blue-500 font-bold rounded-md mb-3'>
                                    Save setting
                                </button>

                            </div>
                        </>) : <></>
                    }

                    <div className='flex items-center gap-2'>
                        <Switch
                            onChange={GoogleHandleChange}
                            checked={googleChecked}
                            offColor="#888"
                            onColor="#3464eb"
                            height={20}
                            width={40}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            className='mx-2'
                        />
                        <p className='text-gray-600'>
                            If you turn on this integration, you will be redirected to Google
                            consent screen where you will be required to give permission.
                            Integration can take a while (a few seconds for each active reservation).
                        </p>
                    </div>
                </div>



                <div className="w-full md:w-[49%] border-[1px] border-gray-300 rounded-md px-3">
                    <Image
                        src={cargo}
                        alt=''
                        className='mx-auto'
                    />
                    <p className='font-bold text-gray-500'>Ca.R.G.O.S. integration</p>
                    <p className='text-gray-500 text-sm'>
                        Recent regulatory provisions have introduced provisions on the subject
                        of vehicle rental contracts, pursuant to art. 54 of Legislative Decree
                        30 April 1992, n.285, providing for the obligation, for the operators
                        of rental companies of vehicles without driver, to communicate to the Police
                        Headquarters the identification data shown on the identity document exhibited
                        by the person requesting the rental, and the data of the relative contract.
                    </p>
                    <div className='flex items-center gap-2  my-3'>
                        <Switch
                            onChange={CargoHandleChange}
                            checked={carogChecked}
                            offColor="#888"
                            onColor="#3464eb"
                            height={20}
                            width={40}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            className='mx-2'
                        />
                        <p className='text-gray-600'>
                            If you turn on this integration, you will be redirected to Google
                            consent screen where you will be required to give permission.
                            Integration can take a while (a few seconds for each active reservation).
                        </p>
                    </div>
                </div>
            </div>



            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between p-3">
                <div className=" w-full md:w-[49%] border-[1px] border-gray-300 rounded-md px-3">
                    <Image
                        src={stripe}
                        alt=''
                        className='mx-auto'
                    />
                    <p className='font-bold text-gray-500'>Stripe integration (Beta Version)</p>
                    <p className='text-gray-500 text-sm'>
                        Stripe is a secure online payment platform that facilitates seamless transactions
                        for end users. It provides a streamlined checkout process and accepts various card
                        payment methods on our platform. With advanced encryption and fraud detection mechanisms,
                        Stripe ensures the protection of data while delivering a consistent and reliable digital
                        payment experience globally. Additionally, it allows you to preauthorize security deposits,
                        withdraw funds from cards, and send secure payment links.
                    </p>
                    <div className='flex items-center gap-2  my-3'>
                        <Switch
                            onChange={StripeHandleChange}
                            checked={stripeChecked}
                            offColor="#888"
                            onColor="#3464eb"
                            height={20}
                            width={40}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            className='mx-2'
                        />
                        <p className='text-gray-600'>
                            While is turned on this integration, you will have ability to make transactions
                            on your customers credit cards.
                        </p>
                    </div>
                    {
                        stripeChecked &&
                        <StripePaymentModal
                            setStripeChecked={setStripeChecked}
                            GoogleHandleChange={GoogleHandleChange}
                        />
                    }
                </div>
            </div>
        </>
    )
}
