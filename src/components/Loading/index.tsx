import React from 'react'
import * as Styles from './styles'
import { FaSpinner } from 'react-icons/fa'

const Loading: React.FC = () => {
  return (
    <Styles.LoadingContainer>
      <FaSpinner />
    </Styles.LoadingContainer>
  )
}

export default Loading
