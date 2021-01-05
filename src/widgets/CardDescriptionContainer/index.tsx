import React from 'react'
import * as Styles from './styles'

type CardProps = {
  title: string
  name: string
  description: string
  data: string
  liked: boolean
  image: string
}

const CardDescriptionContainer = ({
  title,
  name,
  description,
  data,
  liked,
  image
}: CardProps) => {
  return (
    <Styles.Container>
      <h2>{title}</h2>
      <div>
        <img src={image} alt={name} />
        <div>
          {name && (
            <>
              Name: <p style={{ fontSize: 22 }}>{name}</p>
            </>
          )}

          {description && (
            <>
              Description: <p>{description}</p>
            </>
          )}
          {data && (
            <>
              Date: <p>{data}</p>
            </>
          )}
          {liked && (
            <>
              liked: <p>{liked ? 'yes' : 'not'}</p>
            </>
          )}
        </div>
      </div>
    </Styles.Container>
  )
}

export default CardDescriptionContainer
