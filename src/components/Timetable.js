import React from 'react';

function Timetable() {
  const schedule = {
    Monday: ["Physics", "Chemistry", "Break", "Mathematics", "English"],
    Tuesday: ["Chemistry", "Mathematics", "Break", "English", "Physics"],
    Wednesday: ["Mathematics", "English", "Break", "Physics", "Chemistry"],
    Thursday: ["English", "Physics", "Break", "Chemistry", "Mathematics"],
    Friday: ["Physics", "Chemistry", "Break", "English", "Lab"],
    Saturday: ["-", "-", "-", "-", "-"],
  };

  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM"];

  return (
    <div className="page-container">
      <h1>🗓️ Class Timetable</h1>
      <p className="page-intro">
        Your weekly schedule for classes, labs, and breaks.
      </p>
      <div className="dashboard-card">
        <div className="table-container">
          <table className="history-table timetable">
            <thead>
              <tr>
                <th>Time</th>
                {Object.keys(schedule).map(day => <th key={day}>{day}</th>)}
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((time, timeIndex) => (
                <tr key={time}>
                  <td>{time}</td>
                  {Object.keys(schedule).map(day => (
                    <td key={day} className={schedule[day][timeIndex] === 'Break' ? 'break-slot' : ''}>
                      {schedule[day][timeIndex]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Timetable;
 