import Link from 'next/link';
import Image from 'next/image';

import styles from './category-item.module.css';

type CategoryItemProps = {
  name: string;
  url: string;
  pic?: string;
};

export const CategoryItem = ({ name, url, pic }: CategoryItemProps) => {
  return (
    <article className={styles.item}>
      <Link href={url}>
        <div className={styles.card}>
          <Image
            src={pic || ''}
            alt={name}
            width={260}
            height={195}
            className={styles.img}
          />
          <span className={styles.name}>{name}</span>
        </div>
      </Link>
    </article>
  );
};
