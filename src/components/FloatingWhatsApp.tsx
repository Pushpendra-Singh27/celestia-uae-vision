import React from 'react';
import { motion } from 'framer-motion';

const WHATSAPP_NUMBER = '917715841612'; // without + for wa.me

const FloatingWhatsApp: React.FC = () => {
  const handleClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-6 right-4 md:bottom-8 md:right-8 z-40 group"
    >
      <div className="relative flex items-center">
        <div className="absolute -right-2 -top-2 px-2 py-0.5 rounded-full bg-primary text-[10px] font-semibold text-background shadow-lg group-hover:scale-105 transition-transform">
          Chat
        </div>
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] shadow-xl shadow-emerald-500/40 flex items-center justify-center border border-white/70 group-hover:scale-105 group-hover:shadow-2xl transition-transform duration-300">
          {/* Simple WhatsApp icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-7 h-7 text-white"
          >
            <path
              fill="currentColor"
              d="M16 3C9.383 3 4 8.383 4 15c0 2.19.594 4.238 1.656 6L4 29l8.219-1.594A11.86 11.86 0 0 0 16 27c6.617 0 12-5.383 12-12S22.617 3 16 3m0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10a9.8 9.8 0 0 1-3.992-.848l-.285-.13l-4.875.945l.93-4.742l-.148-.293A9.77 9.77 0 0 1 6 15c0-5.535 4.465-10 10-10m-3.066 4c-.25 0-.648.094-.984.469c-.336.375-1.293 1.262-1.293 3.07c0 1.809 1.324 3.555 1.508 3.797c.184.242 2.617 4.18 6.469 5.691c3.199 1.262 3.855 1.012 4.551.949c.696-.063 2.242-.914 2.559-1.797c.316-.883.316-1.637.223-1.797c-.093-.16-.336-.254-.703-.445c-.367-.191-2.168-1.07-2.504-1.191c-.336-.122-.582-.184-.828.188c-.246.371-.949 1.191-1.164 1.437c-.215.246-.43.277-.797.086c-.367-.191-1.551-.572-2.957-1.82c-1.094-.973-1.832-2.176-2.047-2.547c-.215-.371-.023-.57.168-.757c.172-.17.383-.445.574-.667c.191-.223.254-.371.383-.617c.129-.246.066-.465-.035-.648c-.102-.183-.9-2.156-1.27-2.953c-.332-.738-.676-.797-.926-.805"/>
          </svg>
        </div>
      </div>
    </motion.button>
  );
};

export default FloatingWhatsApp;
