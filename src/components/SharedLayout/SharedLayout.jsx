import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from '.././header/AppBar/AppBar.jsx';
import css from './SharedLayout.module.css';
import Loader from '../Loader/Loader.jsx';

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <main className={css.main}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
