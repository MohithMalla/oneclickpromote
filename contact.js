import React from 'react'
import Navbar from './navbar';

function contact() {
  return (
    <div>
    <section className="contact-section">
      <h2>Contact Us</h2>
      <div className="contact-grid">
        {[
          {
            icon: "📧",
            title: "Email",
            content: "support@adadvertiser.com"
          },
          {
            icon: "📞",
            title: "Phone",
            content: "+1 (555) 123-4567"
          },
          {
            icon: "📍",
            title: "Address",
            content: "123 Ad Avenue, Marketing City, MC 12345"
          }
        ].map((item, index) => (
          <div key={index} className="contact-card">
            <div className="contact-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}</div>
        </section>
        </div>
  )
}

export default contact