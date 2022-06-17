import './App.css';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import AppointmentList from './AppointmentList'
import CreateAppointment from './CreateAppointment';

const locales = {
  'en-US': require("date-fns/locale/en-US"),
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

function App() {
  const [newEvent, setNewEvent] = useState({ title: "", fName: "", lName: "", email: "", gender: "", Age: "", time: "", start: "", end: "" })
  const [allEvents, setAllEvents] = useState(AppointmentList)

  function handleAddEvent(e) {
    setAllEvents([...allEvents, newEvent])
    console.log(newEvent);
    e.preventDefault()
  }

  // if (localStorage.getItem(newEvent)) {
  //   localStorage.setItem(newEvent);
  // }
  useEffect(() => {
    // storing input name
    localStorage.setItem("Appointment", JSON.stringify(newEvent));
  }, [newEvent]);
  return (
    <>
      <h1 style={{ textAlign: 'center', marginTop: '30px' }}>Doctor Appointment</h1>
      <h2 style={{ textAlign: 'center' }}>Creacte Appointment</h2>
      <CreateAppointment newEvent={newEvent} setNewEvent={setNewEvent} handleAddEvent={handleAddEvent} />
      <div className="App">
        <Calendar
          localizer={localizer}
          events={allEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 700, margin: '50px' }}
        />
      </div>
    </>
  );
}

export default App;
