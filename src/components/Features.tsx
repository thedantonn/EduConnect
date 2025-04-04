
import React from 'react';
import FeatureCard from './FeatureCard';
import { HelpCircle, Share2, MessageSquare } from 'lucide-react';

interface FeaturesProps {
  onSelectQueryClick?: () => void;
  onShareInsightsClick?: () => void;
  onFeedbackClick?: () => void;
}

const Features = ({ 
  onSelectQueryClick, 
  onShareInsightsClick, 
  onFeedbackClick 
}: FeaturesProps) => {
  return (
    <div className="container mx-auto px-4 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          icon={<HelpCircle size={36} />}
          title="Select Query"
          description="Browse subjects, select topics, and post your questions to get help."
          onClick={onSelectQueryClick || (() => console.log('Select Query clicked'))}
        />
        <FeatureCard
          icon={<Share2 size={36} />}
          title="Share Your Insights"
          description="Contribute your knowledge by uploading answers, images, and documents."
          onClick={onShareInsightsClick || (() => console.log('Share Insights clicked'))}
        />
        <FeatureCard
          icon={<MessageSquare size={36} />}
          title="Feedback"
          description="Rate the quality of answers and help improve the community."
          onClick={onFeedbackClick || (() => console.log('Feedback clicked'))}
        />
      </div>
    </div>
  );
};

export default Features;
