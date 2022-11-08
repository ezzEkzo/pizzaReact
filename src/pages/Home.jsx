import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock.jsx';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';

const Home = () => {
  const { searchValue } = React.useContext(SearchContext);

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0); // стейт категорий
  const [currentPage, setCurrentPage] = React.useState(1); // стейт пагинации
  const [sortType, setSortType] = React.useState({
    name: 'популярности',
    sortProperty: 'rating',
    order: 'asc',
  }); // Наведение в popup

  React.useEffect(() => {
    setIsLoading(true); // отображение скелета до полученения данных с бека

    const order = sortType.order;

    const sortBy = sortType.sortProperty;

    const category = categoryId > 0 ? `category=${categoryId}` : ''; // логика фильтрации (повторить)
    const search = searchValue ? `&search=${searchValue}` : '';

    fetch(
      `https://635f20273e8f65f283acc68d.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false); // перестаёт отображать скелеты после рендера пицц
      });
    window.scrollTo(0, 0); // возвращает на самый верх страницы
  }, [categoryId, sortType, searchValue, currentPage]);

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />); // логика для отображения пицц ст 42

  const skeletons = [...new Array(10)].map((_, index) => <Skeleton key={index} />); // логика для отображения скелетонов ст.42

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories value={categoryId} onChangeCategory={(index) => setCategoryId(index)} />
        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>{isLoading ? skeletons : pizzas}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
};

export default Home;
