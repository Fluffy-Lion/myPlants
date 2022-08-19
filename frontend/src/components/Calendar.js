import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  return (
    <>
    <h2>React Calendar</h2>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className="text-center">
        <span className="bold">Selected Date:</span>{' '} {date.toDateString()}
      </p>
    </>
  );
};
export default CalendarComponent;
