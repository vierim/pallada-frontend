'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { CloseIcon } from '@/shared/ui/icons';

import styles from './modal.module.css';

type ModalProps = {
  title?: string;
  children: React.ReactNode;
};

export const Modal = ({ title, children }: ModalProps) => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const showModal = searchParams.get('showModal');

  const handleCloseClick = (evt: any) => {
    router.back();
  };

  return showModal === 'y' ? (
    <div className={styles.container}>
      <div className={styles.overlay} onClick={handleCloseClick}></div>

      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={handleCloseClick}>
          <CloseIcon ton="light" size="48" />
        </button>

        {title && title.length > 0 && <h3>{title}</h3>}

        {children}
      </div>
    </div>
  ) : null;
};
