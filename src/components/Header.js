import React from "react";
import Activity from "./Activity";
// import iitmlogo from "../images/sidebarimage.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = () => {
  return (
    <header className="bg-[#F5F6FB] px-6 py-4 flex items-center justify-between m-4 border rounded-3xl">
      <div className="flex items-center space-x-4">
        <img src="https://study.iitm.ac.in/ds/assets/img/IITMOD-Logo.svg" alt="Logo" className="w-40"/> 
        {/* Left side end */}        
      </div>
      {/* Middle section of header start */}
      <div>
      <nav className="flex space-x-4 bg-[#EEEFF4] px-5 py-2 items-center justify-between rounded-full border">
          <a href="/course" className="text-black font-extralight text-md">Courses</a>
          <a href="/dashboard" className="text-white bg-black rounded-full px-4 py-2 font-extralight text-md">Dashboard</a>
          <a href="/schedule" className="text-black font-extralight text-md">Schedule</a>
          <a href="/message" className="text-black font-extralight text-md">Message</a>
          <a href="/support" className="text-black font-extralight text-md">Support</a>
        </nav>
      </div>
      {/* Middle section of header end */}

      {/* Right section of header start */}
      <div className="flex items-center space-x-4">
        <button className="text-black relative">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405C17.77 14.23 17 13.114 17 12V6.5c0-2.018-1.267-3.805-3-4.25V2a2 2 0 00-4 0v.25C8.267 2.695 7 4.482 7 6.5V12c0 1.114-.77 2.23-1.595 3.595L4 17h5m2 0v1m-4 1h8" />
          </svg>
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <img src="https://thispersondoesnotexist.com/" alt="Profile" className="h-8 w-8 rounded-full" /> {/* Replace with actual profile picture path */}
        {/* <FontAwesomeIcon icon="fa-solid fa-chevron-down" /> */}
      </div>
        {/* Right section of header end */}
    </header>
  );
};

export default Header;
