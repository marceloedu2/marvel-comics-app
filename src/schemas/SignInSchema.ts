import * as Yup from 'yup'

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .required('E-mail is required')
    .email('Enter a valid email address'),
  password: Yup.string().required('Password is required')
})
