import { Link } from 'react-router-dom';
import css from './PageLink.module.css';
import PropTypes from 'prop-types';

const PageLink = ({ to, state, style, children }) => {
  return (
    <Link className={css.link} to={to} state={state} style={style}>
      {children}
    </Link>
  );
};

PageLink.propTypes = {
  to: PropTypes.string.isRequired,
  state: PropTypes.object,
  style: PropTypes.object,
  children: PropTypes.node,
};

export default PageLink;
