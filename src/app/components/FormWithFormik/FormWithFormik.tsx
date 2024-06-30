import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import styles from '../UserForm/UserForm.module.css';
export const FormWithFormik = () => {
  const UserSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Minimum length is 2 characters')
      .max(30, 'Maximum length is 30 characters')
      .required('Field is required'),
    userName: Yup.string()
      .min(5, 'Minimum length is 5 characters')
      .max(15, 'Maximum length is 15 characters')
      .required('Field is required'),
    email: Yup.string()
      .email('Invalid email')
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Incorrect email')
      .required('Field is required')
  });

  return (
    <Formik
      initialValues={{ email: '', name: '', userName: '' }}
      onSubmit={() => console.log('submit')}
      validationSchema={UserSchema}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className={styles.user_form}>
          <Field type="text" name="name" placeholder="Name" className={styles.user_form__input} />
          {touched.name && errors.name && <div>{errors.name}</div>}
          <Field type="text" name="userName" placeholder="UserName" className={styles.user_form__input} />
          {touched.userName && errors.userName && <div>{errors.userName}</div>}
          <Field type="email" name="email" placeholder="Email" className={styles.user_form__input} />
          {touched.email && errors.email && <div>{errors.email}</div>}
          <button type="submit" disabled={isSubmitting} className={`button ${styles.user_form__button}`}>
            Create user
          </button>
        </Form>
      )}
    </Formik>
  );
};
