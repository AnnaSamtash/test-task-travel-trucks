import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import Button from '../Button/Button';
import css from './RequestForm.module.css';
import { postRequest } from '../../helpers/api-request';
import showToast from '../../helpers/showToast';
import CustomDatePicker from '../CustomDatePicker/CustomDatePicker';

export default function RequestForm() {
  const RequestFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    date: Yup.date().required('Required'),
    comment: Yup.string().min(3, 'Too Short!').max(150, 'Too Long!'),
  });

  const nameFieldId = useId();
  const emailFieldId = useId();
  const dateFieldId = useId();
  const commentFieldId = useId();

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        date: '',
        comment: '',
      }}
      onSubmit={(values, actions) => {
        const newRequest = {
          name: values.name,
          email: values.email,
          date: values.date,
          comment: values.comment,
        };
        postRequest(newRequest)
          .unwrap()
          .then(() => {
            showToast('Request successfully sent!', 'success');
            actions.resetForm();
          })
          .catch(() => {
            showToast('Request didn`t send!', 'error');
          });
        actions.resetForm();
      }}
      validationSchema={RequestFormSchema}
    >
      <Form className={css.form}>
        <div className={css.container}>
          <div className={css.form_input_container}>
            <label className={css.visually_hidden} htmlFor={nameFieldId}>
              Name
            </label>
            <Field
              className={css.form_input}
              type="text"
              name="name"
              id={nameFieldId}
              placeholder="Name*"
            />
            <ErrorMessage
              className={css.form_error}
              name="name"
              component="span"
            />
          </div>

          <div className={css.form_input_container}>
            <label className={css.visually_hidden} htmlFor={emailFieldId}>
              Email
            </label>
            <Field
              className={css.form_input}
              type="email"
              name="email"
              id={emailFieldId}
              placeholder="Email*"
            />
            <ErrorMessage
              className={css.form_error}
              name="email"
              component="span"
            />
          </div>

          <div className={css.form_input_container}>
            <label className={css.visually_hidden} htmlFor={dateFieldId}>
              Date
            </label>
            <Field
              className={css.form_input}
              component={CustomDatePicker}
              name="date"
              id={dateFieldId}
            />
            <ErrorMessage
              className={css.form_error}
              name="date"
              component="span"
            />
          </div>

          <div className={css.form_input_container}>
            <label className={css.visually_hidden} htmlFor={commentFieldId}>
              Comment
            </label>
            <Field
              className={css.form_input}
              as="textarea"
              name="comment"
              id={commentFieldId}
              rows="5"
              placeholder="Comment"
              style={{ height: 118, resize: 'none' }}
            />
            <ErrorMessage
              className={css.form_error}
              name="comment"
              component="span"
            />
          </div>
        </div>
        <Button
          type="submit"
          variant="btn"
          style={{ display: 'block', margin: '0 auto' }}
        >
          Send
        </Button>
      </Form>
    </Formik>
  );
}
