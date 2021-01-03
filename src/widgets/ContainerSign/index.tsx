import React, { RefObject } from 'react'
import * as Styles from './styles'
import { FormHandles } from '@unform/core'

interface IContainerSign {
  children: React.ReactNode
  title: string
  formRef: RefObject<FormHandles>
  onSubmit: (data: any) => void
}

const ContainerSign = ({ children, title, ...props }: IContainerSign) => {
  return (
    <Styles.Container>
      <img src="/img/marvel.svg" alt="Marvel" />
      <h3>{title}</h3>
      <Styles.ContentForm ref={props.formRef} onSubmit={props.onSubmit}>
        {children}
      </Styles.ContentForm>
    </Styles.Container>
  )
}

export default ContainerSign
