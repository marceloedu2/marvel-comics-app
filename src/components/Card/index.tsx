import React from 'react'
import * as Styles from './styles'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'

type CardProps = {
  id: number
  title: string
  url: string
  liked: boolean
  onClickLike: (data: { id: number; liked: boolean }) => void
}

const Card = ({ id, title, url, liked, onClickLike }: CardProps) => {
  return (
    <Styles.Container>
      <Styles.ImageContainer imgUrl={url}>
        <Styles.ButtonFavorite
          type="button"
          onClick={() => onClickLike({ id, liked: !liked })}
        >
          {liked ? <MdFavorite /> : <MdFavoriteBorder />}
        </Styles.ButtonFavorite>
      </Styles.ImageContainer>
      <Styles.info>
        <h3>{title}</h3>
      </Styles.info>
    </Styles.Container>
  )
}

export default Card
