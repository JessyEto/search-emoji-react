import './App.css';
import Line from './components/Line';
import Search from './components/Search';
import { useState } from 'react';

const App = () => {
  const [search, setSearch] = useState('');

  const searchEmoji = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="container">
      <Search searchEmoji={searchEmoji} />
      <Line search={search} />
    </div>
  );
};

export default App;
