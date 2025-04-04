
import React, { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  buttonText?: string;
  onClick?: () => void;
}

const FeatureCard = ({
  icon,
  title,
  description,
  buttonText = "Get Started",
  onClick
}: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 flex flex-col items-start">
      <div className="text-educonnect-purple mb-4 w-12 h-12 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <button 
        onClick={onClick} 
        className="bg-educonnect-purple text-white py-2 px-4 rounded-md w-full mt-auto hover:bg-opacity-90 transition-colors"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default FeatureCard;
