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

  const AlertModal = ({ title, content, size = 'small', onConfirm }: ModalConfig) => {
    openModal({
      id: initialModalConfig.id,
      type: 'alert',
      title,
      content,
      size,
      onConfirm
    });
  };

  const ConfirmModal = ({
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

  const CustomModal = ({ title, content, size = 'large' }: ModalConfig) => {
    openModal({
      id: initialModalConfig.id,
      type: 'custom',
      title,
      content,
      size
    });
  };

  const CloseModal = () => {
    setModalConfig(initialModalConfig);
  };

  return (
    <ModalContext.Provider
      value={{ modalConfig, AlertModal, ConfirmModal, CustomModal, CloseModal }}
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