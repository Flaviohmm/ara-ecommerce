import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel'; 
import ProductGrid from './components/ProductGrid';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <div className='flex'>
        <Sidebar />
        <div className='flex-grow p-4'>
          <ProductGrid />
        </div>
      </div>
    </div>
  );
};

export default App;
