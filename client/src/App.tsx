import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Search from './components/Search';
import Filter from './components/Filter';
import Pagination from './components/Pagination';
import { IMilk } from './types/types';

function App() {
  const [data, setData] = useState<IMilk[]>([{
    name: '',
    type: '',
    storage: 0,
    id: '',
  }]);

  const [currentPage, setCurrentPage] = useState(1);
  const [milkPerPage] = useState(9);
  const [searchInput, setSearchInput] = useState('');
  const [milkType, setMilkType] = useState('');

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('http://localhost:8080/api/milk');
      const fetchedData = await res.json();
      setData(fetchedData);
    };
    getData();
  }, []);

  const indexOfLastMilk = currentPage * milkPerPage;
  const indexOfFirstMilk = indexOfLastMilk - milkPerPage;
  
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
  //search
  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  
  let searchedData = data;
  let currentMilk = searchedData.slice(indexOfFirstMilk, indexOfLastMilk);

  if (searchInput.length > 0) {
    currentMilk = searchedData.filter((milk) => {
    return milk.name.toLowerCase().includes(searchInput.toLowerCase())
  });
  }

  //filter
  const filter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMilkType(e.target.value);
};

if (milkType !== '') {
  currentMilk = searchedData.filter(milk => {
    return milk.name.toLowerCase().includes(milkType.toLowerCase())
  });
}

  return (
    <div className="App">
      <Header />
      <section className='nav'>
      <Search onChange={ search } value={ searchInput } />
      <Filter onChange={ filter } value={ milkType }/>
      </section>
      <Main store={ currentMilk } data={ data }/>
      <Pagination totalMilk={data.length} milkPerPage={ milkPerPage } paginate={paginate}/>
    </div>
  );
}

export default App;
