
# React Fuse Search

The `useSearch` hook is a custom React hook designed to simplify the process of adding search functionality to a list of data. It allows you to easily search through a data array and retrieve matching results based on specified keys.

## Installation

To use the `useSearch` hook in your React application, you can follow these steps:

```bash
npm i react-fuse-search
```

## Parameters

- `data` - Array<T>;
- `options` - Fuse js options

## Example

```Typescript 
import Component from 'react-fuse-search'

const App = () => {
  const [setQuery, results] = useSearch(
      //Data
    [
      { name: 'John', age: 20 },
      { name: 'Jane', age: 21 },
      { name: 'Jack', age: 20 },
    ],
    //Options
    {
      keys: ['name'],
    }
  );
  return (
    <div>
      <input
        type="text"
        onChange={e => setQuery(e.target.value)}
        placeholder="Search..."
      />
      {results.map(result => (
        <div key={result.name}>{result.name}</div>
      ))}
    </div>
  );
};
```

  
