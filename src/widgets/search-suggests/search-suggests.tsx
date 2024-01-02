import Link from 'next/link';
import styles from './search-suggests.module.css';

type SearchSuggestsProps = {
  items: {
    id: number;
    title: string;
    url: string;
    pic: string;
  }[];
  handleItemClick: (url: string) => void;
  count: number;
};

export const SearchSuggests = ({
  items,
  handleItemClick,
  count,
}: SearchSuggestsProps) => {
  return (
    <div className={styles.suggests}>
      {items.length > 0 ? (
        <ul className={styles.list}>
          {items.map(({ id, title, url }) => {
            return (
              <li
                className={styles.item}
                key={id}
                onClick={() => handleItemClick(url)}
              >
                {title}
              </li>
            );
          })}
        </ul>
      ) : (
        <span className={styles.notfound}>
          По вашему запросу ничего не найдено
        </span>
      )}

      {count > 10 && (
        <Link href="/search" className={styles.show}>
          Показать все результаты
        </Link>
      )}
    </div>
  );
};
