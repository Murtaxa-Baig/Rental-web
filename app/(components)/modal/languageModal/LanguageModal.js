import React, { useState } from 'react';
import CongratulationsModal from '../congratulationsModal/CongratulationsModal';

export default function LanguageModal({ setShowLanguageModal }) {

    const [congratulationsModal, setCongratulationsModal] = useState(false);
    const [modalTitle, setModalTitle] = useState(null);
    const [modalDisc, setModalDisc] = useState(null);

    const languages = [
        { title: 'US', disc: 'English' },
        { title: 'RU', disc: 'Русский' },
        { title: 'IT', disc: 'Italiano' },
        { title: 'DE', disc: 'Deutsche' },
        { title: 'FR', disc: 'Français' },
        { title: 'PT', disc: 'Português' },
        { title: 'ES', disc: 'Espaniol' },
        { title: 'PL', disc: 'Polski' },
        { title: 'CN', disc: '中文' },
        { title: 'NL', disc: 'Nederlands' },
        { title: 'CZ', disc: 'Čeština' },
    ];

    const closeModal = () => {
        setShowLanguageModal(false);
    };

    const openCongratulationsModal = (title, disc) => {
        setModalTitle(title);
        setModalDisc(disc);
        setCongratulationsModal(true);
    };

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

            {/* Language Modal */}
            <div className="fixed inset-0 flex items-center justify-center">
                <div className="w-[30%] p-2 flex flex-col justify-between h-[70vh] rounded-lg bg-white shadow-lg">
                    <div className='h-14 w-full flex justify-between items-center px-3'>
                        <p className='font-bold text-gray-600 text-[20px]'>Select a language</p>
                        <button onClick={closeModal} className='text-gray-500 p-2 text-[30px]'>✗</button>
                    </div>
                    <hr className='text-gray-400' />

                    <div className="overflow-y-auto flex-grow">
                        {
                            languages.map((items, index) => (
                                <React.Fragment key={index}>
                                    <div onClick={() => openCongratulationsModal(items.title, items.disc)} className='flex items-center hover:bg-gray-200 hover:cursor-pointer px-2 py-2'>
                                        <p className='text-gray-600 text-2xl '>{items.title}</p>
                                        <p className='text-gray-600 px-4'>{items.disc}</p>
                                    </div>
                                    <hr className='text-gray-400' />
                                </React.Fragment>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* Congratulations Modal */}
            {congratulationsModal && (
                <CongratulationsModal
                    setCongratulationsModal={setCongratulationsModal}
                    title={modalTitle}
                    disc={modalDisc}
                />
            )}
        </>
    );
}
