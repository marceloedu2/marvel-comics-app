import * as Yup from 'yup'

export const UserUpdateSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .required('E-mail is required')
    .email('Enter a valid email address'),
  oldPassword: Yup.string(),
  password: Yup.string().when('oldPassword', {
    is: (val: string) => !!val.length,
    then: Yup.string().required('Password is required'),
    otherwise: Yup.string()
  }),
  passwordConfirmation: Yup.string()
    .when('oldPassword', {
      is: (val: string) => !!val.length,
      then: Yup.string().required('Password is required'),
      otherwise: Yup.string()
    })
    .oneOf([Yup.ref('password'), null], 'Incorrect confirmation')
})
