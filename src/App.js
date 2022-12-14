import React from 'react';
import './scss/app.scss';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
// import NotFoundBlock from './components/NotFoundBlock';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './redux/slices/filterSlice';

export const SearchContext = React.createContext();

export default function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className='wrapper'>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

// Как пушить через консоль -

// - git add . - собирает все вместе
// - git commit -m "title" - вносит все изменения
// - git push Pizza master - пушит на указанную ветку

/////////////////////////////////////////

// почитать спецификацию спредоператора

/////////////////////////////////////////////

// props driling  - прокидывание пропсов множество раз, через разные переменные
