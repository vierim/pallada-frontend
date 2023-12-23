import Link from 'next/link';
import type { BreadCrumpsList } from '@/helpers/getBreadCrumps';

import styles from './breadcrumps.module.css';

type BreadCrumpsProps = {
  breadcrumps: BreadCrumpsList;
};

export const BreadCrumps = ({ breadcrumps }: BreadCrumpsProps) => {
  return (
    <ul className={`${styles.list} page-section`}>
      {breadcrumps.map(({ _id, title, url }) => {
        return (
          <li key={_id} className={styles.item}>
            {url.length > 0 ? (
              <Link href={url} className={styles.link}>
                {title}
              </Link>
            ) : (
              <span className={styles.name}>{title}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
};
