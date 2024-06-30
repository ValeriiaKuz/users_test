import { ErrorMessage, Field, Form, Formik } from 'formik';
import styles from './UserForm.module.css';
import { useAppDispatch } from '../../utiles/hooks';
import { createUserAction } from '../../utiles/slice';
import { UserSchema } from '../../helpers/validationSchems';
import type { UserType } from '../../types/userTypes';
import type { InputProps } from '../../types/inputTypes';

const TextInput = ({ name, type, placeholder }: InputProps) => (
  <div className={styles.input_wrapper}>
    <Field
      type={type}
      name={name}
      placeholder={placeholder}
      aria-label={placeholder}
      className={styles.user_form__input}
    />
    <ErrorMessage name={name} component="div" className={styles.error} />
  </div>
);

export const FormWithFormik = () => {
  const dispatch = useAppDispatch();
  const initialValues: Omit<UserType, 'id'> = { email: '', name: '', username: '' };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values: typeof initialValues, { resetForm }) => {
        dispatch(createUserAction(values));
        resetForm();
      }}
      validationSchema={UserSchema}
    >
      {({ isSubmitting }) => (
        <Form className={styles.user_form}>
          <TextInput name="name" type="text" placeholder="Name" />
          <TextInput name="username" type="text" placeholder="Username" />
          <TextInput name="email" type="email" placeholder="Email" />
          <button type="submit" disabled={isSubmitting} className={`button ${styles.user_form__button}`}>
            Create user
          </button>
        </Form>
      )}
    </Formik>
  );
};
