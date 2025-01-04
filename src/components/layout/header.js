'use client';

import { Search, Bell, Settings } from 'lucide-react';

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 md:p-6 border-b bg-white">
      <h1 className="text-2xl font-bold text-[#15192C]">Overview</h1>
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for something"
            className="w-[250px] px-10 py-2 bg-gray-50 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
        
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Settings className="h-5 w-5 text-gray-600" />
        </button>
        
        <button className="p-2 hover:bg-gray-100 rounded-lg relative">
          <Bell className="h-5 w-5 text-gray-600" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        
        <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
          <img 
            src="/images/photo.png" 
            alt="Profile" 
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;