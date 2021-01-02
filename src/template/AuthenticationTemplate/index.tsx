import React from 'react'
import * as Styles from './styles'
import NavBar from '@/widgets/NavBar'

type AuthTemplate = {
  children: React.ReactNode
}

const AuthTemplate = ({ children }: AuthTemplate) => {
  return (
    <Styles.Container>
      <NavBar />
      <Styles.Content>{children}</Styles.Content>
    </Styles.Container>
  )
}

export default AuthTemplate
