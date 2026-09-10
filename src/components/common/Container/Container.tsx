import React from 'react';
export const Container = ({ children, className = '' }: any) => (
  <div className={`w-full max-w-[1280px] mx-auto px-6 ${className}`}>
    {children}
  </div>
);
