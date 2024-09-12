import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Products from './components/Products';

const App = () => {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState('home'); 

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const renderContent = () => {
    if (currentPage === 'products') {
      return <Products data={data} />;
    }

    return <h1 className="text-2xl font-bold text-center my-4">Welcome to the Olx Clone</h1>;
  };

  return (
    <>
      <Navbar setCurrentPage={setCurrentPage} />
      {renderContent()}
    </>
  );
};

export default App;
