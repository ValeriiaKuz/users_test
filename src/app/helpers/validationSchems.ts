import * as Yup from 'yup';

export const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Minimum length is 2 characters')
    .max(30, 'Maximum length is 30 characters')
    .trim()
    .required('Field is required'),
  username: Yup.string()
    .min(5, 'Minimum length is 5 characters')
    .max(15, 'Maximum length is 15 characters')
    .trim()
    .required('Field is required'),
  email: Yup.string()
    .email('Invalid email')
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Incorrect email')
    .trim()
    .required('Field is required')
});
