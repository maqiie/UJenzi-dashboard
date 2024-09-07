import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 
import timeGridPlugin from '@fullcalendar/timegrid'; 
import interactionPlugin from '@fullcalendar/interaction'; 

const Calendar = () => {
  const [events, setEvents] = useState([
    { title: 'Meeting', date: '2024-09-10' },
    { title: 'Conference', date: '2024-09-14' },
  ]);

  const handleDateClick = (arg) => {
    const title = prompt('Enter event title:');
    if (title) {
      setEvents([...events, { title, date: arg.dateStr }]);
    }
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Calendar</h2>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        editable={true}
        selectable={true}
      />
    </div>
  );
};

export default Calendar;
