import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
// must change to update current plants NEW water date
// as setNextWater isnt being passed to the component from plant Details
const CalendarComponent = ({ setNextWaterDate, nextWaterDate, updatePlant }) => {
  const [date, setDate] = useState(new Date());
  const [error, setError] = useState(null);
  const dateChecker = (value) => {
    setError(null);
    if (value < new Date()) {
      setDate("");
      return true;
    }
  };
  const handler = (value) => {
    if (dateChecker(value)) {
      setError("date value can't be before todays date");
      setDate(new Date());
    } else {
      setDate(value);
    }
  };
  useEffect(() => {
    if(setNextWaterDate){
      setNextWaterDate(date.toDateString());
    }
  }, [date]);
  return (
    <>
      <h2>React Calendar</h2>
      <div className="calendar-container">
        <Calendar onChange={handler} value={date} />
      </div>
      <p className="text-center">
        <span className={error ? "error bold" : "bold"}>Selected Date:</span>{" "}
        {date.toDateString()}
      </p>
      <button onClick={updatePlant}>confirm date</button>
    </>
  );
};
export default CalendarComponent;
