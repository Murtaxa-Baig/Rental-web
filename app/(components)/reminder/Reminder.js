import React from 'react'
import { useState } from 'react'
import LanguageModal from '../modal/languageModal/LanguageModal'

export default function Reminder() {
    const [birthdayReminder, setBirthdayReminder] = useState(false)
    const [automaticBirthday, setAutomaticBirthday] = useState(false)
    const [feedbackToClient, setFeedbackToClient] = useState(false)
    const [showLanguageModal, setShowLanguageModal] = useState(false)


    const BirthdayReminderTrue = () => { setBirthdayReminder(true) }
    const BirthdayReminderFalse = () => { setBirthdayReminder(false) }

    const AutomaticBirthdayTrue = () => { setAutomaticBirthday(true) }
    const AutomaticBirthdayFalse = () => { setAutomaticBirthday(false) }

    const FeedbackToClientTrue = () => { setFeedbackToClient(true) }
    const FeedbackToClientFalse = () => { setFeedbackToClient(false) }


    return (
        <>
            <div className='p-2'>

                <p className='font-semibold text-2xl text-gray-700 mb-5'>Reminder</p>

                <div className='w-full flex flex-col md:flex-row items-start md:items-center justify-between mt-5'>
                    <div className='w-full md:w-[70%] mb-2 md:mb-0'>
                        <p className='text-sm text-gray-600'>Birthday reminder for the operator</p>
                        <p className='text-[12px] text-gray-400'>Remind the operator about the client{`'`}s birthday by email</p>
                    </div>
                    <div className='flex items-center w-full md:w-[25%]'>
                        <button
                            onClick={BirthdayReminderTrue}
                            className={`w-1/2 border-l border-t border-b font-bold ${birthdayReminder ? 'border-green-500 bg-green-100' : 'border-gray-300'} text-blue-500 rounded-sm px-4 py-2`}>
                            Yes
                        </button>
                        <button
                            onClick={BirthdayReminderFalse}
                            className={`w-1/2 border-r border-t border-b font-bold ${birthdayReminder ? 'border-gray-300' : 'border-red-500 bg-red-100'} text-blue-500 rounded-sm px-4 py-2`}>
                            No
                        </button>
                    </div>
                </div>

                <hr className='text-gray-400 my-5' />



                <div className='w-full flex flex-col md:flex-row items-start md:items-center justify-between'>
                    <div className='w-full md:w-[70%] mb-2 md:mb-0'>
                        <p className='text-sm text-gray-600'>Automatic birthday greetings</p>
                        <p className='text-[12px] text-gray-400'>Congratulations on the template will be automatically sent to e-mail</p>
                    </div>
                    <div className='flex items-center w-full md:w-[25%]'>
                        <button
                            onClick={AutomaticBirthdayTrue}
                            className={`w-1/2 border-l border-t border-b font-bold ${automaticBirthday ? 'border-green-500 bg-green-100' : 'border-gray-300'} text-blue-500 rounded-sm px-4 py-2`}>
                            Yes
                        </button>
                        <button
                            onClick={AutomaticBirthdayFalse}
                            className={`w-1/2 border-r border-t border-b font-bold ${automaticBirthday ? 'border-gray-300' : 'border-red-500 bg-red-100'} text-blue-500 rounded-sm px-4 py-2`}>
                            No
                        </button>
                    </div>
                </div>

                <hr className='text-gray-400 my-5' />

                <div className='w-full flex flex-col md:flex-row items-start md:items-center justify-between'>
                    <div className='w-full md:w-[70%] mb-2 md:mb-0'>
                        <p className='text-sm text-gray-600'>Send congratulations in advance</p>
                        <p className='text-[12px] text-gray-400'>Sending an automatic greeting in a few days (0 - the message will be sent on the birthday)</p>
                    </div>
                    <div className='relative flex items-center w-full md:w-[25%]'>
                        <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                            Days
                        </label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                    </div>
                </div>


                <div className='flex justify-between items-center my-6'>
                    <p className='text-gray-600 font-bold'>Greeting Templates</p>
                    <button
                        onClick={() => setShowLanguageModal(true)}
                        className='py-2 font-bold px-3 text-white bg-green-700 rounded-md '>
                        Create +
                    </button>
                </div>
                {
                    showLanguageModal && <LanguageModal
                        setShowLanguageModal={setShowLanguageModal}
                    />
                }

                <p className='text-gray-600 font-bold mt-32 mb-8'>Request for feedback</p>
                <div className='w-full flex flex-col md:flex-row items-start md:items-center justify-between'>
                    <div className='w-full md:w-[70%] mb-2 md:mb-0'>
                        <p className='text-sm text-gray-600'>Send a request for feedback to the client</p>
                        <p className='text-[12px] text-gray-400'>Congratulations on the template will be automatically sent to e-mail</p>
                    </div>
                    <div className='flex items-center w-full md:w-[25%]'>
                        <button
                            onClick={FeedbackToClientTrue}
                            className={`w-1/2 border-l border-t border-b font-bold ${feedbackToClient ? 'border-green-500 bg-green-100' : 'border-gray-300'} text-blue-500 rounded-sm px-4 py-2`}>
                            Yes
                        </button>
                        <button
                            onClick={FeedbackToClientFalse}
                            className={`w-1/2 border-r border-t border-b font-bold ${feedbackToClient ? 'border-gray-300' : 'border-red-500 bg-red-100'} text-blue-500 rounded-sm px-4 py-2`}>
                            No
                        </button>
                    </div>
                </div>

                <hr className='text-gray-400 my-5' />


                <div className='w-full flex flex-col md:flex-row items-start md:items-center justify-between my-4'>
                    <div className='w-full md:w-[70%] mb-2 md:mb-0'>
                        <p className='text-sm text-gray-600'>When to send an email</p>
                        <p className='text-[12px] text-gray-400'>Choose the time frame in which the email will be sent</p>
                    </div>
                    <div className='w-full md:w-[25%]'>
                        <select name="" id="" className='w-full border-[1px] border-gray-400 rounded-sm h-14 px-2'>
                            <option value=""></option>
                            <option value="">Rent ended</option>
                            <option value="">Rent started</option>
                        </select>
                    </div>
                </div>





                <div className='w-full flex flex-col md:flex-row items-start md:items-center justify-between my-4'>
                    <div className='w-full md:w-[70%] mb-2 md:mb-0'>
                        <p className='text-sm text-gray-600'>Link to collecting reviews</p>
                        <p className='text-[12px] text-gray-400'>Where to direct the client from the letter so that he leaves a review. For example, specify a link to Google Maps</p>
                    </div>
                    <div className='w-full md:w-[25%]'>
                        <input type='text' className='w-full border-[1px] border-gray-400 rounded-sm h-14 px-2 outline-none' />
                    </div>
                </div>



                <div className='flex justify-between items-center my-6'>
                    <p className='text-gray-600 font-bold'>Letter Templates</p>
                    <button
                        onClick={() => setShowLanguageModal(true)}
                        className='py-2 font-bold px-3 text-white bg-green-700 rounded-md '>
                        Create +
                    </button>
                </div>
                {
                    showLanguageModal && <LanguageModal
                        setShowLanguageModal={setShowLanguageModal}
                    />
                }











            </div>
        </>
    )
}
