import React from "react";

const Calendar = () => {
  // Get the current date, year, and month
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const today = currentDate.getDate();

  // Get the first day of the month and total days in the current month
  const firstDay = new Date(currentYear, currentDate.getMonth(), 1).getDay();
  const totalDays = new Date(
    currentYear,
    currentDate.getMonth() + 1,
    0
  ).getDate();

  // Generate the days for the calendar
  const days = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
  }
  for (let day = 1; day <= totalDays; day++) {
    days.push(
      <div
        key={`day-${day}`}
        className={`calendar-day ${day === today ? "today" : ""}`}
      >
        {day}
      </div>
    );
  }

  return (
    <div className="calendar-container ">
      <h3 className="calendar-header">
        {currentMonth} {currentYear}
      </h3>
      <div className="calendar-grid">
        <div className="calendar-day-name">Sun</div>
        <div className="calendar-day-name">Mon</div>
        <div className="calendar-day-name">Tue</div>
        <div className="calendar-day-name">Wed</div>
        <div className="calendar-day-name">Thu</div>
        <div className="calendar-day-name">Fri</div>
        <div className="calendar-day-name">Sat</div>
        {days}
      </div>
    </div>
  );
};

export default Calendar;
