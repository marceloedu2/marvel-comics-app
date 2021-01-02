import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'
import api from '@/services/api'
import { useRouter } from 'next/router'

export interface User {
  id: string
  email: string
  name: string
  avatar: string
  profile: number
}

export interface AuthState {
  token: string
  user: User
}

export interface SignInCredentials {
  email: string
  password: string
}

export interface SignUpCredentials {
  name: string
  email: string
  password: string
}

interface AuthContextData {
  user: User
  setUserData: Dispatch<SetStateAction<AuthState>>
  token: string
  signIn(credentials: SignInCredentials): Promise<void>
  signUp(credentials: SignUpCredentials): Promise<SignUpCredentials>
  signOut(): void
}

const AuthHook = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC = ({ children }) => {
  const router = useRouter()

  const [data, setUserData] = useState<AuthState>(() => {
    const token =
      typeof Storage !== 'undefined' && localStorage.getItem('@marvel:token')
    const user =
      typeof Storage !== 'undefined' && localStorage.getItem('@marvel:user')

    api.defaults.headers['Authorization'] = `Bearer ${token}`

    return token && user ? { token, user: JSON.parse(user) } : ({} as AuthState)
  })

  useEffect(() => {
    const token =
      typeof Storage !== 'undefined' && localStorage.getItem('@marvel:token')
    const user =
      typeof Storage !== 'undefined' && localStorage.getItem('@marvel:user')
    api.defaults.headers.Authorization = `Bearer ${token}`

    if (token && user) {
      setUserData({ token, user: JSON.parse(user) })
      if (router.pathname === '/') {
        router.push('/favorites').catch()
      }
    } else {
      router.push('/').catch()
    }
  }, [])

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('user/login', {
      email,
      password
    })

    const { token, user } = response.data

    localStorage.setItem('@marvel:token', token)
    localStorage.setItem('@marvel:user', JSON.stringify(user))

    setUserData({ token, user })

    api.defaults.headers['Authorization'] = `Bearer ${token}`
  }, [])

  const signUp = useCallback(async ({ name, email, password }) => {
    const response = await api.post('user/register', {
      name,
      email,
      password
    })

    return response.data
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem('@marvel:token')
    localStorage.removeItem('@marvel:user')
    router.push('/').catch()
  }, [router])

  return (
    <AuthHook.Provider
      value={{
        user: data.user,
        setUserData,
        token: data.token,
        signIn,
        signUp,
        signOut
      }}
    >
      {children}
    </AuthHook.Provider>
  )
}

const useAuth = (): AuthContextData => {
  const context = useContext(AuthHook)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}

export { AuthProvider, useAuth }
