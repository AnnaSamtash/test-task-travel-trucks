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
export default CustomDatePicker;
