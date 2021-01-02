import React from 'react'

import * as Styles from './styles'
import ToastContent from './ToastContent'
import { ToastMessages } from '@/hooks/ToastHook'
import { useTransition } from 'react-spring'

interface ToastProps {
  messages: ToastMessages[]
}

const Toast: React.FC<ToastProps> = ({ messages }) => {
  const messagesWithTransition = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 }
    }
  )
  return (
    <Styles.Container>
      {messagesWithTransition.map(({ item, key, props }) => (
        <ToastContent key={key} style={props} message={item} />
      ))}
    </Styles.Container>
  )
}

export default Toast
