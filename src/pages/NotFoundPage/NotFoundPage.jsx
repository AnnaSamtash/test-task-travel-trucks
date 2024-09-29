import css from './NotFoundPage.module.css';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <p className={css.error}>
      An error occurred! Please go to{' '}
      <Link to="/" className={css.link}>
        Home page
      </Link>
    </p>
  );
};

export default NotFoundPage;
