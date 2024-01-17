'use client';

import { useState } from 'react';

import { CatalogButton } from '@/shared/ui/buttons/catalog/catalog';
import { MainMenu } from '@/widgets/main-menu';
import { CatalogMenu } from '@/widgets/catalog-menu';

import styles from './bottom-section.module.css';

export const BottomSection = () => {
  const [menuVisibility, setMenuVisibility] = useState(false);

  const onClickHandler = () => {
    setMenuVisibility((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.row} page-section`}>
        <CatalogButton onClick={onClickHandler} />
        <MainMenu />

        {menuVisibility && <CatalogMenu />}
      </div>
    </div>
  );
};
