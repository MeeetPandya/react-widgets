import React, { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  startOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
} from "date-fns";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  const monthName = format(currentDate, "MMMM");
  const year = format(currentDate, "yyyy");

  const monthStart = startOfMonth(currentDate);
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 0 }); // Sunday start

  const days = [];
  for (let i = 0; i < 42; i++) {
    const date = addDays(calendarStart, i);
    days.push({
      date,
      number: date.getDate(),
      currentMonth: isSameMonth(date, currentDate),
      isToday: isSameDay(date, new Date()),
      selected: isSameDay(date, currentDate),
    });
  }

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto bg-white shadow-xl rounded-2xl p-4 select-none max-h-[400px]">
      {/* Header */}
      <div className="flex justify-between items-center w-full mb-4">
        <button
          onClick={handlePrevMonth}
          className="text-gray-600 hover:text-blue-500 transition"
        >
          ◀
        </button>
        <h2 className="text-lg font-semibold text-gray-800">
          {monthName} {year}
        </h2>
        <button
          onClick={handleNextMonth}
          className="text-gray-600 hover:text-blue-500 transition"
        >
          ▶
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 w-full text-center text-sm font-medium text-gray-500 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1 w-full">
        {days.map((d, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentDate(d.date)}
            className={`flex items-center justify-center h-12 w-12 rounded-full cursor-pointer transition
              ${
                d.isToday
                  ? "border-2 border-blue-500"
                  : "border border-transparent"
              }
              ${
                d.selected
                  ? "bg-blue-500 text-white"
                  : d.currentMonth
                  ? "text-gray-800"
                  : "text-gray-400"
              }
              hover:bg-blue-100`}
          >
            {d.number}
          </div>
        ))}
      </div>
    </div>
  );
}
