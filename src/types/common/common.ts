import { ButtonHTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

export type Size = 'small' | 'medium' | 'large';
export type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success';

// 공통 스타일 속성 인터페이스
export interface StyleProps {
  customSize?: Size;
  variant?: Variant;
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
}

// Button 컴포넌트 Props
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, StyleProps {}

// Input 컴포넌트 Props
export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, StyleProps {
  label?: string;
  error?: string;
  helperText?: string;
}

// Textarea 컴포넌트 Props
export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, StyleProps {
  label?: string;
  error?: string;
  helperText?: string;
}

// 테마 타입 정의
export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    success: string;
    danger: string;
    warning: string;
    info: string;
  };
  fontSize: {
    small: string;
    medium: string;
    large: string;
  };
  lineHeight: {
    small: string;
    medium: string;
    large: string;
  };
  spacing: {
    small: string;
    medium: string;
    large: string;
  };
} 