'use client';

import { forwardRef } from 'react';
import { TextareaProps } from '@/types/common/common';
import { cn } from '@/lib/utils/cn';

const sizeClasses = {
  small: 'px-2 py-1 text-sm min-h-[80px]',
  medium: 'px-3 py-2 text-base min-h-[120px]',
  large: 'px-4 py-3 text-lg min-h-[160px]'
};

const variantClasses = {
  primary: 'border-primary focus:ring-primary/30',
  secondary: 'border-secondary focus:ring-secondary/30',
  outline: 'border-gray-300 focus:border-primary focus:ring-primary/30',
  ghost: 'border-transparent bg-gray-100 focus:bg-white focus:ring-primary/30',
  danger: 'border-danger focus:ring-danger/30',
  success: 'border-success focus:ring-success/30'
};

const Textarea = forwardRef<HTMLTextAreaElement, Omit<TextareaProps, 'size'>>(
  (
    {
      className,
      variant = 'outline',
      customSize = 'medium',
      fullWidth = false,
      disabled = false,
      label,
      error,
      helperText,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn('flex flex-col gap-1', fullWidth && 'w-full')}>
        {label && (
          <label className="text-sm font-medium text-gray-700">{label}</label>
        )}
        <textarea
          ref={ref}
          className={cn(
            'rounded-md border bg-white transition-colors',
            'focus:outline-none focus:ring-2',
            'disabled:pointer-events-none disabled:opacity-50',
            'resize-y',
            sizeClasses[customSize],
            variantClasses[variant],
            error && 'border-danger focus:ring-danger/30',
            fullWidth && 'w-full',
            className
          )}
          disabled={disabled}
          {...props}
        />
        {(error || helperText) && (
          <p
            className={cn(
              'text-sm',
              error ? 'text-danger' : 'text-gray-500'
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea }; 