import React, { useState } from "react"
import { ArrowRight, Globe, Loader2 } from "lucide-react"
import "./createad.css" // Make sure to create and link this CSS file
import Navbar from "./navbar"

const Button = ({ children, ...props }) => (
  <button
    {...props}
    className={`custom-button ${props.className || ""}`}
  >
    {children}
  </button>
)

const Input = ({ className, ...props }) => (
  <input
    {...props}
    className={`custom-input ${className || ""}`}
  />
)

const Card = ({ children }) => (
  <div className="custom-card">{children}</div>
)

const CardContent = ({ children, className }) => (
  <div className={`custom-card-content ${className || ""}`}>{children}</div>
)

export default function CreateAd() {
  const [url, setUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!url) {
      setError("Please enter a website URL")
      return
    }

    try {
      new URL(url)
      setError("")
    } catch {
      setError("Please enter a valid URL (e.g., https://example.com)")
      return
    }

    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      window.location.href = "/create/text-options?url=" + encodeURIComponent(url)
    }, 2000)
  }

  return (<div>
    <div className="create-container">
        
      <div className="create-wrapper">
        <h1 className="create-heading">Create Your Advertisement</h1>

        <Card>
          <CardContent className="pt-6">
            <div className="section">
              <div>
                <h2 className="sub-heading">Enter Your Website URL</h2>
                <p className="sub-text">
                  We'll analyze your website content to generate compelling ad text options.
                </p>

                <form onSubmit={handleSubmit} className="form">
                  <div className="input-wrapper">
                    <Globe className="input-icon" />
                    <Input
                      type="text"
                      placeholder="https://yourwebsite.com"
                      className="pl-10"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                    />
                  </div>

                  {error && <p className="error-text">{error}</p>}

                  <Button type="submit" className="submit-button" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="spinner" />
                        Analyzing Website...
                      </>
                    ) : (
                      <>
                        Generate Ad Text
                        <ArrowRight className="arrow-icon" />
                      </>
                    )}
                  </Button>
                </form>
              </div>

              <div className="how-it-works">
                <h3 className="how-title">How it works:</h3>
                <ol className="how-list">
                  <li>Enter your website URL</li>
                  <li>Our AI analyzes your content</li>
                  <li>Choose from multiple ad text options</li>
                  <li>Select a template design</li>
                  <li>Download or share your ad</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    </div>
  )
}
