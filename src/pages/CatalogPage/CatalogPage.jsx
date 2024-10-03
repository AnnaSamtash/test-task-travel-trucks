import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import SideBar from '../../components/SideBar/SideBar';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCampers,
  selectError,
  selectLoading,
} from '../../redux/campers/selectors';
import css from './CatalogPage.module.css';
import CampersList from '../../components/CampersList/CampersList';
import { useSearchParams } from 'react-router-dom';
import { addCampers, fetchCampers } from '../../redux/campers/operations';
import { useCallback, useEffect, useMemo, useState } from 'react';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const campers = useSelector(selectCampers);
  const [searchParams] = useSearchParams();
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const [page, setPage] = useState(1);

  //функция загрузки 1 страницы кэмперов
  useEffect(() => {
    const newPage = 1;
    setPage(newPage);
    dispatch(fetchCampers({ ...params, page: newPage, limit: 4 }));
  }, [params, dispatch]);

  // функция кнопки загрузки следующей страницы
  const handleClick = useCallback(() => {
    if (loading) return; // не разрешает второй клик пока идет загрузка

    const newPage = page + 1;
    setPage(newPage);
    dispatch(addCampers({ ...params, page: newPage, limit: 4 }));
  }, [page, params, loading, dispatch]);

  return (
    <div className={css.wrapper}>
      <DocumentTitle>TravelTrucks app/Catalog Page</DocumentTitle>
      <SideBar />
      {!error && campers.length > 0 && (
        <CampersList handleClick={handleClick} page={page} />
      )}
    </div>
  );
};

export default CatalogPage;
