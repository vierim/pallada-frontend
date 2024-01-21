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
        console.log(product);
        return (
          <li key={product.id}>
            <ProductItem {...product} />
          </li>
        );
      })}
    </ul>
  );
};
