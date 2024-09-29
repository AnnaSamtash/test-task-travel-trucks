import { useDispatch, useSelector } from 'react-redux';
import { selectFilters } from '../../redux/filters/selectors.js';
import { setFilters } from '../../redux/filters/slice.js';
import Button from '../Button/Button.jsx';
import css from './CamperTypeBox.module.css';

const CamperTypeBox = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const handleFilterChange = newFilter => dispatch(setFilters(newFilter));

  return (
    <div className={css.container}>
      <h3 className={css.title}>Vehicle type</h3>
      <div className={css.btn_container}>
        <Button
          variant="filter"
          selected={filters.type === 'van'}
          onClick={() => handleFilterChange({ type: 'van' })}
        >
          <svg className={css.icon}>
            <use href="/svgSprite.svg#icon-bi_grid-1x2"></use>
          </svg>
          Van
        </Button>
        <Button
          variant="filter"
          selected={filters.type === 'fullyIntegrated'}
          onClick={() => handleFilterChange({ type: 'fullyIntegrated' })}
        >
          <svg className={css.icon}>
            <use href="/svgSprite.svg#icon-bi_grid"></use>
          </svg>
          Fully Integrated
        </Button>
        <Button
          variant="filter"
          selected={filters.type === 'alcove'}
          onClick={() => handleFilterChange({ type: 'alcove' })}
        >
          <svg className={css.icon}>
            <use href="/svgSprite.svg#icon-bi_grid-3x3-gap"></use>
          </svg>
          Alcove
        </Button>
      </div>
    </div>
  );
};

export default CamperTypeBox;
