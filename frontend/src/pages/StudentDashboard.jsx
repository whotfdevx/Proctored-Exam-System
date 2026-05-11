import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function StudentDashboard() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  const navLinks = [
    { id: 'dashboard', label: '🏠 Dashboard', path: '/dashboard' },
    { id: 'exams', label: '📝 Available Exams', path: '#exams' },
    { id: 'results', label: '📊 My Results', path: '#results' },
    { id: 'profile', label: '👤 My Profile', path: '/profile' }
  ];

  const handleNavClick = (link) => {
    setActiveTab(link.id);
    
    if (link.path.startsWith('/')) {
      navigate(link.path);
    } else {
      // Logic to scroll to section can go here in the future
      console.log(`Scroll to section: ${link.path}`);
    }
    
    // Close sidebar on mobile after clicking
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Top Fixed Navbar */}
      <Navbar studentName="John Doe" />
      
      {/* MOBILE TOP BAR - Secondary bar to toggle sidebar on mobile */}
      <div className="md:hidden bg-white shadow-sm border-b border-gray-200 p-4 flex items-center justify-between">
        <span className="font-semibold text-gray-800">Student Portal</span>
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="text-gray-600 hover:text-gray-900 focus:outline-none flex items-center p-1 rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Open sidebar menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        ></div>
      )}

      {/* LEFT SIDEBAR */}
      <aside 
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white border-r border-gray-200 z-50 transform transition-transform duration-300 ease-in-out md:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col py-6 overflow-y-auto shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
          <h2 className="px-6 text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
            Navigation Menu
          </h2>
          
          <nav className="flex-1 space-y-2 px-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 text-left ${
                  activeTab === link.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      {/* On desktop, apply left margin equal to sidebar width (64 * 0.25rem = 16rem) */}
      <main className="md:ml-64 p-6 min-h-[calc(100vh-4rem-60px)] md:min-h-[calc(100vh-4rem)] flex flex-col transition-all duration-300 ease-in-out">
        <div className="flex-grow bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Content Here</h1>
          <p className="text-gray-500">
            This area will be populated with active exams, recent results, and other student-related widgets.
          </p>
        </div>
        
        {/* FOOTER */}
        <footer className="mt-8 pt-4 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500 font-medium">
            © 2025 ProctorExam. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
