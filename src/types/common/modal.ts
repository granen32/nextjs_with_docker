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
  AlertModal: (options: ModalConfig) => void;
  ConfirmModal: (options: ModalConfig) => void;
  CustomModal: (options: ModalConfig) => void;
  CloseModal: () => void;
}

export interface ModalProviderProps {
  children: ReactNode;
} 