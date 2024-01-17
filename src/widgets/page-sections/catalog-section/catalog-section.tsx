import { CategoriesList } from '@/entities/category/ui/categories-list';

import styles from './catalog-section.module.css';

export const CatalogSection = () => {
  return (
    <section className={`${styles.container} page-section`}>
      <CategoriesList />
    </section>
  );
};
