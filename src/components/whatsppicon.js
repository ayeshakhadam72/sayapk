
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Importing the WhatsApp icon

const WhatsApp = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a 
        // href="https://wa.me/Chat on WhatsApp with +92 300 7887292" 
       
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-lg transition"
      >
        <FaWhatsapp className="text-white text-xl" />
      </a>
    </div>
  );
};

export default WhatsApp;
