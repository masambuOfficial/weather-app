import React from 'react';
import { FaSpinner } from 'react-icons/fa'; // FontAwesome spinner icon

type LoadingSpinnerProps = {
  size?: number; // Size of the icon in pixels
  color?: string; // Color of the icon
};

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 40, color = "#3498db" }) => {
  return (
    <div className="flex items-center justify-center">
      <FaSpinner
        className="animate-spin"
        style={{
          fontSize: `${size}px`,
          color: color,
        }}
      />
    </div>
  );
};

export default LoadingSpinner;
