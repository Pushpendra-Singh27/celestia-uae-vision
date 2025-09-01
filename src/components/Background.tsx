import React from 'react';
import dubaiBg from '@/assets/dubai2.jpg';

const Background = () => {
  return (
    <div 
      className="fixed inset-0 -z-50 w-full h-full"
      style={{
        backgroundImage: `url(${dubaiBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        willChange: 'transform',
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
    </div>
  );
};

export default Background;
