import React from 'react';

interface LensFrameProps {
  children: React.ReactNode;
  className?: string;
}

export function LensFrame({ children, className = '' }: LensFrameProps) {
  return (
    <div className={`bracket-frame ${className}`}>
      <div className="bracket-frame-inner">
        {children}
      </div>
    </div>
  );
}
