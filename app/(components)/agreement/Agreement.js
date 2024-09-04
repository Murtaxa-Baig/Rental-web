'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import classic1 from '@/public/images/classic1.png'
import classic2 from '@/public/images/classic2.png'
import classic3 from '@/public/images/classic3.png'
import oneimg1 from '@/public/images/oneimg1.png'
import oneimg2 from '@/public/images/oneimg2.png'
import oneimg3 from '@/public/images/oneimg3.png'
import tickCircle from '@/public/images/tickCircle.svg'
import document from '@/public/images/document.svg'

export default function Agreement() {
    const [selectedValue, setSelectedValue] = useState('');
    const [editorContent, setEditorContent] = useState(`
        <h2 className='text-center my-5'>1. Your contract with us.</h2>
        <p>
            When you sign the front page of this agreement, you accept the conditions
            set out In this agreement. Please read carefully. If there Is anything
            you do not understand, ask a staff member to explain it. {'companyName'}
            Is acting as a rental company with the vehicle of its property only, in all
            other cases, the agreement Is meant as a brokerage service where {companyName}
            stands as an Intermediary. In any case, the terms and conditions as well as the
            responsibility are set by this agreement between {companyName} and the client
            that signs the agreement.
        </p>

        <h2 className='text-center my-5'>2. Rental period.</h2>
        <p>
            You will have the vehicle {vehicleName} for the period shown in the agreement.
            If you do not bring back the vehicle on time, you will be breaking the conditions
            of this agreement. We can charge you for every day or part of the day you have the
            vehicle after you should have returned it to us. We have 2 hours tolerance for delays,
            after this time you will be charged an extra day, and we will charge also for possible
            following days until we get the vehicle back.
            If for any personal reason, you breach our agreement, not caused by lack of service by
            {companyName} or {partnerName}, you can't ask for any refund because the car is booked
            for you and we can't rent it to someone else.
        </p>
        
        <h2 className='text-center my-5'>3. Client responsibilities.</h2>
        <ol>
        <li>You must inspect the vehicle and any accessories we provide before you take the vehicle.</li>
        <li>You must look after the vehicle, any accessories and the keys or other locking device for the 
        vehicle. You must always lock the vehicle when you are not using it, and use any security device which
         is fitted or which we supply. You must always protect the vehicle against weather conditions which
          could cause damage. You must make sure that you use the correct type of fuel and fluids in the
           vehicle.</li>
        <li>You are responsible for any damage to the vehicle, including damage caused by hitting low-level
         objects such as bridges or low-hanging tree branches. You will have to pay our reasonable costs for 
         bringing the vehicle back to the condition stated in the pre-rental inspection report (up to the 
         maximum liability indicated as deductible amount). This could include the cost of any damage inside 
         and outside the  vehicle, cleaning costs if the vehicle is very dirty, and replacing any items or
          accessories.</li>
        <li>You must not sell, rent or get rid of the vehicle or any of its parts. You must not
         give or try to give anyone the legal rights to the vehicle or
          transfer legal ownership. You must not let anyone repair the vehicle without our permission.
           If we do permit you, we will only give you a refund if you have a receipt for the work we have permitted
            you for.</li>
        <li>You must let us know as soon as you become aware of a fault with the vehicle,
         or if the vehicle is stolen or involved in an accident.</li>
        <li>If we have agreed to deliver or collect the vehicle at an address you give us, you will be responsible
         for the vehicle from the time we deliver it, or until we coiled it.</li>
        </ol>


        <h2 className='text-center my-5'>4. Owner company responsibilities.</h2>
        <ol>
        <li>We will identify and tell you about any existing damage to the vehicle before you sign this agreement.</li>
        <li>We have maintained the vehicle to at least the manufacturer's recommended standard. The vehicle Is
         roadworthy and suitable for you to use at the start of the rental period. We are not responsible for any
          loss which we or you could not have predicted, such as loss of profits or loss of opportunity (for example
           not being able to go to a business meeting).</li>
           </ol>


        <h2 className='text-center my-5'>5. Property.</h2>
        <p>You are responsible for removing your personal belongings from the 
        vehicle at the end of the rental period, as we are not responsible for 
        any items you leave in the vehicle. If you do leave items in the vehicle,
         we may agree to keep them for you and send It to you. We may charge you the shipping costs.</p>


         
        <h2 className='text-center my-5'>6. Conditions for using the vehicle.</h2>
        <ol>
        <li>Only you, and any driver named on the front page, or anyone we 
        have given written permission to, can drive the vehicle. Anyone driving
         the vehicle must have a full driving license which is valid in the European 
         Economic Area for the type of vehicle you are renting.</li>
         <li>You must not rent the vehicle to anyone else
          unless we have a written agreement that allows that. You must also not 
          use the vehicle or let someone else use It:</li>
          </ol>
          <ul>
          <li>for any illegal purposes or In a way which would cause nuisance</li>
          <li>to carry passengers for a fee (except for minibuses which you have a valid operator's license for)</li>
          <li>for driving lessons;</li>
          <li>to tow or push a vehicle, trailer or other objects, without our written permission;</li>
          <li>for racing, pacemaking, or to test the vehicle's reliability or speed;</li>
          <li>off roads or on roads unsuitable for the vehicle;</li>
          <li>the drier has been drinking alcohol or taking drugs;</li>
          <li>outside or i.he Insurance Green card area;</li>
          <li>if it is loaded beyond the manufacturer's maximum weight recommendations;</li>
          <li>to carry unsecured loads;</li>
          <li>to carry more passengers than the vehicle was manufactured to legally carry;</li>
          <li>if the driver does not have a valid operator's license (if it Is a goods vehicle or a minibus)./li>
          </ul>



          
        <h2 className='text-center my-5'>7. Charges.</h2>
        <p className='mb-5'>Our prices are discussed and agreed upon mutually, 
        all charges Include VAT. You will be responsible for paying the following charges:</p>
        <ol>
        <li>The rental and any other charges we work out according to this agreement.</li>
        <li>Any charge for loss or damage resulting from you not keeping to your 
        responsibilities, as set out in section 3 (above).</li>
        <li>A refuelling service charge if you did not return the vehicle to us 
        with the agreed amount of fuel (same as delivery). The charge will be based on
         considering 2.5€ per each lt. </li>
        <li>All charges and legal costs for any congestion charge, road-traffic offence 
            or parking offence, or any other offence involving the rental vehicle, including
            costs from the vehicle being clamped, seized or towed away. You are responsible
            for paying the appropriate authority or company for any charges and costs if and
            when they ask for these payments. You will also be responsible for paying our reasonable
            administration charges for dealing with these matters.</li>
        <li>The reasonable cost of repairing any damage to the vehicle which was not
            noted at the start of the agreement, whether you were at fault or not (depending 
            on section 4). You will also be responsible for paying the full deductible amount
            in case the vehicle is stolen or written off, depending on the insurance clause 
            (as set out in section 8). You will also be responsible for paying our administration
            charges, for dealing with this matter. Should we consider the damage to be caused by
            gross negligence or deliberate misuse then we reserve the right to recharge to cost of
            repairs in full regardless of the insurance cover that has been taken out, it fuel 
            contamination. Any call out for a customer-induced fault, (e.g. a call out to change 
            a punctured tyre) could lead to additional charges being applied to the rental agreement.</li>
        <li>A loss-of-income charge, when we demand it, if we cannot rent out the vehicle because 
            it needs to be repaired, if it is a write-off (It cannot be repaired), or if it has
            been stolen and we are waiting to receive:</li>
        </ol>
        <ul>
            <li>full payment of the vehicle's value.</li>
            <li>Any recovery charges arising from the police, or any other public 
                organization (or their agent) who has seized the vehicle. You will also 
                have to pay us a loss-of-income charge while we cannot rent out the vehicle.</li>
            <li>Any rates for a change of delivery and collection places of the vehicle,
                a charge for returning the vehicle later than 2 hours as agreed.</li>
            <li>You are responsible for any loss or damage to additional 
                equipment hired at time of rental Including but not limited to 
                satellite navigation equipment, baby seats etc. You are 
                responsible for all charges, even if you have asked someone 
                else to be responsible for them.</li>
        </ul>




        
        <h2 className='text-center my-5'>8. Insurance.</h2>
        <p>By signing the agreement on the front page, 
            you are accepting the conditions of our insurance policy, The car is 
            insured with kasko insurance, having a deductible not covered by insurance, 
            this will be the amount up to your responsibility. We reserve the right to 
            ask for a further refund in case of driving under alcohol or drug effects, 
            by racing on the racetrack or any other clear and proven misuse of the car 
            (we need to provide clear proof, a suspect misuse is not sufficient). The 
            client undertakes to park the vehicle in a suitable, locked, and where the 
            vehicle will be equipped with the alarm inserted, otherwise, the damage potential 
            is borne by the client himself.In the event of an accident if the damage was done by another 
            car and insurance company, it is expressed with the judgment where the lessor company 
            does not have to pay anything, even the customer at this point is freed from any economic 
            responsibility. Until the time of judgment, the security deposit is retained by the company.
            For the avoidance of doubt the definition of the word judgement used in the sentence above 
            will mean a final written decision made by either the insurance company representing the 
            car hire company, {companyName}, or a court.</p>



            
        <h2 className='text-center my-5'>9. What to do if you have an accident or the vehicle is stolen.</h2>
        <p>If you are involved In an accident, you must not admit that you are responsible. You should 
            describe the situation as fully as possible when you are asked to do so by the police and us. 
            You should get the names and addresses of everyone involved, including witnesses. You should 
            also: make sure the vehicle is secure; tell the police straight away if anyone is injured or 
            if there is a disagreement over who is responsible; and, contact us straight away. You must then 
            fill in our accident report form and provide us a copy, If the vehicle has been stolen, you must 
            tell us as soon as possible and confirm this in writing as soon as reasonably possible, You or any 
            authorized drivers will also need to:</p>
            <ul>
            <li>help us and our insurers in any legal proceedings, 
                including allowing us to take legal action in your name and defending any legal 
                action taken against you; </li>
            <li>give us back all keys and report the theft or loss to the 
                police as soon as reasonably possible.</li>
            </ul>



            
        <h2 className='text-center my-5'>10. Data protection.</h2>
        <p>By entering into this agreement you agree that we can process and store your 
            personal information In connection with this agreement. We will use your 
            information to analyze statistics, for market research, credit control and to 
            protect our assets. You agree that if you break the terms of this agreement we can 
            pass your personal information to credit reference agencies, debt collectors, the 
            police or any other relevant organization.</p>



            
        <h2 className='text-center my-5'>11. Ending this agreement.</h2>
        <ol>
        <li>We will end this agreement if we find out that your belongings have been 
            taken away from you to pay off your debts, or a receiving order has been made 
            against you. We may end this agreement if you do not meet its main conditions.</li>
        <li>If you are a company, we will end this agreement if: you go into liquidation; you call 
            a meeting of creditors; we find out that your goods have been taken away from you until you 
            pay off your debts, or you do not meet any of the conditions of this agreement.</li>
        <li>If we end this agreement it will not affect our right to receive any amount you owe 
            us under the conditions of this agreement. We can also claim reasonable costs from you 
            If you do not meet the main conditions of this agreement. We can repossess the vehicle 
            and charge you a reasonable amount for doing so.</li>
        </ol>




        
        <h2 className='text-center my-5'>12. The law.</h2>
        <p>We aim to deal with all disagreements fairly and calmly. If we cannot deal with a 
            disagreement, we may take the matter to the German Court following the swiss 
            legal procedures. This agreement is governed by german laws. This agreement 
            contains all the conditions to which we have agreed and replaces any written 
            or verbal agreement.</p>



    `);

    const array = ['English version', 'Russian version', 'Italian version', 'German version', 'French version', 'Portuguese version', 'Spanish version', 'Polish version', 'Chinese version', 'Dutch version', 'Czech version']

    const handleEditorChange = (content, editor) => {
        setEditorContent(content);
    };

    return (
        <>
            <div className='flex flex-col md:flex-row items-center p-3'>
                <div className='w-full text-center md:text-left md:w-[30%]'>
                    <p className='font-bold text-gray-500 text-sm'>Agreement types</p>
                    <p className='text-gray-500 text-[12px] my-3'>Choose agreement type</p>
                    <select id=""
                        className='p-2 border-2 rounded-md'
                        value={selectedValue}
                        onChange={(e) => setSelectedValue(e.target.value)}
                    >
                        <option value="Classic agreement" className='text-sm'>Classic agreement</option>
                        <option value="One image agreement" className='text-sm'>One image agreement</option>
                    </select>

                    <button className='p-2 rounded-md bg-blue-500 text-white my-3 font-bold'>
                        Save agreement type
                    </button>
                </div>
                {
                    selectedValue === 'Classic agreement' ? (
                        <div className="flex flex-col md:flex-row items-stretch justify-between w-[70%] gap-4">
                            <div className="w-full md:w-[33%]">
                                <Image
                                    src={classic1}
                                    className='w-full h-full'
                                    alt=''
                                />
                            </div>
                            <div className="w-full md:w-[33%]">
                                <Image
                                    src={classic2}
                                    className='w-full h-full'
                                    alt=''
                                />
                            </div>
                            <div className="w-full md:w-[33%]">
                                <Image
                                    src={classic3}
                                    className='w-full h-full'
                                    alt=''
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col md:flex-row items-stretch justify-between w-[70%] gap-4">
                            <div className="w-full md:w-[33%]">
                                <Image
                                    src={oneimg1}
                                    className='w-full h-full'
                                    alt=''
                                />
                            </div>
                            <div className="w-full md:w-[33%]">
                                <Image
                                    src={oneimg2}
                                    className='w-full h-full'
                                    alt=''
                                />
                            </div>
                            <div className="w-full md:w-[33%]">
                                <Image
                                    src={oneimg3}
                                    className='w-full h-full'
                                    alt=''
                                />
                            </div>
                        </div>
                    )
                }

            </div>


            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between my-5">
                <div className=" w-full md:w-[49%] flex flex-col md:flex-row md:items-center md:justify-between">
                    <select id=""
                        className='w-[49%] border border-gray-300 rounded-lg px-4 py-2'
                    >
                        {
                            array.map((item, index) => {
                                return <option key={index} value={item}>{item}</option>
                            }
                            )
                        }
                    </select>
                    <select id=""
                        className='w-[49%] border border-gray-300 rounded-lg px-4 py-2'
                    >
                        <option value="Classic agreement" className='text-sm'>Default</option>
                        <option value="One image agreement" className='text-sm'>text</option>
                    </select>
                </div>
                <div className="w-full md:w-[49%]">
                    <button className='w-[30%] border border-blue-400 text-blue-500 font-bold rounded-lg px-4 py-2'>
                        Add new
                    </button>
                    <button
                        className='w-[25%] border border-gray-200  text-gray-200 font-bold rounded-lg px-4 py-2 mx-3'
                    >
                        Remove
                    </button>
                </div>
            </div>
            <p className='md:w-[60%] w-full font-bold text-gray-600 text-[24px]'>Please enter agreement text here. Note that there are english, italian and russian versions</p>


            {/* Editable content using tinymce-react */}
            <div className='w-full p-3 border rounded-sm'>
                <Editor
                    apiKey='pkp5v5vgsths54d51uoz8gt87869a3r8gltk18285ihk8o5q'
                    initialValue={editorContent}
                    value={editorContent}
                    onEditorChange={handleEditorChange}
                    init={{
                        // height: Auto,
                        menubar: false,
                        plugins: 'lists link image paste help wordcount',
                        toolbar: ' bold italic | alignleft aligncenter alignright | bullist numlist outdent indent ',

                    }}
                />
            </div>
            <div className='flex items-center w-[30%] gap-2 mt-8'>
                <button className='py-2 px-6 flex justify-center items-center border-[1px] border-blue-400 text-blue-500 font-bold rounded-md'>
                    Cancel
                </button>
                <button className='py-2 px-6 flex justify-center items-center text-white bg-blue-500 font-bold rounded-md'>
                    Save
                </button>
            </div>

            <p className='text-gray-700 text-[24px] font-bold my-5 px-4'>Add pages with graphics</p>
            <div className='flex items-center my-5 pl-3'>
                <Image
                    src={tickCircle}
                    alt=''
                />
                <p className='text-gray-400 text-sm pl-2' >Each image will be scaled to fit the page.</p>
            </div>
            <div className='flex items-center my-5 pl-3'>
                <Image
                    src={tickCircle}
                    alt=''
                />
                <p className='text-gray-400 text-sm pl-2' >Convinient for pricelists.</p>
            </div>
            <div className='flex items-center my-5 pl-3'>
                <Image
                    src={tickCircle}
                    alt=''
                />
                <p className='text-gray-400 text-sm pl-2' >Convinient for any complex pages with graphic.</p>
            </div>


            <label for="image" className='cursor-pointer w-[25%] text-blue-400 font-bold flex justify-center items-center p-2 border-[1px] border-blue-400 rounded-md'>
                <Image src={document} width={25} height={25} alt="camera Picture" /> Upload images
            </label>
            <input id='image' type="file" accept="image/*" className='hidden' />

            <p className='text-gray-500 text-[16px] my-3'>You can use tags in agreement text. Tags will be replaced with real data.</p>

            <p className='text-gray-500 text-sm my-3'>{`{companyName}`} will be replaced with order company name</p>
            <p className='text-gray-500 text-sm my-3'>{`{clientName}`} will be replaced with client name and surname or company name if client is company</p>
            <p className='text-gray-500 text-sm my-3'>{`{vehicleName}`} - will be replaced with vehicle name like {`"`}Mercedes-Benz S600{`"`}</p>
            <p className='text-gray-500 text-sm my-3'>{`{partnerName}`} - will be replaced with partner name (vehicle owner)</p>
            <p className='text-gray-500 text-sm my-3'>{`{orderNumber}`} - will be replaced with order number</p>
            <p className='text-gray-500 text-sm my-3'>{`{franchise}`} - will be replaced with excess , amount only without currency</p>
            <p className='text-gray-500 text-sm my-3'>{`{franchisePercents}`} - will be replaced with excess percents.</p>
            <p className='text-gray-500 text-sm my-3'>{`{franchiseCasco}`} - will be replaced with excess kasco, amount only without currency</p>
            <p className='text-gray-500 text-sm my-3'>{`{franchiseTheft}`} - will be replaced with excess theft, amount only without currency</p>
            <p className='text-gray-500 text-sm my-3'>{`{franchiseDamage}`} - will be replaced with excess damage, amount only without currency</p>
            <p className='text-gray-500 text-sm my-3'>{`{companyEmail}`} - will be replaced with company email</p>
            <p className='text-gray-500 text-sm my-3'>{`{companyWebsite}`} - will be replaced with company website</p>
            <p className='text-gray-500 text-sm my-3'>{`{deposit}`} - will be replaced with deposit, amount only without currency</p>
            <p className='text-gray-500 text-sm my-3'>{`{signature}`} - will be replaced with client signature.</p>

        </>
    )
}
