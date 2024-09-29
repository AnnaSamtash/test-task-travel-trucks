import clsx from 'clsx';
import css from './Button.module.css';

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
export default Button;
