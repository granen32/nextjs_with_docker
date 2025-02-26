import React from 'react';
import { useTranslation } from 'react-i18next';
import { useModal } from '../contexts/ModalContext';

export const ModalExample = () => {
  const { t } = useTranslation();
  const { alert, confirm, custom } = useModal();

  const handleShowAlert = () => {
    alert({
      title: t('alert.defaultTitle'),
      content: t('example.complete')
    });
  };

  const handleShowConfirm = () => {
    confirm({
      title: t('confirm.title'),
      content: t('example.deleteConfirm'),
      onConfirm: () => {
        console.log('confirmed');
        // 삭제 로직 실행
      }
    });
  };

  const handleShowCustom = () => {
    custom({
      title: t('custom.title'),
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-bold">{t('custom.title')}</h3>
          <p>{t('custom.description')}</p>
          <div className="flex justify-end">
            <button className="rounded bg-green-500 px-4 py-2 text-white">
              {t('custom.button')}
            </button>
          </div>
        </div>
      )
    });
  };

  return (
    <div className="space-y-4 p-4">
      <button
        onClick={handleShowAlert}
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        {t('example.openAlert')}
      </button>
      <button
        onClick={handleShowConfirm}
        className="rounded bg-green-500 px-4 py-2 text-white"
      >
        {t('example.openConfirm')}
      </button>
      <button
        onClick={handleShowCustom}
        className="rounded bg-purple-500 px-4 py-2 text-white"
      >
        {t('example.openCustom')}
      </button>
    </div>
  );
}; 