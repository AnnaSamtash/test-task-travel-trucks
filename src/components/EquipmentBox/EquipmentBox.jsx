import { useDispatch, useSelector } from 'react-redux';
import { selectFilters } from '../../redux/filters/selectors.js';
import { setFilters } from '../../redux/filters/slice.js';
import Button from '../Button/Button';
import css from './EquipmentBox.module.css';

export default function EquipmentBox() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const handleFilterChange = newFilter => dispatch(setFilters(newFilter));

  return (
    <div className={css.container}>
      <h3 className={css.title}>Vehicle equipment</h3>
      <div className={css.btn_container}>
        <Button
          variant="filter"
          selected={filters.ac === true}
          onClick={() => handleFilterChange({ ac: !filters.ac })}
        >
          <svg className={css.icon}>
            <use href="/svgSprite.svg#icon-wind"></use>
          </svg>
          AC
        </Button>
        <Button
          variant="filter"
          selected={filters.automatic === true}
          onClick={() => handleFilterChange({ automatic: !filters.automatic })}
        >
          <svg className={css.icon}>
            <use href="/svgSprite.svg#icon-diagram"></use>
          </svg>
          Automatic
        </Button>
        <Button
          variant="filter"
          selected={filters.kitchen === true}
          onClick={() => handleFilterChange({ kitchen: !filters.kitchen })}
        >
          <svg className={css.icon}>
            <use href="/svgSprite.svg#icon-cup-hot"></use>
          </svg>
          Kitchen
        </Button>
        <Button
          variant="filter"
          selected={filters.tv === true}
          onClick={() => handleFilterChange({ tv: !filters.tv })}
        >
          <svg className={css.icon}>
            <use href="/svgSprite.svg#icon-tv"></use>
          </svg>
          TV
        </Button>
        <Button
          variant="filter"
          selected={filters.bathroom === true}
          onClick={() => handleFilterChange({ bathroom: !filters.bathroom })}
        >
          <svg className={css.icon}>
            <use href="/svgSprite.svg#icon-bi_droplet"></use>
          </svg>
          Bathroom
        </Button>
      </div>
    </div>
  );
}
