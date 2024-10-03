import PropTypes from 'prop-types';
import css from './ErrorMessage.module.css';

const ErrorMessage = ({ children }) => {
  return <p className={css.error}>{children}</p>;
};

ErrorMessage.propTypes = {
  children: PropTypes.node,
};

export default ErrorMessage;
