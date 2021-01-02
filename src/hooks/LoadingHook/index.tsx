import React, { createContext, useContext, useState } from 'react'

interface ILoadingContextData {
  loading: boolean
  setLoading(index: boolean): void
}

const LoadingHook = createContext<ILoadingContextData>(
  {} as ILoadingContextData
)

const LoadingProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <LoadingHook.Provider
      value={{
        loading,
        setLoading
      }}
    >
      {children}
    </LoadingHook.Provider>
  )
}

const useLoading = (): ILoadingContextData => {
  const context = useContext(LoadingHook)

  if (!context) {
    console.log('useLoading must be used within an loadingProvider')
  }

  return context
}

export { LoadingProvider, useLoading }
