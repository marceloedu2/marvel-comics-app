import React from 'react'
import * as Styles from './styles'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { useRouter } from 'next/router'

type CardProps = {
  id: number
  title: string
  url: string
  imageUrl: string
  liked: boolean
  onClickLike: (data: { id: number; liked: boolean }) => void
}

const Card = ({ id, title, url, imageUrl, liked, onClickLike }: CardProps) => {
  const router = useRouter()

  const handleClinkCard = (event: any) => {
    if (event.target.id === 'img-div') router.push(url).catch()
  }

  return (
    <Styles.Container>
      <Styles.ImageContainer
        id="img-div"
        imgUrl={imageUrl}
        onClick={event => handleClinkCard(event)}
      >
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
