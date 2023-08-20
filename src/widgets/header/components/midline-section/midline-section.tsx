import { Logo } from "@/shared/ui/logo";
import { SearchBox } from "@/widgets/search-box";

import styles from "./midline-section.module.css";

export const MidlineSection = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.row} page-section`}>
        <span className={styles.logo}>
          <Logo />
        </span>
        <SearchBox />
        <span className={styles.phone}>
          +7 (499) 288-72-28
        </span>
      </div>
    </div>
  );
};
