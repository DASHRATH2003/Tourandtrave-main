import React from 'react';

const ContactBar = () => {
  return (
    <>
      {/* Desktop Contact Bar */}
      <div className="hidden md:flex fixed right-0 top-1/2 transform -translate-y-1/2 z-50 flex-col">
        <a
          href="https://wa.me/+919916599719"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 hover:bg-green-600 transition-colors flex items-center group relative"
          style={{ borderTopLeftRadius: '8px' }}
        >
          <i className="fab fa-whatsapp text-2xl"></i>
          
        </a>
        <a
          href="tel:+919916599719"
          className="bg-blue-500 text-white p-4 hover:bg-blue-600 transition-colors flex items-center group relative"
        >
          <i className="fas fa-phone text-2xl"></i>
         
        </a>
        <a
          href="mailto:infovtt@varshadhaaratours.com"
          className="bg-black text-white p-4 hover:bg-gray-800 transition-colors flex items-center group relative"
          style={{ borderBottomLeftRadius: '8px' }}
        >
          <i className="fas fa-envelope text-2xl"></i>
         
        </a>
      </div>

      {/* Mobile Contact Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50">
        <div className="flex justify-around py-3">
          <a
            href="https://wa.me/+919916599719"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors relative group"
          >
            <i className="fab fa-whatsapp text-xl"></i>
            <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
              WhatsApp: +919916599719
            </span>
          </a>
          <a
            href="tel:+919916599719"
            className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors relative group"
          >
            <i className="fas fa-phone text-xl"></i>
            <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
              Call: +919916599719
            </span>
          </a>
          <a
            href="mailto:infovtt@varshadhaaratours.com"
            className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors relative group"
          >
            <i className="fas fa-envelope text-xl"></i>
            <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
              Email: infovtt@varshadhaaratours.com
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactBar; 