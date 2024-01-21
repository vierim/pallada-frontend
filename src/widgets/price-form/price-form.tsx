import { Button } from '@/shared/ui/button';
import { Modal } from '@/shared/modal/modal';

import styles from './price-form.module.css';

export const PriceForm = () => {
  return (
    <Modal title="Запрос оптового прайс-листа">
      <div className={styles.container}>
        <form className={styles.form}>
          <label htmlFor="priceFormName" className={styles.label}>
            <span className={styles.title}>Контактное лицо</span>
            <input
              type="text"
              name="name"
              id="priceFormName"
              className={styles.input}
              required
            />
          </label>

          <label htmlFor="priceFormCompany" className={styles.label}>
            <span className={styles.title}>Название организации</span>
            <input
              type="text"
              name="company"
              id="priceFormCompany"
              className={styles.input}
              required
            />
          </label>

          <label htmlFor="priceFormCity" className={styles.label}>
            <span className={styles.title}>Город</span>
            <input
              type="text"
              name="city"
              id="priceFormCity"
              className={styles.input}
            />
          </label>

          <label htmlFor="priceFormPhone" className={styles.label}>
            <span className={styles.title}>Ваш телефон</span>
            <input
              type="tel"
              name="phone"
              id="priceFormPhone"
              className={styles.input}
              required
            />
          </label>

          <label htmlFor="priceFormEmail" className={styles.label}>
            <span className={styles.title}>Ваш E-mail</span>
            <input
              type="email"
              name="email"
              id="priceFormEmail"
              className={styles.input}
              required
            />
          </label>

          <Button
            view="action"
            size="l"
            text="Отправить запрос"
            extClassName={styles.button}
          />
        </form>
      </div>
    </Modal>

  );
};
