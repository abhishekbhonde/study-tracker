// Footer.js
import React from 'react';

const Footer = () => {
  return (
   <div >
     <footer className="mt-[100px] border-t flex justify-center items-center border-gray-200 py-6 h-[200px]">
      <div className="container mx-auto flex items-center justify-around">
        <div className="flex items-center space-x-2">

          <span className="text-gray-700 text-2xl font-semibold">StudyTracker</span>
        </div>
        <div className="text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Study Tracker. All rights reserved.</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600">Terms of Service</a>
            <a href="#" className="hover:text-blue-600">Contact Us</a>
          </div>
        </div>
      </div>
      
    </footer>
       <p className='text-lg text-center mb-[20px]'> Made with ❤️ by Abhishek Bhonde.</p>
   </div>
  );
};

export default Footer;
