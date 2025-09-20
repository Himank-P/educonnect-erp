import React from 'react';

function Attendance() {
  // Sample data for attendance
  const attendanceSummary = {
    percentage: "92%",
    totalClasses: 120,
    attendedClasses: 110,
    absentClasses: 10,
  };

  const attendanceRecords = [
    { date: "20 Sep 2025", status: "Present" },
    { date: "19 Sep 2025", status: "Present" },
    { date: "18 Sep 2025", status: "Absent" },
    { date: "17 Sep 2025", status: "Present" },
    { date: "16 Sep 2025", status: "Present" },
  ];

  return (
    <div className="page-container">
      <h1>📚 Attendance Record</h1>
      <p className="page-intro">
        Track your attendance summary and view day-wise records for all subjects.
      </p>

      {/* Attendance Summary Grid */}
      <div className="summary-grid">
        <div className="summary-card attendance-percentage">
          <div className="summary-value">{attendanceSummary.percentage}</div>
          <div className="summary-label">Overall Percentage</div>
        </div>
        <div className="summary-card">
          <div className="summary-value">{attendanceSummary.totalClasses}</div>
          <div className="summary-label">Total Classes</div>
        </div>
        <div className="summary-card">
          <div className="summary-value">{attendanceSummary.attendedClasses}</div>
          <div className="summary-label">Attended</div>
        </div>
        <div className="summary-card">
          <div className="summary-value">{attendanceSummary.absentClasses}</div>
          <div className="summary-label">Absent</div>
        </div>
      </div>

      {/* Detailed Records Table */}
      <div className="dashboard-card recent-attendance-card">
        <h3>Recent Activity</h3>
        <div className="table-container">
          <table className="history-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {attendanceRecords.map((record, index) => (
                <tr key={index}>
                  <td>{record.date}</td>
                  <td>
                    <span className={`status ${record.status === 'Present' ? 'status-paid' : 'status-absent'}`}>
                      {record.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Attendance;

