import React, { useEffect, useState, useRef } from 'react';
import Autocomplete from 'react-google-autocomplete';
import Image from 'next/image';
import location from '@/public/images/location.svg';
import call from '@/public/images/call.svg';
import mail from '@/public/images/mail.svg';
import profile from '@/public/images/profile.jpg';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

export default function PdfOfferModal({ setPdfModal }) {
    const [date, setDate] = useState('');
    const [startLocation, setStartLocation] = useState('');
    const [endLocation, setEndLocation] = useState('');
    const pdfRef = useRef(null);

    const [selectedPlace, setSelectedPlace] = useState({
        address: '',
        lat: '',
        lng: '',
    });

    const closeModal = () => {
        setPdfModal(false);
    };

    const StartLocationSelected = (place) => {
        const { geometry, formatted_address } = place;
        if (geometry) {
            const { lat, lng } = geometry.startLocation;
            setSelectedPlace({
                address: formatted_address,
                lat: lat(),
                lng: lng(),
            });
            setStartLocation(formatted_address);
        }
    };

    const EndLocationSelected = (place) => {
        const { geometry, formatted_address } = place;
        if (geometry) {
            const { lat, lng } = geometry.endLocation;
            setSelectedPlace({
                address: formatted_address,
                lat: lat(),
                lng: lng(),
            });
            setEndLocation(formatted_address);
        }
    };

    useEffect(() => {
        const currentDate = new Date();
        const day = String(currentDate.getDate()).padStart(2, '0');
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const year = String(currentDate.getFullYear()).slice(-2);
        setDate(`${day}/${month}/${year}`);
    }, []);

    // Function to generate and download PDF
    const generatePdf = async () => {
        // Make the hidden content visible temporarily
        pdfRef.current.style.display = 'block';

        const element = pdfRef.current;
        const canvas = await html2canvas(element, { scale: 2 });
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('offer.pdf');

        // Hide the content again
        pdfRef.current.style.display = 'none';
    };

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"></div>
            <div className="fixed inset-0 z-20 flex items-center justify-center">
                <div className="w-[50%] p-3 h-[55vh] rounded-lg bg-white shadow-lg ">
                    <div className="h-14 w-full flex justify-between items-center px-3">
                        <p className="font-bold text-gray-400 text-[16px] text-center">
                            Set start and end locations
                        </p>
                        <button onClick={closeModal} className="text-gray-500 p-2 text-[30px]">
                            ✗
                        </button>
                    </div>
                    <hr className="text-gray-400" />
                    <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-8 ">
                        <div className="flex items-center justify-between p-3">
                            <div className="w-[42%]">
                                <div className="w-full relative">
                                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                        Start address
                                    </label>
                                    <Autocomplete
                                        apiKey="AIzaSyBBGxKE3abRfU_ZsgC6JmiIIUpO5QmaTjI"
                                        onPlaceSelected={StartLocationSelected}
                                        value={startLocation}
                                        onChange={(e) => setStartLocation(e.target.value)}
                                        className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div className="w-[16%] flex justify-center items-center text-center px-5">
                                <button className="font-bold text-white bg-blue-500 rounded-md p-1 px-4 w-full">
                                    →
                                </button>
                            </div>

                            <div className="w-[42%]">
                                <div className="w-full relative">
                                    <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                        End address
                                    </label>
                                    <Autocomplete
                                        apiKey="AIzaSyBBGxKE3abRfU_ZsgC6JmiIIUpO5QmaTjI"
                                        onPlaceSelected={EndLocationSelected}
                                        value={endLocation}
                                        onChange={(e) => setEndLocation(e.target.value)}
                                        className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-[50%] w-full mx-auto my-3">
                        <div className="w-full relative">
                            <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-gray-600">
                                Companies
                            </label>
                            <input
                                type="text"
                                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                            />
                        </div>
                        <div className="mx-auto flex justify-center items-center my-3">
                            <input type="checkbox" id="whiteLabel" className="h-4 w-4" />
                            <label htmlFor="whiteLabel" className="text-gray-600 ml-2">
                                White label
                            </label>
                        </div>

                        <div className="md:w-[50%] w-full mx-auto text-center my-3">
                            <button onClick={generatePdf} className="p-2 border-[1px] border-blue-500 text-blue-500 font-bold rounded-md">
                                Start Generate
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden" ref={pdfRef}>
                <div className="flex items-center justify-between my-3">
                    <div className="w-[40%]">
                        <p className="text-gray-800 text-xl">Gig Masters</p>
                        <p className="text-[14px] text-gray-700 flex items-center my-2">
                            <Image src={location} height={14} width={14} className="mr-2" alt="" />
                            Via Foro S. Martino, 22, 21012 Cassano Magnago VA, Italy
                        </p>
                        <div className="flex items-center justify-between my-2">
                            <p className="text-[14px] text-gray-700 flex items-center">
                                <Image src={call} height={14} width={14} className="mr-2" alt="" />+393270009012
                            </p>
                            <p className="text-[14px] text-gray-700 flex items-center">
                                <Image src={mail} height={14} width={14} className="mr-2" alt="" />darvaish49@gmail.com
                            </p>
                        </div>
                    </div>
                    <Image src={profile} height={120} width={120} className="rounded-full" alt="" />
                </div>

                <div className="flex justify-between items-center my-4">
                    <p className="font-bold text-xl text-gray-800">Offer</p>
                    <p className="text-xl text-gray-800">{date}</p>
                </div>
                <p className='font-bold text-[12px] my-2'>Dates & Locations</p>
                <div className='flex items-center justify-between'>
                    <div className='w-[40%]'>
                        <div className='flex  items-center my-4'>
                            <p className='font-bold text-[12px] text-gray-500 w-[30%]'>Delivery:</p>
                            <p className='text-[12px] text-gray-800'>Milan,Metropolitan City Of Milan,Italy</p>
                        </div>
                        <div className='flex  items-center my-4'>
                            <p className='font-bold text-[12px] text-gray-500 w-[30%]'>Collection:</p>
                            <p className='text-[12px] text-gray-800'>Milan,Metropolitan City Of Milan,Italy</p>
                        </div>
                        <div className='flex  items-center my-4'>
                            <p className='font-bold text-[12px] text-gray-500 w-[30%]'>Start:</p>
                            <p className='text-[12px] text-gray-800'>{date}</p>
                        </div>
                        <div className='flex  items-center my-4'>
                            <p className='font-bold text-[12px] text-gray-500 w-[30%]'>Finish:</p>
                            <p className='text-[12px] text-gray-800'>{date}</p>
                        </div>

                    </div>
                    <div>
                        <p className='font-bold text-[12px] my-2'>This offer is valid for 24 hours</p>
                        <p className='font-bold text-[12px] text-end'>Cancellation policy</p>
                        <p className='text-[12px] text-gray-500 text-end'>3 days before of rental start - 100% penalty of total amount</p>
                        <p className='text-[12px] text-gray-500 text-end'>7 days before of rental start - 60% penalty of total amount</p>
                        <p className='text-[12px] text-gray-500 text-end'>14 days before of rental start - 40% penalty of total amount</p>
                        <p className='text-[12px] text-gray-500 text-end'>30 days before of rental start - 30% penalty of total amount</p>

                    </div>
                </div>



                <div className='mt-8 border-[1px] border-gray-500 rounded-lg'>
                    <p className='p-2 bg-gray-400 px-4 font-bold text-gray-800 rounded-t-lg'>ABARTH 500</p>
                    <div className='w-[40%] px-4'>
                        <div className='flex  items-center justify-between my-2'>
                            <p className='font-bold text-[12px] text-gray-500'>Price</p>
                            <p className='text-[12px] text-gray-800 font-bold'>0 €</p>
                        </div>
                        <hr className='text-gray-500' />

                        <div className='flex  items-center justify-between my-2'>
                            <p className='font-bold text-[12px] text-gray-500'>Kilometers includes</p>
                            <p className='text-[12px] text-gray-800 font-bold'>1000 km</p>
                        </div>
                        <hr className='text-gray-500' />


                        <div className='flex  items-center justify-between my-2'>
                            <p className='font-bold text-[12px] text-gray-500'>Extra price for one kilometer </p>
                            <p className='text-[12px] text-gray-800 font-bold'>0 €</p>
                        </div>
                        <hr className='text-gray-500' />


                        <div className='flex  items-center justify-between my-2'>
                            <p className='font-bold text-[12px] text-gray-500'>deposit</p>
                            <p className='text-[12px] text-gray-800 font-bold'>0 €</p>
                        </div>
                        <hr className='text-gray-500' />
                        <p className='font-bold text-[10px] text-gray-500'>Deposit will be unblocked after the Tnish of the rent. Ohe deposit is not included in the price.</p>
                    </div>

                </div>
            </div>
        </>
    );
}
