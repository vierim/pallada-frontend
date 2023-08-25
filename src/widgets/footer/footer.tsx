import Link from 'next/link';

import { Copyright } from '@/shared/ui/copyright';

import styles from './footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} page-section`}>
        <div className={styles.column}>
          <h4 className={styles.headline}>О компании</h4>
          <nav>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link href="/company">О компании</Link>
              </li>
              <li className={styles.item}>
                <Link href="/contacts">Контакты</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.column}>
          <h4 className={styles.headline}>Для клиентов</h4>
          <nav>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link href="/catalog">Каталог продукции</Link>
              </li>
              <li className={styles.item}>
                <Link href="/price">Оптовый прайс-лист</Link>
              </li>
              <li className={styles.item}>
                <Link href="/vendors">Производители</Link>
              </li>
              <li className={styles.item}>
                <Link href="/delivery">Доставка</Link>
              </li>
              <li className={styles.item}>
                <Link href="/opt">Оптовикам</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.column}>
          <h4 className={styles.headline}>Контактная информация</h4>
          <ul className={styles.list}>
            <li className={styles.item}>
              <p>+7 (499) 288-72-28</p>
            </li>
            <li className={styles.item}>
              <p>pallada_mo@mail.ru</p>
            </li>
            <li className={styles.item}>
              <p>Мытищи, Индустриальная 15, строение 2</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${styles.container} ${styles.bottom} page-section`}>
        <Copyright />
        <Link href="/policy">Политика конфиденциальности</Link>
      </div>
    </footer>
  );
};
