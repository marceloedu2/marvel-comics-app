import * as Yup from 'yup'

export const UserUpdateSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .required('E-mail is required')
    .email('Enter a valid email address'),
  oldPassword: Yup.string(),
  password: Yup.string().when('oldPassword', {
    is: (val: string) => !!val.length,
    then: Yup.string()
      .required('Password is required')
      .min(6, 'At least 6 characters'),
    otherwise: Yup.string()
  }),
  passwordConfirmation: Yup.string()
    .when('oldPassword', {
      is: (val: string) => !!val.length,
      then: Yup.string()
        .required('Password is required')
        .min(6, 'At least 6 characters'),
      otherwise: Yup.string()
    })
    .oneOf([Yup.ref('password'), null], 'Incorrect confirmation')
})
