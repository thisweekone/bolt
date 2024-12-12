import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
}

const Button = ({ 
  variant = 'primary', 
  children, 
  fullWidth = false, 
  className = '', 
  ...props 
}: ButtonProps) => {
  const baseStyles = 'px-6 py-2.5 rounded-md text-base font-semibold transition duration-200 transform hover:scale-105 shadow-sm whitespace-nowrap';
  const variants = {
    primary: 'bg-[#FA7413] text-white hover:bg-[#FA8A3D] shadow-orange-200/50',
    outline: 'text-[#FA7413] border-2 border-[#FA7413] hover:bg-[#FA7413] hover:text-white shadow-orange-100/50',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;