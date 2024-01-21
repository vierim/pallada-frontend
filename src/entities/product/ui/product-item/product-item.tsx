import Image from 'next/image';
import Link from 'next/link';

import type { Product } from '../../types';

import styles from './product-item.module.css';

import { Button } from '@/shared/ui/button';
import { SpecialPrice } from '@/widgets/special-price/special-price';

type ProductItemProps = Product;

// иконографика для характеристик и может быть для каких-то булевых свойств
// В закладки, Оптовая цена, Предзаказ (корзина)
// пресеты??
// вертикальный и горизонтальный?

export const ProductItem = ({
  name,
  url,
  pic,
  pack,
  price,
  brand,
}: ProductItemProps) => {
  return (
    <article className={styles.container}>
      {pic && (
        <Link href={url}>
          <Image
            src={pic}
            alt={name}
            width={320}
            height={240}
            className={styles.image}
          />
        </Link>
      )}
      <div className={styles.descContainer}>
        <Link href={url}>
          <span className={styles.name}>{name}</span>
        </Link>
        <span className={styles.char}>
          <span className={styles.label}>Производитель</span>
          {brand?.name}
        </span>
        <span className={styles.char}>
          <span className={styles.label}>Упаковка</span>
          {pack.size} {pack.unit}
        </span>
      </div>

      <div className={styles.priceContainer}>
        <span className={styles.price}>
          {price.value} {price.unit}
          <SpecialPrice type="link" />
        </span>
      </div>

      <div className={styles.buttonContainer}>
        <Button
          view="filled"
          text="В корзину"
          title="Добавить товар в корзину"
        />
        <Link href={url} className={styles.moreButton}>
          Подробнее
        </Link>
      </div>
    </article>
  );
};
