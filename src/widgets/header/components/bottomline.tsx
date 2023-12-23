import { CatalogButton } from '@/shared/ui/buttons/catalog/catalog';
import { MainMenu } from '@/widgets/main-menu';
import { Basket } from '@/features/basket';

import styles from '../header.module.css';

export const BottomlineSection = () => {
  return (
    <div className={styles.bottomContainer}>
      <div className={`${styles.row} page-section`}>
        <CatalogButton />
        <MainMenu />
        {/* <Basket variant='informer' /> */}
      </div>
    </div>
  );
};
