import { useState, useEffect } from 'react';
import Fuse from 'fuse.js';

export type SearchOptions<T> = Fuse.IFuseOptions<T>;

export const useSearch = <T extends object>(
  items: T[],
  options: SearchOptions<T> = {
    threshold: 0.1,
  }
) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<T[]>([]);

  useEffect(() => {
    if (query === '') {
      setResults(items);
      return;
    }
    const fuse = new Fuse(items, { ...options });
    const results = fuse.search(query);
    setResults(results.map(result => result.item as T));
  }, [query, items]);

  return [setQuery, results] as [
    React.Dispatch<React.SetStateAction<string>>,
    T[]
  ];
};
