import clsx from 'clsx';
import css from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({
  children,
  type = 'button',
  variant,
  selected = false,
  ...otherProps
}) => {
  return (
    <button
      className={clsx(css[variant], selected && css.isSelected)}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  handleClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
