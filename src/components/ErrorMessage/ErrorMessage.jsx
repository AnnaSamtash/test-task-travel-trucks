import css from './ErrorMessage.module.css';

const ErrorMessage = ({ children }) => {
  return <p className={css.error}>{children}</p>;
};

export default ErrorMessage;
