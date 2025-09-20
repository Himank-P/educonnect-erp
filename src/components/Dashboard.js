import React from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link for navigation

function Dashboard() {
  // Sample data - in a real app, this would come from an API or state management
  const userData = {
    name: 'Rohan Sharma',
    id: 'STU-12345',
    class: '12th Grade - Section A',
  };

  const schoolData = {
      address: '123 Education Lane, Knowledge Park, New Delhi, Delhi 110001',
      phone: '+91 11 2345 6789',
      email: 'contact@educonnectschool.edu.in'
  };

  const announcements = [
    { id: 1, text: 'Mid-term examinations will commence from October 15th.' },
    { id: 2, text: 'Annual Sports Day registrations are now open.' },
    { id: 3, text: 'Fee payment portal will be closed for maintenance on Sunday.' },
  ];

  const upcomingEvents = [
      { id: 1, date: 'Sep 25', title: 'Science Fair Exhibition' },
      { id: 2, date: 'Oct 02', title: 'Gandhi Jayanti Holiday' },
      { id: 3, date: 'Oct 10', title: 'Parent-Teacher Meeting' },
  ];

  return (
    <div className="page-container dashboard-container">
      {/* Dashboard Header */}
      <div className="dashboard-header">
        <h1>Welcome, {userData.name}!</h1>
        <p>Here is your summary for today, {new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}.</p>
      </div>

      {/* Main Dashboard Grid */}
      <div className="dashboard-grid">
        
        {/* Profile Card */}
        <div className="dashboard-card profile-card">
           <h3>👤 Your Profile</h3>
           <p><strong>Name:</strong> {userData.name}</p>
           <p><strong>Student ID:</strong> {userData.id}</p>
           <p><strong>Class:</strong> {userData.class}</p>
        </div>

        {/* Quick Links Card - UPDATED WITH LINKS */}
        <div className="dashboard-card quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/attendance"><span>📚</span> View Attendance</Link></li>
            <li><Link to="/grades"><span>📝</span> Check Grades</Link></li>
            <li><Link to="/fees"><span>💳</span> Pay Fees</Link></li>
            <li><Link to="/timetable"><span>🗓️</span> View Timetable</Link></li>
          </ul>
        </div>
        
        {/* Announcements Card */}
        <div className="dashboard-card announcements-card">
          <h3>📢 Announcements</h3>
           <ul>
            {announcements.map(announcement => (
              <li key={announcement.id}>{announcement.text}</li>
            ))}
          </ul>
        </div>

        {/* Upcoming Events Card */}
        <div className="dashboard-card events-card">
            <h3>Upcoming Events</h3>
            <ul className="events-list">
                {upcomingEvents.map(event => (
                    <li key={event.id}>
                        <div className="event-date">{event.date}</div>
                        <div className="event-title">{event.title}</div>
                    </li>
                ))}
            </ul>
        </div>

        {/* Contact School Card */}
        <div className="dashboard-card contact-school-card">
            <h3>📍 Contact School</h3>
            <div className="map-container">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!m12!1m3!1d112073.64340578811!2d77.15546255169993!3d28.62095898851086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1726854743481!5m2!1sen!2sin" 
                    width="100%" 
                    height="150" 
                    style={{ border: 0 }}
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="School Location"
                ></iframe>
            </div>
            <p className="contact-info"><strong>Address:</strong> {schoolData.address}</p>
            <p className="contact-info"><strong>Phone:</strong> <a href={`tel:${schoolData.phone}`}>{schoolData.phone}</a></p>
            <p className="contact-info"><strong>Email:</strong> <a href={`mailto:${schoolData.email}`}>{schoolData.email}</a></p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;

