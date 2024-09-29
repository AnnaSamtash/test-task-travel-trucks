import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SharedLayout from './components/SharedLayout/SharedLayout.jsx';
import {
  selectModalImageAlt,
  selectModalImageSrc,
  selectModalIsOpen,
} from './redux/modal/selectors.js';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from './redux/modal/slice.js';
import ImageModal from './components/ImageModal/ImageModal.jsx';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage.jsx'));
const DetailsPage = lazy(() => import('./pages/DetailsPage/DetailsPage.jsx'));
const CamperFeatures = lazy(() =>
  import('./components/CamperFeatures/CamperFeatures.jsx')
);
const CamperReviews = lazy(() =>
  import('./components/CamperReviews/CamperReviews.jsx')
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage/NotFoundPage.jsx')
);

const App = () => {
  const modalIsOpen = useSelector(selectModalIsOpen);
  const modalImageSrc = useSelector(selectModalImageSrc);
  const modalImageAlt = useSelector(selectModalImageAlt);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: 'inline-flex',
        width: '100vw',
        height: '100vh',
        flexDirection: 'column',
      }}
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<DetailsPage />}>
            <Route path="features" element={<CamperFeatures />} />
            <Route path="reviews" element={<CamperReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          dispatch(closeModal());
        }}
        modalImageUrl={modalImageSrc}
        modalImageAlt={modalImageAlt}
      />
      <ToastContainer />
    </div>
  );
};

export default App;
