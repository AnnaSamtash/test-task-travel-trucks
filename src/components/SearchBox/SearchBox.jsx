import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { useId } from 'react';
import { setFilters } from '../../redux/filters/slice.js';
import { selectFilters } from '../../redux/filters/selectors.js';

const SearchBox = () => {
  const dispatch = useDispatch();
  const locationId = useId();
  const handleFilterChange = newFilter => dispatch(setFilters(newFilter));
  const filters = useSelector(selectFilters);

  // меняем вводимое значени в поле ввода после потери фокуса и записываем в фильтр в сторе
  const handleBlur = e => {
    let locationValue;
    if (e.target.value && !e.target.value.endsWith(', Ukraine')) {
      locationValue = `${
        e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
      }, Ukraine`;
    }
    handleFilterChange({ location: locationValue || '' });
  };

  return (
    <div className={css.container}>
      <label htmlFor={locationId} className={css.title}>
        Location
      </label>
      <input
        className={css.input}
        type="text"
        id={locationId}
        placeholder="City"
        value={filters?.location}
        onChange={e => handleFilterChange({ location: e.target.value })}
        onBlur={handleBlur}
      />
      <svg className={css.icon}>
        <use href="/svgSprite.svg#icon-Map"></use>
      </svg>
    </div>
  );
};

export default SearchBox;
