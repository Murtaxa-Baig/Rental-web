'use client'
import Link from 'next/link'
import React from 'react';
import NewCar from '../(components)/newCar/NewCar';
export default function Page() {
  
  return (
    <>
      <div className='mt-10 mb-3'>
        <h1 className='font-bold text-3xl text-gray-500'>Add New Car</h1>
        <p className='text-gray-500'>
          <Link href="/" className='text-blue-700'>Home</Link> /Add New Car
        </p>
      </div>
      <NewCar />
      
    </>
  )
}
