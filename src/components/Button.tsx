import React from 'react';

interface ButtonProps {
  url: string;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ url, label }) => {
  return (
    <div className="m-2">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="px-12 py-3 bg-dark_green text-white font-bold rounded-lg shadow-custom-offset hover:bg-primary_color"
      >
        {label}
      </a>
    </div>
  );
};

export default Button;