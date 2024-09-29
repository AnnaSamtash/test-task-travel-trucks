import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import { Suspense, useEffect, useRef } from 'react';
import css from './DetailsPage.module.css';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCamperDetails,
  selectError,
  selectLoading,
} from '../../redux/campers/selectors';
import { fetchCamperById } from '../../redux/campers/operations';
import Loader from '../../components/Loader/Loader';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import BackLink from '../../components/BackLink/BackLink';
import RequestForm from '../../components/RequestForm/RequestForm';

export default function DetailsPage() {
  const { id } = useParams();
  const camperLocation = useLocation();
  const backLinkHref = useRef(camperLocation.state ?? '/');
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const camperDetails = useSelector(selectCamperDetails);
  const dispatch = useDispatch();

  const {
    // id: camperId,
    name,
    price,
    rating,
    location,
    description,
    // transmission,
    // AC,
    // bathroom,
    // kitchen,
    // TV,
    // radio,
    // gas,
    gallery,
    reviews,
  } = camperDetails;

  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  useEffect(() => {
    if (!id) return;
    dispatch(fetchCamperById(id));
  }, [id]);

  return (
    <div className={css.wrapper}>
      <DocumentTitle>DetailsPage</DocumentTitle>
      <BackLink to={backLinkHref.current}>Go back</BackLink>
      {loading && <Loader />}
      {error && <NotFoundPage>{error}</NotFoundPage>}
      {camperDetails && (
        <div>
          <section className={css.info_wrapper}>
            <h1 className={css.visually_hidden}>Base information</h1>
            <h2 className={css.title}>{name}</h2>
            <div className={css.rating_container}>
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
            <h2 className={css.price}>{`\u20AC${price},00`}</h2>
            <div className={css.img_container}>
              {gallery && gallery.length >= 3 && (
                <>
                  <div className={css.tumb}>
                    <img
                      className={css.img}
                      src={gallery[0]?.thumb}
                      alt={name}
                    />
                  </div>
                  <div className={css.tumb}>
                    <img
                      className={css.img}
                      src={gallery[1]?.thumb}
                      alt={name}
                    />
                  </div>
                  <div className={css.tumb}>
                    <img
                      className={css.img}
                      src={gallery[2]?.thumb}
                      alt={name}
                    />
                  </div>
                </>
              )}
            </div>
            <p className={css.descr}>{description}</p>
          </section>
          <section className={css.add}>
            <h1 className={css.visually_hidden}>Additional information</h1>
            <ul className={css.links_list}>
              <li className={css.link}>
                <NavLink to="features" className={buildLinkClass}>
                  <h3>Features</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to="reviews" className={buildLinkClass}>
                  <h3>Reviews</h3>
                </NavLink>
              </li>
            </ul>
            <div className={css.common_wrapper}>
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
              <div className={css.second_container}>
                <h3 className={css.title_form}>Book your campervan now</h3>
                <p className={css.text_form}>Book your campervan now</p>
                <RequestForm />
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
