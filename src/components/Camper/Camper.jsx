import css from './Camper.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import {
  removeCamperFromSelected,
  setCamperSelected,
} from '../../redux/campers/slice';
import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';
import { selectSelectedCampers } from '../../redux/campers/selectors';

export default function Camper({ props }) {
  const dispatch = useDispatch();
  const camperLocation = useLocation();
  const selectedCampers = useSelector(selectSelectedCampers);

  const {
    id,
    name,
    price,
    rating,
    location,
    description,
    transmission,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    gas,
    gallery,
    reviews,
  } = props;

  const isSelected = selectedCampers.some(camper => camper.id === id);

  return (
    <div className={css.container}>
      <div className={css.tumb}>
        <img className={css.img} src={gallery[0]?.thumb} alt="name" />
      </div>
      <div className={css.info_container}>
        <div className={css.first_container}>
          <h2 className={css.title}>{name}</h2>
          <h2 className={css.price}>{`\u20AC${price},00`}</h2>
          <Button
            variant="select"
            selected={isSelected}
            onClick={() =>
              isSelected
                ? dispatch(removeCamperFromSelected({ id }))
                : dispatch(setCamperSelected({ ...props, selected: true }))
            }
          >
            <svg className={css.icon}>
              <use href="/svgSprite.svg#icon-heartDefault"></use>
            </svg>
          </Button>
        </div>

        <div className={css.second_container}>
          <svg className={clsx(css.default, rating > 0 && css.icon_rating)}>
            <use href="/svgSprite.svg#icon-starDefault"></use>
          </svg>
          <p
            className={css.rating}
          >{`${rating}(${reviews?.length} Reviews)`}</p>
          <svg className={css.icon_map}>
            <use href="/svgSprite.svg#icon-Map"></use>
          </svg>
          <p className={css.location}>
            {location?.replace(/(\w+), (\w+)/, '$2, $1')}
          </p>
        </div>

        <p className={css.descr}>{description?.slice(0, 60)}...</p>

        <div className={css.third_container}>
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
        <Link className={css.link} to={`/catalog/${id}`} state={camperLocation}>
          Show more
        </Link>
      </div>
    </div>
  );
}
