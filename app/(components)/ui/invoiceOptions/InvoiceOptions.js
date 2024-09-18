import React from 'react'
import Image from 'next/image'
import edit from '@/public/images/edit.svg';

export default function InvoiceOptions() {
    return (
        <>
            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-2">
                <div className="w-full flex items-center justify-between md:w-[49%] mb-4 md:my-3 px-3">
                    <div className='w-[80%] '>
                        <p className='font-semibold text-gray-700'>VAT percentage (%)</p>
                        <p className='text-sm text-gray-500 mt-2'>VAT percentage used in invoices</p>
                    </div>
                    <div className='h-8 flex justify-center items-center w-8 rounded-full bg-slate-200'>
                        <Image
                            src={edit}
                            height={25}
                            width={25}
                        />
                    </div>                </div>
                <div className="w-full flex items-center justify-between md:w-[49%] mb-4 md:my-3 px-3">
                    <div className='w-[80%] '>
                        <p className='font-semibold text-gray-700'>Prices include VAT</p>
                        <p className='text-sm text-gray-500 mt-2'>If you choose {`"`}yes{`"`} the system will display prices with VAT</p>
                    </div>
                    <input type="checkbox" name="" className='w-5 h-5' id="" />
                </div>
            </div>
        </>
    )
}
