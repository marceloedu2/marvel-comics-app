import React from 'react'
import * as Styles from './styles'
import SearchButton from '@/components/SearchButton'

type CardsContainerProps = {
  title: string
  children: React.ReactNode
  onClickSearch?: (title: string) => void
}

const CardsContainer = ({
  title,
  onClickSearch,
  children
}: CardsContainerProps) => {
  return (
    <Styles.Container>
      <Styles.TitleContent>
        <h2>{title}</h2>
        {onClickSearch && <SearchButton onClick={onClickSearch} />}
      </Styles.TitleContent>
      <Styles.ChildrenContent>{children}</Styles.ChildrenContent>
    </Styles.Container>
  )
}

export default CardsContainer
