import Image from 'next/image';
import Link from 'next/link';

import type { Product } from '../../types';

import styles from './product-item.module.css';
import { FavouritesToggleButton } from '@/features/favourites/ui/toggle-button';
import { Button } from "@/shared/ui/button";

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
  discount,
  religion,
  bestSeller,
  newProduct,
  available,
}: ProductItemProps) => {
  const handleFavouritesClick = () => {
    console.log('Add product to favourites');
  };

  return (
    <Link href={url}>
      <article className={styles.container}>
        {/* <FavouritesToggleButton
          onClick={handleFavouritesClick}
          extClassName={styles.favourites}
          selected
        /> */}
        {pic && (
          <Image
            src={pic}
            alt={name}
            width={320}
            height={240}
            className={styles.image}
          />
        )}
        <div className={styles.descContainer}>
          <span className={styles.name}>{name}</span>
          <span className={styles.char}>
            <span className={styles.label}>Производитель</span>
            {vendor}
          </span>
          <span className={styles.char}>
            <span className={styles.label}>Упаковка</span>
            {pack.size} {pack.unit}
          </span>
        </div>

        <div className={styles.priceContainer}>
          <span className={styles.price}>
            {price.value} {price.unit}
            {price.oldValue}
            <input
              type="button"
              className={styles.wholesale}
              value="Узнать оптовую цену"
            />
          </span>
        </div>

        <div className={styles.buttonContainer}>
          <Button view="filled" text="В корзину" title="Добавить товар в корзину" />
          <Button view="flat" text="Подробнее" />
        </div>
      </article>
    </Link>
  );
};
