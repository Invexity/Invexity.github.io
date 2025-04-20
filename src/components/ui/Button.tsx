import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-pink-500 hover:bg-pink-600 text-white focus:ring-pink-500',
    secondary: 'bg-brown-800 hover:bg-brown-900 text-white focus:ring-brown-800',
    outline: 'border border-brown-300 hover:bg-brown-50 text-brown-800 focus:ring-brown-300',
  };
  
  const sizeClasses = {
    small: 'text-xs px-3 py-2',
    medium: 'text-sm px-4 py-2',
    large: 'text-base px-6 py-3',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;