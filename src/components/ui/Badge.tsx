'use client';

import { cn } from '@/lib/utils/cn';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'success' | 'warning' | 'danger';
  customSize?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

const sizeClasses = {
  small: 'px-2 py-0.5 text-xs',
  medium: 'px-2.5 py-1 text-sm',
  large: 'px-3 py-1.5 text-base'
};

const variantClasses = {
  primary: 'bg-primary text-white',
  secondary: 'bg-secondary text-white',
  outline: 'border border-gray-300 text-gray-700 bg-white',
  success: 'bg-success text-white',
  warning: 'bg-warning text-white',
  danger: 'bg-danger text-white'
};

export const Badge = ({
  variant = 'primary',
  customSize = 'medium',
  className,
  children,
  ...props
}: BadgeProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-full font-medium',
        sizeClasses[customSize],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

Badge.displayName = 'Badge'; 