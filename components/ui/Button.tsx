import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95';

  const variants = {
    primary: 'bg-black text-white hover:bg-gray-800 shadow-md hover:shadow-lg',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    accent: 'bg-rose-600 text-white hover:bg-rose-700 shadow-md shadow-rose-200',
    outline: 'border-2 border-black text-black hover:bg-black hover:text-white',
    ghost: 'text-gray-700 hover:bg-gray-100 hover:text-black',
  };

  const sizes = {
    sm: 'text-xs px-4 py-1.5 font-semibold',
    md: 'text-sm px-6 py-2.5 font-semibold',
    lg: 'text-base px-8 py-3.5 font-bold tracking-wide',
  };

  return (
    <button
      className={twMerge(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth ? 'w-full' : '',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
