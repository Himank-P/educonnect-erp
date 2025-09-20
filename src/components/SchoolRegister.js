import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SchoolRegister() {
  const navigate = useNavigate();
  const [schoolName, setSchoolName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend to trigger an OTP
    console.log({ schoolName, email, phone });
    // Navigate to the OTP verification page for schools
    navigate('/verify/school');
  };

  return (
    <div className="page-container form-container">
      <div className="form-card">
        <div className="form-header">
          <div className="form-icon">🏫</div>
          <h2>Register Your School</h2>
          <p>Please fill in the details below to get started.</p>
        </div>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="schoolName">School Name</label>
            <input
              type="text"
              id="schoolName"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Official Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Contact Number</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="form-button">Send OTP</button>
        </form>
      </div>
    </div>
  );
}

export default SchoolRegister;
