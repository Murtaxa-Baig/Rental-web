'use client'
import React from 'react'
import { useState } from 'react'

export default function Notification() {

    const [newReservationEmail, setNewReservationEmail] = useState(false)
    const [newReservationSms, setNewReservationSms] = useState(false)
    const [reservationStatusEmail, setReservationStatusEmail] = useState(false)
    const [reservationStatusSms, setReservationStatusSms] = useState(false)
    const [reservationsDataEmail, setReservationsDataEmail] = useState(false)
    const [reservationsDataSms, setReservationsDataSms] = useState(false)
    const [pickUpEmail, setPickUpEmail] = useState(false)
    const [pickUpSms, setPickUpSms] = useState(false)
    const [dropOffEmail, setdropOffEmail] = useState(false)
    const [dropOffSms, setdropOffSms] = useState(false)
    const [chargeSucceededEmail, setChargeSucceededEmail] = useState(false)
    const [chargeSucceededSms, setChargeSucceededSms] = useState(false)
    const [paymentSuccesEmail, setPaymentSuccesEmail] = useState(false)
    const [paymentSuccesSms, setPaymentSuccesSms] = useState(false)
    const [paymentCanceledEmail, setPaymentCanceledEmail] = useState(false)
    const [paymentCanceledSms, setPaymentCanceledSms] = useState(false)
    const [paymentFailedEmail, setPaymentFailedEmail] = useState(false)
    const [paymentFailedSms, setPaymentFailedSms] = useState(false)
    const [paymentRequiresActionEmail, setPaymentRequiresActionEmail] = useState(false)
    const [paymentRequiresActionSms, setPaymentRequiresActionSms] = useState(false)
    const [refundUpdatedEmail, setRefundUpdatedEmail] = useState(false)
    const [refundUpdatedSms, setRefundUpdatedSms] = useState(false)
    const [chargeRefundedEmail, setChargeRefundedEmail] = useState(false)
    const [chargeRefundedSms, setChargeRefundedSms] = useState(false)
    const [disputeCreatedEmail, setDisputeCreatedEmail] = useState(false)
    const [disputeCreatedSms, setDisputeCreatedSms] = useState(false)
    const [assignedEmail, setAssignedEmail] = useState(false)
    const [assignedSms, setAssignedSms] = useState(false)
    const [unassignedEmail, setUnassignedEmail] = useState(false)
    const [unassignedSms, setUnassignedSms] = useState(false)





    const ReservationEmail = () => { setNewReservationEmail(prevState => !prevState); };
    const ReservationSms = () => { setNewReservationSms(prevState => !prevState); };

    const ReservationStatusEmail = () => { setReservationStatusEmail(prevState => !prevState); };
    const ReservationStatusSms = () => { setReservationStatusSms(prevState => !prevState); };

    const ReservationDataEmail = () => { setReservationsDataEmail(prevState => !prevState); };
    const ReservationDataSms = () => { setReservationsDataSms(prevState => !prevState); };

    const PickUpEmail = () => { setPickUpEmail(prevState => !prevState); };
    const PickUpSms = () => { setPickUpSms(prevState => !prevState); };

    const DropOffEmail = () => { setdropOffEmail(prevState => !prevState); };
    const DropOffSms = () => { setdropOffSms(prevState => !prevState); };

    const ChargeSucceededEmail = () => { setChargeSucceededEmail(prevState => !prevState); };
    const ChargeSucceededSms = () => { setChargeSucceededSms(prevState => !prevState); };

    const PaymentSuccesEmail = () => { setPaymentSuccesEmail(prevState => !prevState); };
    const PaymentSuccesSms = () => { setPaymentSuccesSms(prevState => !prevState); };

    const PaymentCanceledEmail = () => { setPaymentCanceledEmail(prevState => !prevState); };
    const PaymentCanceledSms = () => { setPaymentCanceledSms(prevState => !prevState); };

    const PaymentFailedEmail = () => { setPaymentFailedEmail(prevState => !prevState); };
    const PaymentFailedSms = () => { setPaymentFailedSms(prevState => !prevState); };

    const PaymentRequiresActionEmail = () => { setPaymentRequiresActionEmail(prevState => !prevState); };
    const PaymentRequiresActionSms = () => { setPaymentRequiresActionSms(prevState => !prevState); };

    const RefundUpdatedEmail = () => { setRefundUpdatedEmail(prevState => !prevState); };
    const RefundUpdatedSms = () => { setRefundUpdatedSms(prevState => !prevState); };

    const ChargeRefundedEmail = () => { setChargeRefundedEmail(prevState => !prevState); };
    const ChargeRefundedSms = () => { setChargeRefundedSms(prevState => !prevState); };

    const DisputeCreatedEmail = () => { setDisputeCreatedEmail(prevState => !prevState); };
    const DisputeCreatedSms = () => { setDisputeCreatedSms(prevState => !prevState); };

    const AssignedEmail = () => { setAssignedEmail(prevState => !prevState); };
    const AssignedSms = () => { setAssignedSms(prevState => !prevState); };

    const UnassignedEmail = () => { setUnassignedEmail(prevState => !prevState); };
    const UnassignedSms = () => { setUnassignedSms(prevState => !prevState); };




    return (
        <>
            <div className='p-4'>
                <p className='text-[24px] font-bold text-gray-600'>Please indicate what notifications and in what form will be sent to the administrator</p>
                <p className='text-gray-400 text-sm'>Set witch events you want to receive notifications</p>
            </div>
            <div className='p-4 flex items-center justify-between my-4'>
                <p className='text-gray-700'>New Reservation</p>
                <div className='flex items-center gap-1'>
                    <button onClick={ReservationEmail} className={`${newReservationEmail ? 'text-white bg-blue-400' : 'text-blue-500 border-[1px] border-blue-400'} py-2 px-4 rounded-md`}>Email</button>
                    <button onClick={ReservationSms} className={`${newReservationSms ? 'text-white bg-blue-400' : 'text-blue-500 border-[1px] border-blue-400'} py-2 px-4 rounded-md`}>SMS</button>
                </div>
            </div>
            <hr className='text-gray-400' />
            <div className='p-4 flex items-center justify-between my-4'>
                <p className='text-gray-700'>Changing reservation status</p>
                <div className='flex items-center gap-1'>
                    <button onClick={ReservationStatusEmail} className={`${reservationStatusEmail ? 'text-white bg-blue-400' : 'text-blue-500 border-[1px] border-blue-400'} py-2 px-4 rounded-md`}>Email</button>
                    <button onClick={ReservationStatusSms} className={`${reservationStatusSms ? 'text-white bg-blue-400' : 'text-blue-500 border-[1px] border-blue-400'} py-2 px-4 rounded-md`}>SMS</button>
                </div>
            </div>
            <hr className='text-gray-400' />
            <div className='p-4 flex items-center justify-between my-4'>
                <p className='text-gray-700'>Changing reservations data</p>
                <div className='flex items-center gap-1'>
                    <button onClick={ReservationDataEmail} className={`${reservationsDataEmail ? 'text-white bg-blue-400' : 'text-blue-500 border-[1px] border-blue-400'} py-2 px-4 rounded-md`}>Email</button>
                    <button onClick={ReservationDataSms} className={`${reservationsDataSms ? 'text-white bg-blue-400' : 'text-blue-500 border-[1px] border-blue-400'} py-2 px-4 rounded-md`}>SMS</button>
                </div>
            </div>
            <hr className='text-gray-400' />
            <div className='p-4 flex items-center justify-between my-4'>
                <p className='text-gray-700'>Pick up</p>
                <div className='flex items-center gap-1'>
                    <button onClick={PickUpEmail} className={`${pickUpEmail ? 'text-white bg-blue-400' : 'text-blue-500 border-[1px] border-blue-400'} py-2 px-4 rounded-md`}>Email</button>
                    <button onClick={PickUpSms} className={`${pickUpSms ? 'text-white bg-blue-400' : 'text-blue-500 border-[1px] border-blue-400'} py-2 px-4 rounded-md`}>SMS</button>
                </div>
            </div>
            <hr className='text-gray-400' />
            <div className='p-4 flex items-center justify-between my-4'>
                <p className='text-gray-700'>Drop off</p>
                <div className='flex items-center gap-1'>
                    <button onClick={DropOffEmail} className={`${dropOffEmail ? 'text-white bg-blue-400' : 'text-blue-500 border-[1px] border-blue-400'} py-2 px-4 rounded-md`}>Email</button>
                    <button onClick={DropOffSms} className={`${dropOffSms ? 'text-white bg-blue-400' : 'text-blue-500 border-[1px] border-blue-400'} py-2 px-4 rounded-md`}>SMS</button>
                </div>
            </div>
            <hr className='text-gray-400' />
            <div className='my-4'>
                <p className='text-gray-700 font-bold'>Payments notifications (Beta version)</p>
                <p className='text-gray-400 '>Set witch events you want to receive notifications</p>
            </div>
            <div className='p-4 flex items-center justify-between my-4'>
                <p className='text-gray-700'>Charge succeeded</p>
                <div className='flex items-center gap-1'>
                    <button onClick={ChargeSucceededEmail} className={`${chargeSucceededEmail ? 'text-white bg-blue-400' : 'text-blue-500 border-[1px] border-blue-400'} py-2 px-4 rounded-md`}>Email</button>
                    <button onClick={ChargeSucceededSms} className={`${chargeSucceededSms ? 'text-white bg-blue-400' : 'text-blue-500 border-[1px] border-blue-400'} py-2 px-4 rounded-md`}>SMS</button>
                </div>
            </div>
            <hr className='text-gray-400' />
            <div className='p-4 flex items-center justify-between my-4'>
                <p className='text-gray-700'>Charge succeeded</p>
                <div className='flex items-center gap-1'>
                    <button onClick={ChargeSucceededEmail} className={`${chargeSucceededEmail ? 'text-white bg-blue-400' : 'text-blue-500 border-[1px] border-blue-400'} py-2 px-4 rounded-md`}>Email</button>
                    <button onClick={ChargeSucceededSms} className={`${chargeSucceededSms ? 'text-white bg-blue-400' : 'text-blue-500 border-[1px] border-blue-400'} py-2 px-4 rounded-md`}>SMS</button>
                </div>
            </div>
            <hr className='text-gray-400' />
            <div className='p-4 flex items-center justify-between my-4'>
                <p className='text-gray-700'>Payment link succeeded</p>
                <div className='flex items-center gap-1'>
                    <button onClick={PaymentSuccesEmail} className={`${paymentSuccesEmail ? 'text-white bg-blue-400' : 'text-blue-500 border-[1px] border-blue-400'} py-2 px-4 rounded-md`}>Email</button>
                    <button onClick={PaymentSuccesSms} className={`${paymentSuccesSms ? 'text-white bg-blue-400' : 'text-blue-500 border-[1px] border-blue-400'} py-2 px-4 rounded-md`}>SMS</button>
                </div>
            </div>
            <hr className='text-gray-400' />
            <div className='p-4 flex items-center justify-between my-4'>
                <p className='text-gray-700'>Payment link canceled</p>
                <div className='flex items-center gap-1'>
                    <button onClick={PaymentCanceledEmail} className={`${paymentCanceledEmail ? 'text-white bg-blue-400' : 'text-blue-500 border-[1px] border-blue-400'} py-2 px-4 rounded-md`}>Email</button>
                    <button onClick={PaymentCanceledSms} className={`${paymentCanceledSms ? 'text-white bg-blue-400' : 'text-blue-500 border-[1px] border-blue-400'} py-2 px-4 rounded-md`}>SMS</button>
                </div>
            </div>
            <hr className='text-gray-400' />
            <div className='p-4 flex items-center justify-between my-4'>
                <p className='text-gray-700'>Payment link failed</p>
                <div className='flex items-center gap-1'>
                    <button onClick={PaymentFailedEmail} className={`${paymentFailedEmail ? 'text-white bg-blue-400' : 'text-blue-500 border-[1px] border-blue-400'} py-2 px-4 rounded-md`}>Email</button>
                    <button onClick={PaymentFailedSms} className={`${paymentFailedSms ? 'text-white bg-blue-400' : 'text-blue-500 border-[1px] border-blue-400'} py-2 px-4 rounded-md`}>SMS</button>
                </div>
            </div>
            <hr className='text-gray-400' />
            <div className='p-4 flex items-center justify-between my-4'>
                <p className='text-gray-700'>Payment link requires action</p>
                <div className='flex items-center gap-1'>
                    <button onClick={PaymentRequiresActionEmail} className={`${paymentRequiresActionEmail ? 'text-white bg-blue-400' : 'text-blue-500 border-[1px] border-blue-400'} py-2 px-4 rounded-md`}>Email</button>
                    <button onClick={PaymentRequiresActionSms} className={`${paymentRequiresActionSms ? 'text-white bg-blue-400' : 'text-blue-500 border-[1px] border-blue-400'} py-2 px-4 rounded-md`}>SMS</button>
                </div>
            </div>
            <hr className='text-gray-400' />
            <div className='p-4 flex items-center justify-between my-4'>
                <p className='text-gray-700'>Charge refund updated</p>
                <div className='flex items-center gap-1'>
                    <button onClick={RefundUpdatedEmail} className={`${refundUpdatedEmail ? 'text-white bg-blue-400' : 'text-blue-500 border-[1px] border-blue-400'} py-2 px-4 rounded-md`}>Email</button>
                    <button onClick={RefundUpdatedSms} className={`${refundUpdatedSms ? 'text-white bg-blue-400' : 'text-blue-500 border-[1px] border-blue-400'} py-2 px-4 rounded-md`}>SMS</button>
                </div>
            </div>
            <hr className='text-gray-400' />
            <div className='p-4 flex items-center justify-between my-4'>
                <p className='text-gray-700'>Charge refunded</p>
                <div className='flex items-center gap-1'>
                    <button onClick={ChargeRefundedEmail} className={`${chargeRefundedEmail ? 'text-white bg-blue-400' : 'text-blue-500 border-[1px] border-blue-400'} py-2 px-4 rounded-md`}>Email</button>
                    <button onClick={ChargeRefundedSms} className={`${chargeRefundedSms ? 'text-white bg-blue-400' : 'text-blue-500 border-[1px] border-blue-400'} py-2 px-4 rounded-md`}>SMS</button>
                </div>
            </div>
            <hr className='text-gray-400' />
            <div className='p-4 flex items-center justify-between my-4'>
                <p className='text-gray-700'>Charge dispute created</p>
                <div className='flex items-center gap-1'>
                    <button onClick={DisputeCreatedEmail} className={`${disputeCreatedEmail ? 'text-white bg-blue-400' : 'text-blue-500 border-[1px] border-blue-400'} py-2 px-4 rounded-md`}>Email</button>
                    <button onClick={DisputeCreatedSms} className={`${disputeCreatedSms ? 'text-white bg-blue-400' : 'text-blue-500 border-[1px] border-blue-400'} py-2 px-4 rounded-md`}>SMS</button>
                </div>
            </div>
            <hr className='text-gray-400' />
            <div className='my-4'>
                <p className='text-gray-700 font-bold'>Driver notifications</p>
                <p className='text-gray-400 '>This is global settings for all drivers, which notifications, you want to send to drivers?</p>
            </div>
            <div className='p-4 flex items-center justify-between my-4'>
                <p className='text-gray-700'>Assigned</p>
                <div className='flex items-center gap-1'>
                    <button onClick={AssignedEmail} className={`${assignedEmail ? 'text-white bg-blue-400' : 'text-blue-500 border-[1px] border-blue-400'} py-2 px-4 rounded-md`}>Email</button>
                    <button onClick={AssignedSms} className={`${assignedSms ? 'text-white bg-blue-400' : 'text-blue-500 border-[1px] border-blue-400'} py-2 px-4 rounded-md`}>SMS</button>
                </div>
            </div>
            <hr className='text-gray-400' />


            
            <div className='p-4 flex items-center justify-between my-4'>
                <p className='text-gray-700'>Unassigned</p>
                <div className='flex items-center gap-1'>
                    <button onClick={UnassignedEmail} className={`${assignedEmail ? 'text-white bg-blue-400' : 'text-blue-500 border-[1px] border-blue-400'} py-2 px-4 rounded-md`}>Email</button>
                    <button onClick={UnassignedSms} className={`${assignedSms ? 'text-white bg-blue-400' : 'text-blue-500 border-[1px] border-blue-400'} py-2 px-4 rounded-md`}>SMS</button>
                </div>
            </div>
            <hr className='text-gray-400' />




        </>
    )
}
