"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Modal } from '@/components/ui/Modal';

export type ModalSize = 'small' | 'medium' | 'large';
export type ModalType = 'alert' | 'confirm' | 'custom';

interface ModalConfig {
  id: number;
  isOpen: boolean;
  title?: string;
  content: ReactNode;
  size: ModalSize;
  type: ModalType;
  onConfirm?: () => void;
  onCancel?: () => void;
}

interface AlertOptions {
  title?: string;
  content: ReactNode;
  size?: ModalSize;
  onConfirm?: () => void;
}

interface ConfirmOptions {
  title?: string;
  content: ReactNode;
  size?: ModalSize;
  onConfirm?: () => void;
  onCancel?: () => void;
}

interface CustomOptions {
  title?: string;
  content: ReactNode;
  size?: ModalSize;
}

interface ModalContextType {
  modalConfig: ModalConfig;
  alert: (options: AlertOptions) => void;
  confirm: (options: ConfirmOptions) => void;
  custom: (options: CustomOptions) => void;
  closeModal: () => void;
}

const initialModalConfig: ModalConfig = {
  id: -1,
  isOpen: false,
  content: null,
  size: 'medium',
  type: 'custom'
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalConfig, setModalConfig] = useState<ModalConfig>(initialModalConfig);

  const openModal = (config: Omit<ModalConfig, 'isOpen'>) => {
    setModalConfig({ ...config, isOpen: true });
  };

  const alert = ({ title, content, size = 'small', onConfirm }: AlertOptions) => {
    openModal({
      id: -1,
      type: 'alert',
      title,
      content,
      size,
      onConfirm
    });
  };

  const confirm = ({
    title,
    content,
    size = 'medium',
    onConfirm,
    onCancel
  }: ConfirmOptions) => {
    openModal({
      id: -1,
      type: 'confirm',
      title,
      content,
      size,
      onConfirm,
      onCancel
    });
  };

  const custom = ({ title, content, size = 'large' }: CustomOptions) => {
    openModal({
      id: -1,
      type: 'custom',
      title,
      content,
      size
    });
  };

  const closeModal = () => {
    setModalConfig(initialModalConfig);
  };

  return (
    <ModalContext.Provider
      value={{ modalConfig, alert, confirm, custom, closeModal }}
    >
      {children}
      <Modal />
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}; 