import React from 'react';
import AlumniCard from './AlumniCard'; // Assumes AlumniCard.js is in the same folder
import alumniData from './alumniData.json'; // Assumes alumniData.json is in the same folder

function AlumniPortal() {
  return (
    <div className="page-container">
      <h1>🌐 Alumni Portal</h1>
      <p className="page-intro">Connect with fellow alumni, find mentorship opportunities, and stay updated with campus news.</p>
      
      <div className="alumni-grid">
        {alumniData.map(alumnus => (
          <AlumniCard key={alumnus.id} alumni={alumnus} />
        ))}
      </div>
    </div>
  );
}

export default AlumniPortal;

