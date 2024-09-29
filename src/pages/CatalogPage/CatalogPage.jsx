import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import SideBar from '../../components/SideBar/SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { selectCampers, selectError } from '../../redux/campers/selectors';
import css from './CatalogPage.module.css';
import CampersList from '../../components/CampersList/CampersList';
import { useSearchParams } from 'react-router-dom';
import { addCampers, fetchCampers } from '../../redux/campers/operations';
import { useEffect, useMemo, useState } from 'react';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const campers = useSelector(selectCampers);

  const [searchParams] = useSearchParams();
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const [page, setPage] = useState(1);

  useEffect(() => {
    const newPage = 1;
    setPage(newPage);
    dispatch(fetchCampers({ ...params, page: newPage, limit: 4 }));
  }, [params, dispatch]);

  const handleClick = () => {
    const newPage = page + 1;
    setPage(newPage);

    if (Object.keys(params).length === 0) {
      dispatch(
        addCampers({
          page: newPage,
          limit: 4,
        })
      );
    } else {
      dispatch(
        addCampers({
          ...params,
          page: newPage,
          limit: 4,
        })
      );
    }
  };

  return (
    <div className={css.wrapper}>
      <DocumentTitle>CatalogPage</DocumentTitle>
      <SideBar />
      {!error && campers.length > 0 && (
        <CampersList handleClick={handleClick} page={page} />
      )}
    </div>
  );
}
