import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ studentName = "John Doe" }) {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 h-16">
      <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        {/* LEFT SIDE: App logo */}
        <div className="flex items-center">
          {/* Hamburger Icon (visible only on mobile) */}
          <button className="md:hidden mr-3 text-gray-600 hover:text-gray-900 focus:outline-none">
            {/* simple hamburger SVG */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          <button 
            onClick={() => navigate('/dashboard')}
            className="text-xl sm:text-2xl font-bold text-[#1e3a5f] focus:outline-none hover:opacity-80 transition-opacity"
          >
            ProctorExam
          </button>
        </div>

        {/* MIDDLE: Welcome text (hidden on mobile, visible on md+) */}
        <div className="hidden md:flex flex-1 justify-center">
          <span className="text-gray-500 font-medium text-sm sm:text-base">
            Welcome, Student
          </span>
        </div>

        {/* RIGHT SIDE: Notifications, Profile, Logout */}
        <div className="flex items-center space-x-3 sm:space-x-5">
          
          {/* Bell Icon with Badge */}
          <button className="relative p-1 text-gray-500 hover:text-gray-700 focus:outline-none transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
            </svg>
            {/* Red dot badge */}
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-500 rounded-full border-2 border-white">
              3
            </span>
          </button>

          {/* Student Name */}
          <span className="hidden sm:block text-sm font-medium text-gray-700">
            {studentName}
          </span>

          {/* Logout Button */}
          <button
            onClick={() => navigate('/')}
            className="bg-red-500 hover:bg-red-600 text-white text-xs sm:text-sm font-medium py-1.5 px-3 sm:px-4 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
          >
            Logout
          </button>
        </div>
        
      </div>
    </nav>
  );
}
