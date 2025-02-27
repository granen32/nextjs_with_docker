import { ReactNode } from 'react';

export type ModalSize = 'small' | 'medium' | 'large';
export type ModalType = 'alert' | 'confirm' | 'custom';

export interface ModalConfig {
  id?: number;
  isOpen: boolean;
  title?: string;
  content: ReactNode;
  size: ModalSize;
  type: ModalType;
  onConfirm?: () => void;
  onCancel?: () => void;
}


export interface ModalContextType {
  modalConfig: ModalConfig;
  alert: (options: ModalConfig) => void;
  confirm: (options: ModalConfig) => void;
  custom: (options: ModalConfig) => void;
  closeModal: () => void;
}

export interface ModalProviderProps {
  children: ReactNode;
} 