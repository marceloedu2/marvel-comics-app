import React from 'react'
import * as Styles from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS, e Styles Components'
}) => {
  return (
    <Styles.Wrapper>
      <Styles.Logo src="/img/logo.svg" alt="React Acançado" />
      <Styles.Title>{title}</Styles.Title>
      <Styles.Description>{description}</Styles.Description>
      <Styles.Illustration
        src="/img/hero-illustration.svg"
        alt="React Acançado"
      />
    </Styles.Wrapper>
  )
}

export default Main
