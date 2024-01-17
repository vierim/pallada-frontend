import { ProductsList } from '@/entities/product/ui/products-list';
import type { Product } from '@/entities/product/types';

import styles from './popular-products.module.css';

type PopularProductsProps = {
  headline?: string;
  products: Product[];
};

export const PopularProducts = ({
  headline,
  products,
}: PopularProductsProps) => {
  return (
    <section className={styles.container}>
      {headline && headline?.length > 0 && <h2>{headline}</h2>}
      {products.length > 0 && <ProductsList products={products} />}
    </section>
  );
};
