import EquipmentBox from '../EquipmentBox/EquipmentBox';
import CamperTypeBox from '../CamperTypeBox/CamperTypeBox';
import SearchBox from '../SearchBox/SearchBox';
import css from './SideBar.module.css';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters } from '../../redux/filters/selectors';
import { useEffect, useMemo } from 'react';
import { setFilters } from '../../redux/filters/slice';
import { useSearchParams } from 'react-router-dom';

const SideBar = () => {
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  // собираем параметры из юрл и обновляем фильтры при перезагрузке
  useEffect(() => {
    const newFilters = {
      location: params.location?.replace(/(\w+), (\w+)/, '$2, $1') ?? '',
      ac: Boolean(params.AC) || false,
      automatic: params.transmission === 'automatic' ? true : false,
      kitchen: Boolean(params.kitchen) || false,
      tv: Boolean(params.TV) || false,
      bathroom: Boolean(params.bathroom) || false,
      type: params.form ?? '',
    };

    // обновляем состояние фильтров в сторе
    dispatch(setFilters(newFilters));
  }, [params]);

  // вытягиваем значения из фильтров и передаем их в юрл
  const handleClick = () => {
    const newSearchParams = new URLSearchParams();

    filters.location &&
      newSearchParams.set(
        'location',
        filters.location?.replace(/(\w+), (\w+)/, '$2, $1')
      );
    filters.ac && newSearchParams.set('AC', filters.ac);
    filters.automatic && newSearchParams.set('transmission', 'automatic');
    filters.kitchen && newSearchParams.set('kitchen', filters.kitchen);
    filters.tv && newSearchParams.set('TV', filters.tv);
    filters.bathroom && newSearchParams.set('bathroom', filters.bathroom);
    filters.type && newSearchParams.set('form', filters.type);

    setSearchParams(newSearchParams);
  };
  return (
    <div className={css.container}>
      <SearchBox />
      <p className={css.text}>Filters</p>
      <EquipmentBox />
      <CamperTypeBox />
      <Button variant="btn" onClick={handleClick}>
        Search
      </Button>
    </div>
  );
};
export default SideBar;
