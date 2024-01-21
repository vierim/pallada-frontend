'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

import { CloseIcon } from '@/shared/ui/icons';
import { SearchSuggests } from '@/widgets/search-suggests';

import styles from './search-box.module.css';

export const SearchBox = () => {
  const router = useRouter();

  const [state, setState] = useState('');
  const [showSuggests, setShowSuggests] = useState(false);
  const [results, setResults] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setState(evt.target.value);
  };

  const handleCleanIcon = () => {
    setState('');

    inputRef.current?.focus();
  };

  const handleSuggestClick = (url: string) => {
    router.push(url);
    setState('');
  };

  useEffect(() => {
    async function getProducts(query: string) {
      const res = await fetch(
        `https://api.pallada-mo.ru/api/products?populate=*&filters[name][$containsi]=${query}&pagination[start]=0&pagination[limit]=10`
      );

      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }

      return res.json();
    }

    if (state.length > 2) {
      getProducts(state).then(({ data, meta }) => {
        setTotalCount(meta.pagination.total);
        const x = data.map((item: any) => {
          return {
            id: item.id,
            title: item.attributes.name,
            url: `/product/${item.id}`,
            pic: '',
          };
        });

        setResults(x);
        setShowSuggests(true);
      });
    } else {
      setShowSuggests(false);
      setResults([]);
    }
  }, [state]);

  return (
    <div className={styles.bar}>
      <input
        ref={inputRef}
        type="search"
        placeholder="Я ищу..."
        value={state}
        onChange={handleChange}
        className={styles.input}
      />

      {state.length > 0 && (
        <span className={styles.control} title="Очистить поле">
          <CloseIcon onClick={handleCleanIcon} />
        </span>
      )}

      {showSuggests && (
        <SearchSuggests
          items={results}
          handleItemClick={handleSuggestClick}
          count={totalCount}
        />
      )}
    </div>
  );
};
