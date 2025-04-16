import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  const [showExplanation, setShowExplanation] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger the explanation after a short delay
    const timer = setTimeout(() => {
      setShowExplanation(true);
    }, 2000); // Wait for 2 seconds before showing the explanation

    return () => clearTimeout(timer);
  }, []);

  const handleGetStartedClick = () => {
    navigate('/auth'); // Navigate to login page
  };

  return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-6">
        Why You Need EduConnect
      </h1>
      <p className="text-lg text-center mb-6">
        Struggling with unverified resources? Tired of waiting for answers to your doubts at night?
      </p>

      {/* Explanation that transitions in */}
      {showExplanation && (
        <div className="transition-opacity opacity-100 duration-1000 ease-in-out">
          <p className="text-lg text-center mb-6">
            During exams, trusting unverified resources can be troublesome. And getting doubts
            answered late at night can be frustrating. That’s why we are here:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Search for topics from verified teachers.</li>
            <li>Get PDFs from credible resources.</li>
            <li>Get instant doubt clarification from our Gemini chatbot.</li>
          </ul>
        </div>
      )}

      <Button
        variant="outline"
        className="bg-educonnect-purple text-white border-educonnect-purple mt-6"
        onClick={handleGetStartedClick}
      >
        Get Started
      </Button>
    </div>
  );
};

export default LandingPage;
