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

export default function CampersList({ handleClick, page }) {
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const totalPage = useSelector(selectTotalPage);
  return (
    <div>
      <ul className={css.list}>
        {campers.map(camper => {
          return (
            <li key={camper.id} className={css.item}>
              <Camper props={camper} />
            </li>
          );
        })}
      </ul>
      {loading && <Loader />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {campers.length > 0 && page < totalPage && (
        <Button variant="loadMore" onClick={handleClick}>
          Load More
        </Button>
      )}
    </div>
  );
}
