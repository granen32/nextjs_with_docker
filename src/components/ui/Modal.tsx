"use client"

import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useModal, ModalSize } from '../../contexts/ModalContext';

const sizeClasses: Record<ModalSize, string> = {
  small: 'max-w-sm',
  medium: 'max-w-lg',
  large: 'max-w-2xl'
};

export const Modal = () => {
  const { t } = useTranslation();
  const { modalConfig, closeModal } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (modalConfig.isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [modalConfig.isOpen, closeModal]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeModal();
    }
  };

  if (!modalConfig.isOpen) return null;

  const renderButtons = () => {
    switch (modalConfig.type) {
      case 'alert':
        return (
          <button
            onClick={modalConfig.onConfirm || closeModal}
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            {t('alert.confirm')}
          </button>
        );
      case 'confirm':
        return (
          <div className="flex space-x-2">
            <button
              onClick={modalConfig.onCancel || closeModal}
              className="rounded border border-gray-300 px-4 py-2 hover:bg-gray-100"
            >
              {t('confirm.cancel')}
            </button>
            <button
              onClick={modalConfig.onConfirm}
              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              {t('confirm.confirm')}
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className={`w-full rounded-lg bg-white p-6 shadow-xl ${sizeClasses[modalConfig.size]}`}
      >
        {modalConfig.title && (
          <div className="mb-4 text-xl font-semibold">{modalConfig.title}</div>
        )}
        <div className="mb-6">{modalConfig.content}</div>
        <div className="flex justify-end">{renderButtons()}</div>
      </div>
    </div>
  );
}; 