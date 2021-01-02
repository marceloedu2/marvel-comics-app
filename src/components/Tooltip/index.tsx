import React from 'react'
import * as Styles from './styles'

interface ITooltip {
  title: string
  className?: string
}

const Tooltip: React.FC<ITooltip> = ({ title, className, children }) => {
  return (
    <Styles.TooltipContainer className={className}>
      {children}
      <span>{title}</span>
    </Styles.TooltipContainer>
  )
}

export default Tooltip
