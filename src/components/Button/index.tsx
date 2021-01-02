import React, { ButtonHTMLAttributes } from 'react'
import * as Styles from './styles'

import { FaSpinner } from 'react-icons/fa'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  color?: string
}

const Button: React.FC<IButton> = ({ loading, color, children, ...rest }) => {
  return (
    <Styles.ContainerButton {...rest} color={color}>
      {loading ? (
        <Styles.ButtonSpinner>
          <FaSpinner />
        </Styles.ButtonSpinner>
      ) : (
        children
      )}
    </Styles.ContainerButton>
  )
}

export default React.memo(Button)
