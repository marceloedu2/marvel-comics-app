import React, { useRef } from 'react'
import AuthTemplate from '@/template/AuthenticationTemplate'
import * as Yup from 'yup'
import getValidationErrors from '@/utils/getValidationErrors'
import { AuthState, useAuth } from '@/hooks/AuthHook'
import { useToast } from '@/hooks/ToastHook'
import { useRouter } from 'next/router'
import { FormHandles } from '@unform/core'
import { useLoading } from '@/hooks/LoadingHook'
import Input from '@/components/Input'
import Button from '@/components/Button'

import FromContainer from '@/widgets/FromContainer'
import { AvatarContainer } from '@/widgets/FromContainer/styles'

import { UserUpdateSchema } from '@/schemas/UserUpdateSchema'
import api from '@/services/api'

type UserProps = {
  name: string
  email: string
  oldPassword: string
  password: string
  passwordConfirmation?: string
}

const Profile = () => {
  const formRef = useRef<FormHandles>(null)
  const router = useRouter()
  const { user, token, setUserData } = useAuth()
  const { loading, setLoading } = useLoading()
  const { addToast } = useToast()

  const handleSubmit = async ({
    name,
    email,
    password,
    oldPassword,
    passwordConfirmation
  }: UserProps) => {
    formRef.current?.setErrors({})
    try {
      setLoading(true)

      await UserUpdateSchema.validate(
        { name, email, password, oldPassword, passwordConfirmation },
        {
          abortEarly: false
        }
      )

      await api.put('/user', {
        id: user.id,
        name,
        email: email === user.email ? '' : email,
        password,
        oldPassword
      })
      await setUserData({
        token,
        user: { id: user.id, name, email }
      } as AuthState)

      router.push('/favorites').catch()
      setLoading(false)
      addToast({
        type: 'success',
        title: 'Information updated successfully'
      })
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        formRef.current?.setErrors(getValidationErrors(err))
        setLoading(false)
        return false
      }
      addToast({
        type: 'error',
        title: 'An error occurred while updating',
        description: err.message || 'unexpected error.'
      })
      setLoading(false)
      return false
    }
  }

  return (
    <AuthTemplate>
      <FromContainer formRef={formRef} onSubmit={handleSubmit}>
        <AvatarContainer>
          <img
            src="https://cdn.dribbble.com/users/957216/screenshots/4507653/thanosface.png?compress=1&resize=400x400"
            alt="My Avatar"
          />
        </AvatarContainer>
        <h3>My profile</h3>
        <br />
        <Input
          name="name"
          placeholder="Type your full name"
          defaultValue={user.name}
        />
        <Input
          name="email"
          placeholder="Type your E-mail"
          defaultValue={user.email}
        />
        <br />
        <Input
          type="password"
          name="oldPassword"
          placeholder="Current password"
        />

        <Input type="password" name="password" placeholder="New password" />

        <Input
          type="password"
          name="passwordConfirmation"
          placeholder="Confirm the new password"
        />

        <Button loading={loading} style={{ marginTop: 16, width: '100%' }}>
          Save changes
        </Button>
      </FromContainer>
    </AuthTemplate>
  )
}

export default Profile
