"use client"

import React, { createContext, useContext, useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import {
  ModalConfig,
  ModalContextType,
  ModalProviderProps
} from '@/types/common/modal';

const initialModalConfig: ModalConfig = {
  id: -1,
  isOpen: false,
  content: null,
  size: 'medium',
  type: 'custom'
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modalConfig, setModalConfig] = useState<ModalConfig>(initialModalConfig);

  const openModal = (config: Omit<ModalConfig, 'isOpen'>) => {
    setModalConfig({ ...config, isOpen: true });
  };

  const alert = ({ title, content, size = 'small', onConfirm }: ModalConfig) => {
    openModal({
      id: initialModalConfig.id,
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
  }: ModalConfig) => {
    openModal({
      id: initialModalConfig.id,
      type: 'confirm',
      title,
      content,
      size,
      onConfirm,
      onCancel
    });
  };

  const custom = ({ title, content, size = 'large' }: ModalConfig) => {
    openModal({
      id: initialModalConfig.id,
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