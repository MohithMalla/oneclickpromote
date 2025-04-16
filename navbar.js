import React, { useState } from "react"
import { Menu, X } from "lucide-react"
import "./navbar.css" // Import the normal CSS file

// Dummy Button component
const Button = ({ children, onClick, className, variant }) => (
  <button
    onClick={onClick}
    className={`${className} button ${variant === "outline" ? "outline" : "primary"}`}
  >
    {children}
  </button>
)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username] = useState("User")
  const [pathname, setPathname] = useState(window.location.pathname)

  const toggleMenu = () => setIsOpen(!isOpen)
  const handleLogin = () => setIsLoggedIn(true)
  const handleLogout = () => setIsLoggedIn(false)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ]

  const handleLinkClick = (href) => {
    setPathname(href)
    setIsOpen(false)
    window.history.pushState({}, "", href)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="/" className="navbar-logo" onClick={() => handleLinkClick("/")}>
          AdAdvertiser
        </a>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={`navbar-link ${pathname === link.href ? "active" : ""}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="navbar-auth">
          {isLoggedIn ? (
            <>
              <span className="welcome-text">Welcome, {username}</span>
              <Button variant="outline" onClick={handleLogout}>
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" onClick={handleLogin}>
                Sign In
              </Button>
              <a href="/signup" onClick={() => handleLinkClick("/signup")}>
                <Button>Sign Up</Button>
              </a>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="mobile-toggle">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={`mobile-link ${pathname === link.href ? "active" : ""}`}
            >
              {link.name}
            </a>
          ))}
          {isLoggedIn ? (
            <>
              <div className="mobile-link">Welcome, {username}</div>
              <Button variant="outline" className="button" onClick={handleLogout}>
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" className="button" onClick={handleLogin}>
                Sign In
              </Button>
              <a href="/signup" onClick={() => handleLinkClick("/signup")}>
                <Button className="button">Sign Up</Button>
              </a>
            </>
          )}
        </div>
      )}
    </nav>
  )
}

export default Navbar
