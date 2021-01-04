import React, { useRef } from 'react'
import DefaultTemplate from '@/template/DefaultTemplate'
import ContainerSign from '@/widgets/ContainerSign'
import { FormHandles } from '@unform/core'
import Link from 'next/link'
import * as Yup from 'yup'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { useLoading } from '@/hooks/LoadingHook'
import { useToast } from '@/hooks/ToastHook'
import { SignUpCredentials, useAuth } from '@/hooks/AuthHook'
import { useRouter } from 'next/router'
import { signUpSchema } from '@/schemas/SignUpShema'
import getValidationErrors from '@/utils/getValidationErrors'

const Register = () => {
  const formRef = useRef<FormHandles>(null)
  const router = useRouter()
  const { signUp } = useAuth()
  const { loading, setLoading } = useLoading()
  const { addToast } = useToast()

  const handleSubmit = async ({ name, email, password }: SignUpCredentials) => {
    formRef.current?.setErrors({})
    try {
      setLoading(true)

      await signUpSchema.validate(
        { name, email, password },
        {
          abortEarly: false
        }
      )

      const user = await signUp({ name, email, password })
      setLoading(false)
      addToast({
        type: 'success',
        title: 'Successfully created your account',
        description: `Welcome ${user.name}, use the email and password created and enjoy your comics!`
      })
      return router.push('/')
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        formRef.current?.setErrors(getValidationErrors(err))
        setLoading(false)
        return false
      }
      addToast({
        type: 'error',
        title: 'Create to account error',
        description:
          'There was an error creating your account, your credentials.'
      })
      setLoading(false)
      return false
    }
  }

  return (
    <DefaultTemplate>
      <ContainerSign
        title="Create account"
        formRef={formRef}
        onSubmit={handleSubmit}
      >
        <Input name="name" placeholder="Type your full name" />
        <Input name="email" placeholder="Type your E-mail" />
        <Input
          type="password"
          name="password"
          placeholder="Type your password"
        />

        <Button loading={loading} style={{ marginTop: 16 }}>
          Create your Marvel account
        </Button>
        <p>
          Already have an account?
          <Link href="/">
            <a>Sign-In.</a>
          </Link>
        </p>
      </ContainerSign>
    </DefaultTemplate>
  )
}

export default Register
