import React from 'react'
import { AuthProvider } from '@/hooks/AuthHook'
import { LoadingProvider } from '@/hooks/LoadingHook'
import { ToastProvider } from '@/hooks/ToastHook'

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <LoadingProvider>
        <ToastProvider>{children}</ToastProvider>
      </LoadingProvider>
    </AuthProvider>
  )
}

export default AppProvider
