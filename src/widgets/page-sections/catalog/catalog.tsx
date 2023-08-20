import Link from "next/link";
import Image from "next/image";

import styles from './catalog.module.css';

import { catalogItems } from "@/temp-data";

export const CatalogSection = () => {
  return (
    <section className={`${styles.container} page-section`}>
      <ul className={styles.list}>
        {catalogItems.map(({ id, title, slug, pic }) => {
          return (
            <li key={id} className={styles.item}>
              <Link href={`/catalog/${slug}`}>
                <article className={styles.section}>
                  <Image 
                    src={`/img/${pic}`}
                    alt={title}
                    width={260}
                    height={195}
                    className={styles.img}
                  />
                  <span className={styles.title}>{title}</span>
                </article>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
