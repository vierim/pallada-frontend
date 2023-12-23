import { Product } from "@/entities/product/types";
import { ProductItem } from "@/entities/product/ui/product-item";

import styles from './popular-products.module.css';
import { ProductsList } from "@/entities/product/ui/products-list";

type PopularProductsProps = {
  headline?: string;
  payload: Product[];
}

export const PopularProducts = ({ 
  headline,
  payload
}: PopularProductsProps) => {
  return (
    <section className={styles.container}>
      {
        headline && headline?.length > 0 && 
          <h2>{headline}</h2>
      }
      {
        payload.length > 0 && 
        <ProductsList products={payload} />
        // <ul className={styles.list}>
        //   {
        //     payload.map((item) => {
        //       return (
        //         <li key={item.id}>
        //           <ProductItem  {...item} />
        //         </li>
        //       );
        //     })
        //   }
        // </ul>
      }
    </section>
  );
};
