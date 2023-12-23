import Link from "next/link";
import Image from "next/image";

import styles from './catalog.module.css';

export const CatalogSection = ({ categories }: any) => {
  return (
    <section className={`${styles.container} page-section`}>
      <ul className={styles.list}>
        {categories.map((item: any) => {
          return (
            <li key={item.id} className={styles.item}>
              <Link href={`/catalog/${item.attributes.slug}`}>
                <article className={styles.section}>
                  <Image
                    src={item.attributes.pic.data?.attributes.url || ''}
                    alt={item.attributes.name}
                    width={260}
                    height={195}
                    className={styles.img}
                  />
                  <span className={styles.title}>{item.attributes.name}</span>
                </article>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
