import { BasketIcon } from "@/shared/ui/icons";

import styles from './basket-infomer.module.css';

export const BasketInformer = () => {
  return (
    <div className={styles.container}>
      <BasketIcon />
      <span>Корзина</span>
    </div>
  );
};
