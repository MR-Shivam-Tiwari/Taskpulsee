import React, { useState } from 'react';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    } else {
      console.error(`Section with id ${sectionId} not found`);
    }
  };

  return (
    <nav className="bg-black text-white fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-3xl font-bold text-white cursor-pointer">
          <img
            src="https://www.taskpulse.in/images/demo-logo.png"
            className="img-fluid rounded-top h-[80px] w-[120px] object-cover"
            alt="Logo"
          />
        </div>

        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li onClick={() => scrollToSection('home')} className="cursor-pointer hover:text-blue-500">HOME</li>
          <li onClick={() => scrollToSection('services')} className="cursor-pointer hover:text-blue-500">SERVICES</li>
          <li onClick={() => scrollToSection('about')} className="cursor-pointer hover:text-blue-500">ABOUT US</li>
          <li onClick={() => scrollToSection('task-list')} className="cursor-pointer hover:text-blue-500">TASK LIST</li>
          <li onClick={() => scrollToSection('testimonials')} className="cursor-pointer hover:text-blue-500">TESTIMONIALS</li>
          <li onClick={() => scrollToSection('contact')} className="cursor-pointer hover:text-blue-500">CONTACT US</li>
        </ul>

        <div className="md:hidden">
          <button onClick={() => setIsSidebarOpen(true)} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>
          </button>
        </div>
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-50">
          <div className="bg-black text-white w-full p-6 transition-transform transform duration-300 ease-in-out translate-y-0">
            <button onClick={() => setIsSidebarOpen(false)} className="text-white text-2xl absolute top-4 right-4">
              &times;
            </button>
            <ul className="mt-16 space-y-6 text-xl">
              <li onClick={() => { scrollToSection('home'); setIsSidebarOpen(false); }} className="cursor-pointer hover:text-blue-500">Home</li>
              <li onClick={() => { scrollToSection('services'); setIsSidebarOpen(false); }} className="cursor-pointer hover:text-blue-500">Services</li>
              <li onClick={() => { scrollToSection('about'); setIsSidebarOpen(false); }} className="cursor-pointer hover:text-blue-500">About Us</li>
              <li onClick={() => { scrollToSection('task-list'); setIsSidebarOpen(false); }} className="cursor-pointer hover:text-blue-500">Task List</li>
              <li onClick={() => { scrollToSection('testimonials'); setIsSidebarOpen(false); }} className="cursor-pointer hover:text-blue-500">Testimonials</li>
              <li onClick={() => { scrollToSection('contact'); setIsSidebarOpen(false); }} className="cursor-pointer hover:text-blue-500">Contact Us</li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
