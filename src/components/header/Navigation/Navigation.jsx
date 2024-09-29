import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <nav className={css.container}>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>

      <NavLink className={buildLinkClass} to="/catalog">
        Catalog
      </NavLink>
    </nav>
  );
};

export default Navigation;
