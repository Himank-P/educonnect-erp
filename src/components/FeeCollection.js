import React from 'react';

function FeeCollection() {
  // Sample data - in a real app, this would come from an API
  const feeDetails = {
    totalDue: '15,000',
    dueDate: '30 Sep 2025',
  };

  const paymentHistory = [
    { id: 'TXN789123', date: '15 Jul 2025', amount: '25,000', status: 'Paid' },
    { id: 'TXN456789', date: '15 Apr 2025', amount: '25,000', status: 'Paid' },
    { id: 'TXN123456', date: '15 Jan 2025', amount: '25,000', status: 'Paid' },
  ];

  return (
    <div className="page-container">
      <h1>💳 Fee Collection</h1>
      <p className="page-intro">Review your fee summary, payment history, and proceed with online payment.</p>
      
      <div className="fee-grid">
        
        {/* Fee Summary Card */}
        <div className="dashboard-card fee-summary-card">
          <h3>Fee Summary</h3>
          <div className="summary-item">
            <span>Outstanding Amount:</span>
            <span className="amount">₹{feeDetails.totalDue}</span>
          </div>
          <div className="summary-item">
            <span>Due Date:</span>
            <span>{feeDetails.dueDate}</span>
          </div>
          <button className="form-button pay-now-btn">Pay Now</button>
        </div>

        {/* Payment History Card */}
        <div className="dashboard-card payment-history-card">
          <h3>Payment History</h3>
          <div className="table-container">
            <table className="history-table">
              <thead>
                <tr>
                  <th>Transaction ID</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {paymentHistory.map(payment => (
                  <tr key={payment.id}>
                    <td>{payment.id}</td>
                    <td>{payment.date}</td>
                    <td>₹{payment.amount}</td>
                    <td><span className="status status-paid">{payment.status}</span></td>
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

export default FeeCollection;

