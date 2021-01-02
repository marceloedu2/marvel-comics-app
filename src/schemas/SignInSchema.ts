import * as Yup from 'yup'

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .required('E-mail é obrigatório')
    .email('Digite um e-mail válido'),
  password: Yup.string().required('Senha é obrigatória')
})
