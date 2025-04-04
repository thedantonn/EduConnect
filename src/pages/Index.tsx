
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';

const Index = () => {
  const navigate = useNavigate();

  const handleFeatureClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4">
        <Hero />
        <Features
          onSelectQueryClick={() => handleFeatureClick('/select-query')}
          onShareInsightsClick={() => handleFeatureClick('/share-insights')}
          onFeedbackClick={() => handleFeatureClick('/feedback')}
        />
      </main>
    </div>
  );
};

export default Index;
