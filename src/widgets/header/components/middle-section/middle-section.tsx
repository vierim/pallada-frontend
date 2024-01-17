import Link from 'next/link';

import { Logo } from '@/shared/ui/logo';
import { SearchBox } from '@/widgets/search-box';

import styles from './middle-section.module.css';

export const MiddleSection = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.row} page-section`}>
        <div className={styles.logo}>
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <SearchBox />
        <span className={styles.phone}>+7 (499) 288-72-28</span>
      </div>
    </div>
  );
};
