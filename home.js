import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './home.css'; // CSS file
import Navbar from './navbar';
import CreateAd from "./createad";
import "./createad.css";
import ImageSlider from './imageslider';

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            Generate Engaging Ads <span className="highlight">in Seconds</span>
          </h1>
          <p>
            Transform your website content into eye-catching advertisements with our <br></br>AI-powered platform. No design
            skills required.
          </p>
          <div className="cta-button">
            <Link to="/CreateAd">
              <button className="primary-button">
                Create Your Ad <ArrowRight className="arrow-icon" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="carousel-section">
        <h2>See What You Can Create</h2>
        {/* Carousel content goes here */}
        <ImageSlider/>
      </section>

      {/* About Section */}
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
              multiple ad variations for you to <br></br>choose from. Select your favorite, pick a template, and your ad is
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
      </section>

      {/* Contact Section */}
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
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
