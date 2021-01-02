import * as Yup from 'yup'

export const signUpSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .required('E-mail is required')
    .email('Enter a valid email address'),
  password: Yup.string().required('Password is required')
})
