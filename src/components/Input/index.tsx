import React, { InputHTMLAttributes, useEffect, useRef, useState } from 'react'
import { useField } from '@unform/core'

import { FiAlertCircle } from 'react-icons/fi'
import { IconBaseProps } from 'react-icons'

import * as Styles from './styles'

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  name: string
  required?: boolean
  InputContainerStyle?: React.CSSProperties
  InitialText?: string
  iconLeft?: React.ComponentType<IconBaseProps>
  iconRight?: React.ComponentType<IconBaseProps>
  value?: string
  readonly?: boolean
  currency?: string
}

const Input: React.FC<IInput> = ({
  label,
  name,
  required,
  InputContainerStyle,
  InitialText,
  iconLeft: IconLeft,
  iconRight: IconRight,
  ...props
}) => {
  const inputRef = useRef(null)
  const { fieldName, error, registerField } = useField(name)
  const [isFocused] = useState(false)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])
  return (
    <Styles.ContainerInput
      alertError={!!error}
      isFocus={isFocused}
      style={InputContainerStyle}
    >
      {label && (
        <label htmlFor={name}>
          {label}: {required && <span>*</span>}
        </label>
      )}
      <div>
        {InitialText ? (
          <Styles.InitialTextContainer>
            {InitialText}
          </Styles.InitialTextContainer>
        ) : (
          IconLeft && <IconLeft size={20} />
        )}
        <input ref={inputRef} name={name} {...props} />

        {error ? (
          <Styles.InputError title={error}>
            <FiAlertCircle />
          </Styles.InputError>
        ) : IconRight ? (
          <IconRight size={20} />
        ) : (
          ''
        )}
      </div>
    </Styles.ContainerInput>
  )
}

export default React.memo(Input)
