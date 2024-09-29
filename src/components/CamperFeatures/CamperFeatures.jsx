import css from './CamperFeatures.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCamperDetails,
  selectError,
  selectLoading,
} from '../../redux/campers/selectors';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchCamperById } from '../../redux/campers/operations';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const CamperFeatures = () => {
  const { id } = useParams();
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const camperDetails = useSelector(selectCamperDetails);
  const dispatch = useDispatch();

  const {
    form,
    length,
    width,
    height,
    tank,
    consumption,
    transmission,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    gas,
  } = camperDetails;

  useEffect(() => {
    if (!id) return;
    dispatch(fetchCamperById(id));
  }, [id]);

  return (
    <div className={css.common_wrapper}>
      {loading && <Loader />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {camperDetails && !error && !loading && (
        <>
          <div className={css.first_container}>
            <div className={css.category_container}>
              {transmission === 'automatic' && (
                <div className={css.category}>
                  <svg className={css.icon_category}>
                    <use href="/svgSprite.svg#icon-diagram"></use>
                  </svg>
                  <p className={css.text_category}>Automatic</p>
                </div>
              )}
              {gas && (
                <div className={css.category}>
                  <svg className={css.icon_category}>
                    <use href="/svgSprite.svg#icon-fuel-pump"></use>
                  </svg>
                  <p className={css.text_category}>Petrol</p>
                </div>
              )}
              {kitchen && (
                <div className={css.category}>
                  <svg className={css.icon_category}>
                    <use href="/svgSprite.svg#icon-cup-hot"></use>
                  </svg>
                  <p className={css.text_category}>Kitchen</p>
                </div>
              )}
              {AC && (
                <div className={css.category}>
                  <svg className={css.icon_category}>
                    <use href="/svgSprite.svg#icon-wind"></use>
                  </svg>
                  <p className={css.text_category}>AC</p>
                </div>
              )}
              {TV && (
                <div className={css.category}>
                  <svg className={css.icon_category}>
                    <use href="/svgSprite.svg#icon-tv"></use>
                  </svg>
                  <p className={css.text_category}>TV</p>
                </div>
              )}
              {radio && (
                <div className={css.category}>
                  <svg className={css.icon_category}>
                    <use href="/svgSprite.svg#icon-ui-radios"></use>
                  </svg>
                  <p className={css.text_category}>Radio</p>
                </div>
              )}
              {bathroom && (
                <div className={css.category}>
                  <svg className={css.icon_category}>
                    <use href="/svgSprite.svg#icon-bi_droplet"></use>
                  </svg>
                  <p className={css.text_category}>Bathroom</p>
                </div>
              )}
            </div>
            <div>
              <h3 className={css.title}>Vehicle details</h3>
              <ul className={css.details_list}>
                <li>
                  <div className={css.item}>
                    <p>Form</p>
                    <p>{form}</p>
                  </div>
                </li>
                <li>
                  <div className={css.item}>
                    <p>Length</p>
                    <p>{length}</p>
                  </div>
                </li>
                <li>
                  <div className={css.item}>
                    <p>Width</p>
                    <p>{width}</p>
                  </div>
                </li>
                <li>
                  <div className={css.item}>
                    <p>Height</p>
                    <p>{height}</p>
                  </div>
                </li>
                <li>
                  <div className={css.item}>
                    <p>Tank</p>
                    <p>{tank}</p>
                  </div>
                </li>
                <li>
                  <div className={css.item}>
                    <p>Consumption</p>
                    <p>{consumption}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CamperFeatures;
