import React from "react"
import "./footer.css"
import Navbar from "./navbar"

export const metadata = {
  title: "AdAdvertiser - AI-Powered Ad Text Generator",
  description: "Generate engaging ad text for your website with AI",
}

const Footer = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="body-root">
        <div className="layout-container">
          <footer className="footer">
            <div className="footer-container">
              <div className="footer-grid">
                <div className="footer-section">
                  <h3 className="footer-title">AdAdvertiser</h3>
                  <p className="footer-text">
                    AI-powered advertisement text generator for your business.
                  </p>
                </div>
                <div className="footer-section">
                  <h3 className="footer-title">Quick Links</h3>
                  <ul className="footer-links">
                    <li><a href="/" className="footer-link">Home</a></li>
                    <li><a href="/#about" className="footer-link">About</a></li>
                    <li><a href="/#contact" className="footer-link">Contact</a></li>
                  </ul>
                </div>
                <div className="footer-section">
                  <h3 className="footer-title">Legal</h3>
                  <ul className="footer-links">
                    <li><a href="#" className="footer-link">Terms of Service</a></li>
                    <li><a href="#" className="footer-link">Privacy Policy</a></li>
                  </ul>
                </div>
              </div>
              <div className="footer-bottom">
                <p>© {new Date().getFullYear()} AdAdvertiser. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

export default Footer
