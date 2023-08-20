import { 
  LocationIcon, 
  ClockIcon, 
  EmailIcon,
} from '@/shared/ui/icons';

import styles from './topline-section.module.css';

export const ToplineSection = () => {
  return (
    <div className={styles.container}>
      <ul className={`${styles.list} page-section`}>
        <div className={styles.item}>
          <LocationIcon />
          <span className={styles.text}>
            Мытищи, Индустриальная 15, корпус 2
          </span>
        </div>
        <div className={styles.item}>
          <ClockIcon />
          <span className={styles.text}>
            Понеделькник &ndash; Пятница с 8 до 17
          </span>
        </div>
        <div className={styles.item}>
          <EmailIcon />
          <a 
            className={styles.email}
            href="mailto:pallada_mo@mail.ru"
          >
            pallada_mo@mail.ru
          </a>
        </div>
      </ul>
    </div>
  );
};
