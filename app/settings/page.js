'use client'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import MyProfile from '../(components)/myProfile/MyProfile'
import Companiess from '../(components)/companiess/Companiess'
import General from '../(components)/general/General'
import Invoicing from '../(components)/invoicing/Invoicing'
import Agreement from '../(components)/agreement/Agreement'
import Notification from '../(components)/notification/Notification'
import Integration from '../(components)/integration/Integration'
import Tariffs from '../(components)/tariffs/Tariffs'
import Extra from '../(components)/extra/Extra'
import Reminder from '../(components)/reminder/Reminder'
import ExportData from '../(components)/exportData/ExportData'
export default function Page() {
    const [activeTab, setActiveTab] = useState('My Profile');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const sidebarItems = ["My Profile", "Companies", "General", "Invoicing", "Agreement", "Notification", "Integration", "Tariffs", "Extra", "Reminder", "Export data"]

    const renderContent = () => {
        switch (activeTab) {
            case 'My Profile':
                return <MyProfile />;
            case 'Companies':
                return <Companiess />;
            case 'General':
                return <General />;
            case 'Invoicing':
                return <Invoicing />;
            case 'Agreement':
                return <Agreement />;
            case 'Notification':
                return <Notification />;
            case 'Integration':
                return <Integration />;
            case 'Tariffs':
                return <Tariffs />;
            case 'Extra':
                return <Extra />;
            case 'Reminder':
                return <Reminder />;
            case 'Export data':
                return <ExportData />;
            default:
                return null;
        }
    }

    return (
        <>
            <div className='mt-10 mb-3'>
                <h1 className='font-bold text-3xl text-gray-500'>Settings</h1>
                <p className='text-gray-500'>
                    <Link href="/" className='text-blue-700'>Home</Link> /Settings
                </p>
            </div>

            <div className='flex justify-between items-center mb-4 md:hidden'>
                <h2 className='text-xl font-bold text-gray-500'>{activeTab}</h2>
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className='text-blue-600 font-bold'>
                    {sidebarOpen ? 'Close Menu' : 'Open Menu'}
                </button>
            </div>

            <div className='py-4 bg-white w-full rounded-md flex'>
                {/* Sidebar */}
                <div className={`fixed inset-0  bg-white w-3/4 p-4 md:w-1/5 md:relative md:block ${sidebarOpen ? 'block' : 'hidden'} md:flex md:flex-col rounded-md`}>
                    <ul>
                        {sidebarItems.map((tab) => (
                            <li
                                key={tab}
                                className={`cursor-pointer p-2 m-1 border-[1px] rounded-sm font-bold ${activeTab === tab
                                    ? 'bg-blue-100 text-blue-600 border-blue-600'
                                    : 'text-gray-400 hover:text-gray-600'
                                    }`}
                                onClick={() => {
                                    setActiveTab(tab);
                                    setSidebarOpen(false);
                                }}
                            >
                                {tab}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Content */}
                <div className='w-full md:w-4/5 p-4 ml-auto'>
                    {renderContent()}
                </div>
            </div>
        </>
    )
}
