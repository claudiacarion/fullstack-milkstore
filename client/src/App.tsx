import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { IMilk } from './types/types';

function App() {
  const [data, setData] = useState<IMilk[]>([{
    name: '',
    type: '',
    storage: 0,
    id: '',
  }]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('http://localhost:8080/api/milk');
      console.log(res);
      const fetchedData = await res.json();
      console.log(fetchedData);
      setData(fetchedData);
    };
    getData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Main store={ data }/>
    </div>
  );
}

export default App;
