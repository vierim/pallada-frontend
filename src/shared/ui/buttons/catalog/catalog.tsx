import styles from './catalog-button.module.css';

type CatalogButtonProps = {
  onClick: () => void;
};

export const CatalogButton = ({ onClick }: CatalogButtonProps) => {
  return (
    <input
      type="button"
      value="Каталог продукции"
      onClick={onClick}
      className={styles.button}
    />
  );
};
