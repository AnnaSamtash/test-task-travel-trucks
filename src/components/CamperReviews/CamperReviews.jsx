import { useDispatch, useSelector } from 'react-redux';
import css from './CamperReviews.module.css';
import {
  selectCamperDetails,
  selectError,
  selectLoading,
} from '../../redux/campers/selectors';
import clsx from 'clsx';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchCamperById } from '../../redux/campers/operations';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const CamperReviews = () => {
  const { id } = useParams();
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const camperDetails = useSelector(selectCamperDetails);
  const dispatch = useDispatch();
  const { reviews } = camperDetails;

  useEffect(() => {
    if (!id) return;
    dispatch(fetchCamperById(id));
  }, [id]);

  return (
    <div className={css.comon_wrapper}>
      {loading && <Loader />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {camperDetails && !error && !loading && (
        <ul className={css.reviews_list}>
          {reviews?.map((review, index) => (
            <li className={css.reviews_list_item} key={index}>
              <div className={css.container}>
                <h2 className={css.avatar}>
                  {review?.reviewer_name?.slice(0, 1)}
                </h2>
                <div className={css.rating_container}>
                  <p className={css.name}>{review?.reviewer_name}</p>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={clsx(
                        css.default,
                        i < review?.reviewer_rating && css.icon_rating
                      )}
                    >
                      <use href="/svgSprite.svg#icon-starDefault"></use>
                    </svg>
                  ))}
                </div>
              </div>
              <p className={css.comment}>{review?.comment}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CamperReviews;
