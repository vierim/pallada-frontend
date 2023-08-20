import Link from 'next/link';
import styles from './main-menu.module.css';

export const MainMenu = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link className={styles.link} href="/vendors">
            Производители
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link className={styles.link} href="/price">
            Прайс-лист
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link className={styles.link} href="/delivery">
            Доставка
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link className={styles.link} href="/opt">
            Оптовикам
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link className={styles.link} href="/contacts">
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
};
