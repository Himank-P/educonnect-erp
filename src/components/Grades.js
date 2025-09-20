import React from 'react';

function Grades() {
  // Sample data for grades
  const midTermResults = [
    { subject: 'Physics', marks: '88/100', grade: 'A+' },
    { subject: 'Chemistry', marks: '92/100', grade: 'A+' },
    { subject: 'Mathematics', marks: '95/100', grade: 'A+' },
    { subject: 'English', marks: '85/100', grade: 'A' },
  ];

  const finalTermResults = [
     { subject: 'Physics', marks: '90/100', grade: 'A+' },
    { subject: 'Chemistry', marks: '89/100', grade: 'A+' },
    { subject: 'Mathematics', marks: '96/100', grade: 'A+' },
    { subject: 'English', marks: '88/100', grade: 'A' },
  ];

  return (
    <div className="page-container">
      <h1>📝 Grades & Results</h1>
      <p className="page-intro">
        View your academic performance, including marks from various examinations and assignments.
      </p>

      <div className="grades-grid">
        {/* Mid-Term Results Card */}
        <div className="dashboard-card">
          <h3>Mid-Term Examination Results</h3>
          <div className="table-container">
            <table className="history-table">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Marks Obtained</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {midTermResults.map((result, index) => (
                  <tr key={index}>
                    <td>{result.subject}</td>
                    <td>{result.marks}</td>
                    <td>{result.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Final Term Results Card */}
        <div className="dashboard-card">
          <h3>Final Term Examination Results</h3>
           <div className="table-container">
            <table className="history-table">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Marks Obtained</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {finalTermResults.map((result, index) => (
                  <tr key={index}>
                    <td>{result.subject}</td>
                    <td>{result.marks}</td>
                    <td>{result.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grades;

