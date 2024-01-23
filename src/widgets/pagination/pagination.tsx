import Link from 'next/link';
import type { TPagination } from './types';

import styles from './pagination.module.css';

type PaginationProps = {
  entity?: 'catalog' | 'vendors';
  slug: string;
  pagination: TPagination;
};

export const Pagination = ({
  entity = 'catalog',
  slug,
  pagination,
}: PaginationProps) => {
  const { page: currentPage, pageCount } = pagination;
  const pages = Array.from(Array(pageCount).keys());

  return (
    <ul className={styles.list}>
      {pages.map((item) => {
        const page = ++item;
        const pageUrl =
          page !== 1 ? `/${entity}/${slug}/page${page}` : `/${entity}/${slug}`;

        return (
          <li key={page} className={page === currentPage ? styles.current : ''}>
            <Link href={pageUrl} className={styles.link}>
              {page}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
