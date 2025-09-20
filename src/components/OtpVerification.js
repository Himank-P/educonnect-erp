import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function OtpVerification() {
  const { userType } = useParams(); // Gets 'school', 'teacher', or 'student' from the URL
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false; // Only allow numbers
    
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`OTP Submitted for ${userType}: ${otp.join('')}`);
    // Here you would verify the OTP with your backend
  };

  return (
    <div className="page-container form-container">
      <div className="form-card">
        <div className="form-header">
          <h2>OTP Verification</h2>
          <p>An OTP has been sent to your registered email address.</p>
          <p>Please enter the 6-digit code below.</p>
        </div>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="otp-group">
            {otp.map((data, index) => {
              return (
                <input
                  className="otp-input"
                  type="text"
                  name="otp"
                  maxLength="1"
                  key={index}
                  value={data}
                  onChange={e => handleChange(e.target, index)}
                  onFocus={e => e.target.select()}
                />
              );
            })}
          </div>
          <button type="submit" className="form-button">Verify Account</button>
        </form>
      </div>
    </div>
  );
}

export default OtpVerification;
