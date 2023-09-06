import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useSearch } from '../src/useSearch';

const App = () => {
  const [setQuery, results] = useSearch(
    [
      { name: 'John', age: 20 },
      { name: 'Jane', age: 21 },
      { name: 'Jack', age: 20 },
    ],
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

ReactDOM.render(<App />, document.getElementById('root'));
