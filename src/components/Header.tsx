
import React from 'react';
import { BookOpen } from 'lucide-react';

const Header = () => {
  return (
    <header className="border-b border-gray-200 py-4 px-6 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-educonnect-purple">Edu Connect</h1>
        </div>
        <div className="flex items-center">
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
