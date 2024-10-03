import PropTypes from 'prop-types';
import './CustomDatePicker.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = ({ field, form, ...props }) => {
  return (
    <DatePicker
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      onChange={val => {
        form.setFieldValue(field.name, val);
      }}
      placeholderText="Booking date*"
      formatWeekDay={nameOfDay => nameOfDay.substring(0, 3)}
      className="customDatePicker"
    />
  );
};

CustomDatePicker.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  }).isRequired,
  form: PropTypes.shape({
    setFieldValue: PropTypes.func.isRequired,
  }).isRequired,
  placeholderText: PropTypes.string,
  formatWeekDay: PropTypes.func,
  className: PropTypes.string,
};

export default CustomDatePicker;
