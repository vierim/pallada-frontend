import Link from "next/link";
import type { TPagination } from "./types";
import styles from './pagination.module.css';

type PaginationProps = {
  slug: string;
  pagination: TPagination;
};

export const Pagination = ({ slug, pagination }: PaginationProps) => {

  const { page: currentPage, pageCount } = pagination;
  const pages = Array.from(Array(pageCount).keys());

  return (
    <ul className={styles.list}>
      {pages.map((item) => {
        const page = ++item;

        return (
          <li key={page} className={page === currentPage ? styles.current : ''}>
            <Link href={`/catalog/${slug}/page${page}`} className={styles.link}>
              {page}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
