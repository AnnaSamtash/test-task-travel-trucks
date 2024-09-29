import css from './NotFoundPage.module.css';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <p className={css.error}>
      Please go to{' '}
      <Link to="/" className={css.link}>
        Home page
      </Link>
    </p>
  );
}
