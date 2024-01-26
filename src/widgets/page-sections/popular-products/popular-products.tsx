import { ProductsList } from '@/entities/product/ui/products-list';
import { getProductsOnMainPage } from "@/entities/product/utils";

import styles from './popular-products.module.css';

export const PopularProducts = async () => {
  const products = await getProductsOnMainPage();

  if(products.length === 0) {
    return;
  }

  return (
    <section className={`${styles.container} page-section`}>
      {<h2>Популярные кондитерские изделия</h2>}
      {products.length > 0 && <ProductsList products={products} />}
    </section>
  );
};
