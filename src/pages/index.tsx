import React, { useRef } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import * as Yup from 'yup'
import { FormHandles } from '@unform/core'
import DefaultTemplate from '@/template/DefaultTemplate'
import { SignInCredentials, useAuth } from '@/hooks/AuthHook'
import { useToast } from '@/hooks/ToastHook'
import { useLoading } from '@/hooks/LoadingHook'
import { signInSchema } from '@/schemas/SignInSchema'

import ContainerSign from '@/widgets/ContainerSign'

import Input from '@/components/Input'
import Button from '@/components/Button'

import getValidationErrors from '@/utils/getValidationErrors'

const Login = () => {
  const router = useRouter()
  const formRef = useRef<FormHandles>(null)
  const { signIn } = useAuth()
  const { addToast } = useToast()
  const { loading, setLoading } = useLoading()

  const handleSubmit = async ({ email, password }: SignInCredentials) => {
    formRef.current?.setErrors({})
    try {
      setLoading(true)

      await signInSchema.validate(
        { email, password },
        {
          abortEarly: false
        }
      )

      await signIn({ email, password })
      setLoading(false)
      return router.push('/favorites')
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        formRef.current?.setErrors(getValidationErrors(err))
        setLoading(false)
        return false
      }
      addToast({
        type: 'error',
        title: 'Authentication error',
        description:
          err.message ||
          'There was an error signing in, check your credentials.'
      })
      setLoading(false)
      return false
    }
  }
  return (
    <DefaultTemplate>
      <ContainerSign title="Sign In" formRef={formRef} onSubmit={handleSubmit}>
        <Input name="email" placeholder="Type your e-mail" />
        <Input
          type="password"
          name="password"
          placeholder="Type your password"
        />
        <Button type="submit" style={{ marginTop: 16 }} loading={loading}>
          Sign in
        </Button>
        <p>
          New customer?
          <Link href="/register">
            <a>Start here.</a>
          </Link>
        </p>
      </ContainerSign>
    </DefaultTemplate>
  )
}

export default Login
