import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Search from './components/Search';
import { IMilk } from './types/types';

function App() {
  const [data, setData] = useState<IMilk[]>([{
    name: '',
    type: '',
    storage: 0,
    id: '',
  }]);

  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  
  if (searchInput.length > 0) {
    data.filter((milk) => {
    return milk.name.toLowerCase().includes(searchInput.toLowerCase())
  });
  }


  useEffect(() => {
    const getData = async () => {
      const res = await fetch('http://localhost:8080/api/milk');
      const fetchedData = await res.json();
      setData(fetchedData);
    };
    getData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Search onChange={ handleSearch } value={ searchInput } />
      <Main store={ data }/>
    </div>
  );
}

export default App;
