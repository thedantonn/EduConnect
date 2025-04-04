
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b border-gray-200 py-4 px-6 md:px-8 bg-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-educonnect-purple hover:text-opacity-80 transition-colors">
            Edu Connect
          </Link>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="font-medium hover:text-educonnect-purple">Home</Link>
          <Link to="/select-query" className="font-medium hover:text-educonnect-purple">Select Query</Link>
          <Link to="/share-insights" className="font-medium hover:text-educonnect-purple">Share Insights</Link>
          <Link to="/feedback" className="font-medium hover:text-educonnect-purple">Feedback</Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/auth">
            <Button variant="outline" className="border-educonnect-purple text-educonnect-purple">
              Login
            </Button>
          </Link>
          <div className="flex items-center text-xl font-semibold">
            <BookOpen className="mr-2 h-6 w-6 text-educonnect-purple" />
            <span>EduConnect</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
