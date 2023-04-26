import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { setCategoryId, setCurrentPage } from '../redux/slices/filterSlice';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock.jsx';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';

const Home = () => {
  const categoryId = useSelector((state) => state.filter.categoryId);

  const sortType = useSelector((state) => state.filter.sort);

  const currentPage = useSelector((state) => state.filter.currentPage);

  const dispatch = useDispatch();

  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  React.useEffect(() => {
    setIsLoading(true); // отображение скелета до полученения данных с бека

    const order = sortType.order;

    const sortBy = sortType.sortProperty;

    const category = categoryId > 0 ? `category=${categoryId}` : ''; // логика фильтрации (повторить)

    const search = searchValue ? `&search=${searchValue}` : '';

    axios
      .get(
        `https://635f20273e8f65f283acc68d.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });

    window.scrollTo(0, 0); // возвращает на самый верх страницы
  }, [categoryId, sortType, searchValue, currentPage]);

  // React.useEffect(() => {
  //   const queryString = qs.stringify({
  //
  //   })
  // },[categoryId, sortType, searchValue, currentPage]);

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />); // логика для отображения пицц ст 42

  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />); // логика для отображения скелетонов ст.42

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>{isLoading ? skeletons : pizzas}</div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
