import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StudentRegister() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [studentId, setStudentId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ fullName, email, studentId });
    navigate('/verify/student');
  };

  return (
    <div className="page-container form-container">
      <div className="form-card">
        <div className="form-header">
          <div className="form-icon">🎓</div>
          <h2>Student Registration</h2>
          <p>Create your account to access the portal.</p>
        </div>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
           <div className="form-group">
            <label htmlFor="studentId">Student ID / Roll No.</label>
            <input
              type="text"
              id="studentId"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="form-button">Send OTP</button>
        </form>
      </div>
    </div>
  );
}

export default StudentRegister;
