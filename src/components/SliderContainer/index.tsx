import React from 'react'
import SlickSlider, { Settings } from 'react-slick'
import * as Styles from './styles'

export type SliderSettings = Settings

export type SliderProps = {
  children: React.ReactNode
  settings: SliderSettings
}

const SliderContainer = ({ children, settings, ...props }: SliderProps) => {
  return (
    <Styles.Container {...props}>
      <SlickSlider {...settings}>{children}</SlickSlider>
    </Styles.Container>
  )
}

export default SliderContainer
