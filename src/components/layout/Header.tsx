import { Search, Bell, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [notifications] = useState(2);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="h-14 bg-white border-b border-gray-100 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl h-full mx-auto px-4">
        <div className="flex items-center justify-between h-full relative">
          {/* Left section */}
          <div className="flex items-center gap-4 flex-1 lg:max-w-xl">
            <img src="/logo.png" alt="Bridge" className="h-auto w-auto" />
            
            {/* Desktop Search */}
            <div className="hidden md:block relative flex-1">
              <input
                type="text"
                placeholder="Search"
                className="w-full h-10 pl-10 pr-4 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>

            {/* Mobile Search Button */}
            <button 
              onClick={() => setShowSearch(!showSearch)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              <Search size={20} className="text-gray-500" />
            </button>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Bookmark */}
            <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 hidden sm:flex">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Notifications */}
            <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 relative">
              <Bell size={24} />
              {notifications > 0 && (
                <span className="absolute top-1 right-1 w-5 h-5 flex items-center justify-center bg-yellow-400 text-black text-xs font-medium rounded-full">
                  {notifications}
                </span>
              )}
            </button>

            {/* Profile */}
            <button className="flex items-center gap-2 hover:bg-gray-100 rounded-lg p-1">
              <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                <img src="/images/avatar.jpg" alt="" className="w-full h-full object-cover" />
              </div>
              <span className="font-medium hidden sm:block">Man Devlpmt</span>
              <ChevronDown size={16} className="hidden sm:block" />
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {showSearch && (
          <div className="absolute top-14 left-0 right-0 p-4 bg-white border-b border-gray-100 md:hidden">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full h-10 pl-10 pr-4 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
