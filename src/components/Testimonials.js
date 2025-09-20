import React from 'react';
import TestimonialCard from './TestimonialCard'; // Import the new component

// Sample data for testimonials
const testimonialsData = [
  {
    id: 1,
    quote: "EduConnect has transformed our administrative process. Everything is now faster, more transparent, and incredibly efficient.",
    authorName: "Dr. Aruna Sharma",
    authorTitle: "Principal, Modern Delhi Public School"
  },
  {
    id: 2,
    quote: "The student dashboard and communication tools are fantastic. Our student engagement has increased significantly since we adopted the platform.",
    authorName: "Mr. Rajeev Kapoor",
    authorTitle: "Director, Institute of Technology"
  }
];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">Trusted by Leading Institutions</h2>
        <div className="testimonial-grid">
          {testimonialsData.map(testimonial => (
            <TestimonialCard 
              key={testimonial.id}
              quote={testimonial.quote}
              authorName={testimonial.authorName}
              authorTitle={testimonial.authorTitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

