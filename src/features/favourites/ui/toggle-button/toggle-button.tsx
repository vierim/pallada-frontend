import { FavouritesIcon } from "@/shared/ui/icons";
import styles from './toggle-button.module.css';

type FavouritesToggleButtonProps = {
  selected?: boolean;
  extClassName?: string;
  onClick: () => void;
};

export const FavouritesToggleButton = ({
  selected = false,
  extClassName,
  onClick,
}: FavouritesToggleButtonProps) => {
  return (
    <button
      className={`${styles.button} ${extClassName}`}
      title="Добавить в избранное"
    >
      <FavouritesIcon color={selected ? '#f49b42' : undefined} />
    </button>
  );
};
