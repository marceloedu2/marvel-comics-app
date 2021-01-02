import React from 'react'
import * as Styles from './styles'

type DefaultTemplateProps = {
  children: React.ReactNode
}

const DefaultTemplate = ({ children }: DefaultTemplateProps) => {
  return <Styles.Container>{children}</Styles.Container>
}

export default DefaultTemplate
