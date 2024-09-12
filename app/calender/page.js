'use client';
import React, { useState } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Link from 'next/link';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

export default function Page() {
  const [events, setEvents] = useState([
    { title: 'Event 1', date: '2024-09-10' },
    { title: 'Event 2', date: '2024-09-12' },
  ]);

  const handleDateClick = (info) => {
    // alert('Date clicked: ' + info.dateStr);
  };

  const customHeaderToolbar = {
    left: 'prev',
    center: 'title',
    right: 'next'
  };

  return (
    <>
      <div className="mt-10 mb-3">
        <h1 className="font-bold text-3xl text-gray-500">Calendar</h1>
        <p className="text-gray-500">
          <Link href="/" className="text-blue-700">Home</Link> / Calendar
        </p>
      </div>
      <div className="py-4 bg-white w-full rounded-md" style={{ height: '100vh' }}>
        <div className='w-full text-center my-3'>
          <Link href='/add-reservation' className='p-2 px-4 bg-blue-500 text-white font-bold rounded-md '>New reservation</Link>
        </div>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          dateClick={handleDateClick}
          headerToolbar={customHeaderToolbar}
          height="100%"
        />
      </div>
    </>
  );
}
