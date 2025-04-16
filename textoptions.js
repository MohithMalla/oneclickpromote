import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { ArrowRight, Loader2 } from 'lucide-react';
import "./textoptions.css";
function TextOptions() {
  const router = useRouter();
  const { url } = router.query;
  
  // Mock data generator
  const generateMockAdTexts = (domain) => [
    { id: 1, text: `Transform your online presence with ${domain}. Innovative solutions for modern businesses.` },
    { id: 2, text: `Discover why thousands choose ${domain}. Quality service that exceeds expectations.` },
    { id: 3, text: `${domain} - Where excellence meets affordability. Try us today and see the difference.` },
    { id: 4, text: `Elevate your experience with ${domain}. The smart choice for savvy customers.` },
    { id: 5, text: `Don't settle for less. Choose ${domain} for premium quality at competitive prices.` },
    { id: 6, text: `${domain} - Redefining standards in the industry. Join our satisfied customers now.` }
  ];

  // State management
  const [isLoading, setIsLoading] = useState(true);
  const [adTexts, setAdTexts] = useState([]);
  const [selectedTextId, setSelectedTextId] = useState(null);

  useEffect(() => {
    // Extract domain from URL
    let domain = "";
    try {
      domain = new URL(url || "").hostname.replace("www.", "");
    } catch (err) {
      domain = "yourwebsite.com";
    }

    // Simulate API loading
    setTimeout(() => {
      setAdTexts(generateMockAdTexts(domain));
      setIsLoading(false);
    }, 1500);
  }, [url]);

  const handleSelectText = (id) => {
    setSelectedTextId(id);
  };

  const handleContinue = () => {
    if (selectedTextId !== null) {
      router.push(`/create/templates?url=${encodeURIComponent(url)}&textId=${selectedTextId}`);
    }
  };

  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Choose Your Ad Text</h1>
        <p className="subtitle">Select the text that best represents your brand and message</p>

        {isLoading ? (
          <div className="loading">
            <Loader2 className="loader" />
            <p className="loading-text">Generating ad text options...</p>
          </div>
        ) : (
          <>
            <div className="card-grid">
              {adTexts.map((adText) => (
                <Card
                  key={adText.id}
                  className={`card ${selectedTextId === adText.id ? "selected-card" : "hover-card"}`}
                  onClick={() => handleSelectText(adText.id)}
                >
                  <CardContent className="card-content">
                    <p className="ad-text">{adText.text}</p>
                    {selectedTextId === adText.id && (
                      <div className="selected-badge">
                        <div className="badge">Selected</div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="button-container">
              <Button
                className="continue-button"
                size="lg"
                disabled={selectedTextId === null}
                onClick={handleContinue}
              >
                Continue to Templates
                <ArrowRight className="arrow-icon" />
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default TextOptions;
