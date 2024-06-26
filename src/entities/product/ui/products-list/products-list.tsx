import { ProductItem } from '../product-item';
import type { Product } from '../../types';

import styles from './products-list.module.css';

type ProductsListProps = {
  products: Product[];
};

export const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <ul className={styles.list}>
      {products.map((product: Product) => {
        return (
          <li key={product.id} className={styles.item}>
            <ProductItem {...product} />
          </li>
        );
      })}
    </ul>
  );
};
