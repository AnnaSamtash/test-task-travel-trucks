import css from './CampersList.module.css';
import Camper from '../Camper/Camper';
import { useSelector } from 'react-redux';
import {
  selectCampers,
  selectError,
  selectLoading,
  selectTotalPage,
} from '../../redux/campers/selectors';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

const CampersList = ({ handleClick, page }) => {
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const totalPage = useSelector(selectTotalPage);
  // ссылка на последнюю загруженную карточку
  const lastLoadedCamperRef = useRef(null);

  // эффект для прокрутки к первой дозагруженной карточке после клика
  useEffect(() => {
    if (lastLoadedCamperRef.current && page > 1) {
      lastLoadedCamperRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [campers, page]);

  return (
    <div>
      {campers.length > 0 && !error && (
        <ul className={css.list}>
          {campers.map((camper, index) => {
            // добавляем реф только для первой дозагруженной карточки на текущей странице
            const isLastLoadedCamper = index === (page - 1) * 4;
            return (
              <li
                key={camper.id}
                className={css.item}
                // присваиваем реф
                ref={isLastLoadedCamper ? lastLoadedCamperRef : null}
              >
                <Camper props={camper} />
              </li>
            );
          })}
        </ul>
      )}
      {loading && <Loader />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {campers.length > 0 && page < totalPage && (
        <Button variant="loadMore" onClick={handleClick}>
          Load More
        </Button>
      )}
    </div>
  );
};

CampersList.propTypes = {
  page: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default CampersList;
