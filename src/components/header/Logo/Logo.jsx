import { Link } from 'react-router-dom';
import css from './Logo.module.css';

const Logo = () => (
  <Link className={css.logo} to={'/'}>
    <svg className={css.logo_icon}>
      <use href="/svgSprite.svg#icon-TravelTrucks"></use>
    </svg>
  </Link>
);

export default Logo;
