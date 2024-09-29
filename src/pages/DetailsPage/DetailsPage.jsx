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
import { openModal } from '../../redux/modal/slice';

const DetailsPage = () => {
  const { id } = useParams();
  const camperLocation = useLocation();
  const backLinkHref = useRef(camperLocation.state ?? '/');
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const camperDetails = useSelector(selectCamperDetails);
  const dispatch = useDispatch();

  const { name, price, rating, location, description, gallery, reviews } =
    camperDetails;

  useEffect(() => {
    if (!id) return;
    dispatch(fetchCamperById(id));
  }, [id]);

  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  // устанавливаем цвет звезды в зависимости от наличия рейтинга
  const getStarClass = rating =>
    clsx(css.default, rating > 0 && css.icon_rating);

  return (
    <div className={css.wrapper}>
      <DocumentTitle>DetailsPage</DocumentTitle>
      <BackLink to={backLinkHref.current}>Go back</BackLink>
      {loading && <Loader />}
      {error && <NotFoundPage />}
      {camperDetails && (
        <div>
          <section className={css.info_wrapper}>
            <h1 className={css.visually_hidden}>Base information</h1>
            <h2 className={css.title}>{name}</h2>
            <div className={css.rating_container}>
              <svg className={getStarClass(rating)}>
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
            <h2 className={css.price}>{`\u20AC${price}.00`}</h2>
            <div className={css.img_container}>
              {gallery && gallery?.length >= 3 && (
                <>
                  <div className={css.tumb}>
                    <img
                      className={css.img}
                      src={gallery[0]?.thumb}
                      alt={name}
                      onClick={() =>
                        dispatch(
                          openModal({
                            img: [
                              gallery[0]?.original,
                              gallery[1]?.original,
                              gallery[2]?.original,
                            ],
                            alt: [
                              `Photo ${name} - 1`,
                              `Photo ${name} - 2`,
                              `Photo ${name} - 3`,
                            ],
                          })
                        )
                      }
                      loading="lazy"
                    />
                  </div>
                  <div className={css.tumb}>
                    <img
                      className={css.img}
                      src={gallery[1]?.thumb}
                      alt={name}
                      onClick={() =>
                        dispatch(
                          openModal({
                            img: [
                              gallery[1]?.original,
                              gallery[2]?.original,
                              gallery[0]?.original,
                            ],
                            alt: [
                              `Photo ${name} - 2`,
                              `Photo ${name} - 3`,
                              `Photo ${name} - 1`,
                            ],
                          })
                        )
                      }
                      loading="lazy"
                    />
                  </div>
                  <div className={css.tumb}>
                    <img
                      className={css.img}
                      src={gallery[2]?.thumb}
                      alt={name}
                      onClick={() =>
                        dispatch(
                          openModal({
                            img: [
                              gallery[2]?.original,
                              gallery[0]?.original,
                              gallery[1]?.original,
                            ],
                            alt: [
                              `Photo ${name} - 3`,
                              `Photo ${name} - 1`,
                              `Photo ${name} - 2`,
                            ],
                          })
                        )
                      }
                      loading="lazy"
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
                <p className={css.text_form}>
                  Stay connected! We are always ready to help you.
                </p>
                <RequestForm />
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
