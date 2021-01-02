import React, { RefObject } from 'react'
import * as Styles from './styles'
import { FormHandles } from '@unform/core'

type FromContainerProps = {
  children: React.ReactNode
  formRef: RefObject<FormHandles>
  onSubmit: (data: any) => Promise<boolean | undefined>
}

const FromContainer = ({ children, ...props }: FromContainerProps) => {
  return (
    <Styles.Container ref={props.formRef} {...props}>
      <Styles.Content>{children}</Styles.Content>
    </Styles.Container>
  )
}

export default FromContainer
