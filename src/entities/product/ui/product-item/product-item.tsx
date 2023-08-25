import Image from 'next/image';
import Link from 'next/link';

import type { Product } from '../../types';

import styles from './product-item.module.css';

type ProductItemProps = Product;

// иконографика для характеристик и может быть для каких-то булевых свойств
// В закладки, Оптовая цена, Предзаказ (корзина)
// пресеты??
// вертикальный и горизонтальный?

export const ProductItem = ({
  id,
  name,
  url,
  pic,
  pack,
  price,
  vendor,
  rating,
  discount,
  religion,
  bestSeller,
  newProduct,
  available,
}: ProductItemProps) => {
  return (
    <Link href={url}>
      <article className={styles.container}>
        <input type="button" value="Добавить в избранное" />
        {pic && 
          <Image 
            src={pic}
            alt=""
            width={320}
            height={240}
          />
        }
        <div className={styles.desc}>
          <span className={styles.name}>
            {name}
          </span>
          <span className={styles.char}>
            <span className={styles.label}>
              Производитель
            </span>
            {vendor}
          </span>
          <span className={styles.char}>
            <span className={styles.label}>
              Упаковка
            </span>
            {pack.size} {pack.unit}
          </span>
          <span className={styles.price}>
            {price.value} {price.unit}{price.oldValue} 
            <input type="button" value="Узнать оптовую цену" />
          </span>
        </div>
        
        <input type="button" value="В корзину" />
        <input type="button" value="Подробнее" />
      </article>
    </Link>
  );
};
