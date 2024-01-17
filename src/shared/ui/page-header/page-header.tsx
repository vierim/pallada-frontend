import styles from './page-header.module.css';

type PageHeaderProps = {
  children: React.ReactNode;
};

export const PageHeader = ({ children }: PageHeaderProps) => {
  return <h1 className={styles.headline}>{children}</h1>;
};
