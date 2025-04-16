import React from 'react'
import "./home.css";
function about() {
  return (
    <div>
        <section className="about-section">
    <div className="about-grid">
      <div className="about-text">
        <h2>About Our Platform</h2>
        <p>
          Our AI-powered advertisement generator helps businesses create compelling ad copy in seconds. We analyze
          your website content to understand your brand and generate text that resonates with your audience.
        </p>
        <p>
          Simply provide your website URL, and our advanced algorithms will extract key information to create
          multiple ad variations for you to <br></br>choose from. Select your favorite, pick a template, and your ad is<br></br>
          ready to share.
        </p>
        <p>
          Perfect for social media campaigns, digital marketing, and <br></br>increasing your online presence without the
          high cost of<br></br> professional copywriting services.
        </p>
      </div>
      <div className="about-steps">
        <h3>How It Works</h3>
        <ul>
          {[
            "Enter your website URL",
            "Our AI analyzes your content",
            "Choose from multiple ad text options",
            "Select a template design",
            "Download or share your ad"
          ].map((step, index) => (
            <li key={index}>
              <span className="step-number">{index + 1}</span>
              <p>{step}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section></div>
  )
}

export default about