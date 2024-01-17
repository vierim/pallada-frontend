import { CategoryItem } from '@/entities/category/ui/category-item';
import { getAllCategories } from '@/entities/category/utils';

import styles from './categories-list.module.css';

export const CategoriesList = async () => {
  const categories = await getAllCategories();

  return (
    <ul className={styles.list}>
      {categories.map((item) => {
        return (
          <li key={item.id}>
            <CategoryItem
              name={item.name}
              url={`/catalog/${item.slug}`}
              pic={item.pic}
            />
          </li>
        );
      })}
    </ul>
  );
};
