'use client'

import styles from './search-box.module.css';

export const SearchBox = () => {
  return (
    <>
      <input 
        type="search"
        placeholder="Я ищу..." 
        className={styles.input}
      />
    </>
  );
};
