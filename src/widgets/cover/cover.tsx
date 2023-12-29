import Image from 'next/image';
import { Button } from '@/shared/ui/button';

import styles from './cover.module.css';

export const Cover = () => {
  return (
    <section className={styles.cover}>
      <Image
        src="/img/cover.jpg"
        alt=""
        width={2500}
        height={500}
        quality={90}
        className={styles.image}
      />
      <div className={`${styles.content} page-section`}>
        <h1 className={styles.headline}>Кондитерские изделия оптом</h1>
        <p className={styles.subline}>Скидки до 25% для оптовых покупателей!</p>
        <Button view="action" text="Получить оптовый прайс-лист" size="l" />
      </div>
    </section>
  );
};
