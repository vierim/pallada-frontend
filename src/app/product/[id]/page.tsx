import Image from 'next/image';

import { PageHeader } from '@/shared/ui/page-header';
import { Button } from '@/shared/ui/button';
import { ProductsList } from '@/entities/product/ui/products-list';

import {
  getProductData,
  getRelativeProductsByBrand,
} from '@/entities/product/utils';

import styles from './page.module.css';

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default async function ProductPage({
  params: { id },
}: ProductPageProps) {

  const {
    name,
    pic,
    price,
    brand,
    pack,
    delay }
    = await getProductData(parseInt(id));

  const relativeProducts = await getRelativeProductsByBrand(parseInt(id), brand.id);

  return (
    <div>
      <PageHeader>{name}</PageHeader>

      <div className={styles.product}>
        <Image
          className={styles.pic}
          src={pic}
          alt={name}
          width={300}
          height={300}
        />
        <div className={styles.info}>
          <p className={styles.pricing}>
            Розничная цена -{' '}
            <span className={styles.price}>
              {price.value} руб/{price.unit}
            </span>
          </p>
          <ul className={styles.params}>
            <li className={styles.char}>
              <span className={styles.label}>Производитель</span>
              {brand.name}
            </li>
            <li className={styles.char}>
              <span className={styles.label}>Упаковка</span>
              {pack.size} {pack.unit}/{pack.type}
            </li>
            <li className={styles.char}>
              <span className={styles.label}>Срок годности</span>
              {delay}
            </li>
          </ul>
          <div className={styles.buttons}>
            <Button view="filled" text="Добавить в корзину" />
            <Button view="action" text="Получить оптовую цену" />
          </div>
        </div>
      </div>

      <div className={`${styles.proposals}`}>
        <h3 className={styles.subtitle}>Другие товары</h3>
        <ProductsList products={relativeProducts} />
      </div>
    </div>
  );
}
