'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { getBreadcrumbs } from '@/widgets/breadcrumbs/utils/getBreadcrumbs';

import styles from './breadcrumbs.module.css';

export const Breadcrumbs = () => {
  const pathname = usePathname();
  const breadcrumbs = getBreadcrumbs(pathname);

  return (
    <div className={`${styles.breadcrumbs}`}>
      <ul className={`${styles.list}`}>
        {breadcrumbs.map(({ _id, title, url }) => {
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
    </div>
  );
};
