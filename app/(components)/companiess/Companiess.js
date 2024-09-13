import React, { useState } from 'react';
import Image from 'next/image';
import company from '@/public/images/company.svg';
import edit from '@/public/images/edit.svg';
import del from '@/public/images/delete.svg';
import camera from '@/public/images/camera.svg';
import profile from '@/public/images/profile.jpg';
import NewCompanyModal from '../modal/newCompanyModal/NewCompanyModal';
import NewOfficeModal from '../modal/newOfficeModal/NewOfficeModal';

export default function Companiess() {
    const [showModal, setShowModal] = useState(false);
    const [showOfficeModal, setShowOfficeModal] = useState(false);

    return (
        <>
            {/* Header Section */}
            <div className="flex items-center">
                <Image src={company} height={25} width={25} alt="" />
                <p className="font-bold text-gray-400 ml-2">Companies</p>
            </div>
            <div className="border-[1px] border-gray-200 my-5 rounded-sm p-3">
                <p className="text-sm text-gray-500">
                    Please specify company data here. We draw your attention that you can specify data of several companies and choose default company data
                </p>
            </div>

            {/* Companies Section */}
            <div className="flex flex-wrap items-center w-full justify-between">
                <div className="flex items-center p-2 w-full sm:w-[49%] mb-4">
                    <Image
                        src={profile}
                        height={75}
                        width={75}
                        className="rounded-full w-[20%]"
                        alt=""
                    />
                    <div className="px-4 flex-1">
                        <button className="font-bold text-gray-600">Gig Masters</button>
                        <p className="text-sm text-gray-500">
                            Via Foro S. Martino, 22, 21012 Cassano Magnago VA, Italy
                        </p>
                        <button className="px-2 bg-green-100 rounded-sm text-green-400 text-sm font-bold">
                            Default company
                        </button>
                    </div>
                    <div className="flex flex-col justify-center space-y-2">
                        <button className="border-[1px] border-blue-400 rounded-sm p-2">
                            <Image src={edit} height={25} width={25} alt="" />
                        </button>
                        <button className="border-[1px] border-blue-400 rounded-sm p-2">
                            <Image src={del} height={25} width={25} alt="" />
                        </button>
                    </div>
                </div>
                <div className="flex items-center p-2 w-full sm:w-[49%] mb-4">
                    <div
                        onClick={() => setShowModal(true)}
                        className="border-[1px] h-20 w-20 rounded-full flex justify-center items-center cursor-pointer"
                    >
                        <Image src={camera} height={25} width={25} alt="" />
                    </div>
                    <div className="px-4">
                        <button onClick={() => setShowModal(true)} className="font-bold text-blue-600">
                            New Company
                        </button>
                        <p className="text-sm text-gray-500">Company address</p>
                    </div>
                </div>
                {showModal && <NewCompanyModal setShowModal={setShowModal} />}
            </div>

            {/* Offices Header Section */}
            <div className="flex items-center">
                <Image src={company} height={25} width={25} alt="" />
                <p className="font-bold text-gray-400 ml-2 mt-5">Offices</p>
            </div>
            <div className="border-[1px] border-gray-200 my-5 rounded-sm p-3">
                <p className="text-sm text-gray-500">Offices used to relate cars with it</p>
            </div>

            {/* Offices Section */}
            <div className="flex flex-wrap items-center w-full justify-between">
                <div className="flex items-center p-2 w-full sm:w-[49%] mb-4">
                    <Image
                        src={profile}
                        height={75}
                        width={75}
                        className="rounded-full w-[20%]"
                        alt=""
                    />
                    <div className="px-4 flex-1">
                        <button className="font-bold text-gray-600">Gig Masters</button>
                        <p className="text-sm text-gray-500">
                            Via Foro S. Martino, 22, 21012 Cassano Magnago VA, Italy
                        </p>
                    </div>
                    <div className="flex flex-col justify-center space-y-2">
                        <button className="border-[1px] border-blue-400 rounded-sm p-2">
                            <Image src={edit} height={25} width={25} alt="" />
                        </button>
                        <button className="border-[1px] border-blue-400 rounded-sm p-2">
                            <Image src={del} height={25} width={25} alt="" />
                        </button>
                    </div>
                </div>
                <div className="flex items-center p-2 w-full sm:w-[49%] mb-4">
                    <div
                        onClick={() => setShowOfficeModal(true)}
                        className="border-[1px] h-20 w-20 rounded-full flex justify-center items-center cursor-pointer"
                    >
                        <Image src={camera} height={25} width={25} alt="" />
                    </div>
                    <div className="px-4">
                        <button onClick={() => setShowOfficeModal(true)} className="font-bold text-blue-600">
                            Add office
                        </button>
                        <p className="text-sm text-gray-500">Company address</p>
                    </div>
                </div>
                {showOfficeModal && <NewOfficeModal setShowOfficeModal={setShowOfficeModal} />}
            </div>
        </>
    );
}
