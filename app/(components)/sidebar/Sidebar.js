'use client'
import profile from '@/public/images/profile.jpg';
import dashboard from '@/public/images/dashboard.svg';
import calender from '@/public/images/calender.svg';
import cash from '@/public/images/cash.svg';
import add from '@/public/images/add.svg';
import allReservation from '@/public/images/allReservation.svg';
import user from '@/public/images/user.svg';
import car from '@/public/images/car.svg';
import mail from '@/public/images/mail.svg';
import file from '@/public/images/file.svg';
import setting from '@/public/images/setting.svg';
import Image from 'next/image';
import Link from 'next/link';


import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';


export default function Sidebar() {


  return (
    <>
      <div className='max-h-[100vh] overflow-y-auto'>
        <div className='w-full h-[30vh] text-center pt-5'>
          <Image src={profile} width={100} height={100} className="rounded-full mx-auto" alt="Profile Picture" />
          <p className='font-bold text-center mt-4'>Company Name</p>
          <p className='text-center'>Murtaxa Baig</p>
        </div>
        <div className='w-full h-[70vh]'>
          <hr className='text-gray-500' />
          <Link href="/" className='w-full flex items-center h-16 px-4 font-bold text-gray-500'>
            <Image src={dashboard} width={20} height={20} className='mr-4' alt="Filter Icon" />
            Dashboard
          </Link>
          <hr className='text-gray-500' />
          <Link href="/calender"
            className='w-full flex items-center h-16 px-4 font-bold text-gray-500'>
            <Image src={calender} width={20} height={20} className='mr-4' alt="Filter Icon" />
            Calender
          </Link>
          <hr className='text-gray-500' />
          <Link href="/"
            className='w-full flex items-center h-16 px-4 font-bold text-gray-500'>
            <Image
              src={cash}
              width={20}
              height={20}
              className='mr-4'
              alt="Filter Icon"
            />
            Offers generator
          </Link>
          <hr className='text-gray-500' />
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className="flex items-center">
                  <Link href=""
                    className='w-full flex items-center h-16 px-4 font-bold text-gray-500'>
                    <Image
                      src={cash}
                      width={20}
                      height={20}
                      className='mr-4'
                      alt="Filter Icon"
                    />
                    Reservations
                  </Link>

                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <Link
                  href='/add-reservation'
                  className='flex items-center  font-bold text-gray-500 text-sm'>
                  <Image
                    src={add}
                    width={20}
                    height={20}
                    className='mr-2 '
                    alt="Filter Icon"
                  />
                  New reservation
                </Link>
              </AccordionItemPanel>
              <AccordionItemPanel>
                <Link href="/reservations"
                  className='flex items-center font-bold text-gray-500 text-sm'>
                  <Image
                    src={allReservation}
                    width={20}
                    height={20}
                    className='mr-2 '
                    alt="Filter Icon"
                  />
                  Reservation List
                </Link>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>

          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className="flex items-center">
                  <Link href=""
                    className='w-full flex items-center h-16 px-4 font-bold text-gray-500'>
                    <Image
                      src={user}
                      width={20}
                      height={20}
                      className='mr-4'
                      alt="Filter Icon"
                    />
                    Customer
                  </Link>

                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <Link href='/add-client'
                  className='flex items-center  font-bold text-gray-500 text-sm'>
                  <Image
                    src={add}
                    width={20}
                    height={20}
                    className='mr-2 '
                    alt="Filter Icon"
                  />
                  New Client
                </Link>
              </AccordionItemPanel>
              <AccordionItemPanel>
                <Link href="/add-agency"
                  className='flex items-center font-bold text-gray-500 text-sm'>
                  <Image
                    src={add}
                    width={20}
                    height={20}
                    className='mr-2 '
                    alt="Filter Icon"
                  />
                  New Customer
                </Link>
              </AccordionItemPanel>
              <AccordionItemPanel>
                <Link href="/all-customer"
                  className='flex items-center font-bold text-gray-500 text-sm'>
                  <Image
                    src={allReservation}
                    width={20}
                    height={20}
                    className='mr-2 '
                    alt="Filter Icon"
                  />
                  Customers
                </Link>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>





          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className="flex items-center">
                  <button
                    className='w-full flex items-center h-16 px-4 font-bold text-gray-500'>
                    <Image
                      src={car}
                      width={20}
                      height={20}
                      className='mr-4'
                      alt="Filter Icon"
                    />
                    Vehicle
                  </button>

                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <Link href='/add-vehicle'
                  className='flex items-center  font-bold text-gray-500 text-sm'>
                  <Image
                    src={add}
                    width={20}
                    height={20}
                    className='mr-2 '
                    alt="Filter Icon"
                  />
                  Add vehicle
                </Link>
              </AccordionItemPanel>
              <AccordionItemPanel>
                <Link href="/vehicles"
                  className='flex items-center font-bold text-gray-500 text-sm'>
                  <Image
                    src={allReservation}
                    width={20}
                    height={20}
                    className='mr-2 '
                    alt="Filter Icon"
                  />
                  Vehicle list
                </Link>
              </AccordionItemPanel>
              {/* <AccordionItemPanel>
                <button href="/reservations"
                  className='flex items-center font-bold text-gray-500 text-sm'>
                  <Image
                    src={allReservation}
                    width={20}
                    height={20}
                    className='mr-2 '
                    alt="Filter Icon"
                  />
                  Reminder history
                </button>
              </AccordionItemPanel> */}
            </AccordionItem>
          </Accordion>

          <hr className='text-gray-500' />
          <Link href="/users"
            className='w-full flex items-center h-16 px-4 font-bold text-gray-500'>
            <Image
              src={user}
              width={20}
              height={20}
              className='mr-4'
              alt="Filter Icon"
            />
            Users
          </Link>
          <hr className='text-gray-500' />
          <Link href="/invoices"
            className='w-full flex items-center h-16 px-4 font-bold text-gray-500'>
            <Image
              src={file}
              width={20}
              height={20}
              className='mr-4'
              alt="Filter Icon"
            />
            Invoices
          </Link>

          <hr className='text-gray-500' />
          <Link href="/settings"
            className='w-full flex items-center h-16 px-4 font-bold text-gray-500'>
            <Image
              src={setting}
              width={20}
              height={20}
              className='mr-4'
              alt="Filter Icon"
            />
            Setting
          </Link>


          <hr className='text-gray-500' />
          <Link href=""
            className='w-full flex items-center justify-center h-16 px-4 font-bold text-blue-500 text-[14px]'>
            <Image
              src={mail}
              width={20}
              height={20}
              className='mr-2'
              alt="Filter Icon"
            />
            Send feedback
          </Link>

        </div>
      </div>
    </>
  )
}
